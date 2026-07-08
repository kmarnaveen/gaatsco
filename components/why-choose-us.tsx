import { ClockIcon, ShieldIcon, MessageCircleIcon, AwardIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { SectionLabel } from "@/components/section-label"
import Link from "next/link"

const benefits = [
  {
    icon: ClockIcon,
    title: "Timely & Accurate Compliance",
    description: "Consistent on-time filing with proactive deadline tracking and follow-through.",
  },
  {
    icon: MessageCircleIcon,
    title: "Transparent Communication",
    description: "No jargon, no confusion. We explain everything in plain language.",
  },
  {
    icon: AwardIcon,
    title: "Technology-Driven Solutions",
    description: "Modern tools that give you real-time insights — not outdated spreadsheets.",
  },
  {
    icon: ShieldIcon,
    title: "Experienced Professionals",
    description: "Skilled professionals dedicated to serving individuals and businesses across India and the USA.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="border-b border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-4xl bg-[#fffdf4] px-6 py-10 text-[#00311f] md:px-12 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
            <div>
              <SectionLabel>Why GAATSCO</SectionLabel>
            </div>
            <div>
              <h2 className="max-w-4xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
                A partner built for precision, pace, and plain-language communication.
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="rounded-xl border border-[#d6d3bd] bg-[#fdfbf1] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d6d3bd] text-[#00311f]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0a4a2f]">{benefit.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-[#2f4a3c]">{benefit.description}</p>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-[#d6d3bd] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-[#2f4a3c] md:text-base">Strategic support for India and USA operations, startups, and established businesses.</p>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full rounded-full bg-[#00311f] text-white shadow-none hover:bg-[#001f14] sm:w-auto">
                    See how we can help you
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
