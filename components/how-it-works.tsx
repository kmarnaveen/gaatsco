import { CalendarIcon, FileSearchIcon, CheckCircleIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { SectionLabel } from "@/components/section-label"
import Link from "next/link"

const steps = [
  {
    step: "01",
    icon: CalendarIcon,
    title: "Book a free call",
    description:
      "Share your situation in a relaxed 15-minute chat. No jargon, no pressure — just an honest conversation about what you need.",
    reassurance: "Takes less than 2 minutes to schedule",
  },
  {
    step: "02",
    icon: FileSearchIcon,
    title: "Get a clear plan",
    description:
      "We outline exactly what we'll handle, when, and at what cost. You'll know what to expect before anything begins.",
    reassurance: "Transparent pricing, no surprises",
  },
  {
    step: "03",
    icon: CheckCircleIcon,
    title: "Relax — we've got it",
    description:
      "We take care of compliance, filings, and reporting. You get peace of mind and more time to focus on what you love.",
    reassurance: "Proactive updates, not last-minute panic",
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
            We know finances can feel overwhelming. That&apos;s why we keep things simple — three steps to peace of mind.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.step} className="relative flex flex-col">
                {index < steps.length - 1 && (
                  <div
                    className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-gradient-to-r from-primary/30 to-primary/10 md:block"
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
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="text-xs font-medium text-primary">{item.reassurance}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact">
            <Button size="lg" className="shadow-md shadow-primary/20">
              Start with a free consultation
            </Button>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            No commitment · Cancel anytime before we begin
          </p>
        </div>
      </div>
    </section>
  )
}
