"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeUp } from "@/components/animations";

const faqs = [
  {
    q: "How long does the program last?",
    a: "The standard 10-Session Program runs across 10 sessions: sessions 1–8 are active work, session 9 is a data review where we look at real assessment data to visualize your progress, and session 10 is closing and consolidation. If goals aren't fully met, two options are available: a 3–5 session targeted extension, or a single maintenance session 4–6 weeks after the program ends.",
  },
  {
    q: "Do I have to complete the assessments before we start?",
    a: "Yes — the assessments are a core part of the program. They take approximately 15 minutes to complete and are sent to you before the first session, so no session time is wasted on identifying where to start. They are used to map your patterns upfront and then track measurable progress with real data at session 9.",
  },
  {
    q: "Can I do sessions in-person or online?",
    a: "Yes — both formats are available. You can choose between in-person sessions at the practice in Holešovice, Prague, or online video sessions. If you need to switch your format for a particular session, please provide at least 2 hours' notice.",
  },
  {
    q: "What is the cancellation policy?",
    a: "If you cancel within 24 hours of a session, a 75% cancellation fee applies: 1,125 CZK for individual sessions, and 1,575 CZK for couples sessions. This reflects the time reserved specifically for you.",
  },
  {
    q: "What are the session rates?",
    a: "Individual sessions are 1,500 CZK per session. Couples sessions are 2,100 CZK per session. A free 10–15 minute consultation call is available if you'd like to speak before committing.",
  },
  {
    q: "What therapeutic approaches do you use?",
    a: "The practice uses an integrated model combining CBT (Cognitive Behavioural Therapy) and Schema Therapy. Schema Therapy goes beneath the surface to trace current patterns to their origins — often childhood experiences and unmet emotional needs. CBT is then applied in the present to reshape specific thoughts, reactions, and behaviours. One without the other only gets you halfway there.",
  },
  {
    q: "Who do you work with?",
    a: "Individual adults, adolescents, and couples. Sessions are conducted in English. The practice particularly welcomes expats and English-speaking clients in Prague, as well as international clients via online sessions.",
  },
  {
    q: "How do I book a session?",
    a: "You can book directly through the online booking system at humblewarriorpsychology.simplybook.it, or reach out by email at trinityreda@gmail.com or by phone at +420 722 199 439 during office hours (Mon–Fri, 10:00–18:00).",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section"
      style={{ background: "var(--stone-100)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left: header */}
          <div className="lg:col-span-1">
            <FadeUp>
              <p className="section-label">FAQ</p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 400,
                  color: "var(--primary-dark)",
                  lineHeight: 1.2,
                }}
              >
                Frequently asked questions
              </h2>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "var(--charcoal-light)", fontFamily: "var(--font-inter)" }}
              >
                Everything you need to know before your first session. 
                Don&apos;t see your question here?
              </p>
              <a
                href="mailto:trinityreda@gmail.com"
                className="btn-outline text-sm"
                style={{ fontSize: "0.82rem" }}
              >
                Ask a question
              </a>
            </FadeUp>

            {/* Side decoration */}
            <FadeUp delay={200} className="mt-12 hidden lg:block">
              <div
                className="rounded-2xl p-6"
                style={{ background: "var(--primary-dark)" }}
              >
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--terra-400)", fontFamily: "var(--font-inter)" }}>
                  Free consultation
                </p>
                <p
                  className="text-lg mb-4"
                  style={{ fontFamily: "var(--font-cormorant)", color: "white", fontWeight: 400 }}
                >
                  Not sure if this is right for you?
                </p>
                <p className="text-xs mb-5" style={{ color: "var(--sage-200)", fontFamily: "var(--font-inter)" }}>
                  A free 10–15 minute consultation call is available. 
                  No commitment required.
                </p>
                <a
                  href="mailto:trinityreda@gmail.com"
                  className="text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-2 transition-colors"
                  style={{ color: "var(--sage-300)", fontFamily: "var(--font-inter)" }}
                >
                  Get in touch →
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-2">
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FadeUp key={i} delay={i * 50}>
                  <div
                    className="rounded-xl overflow-hidden transition-all duration-300"
                    style={{
                      background: "var(--surface)",
                      border: `1px solid ${open === i ? "var(--sage-300)" : "var(--border)"}`,
                      boxShadow: open === i ? "0 4px 20px rgba(45,74,56,0.1)" : "none",
                    }}
                  >
                    <button
                      className="w-full flex items-center justify-between p-6 text-left transition-colors"
                      onClick={() => setOpen(open === i ? null : i)}
                      aria-expanded={open === i}
                    >
                      <span
                        className="font-medium text-sm pr-4"
                        style={{
                          color: "var(--primary-dark)",
                          fontFamily: "var(--font-inter)",
                          lineHeight: 1.4,
                        }}
                      >
                        {faq.q}
                      </span>
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        style={{
                          background: open === i ? "var(--sage-500)" : "var(--stone-200)",
                          color: open === i ? "white" : "var(--charcoal)",
                          transform: open === i ? "rotate(0deg)" : "rotate(0deg)",
                        }}
                      >
                        {open === i ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>

                    <div
                      style={{
                        maxHeight: open === i ? "500px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      <p
                        className="px-6 pb-6 text-sm leading-relaxed"
                        style={{ color: "var(--charcoal-light)", fontFamily: "var(--font-inter)" }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
