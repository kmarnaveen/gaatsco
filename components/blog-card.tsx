import { ArrowRightIcon } from "@/components/icons"
import { formatBlogDate, type BlogPost } from "@/lib/blogs"
import Image from "next/image"
import Link from "next/link"

export function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <Link href={`/blogs/${blog.slug}`} className="relative aspect-[16/9] overflow-hidden bg-muted">
        <Image
          src={blog.image}
          alt={blog.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur">
          {blog.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
          <time dateTime={blog.publishedAt}>{formatBlogDate(blog.publishedAt)}</time>
          <span>·</span>
          <span>{blog.readTime}</span>
        </div>
        <Link href={`/blogs/${blog.slug}`}>
          <h2 className="mb-2 text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
            {blog.title}
          </h2>
        </Link>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{blog.excerpt}</p>
        <Link
          href={`/blogs/${blog.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Read article
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
