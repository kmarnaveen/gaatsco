import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { MapPinIcon } from "@/components/icons"
import { indiaOffice, usaOffice } from "@/lib/addresses"

export const metadata = {
  title: "Contact Us | GAATSCO - Get Expert Financial Advice",
  description:
    "Get in touch with GAATSCO for tax, accounting, and business advisory services. Visit our offices in Hyderabad, India or Manchester, USA.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Visit Our Offices</h2>
              <p className="text-muted-foreground">
                We have offices in India and the USA — reach out for in-person consultations
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="overflow-hidden rounded-xl border bg-background shadow-lg">
                <div className="grid gap-0 lg:grid-cols-5">
                  <div className="flex flex-col justify-center gap-4 bg-primary p-8 text-primary-foreground lg:col-span-2">
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="mt-1 h-6 w-6 shrink-0" />
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">{indiaOffice.label}</h3>
                        <p className="text-sm leading-relaxed opacity-90">
                          {indiaOffice.lines.map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < indiaOffice.lines.length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                    <a
                      href={`https://maps.google.com/?q=${indiaOffice.mapsQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary-foreground/90"
                    >
                      <MapPinIcon className="h-4 w-4" />
                      Open in Google Maps
                    </a>
                  </div>

                  <div className="lg:col-span-3">
                    <iframe
                      src={indiaOffice.mapsEmbed}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="GAATSCO India Office Location"
                    />
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border bg-background shadow-lg">
                <div className="grid gap-0 lg:grid-cols-5">
                  <div className="flex flex-col justify-center gap-4 bg-primary p-8 text-primary-foreground lg:col-span-2">
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="mt-1 h-6 w-6 shrink-0" />
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">{usaOffice.label}</h3>
                        <p className="text-sm leading-relaxed opacity-90">
                          {usaOffice.lines.map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < usaOffice.lines.length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                    <a
                      href={`https://maps.google.com/?q=${usaOffice.mapsQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary-foreground/90"
                    >
                      <MapPinIcon className="h-4 w-4" />
                      Open in Google Maps
                    </a>
                  </div>

                  <div className="lg:col-span-3">
                    <iframe
                      src={usaOffice.mapsEmbed}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="GAATSCO USA Office Location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  )
}
