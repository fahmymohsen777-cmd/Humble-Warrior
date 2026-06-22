"use client";
import { useState } from "react";
import { ArrowRight, Clock, BarChart3, Repeat, Users, Monitor, Building } from "lucide-react";
import { FadeUp } from "@/components/animations";

const services = [
  {
    id: "10-session",
    icon: BarChart3,
    tag: "Most Popular",
    title: "The 10-Session Program",
    subtitle: "Structured. Data-driven. Results you can see.",
    description:
      "A focused, evidence-based program with a clear beginning, middle, and end. Psychological assessments are sent before your first session — so we dive straight into the work from day one.",
    features: [
      "Pre-session psychological assessments (~15 min)",
      "Sessions 1–8: Active, focused therapeutic work",
      "Session 9: Data review — visualize what has shifted",
      "Session 10: Closing & consolidation",
      "Optional: 3–5 session targeted extension",
      "Optional: 1 maintenance session at 4–6 weeks",
    ],
    color: "var(--sage-500)",
    bgColor: "var(--sage-50)",
    price: "1,500 CZK / session",
    ideal: "Ideal for people seeking structured work with a clear timeline",
  },
  {
    id: "ongoing",
    icon: Repeat,
    tag: "Flexible",
    title: "Ongoing Therapy",
    subtitle: "Deep, layered, open-ended — but never vague.",
    description:
      "For those dealing with more complex or multi-layered issues, or who prefer to explore deeper over a longer period. Same evidence-based approach, no fixed endpoint.",
    features: [
      "CBT + Schema Therapy integrated approach",
      "No fixed endpoint — open to your needs",
      "Solution-focused despite flexible timeline",
      "Suitable for complex, multi-layered issues",
      "Regular progress check-ins built in",
      "Both in-person and online available",
    ],
    color: "var(--terra-500)",
    bgColor: "var(--stone-100)",
    price: "1,500 CZK / session",
    ideal: "Ideal for complex issues or those who prefer depth over structure",
  },
];

const formats = [
  { icon: Building, label: "In-Person", desc: "Holešovice, Prague" },
  { icon: Monitor, label: "Online", desc: "Video sessions anywhere" },
  { icon: Users, label: "Individual or Couples", desc: "Both formats available" },
];

const specialties = [
  "Relationship Dynamics",
  "Anxiety & Depression",
  "Self-Worth & Identity",
  "Shame & Self-Hate",
  "Stress & Burnout",
  "Body Image",
  "Acceptance",
  "Gender & Sexuality",
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="section relative overflow-hidden"
      style={{ background: "var(--cream-100)" }}
    >
      {/* Decorative background */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 -z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--sage-100) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <FadeUp className="text-center mb-6">
          <p className="section-label justify-center">Services</p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--primary-dark)",
            }}
          >
            How we work together
          </h2>
        </FadeUp>

        <FadeUp delay={100} className="text-center mb-16">
          <p
            className="max-w-xl mx-auto"
            style={{
              color: "var(--charcoal-light)",
              fontFamily: "var(--font-inter)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            The combination of Schema Therapy &amp; CBT means we go beneath the surface to 
            understand your patterns, and then equip you with real tools to change them.
          </p>
        </FadeUp>

        {/* Approach explanation */}
        <FadeUp delay={150} className="mb-16">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--border)", boxShadow: "0 4px 30px rgba(45,74,56,0.08)" }}
          >
            <div className="p-10" style={{ background: "var(--primary-dark)" }}>
              <p className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: "var(--terra-400)", fontFamily: "var(--font-inter)" }}>
                Schema Therapy — The Roots
              </p>
              <h3 className="text-2xl mb-4" style={{ fontFamily: "var(--font-cormorant)", color: "white", fontWeight: 400 }}>
                Why this keeps happening
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--sage-200)", fontFamily: "var(--font-inter)" }}>
                Goes beneath the surface — tracing current patterns back to their origins, 
                often rooted in childhood experiences and unmet emotional needs. 
                Understanding the <em>why</em> creates lasting insight.
              </p>
            </div>
            <div className="p-10" style={{ background: "var(--sage-500)" }}>
              <p className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)" }}>
                CBT — The Action
              </p>
              <h3 className="text-2xl mb-4" style={{ fontFamily: "var(--font-cormorant)", color: "white", fontWeight: 400 }}>
                What you do about it
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-inter)" }}>
                Applied in the present to reshape specific thoughts, reactions, and behaviours 
                that perpetuate current cycles. Practical tools you take home after every session.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hovered === service.id;
            return (
              <FadeUp key={service.id} delay={i * 100}>
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer h-full flex flex-col"
                  style={{
                    background: "var(--surface)",
                    border: `1px solid ${isHovered ? service.color : "var(--border)"}`,
                    boxShadow: isHovered
                      ? `0 20px 60px rgba(45,74,56,0.15), 0 0 0 1px ${service.color}20`
                      : "0 2px 8px rgba(45,74,56,0.06)",
                    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  }}
                  onMouseEnter={() => setHovered(service.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Card header */}
                  <div className="p-8 pb-0">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{ background: service.bgColor }}
                      >
                        <Icon size={24} style={{ color: service.color }} />
                      </div>
                      <span
                        className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full"
                        style={{
                          background: service.bgColor,
                          color: service.color,
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        {service.tag}
                      </span>
                    </div>
                    <h3
                      className="text-2xl mb-2"
                      style={{ fontFamily: "var(--font-cormorant)", color: "var(--primary-dark)", fontWeight: 500 }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium mb-4" style={{ color: service.color, fontFamily: "var(--font-inter)" }}>
                      {service.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--charcoal-light)", fontFamily: "var(--font-inter)" }}>
                      {service.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="px-8 flex-1">
                    <div className="space-y-2.5">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ background: service.color }}
                          />
                          <span className="text-sm" style={{ color: "var(--charcoal)", fontFamily: "var(--font-inter)" }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card footer */}
                  <div
                    className="p-8 mt-6"
                    style={{ borderTop: "1px solid var(--border)", background: service.bgColor }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
                          Session rate
                        </p>
                        <p className="font-semibold" style={{ color: "var(--primary-dark)", fontFamily: "var(--font-inter)" }}>
                          {service.price}
                        </p>
                      </div>
                      <a
                        href="https://humblewarriorpsychology.simplybook.it"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300"
                        style={{
                          background: service.color,
                          color: "white",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        Book <ArrowRight size={14} />
                      </a>
                    </div>
                    <p className="text-xs mt-3" style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
                      {service.ideal}
                    </p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Session formats */}
        <FadeUp delay={100}>
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-widest font-semibold mb-2" style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
              All sessions available as
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {formats.map((f, i) => {
              const Icon = f.icon;
              return (
                <FadeUp key={f.label} delay={i * 60}>
                  <div
                    className="card-premium p-6 flex items-center gap-4"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--sage-100)" }}
                    >
                      <Icon size={20} style={{ color: "var(--sage-600)" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "var(--primary-dark)", fontFamily: "var(--font-inter)" }}>
                        {f.label}
                      </p>
                      <p className="text-xs" style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </FadeUp>

        {/* Specialties */}
        <FadeUp delay={150}>
          <p className="text-center text-sm uppercase tracking-widest font-semibold mb-6" style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
            Areas of focus
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {specialties.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full text-sm transition-colors hover:bg-sage-100"
                style={{
                  background: "var(--stone-100)",
                  color: "var(--primary-dark)",
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-inter)",
                  cursor: "default",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
