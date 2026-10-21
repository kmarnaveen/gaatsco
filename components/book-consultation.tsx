"use client"

import type { ReactNode } from "react"
import { CALENDLY_URL } from "@/lib/contact"
import { getAttribution } from "@/lib/attribution"

const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js"
const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css"

type CalendlyWindow = Window & { Calendly?: { initPopupWidget: (options: { url: string }) => void } }

let widgetLoading: Promise<void> | null = null

/** Loads Calendly's popup widget once, on first sign of intent rather than on every page view. */
function loadWidget() {
  if ((window as CalendlyWindow).Calendly) return Promise.resolve()
  widgetLoading ??= new Promise<void>((resolve, reject) => {
    const css = document.createElement("link")
    css.rel = "stylesheet"
    css.href = WIDGET_CSS
    document.head.appendChild(css)
    const script = document.createElement("script")
    script.src = WIDGET_JS
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => {
      widgetLoading = null
      reject(new Error("Calendly widget failed to load"))
    }
    document.head.appendChild(script)
  })
  return widgetLoading
}

/** The booking link, carrying the visitor's campaign source so it shows on the Calendly booking. */
function bookingUrl() {
  const url = new URL(CALENDLY_URL)
  const attribution = getAttribution()
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const) {
    if (attribution[key]) url.searchParams.set(key, attribution[key])
  }
  return url.toString()
}

/**
 * Opens the Calendly booking popup. Without JavaScript (or if Calendly can't load) it is a
 * plain link to the booking page, so the visitor can always book.
 */
export function BookConsultation({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onPointerEnter={() => loadWidget().catch(() => {})}
      onFocus={() => loadWidget().catch(() => {})}
      onClick={async (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return
        event.preventDefault()
        const url = bookingUrl()
        try {
          await loadWidget()
          ;(window as CalendlyWindow).Calendly!.initPopupWidget({ url })
        } catch {
          window.location.href = url
        }
      }}
    >
      {children}
    </a>
  )
}
