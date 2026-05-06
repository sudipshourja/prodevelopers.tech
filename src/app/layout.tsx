import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prodevelopers.tech"),
  title: "ProDevelopers | High-Stakes Product Delivery",
  description: "High-performance products for companies that can't afford to fail. Systems-lab excellence with a dedicated product focus, from MVP to scale.",
  openGraph: {
    title: "ProDevelopers | High-Stakes Product Delivery",
    description: "High-performance products for companies that can't afford to fail. Systems-lab excellence with a dedicated product focus, from MVP to scale.",
    url: "https://prodevelopers.tech",
    siteName: "ProDevelopers",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ProDevelopers | High-Stakes Product Delivery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProDevelopers | High-Stakes Product Delivery",
    description: "High-performance products for companies that can't afford to fail. Systems-lab excellence with a dedicated product focus, from MVP to scale.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${mono.variable} font-sans bg-neutral-950 text-neutral-50 antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
