"use client"

import { Button } from "@/components/ui/button"
import { MenuIcon, PhoneIcon } from "@/components/icons"
import { Logo } from "@/components/logo"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-10 w-10 text-primary" />
            <div className="flex flex-col">
              <span className="text-base font-semibold leading-none tracking-tight">GAATSCO</span>
              <span className="text-xs text-muted-foreground">Pvt Ltd</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/process" className="text-sm font-medium transition-colors hover:text-primary">
              Process
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/contact">
              <Button className="hidden md:flex items-center gap-2">
                <PhoneIcon className="h-4 w-4" />
                Book Consultation
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t md:hidden">
          <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="flex flex-col gap-4 py-4">
              <Link href="/services" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="/about" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/process" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Process
              </Link>
              <Link href="/contact" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link href="/contact">
                <Button className="w-full">Book Consultation</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
