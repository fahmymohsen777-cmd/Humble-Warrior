"use client";
import React from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--color-bg)] pt-24 pb-8 overflow-hidden border-t border-[var(--color-border)]">
      
      {/* Huge Watermark */}
      <div className="absolute top-10 left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center opacity-[0.03] dark:opacity-[0.05]">
        <span className="font-display font-bold whitespace-nowrap text-[15vw] leading-none tracking-tighter">
          HUMBLE WARRIOR
        </span>
      </div>

      <div className="container-lg relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          <ScrollReveal direction="up" delay={0.1}>
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <span className="font-display text-2xl tracking-tight text-[var(--color-text-1)]">
                  Humble Warrior
                </span>
                <span className="block label mt-1" style={{ fontSize: "0.55rem" }}>
                  Psychology
                </span>
              </Link>
              <p className="text-[var(--color-text-3)] text-sm max-w-xs leading-relaxed">
                Evidence-based therapy for resilience, clarity, and lasting change. Located in Prague and online.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div>
              <h4 className="text-[var(--color-text-1)] font-semibold text-sm uppercase tracking-wider mb-6">Navigation</h4>
              <ul className="space-y-4 text-sm text-[var(--color-text-2)]">
                <li><Link href="/#about" className="hover:text-[var(--color-primary)] transition-colors">About Trinity</Link></li>
                <li><Link href="/#services" className="hover:text-[var(--color-primary)] transition-colors">Services & Pricing</Link></li>
                <li><Link href="/#faq" className="hover:text-[var(--color-primary)] transition-colors">FAQ</Link></li>
                <li><Link href="/blog" className="hover:text-[var(--color-primary)] transition-colors">Journal & Insights</Link></li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div>
              <h4 className="text-[var(--color-text-1)] font-semibold text-sm uppercase tracking-wider mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-[var(--color-text-2)]">
                <li><a href="mailto:hello@humblewarriorpsych.com" className="hover:text-[var(--color-primary)] transition-colors">hello@humblewarriorpsych.com</a></li>
                <li>Prague 1, Czech Republic</li>
                <li><a href="https://humblewarriorpsychology.simplybook.it" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">Book a Consultation</a></li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <div>
              <h4 className="text-[var(--color-text-1)] font-semibold text-sm uppercase tracking-wider mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-[var(--color-text-2)]">
                <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Cancellation Policy</Link></li>
              </ul>
            </div>
          </ScrollReveal>

        </div>

        {/* Tagline Marquee Strip */}
        <div className="border-y border-[var(--color-border)] py-4 mb-8">
          <InfiniteMarquee 
            items={["CBT", "Schema Therapy", "English Native", "Evidence-Based", "Prague", "Online"]} 
            direction="left"
            speed="slow"
          />
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[var(--color-text-3)] text-xs">
          <p>© {currentYear} Humble Warrior Psychology. All rights reserved.</p>
          <p>Designed for lasting change.</p>
        </div>
      </div>
    </footer>
  );
}
