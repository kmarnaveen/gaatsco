import type React from "react";
import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { FloatingCTA } from "@/components/floating-cta";
import { StructuredData } from "@/components/structured-data";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "GAATSCO - Expert Accounting, Tax & Business Advisory Services in India",
  description:
    "GAATSCO offers professional accounting, tax compliance, GST registration, bookkeeping, and business advisory services in Hyderabad. Serving individuals, startups, SMEs, and NRIs across India with innovative financial solutions.",
  keywords: [
    "GAATSCO Hyderabad",
    "accounting services India",
    "tax compliance Hyderabad",
    "GST registration",
    "bookkeeping services",
    "business advisory India",
    "chartered accountant Hyderabad",
    "tax filing services",
    "startup accounting",
    "SME financial services",
  ],
  authors: [{ name: "GAATSCO" }],
  creator: "GAATSCO",
  publisher: "GAATSCO",
  generator: "v0.app",
  metadataBase: new URL("https://gaatsco.com"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : {},
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gaatsco.com",
    title: "GAATSCO - Expert Accounting & Tax Services in India",
    description:
      "Professional accounting, tax, and business advisory services for individuals and businesses across India",
    siteName: "GAATSCO",
  },
  twitter: {
    card: "summary_large_image",
    title: "GAATSCO - Accounting & Tax Services",
    description:
      "Expert accounting, tax compliance, and business advisory services in India",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a5f" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <StructuredData />
        {children}
        <FloatingCTA />
        <Toaster />
      </body>
    </html>
  );
}
