"use client"

import { PhoneIcon, MessageCircleIcon } from "@/components/icons"

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3 md:hidden">
      <a
        href="https://wa.me/918639295812"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105 active:scale-95"
      >
        <MessageCircleIcon className="h-6 w-6" />
      </a>
      <a
        href="tel:+918639295812"
        aria-label="Call GAATSCO"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95"
      >
        <PhoneIcon className="h-6 w-6" />
      </a>
    </div>
  )
}
