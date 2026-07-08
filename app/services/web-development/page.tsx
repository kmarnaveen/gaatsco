import { ServiceDetailPage } from "@/components/service-detail-page"
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/components/structured-data"
import {
  webDevelopmentOfferings,
  webDevelopmentStrengths,
} from "@/lib/web-development"
import { webDevelopmentFaqs } from "@/lib/service-faqs"

export const metadata = {
  title: "Web Development Services | GAATSCO",
  description:
    "Modern, SEO-ready websites and web applications for businesses — including business websites, landing pages, e-commerce, custom web apps, and ongoing maintenance.",
  alternates: { canonical: "/services/web-development" },
}

export default function WebDevelopmentPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Web Development",
          description: metadata.description,
          path: "/services/web-development",
          serviceType: "Web development",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Web Development", path: "/services/web-development" },
        ])}
      />
      <ServiceDetailPage
        sectionLabel="Web Development"
        title="Web Development Services"
        intro="A slow or outdated website costs you customers. GAATSCO builds fast, modern, SEO-ready websites and web applications that present your business professionally and turn visitors into enquiries — with the same reliability we bring to your finances."
        image="/business-growth-chart-strategy-meeting-professiona.jpg"
        imageAlt="GAATSCO web development services"
        contactService="Web Development"
        contactCta="Start your website"
        offeringsTitle="Our web development services"
        offeringsSubtitle="From a simple business website to a full web application, we build and maintain a web presence that works for you."
        offerings={webDevelopmentOfferings}
        strengths={webDevelopmentStrengths}
        closingTitle="Ready to build or refresh your website?"
        closingText="Tell us about your business and goals, and we'll propose the right build — designed to perform, rank, and convert."
        faqs={webDevelopmentFaqs}
      />
    </>
  )
}
