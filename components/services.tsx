"use client"

import { useState, type ComponentType, type SVGProps } from "react"
import { ArrowRightIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { SectionLabel } from "@/components/section-label"
import { auditSupportSummary } from "@/lib/audit-support"
import { indiaTaxationSummary } from "@/lib/taxation-india"
import { usTaxationSummary } from "@/lib/taxation-us"
import { webDevelopmentOfferings, webDevelopmentSummary } from "@/lib/web-development"
import { CONSULTATION_CTA } from "@/lib/contact"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookConsultation } from "@/components/book-consultation"

type ServiceItem = {
  id: string
  title: string
  benefit?: string
  description: string
  features?: string[]
  detailHref?: string
  contactService?: string
  image?: string
  icon?: ComponentType<SVGProps<SVGSVGElement>>
}

const financeServices: ServiceItem[] = [
  {
    id: "audit-support",
    title: auditSupportSummary.title,
    benefit: auditSupportSummary.benefit,
    description: auditSupportSummary.description,
    features: auditSupportSummary.features,
    detailHref: "/services/audit-support",
    image: auditSupportSummary.image,
  },
  {
    id: indiaTaxationSummary.id,
    title: indiaTaxationSummary.title,
    benefit: indiaTaxationSummary.benefit,
    description: indiaTaxationSummary.description,
    features: indiaTaxationSummary.features,
    detailHref: indiaTaxationSummary.detailHref,
    image: indiaTaxationSummary.image,
  },
  {
    id: usTaxationSummary.id,
    title: usTaxationSummary.title,
    benefit: usTaxationSummary.benefit,
    description: usTaxationSummary.description,
    features: usTaxationSummary.features,
    detailHref: usTaxationSummary.detailHref,
    image: usTaxationSummary.image,
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
    image: "/accounting-ledger-financial-records-professional-w.jpg",
  },
  {
    id: "payroll-management",
    title: "Payroll Management",
    benefit: "Your team gets paid right, every time",
    description:
      "Payroll without the stress — full statutory compliance, with salary calculations, deductions, and disbursements handled seamlessly.",
    features: [
      "Salary processing and payslip generation",
      "PF, ESI, and TDS compliance",
      "Reimbursement and bonus management",
      "Payroll reporting and records",
    ],
    image: "/professional-accounting-team-meeting-collaboration.jpg",
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
    image: "/small-business-owner-managing-finances-in-contempo.jpg",
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
    image: "/professional-accounting-team-working-together-in-m.jpg",
  },
]

const webServices: ServiceItem[] = webDevelopmentOfferings.map((offering) => ({
  id: `web-${offering.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  title: offering.title,
  description: offering.description,
  detailHref: webDevelopmentSummary.detailHref,
  contactService: webDevelopmentSummary.title,
  icon: offering.icon,
}))

const tabs = [
  { id: "finance", label: "Financial Services", services: financeServices },
  { id: "web", label: "Web Development", services: webServices },
] as const

type TabId = (typeof tabs)[number]["id"]

const headings: Record<TabId, string> = {
  finance: "Accounting, tax, and compliance, handled end to end.",
  web: "Fast, modern websites, built with the same care.",
}

// Every page that shows Services also has the lead form, so jump to it with the service preselected.
const contactHref = (pathname: string, service: ServiceItem) =>
  `${pathname}?service=${encodeURIComponent(service.contactService ?? service.title)}#contact`

// Fills the remaining slots of the last grid row so the help card closes the grid cleanly.
const helpCardSpan = (count: number) =>
  `${count % 2 === 0 ? "sm:col-span-2" : ""} ${["lg:col-span-4", "lg:col-span-3", "lg:col-span-2", ""][count % 4]}`

function ServiceCard({ service }: { service: ServiceItem }) {
  const pathname = usePathname()
  const Icon = service.icon
  return (
    <Link
      href={service.detailHref ?? contactHref(pathname, service)}
      className="group flex w-[80%] shrink-0 snap-start flex-col overflow-hidden border border-border bg-muted/50 transition-colors hover:border-brand sm:w-auto"
    >
      {service.image ? (
        <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
          <Image
            src={service.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : Icon ? (
        <div className="px-5 pt-5">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
            <Icon className="h-5 w-5" />
          </span>
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-tight">{service.title}</h3>
        {service.benefit && <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{service.benefit}</p>}
        <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-primary">
          {service.detailHref ? "See details" : "Ask about this"}
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}

export function Services({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname()
  const [active, setActive] = useState<TabId>("finance")
  const activeTab = tabs.find((tab) => tab.id === active) ?? tabs[0]

  return (
    <section id="services" className="border-b border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-4xl bg-card px-6 py-10 text-foreground md:px-12 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
            <div>
              <SectionLabel>Services & Expertise</SectionLabel>
            </div>
            <div>
              <h2 className="max-w-4xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
                {headings[active]}
              </h2>
            </div>
          </div>

          <div
            role="tablist"
            aria-label="Service category"
            className="mt-10 inline-flex rounded-full border border-border bg-white/60 p-1"
          >
            {tabs.map((tab) => {
              const isActive = tab.id === active
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          {compact ? (
            <div className="-mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
              {activeTab.services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
              <div
                className={`flex w-[80%] shrink-0 snap-start flex-col justify-between gap-6 bg-primary p-6 text-primary-foreground sm:w-auto ${helpCardSpan(activeTab.services.length)}`}
              >
                <div>
                  <h3 className="text-lg font-semibold leading-tight">Not sure which service fits?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                    Tell us your stage and goals. We&apos;ll suggest the simplest setup.
                  </p>
                </div>
                <BookConsultation>
                  <Button size="lg" className="w-full whitespace-normal rounded-full bg-primary-foreground text-primary shadow-none hover:bg-primary-foreground/90">
                    {CONSULTATION_CTA}
                  </Button>
                </BookConsultation>
              </div>
            </div>
          ) : (
            <>
              <div className="mt-10 grid gap-7 md:grid-cols-2">
                {activeTab.services.map((service) => (
                  <article key={service.id} id={service.id} className="border-t border-border pt-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="pr-2 text-xl font-semibold leading-tight">{service.title}</h3>
                      {service.detailHref && (
                        <Link href={service.detailHref} className="mt-1 shrink-0 self-start text-foreground/80 transition-colors hover:text-foreground">
                          <ArrowRightIcon className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                    {service.benefit && (
                      <p className="mt-2 text-sm font-medium uppercase tracking-[0.08em] text-muted-foreground">{service.benefit}</p>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80 md:text-base">{service.description}</p>
                    {service.features && service.features.length > 0 && (
                      <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link
                      href={contactHref(pathname, service)}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      Discuss this service
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </article>
                ))}
              </div>

              <div className="mt-10 border-t border-border pt-8 text-center">
                <p className="text-lg font-medium text-foreground">Need help choosing the right service mix?</p>
                <p className="mx-auto mt-2 max-w-2xl text-sm text-foreground/80">
                  Share your stage and goals. We will propose the simplest setup that keeps you compliant and growth-ready.
                </p>
                <BookConsultation className="mt-5 inline-block">
                  <Button size="lg" className="rounded-full bg-primary text-primary-foreground shadow-none hover:bg-primary/90">
                    {CONSULTATION_CTA}
                  </Button>
                </BookConsultation>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
