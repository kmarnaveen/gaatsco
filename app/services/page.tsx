import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Services } from "@/components/services"
import { CTA } from "@/components/cta"

export const metadata = {
  title: "Our Services | GAATSCO - Tax, Audit, Accounting & Financial Services",
  description:
    "Explore GAATSCO services including India and US taxation, audit support, accounting, payroll management, and financial statement services.",
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
