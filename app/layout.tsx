import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

// Updated fonts to Inter for professional look
const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "GAATSCO Pvt Ltd - Expert Accounting, Tax & Business Advisory Services in India",
  description:
    "GAATSCO Pvt Ltd offers professional accounting, tax compliance, GST registration, bookkeeping, and business advisory services in Hyderabad. Serving individuals, startups, SMEs, and NRIs across India with innovative financial solutions.",
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
  authors: [{ name: "GAATSCO Pvt Ltd" }],
  creator: "GAATSCO Pvt Ltd",
  publisher: "GAATSCO Pvt Ltd",
  generator: "v0.app",
  metadataBase: new URL("https://gaatsco.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gaatsco.com",
    title: "GAATSCO Pvt Ltd - Expert Accounting & Tax Services in India",
    description:
      "Professional accounting, tax, and business advisory services for individuals and businesses across India",
    siteName: "GAATSCO Pvt Ltd",
  },
  twitter: {
    card: "summary_large_image",
    title: "GAATSCO Pvt Ltd - Accounting & Tax Services",
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
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
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
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
