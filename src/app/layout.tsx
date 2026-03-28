import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tradie Starter — Premium Next.js Template for Trade Businesses",
  description:
    "22 section variants. 8 colour themes. One config file. Ship tradie websites in hours, not weeks. Built with Next.js 16, React 19, TypeScript, and Tailwind v4.",
  keywords: [
    "tradie website template",
    "next.js template",
    "trade business website",
    "plumber website",
    "electrician website",
    "builder website",
    "landscaper website",
    "website template australia",
  ],
  authors: [{ name: "Groundwork Digital Studio" }],
  openGraph: {
    title: "Tradie Starter — Premium Next.js Template for Trade Businesses",
    description:
      "22 section variants. 8 colour themes. One config file. Ship tradie websites in hours, not weeks.",
    url: "https://tradie-starter.groundworkdigitalstudio.com.au",
    siteName: "Groundwork Digital Studio",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tradie Starter — Premium Next.js Template",
    description:
      "22 section variants. 8 colour themes. One config file. Ship tradie websites in hours, not weeks.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
