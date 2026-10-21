export const GA_ID = process.env.NEXT_PUBLIC_GA_ID
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

type AnalyticsWindow = Window & {
  dataLayer?: Record<string, unknown>[]
  gtag?: (...args: unknown[]) => void
}

/**
 * Sends a conversion or interaction event. With GTM configured the event goes to the
 * dataLayer (wire it up as a trigger there); otherwise straight to GA4 via gtag.
 * No-op when neither is configured.
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return
  const w = window as AnalyticsWindow
  if (GTM_ID) {
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push({ event: name, ...params })
    return
  }
  w.gtag?.("event", name, params)
}
