import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/smooth-scroll";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Humble Warrior Psychology | Evidence-Based Therapy in Prague",
    template: "%s | Humble Warrior Psychology",
  },
  description:
    "Evidence-based therapy for resilience, clarity, and lasting change. CBT & Schema Therapy with Trinity Reda in Prague. Individual, couples, and online sessions.",
  keywords: ["therapy Prague", "CBT Prague", "Schema Therapy", "English therapist Prague", "Trinity Reda", "expat therapy", "online therapy"],
  authors: [{ name: "Trinity Reda" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.humblewarriorpsych.com",
    siteName: "Humble Warrior Psychology",
    title: "Humble Warrior Psychology | Evidence-Based Therapy in Prague",
    description: "Evidence-based therapy for resilience, clarity, and lasting change.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
