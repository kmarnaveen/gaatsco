import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import { SectionLabel } from "@/components/section-label"
import { getLatestBlogs } from "@/lib/blogs"

export const metadata = {
  title: "Blogs | GAATSCO - Financial Insights & Updates",
  description:
    "Read the latest articles on accounting, audit support, payroll, and financial management from the GAATSCO team.",
  alternates: { canonical: "/blogs" },
}

export default function BlogsPage() {
  const blogs = getLatestBlogs()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border/60 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#fffdf4] px-6 py-10 text-[#00311f] md:px-12 md:py-14">
              <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
                <div>
                  <SectionLabel>Latest News</SectionLabel>
                </div>
                <div>
                  <h1 className="max-w-4xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
                    Join us on the forefront of accounting evolution, where each update reflects practical client value.
                  </h1>
                </div>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                  <BlogCard key={blog.slug} blog={blog} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
