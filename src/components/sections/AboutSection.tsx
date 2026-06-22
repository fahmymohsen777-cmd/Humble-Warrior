"use client";
import React from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[var(--color-surface-2)]">
      <div className="container-lg py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Visual */}
          <div className="lg:sticky lg:top-32 relative">
            <ScrollReveal direction="left">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 bg-stone-200">
                <img 
                  src="/images/trinity.jpg" 
                  alt="Mgr. Trinity Reda"
                  className="object-cover w-full h-full opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-80" />
                
                {/* Floating Stats */}
                <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-display text-[var(--color-primary)] mb-1">
                      <NumberTicker end={10} suffix="+" />
                    </p>
                    <p className="text-xs uppercase tracking-wider text-[var(--color-text-2)] font-semibold">Years Exp.</p>
                  </div>
                  <div className="w-px h-12 bg-[var(--color-border)]" />
                  <div>
                    <p className="text-3xl font-display text-[var(--color-primary)] mb-1">
                      <NumberTicker end={100} suffix="+" />
                    </p>
                    <p className="text-xs uppercase tracking-wider text-[var(--color-text-2)] font-semibold">Clients</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Scroll Content */}
          <div className="flex flex-col justify-center space-y-16 mt-8 lg:mt-0">
            
            {/* Intro */}
            <div>
              <ScrollReveal>
                <div className="label mb-6">About Trinity Reda</div>
              </ScrollReveal>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-1)] leading-[1.1] mb-8">
                <WordReveal text="Evidence-based therapy rooted in genuine connection." />
              </h2>
              
              <ScrollReveal delay={0.2}>
                <div className="space-y-6 text-lg text-[var(--color-text-2)] font-light leading-relaxed">
                  <p>
                    Hi, I'm Mgr. Trinity Reda. For over a decade, I've dedicated my career to helping expats and locals in Prague navigate the complexities of their inner worlds.
                  </p>
                  <p>
                    My approach is grounded in science but delivered with warmth. As a Doctoral Candidate at Charles University, I stay at the forefront of psychological research, translating complex clinical concepts into practical, everyday tools for my clients.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Quote */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="pl-8 border-l-2 border-[var(--color-primary)] py-2 my-12">
                <p className="font-display italic text-2xl md:text-3xl text-[var(--color-text-1)] leading-snug">
                  "Healing doesn't mean the damage never existed. It means the damage no longer controls our lives."
                </p>
              </div>
            </ScrollReveal>

            {/* Credentials */}
            <ScrollReveal delay={0.3}>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-[var(--color-text-3)] mb-6">Professional Credentials</h3>
              <ul className="space-y-4">
                {[
                  "Doctoral Candidate in Psychology, Charles University",
                  "Certified Cognitive Behavioural Therapist (CBT)",
                  "Advanced Training in Schema Therapy",
                  "Member of the Czech Association for Psychotherapy"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--color-text-2)]">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
