"use client";
import React from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ArrowUpRight, Clock, Video, Users, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-[var(--color-bg)] py-32 lg:py-48">
      <div className="container-lg">
        
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="label justify-center mb-6">Ways to Work Together</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-1)] mb-6">
              Therapy Designed for You
            </h2>
            <p className="text-[var(--color-text-2)] max-w-2xl mx-auto text-lg">
              Whether you need structured, short-term intervention or ongoing exploratory support, we will tailor the approach to your unique goals.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Card 1: 10-Session Program (Spans 8 cols) */}
          <div className="md:col-span-12 lg:col-span-8 h-full">
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <SpotlightCard className="h-full p-8 md:p-12 flex flex-col justify-between group">
                <div className="mb-12">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-surface-2)] flex items-center justify-center mb-6">
                    <Clock className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-[var(--color-text-1)] mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                    The 10-Session Program
                  </h3>
                  <p className="text-[var(--color-text-2)] leading-relaxed max-w-xl">
                    A highly structured, goal-oriented CBT and Schema Therapy hybrid. Perfect for addressing specific issues like panic attacks, acute anxiety, or distinct behavioral patterns. We establish clear metrics in Session 1 and track progress through Session 10.
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a href="https://humblewarriorpsychology.simplybook.it" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-xs px-6 py-3">
                    Book Consultation
                  </a>
                  <span className="text-sm font-medium text-[var(--color-text-3)]">15 mins • Free</span>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>

          {/* Card 2: Ongoing Therapy (Spans 4 cols) */}
          <div className="md:col-span-12 lg:col-span-4 h-full">
            <ScrollReveal direction="left" delay={0.2} className="h-full">
              <SpotlightCard className="h-full p-8 md:p-10 flex flex-col justify-between bg-[var(--color-surface-2)]">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-[var(--color-text-1)] mb-4">
                    Ongoing Therapy
                  </h3>
                  <p className="text-[var(--color-text-2)] text-sm leading-relaxed mb-8">
                    Deep, explorative work aimed at untangling complex trauma, chronic relationship issues, and ingrained core beliefs. Open-ended support for profound, lasting change.
                  </p>
                </div>
                
                <a href="https://humblewarriorpsychology.simplybook.it" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-text-1)] transition-colors group">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </SpotlightCard>
            </ScrollReveal>
          </div>

          {/* Session Formats (Bottom row, 3x4 cols) */}
          {[
            { icon: Users, title: "In-Person", desc: "Prague 1 Clinic" },
            { icon: Video, title: "Online", desc: "Secure video link" },
            { icon: Users, title: "Couples", desc: "Relationship therapy" }
          ].map((format, idx) => (
            <div key={idx} className="md:col-span-4 h-full">
              <ScrollReveal direction="up" delay={0.3 + (idx * 0.1)} className="h-full">
                <SpotlightCard className="h-full p-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                    <format.icon className="w-4 h-4 text-[var(--color-text-3)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text-1)] text-sm">{format.title}</h4>
                    <p className="text-xs text-[var(--color-text-3)] mt-0.5">{format.desc}</p>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
