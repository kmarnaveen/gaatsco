import type { ReactNode } from "react"

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
      {children}
    </p>
  )
}
