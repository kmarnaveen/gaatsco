"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { BlogCard } from "@/components/blog-card"
import type { BlogPost } from "@/lib/blogs"

export function BlogsTabs({
  financeBlogs,
  webBlogs,
}: {
  financeBlogs: BlogPost[]
  webBlogs: BlogPost[]
}) {
  return (
    <Tabs defaultValue="finance" className="mt-12">
      <TabsList className="h-11 w-full max-w-md p-1">
        <TabsTrigger value="finance" className="text-sm">
          Finance &amp; Accounting
        </TabsTrigger>
        <TabsTrigger value="web" className="text-sm">
          Web Development
        </TabsTrigger>
      </TabsList>

      <TabsContent value="finance" forceMount className="data-[state=inactive]:hidden">
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {financeBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="web" forceMount className="data-[state=inactive]:hidden">
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {webBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
