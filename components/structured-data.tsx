import type { BlogPost } from "@/lib/blogs"

const baseUrl = "https://gaatsco.com"
const orgId = `${baseUrl}/#organization`

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
  telephone: "+91-86392-95812",
  foundingDate: "2025",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "8-1-299/B, RP Business Park, Shaikpet",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500008",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "311 S Mammoth Rd",
      addressLocality: "Manchester",
      addressRegion: "NH",
      postalCode: "03109",
      addressCountry: "US",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-86392-95812",
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

/** Site-wide Organization + WebSite graph (rendered once in the root layout). */
export function StructuredData() {
  return <JsonLd data={{ "@context": "https://schema.org", "@graph": [organization, website] }} />
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
