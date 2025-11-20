import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { MapPinIcon } from "@/components/icons"

export const metadata = {
  title: "Contact Us | GAATSCO Pvt Ltd - Get Expert Financial Advice",
  description:
    "Get in touch with GAATSCO Pvt Ltd for tax, accounting, and business advisory services. Visit our office in Toli Chowki, Hyderabad or call us today.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Visit Our Office</h2>
              <p className="text-muted-foreground">
                Located in the heart of Hyderabad, we're easily accessible for in-person consultations
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border bg-background shadow-lg">
              <div className="grid gap-0 lg:grid-cols-5">
                <div className="flex flex-col justify-center gap-4 bg-primary p-8 text-primary-foreground lg:col-span-2">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="mt-1 h-6 w-6 flex-shrink-0" />
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">Our Address</h3>
                      <p className="text-sm leading-relaxed opacity-90">
                        8-1-2111 Ground Floor
                        <br />
                        Toli Chowki
                        <br />
                        Hyderabad, Telangana
                        <br />
                        India - 500008
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=8-1-2111+Ground+Floor+Toli+Chowki+Hyderabad+Telangana+India+500008"
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5396286584625!2d78.41289931487562!3d17.38528708806892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9738e28d968d%3A0x5f0b3c8c1d0e5f8c!2sToli%20Chowki%2C%20Hyderabad%2C%20Telangana%20500008!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GAATSCO Office Location"
                  />
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
