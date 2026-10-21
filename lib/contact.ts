export const PHONE_DISPLAY = "+91 86392 95812"
export const PHONE_TEL = "+918639295812"
export const EMAIL = "info@gaatsco.com"

/** The 30-minute consultation event on Calendly. "Book" buttons open this. */
export const CALENDLY_URL = "https://calendly.com/mdkashif/30min"

/** The one label for the primary action, used everywhere it appears. */
export const CONSULTATION_CTA = "Book a 30-minute consultation"

export function whatsappHref(message = "Hi GAATSCO, I'd like to book a consultation.") {
  return `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(message)}`
}
