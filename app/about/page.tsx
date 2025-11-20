import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { About } from "@/components/about"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTA } from "@/components/cta"

export const metadata = {
  title: "About Us | GAATSCO Pvt Ltd - Expert Accounting & Tax Services",
  description:
    "Learn about GAATSCO Pvt Ltd, a dynamic accounting and advisory firm committed to empowering businesses with innovative financial solutions and expert guidance.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <About />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
