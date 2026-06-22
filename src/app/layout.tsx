import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Humble Warrior Psychology | Evidence-Based Therapy in Prague",
    template: "%s | Humble Warrior Psychology",
  },
  description:
    "Evidence-based therapy for resilience, clarity, and lasting change. CBT & Schema Therapy with Trinity Reda in Prague. Individual, couples, and online sessions available.",
  keywords: [
    "therapy Prague",
    "CBT Prague",
    "Schema Therapy",
    "English speaking therapist Prague",
    "Trinity Reda",
    "psychology Prague",
    "expat therapy",
    "online therapy",
  ],
  authors: [{ name: "Trinity Reda" }],
  creator: "Humble Warrior Psychology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.humblewarriorpsych.com",
    siteName: "Humble Warrior Psychology",
    title: "Humble Warrior Psychology | Evidence-Based Therapy in Prague",
    description:
      "Evidence-based therapy for resilience, clarity, and lasting change. CBT & Schema Therapy in Prague.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Humble Warrior Psychology",
    description: "Evidence-based therapy for resilience, clarity, and lasting change.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.humblewarriorpsych.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
