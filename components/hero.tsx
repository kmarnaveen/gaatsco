import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PhoneIcon, CheckCircleIcon } from "@/components/icons";
import Link from "next/link";

const reassurancePoints = [
  "30-minute consultation",
  "No obligation",
  "Response within 24 hours",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70 py-7 md:py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-4xl border border-primary/40 bg-primary px-6 py-8 text-primary-foreground shadow-[0_40px_80px_-40px_rgba(43,39,255,0.75)] md:px-9 md:py-9 lg:px-12 lg:py-12">
          <div className="mb-10 flex flex-col gap-4 text-sm sm:flex-row sm:items-start sm:justify-between md:mb-20">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm border border-primary-foreground/80 text-[8px] font-bold">G</span>
            <p className="max-w-xs text-left leading-snug text-primary-foreground/90 sm:text-right">
              Founded in 2025, GAATSCO supports founders and teams across India and the USA with focused accounting execution.
            </p>
          </div>

          <h1 className="text-balance text-4xl font-bold uppercase leading-[0.95] tracking-[-0.045em] sm:text-5xl md:text-8xl lg:text-[8.8rem]">
            GAATSCO
            <span className="mt-2 block text-2xl tracking-[-0.03em] text-primary-foreground/90 sm:text-3xl md:text-5xl lg:text-6xl">
              Accounting. Tax. Advisory.
            </span>
          </h1>

          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
              Resolve compliance faster, close books with confidence, and scale with clear financial direction without last-minute chaos.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" className="group min-h-12 w-full rounded-full border border-primary-foreground/40 bg-primary-foreground text-primary shadow-none hover:bg-primary-foreground/90 sm:w-auto">
                  Book consultation
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="tel:+918639295812">
                <Button
                  size="lg"
                  variant="outline"
                  className="min-h-12 w-full rounded-full border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                >
                  <PhoneIcon className="mr-2 h-4 w-4" />
                  Call now
                </Button>
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-primary-foreground/85">
            {reassurancePoints.map((point) => (
              <span key={point} className="flex items-center gap-1">
                <CheckCircleIcon className="h-3.5 w-3.5 text-primary-foreground" />
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
