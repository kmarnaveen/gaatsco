import { BuildingIcon, BriefcaseIcon, UsersIcon, PlaneIcon } from "@/components/icons"
import Image from "next/image"

const clients = [
  {
    icon: UsersIcon,
    title: "Individuals",
    description: "Personal tax returns, investment planning, and financial advisory",
    image: "/professional-individual-reviewing-financial-docume.jpg",
  },
  {
    icon: BriefcaseIcon,
    title: "Startups",
    description: "Company registration, compliance, and growth advisory",
    image: "/startup-founders-celebrating-success-in-modern-off.jpg",
  },
  {
    icon: BuildingIcon,
    title: "SMEs",
    description: "Complete accounting, bookkeeping, and CFO services",
    image: "/small-business-owner-managing-finances-in-contempo.jpg",
  },
  {
    icon: PlaneIcon,
    title: "NRIs",
    description: "NRI taxation, rental property accounting, and repatriation",
    image: "/global-professional-working-remotely-with-document.jpg",
  },
]

export function WhoWeHelp() {
  return (
    <section className="border-b bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">Who We Help</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground md:text-lg">
            Tailored financial solutions for every stage of your journey
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client, index) => {
            const Icon = client.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:border-accent hover:shadow-lg"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={client.image || "/placeholder.svg"}
                    alt={`${client.title} - GAATSCO Services`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{client.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{client.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
