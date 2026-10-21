// Remembers where a visitor came from so it can be saved with their lead.
// Visitors often land on a service page from an ad or search and only fill the form
// several pages (or days) later, so the source has to be stored, not read at submit.

const STORAGE_KEY = "gaatsco_attribution"
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000 // Google Ads keeps a gclid valid for 90 days

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const
const CLICK_ID_KEYS = ["gclid", "gbraid", "wbraid", "fbclid", "msclkid"] as const

export type Attribution = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  click_id?: string
  referrer?: string
  landing_page?: string
  captured_at?: number
}

function read(): Attribution | null {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") as Attribution | null
    if (stored?.captured_at && Date.now() - stored.captured_at < MAX_AGE_MS) return stored
  } catch {
    // Storage blocked or corrupt: fall through and treat as no attribution.
  }
  return null
}

/** Records the current visit if it carries campaign data or an external referrer. */
export function captureAttribution() {
  if (typeof window === "undefined") return
  const params = new URLSearchParams(window.location.search)
  const utms = Object.fromEntries(UTM_KEYS.flatMap((k) => (params.get(k) ? [[k, params.get(k)]] : [])))
  const clickKey = CLICK_ID_KEYS.find((k) => params.get(k))
  const referrer = document.referrer && !document.referrer.startsWith(window.location.origin) ? document.referrer : ""

  // Campaign links (UTMs / ad click ids) always replace the stored touch; a plain external
  // referrer only fills an empty slot; direct or internal visits never overwrite anything.
  if (!Object.keys(utms).length && !clickKey && (!referrer || read())) return

  const touch: Attribution = {
    ...utms,
    click_id: clickKey ? `${clickKey}:${params.get(clickKey)}` : undefined,
    referrer: referrer || undefined,
    landing_page: window.location.pathname + window.location.search,
    captured_at: Date.now(),
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(touch))
  } catch {
    // Storage unavailable (private mode etc.): the lead is still sent, just without source.
  }
}

export function getAttribution(): Attribution {
  return read() ?? {}
}
