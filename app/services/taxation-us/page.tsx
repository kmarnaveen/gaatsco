import { ServiceDetailPage } from "@/components/service-detail-page"
import {
  usTaxationOfferings,
  usTaxationStrengths,
} from "@/lib/taxation-us"

export const metadata = {
  title: "US Taxation Services | GAATSCO Pvt Ltd",
  description:
    "US tax preparation and compliance including individual and business returns, federal and state filing, tax planning, payroll taxes, and cross-border NRI support.",
}

export default function USTaxationPage() {
  return (
    <ServiceDetailPage
      sectionLabel="US Taxation"
      title="Taxation Services for the United States"
      intro="US tax laws are complex — federal and state obligations, business entity rules, and cross-border reporting create real risk for non-compliance. GAATSCO's US team provides accurate filing, strategic planning, and specialized support for clients with India–USA operations."
      image="/global-professional-working-remotely-with-document.jpg"
      imageAlt="GAATSCO US taxation services"
      contactService="US Taxation Services"
      contactCta="Get US tax support"
      offeringsTitle="Our US taxation services"
      offeringsSubtitle="Expert tax preparation and compliance for individuals, businesses, and cross-border clients in the USA."
      offerings={usTaxationOfferings}
      strengths={usTaxationStrengths}
      closingTitle="Need help with US tax filing?"
      closingText="Whether you're an individual, business owner, or NRI with US tax obligations — our team across India and the USA is here to help."
    />
  )
}
