import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arcvaleconsulting.com"),

  title: {
    default: "Arcvale Consulting",
    template: "%s | Arcvale Consulting",
  },

  description:
    "Arcvale Consulting helps organisations deliver complex transformation through Agile delivery leadership, programme governance, cloud transformation and responsible AI adoption.",

  keywords: [
    "Arcvale Consulting",
    "Enterprise Transformation",
    "Agile Delivery",
    "Programme Governance",
    "Delivery Excellence",
    "AI Governance",
    "AI Adoption",
    "Transformation Consultant",
    "Scrum Master",
    "Delivery Lead",
    "Cloud Transformation",
    "PMO",
    "DevOps",
  ],

  authors: [{ name: "Nina Hesse" }],
  creator: "Arcvale Consulting",
  publisher: "Arcvale Consulting",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Arcvale Consulting | Enterprise Transformation, Delivery Excellence & AI Governance",

    description:
      "Helping organisations deliver complex transformation with confidence.",

    url: "https://arcvaleconsulting.com",

    siteName: "Arcvale Consulting",

    locale: "en_GB",

    type: "website",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Arcvale Consulting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Arcvale Consulting | Enterprise Transformation, Delivery Excellence & AI Governance",

    description:
      "Helping organisations deliver complex transformation with confidence.",

    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}