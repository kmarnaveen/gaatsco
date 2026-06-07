import type { BlogSection } from "@/lib/blogs"

export function BlogContent({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="prose prose-neutral max-w-none dark:prose-invert">
      {sections.map((section, index) => {
        switch (section.type) {
          case "heading":
            return (
              <h2 key={index} className="mb-4 mt-10 text-xl font-semibold text-foreground first:mt-0">
                {section.text}
              </h2>
            )
          case "list":
            return (
              <ul key={index} className="mb-6 space-y-2 pl-0">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )
          case "paragraph":
            return (
              <p key={index} className="mb-4 leading-relaxed text-muted-foreground">
                {section.text}
              </p>
            )
        }
      })}
    </div>
  )
}
