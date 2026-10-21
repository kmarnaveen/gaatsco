import { SectionLabel } from "@/components/section-label"
import { ArrowUpRightIcon } from "@/components/icons"
import Link from "next/link"

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
          <SectionLabel className="text-primary-foreground/85 [&_span]:bg-primary-foreground">Testimonials</SectionLabel>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col border border-primary-foreground/25 p-6">
                <blockquote className="flex-1 text-base leading-relaxed md:text-lg">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="block font-semibold">{t.name}</span>
                  <span className="block text-primary-foreground/80">{t.role}</span>
                  <span className="mt-3 inline-block rounded-full border border-primary-foreground/40 px-3 py-1 text-xs uppercase tracking-[0.08em] text-primary-foreground/85">
                    {t.highlight}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <Link
            href="#contact"
            className="mt-14 flex items-center justify-center gap-[0.25em] text-3xl font-semibold tracking-tight hover:opacity-90 sm:text-5xl md:mt-20 md:text-7xl"
          >
            Let&apos;s talk
            <ArrowUpRightIcon viewBox="6 6 12 12" className="h-[0.7em] w-[0.7em]" strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
