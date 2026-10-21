import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircleIcon, MessageCircleIcon } from "@/components/icons";
import { CONSULTATION_CTA, PHONE_DISPLAY, PHONE_TEL, whatsappHref } from "@/lib/contact";
import { BookConsultation } from "@/components/book-consultation";

const reassurancePoints = [
  "30-minute consultation",
  "No obligation",
  "Reply within 24 hours",
];

export function Hero() {
  return (
    <section data-cta-location="hero" className="relative overflow-hidden border-b border-border/70 py-7 md:py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-4xl border border-brand-foreground/10 bg-brand px-6 py-8 text-brand-foreground shadow-[0_40px_80px_-40px_rgba(19,75,122,0.45)] md:px-9 md:py-9 lg:px-12 lg:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-foreground/85 md:text-sm">
            GAATSCO · Accounting. Tax. Advisory.
          </p>
          <h1 className="mt-4 max-w-5xl text-balance text-4xl font-bold leading-[0.98] tracking-[-0.035em] sm:text-5xl md:text-7xl lg:text-[5.5rem]">
            Your accounting and taxes, handled on time.
          </h1>

          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-base leading-relaxed text-brand-foreground/90 md:text-lg">
              GST, income tax, TDS, payroll and US returns for founders, SMEs and NRIs in India and the USA. You agree the
              scope and fee before any work starts.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 sm:flex-row">
                <BookConsultation>
                  <Button size="lg" className="group min-h-12 w-full rounded-full border border-primary bg-primary text-primary-foreground shadow-none hover:bg-primary/90 sm:w-auto">
                    {CONSULTATION_CTA}
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </BookConsultation>
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="min-h-12 w-full rounded-full border-brand-foreground/50 bg-transparent text-brand-foreground hover:bg-brand-foreground/10 sm:w-auto"
                  >
                    <MessageCircleIcon className="mr-2 h-4 w-4" />
                    WhatsApp us
                  </Button>
                </a>
              </div>
              <p className="text-center text-sm text-brand-foreground/85 sm:text-left lg:text-right">
                or call{" "}
                <a href={`tel:${PHONE_TEL}`} className="font-semibold underline underline-offset-4">
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-brand-foreground/85">
            {reassurancePoints.map((point) => (
              <span key={point} className="flex items-center gap-1">
                <CheckCircleIcon className="h-3.5 w-3.5 text-brand-foreground" />
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
