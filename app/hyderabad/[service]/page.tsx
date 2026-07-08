import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { LocalLandingPage } from "@/components/local-landing-page"
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/components/structured-data"
import { getHyderabadService, hyderabad, hyderabadServices } from "@/lib/locations"

export const dynamicParams = false

export function generateStaticParams() {
  return hyderabadServices.map((service) => ({ service: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>
}): Promise<Metadata> {
  const { service: slug } = await params
  const service = getHyderabadService(slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/${hyderabad.slug}/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `https://gaatsco.com/${hyderabad.slug}/${service.slug}`,
    },
  }
}

export default async function HyderabadServicePage({
  params,
}: {
  params: Promise<{ service: string }>
}) {
  const { service: slug } = await params
  const service = getHyderabadService(slug)
  if (!service) notFound()

  const path = `/${hyderabad.slug}/${service.slug}`

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${service.shortName} in ${hyderabad.name}`,
          description: service.description,
          path,
          serviceType: service.serviceType,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: hyderabad.name, path: `/${hyderabad.slug}` },
          { name: service.shortName, path },
        ])}
      />
      <LocalLandingPage service={service} />
    </>
  )
}
