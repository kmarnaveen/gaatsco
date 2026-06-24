import {
  ArrowRightIcon,
} from "@/components/icons"
import { Button } from "@/components/ui/button"
import { SectionLabel } from "@/components/section-label"
import { auditSupportSummary } from "@/lib/audit-support"
import { indiaTaxationSummary } from "@/lib/taxation-india"
import { usTaxationSummary } from "@/lib/taxation-us"
import Link from "next/link"

const services = [
  {
    id: "audit-support",
    title: auditSupportSummary.title,
    benefit: auditSupportSummary.benefit,
    description: auditSupportSummary.description,
    features: auditSupportSummary.features,
    detailHref: "/services/audit-support",
  },
  {
    id: indiaTaxationSummary.id,
    title: indiaTaxationSummary.title,
    benefit: indiaTaxationSummary.benefit,
    description: indiaTaxationSummary.description,
    features: indiaTaxationSummary.features,
    detailHref: indiaTaxationSummary.detailHref,
  },
  {
    id: usTaxationSummary.id,
    title: usTaxationSummary.title,
    benefit: usTaxationSummary.benefit,
    description: usTaxationSummary.description,
    features: usTaxationSummary.features,
    detailHref: usTaxationSummary.detailHref,
  },
  {
    id: "accounting",
    title: "Accounting",
    benefit: "Always know where your money stands",
    description:
      "From daily bookkeeping to month-end close — accurate records that give you clarity and control over your business finances.",
    features: [
      "Monthly bookkeeping and ledger maintenance",
      "Accounts payable and receivable management",
      "Bank reconciliation",
      "Finalisation of accounts",
    ],
  },
  {
    id: "payroll-management",
    title: "Payroll Management",
    benefit: "Your team gets paid right, every time",
    description:
      "Stress-free payroll with full statutory compliance — salary calculations, deductions, and disbursements handled seamlessly.",
    features: [
      "Salary processing and payslip generation",
      "PF, ESI, and TDS compliance",
      "Reimbursement and bonus management",
      "Payroll reporting and records",
    ],
  },
  {
    id: "financial-statement-preparation",
    title: "Financial Statement Preparation",
    benefit: "Reports you can trust and share",
    description:
      "Accurate balance sheets, P&L statements, and cash flow reports — prepared to standards and ready when you need them.",
    features: [
      "Balance sheet preparation",
      "Profit & loss statement compilation",
      "Cash flow statement preparation",
      "Notes to accounts and schedules",
    ],
  },
  {
    id: "financial-statement-services",
    title: "Financial Statement Services",
    benefit: "Turn numbers into decisions",
    description:
      "Go beyond preparation with analysis and advisory — understand what your financials mean and make smarter business moves.",
    features: [
      "Financial statement review and analysis",
      "Ratio and trend analysis",
      "Management reporting",
      "Investor and lender-ready financials",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="border-b border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-4xl bg-[#ececeb] px-6 py-10 text-[#262bce] md:px-12 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
            <div>
              <SectionLabel>Services & Expertise</SectionLabel>
            </div>
            <div>
              <h2 className="max-w-4xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
                We keep you informed at every step, turning compliance and reporting into clear business momentum.
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.id} id={service.id} className="border-t border-[#c8c9e8] pt-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="pr-2 text-xl font-semibold leading-tight">{service.title}</h3>
                  {service.detailHref && (
                    <Link href={service.detailHref} className="mt-1 shrink-0 self-start text-[#4f54cc] transition-colors hover:text-[#262bce]">
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  )}
                </div>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.08em] text-[#6d71d3]">{service.benefit}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#4f54cc] md:text-base">{service.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-[#4f54cc]">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-[#262bce]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#262bce] transition-colors hover:text-[#4349d7]"
                >
                  Discuss this service
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-[#c8c9e8] pt-8 text-center">
            <p className="text-lg font-medium text-[#262bce]">Need help choosing the right service mix?</p>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-[#4f54cc]">
              Share your stage and goals. We will propose the simplest setup that keeps you compliant and growth-ready.
            </p>
            <Link href="/contact" className="mt-5 inline-block">
              <Button size="lg" className="rounded-full bg-[#262bce] text-white shadow-none hover:bg-[#2025b8]">
                Talk to an expert
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
