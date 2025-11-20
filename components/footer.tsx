import Link from "next/link";
import {
  MapPinIcon,
  MailIcon,
  PhoneIcon,
  BuildingIcon,
} from "@/components/icons";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
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
            {/* </CHANGE> */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              Professional accounting, tax, and business advisory services for
              individuals and businesses across India.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/services#tax-compliance"
                  className="transition-colors hover:text-foreground"
                >
                  Tax & Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/services#accounting"
                  className="transition-colors hover:text-foreground"
                >
                  Accounting & Bookkeeping
                </Link>
              </li>
              <li>
                <Link
                  href="/services#business-advisory"
                  className="transition-colors hover:text-foreground"
                >
                  Business Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services#specialized"
                  className="transition-colors hover:text-foreground"
                >
                  Specialized Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
                  href="/process"
                  className="transition-colors hover:text-foreground"
                >
                  Our Process
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
                <a
                  href="https://maps.google.com/?q=8-1-2111+Ground+Floor+Toli+Chowki+Hyderabad+Telangana+India+500008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  8-1-2111 Ground Floor, Toli Chowki, Hyderabad, Telangana
                  500008
                </a>
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
                  href="mailto:mdkashif@gaatsco.com"
                  className="transition-colors hover:text-foreground"
                >
                  mdkashif@gaatsco.com
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
          <div className="mb-6 rounded-lg border bg-background/50 p-4">
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <BuildingIcon className="h-4 w-4" />
              Corporate Information
            </h4>
            <div className="grid gap-3 text-xs text-muted-foreground md:grid-cols-3">
              <div>
                <span className="font-medium text-foreground">
                  Company Name:
                </span>
                <p className="mt-1">GAATSCO PRIVATE LIMITED</p>
              </div>
              <div>
                <span className="font-medium text-foreground">CIN:</span>
                <p className="mt-1">U69201TS2025PTC197759</p>
              </div>
              <div>
                <span className="font-medium text-foreground">
                  Registration:
                </span>
                <p className="mt-1">RoC-Hyderabad | Reg No: 197759</p>
              </div>
              <div className="md:col-span-3">
                <span className="font-medium text-foreground">
                  Registered Office:
                </span>
                <p className="mt-1">
                  8-1-2111 Ground Floor, Toli Chowki, Hyderabad, Telangana,
                  India - 500008
                </p>
              </div>
            </div>
          </div>

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
