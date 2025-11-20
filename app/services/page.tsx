import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Services } from "@/components/services"
import { CTA } from "@/components/cta"

export const metadata = {
  title: "Our Services | GAATSCO Pvt Ltd - Tax, Accounting & Business Advisory",
  description:
    "Explore comprehensive financial services including tax compliance, GST registration, bookkeeping, business advisory, and specialized solutions for individuals, startups, and SMEs.",
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
