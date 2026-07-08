import { ServiceDetailPage } from "@/components/service-detail-page"
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/components/structured-data"
import {
  indiaTaxationOfferings,
  indiaTaxationStrengths,
} from "@/lib/taxation-india"
import { indiaTaxationFaqs } from "@/lib/service-faqs"

export const metadata = {
  title: "India Taxation Services | GAATSCO",
  description:
    "Indian tax services including income tax filing, GST compliance, TDS/TCS, corporate tax, tax planning, and assessment support from GAATSCO Hyderabad.",
  alternates: { canonical: "/services/taxation-india" },
}

export default function IndiaTaxationPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "India Taxation Services",
          description: metadata.description,
          path: "/services/taxation-india",
          serviceType: "Tax preparation and compliance",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "India Taxation Services", path: "/services/taxation-india" },
        ])}
      />
      <ServiceDetailPage
      sectionLabel="India Taxation"
      title="Taxation Services for India"
      intro="Managing Indian tax compliance requires staying on top of income tax, GST, TDS, and corporate tax obligations — all with strict deadlines and evolving regulations. GAATSCO's India team handles your full tax lifecycle so you stay compliant and avoid penalties."
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
      faqs={indiaTaxationFaqs}
      />
    </>
  )
}
