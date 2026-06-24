import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.09em] text-primary",
        className
      )}
    >
      <span className="h-2 w-2 bg-primary" aria-hidden="true" />
      {children}
    </p>
  )
}
