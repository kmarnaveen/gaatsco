import { CalendarIcon, FileSearchIcon, CheckCircleIcon } from "@/components/icons"

const steps = [
  {
    icon: CalendarIcon,
    number: "01",
    title: "Schedule a Call",
    description: "Book a free consultation at your convenience. We'll discuss your needs and challenges.",
  },
  {
    icon: FileSearchIcon,
    number: "02",
    title: "Share Your Details",
    description: "Provide us with necessary documents through our secure portal. We handle the rest.",
  },
  {
    icon: CheckCircleIcon,
    number: "03",
    title: "Stay Compliant",
    description: "Relax while we manage all filings, compliance, and reporting on time, every time.",
  },
]

export function Process() {
  return (
    <section id="process" className="border-b py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">How It Works</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground md:text-lg">
            Getting started is simple. Here's our proven 3-step process
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="text-6xl font-bold text-muted/20">{step.number}</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-7 hidden h-0.5 w-full translate-x-1/2 bg-border md:block" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
