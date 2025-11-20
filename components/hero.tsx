import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-muted/50 to-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="mb-8 inline-flex items-center rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur">
              <span className="text-muted-foreground">
                Trusted Accounting Partner{" "}
              </span>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
              Expert Accounting & Tax Solutions for Growing Businesses in India
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0">
              Partner with GAATSCO for innovative financial solutions powered by
              expertise, agility, and a commitment to your success. Stay
              compliant, grow strategically, and focus on what matters most.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link href="/contact">
                <Button size="lg" className="group w-full sm:w-auto">
                  Book a Free Consultation
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="tel:+919182036699">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-transparent sm:w-auto"
                >
                  <PhoneIcon className="mr-2 h-4 w-4" />
                  Call Us Now
                </Button>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Fast & Agile Service</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Customer-First Approach</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border shadow-2xl">
              <Image
                src="/professional-accounting-team-working-together-in-m.jpg"
                alt="GAATSCO professional accounting team working together"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
