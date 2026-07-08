import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { Button } from "@/components/ui/button"
import { SectionLabel } from "@/components/section-label"
import { ServiceFaq } from "@/components/service-faq"
import { ArrowRightIcon } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"
import type { ComponentType, SVGProps } from "react"
import type { Faq } from "@/lib/faqs"

type Offering = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
}

type Strength = Offering

type ServiceDetailPageProps = {
  sectionLabel: string
  title: string
  intro: string
  image: string
  imageAlt: string
  contactService: string
  contactCta: string
  offeringsTitle: string
  offeringsSubtitle: string
  offerings: Offering[]
  strengths: Strength[]
  closingTitle: string
  closingText: string
  faqs?: Faq[]
}

export function ServiceDetailPage({
  sectionLabel,
  title,
  intro,
  image,
  imageAlt,
  contactService,
  contactCta,
  offeringsTitle,
  offeringsSubtitle,
  offerings,
  strengths,
  closingTitle,
  closingText,
  faqs,
}: ServiceDetailPageProps) {
  const contactHref = `/contact?service=${encodeURIComponent(contactService)}`

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b bg-linear-to-br from-primary/10 via-background to-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <Link
                  href="/services"
                  className="mb-6 inline-flex text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  ← Back to all services
                </Link>
                <SectionLabel>{sectionLabel}</SectionLabel>
                <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  {title}
                </h1>
                <p className="mb-6 text-lg leading-relaxed text-muted-foreground">{intro}</p>
                <Link href={contactHref}>
                  <Button size="lg" className="shadow-md shadow-primary/25">
                    {contactCta}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl border shadow-xl">
                <Image src={image} alt={imageAlt} fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <SectionLabel>What We Offer</SectionLabel>
              <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">{offeringsTitle}</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">{offeringsSubtitle}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {offerings.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-md">
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
              <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Expertise you can rely on</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {strengths.map((item) => {
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

        {faqs && faqs.length > 0 ? <ServiceFaq faqs={faqs} /> : null}

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">{closingTitle}</h2>
            <p className="mb-8 text-muted-foreground">{closingText}</p>
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
