import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Arcvale Consulting",

  description:
    "Arcvale Consulting helps organisations deliver complex transformation programmes through Agile delivery leadership, programme governance, cloud transformation and responsible AI adoption.",

  keywords: [
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

  openGraph: {
    title:
      "Arcvale Consulting | Enterprise Transformation, Delivery Excellence & AI Governance",

    description:
      "Helping organisations deliver complex transformation with confidence.",

    siteName: "Arcvale Consulting",

    locale: "en_GB",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Arcvale Consulting | Enterprise Transformation, Delivery Excellence & AI Governance",

    description:
      "Helping organisations deliver complex transformation with confidence.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}