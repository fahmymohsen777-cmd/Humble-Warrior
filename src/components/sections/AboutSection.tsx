"use client";
import { FadeUp, AnimatedCounter } from "@/components/animations";

const stats = [
  { value: 10, suffix: "+", label: "Years in Prague", desc: "Native English speaker, Canadian therapist" },
  { value: 10, suffix: "", label: "Session Program", desc: "Structured with data-driven results" },
  { value: 2, suffix: "", label: "Core Modalities", desc: "CBT + Schema Therapy integrated" },
  { value: 100, suffix: "%", label: "Evidence-Based", desc: "Every session grounded in research" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ background: "var(--cream-100)" }}>
      <div className="container">
        {/* Header */}
        <FadeUp className="text-center mb-20">
          <p className="section-label justify-center">About Me</p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--primary-dark)",
              lineHeight: 1.15,
            }}
          >
            Meet your therapist —{" "}
            <span style={{ fontStyle: "italic", color: "var(--sage-500)" }}>
              Trinity Reda
            </span>
          </h2>
        </FadeUp>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: image placeholder */}
          <FadeUp delay={100}>
            <div className="relative">
              {/* Main image placeholder */}
              <div
                className="rounded-2xl overflow-hidden relative"
                style={{
                  height: "520px",
                  background: "linear-gradient(145deg, var(--sage-200), var(--sage-400))",
                }}
              >
                {/* Placeholder icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-30">
                  <div className="w-24 h-24 rounded-full" style={{ background: "var(--sage-600)" }} />
                  <div className="w-40 h-3 rounded-full" style={{ background: "var(--sage-600)" }} />
                  <div className="w-28 h-2 rounded-full" style={{ background: "var(--sage-600)" }} />
                </div>
                {/* Image — replace src with actual photo */}
                {/* <Image src="/images/trinity-reda.jpg" alt="Trinity Reda" fill className="object-cover" /> */}

                {/* Credential badge */}
                <div
                  className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--accent)", fontFamily: "var(--font-inter)" }}>
                    Mgr. Trinity Reda
                  </p>
                  <p className="text-sm" style={{ color: "var(--charcoal)", fontFamily: "var(--font-inter)" }}>
                    Doctoral Candidate, Charles University Prague<br />
                    Clinical & Counselling Psychology
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-40 -z-10 animate-float"
                style={{ background: "var(--sage-300)" }}
              />
              <div
                className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full opacity-30 -z-10 animate-float-reverse"
                style={{ background: "var(--terra-400)" }}
              />
            </div>
          </FadeUp>

          {/* Right: text content */}
          <div>
            <FadeUp delay={150}>
              <p className="section-label">My Story</p>
              <h3
                className="mb-6"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "2rem",
                  fontWeight: 400,
                  color: "var(--primary-dark)",
                  lineHeight: 1.25,
                }}
              >
                An experienced psychologist who understands the expat experience
              </h3>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="mb-5 text-base leading-relaxed" style={{ color: "var(--charcoal-light)", fontFamily: "var(--font-inter)" }}>
                Hi! I&apos;m Trinity Reda, an experienced CBT and Schema Therapy trained psychologist. 
                I&apos;m a native English speaker from Canada, and an expat in Prague for over a decade. 
                I am also currently completing my doctorate in Medical Psychology and Psychopathology 
                at Charles University.
              </p>
              <p className="mb-5 text-base leading-relaxed" style={{ color: "var(--charcoal-light)", fontFamily: "var(--font-inter)" }}>
                Humble Warrior Psychology is my private therapy practice — built on the belief that 
                real change requires both understanding the roots of your patterns <em>and</em> having 
                the tools to reshape them.
              </p>
            </FadeUp>

            <FadeUp delay={250}>
              {/* Philosophy quote */}
              <blockquote
                className="my-8 pl-6 py-4 relative"
                style={{ borderLeft: "3px solid var(--accent)" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.4rem",
                    fontStyle: "italic",
                    color: "var(--primary-dark)",
                    lineHeight: 1.4,
                  }}
                >
                  &ldquo;This is why I work with both Schema Therapy and CBT — 
                  one without the other only gets you halfway there.&rdquo;
                </p>
                <p className="mt-3 text-sm" style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
                  — Trinity Reda
                </p>
              </blockquote>
            </FadeUp>

            <FadeUp delay={300}>
              {/* Credentials */}
              <div className="space-y-3">
                {[
                  "B.A. Psychology — Concordia University, Montreal",
                  "Mgr. Clinical & Counselling Psychology",
                  "Doctoral Candidate — Medical Psychology, Charles University Prague",
                  "CBT Certified · Schema Therapy Trained",
                ].map((cred) => (
                  <div key={cred} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--sage-100)", border: "1.5px solid var(--sage-400)" }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ background: "var(--sage-500)" }} />
                    </div>
                    <span className="text-sm" style={{ color: "var(--charcoal)", fontFamily: "var(--font-inter)" }}>
                      {cred}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 80}>
              <div
                className="card-premium p-8 text-center"
                style={{ background: i % 2 === 0 ? "var(--surface)" : "var(--stone-100)" }}
              >
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "3rem",
                    fontWeight: 500,
                    color: "var(--primary)",
                    lineHeight: 1,
                  }}
                >
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-semibold text-sm mb-1" style={{ color: "var(--primary-dark)", fontFamily: "var(--font-inter)" }}>
                  {stat.label}
                </p>
                <p className="text-xs" style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
                  {stat.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
