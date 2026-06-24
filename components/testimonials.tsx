import { SectionLabel } from "@/components/section-label"

const testimonials = [
  {
    quote:
      "I used to dread tax season. GAATSCO handles everything proactively, and deadlines are never a scramble anymore. It genuinely feels like having a financial partner, not just an accountant.",
    name: "Rajesh K.",
    role: "SME Owner, Hyderabad",
    highlight: "Saved 10+ hours/month",
  },
  {
    quote:
      "As a startup founder, I needed someone who could move fast and explain things simply. They set up our books, payroll, and compliance in weeks. Clear communication every step of the way.",
    name: "Priya M.",
    role: "Startup Founder, Bangalore",
    highlight: "Rapid and structured onboarding",
  },
  {
    quote:
      "Managing finances from the US while my business runs in India was stressful. GAATSCO's team made it seamless — responsive, thorough, and always available when I need them.",
    name: "Arun S.",
    role: "NRI Business Owner, USA",
    highlight: "India & USA support",
  },
]

export function Testimonials() {
  return (
    <section className="border-b border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-4xl bg-primary px-6 py-10 text-primary-foreground md:px-12 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
            <div>
              <SectionLabel className="text-primary-foreground/85 [&_span]:bg-primary-foreground">Testimonials</SectionLabel>
            </div>
            <div className="space-y-6">
              {testimonials.slice(0, 1).map((t) => (
                <figure key={t.name}>
                  <figcaption className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.08em] text-primary-foreground/80">
                    <span className="rounded-full border border-primary-foreground/40 px-3 py-1">{t.name}</span>
                    <span>{t.role}</span>
                  </figcaption>
                  <blockquote className="max-w-2xl text-xl leading-tight tracking-tight sm:text-2xl md:text-4xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 text-sm uppercase tracking-[0.09em] text-primary-foreground/80">{t.highlight}</p>
                </figure>
              ))}
            </div>
          </div>

          <p className="mt-16 text-center text-3xl font-semibold tracking-tight sm:text-5xl md:mt-24 md:text-7xl">Let&apos;s talk ↗</p>
        </div>
      </div>
    </section>
  )
}
