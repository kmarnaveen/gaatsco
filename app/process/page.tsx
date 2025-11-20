import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Process } from "@/components/process"
import { CTA } from "@/components/cta"

export const metadata = {
  title: "Our Process | GAATSCO Pvt Ltd - Simple 3-Step Workflow",
  description:
    "Discover our simple 3-step process: Schedule a call, share your details, and stay compliant. We make financial management effortless.",
}

export default function ProcessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
