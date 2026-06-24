"use client"

import { Button } from "@/components/ui/button"
import { MenuIcon, PhoneIcon } from "@/components/icons"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/75 backdrop-blur-xl supports-backdrop-filter:bg-background/65">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <Logo className="h-10 w-10 text-primary" />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none tracking-tight">GAATSCO</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/75 p-1.5 shadow-sm md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                  isActive(link.href)
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "text-foreground/70 hover:bg-muted/80 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="tel:+918639295812" className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Call us" className="rounded-full">
                <PhoneIcon className="h-4 w-4" />
              </Button>
            </a>
            <Link href="/contact" className="hidden md:block">
              <Button className="items-center gap-2 rounded-full px-5 shadow-md shadow-primary/25">
                <PhoneIcon className="h-4 w-4" />
                Book Consultation
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="animate-in slide-in-from-top-2 border-t bg-background/95 duration-200 md:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 md:px-6 lg:px-8" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="mt-2" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full shadow-sm">Book a Consultation</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
