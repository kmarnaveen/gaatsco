import { ArrowRightIcon } from "@/components/icons"
import { formatBlogDate, type BlogPost } from "@/lib/blogs"
import Image from "next/image"
import Link from "next/link"

export function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <article className="group flex flex-col overflow-hidden border border-[#d6d3bd] bg-[#fdfbf1] transition-colors hover:border-[#bcbfa5]">
      <Link href={`/blogs/${blog.slug}`} className="relative aspect-video overflow-hidden bg-[#e2e6da]">
        <Image
          src={blog.image}
          alt={blog.imageAlt}
          fill
          className="object-cover grayscale transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 bg-[#00311f] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
          {blog.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2 text-xs text-[#8a9a86]">
          <time dateTime={blog.publishedAt}>{formatBlogDate(blog.publishedAt)}</time>
          <span>·</span>
          <span>{blog.readTime}</span>
        </div>
        <Link href={`/blogs/${blog.slug}`}>
          <h2 className="mb-2 text-2xl font-semibold leading-tight tracking-tight text-[#00311f] transition-colors group-hover:text-[#001f14]">
            {blog.title}
          </h2>
        </Link>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-[#2f4a3c]">{blog.excerpt}</p>
        <Link
          href={`/blogs/${blog.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#00311f] transition-colors hover:text-[#001f14]"
        >
          Read article
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
