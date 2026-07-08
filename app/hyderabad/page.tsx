import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { SectionLabel } from "@/components/section-label"
import { ArrowRightIcon } from "@/components/icons"
import { JsonLd, breadcrumbSchema } from "@/components/structured-data"
import { hyderabad, hyderabadServices } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Accounting, Tax & Web Development in Hyderabad | GAATSCO",
  description:
    "GAATSCO is a Hyderabad-based accounting, tax, audit, and web development firm serving startups, SMEs, and NRIs across Telangana. Book a free consultation.",
  alternates: { canonical: `/${hyderabad.slug}` },
}

export default function HyderabadHubPage() {
  const office = hyderabad.office

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: hyderabad.name, path: `/${hyderabad.slug}` },
        ])}
      />
      <Header />
      <main className="flex-1">
        <section className="border-b bg-linear-to-br from-primary/10 via-background to-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionLabel>{hyderabad.name}, {hyderabad.region}</SectionLabel>
            <h1 className="mb-4 max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Accounting, Tax &amp; Web Development in Hyderabad
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              GAATSCO is a Hyderabad-based firm helping startups, SMEs, professionals, and NRIs
              with accounting, taxation, audit support, and web development. Our team in Shaikpet
              works with businesses across Hyderabad and Telangana — {office.lines.join(", ")}.
            </p>
          </div>
        </section>

        <section className="border-b py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mb-12">
              <SectionLabel>Our Hyderabad services</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                How we help businesses in Hyderabad
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {hyderabadServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${hyderabad.slug}/${service.slug}`}
                  className="group flex flex-col rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-2 text-lg font-semibold">{service.heading}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.intro}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  )
}
