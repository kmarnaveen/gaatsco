import { ClockIcon, ShieldIcon, MessageCircleIcon, AwardIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { SectionLabel } from "@/components/section-label"
import Image from "next/image"
import Link from "next/link"

const benefits = [
  {
    icon: ClockIcon,
    title: "Timely & Accurate Compliance",
    description: "99% on-time filing record. Never miss a deadline or face penalties again.",
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
    <section id="about" className="border-b bg-gradient-to-b from-background to-primary/5 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border shadow-lg">
              <Image
                src="/professional-accounting-team-meeting-collaboration.jpg"
                alt="GAATSCO team collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl border border-primary/20 bg-card p-6 shadow-xl">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionLabel>Why GAATSCO</SectionLabel>
            <div className="mb-8">
              <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                A partner who actually cares about your success
              </h2>
              <p className="text-pretty text-muted-foreground md:text-lg">
                We&apos;re not here to just file forms — we&apos;re here to remove the weight of financial worry from your shoulders.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">{benefit.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg" className="shadow-md shadow-primary/20">
                  See how we can help you
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
