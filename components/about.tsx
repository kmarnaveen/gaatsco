import { UsersIcon, TargetIcon, AwardIcon, TrendingUpIcon } from "@/components/icons"
import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-4 text-balance">About GAATSCO Pvt Ltd</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Founded in 2025, GAATSCO is a dynamic accounting and advisory firm committed to empowering businesses with
            innovative financial solutions and expert guidance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <Card className="p-6 text-center border-2 hover:border-primary/50 transition-colors">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <TargetIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold">Our Mission</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To simplify financial management and empower businesses to achieve sustainable growth
            </p>
          </Card>

          <Card className="p-6 text-center border-2 hover:border-primary/50 transition-colors">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <AwardIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold">Our Vision</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To be India's most trusted partner for accounting, tax, and business advisory services
            </p>
          </Card>

          <Card className="p-6 text-center border-2 hover:border-primary/50 transition-colors">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <UsersIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold">Expert Team</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Led by experienced professionals committed to excellence and client success
            </p>
          </Card>

          <Card className="p-6 text-center border-2 hover:border-primary/50 transition-colors">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <TrendingUpIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold">Innovation First</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leveraging modern tools and strategies to deliver agile, efficient solutions
            </p>
          </Card>
        </div>

        <div className="rounded-2xl border bg-card p-8 md:p-12">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Choose GAATSCO?</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At GAATSCO, we understand that managing finances can be complex and time-consuming. That's why we've
                built our firm on the principles of{" "}
                <strong className="text-foreground">agility, innovation, and customer-centricity</strong>.
              </p>
              <p>
                Unlike traditional firms that rely solely on legacy experience, we combine proven expertise with modern
                approaches to deliver solutions that are fast, efficient, and tailored to your unique needs. Whether
                you're an individual taxpayer, a startup founder, or a growing business, we're here to simplify your
                financial journey.
              </p>
              <p>
                Our founding team brings together diverse expertise in accounting, taxation, and business strategy.
                We're not just service providers—we're partners invested in your success. As a new and dynamic firm,
                we're nimble enough to adapt quickly to regulatory changes while being focused enough to provide
                personalized attention to every client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
