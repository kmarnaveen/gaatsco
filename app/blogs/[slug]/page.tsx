import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import { BlogContent } from "@/components/blog-content"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/components/icons"
import { blogs, formatBlogDate, getBlogBySlug, getLatestBlogs } from "@/lib/blogs"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) return {}

  return {
    title: `${blog.title} | GAATSCO Blog`,
    description: blog.excerpt,
    alternates: { canonical: `/blogs/${blog.slug}` },
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.excerpt,
      url: `/blogs/${blog.slug}`,
      publishedTime: blog.publishedAt,
      authors: [blog.author],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  const relatedBlogs = getLatestBlogs(4).filter((b) => b.slug !== blog.slug).slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <article>
          <div className="border-b bg-linear-to-b from-primary/5 to-background py-12 md:py-16">
            <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
              <Link
                href="/blogs"
                className="mb-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                ← Back to all articles
              </Link>
              <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {blog.category}
                </span>
                <time dateTime={blog.publishedAt}>{formatBlogDate(blog.publishedAt)}</time>
                <span>·</span>
                <span>{blog.readTime}</span>
                <span>·</span>
                <span>{blog.author}</span>
              </div>
              <h1 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {blog.title}
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">{blog.excerpt}</p>
            </div>
          </div>

          <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
            <div className="relative -mt-6 aspect-4/3 overflow-hidden rounded-xl border shadow-lg sm:aspect-16/8 md:-mt-10">
              <Image
                src={blog.image}
                alt={blog.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
            {blog.imageCredit && (
              <p className="mt-2 text-right text-xs text-muted-foreground">
                Photo by{" "}
                <a
                  href="https://www.pexels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary"
                >
                  {blog.imageCredit}
                </a>{" "}
                on Pexels
              </p>
            )}
          </div>

          <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
            <BlogContent sections={blog.content} />

            <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8">
              <h2 className="mb-2 text-xl font-semibold">Need help with {blog.category.toLowerCase()}?</h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Our team handles this every day for businesses across India and the USA. Start with a consultation.
              </p>
              <Link href={`/contact?service=${encodeURIComponent(blog.contactService)}`}>
                <Button size="lg" className="w-full shadow-md shadow-primary/20 sm:w-auto">
                  Talk to an expert
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </article>

        {relatedBlogs.length > 0 && (
          <section className="border-t bg-muted/30 py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
              <h2 className="mb-8 text-2xl font-bold">More from GAATSCO</h2>
              <div className="grid gap-8 md:grid-cols-3">
                {relatedBlogs.map((related) => (
                  <BlogCard key={related.slug} blog={related} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
