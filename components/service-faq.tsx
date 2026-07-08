import { SectionLabel } from "@/components/section-label"
import { JsonLd, faqSchema } from "@/components/structured-data"
import { PlusIcon } from "@/components/icons"
import type { Faq } from "@/lib/faqs"

/**
 * FAQ accordion for a service page, plus matching FAQPage JSON-LD.
 * The schema is generated from the same `faqs` array that renders on the
 * page, so the structured data always mirrors the visible content (a
 * requirement for Google FAQ rich results).
 */
export function ServiceFaq({
  faqs,
  heading = "Frequently asked questions",
  subtitle,
}: {
  faqs: Faq[]
  heading?: string
  subtitle?: string
}) {
  if (faqs.length === 0) return null

  return (
    <section className="border-b border-border/60 py-16 md:py-24">
      <JsonLd data={faqSchema(faqs)} />
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <SectionLabel className="justify-center">FAQ</SectionLabel>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            {heading}
          </h2>
          {subtitle ? (
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>

        <div className="divide-y divide-border/70 rounded-2xl border border-border/70">
          {faqs.map((faq) => (
            <details key={faq.question} className="group px-5 py-4 md:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold marker:content-none">
                {faq.question}
                <PlusIcon
                  className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
