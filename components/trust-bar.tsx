import { CheckCircleIcon } from "@/components/icons"

const stats = [
  { value: "500+", label: "Clients served", sub: "Across India & USA" },
  { value: "99%", label: "On-time compliance", sub: "Deadlines met, every time" },
  { value: "24 hours", label: "Response time", sub: "Prompt and predictable replies" },
]

const trustPoints = [
  "Confidential & secure",
  "No hidden fees",
  "Initial consultation",
]

export function TrustBar() {
  return (
    <section className="border-b border-border/60 bg-background/75 py-10 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border/60 bg-card/70 p-5 text-center shadow-sm">
              <p className="text-2xl font-bold text-primary md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:grid-cols-3 sm:gap-6">
          {trustPoints.map((point) => (
            <span key={point} className="flex items-center justify-center gap-1.5 sm:justify-center">
              <CheckCircleIcon className="h-3.5 w-3.5 shrink-0 text-primary" />
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
