import { FileTextIcon, CalculatorIcon, TrendingUpIcon, ShieldIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
  {
    icon: FileTextIcon,
    title: "Tax & Compliance",
    description:
      "Expert tax filing, GST registration, and statutory compliance for individuals and businesses — so you stay penalty-free and stress-free.",
    features: [
      "Income tax returns (Individual & Business)",
      "GST registration & returns",
      "TDS/TCS compliances",
      "ROC/MCA filings & statutory compliances",
    ],
    image: "/tax-compliance-documents-calculator-professional.jpg",
  },
  {
    icon: CalculatorIcon,
    title: "Accounting & Bookkeeping",
    description:
      "Complete accounting solutions — monthly bookkeeping, payroll management, and finalization of accounts — ensuring you always have up-to-date financial insights.",
    features: [
      "Monthly bookkeeping",
      "Finalisation of accounts",
      "Payroll & reimbursements",
      "Preparation of financial statements",
    ],
    image: "/accounting-ledger-financial-records-professional-w.jpg",
  },
  {
    icon: TrendingUpIcon,
    title: "Business & Startup Advisory",
    description:
      "From new company registration to business growth strategy, GAATSCO offers financial planning, profitability analysis, and ongoing virtual CFO services for startups and SMEs.",
    features: [
      "New company/LLP/GST registration",
      "Financial planning & projections",
      "Cash-flow and profitability analysis",
      "Virtual CFO services",
    ],
    image: "/business-growth-chart-strategy-meeting-professiona.jpg",
  },
  {
    icon: ShieldIcon,
    title: "Specialized Services",
    description: "Expert solutions for unique financial situations.",
    features: [
      "NRI Tax & Investment Accounting",
      "Freelancer & Small Business Tax Support",
      "Rental Income Accounting",
      "Virtual CFO Services",
    ],
    image: "/specialized-financial-services-global-professional.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="border-b py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground md:text-lg">
            Comprehensive financial services to keep your business running smoothly
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group rounded-lg border bg-card overflow-hidden transition-all hover:border-accent hover:shadow-lg"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                  <p className="mb-4 leading-relaxed text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
