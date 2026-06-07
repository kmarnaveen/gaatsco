import Link from "next/link";
import { MapPinIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { indiaOffice, usaOffice } from "@/lib/addresses";

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-primary/5 to-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-3">
              <Logo className="h-10 w-10 text-primary" />
              <div className="flex flex-col">
                <span className="text-base font-semibold leading-none tracking-tight">
                  GAATSCO
                </span>
                <span className="text-xs text-muted-foreground">Pvt Ltd</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Professional accounting, tax, and business advisory services for
              individuals and businesses across India and the USA.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/services/audit-support"
                  className="transition-colors hover:text-foreground"
                >
                  Audit Support Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/taxation-india"
                  className="transition-colors hover:text-foreground"
                >
                  India Taxation Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/taxation-us"
                  className="transition-colors hover:text-foreground"
                >
                  US Taxation Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services#accounting"
                  className="transition-colors hover:text-foreground"
                >
                  Accounting
                </Link>
              </li>
              <li>
                <Link
                  href="/services#payroll-management"
                  className="transition-colors hover:text-foreground"
                >
                  Payroll Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services#financial-statement-preparation"
                  className="transition-colors hover:text-foreground"
                >
                  Financial Statement Preparation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#financial-statement-services"
                  className="transition-colors hover:text-foreground"
                >
                  Financial Statement Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="transition-colors hover:text-foreground"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{indiaOffice.label}</p>
                  <a
                    href={`https://maps.google.com/?q=${indiaOffice.mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {indiaOffice.lines.join(", ")}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{usaOffice.label}</p>
                  <a
                    href={`https://maps.google.com/?q=${usaOffice.mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {usaOffice.lines.join(", ")}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+919182036699"
                  className="transition-colors hover:text-foreground"
                >
                  +91 91820 36699
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:info@gaatsco.com"
                  className="transition-colors hover:text-foreground"
                >
                  info@gaatsco.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row">
            <p>
              © {new Date().getFullYear()} GAATSCO PRIVATE LIMITED. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
