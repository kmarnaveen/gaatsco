import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { google } from "googleapis";

async function appendToGoogleSheet(data: any) {
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

    // Append data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:F", // Adjust the range as needed
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            data.submittedAt,
            data.name,
            data.email,
            data.phone,
            data.service,
            data.message,
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

    // Validate required fields
    const { name, phone, email, service, message } = data;

    if (!name || !phone || !email || !service || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create the data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), "data");
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }

    // Read existing data or create empty array
    const filePath = path.join(dataDir, "contacts.json");
    let contacts = [];

    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      contacts = JSON.parse(fileContent);
    } catch {
      // File doesn't exist yet, start with empty array
      contacts = [];
    }

    // Add new contact with timestamp and ID
    const newContact = {
      id: Date.now().toString(),
      ...data,
      submittedAt: new Date().toISOString(),
    };

    contacts.push(newContact);

    // Write updated data back to file
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2), "utf-8");

    // Also save to Google Sheets
    const sheetSuccess = await appendToGoogleSheet(newContact);

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        data: newContact,
        savedToSheet: sheetSuccess,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { error: "Failed to save contact form data" },
      { status: 500 }
    );
  }
}
