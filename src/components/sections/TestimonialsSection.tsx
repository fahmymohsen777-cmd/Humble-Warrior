"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FadeUp } from "@/components/animations";

const testimonials = [
  {
    id: 1,
    quote:
      "Her ability to break down complex issues into simple, manageable components is priceless. I finally feel like I understand why I keep ending up in the same situations.",
    author: "Anonymous Client",
    detail: "Ongoing Therapy",
  },
  {
    id: 2,
    quote:
      "I was completely stuck and lost prior to therapy. Meeting with Trinity was one of the best things to happen to me, leading to significant personal change.",
    author: "Anonymous Client",
    detail: "10-Session Program",
  },
  {
    id: 3,
    quote:
      "For the first time, I'm not just managing my anxiety — I actually understand where it comes from. The combination of Schema Therapy and CBT changed everything.",
    author: "Anonymous Client",
    detail: "Ongoing Therapy",
  },
  {
    id: 4,
    quote:
      "As an expat, finding a therapist who speaks English fluently and actually gets the cultural nuance was a game changer. Trinity is exceptional.",
    author: "Anonymous Client",
    detail: "Individual Sessions",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const autoRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const go = (dir: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    autoRef.current = setInterval(() => go(1), 5500);
    return () => clearInterval(autoRef.current);
  });

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="section relative overflow-hidden"
      style={{ background: "var(--primary-dark)" }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(122,171,142,0.3), transparent)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-10 animate-blob"
        style={{ background: "radial-gradient(circle, var(--sage-400), transparent 70%)" }}
      />

      <div className="container relative z-10">
        <FadeUp className="text-center mb-16">
          <p className="section-label justify-center" style={{ color: "var(--terra-400)" }}>
            <span className="w-6 h-px bg-terra-400 inline-block mr-2" style={{ background: "var(--terra-400)" }} />
            Testimonials
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 400,
              color: "white",
            }}
          >
            What clients say
          </h2>
        </FadeUp>

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Quote icon */}
            <Quote
              size={80}
              className="absolute -top-8 -left-4 opacity-10"
              style={{ color: "var(--sage-400)" }}
            />

            <div
              className="text-center px-8 transition-all duration-300"
              style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(10px)" : "translateY(0)" }}
            >
              <p
                className="mb-8"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: "var(--sage-300)", fontFamily: "var(--font-inter)" }}>
                  {t.author}
                </p>
                <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}>
                  {t.detail}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }}
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAnimating(true); setTimeout(() => { setCurrent(i); setAnimating(false); }, 300); }}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current ? "var(--sage-400)" : "rgba(255,255,255,0.2)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }}
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Bottom mini-cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {testimonials.map((t, i) => (
            <FadeUp key={t.id} delay={i * 70}>
              <button
                onClick={() => { setAnimating(true); setTimeout(() => { setCurrent(i); setAnimating(false); }, 200); }}
                className="w-full text-left p-5 rounded-2xl transition-all duration-300"
                style={{
                  background: current === i ? "rgba(122,171,142,0.15)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${current === i ? "rgba(122,171,142,0.4)" : "rgba(255,255,255,0.08)"}`,
                }}
              >
                <p
                  className="text-xs leading-relaxed mb-3 line-clamp-3"
                  style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)" }}
                >
                  &ldquo;{t.quote.slice(0, 90)}...&rdquo;
                </p>
                <p className="text-xs font-semibold" style={{ color: "var(--sage-300)", fontFamily: "var(--font-inter)" }}>
                  {t.detail}
                </p>
              </button>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
