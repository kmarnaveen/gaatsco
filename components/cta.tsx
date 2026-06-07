"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, CheckCircleIcon } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";
import { indiaOffice, usaOffice } from "@/lib/addresses";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { toast } from "sonner";

const serviceOptions = [
  "Audit Support Services",
  "India Taxation Services",
  "US Taxation Services",
  "Accounting",
  "Payroll Management",
  "Financial Statement Preparation",
  "Financial Statement Services",
  "Not Sure - Need Consultation",
];

function CTAForm() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const service = searchParams.get("service");
    if (service && serviceOptions.includes(service)) {
      setSelectedService(service);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours.",
        });
        e.currentTarget.reset();
        setSelectedService("");
      } else {
        toast.error("Failed to send message", {
          description: result.error || "Please try again later.",
        });
      }
    } catch (error) {
      toast.error("An error occurred", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-b from-primary/5 via-background to-primary/5"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
            Let&apos;s make finances feel easy again
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Reach out today — most clients hear back within a few hours. No pressure, just a friendly conversation.
          </p>
        </div>
        {/* </CHANGE> */}

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            {/* Phone Card */}
            <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">
                    Call / WhatsApp
                  </h3>
                  <a
                    href="tel:+919182036699"
                    className="mb-1 block text-xl font-medium text-foreground transition-colors hover:text-primary"
                  >
                    +91 91820 36699
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Quick response guaranteed
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <MailIcon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">Email Us</h3>
                  <a
                    href="mailto:info@gaatsco.com"
                    className="block text-base font-medium text-foreground transition-colors hover:text-primary"
                  >
                    info@gaatsco.com
                  </a>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ClockIcon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">Business Hours</h3>
                  <div className="space-y-1">
                    <p className="text-base font-medium text-foreground">
                      Monday – Saturday
                    </p>
                    <p className="text-base font-medium text-foreground">
                      9:00 AM – 6:00 PM
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Closed on Sundays
                  </p>
                </div>
              </div>
            </div>

            {/* India Office */}
            <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">{indiaOffice.label}</h3>
                  <a
                    href={`https://maps.google.com/?q=${indiaOffice.mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link block text-base leading-relaxed text-foreground transition-colors hover:text-primary"
                  >
                    {indiaOffice.lines.map((line, i) => (
                      <span key={i} className={i === 0 ? "font-medium" : undefined}>
                        {line}
                        {i < indiaOffice.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </a>
                </div>
              </div>
            </div>

            {/* USA Office */}
            <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">{usaOffice.label}</h3>
                  <a
                    href={`https://maps.google.com/?q=${usaOffice.mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link block text-base leading-relaxed text-foreground transition-colors hover:text-primary"
                  >
                    {usaOffice.lines.map((line, i) => (
                      <span key={i} className={i === 0 ? "font-medium" : undefined}>
                        {line}
                        {i < usaOffice.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-base italic leading-relaxed text-foreground">
                "Your trusted partner in tax, accounting, and financial
                success."
              </p>
            </div>
          </div>
          {/* </CHANGE> */}

          <div className="rounded-xl border bg-card p-8 shadow-lg lg:p-10">
            <div className="mb-6">
              <h3 className="mb-2 text-2xl font-bold">Send us a message</h3>
              <p className="text-sm text-muted-foreground">
                Just 4 quick fields — we&apos;ll take it from there
              </p>
            </div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Interest *</Label>
                <select
                  id="service"
                  name="service"
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Your message <span className="font-normal text-muted-foreground">(optional)</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="A sentence or two is enough — we'll ask the rest on our call"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full shadow-md shadow-primary/20"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message — we'll reply within 24hrs"}
              </Button>

              <ul className="space-y-1.5 text-center text-xs text-muted-foreground">
                <li className="flex items-center justify-center gap-1.5">
                  <CheckCircleIcon className="h-3.5 w-3.5 text-primary" />
                  Your information stays confidential
                </li>
                <li className="flex items-center justify-center gap-1.5">
                  <CheckCircleIcon className="h-3.5 w-3.5 text-primary" />
                  No spam, ever — just a helpful reply
                </li>
              </ul>
            </form>
          </div>
          {/* </CHANGE> */}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <Suspense fallback={null}>
      <CTAForm />
    </Suspense>
  );
}
