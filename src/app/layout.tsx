import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  title: "prodevelopers.tech | System Architecture & Product Delivery",
  description: "We engineer scalable logic without the overhead. End-to-end software solutions designed to eliminate the managed service tax.",
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
      </body>
    </html>
  );
}
