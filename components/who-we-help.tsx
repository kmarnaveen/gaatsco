import { BuildingIcon, BriefcaseIcon, UsersIcon, PlaneIcon } from "@/components/icons"
import { SectionLabel } from "@/components/section-label"
import Image from "next/image"

const clients = [
  {
    icon: UsersIcon,
    title: "Individuals",
    description: "Sleep easy knowing your taxes and investments are handled correctly",
    image: "/individuals-tax-planning-at-home.jpg",
    imageAlt: "Couple reviewing tax forms with a calculator and laptop at home",
  },
  {
    icon: BriefcaseIcon,
    title: "Startups",
    description: "Launch with clean books and compliance from day one — no scrambling later",
    image: "/startup-team-celebrating-laptop.jpg",
    imageAlt: "Startup team celebrating results around a laptop",
  },
  {
    icon: BuildingIcon,
    title: "SMEs",
    description: "Scale without the financial chaos — we grow with you",
    image: "/sme-team-working-session.jpg",
    imageAlt: "Small business team in a working session with laptops and reports",
  },
  {
    icon: PlaneIcon,
    title: "NRIs",
    description: "Manage India finances from anywhere — we bridge the distance",
    image: "/nri-video-call-advisor.jpg",
    imageAlt: "Professional on a video call with advisors from abroad",
  },
]

export function WhoWeHelp() {
  return (
    <section className="border-b border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-4xl bg-card px-6 py-10 text-foreground md:px-12 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
            <div>
              <SectionLabel>Who We Serve</SectionLabel>
            </div>
            <div>
              <h2 className="max-w-4xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
                From solo filers to growing teams, in India and abroad.
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client, index) => {
              const Icon = client.icon
              return (
                <article key={index} className="overflow-hidden border border-border bg-muted/50">
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
                    <Image
                      src={client.image || "/placeholder.svg"}
                      alt={client.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{client.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/80">{client.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
