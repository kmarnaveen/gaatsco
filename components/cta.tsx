"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowUpRightIcon,
  MessageCircleIcon,
  CalendarIcon,
} from "@/components/icons";
import { BookConsultation } from "@/components/book-consultation";
import { SectionLabel } from "@/components/section-label";
import { indiaOffice, usaOffice } from "@/lib/addresses";
import { trackEvent } from "@/lib/analytics";
import { getAttribution } from "@/lib/attribution";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, whatsappHref } from "@/lib/contact";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

// Values match the service names used across the site (and in existing sheet rows);
// labels use the words a visitor would use for their problem.
const serviceOptions = [
  { value: "India Taxation Services", label: "GST, income tax or TDS (India)" },
  { value: "US Taxation Services", label: "US tax or NRI tax" },
  { value: "Accounting", label: "Accounting & bookkeeping" },
  { value: "Payroll Management", label: "Payroll" },
  { value: "Audit Support Services", label: "Audit support" },
  { value: "Financial Statement Preparation", label: "Financial statements" },
  { value: "Financial Statement Services", label: "Financial analysis & reporting" },
  { value: "Web Development", label: "Website or web app" },
  { value: "Not Sure - Need Consultation", label: "Not sure yet" },
];

const matchService = (service?: string | null) =>
  serviceOptions.find((option) => option.value.toLowerCase() === service?.toLowerCase())?.value ?? "";

const serviceLabel = (value: string) =>
  serviceOptions.find((option) => option.value === value)?.label.toLowerCase() ?? "a consultation";

type Status =
  | { state: "idle" | "sending" }
  | { state: "sent"; name: string; phone: string; service: string }
  | { state: "error"; message: string };

const fieldClass = "border-border bg-muted/50 text-foreground";

function SuccessPanel({ name, phone, service, onReset }: { name: string; phone: string; service: string; onReset: () => void }) {
  return (
    <div role="status" className="mt-6">
      <CheckCircleIcon className="h-10 w-10 text-primary" />
      <h4 className="mt-4 text-2xl font-semibold tracking-tight">Thanks, {name}. We&apos;ll call you back.</h4>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
        We&apos;ll call or WhatsApp you on <span className="font-medium text-foreground">{phone}</span> within 24
        hours (Mon–Sat) to fix a time.
        {service !== "Web Development" && " If it's about tax, keep your PAN and last filed return handy."}
      </p>
      <a
        href={whatsappHref(`Hi GAATSCO, I just requested a consultation about ${serviceLabel(service)}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <MessageCircleIcon className="h-4 w-4" />
        Need it sooner? WhatsApp us
      </a>
      <button type="button" onClick={onReset} className="mt-4 text-sm text-foreground/70 underline underline-offset-4 hover:text-foreground">
        Send another request
      </button>
    </div>
  );
}

function LeadForm({ initialService }: { initialService: string }) {
  const pathname = usePathname();
  const [service, setService] = useState(initialService);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  useEffect(() => {
    if (initialService) setService(initialService);
  }, [initialService]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Read everything now: React clears e.currentTarget once the handler awaits.
    const formData = new FormData(e.currentTarget);
    const field = (key: string) => String(formData.get(key) ?? "").trim();
    const data = {
      name: field("name"),
      phone: field("phone"),
      email: field("email"),
      service: field("service"),
      message: field("message"),
      company: field("company"),
      page: pathname,
      attribution: getAttribution(),
    };

    setStatus({ state: "sending" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        // Validation messages are written for visitors; anything else gets the generic fallback.
        setStatus({ state: "error", message: response.status === 400 && result.error ? result.error : "That didn't go through." });
        return;
      }

      // Fire only on a confirmed save, never on the click.
      trackEvent("generate_lead", { method: "form", form_location: pathname, service: data.service });
      setStatus({ state: "sent", name: data.name.split(" ")[0], phone: data.phone, service: data.service });
    } catch {
      setStatus({ state: "error", message: "That didn't go through." });
    }
  };

  if (status.state === "sent") {
    return (
      <SuccessPanel
        {...status}
        onReset={() => {
          setService(initialService);
          setStatus({ state: "idle" });
        }}
      />
    );
  }

  return (
    <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="service" className="text-secondary-foreground">What do you need help with?</Label>
        <select
          id="service"
          name="service"
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="flex h-11 w-full rounded-md border border-border bg-muted/50 px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Choose one…</option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-secondary-foreground">Your name</Label>
          <Input id="name" name="name" autoComplete="name" required className={fieldClass} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-secondary-foreground">Phone / WhatsApp</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            required
            aria-describedby="phone-help"
            className={fieldClass}
          />
        </div>
      </div>
      <p id="phone-help" className="-mt-3 text-xs text-muted-foreground">
        We&apos;ll only use your number to arrange your consultation.
      </p>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-secondary-foreground">
          Email <span className="font-normal text-muted-foreground">(optional, for documents or a quote)</span>
        </Label>
        <Input id="email" name="email" type="email" autoComplete="email" className={fieldClass} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-secondary-foreground">
          Anything we should know? <span className="font-normal text-muted-foreground">(optional)</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="e.g. 2 GST returns pending, or I received a tax notice"
          rows={3}
          className={fieldClass}
        />
      </div>

      {/* Honeypot: hidden from people, filled in by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status.state === "error" && (
        <div role="alert" className="rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-foreground">
          {status.message} Your details are still here, so try again or{" "}
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2">
            WhatsApp us on {PHONE_DISPLAY}
          </a>
          .
        </div>
      )}

      <Button
        type="submit"
        className="w-full rounded-full bg-primary text-primary-foreground shadow-none hover:bg-primary/90"
        size="lg"
        disabled={status.state === "sending"}
      >
        {status.state === "sending" ? "Sending…" : "Request a call back"}
      </Button>

      <ul className="space-y-1.5 text-xs text-foreground/80">
        <li className="flex items-center gap-1.5">
          <CheckCircleIcon className="h-3.5 w-3.5 shrink-0 text-foreground" />
          We reply within 24 hours, Mon–Sat. No obligation.
        </li>
        <li className="flex items-center gap-1.5">
          <CheckCircleIcon className="h-3.5 w-3.5 shrink-0 text-foreground" />
          Your details are only used to respond to this request.
        </li>
      </ul>
    </form>
  );
}

function LeadFormFromParams({ defaultService }: { defaultService: string }) {
  const searchParams = useSearchParams();
  return <LeadForm initialService={matchService(searchParams.get("service")) || defaultService} />;
}

export function CTA({ defaultService, headingAs: Heading = "h2" }: { defaultService?: string; headingAs?: "h1" | "h2" }) {
  const preselected = matchService(defaultService);

  return (
    <section id="contact" data-cta-location="contact-section" className="scroll-mt-20 border-b border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-4xl bg-primary px-6 py-10 text-primary-foreground md:px-12 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
            <div>
              <SectionLabel className="text-primary-foreground/85 [&_span]:bg-primary-foreground">Get Started</SectionLabel>
            </div>
            <div>
              <Heading className="max-w-4xl text-balance text-3xl font-semibold leading-[1.06] tracking-tight md:text-5xl">
                Book your 30-minute consultation.
              </Heading>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
                Pick a time that suits you, or leave your number and we&apos;ll call you within 24 hours. Either way you
                get a clear plan, timeline and fee before any work starts.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
            <div className="order-2 space-y-4 text-sm text-primary-foreground/85 md:text-base lg:order-1">
              <div className="border border-primary-foreground/25 p-4">
                <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.09em]">
                  <PhoneIcon className="h-3.5 w-3.5" /> Call / WhatsApp
                </p>
                <a href={`tel:${PHONE_TEL}`} className="block text-lg font-semibold tracking-tight hover:text-white">
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-4 py-1.5 text-sm font-medium hover:bg-primary-foreground/10"
                >
                  <MessageCircleIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="border border-primary-foreground/25 p-4">
                <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.09em]">
                  <MailIcon className="h-3.5 w-3.5" /> Email
                </p>
                <a href={`mailto:${EMAIL}`} className="hover:text-white">
                  {EMAIL}
                </a>
              </div>

              <div className="border border-primary-foreground/25 p-4">
                <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.09em]">
                  <ClockIcon className="h-3.5 w-3.5" /> Hours
                </p>
                <p>Monday - Saturday, 9:00 AM - 6:00 PM</p>
              </div>

              <div className="border border-primary-foreground/25 p-4">
                <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.09em]">
                  <MapPinIcon className="h-3.5 w-3.5" /> Offices
                </p>
                <p className="font-medium">{indiaOffice.label}</p>
                <a
                  href={`https://maps.google.com/?q=${indiaOffice.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-white"
                >
                  {indiaOffice.lines.join(", ")}
                </a>
                <p className="mt-3 font-medium">{usaOffice.label}</p>
                <a
                  href={`https://maps.google.com/?q=${usaOffice.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-white"
                >
                  {usaOffice.lines.join(", ")}
                </a>
              </div>
            </div>

            <div className="relative order-1 bg-card p-6 text-foreground md:p-8 lg:order-2">
              <h3 className="text-3xl font-semibold tracking-tight">Pick a time that suits you</h3>
              <p className="mt-2 text-sm text-foreground/80">See live availability and book your 30-minute consultation now.</p>
              <BookConsultation className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                <CalendarIcon className="h-4 w-4" />
                See available times
              </BookConsultation>

              <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="h-px flex-1 bg-border" />
                Or leave your number and we&apos;ll call you
                <span className="h-px flex-1 bg-border" />
              </div>
              {/* Only the form waits on the URL's ?service=, so the rest of the section still renders on the server. */}
              <Suspense fallback={<LeadForm initialService={preselected} />}>
                <LeadFormFromParams defaultService={preselected} />
              </Suspense>
            </div>
          </div>

          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 flex flex-col items-center text-center hover:opacity-90"
          >
            <span className="flex items-center justify-center gap-[0.25em] text-5xl font-semibold tracking-tight md:text-7xl">
              Let&apos;s talk
              <ArrowUpRightIcon viewBox="6 6 12 12" className="h-[0.7em] w-[0.7em]" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className="mt-3 text-sm text-primary-foreground/80">Chat with us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
