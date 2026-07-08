import type { BlogPost } from "@/lib/blogs"
import { indiaOffice, usaOffice } from "@/lib/addresses"

const baseUrl = "https://gaatsco.com"
const orgId = `${baseUrl}/#organization`

type Office = typeof indiaOffice

function postalAddress(office: Office) {
  return {
    "@type": "PostalAddress",
    streetAddress: office.street,
    addressLocality: office.locality,
    addressRegion: office.region,
    postalCode: office.postalCode,
    addressCountry: office.country,
  }
}

function localBusiness(office: Office, id: string) {
  return {
    "@type": "AccountingService",
    "@id": `${baseUrl}/#${id}`,
    name: `GAATSCO — ${office.locality}`,
    parentOrganization: { "@id": orgId },
    url: baseUrl,
    image: `${baseUrl}/opengraph-image`,
    telephone: "+91 86392 95812",
    email: "info@gaatsco.com",
    priceRange: "$$",
    address: postalAddress(office),
    geo: {
      "@type": "GeoCoordinates",
      latitude: office.geo.lat,
      longitude: office.geo.lng,
    },
    hasMap: `https://maps.google.com/?q=${office.mapsQuery}`,
    openingHoursSpecification: office.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
  }
}

const organization = {
  "@type": ["Organization", "AccountingService"],
  "@id": orgId,
  name: "GAATSCO",
  alternateName: "GAATSCO Accounting, Tax & Advisory",
  url: baseUrl,
  logo: `${baseUrl}/icon-light-32x32.png`,
  image: `${baseUrl}/opengraph-image`,
  description:
    "GAATSCO provides professional accounting, tax compliance, GST registration, bookkeeping, payroll, and business advisory services for founders, startups, SMEs, and NRIs across India and the USA.",
  email: "info@gaatsco.com",
  telephone: "+91 86392 95812",
  foundingDate: "2025",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
  ],
  address: [postalAddress(indiaOffice), postalAddress(usaOffice)],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 86392 95812",
    email: "info@gaatsco.com",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
}

const website = {
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  url: baseUrl,
  name: "GAATSCO",
  publisher: { "@id": orgId },
  inLanguage: "en-IN",
}

/** Generic JSON-LD script tag. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/** Site-wide Organization + per-location LocalBusiness + WebSite graph. */
export function StructuredData() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          organization,
          localBusiness(indiaOffice, "office-hyderabad"),
          localBusiness(usaOffice, "office-manchester"),
          website,
        ],
      }}
    />
  )
}

/** BreadcrumbList schema. Pass ordered { name, path } crumbs, root first. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
  }
}

/** BlogPosting schema for an individual article. */
export function blogPostingSchema(blog: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.image,
    datePublished: blog.publishedAt,
    dateModified: blog.publishedAt,
    articleSection: blog.category,
    inLanguage: "en-IN",
    author: { "@type": "Organization", name: blog.author, url: baseUrl },
    publisher: { "@id": orgId },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blogs/${blog.slug}`,
    },
  }
}

/** Service schema for a service detail page. */
export function serviceSchema(input: {
  name: string
  description: string
  path: string
  serviceType?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType ?? input.name,
    url: `${baseUrl}${input.path}`,
    provider: { "@id": orgId },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
    ],
  }
}

/** FAQPage schema from question/answer pairs. */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }
}
