"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { FadeUp } from "@/components/animations";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", type: "individual" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with actual API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section relative overflow-hidden"
      style={{ background: "var(--cream-100)" }}
    >
      {/* Decorative */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--sage-200), transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <FadeUp className="text-center mb-16">
          <p className="section-label justify-center">Contact</p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--primary-dark)",
            }}
          >
            Get in touch
          </h2>
          <p
            className="mt-4 max-w-md mx-auto text-sm"
            style={{ color: "var(--charcoal-light)", fontFamily: "var(--font-inter)", lineHeight: 1.7 }}
          >
            Have a question or want to discuss your needs? 
            Send a message or book directly online.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: contact info */}
          <div className="lg:col-span-2">
            <FadeUp>
              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: MapPin,
                    label: "Office",
                    value: "Ortenovo náměstí 890/2\nHolešovice, 170 00 Praha\nCzech Republic",
                    href: "https://maps.google.com/?q=Ortenovo+náměstí+890/2+Praha",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+420 722 199 439",
                    href: "tel:+420722199439",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "trinityreda@gmail.com",
                    href: "mailto:trinityreda@gmail.com",
                  },
                  {
                    icon: Clock,
                    label: "Hours",
                    value: "Monday – Friday\n10:00 – 18:00",
                    href: null,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div
                      className="card-premium p-5 flex items-start gap-4 group"
                      style={{ background: "var(--surface)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "var(--sage-100)" }}
                      >
                        <Icon size={18} style={{ color: "var(--sage-600)" }} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
                          {item.label}
                        </p>
                        <p
                          className="text-sm leading-relaxed"
                          style={{
                            color: item.href ? "var(--primary)" : "var(--charcoal)",
                            fontFamily: "var(--font-inter)",
                            whiteSpace: "pre-line",
                          }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block transition-transform hover:-translate-y-0.5">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </FadeUp>

            {/* Book online CTA */}
            <FadeUp delay={150}>
              <div
                className="rounded-2xl p-7 text-center"
                style={{
                  background: "linear-gradient(135deg, var(--primary-dark), var(--primary))",
                  boxShadow: "0 8px 30px rgba(45,74,56,0.25)",
                }}
              >
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--sage-300)", fontFamily: "var(--font-inter)" }}>
                  Prefer to book directly?
                </p>
                <p className="text-lg mb-5" style={{ fontFamily: "var(--font-cormorant)", color: "white", fontWeight: 400 }}>
                  Online booking available 24/7
                </p>
                <a
                  href="https://humblewarriorpsychology.simplybook.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-all"
                  style={{
                    background: "var(--accent)",
                    color: "white",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  Book a Session →
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right: contact form */}
          <div className="lg:col-span-3">
            <FadeUp delay={100}>
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 4px 30px rgba(45,74,56,0.08)",
                }}
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                      style={{ background: "var(--sage-100)" }}
                    >
                      <CheckCircle size={32} style={{ color: "var(--sage-500)" }} />
                    </div>
                    <h3
                      className="text-2xl mb-3"
                      style={{ fontFamily: "var(--font-cormorant)", color: "var(--primary-dark)", fontWeight: 400 }}
                    >
                      Message received!
                    </h3>
                    <p className="text-sm" style={{ color: "var(--charcoal-light)", fontFamily: "var(--font-inter)" }}>
                      Trinity will get back to you within 1–2 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3
                      className="text-xl mb-6"
                      style={{ fontFamily: "var(--font-cormorant)", color: "var(--primary-dark)", fontWeight: 500 }}
                    >
                      Send a message
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="First name"
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                          style={{
                            background: "var(--cream-100)",
                            border: "1.5px solid var(--border)",
                            color: "var(--charcoal)",
                            fontFamily: "var(--font-inter)",
                          }}
                          onFocus={(e) => { e.target.style.borderColor = "var(--sage-400)"; e.target.style.boxShadow = "0 0 0 3px rgba(74,124,89,0.1)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                          style={{
                            background: "var(--cream-100)",
                            border: "1.5px solid var(--border)",
                            color: "var(--charcoal)",
                            fontFamily: "var(--font-inter)",
                          }}
                          onFocus={(e) => { e.target.style.borderColor = "var(--sage-400)"; e.target.style.boxShadow = "0 0 0 3px rgba(74,124,89,0.1)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
                          Phone (optional)
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+420 ..."
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                          style={{
                            background: "var(--cream-100)",
                            border: "1.5px solid var(--border)",
                            color: "var(--charcoal)",
                            fontFamily: "var(--font-inter)",
                          }}
                          onFocus={(e) => { e.target.style.borderColor = "var(--sage-400)"; e.target.style.boxShadow = "0 0 0 3px rgba(74,124,89,0.1)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
                          Session Type
                        </label>
                        <select
                          value={form.type}
                          onChange={(e) => setForm({ ...form, type: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 appearance-none"
                          style={{
                            background: "var(--cream-100)",
                            border: "1.5px solid var(--border)",
                            color: "var(--charcoal)",
                            fontFamily: "var(--font-inter)",
                          }}
                          onFocus={(e) => { e.target.style.borderColor = "var(--sage-400)"; e.target.style.boxShadow = "0 0 0 3px rgba(74,124,89,0.1)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                        >
                          <option value="individual">Individual</option>
                          <option value="couples">Couples</option>
                          <option value="online">Online</option>
                          <option value="consultation">Free Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="What brings you to therapy? Feel free to share as much or as little as you're comfortable with..."
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                        style={{
                          background: "var(--cream-100)",
                          border: "1.5px solid var(--border)",
                          color: "var(--charcoal)",
                          fontFamily: "var(--font-inter)",
                          lineHeight: 1.6,
                        }}
                        onFocus={(e) => { e.target.style.borderColor = "var(--sage-400)"; e.target.style.boxShadow = "0 0 0 3px rgba(74,124,89,0.1)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message <Send size={14} />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs mt-4" style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
                      Trinity typically responds within 1–2 business days.
                    </p>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
