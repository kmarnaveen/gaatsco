import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { Button } from "@/components/ui/button"
import { SectionLabel } from "@/components/section-label"
import {
  auditSupportOfferings,
  auditSupportStrengths,
} from "@/lib/audit-support"
import { ArrowRightIcon } from "@/components/icons"
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/components/structured-data"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Audit Support Services | GAATSCO",
  description:
    "Comprehensive audit support services including documentation preparation, compliance review, internal control evaluation, on-site support, and post-audit consultation.",
  alternates: { canonical: "/services/audit-support" },
}

export default function AuditSupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd
        data={serviceSchema({
          name: "Audit Support Services",
          description: metadata.description,
          path: "/services/audit-support",
          serviceType: "Audit support",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Audit Support Services", path: "/services/audit-support" },
        ])}
      />
      <Header />
      <main className="flex-1">
        <section className="border-b bg-linear-to-br from-primary/10 via-background to-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <Link
                  href="/services#audit-support"
                  className="mb-6 inline-flex text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  ← Back to all services
                </Link>
                <SectionLabel>Audit Support</SectionLabel>
                <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  Comprehensive Audit Support Services
                </h1>
                <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                  Navigating the intricacies of audits is critical to maintaining the financial health and integrity of
                  your business. At GAATSCO, we offer audit support that goes beyond conventional preparation — ensuring
                  your audit experience is seamless and adds significant value to your operations.
                </p>
                <Link href="/contact?service=Audit%20Support%20Services">
                  <Button size="lg" className="shadow-md shadow-primary/25">
                    Get audit support
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl border shadow-xl">
                <Image
                  src="/professional-individual-reviewing-financial-docume.jpg"
                  alt="GAATSCO audit support services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <SectionLabel>What We Offer</SectionLabel>
              <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
                Delving deeper into our audit support services
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                Following are the audit support services you can benefit from:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {auditSupportOfferings.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-b bg-linear-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <SectionLabel>Why GAATSCO</SectionLabel>
              <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
                Expertise you can rely on
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {auditSupportStrengths.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="text-center md:text-left">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-primary to-primary/80 text-primary-foreground md:mx-0">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Ready for a smoother audit?</h2>
            <p className="mb-8 text-muted-foreground">
              Whether you need pre-audit preparation, on-site support, or post-audit guidance — GAATSCO is here to help
              businesses across India and the USA.
            </p>
            <Link href="/contact?service=Audit%20Support%20Services">
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
