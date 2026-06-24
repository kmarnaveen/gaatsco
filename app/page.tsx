import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { WhoWeHelp } from "@/components/who-we-help"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <WhoWeHelp />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
