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
} from "@/components/icons";
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
    } catch {
      toast.error("An error occurred", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-b border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-4xl bg-primary px-6 py-10 text-primary-foreground md:px-12 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
            <div>
              <SectionLabel className="text-primary-foreground/85 [&_span]:bg-primary-foreground">Get Started</SectionLabel>
            </div>
            <div>
              <h2 className="max-w-4xl text-balance text-3xl font-semibold leading-[1.06] tracking-tight md:text-5xl">
                Let&apos;s talk about your next quarter with confidence.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
                Share your current setup and goals. We will map the simplest path for compliance, reporting, and steady growth.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
            <div className="space-y-4 text-sm text-primary-foreground/85 md:text-base">
              <div className="border border-primary-foreground/25 p-4">
                <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.09em]">
                  <PhoneIcon className="h-3.5 w-3.5" /> Call / WhatsApp
                </p>
                <a href="tel:+918639295812" className="text-lg font-semibold tracking-tight hover:text-white">
                  +91 86392 95812
                </a>
              </div>

              <div className="border border-primary-foreground/25 p-4">
                <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.09em]">
                  <MailIcon className="h-3.5 w-3.5" /> Email
                </p>
                <a href="mailto:info@gaatsco.com" className="hover:text-white">
                  info@gaatsco.com
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

            <div className="bg-[#ececeb] p-6 text-[#262bce] md:p-8">
              <h3 className="text-3xl font-semibold tracking-tight">Send us a message</h3>
              <p className="mt-2 text-sm text-[#4f54cc]">Just a few details and we&apos;ll respond within 24 hours.</p>

              <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#3d42c7]">Full Name *</Label>
                    <Input id="name" name="name" placeholder="John Doe" required className="border-[#c8c9e8] bg-[#f4f4f1] text-[#262bce]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#3d42c7]">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      className="border-[#c8c9e8] bg-[#f4f4f1] text-[#262bce]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#3d42c7]">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="border-[#c8c9e8] bg-[#f4f4f1] text-[#262bce]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-[#3d42c7]">Service Interest *</Label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="flex h-11 w-full rounded-md border border-[#c8c9e8] bg-[#f4f4f1] px-3 py-2 text-sm text-[#262bce] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#262bce]"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#3d42c7]">Your message (optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us your goals or current challenges"
                    rows={4}
                    className="border-[#c8c9e8] bg-[#f4f4f1] text-[#262bce]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full bg-[#262bce] text-white shadow-none hover:bg-[#2025b8]"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>

                <ul className="space-y-1.5 text-xs text-[#4f54cc]">
                  <li className="flex items-center gap-1.5">
                    <CheckCircleIcon className="h-3.5 w-3.5 text-[#262bce]" />
                    Your information stays confidential
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircleIcon className="h-3.5 w-3.5 text-[#262bce]" />
                    No spam, just a practical follow-up
                  </li>
                </ul>
              </form>
            </div>
          </div>

          <p className="mt-12 text-center text-5xl font-semibold tracking-tight md:text-7xl">Let&apos;s talk ↗</p>
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
