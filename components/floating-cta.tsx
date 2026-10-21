"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { PhoneIcon, MessageCircleIcon, CalendarIcon } from "@/components/icons"
import { PHONE_TEL, whatsappHref } from "@/lib/contact"
import { BookConsultation } from "@/components/book-consultation"

/** Pre-fills the chat with the page the visitor was reading, e.g. "help with US Taxation Services". */
function usePageWhatsappHref() {
  const pathname = usePathname()
  const [href, setHref] = useState(() => whatsappHref())

  useEffect(() => {
    const topic = pathname === "/" ? "" : document.querySelector("h1")?.textContent?.trim()
    setHref(whatsappHref(topic ? `Hi GAATSCO, I'd like help with ${topic}.` : undefined))
  }, [pathname])

  return href
}

/** True while the page's lead form is on screen, so the bar doesn't cover it. */
function useContactFormVisible() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const form = document.getElementById("contact")
    if (!form) return setVisible(false)
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 })
    observer.observe(form)
    return () => observer.disconnect()
  }, [pathname])

  return visible
}

export function FloatingCTA() {
  const whatsapp = usePageWhatsappHref()
  const formVisible = useContactFormVisible()

  return (
    <>
      {/* Mobile: labelled bottom bar. The spacer keeps it from covering the footer. */}
      <div className="h-16 md:hidden" aria-hidden="true" />
      <nav
        aria-label="Quick contact"
        data-cta-location="sticky-bar"
        className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-border bg-background/95 px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur transition-transform duration-300 md:hidden ${
          formVisible ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center justify-center gap-1.5 rounded-full bg-[#15803D] text-sm font-semibold text-white"
        >
          <MessageCircleIcon className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex h-12 items-center justify-center gap-1.5 rounded-full border border-primary text-sm font-semibold text-primary"
        >
          <PhoneIcon className="h-4 w-4" />
          Call
        </a>
        <BookConsultation className="flex h-12 items-center justify-center gap-1.5 rounded-full bg-primary text-sm font-semibold text-primary-foreground">
          <CalendarIcon className="h-4 w-4" />
          Book
        </BookConsultation>
      </nav>

      {/* Desktop: WhatsApp is how many NRI and US clients prefer to reach us. */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        data-cta-location="floating-whatsapp"
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-[#15803D] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#15803D]/30 transition-transform hover:scale-105 md:flex"
      >
        <MessageCircleIcon className="h-5 w-5" />
        WhatsApp us
      </a>
    </>
  )
}
