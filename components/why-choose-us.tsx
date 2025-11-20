import { ClockIcon, ShieldIcon, MessageCircleIcon, AwardIcon } from "@/components/icons"
import Image from "next/image"

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
    title: "Technology-Driven Accounting Solutions",
    description: "Modern tools and processes that give you real-time insights and control.",
  },
  {
    icon: ShieldIcon,
    title: "Experienced Chartered Professionals",
    description: "15+ years of expertise serving individuals and businesses across India.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="border-b bg-muted/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border shadow-lg">
              <Image
                src="/professional-accounting-team-meeting-collaboration.jpg"
                alt="GAATSCO team collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-lg border bg-card p-6 shadow-xl">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">Why Choose GAATSCO</h2>
              <p className="text-pretty text-muted-foreground md:text-lg">
                We're more than just accountants—we're your trusted financial partners
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
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
          </div>
        </div>
      </div>
    </section>
  )
}
