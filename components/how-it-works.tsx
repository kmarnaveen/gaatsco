import { CalendarIcon, FileSearchIcon, CheckCircleIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { SectionLabel } from "@/components/section-label"
import { CONSULTATION_CTA } from "@/lib/contact"
import { BookConsultation } from "@/components/book-consultation"

const steps = [
  {
    step: "01",
    icon: CalendarIcon,
    title: "Book a call",
    description: "A relaxed 30-minute chat about what you need. No jargon, no pressure.",
  },
  {
    step: "02",
    icon: FileSearchIcon,
    title: "Get a clear plan",
    description: "What we'll handle, when, and what it costs — agreed before we start.",
  },
  {
    step: "03",
    icon: CheckCircleIcon,
    title: "Relax — we've got it",
    description: "We handle filings, compliance, and reporting — and keep you updated.",
  },
]

export function HowItWorks() {
  return (
    <section className="border-b bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <SectionLabel>Simple Process</SectionLabel>
          <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Getting started is easy
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground md:text-lg">
            Three steps to peace of mind.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.step} className="relative flex flex-col">
                {index < steps.length - 1 && (
                  <div
                    className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-linear-to-r from-primary/30 to-primary/10 md:block"
                    aria-hidden
                  />
                )}
                <div className="relative flex flex-1 flex-col rounded-xl border bg-card p-8 transition-shadow hover:shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-xs font-bold tracking-widest text-primary">{item.step}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <BookConsultation>
            <Button size="lg" className="shadow-md shadow-primary/20">
              {CONSULTATION_CTA}
            </Button>
          </BookConsultation>
          <p className="mt-3 text-sm text-muted-foreground">
            No obligation. You agree the scope and fee before any work starts.
          </p>
        </div>
      </div>
    </section>
  )
}
