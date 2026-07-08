import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionLabel } from "@/components/section-label"
import { BlogsTabs } from "@/components/blogs-tabs"
import { getAllBlogs } from "@/lib/blogs"

export const metadata = {
  title: "Blogs | GAATSCO - Financial Insights & Updates",
  description:
    "Read the latest articles on accounting, audit support, payroll, and financial management from the GAATSCO team.",
  alternates: { canonical: "/blogs" },
}

export default function BlogsPage() {
  const blogs = getAllBlogs()
  const webBlogs = blogs.filter((blog) => blog.category === "Web Development")
  const financeBlogs = blogs.filter((blog) => blog.category !== "Web Development")

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

              <BlogsTabs financeBlogs={financeBlogs} webBlogs={webBlogs} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
