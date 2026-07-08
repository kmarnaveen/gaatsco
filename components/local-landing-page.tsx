import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { Button } from "@/components/ui/button"
import { SectionLabel } from "@/components/section-label"
import { ArrowRightIcon, CheckCircleIcon, PhoneIcon } from "@/components/icons"
import { hyderabad, type LocalService } from "@/lib/locations"
import Link from "next/link"

const PHONE_DISPLAY = "+91 86392 95812"
const PHONE_TEL = "+918639295812"

export function LocalLandingPage({ service }: { service: LocalService }) {
  const office = hyderabad.office
  const contactHref = `/contact?service=${encodeURIComponent(service.contactService)}`

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b bg-linear-to-br from-primary/10 via-background to-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href={`/${hyderabad.slug}`} className="transition-colors hover:text-primary">
                {hyderabad.name}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{service.shortName}</span>
            </nav>

            <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <SectionLabel>{hyderabad.name}</SectionLabel>
                <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  {service.heading}
                </h1>
                <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                  {service.intro}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href={contactHref}>
                    <Button size="lg" className="w-full shadow-md shadow-primary/25 sm:w-auto">
                      Book a free consultation
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a href={`tel:${PHONE_TEL}`}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      <PhoneIcon className="mr-2 h-4 w-4" />
                      Call {PHONE_DISPLAY}
                    </Button>
                  </a>
                </div>
              </div>

              {/* Local office card — reinforces local relevance and NAP */}
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                  Our {hyderabad.name} office
                </h2>
                <address className="mt-3 not-italic text-sm leading-relaxed text-foreground">
                  {office.lines.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < office.lines.length - 1 && <br />}
                    </span>
                  ))}
                </address>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="text-muted-foreground">Phone:</dt>
                    <dd>
                      <a href={`tel:${PHONE_TEL}`} className="font-medium hover:text-primary">
                        {PHONE_DISPLAY}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-muted-foreground">Hours:</dt>
                    <dd className="font-medium">Mon–Fri 9:30–18:30 · Sat 10:00–14:00</dd>
                  </div>
                </dl>
                <a
                  href={`https://maps.google.com/?q=${office.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  Get directions
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
            <div className="mb-8">
              <SectionLabel>What's included</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                How we help {hyderabad.name} businesses
              </h2>
            </div>
            <ul className="space-y-4">
              {service.highlights.map((point) => (
                <li key={point} className="flex gap-3">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href={service.relatedServiceHref}
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                See full {service.shortName.toLowerCase()} details
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Talk to a {hyderabad.name} specialist
            </h2>
            <p className="mb-8 text-muted-foreground">
              Book a free, no-obligation 30-minute consultation. We usually reply within 24 hours.
            </p>
            <Link href={contactHref}>
              <Button size="lg" className="shadow-md shadow-primary/20">
                Book a consultation
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  )
}
