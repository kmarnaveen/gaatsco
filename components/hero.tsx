import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PhoneIcon, CheckCircleIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

const reassurancePoints = [
  "Free 30-min consultation",
  "No obligation",
  "Response within 24 hours",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-medium text-primary">
                Trusted by 500+ businesses across India & USA
              </span>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
              Focus on your business.
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                We&apos;ll handle the numbers.
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0">
              Stop losing sleep over compliance deadlines and messy books. GAATSCO
              takes the stress off your shoulders — so you can grow with confidence.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link href="/contact">
                <Button size="lg" className="group w-full shadow-md shadow-primary/25 sm:w-auto">
                  Get your free consultation
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="tel:+919182036699">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-background/80 sm:w-auto"
                >
                  <PhoneIcon className="mr-2 h-4 w-4" />
                  Call us now
                </Button>
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground lg:justify-start">
              {reassurancePoints.map((point) => (
                <span key={point} className="flex items-center gap-1">
                  <CheckCircleIcon className="h-3.5 w-3.5 text-primary" />
                  {point}
                </span>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 text-sm text-muted-foreground sm:grid-cols-3 sm:gap-4">
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <div className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Dedicated expert team</span>
              </div>
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <div className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>India & USA offices</span>
              </div>
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <div className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Plain-language updates</span>
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
            <div className="absolute -right-4 -top-4 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 h-40 w-40 rounded-full bg-primary/25 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 rounded-xl border bg-card/95 p-4 shadow-xl backdrop-blur">
              <p className="text-2xl font-bold text-primary">99%</p>
              <p className="text-xs text-muted-foreground">On-time compliance rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
