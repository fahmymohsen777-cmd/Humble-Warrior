"use client";
import React from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";

const quotes = [
  "Trinity helped me break a cycle I thought was permanent.",
  "I finally understand why I react the way I do.",
  "A safe space where I could actually be honest.",
  "The 10-session program changed how I handle anxiety.",
  "Deeply professional, yet incredibly warm.",
  "Schema therapy was the missing piece for me.",
  "She doesn't just listen; she helps you rebuild.",
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative bg-[var(--color-bg)] py-32 lg:py-48 overflow-hidden">
      
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[100px] opacity-20 bg-[var(--color-primary-glow)] pointer-events-none" />

      <div className="container-lg mb-20 md:mb-32">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="label justify-center mb-6">Client Experiences</div>
            <h2 className="font-display italic text-3xl md:text-5xl lg:text-6xl text-[var(--color-text-1)] leading-tight mb-8">
              "The work we do here echoes in every part of your life."
            </h2>
            <p className="text-[var(--color-text-3)] text-sm uppercase tracking-widest">
              — Anonymous Client Feedback
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal direction="up" delay={0.2}>
        <div className="flex flex-col gap-6 md:gap-8">
          <InfiniteMarquee 
            items={quotes.slice(0, 4)} 
            direction="left" 
          />
          <InfiniteMarquee 
            items={quotes.slice(3)} 
            direction="right" 
          />
        </div>
      </ScrollReveal>
      
    </section>
  );
}
