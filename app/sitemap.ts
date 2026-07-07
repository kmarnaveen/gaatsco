import type { MetadataRoute } from "next"
import { blogs } from "@/lib/blogs"

const baseUrl = "https://gaatsco.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/taxation-india`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/taxation-us`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/audit-support`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blogs`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.6 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
