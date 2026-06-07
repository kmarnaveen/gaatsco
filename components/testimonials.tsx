import { SectionLabel } from "@/components/section-label"

const testimonials = [
  {
    quote:
      "I used to dread tax season. GAATSCO handles everything proactively — I haven't missed a deadline in two years. It genuinely feels like having a financial partner, not just an accountant.",
    name: "Rajesh K.",
    role: "SME Owner, Hyderabad",
    highlight: "Saved 10+ hours/month",
  },
  {
    quote:
      "As a startup founder, I needed someone who could move fast and explain things simply. They set up our books, payroll, and compliance in weeks. Clear communication every step of the way.",
    name: "Priya M.",
    role: "Startup Founder, Bangalore",
    highlight: "Setup in under 3 weeks",
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
    <section className="border-b bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <SectionLabel>Client Stories</SectionLabel>
          <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            People like you, already at ease
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground md:text-lg">
            Real relief from real clients — because trust is earned, not claimed.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="border-t pt-4">
                <span className="mb-1 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {t.highlight}
                </span>
                <p className="mt-2 font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
