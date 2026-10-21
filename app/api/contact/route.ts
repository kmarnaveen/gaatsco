import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { google } from "googleapis";

const LIMITS = { name: 100, phone: 30, email: 200, service: 100, message: 2000, page: 300 } as const;
const ATTRIBUTION_FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "click_id",
  "referrer",
  "landing_page",
] as const;

type Lead = {
  submittedAt: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  page: string;
  attribution: Record<(typeof ATTRIBUTION_FIELDS)[number], string>;
};

const clean = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

async function appendToGoogleSheet(lead: Lead) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Columns A–F keep their original order; G onward record where the lead came from.
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:O",
      // RAW so a submitted value like "=HYPERLINK(...)" is stored as text, never run as a formula.
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            lead.submittedAt,
            lead.name,
            lead.email,
            lead.phone,
            lead.service,
            lead.message,
            lead.page,
            ...ATTRIBUTION_FIELDS.map((field) => lead.attribution[field]),
          ],
        ],
      },
    });

    return true;
  } catch (error) {
    console.error("Error writing to Google Sheets:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Honeypot: real visitors never see or fill this field. Pretend success so bots move on.
    if (clean(data.company, 200)) {
      return NextResponse.json({ success: true }, { status: 201 });
    }

    const rawAttribution = typeof data.attribution === "object" && data.attribution ? data.attribution : {};
    const lead: Lead = {
      submittedAt: new Date().toISOString(),
      name: clean(data.name, LIMITS.name),
      email: clean(data.email, LIMITS.email),
      phone: clean(data.phone, LIMITS.phone),
      service: clean(data.service, LIMITS.service),
      message: clean(data.message, LIMITS.message),
      page: clean(data.page, LIMITS.page),
      attribution: Object.fromEntries(
        ATTRIBUTION_FIELDS.map((field) => [field, clean(rawAttribution[field], LIMITS.page)]),
      ) as Lead["attribution"],
    };

    if (!lead.name || !lead.phone || !lead.service) {
      return NextResponse.json({ error: "Please add your name, phone number and what you need help with." }, { status: 400 });
    }
    const phoneDigits = lead.phone.replace(/\D/g, "").length;
    if (phoneDigits < 7 || phoneDigits > 15) {
      return NextResponse.json({ error: "Please check your phone number." }, { status: 400 });
    }
    if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
      return NextResponse.json({ error: "Please check your email address, or leave it blank." }, { status: 400 });
    }

    // Save to Google Sheets (primary storage for serverless)
    const sheetSuccess = await appendToGoogleSheet(lead);

    if (!sheetSuccess) {
      // Logged in full so the lead can be recovered from the function logs.
      console.error("LEAD NOT SAVED:", JSON.stringify(lead));
      return NextResponse.json({ error: "We couldn't save your request." }, { status: 500 });
    }

    // Try to save to local file (only works in development/local environments)
    // This will gracefully fail on serverless platforms like Netlify
    try {
      const dataDir = path.join(process.cwd(), "data");
      await fs.mkdir(dataDir, { recursive: true });

      const filePath = path.join(dataDir, "contacts.json");
      let contacts = [];

      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        contacts = JSON.parse(fileContent);
      } catch {
        contacts = [];
      }

      contacts.push({ id: Date.now().toString(), ...lead });
      await fs.writeFile(filePath, JSON.stringify(contacts, null, 2), "utf-8");
    } catch {
      // Silently fail for serverless environments - Google Sheets is the primary storage
      console.log("Local file write skipped (serverless environment)");
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json({ error: "We couldn't save your request." }, { status: 500 });
  }
}
