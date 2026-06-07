import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import { SectionLabel } from "@/components/section-label"
import { getLatestBlogs } from "@/lib/blogs"

export const metadata = {
  title: "Blogs | GAATSCO Pvt Ltd - Financial Insights & Updates",
  description:
    "Read the latest articles on accounting, audit support, payroll, and financial management from the GAATSCO team.",
}

export default function BlogsPage() {
  const blogs = getLatestBlogs()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <SectionLabel>Insights & Updates</SectionLabel>
              <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Blog</h1>
              <p className="mx-auto max-w-2xl text-pretty text-muted-foreground md:text-lg">
                Practical guidance on accounting, compliance, payroll, and financial reporting — written for business owners, not accountants.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
