import { SectionLabel } from "@/components/section-label"
import Image from "next/image"

const metrics = [
  { value: "96%", label: "Successful engagements" },
  { value: "24 hours", label: "Average response time" },
  { value: "1000+", label: "Client consultations" },
]

const visuals = [
  {
    src: "/editorial-briefing-team.jpg",
    alt: "Executive team in strategy briefing",
  },
  {
    src: "/editorial-legal-documents.jpg",
    alt: "Close-up of compliance documents and notes",
  },
  {
    src: "/editorial-laptop-doc-review.jpg",
    alt: "Desk with laptop and document review",
  },
]

export function About() {
  return (
    <section id="about" className="border-b border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-4xl bg-[#ececeb] px-6 py-10 text-[#262bce] md:px-12 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
            <div>
              <SectionLabel>About Us</SectionLabel>
            </div>
            <div>
              <h2 className="max-w-4xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
                We accelerate accounting outcomes without compromising accuracy, giving founders more time to lead.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#4f54cc] md:text-lg">
                Founded in 2025, GAATSCO combines compliance depth with execution speed. We simplify books, tax, and
                reporting into clear decisions that keep your business moving confidently.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {visuals.map((visual) => (
              <div key={visual.src} className="relative aspect-16/10 overflow-hidden border border-[#c8c9e8] bg-[#f4f4f1]">
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-[#262bce]/10" aria-hidden="true" />
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="border border-[#c8c9e8] px-6 py-7 text-center">
                <p className="text-5xl font-semibold leading-none tracking-tight md:text-6xl">{metric.value}</p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-[#6d71d3]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-[#c8c9e8] pt-8 text-sm leading-relaxed text-[#4f54cc] md:text-base">
            <p>
              Our team supports startups, SMEs, and cross-border founders with audit support, taxation, payroll, and
              advisory — plus web development to get your business online. We stay intentionally lean so every client
              gets senior-level attention and practical execution.
            </p>
            <p className="mt-4">
              You get direct communication, predictable turnaround, and reporting that explains what matters in plain
              language.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
