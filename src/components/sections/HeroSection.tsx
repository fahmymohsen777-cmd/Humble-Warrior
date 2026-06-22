"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Star } from "lucide-react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  const scrollDown = () => {
    const next = document.getElementById("about");
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--primary-dark)" }}
    >
      {/* === BACKGROUND === */}
      {/* Deep layered gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 60% 40%, rgba(74,124,89,0.5) 0%, transparent 70%),
            radial-gradient(ellipse 50% 80% at 10% 80%, rgba(196,124,90,0.2) 0%, transparent 60%),
            linear-gradient(160deg, #1e3126 0%, #2d4a38 40%, #3a2a20 100%)
          `,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Floating blobs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 animate-blob"
        style={{ background: "radial-gradient(circle, rgba(122,171,142,0.6) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 left-1/6 w-[350px] h-[350px] rounded-full opacity-15 animate-float-reverse"
        style={{ background: "radial-gradient(circle, rgba(196,124,90,0.5) 0%, transparent 70%)" }} />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Orbiting ring */}
      <div
        className="absolute right-[5%] top-[15%] w-[280px] h-[280px] rounded-full opacity-20 animate-spin-slow"
        style={{ border: "1px dashed rgba(122,171,142,0.6)" }}
      />
      <div
        className="absolute right-[7%] top-[13%] w-[240px] h-[240px] rounded-full opacity-10"
        style={{ border: "1px solid rgba(196,124,90,0.5)" }}
      />

      {/* === CONTENT === */}
      <div className="container-wide relative z-10 py-32 pt-40">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} fill="currentColor" style={{ color: "var(--muted-gold)" }} />
              ))}
            </div>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-inter)" }}>
              Evidence-based · CBT & Schema Therapy · Prague
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3.2rem, 7vw, 6rem)",
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "white",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s",
            }}
          >
            Therapy for{" "}
            <span style={{ fontStyle: "italic", color: "var(--sage-300)" }}>
              resilience,
            </span>
            <br />
            clarity, and{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--terra-400) 0%, var(--muted-gold) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              lasting change.
            </span>
          </h1>

          {/* Pain-point subheading */}
          <div
            className="mt-8 mb-3 text-lg leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              maxWidth: "580px",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s",
            }}
          >
            You already know something&apos;s off — it&apos;s always the same argument, 
            the same thoughts spiralling, the same reaction you swore you&apos;d stop having.
          </div>

          <p
            className="mb-10"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "var(--font-inter)",
              fontSize: "0.95rem",
              maxWidth: "520px",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.42s",
            }}
          >
            Therapy here is about understanding why this keeps happening — 
            and actually doing something about it.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.55s",
            }}
          >
            <a
              href="https://humblewarriorpsychology.simplybook.it"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
              style={{ fontSize: "0.85rem" }}
            >
              Book a Session
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={scrollDown}
              className="btn-outline group"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.85rem",
              }}
            >
              Learn More
            </button>
          </div>

          {/* Trust indicators strip */}
          <div
            className="mt-16 flex flex-wrap items-center gap-8"
            style={{
              opacity: loaded ? 1 : 0,
              transition: "opacity 1s ease 0.8s",
            }}
          >
            {[
              { label: "CBT Certified", desc: "Cognitive Behavioural Therapy" },
              { label: "Schema Therapy", desc: "Deep-rooted pattern work" },
              { label: "English Native", desc: "Canadian therapist in Prague" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(74,124,89,0.3)", border: "1px solid rgba(122,171,142,0.3)" }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: "var(--sage-300)" }} />
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: "white", fontFamily: "var(--font-inter)" }}>
                    {item.label}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        aria-label="Scroll down"
        style={{
          opacity: loaded ? 0.6 : 0,
          transition: "opacity 1s ease 1s",
        }}
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)" }}>
          Scroll
        </span>
        <ChevronDown size={18} color="rgba(255,255,255,0.6)" className="animate-bounce" />
      </button>

      {/* Bottom edge blend */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--cream-100))",
        }}
      />
    </section>
  );
}
