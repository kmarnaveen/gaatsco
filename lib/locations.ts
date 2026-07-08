import { indiaOffice } from "@/lib/addresses"

/** The city these landing pages target. Driven by the India office. */
export const hyderabad = {
  slug: "hyderabad",
  name: "Hyderabad",
  region: "Telangana",
  office: indiaOffice,
} as const

export type LocalService = {
  /** URL slug under /hyderabad/<slug> */
  slug: string
  /** Meta title */
  title: string
  /** Meta description */
  description: string
  /** On-page H1 */
  heading: string
  /** Short label for breadcrumbs and cards */
  shortName: string
  /** Lead paragraph */
  intro: string
  /** What's included / why us bullet points */
  highlights: string[]
  /** Canonical service name for the contact form + schema */
  contactService: string
  /** Link to the full (non-local) service page */
  relatedServiceHref: string
  /** schema.org serviceType */
  serviceType: string
}

export const hyderabadServices: LocalService[] = [
  {
    slug: "tax-consultant",
    title: "Tax Consultant in Hyderabad | GAATSCO",
    description:
      "Looking for a tax consultant in Hyderabad? GAATSCO handles income tax filing, GST, TDS, and tax planning for individuals and businesses in Hyderabad. Book a free consultation.",
    heading: "Tax Consultant in Hyderabad",
    shortName: "Tax Consultant",
    intro:
      "Need a reliable tax consultant in Hyderabad? GAATSCO's Shaikpet-based team handles income tax filing, GST compliance, TDS, and tax planning for individuals, professionals, startups, and SMEs across Hyderabad and Telangana — with deadlines met and penalties avoided.",
    highlights: [
      "Income tax return filing for individuals, professionals, and businesses in Hyderabad",
      "GST registration, monthly returns, and reconciliation for Telangana businesses",
      "TDS/TCS compliance and quarterly return filing",
      "Tax planning to legally minimise your liability",
      "Notice, assessment, and scrutiny support",
    ],
    contactService: "India Taxation Services",
    relatedServiceHref: "/services/taxation-india",
    serviceType: "Tax preparation and compliance",
  },
  {
    slug: "accounting-services",
    title: "Accounting Services in Hyderabad | GAATSCO",
    description:
      "Professional accounting and bookkeeping services in Hyderabad for startups, SMEs, and growing businesses. Monthly books, financial statements, and advisory from GAATSCO.",
    heading: "Accounting Services in Hyderabad",
    shortName: "Accounting Services",
    intro:
      "GAATSCO provides accounting and bookkeeping services for businesses in Hyderabad — from day-to-day books to monthly management reports and year-end financial statements. Get accurate numbers, clean compliance, and the clarity to make better decisions.",
    highlights: [
      "Monthly bookkeeping and account reconciliations",
      "Financial statement preparation (P&L, balance sheet, cash flow)",
      "Management reporting and financial analysis",
      "Payroll processing with PF, ESI, and TDS compliance",
      "Cloud accounting setup so you can see your numbers anytime",
    ],
    contactService: "Accounting",
    relatedServiceHref: "/services",
    serviceType: "Accounting service",
  },
  {
    slug: "gst-registration",
    title: "GST Registration in Hyderabad | GAATSCO",
    description:
      "Fast, hassle-free GST registration in Hyderabad plus ongoing GST return filing and compliance for businesses across Telangana. Talk to GAATSCO's GST experts.",
    heading: "GST Registration & Filing in Hyderabad",
    shortName: "GST Registration",
    intro:
      "Registering for GST in Hyderabad, or struggling to keep returns on time? GAATSCO handles GST registration end to end and manages your ongoing monthly and quarterly filings, so your Hyderabad business stays compliant without the last-minute scramble.",
    highlights: [
      "New GST registration and amendments",
      "Monthly and quarterly GST return filing (GSTR-1, GSTR-3B)",
      "Input tax credit reconciliation to maximise eligible claims",
      "GST advisory for e-commerce, services, and trading businesses",
      "Support with GST notices and departmental queries",
    ],
    contactService: "India Taxation Services",
    relatedServiceHref: "/services/taxation-india",
    serviceType: "GST registration and compliance",
  },
  {
    slug: "audit-support",
    title: "Audit Support Services in Hyderabad | GAATSCO",
    description:
      "Audit support for Hyderabad businesses — documentation, reconciliations, on-site support, and auditor query handling so your audit runs smoothly. Book a consultation with GAATSCO.",
    heading: "Audit Support Services in Hyderabad",
    shortName: "Audit Support",
    intro:
      "Facing a statutory or internal audit in Hyderabad? GAATSCO's audit support team prepares your documentation, reconciles your accounts, and handles auditor queries — so fieldwork is smooth and your team stays focused on the business.",
    highlights: [
      "Pre-audit documentation and reconciliation",
      "Internal control and compliance review",
      "On-site and remote support during audit fieldwork",
      "Auditor query responses handled for you",
      "Post-audit consultation to close out findings",
    ],
    contactService: "Audit Support Services",
    relatedServiceHref: "/services/audit-support",
    serviceType: "Audit support",
  },
  {
    slug: "web-development",
    title: "Web Development Company in Hyderabad | GAATSCO",
    description:
      "Web development company in Hyderabad building fast, SEO-ready business websites, e-commerce stores, and web apps. Get a site that ranks and converts — talk to GAATSCO.",
    heading: "Web Development Company in Hyderabad",
    shortName: "Web Development",
    intro:
      "GAATSCO builds modern, fast, SEO-ready websites and web applications for Hyderabad businesses — from business websites and landing pages to e-commerce and custom web apps. And because we also handle your accounts, you get one coordinated partner for web and finance.",
    highlights: [
      "Business websites and conversion-focused landing pages",
      "E-commerce stores with secure payments",
      "Custom web apps, dashboards, and portals",
      "SEO-ready builds with strong Core Web Vitals",
      "Ongoing hosting, maintenance, and support",
    ],
    contactService: "Web Development",
    relatedServiceHref: "/services/web-development",
    serviceType: "Web development",
  },
]

export function getHyderabadService(slug: string): LocalService | undefined {
  return hyderabadServices.find((service) => service.slug === slug)
}
