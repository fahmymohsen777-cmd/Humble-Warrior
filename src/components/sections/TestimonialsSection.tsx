"use client";
import React from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lucie",
    text: "I really enjoy Trinity's technique and way of tackling my issues, she breaks them down in a way that makes them simple and more manageable which to me is priceless.",
  },
  {
    name: "Daniel",
    text: "Couples sessions with Trin gave us a calmer way to talk and actually resolve issues. We learned how to break the same cycles and feel like we were on the same team again.",
  },
  {
    name: "Ondrej",
    text: "After the death of my father and moving to Prague, I felt hopeless and desperate. Now I feel like I can handle life in a different way with different tools. I feel optimistic and with love in my heart. Thank you Trinity.",
  },
  {
    name: "Jose",
    text: "I've been seeing Trinity since 2023, and her approach has been life-changing. She helped me shift my internal dialogue and learn to be more loving to myself. She shows you the whole picture, not only your perspective. I highly recommend her.",
  },
  {
    name: "Michal",
    text: "Trinity really helped me feel safe and comfortable, she made it easy to talk about the things I've been trying to avoid. Every session I leave with some peace, clarity and tools to handle things differently.",
  },
  {
    name: "Sasha",
    text: "I am really grateful for everything you have helped me with. Seeing you has truly been one of the best things to happen to me this year.",
  },
  {
    name: "Sonia",
    text: "I remember feeling completely stuck and lost in your office a year ago, and right now I'm just looking forward to so much ahead. I'm incredibly grateful for how much I changed.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative bg-[var(--color-bg)] py-32 lg:py-48 overflow-hidden border-b border-[var(--color-border)]">
      
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[100px] opacity-10 bg-[var(--color-primary-glow)] pointer-events-none" />

      <div className="container-lg mb-20 md:mb-32">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="label justify-center mb-6">Client Experiences</div>
            <h2 className="font-display italic text-3xl md:text-5xl lg:text-6xl text-[var(--color-text-1)] leading-tight mb-8">
              "The work we do here echoes in every part of your life."
            </h2>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal direction="up" delay={0.2}>
        {/* We use a single marquee to reduce clutter as requested, or just a CSS grid. Let's use a CSS grid with horizontal scroll on mobile, or a standard masonry grid since the user specifically requested "unique, named, no repetition" and "reduce marquees". Using a marquee for long text can be hard to read. Let's use a masonry-style or simple card grid to display all of them nicely. */}
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl flex flex-col h-full group hover:border-[var(--color-primary)] transition-colors duration-500">
                <Quote className="w-8 h-8 text-[var(--color-border)] group-hover:text-[var(--color-primary)] transition-colors mb-6" />
                <p className="text-[var(--color-text-2)] text-sm md:text-base leading-relaxed flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                  <p className="font-display font-medium text-[var(--color-text-1)]">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      
    </section>
  );
}
