import {
  FileSearchIcon,
  CalculatorIcon,
  UsersIcon,
  FileTextIcon,
  TrendingUpIcon,
  ArrowRightIcon,
  ShieldIcon,
  PlaneIcon,
} from "@/components/icons"
import { Button } from "@/components/ui/button"
import { SectionLabel } from "@/components/section-label"
import { auditSupportSummary } from "@/lib/audit-support"
import { indiaTaxationSummary } from "@/lib/taxation-india"
import { usTaxationSummary } from "@/lib/taxation-us"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: "audit-support",
    icon: FileSearchIcon,
    title: auditSupportSummary.title,
    benefit: auditSupportSummary.benefit,
    description: auditSupportSummary.description,
    features: auditSupportSummary.features,
    image: auditSupportSummary.image,
    detailHref: "/services/audit-support",
  },
  {
    id: indiaTaxationSummary.id,
    icon: ShieldIcon,
    title: indiaTaxationSummary.title,
    benefit: indiaTaxationSummary.benefit,
    description: indiaTaxationSummary.description,
    features: indiaTaxationSummary.features,
    image: indiaTaxationSummary.image,
    detailHref: indiaTaxationSummary.detailHref,
  },
  {
    id: usTaxationSummary.id,
    icon: PlaneIcon,
    title: usTaxationSummary.title,
    benefit: usTaxationSummary.benefit,
    description: usTaxationSummary.description,
    features: usTaxationSummary.features,
    image: usTaxationSummary.image,
    detailHref: usTaxationSummary.detailHref,
  },
  {
    id: "accounting",
    icon: CalculatorIcon,
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
    image: "/accounting-ledger-financial-records-professional-w.jpg",
  },
  {
    id: "payroll-management",
    icon: UsersIcon,
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
    image: "/business-growth-chart-strategy-meeting-professiona.jpg",
  },
  {
    id: "financial-statement-preparation",
    icon: FileTextIcon,
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
    image: "/specialized-financial-services-global-professional.jpg",
  },
  {
    id: "financial-statement-services",
    icon: TrendingUpIcon,
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
    image: "/professional-accounting-team-working-together-in-m.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="border-b bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <SectionLabel>What We Offer</SectionLabel>
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            Services that give you peace of mind
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground md:text-lg">
            Every service is designed to remove a worry from your plate — so you can focus on growth.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.id}
                id={service.id}
                className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="mb-1 text-sm font-medium text-primary">{service.benefit}</p>
                  <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                  <p className="mb-4 leading-relaxed text-muted-foreground">{service.description}</p>
                  <ul className="mb-6 space-y-2 text-sm">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                    {service.detailHref && (
                      <Link
                        href={service.detailHref}
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        View full service
                        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      Discuss this service
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
          <p className="mb-4 text-lg font-medium text-foreground">
            Not sure which service you need?
          </p>
          <p className="mb-6 text-sm text-muted-foreground">
            That&apos;s completely fine — most clients start with a free consultation and we figure it out together.
          </p>
          <Link href="/contact">
            <Button size="lg" className="shadow-md shadow-primary/20">
              Talk to an expert — it&apos;s free
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
