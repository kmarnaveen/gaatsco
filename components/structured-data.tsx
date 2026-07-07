const baseUrl = "https://gaatsco.com"

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "AccountingService"],
      "@id": `${baseUrl}/#organization`,
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
          streetAddress: "8-1-299/B, RP Business Park",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          addressLocality: "Manchester",
          addressRegion: "NH",
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
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "GAATSCO",
      publisher: { "@id": `${baseUrl}/#organization` },
      inLanguage: "en-IN",
    },
  ],
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
