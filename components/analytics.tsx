"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Script from "next/script"
import { GA_ID, GTM_ID, trackEvent } from "@/lib/analytics"
import { captureAttribution } from "@/lib/attribution"

// Contact-link clicks are intent signals, not completed conversations (count them as
// secondary conversions). Repeat taps on the same link within 2s are ignored.
const CONTACT_LINKS = [
  { selector: 'a[href^="tel:"]', event: "phone_click" },
  { selector: 'a[href*="wa.me/"]', event: "whatsapp_click" },
  { selector: 'a[href^="mailto:"]', event: "email_click" },
] as const

function useContactClickTracking() {
  useEffect(() => {
    let last = { href: "", at: 0 }
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const target = event.target as Element | null
      for (const { selector, event: name } of CONTACT_LINKS) {
        const link = target?.closest?.(selector)
        if (!link) continue
        const href = link.getAttribute("href") ?? ""
        const now = Date.now()
        if (href === last.href && now - last.at < 2000) return
        last = { href, at: now }
        trackEvent(name, {
          link_location: link.closest("[data-cta-location]")?.getAttribute("data-cta-location") ?? "page",
          page_path: window.location.pathname,
        })
        return
      }
    }
    document.addEventListener("click", onClick, { capture: true })
    return () => document.removeEventListener("click", onClick, { capture: true })
  }, [])
}

/** A completed Calendly booking is a lead, the same as a form submit (method tells them apart). */
function useCalendlyBookingTracking() {
  useEffect(() => {
    const seen = new Set<string>()
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return
      const data = event.data as { event?: string; payload?: { invitee?: { uri?: string } } } | null
      if (data?.event !== "calendly.event_scheduled") return
      const key = data.payload?.invitee?.uri ?? "booking"
      if (seen.has(key)) return
      seen.add(key)
      trackEvent("generate_lead", { method: "calendly", form_location: window.location.pathname })
    }
    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [])
}

export function Analytics() {
  const pathname = usePathname()
  useContactClickTracking()
  useCalendlyBookingTracking()

  useEffect(() => {
    captureAttribution()
  }, [pathname])

  if (GTM_ID) {
    return (
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
    )
  }

  if (GA_ID) {
    return (
      <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </>
    )
  }

  return null
}
