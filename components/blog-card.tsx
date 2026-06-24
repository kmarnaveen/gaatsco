import { ArrowRightIcon } from "@/components/icons"
import { formatBlogDate, type BlogPost } from "@/lib/blogs"
import Image from "next/image"
import Link from "next/link"

export function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <article className="group flex flex-col overflow-hidden border border-[#c8c9e8] bg-[#f4f4f1] transition-colors hover:border-[#a9abe2]">
      <Link href={`/blogs/${blog.slug}`} className="relative aspect-video overflow-hidden bg-[#dedfef]">
        <Image
          src={blog.image}
          alt={blog.imageAlt}
          fill
          className="object-cover grayscale transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 bg-[#262bce] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
          {blog.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2 text-xs text-[#8f93d8]">
          <time dateTime={blog.publishedAt}>{formatBlogDate(blog.publishedAt)}</time>
          <span>·</span>
          <span>{blog.readTime}</span>
        </div>
        <Link href={`/blogs/${blog.slug}`}>
          <h2 className="mb-2 text-2xl font-semibold leading-tight tracking-tight text-[#262bce] transition-colors group-hover:text-[#1f24b5]">
            {blog.title}
          </h2>
        </Link>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-[#4f54cc]">{blog.excerpt}</p>
        <Link
          href={`/blogs/${blog.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#262bce] transition-colors hover:text-[#1f24b5]"
        >
          Read article
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
