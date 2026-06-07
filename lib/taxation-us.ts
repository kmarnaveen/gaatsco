import {
  FileTextIcon,
  ShieldIcon,
  CheckCircleIcon,
  AwardIcon,
  TrendingUpIcon,
  BriefcaseIcon,
  PlaneIcon,
} from "@/components/icons"

export const usTaxationOfferings = [
  {
    icon: FileTextIcon,
    title: "Individual Tax Returns (Form 1040)",
    description:
      "Preparation and filing of federal and state individual income tax returns — including W-2, 1099, investment income, and itemized deductions.",
  },
  {
    icon: BriefcaseIcon,
    title: "Business Tax Returns",
    description:
      "Accurate filing of business returns including Form 1120 (C-Corp), 1120-S (S-Corp), 1065 (Partnership), and Schedule C for sole proprietors.",
  },
  {
    icon: ShieldIcon,
    title: "Federal & State Compliance",
    description:
      "Navigate federal IRS requirements and state-level tax obligations across jurisdictions — ensuring timely filings and avoiding penalties.",
  },
  {
    icon: TrendingUpIcon,
    title: "Tax Planning & Strategy",
    description:
      "Year-round tax planning to optimize your position — estimated tax payments, entity structure advice, and strategies to reduce your overall tax burden.",
  },
  {
    icon: CheckCircleIcon,
    title: "Payroll & Employment Taxes",
    description:
      "Support with payroll tax filings, Form 941, W-2/W-3 preparation, and compliance with IRS employment tax requirements.",
  },
  {
    icon: PlaneIcon,
    title: "Cross-Border & NRI Tax Support",
    description:
      "Specialized guidance for individuals and businesses with ties to both India and the USA — treaty benefits, foreign income reporting, and FBAR/FATCA compliance.",
  },
]

export const usTaxationStrengths = [
  {
    icon: AwardIcon,
    title: "US Tax Expertise",
    description:
      "Experienced team familiar with IRS regulations, state tax codes, and the complexities of US federal tax filing requirements.",
  },
  {
    icon: PlaneIcon,
    title: "India–USA Bridge",
    description:
      "Unique advantage for clients operating across both countries — we understand cross-border tax implications that single-country firms often miss.",
  },
  {
    icon: ShieldIcon,
    title: "Accurate & On-Time Filing",
    description:
      "We prioritize deadline adherence and accuracy — reducing audit risk and ensuring you never pay unnecessary penalties or interest.",
  },
]

export const usTaxationSummary = {
  id: "taxation-us",
  title: "US Taxation Services",
  benefit: "Navigate US tax complexity with confidence",
  description:
    "Expert US tax preparation, planning, and compliance for individuals and businesses — with specialized support for cross-border and NRI clients from our USA office.",
  features: [
    "Individual & business tax returns",
    "Federal and state tax compliance",
    "Tax planning and estimated payments",
    "Payroll & employment tax support",
    "Cross-border & NRI tax guidance",
  ],
  image: "/global-professional-working-remotely-with-document.jpg",
  detailHref: "/services/taxation-us",
  contactService: "US Taxation Services",
}
