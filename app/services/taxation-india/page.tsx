import { ServiceDetailPage } from "@/components/service-detail-page"
import {
  indiaTaxationOfferings,
  indiaTaxationStrengths,
} from "@/lib/taxation-india"

export const metadata = {
  title: "India Taxation Services | GAATSCO Pvt Ltd",
  description:
    "Indian tax services including income tax filing, GST compliance, TDS/TCS, corporate tax, tax planning, and assessment support from GAATSCO Hyderabad.",
}

export default function IndiaTaxationPage() {
  return (
    <ServiceDetailPage
      sectionLabel="India Taxation"
      title="Taxation Services for India"
      intro="Managing Indian tax compliance requires staying on top of income tax, GST, TDS, and corporate tax obligations — all with strict deadlines and evolving regulations. GAATSCO's India team handles your full tax lifecycle so you stay compliant and penalty-free."
      image="/tax-compliance-documents-calculator-professional.jpg"
      imageAlt="GAATSCO India taxation services"
      contactService="India Taxation Services"
      contactCta="Get India tax support"
      offeringsTitle="Our India taxation services"
      offeringsSubtitle="Comprehensive tax support for individuals, startups, SMEs, and growing businesses in India."
      offerings={indiaTaxationOfferings}
      strengths={indiaTaxationStrengths}
      closingTitle="Need help with Indian tax compliance?"
      closingText="From GST returns to income tax filing and tax audits — our Hyderabad team is ready to support you."
    />
  )
}
