"use client";
import React, { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate network request
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="relative bg-[var(--color-bg)] py-32 lg:py-48">
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left: Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <ScrollReveal>
                <div className="label mb-6">Get in Touch</div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-1)] leading-[1.1] mb-8">
                  Ready to start?
                </h2>
                <p className="text-[var(--color-text-2)] text-lg mb-12 max-w-md">
                  Reach out for a free 15-minute consultation. We'll discuss what you're looking for and see if we're a good fit.
                </p>
              </ScrollReveal>

              <div className="space-y-8">
                <ScrollReveal delay={0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h4 className="text-[var(--color-text-1)] font-medium mb-1">Prague 1 Clinic</h4>
                      <p className="text-[var(--color-text-3)] text-sm">Staré Město, Prague<br/>(Exact address provided upon booking)</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h4 className="text-[var(--color-text-1)] font-medium mb-1">Email</h4>
                      <a href="mailto:hello@humblewarriorpsych.com" className="text-[var(--color-text-3)] hover:text-[var(--color-primary)] transition-colors text-sm">
                        hello@humblewarriorpsych.com
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
            
            <ScrollReveal delay={0.3}>
              <div className="mt-16 pt-16 border-t border-[var(--color-border)]">
                <p className="text-[var(--color-text-3)] text-sm mb-6">Or book directly through the portal:</p>
                <MagneticButton href="https://humblewarriorpsychology.simplybook.it" target="_blank" className="btn btn-ghost w-full justify-between group">
                  Open Booking Portal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="glass rounded-[2rem] p-8 md:p-12 lg:p-16">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center h-[400px] text-center">
                    <div className="w-20 h-20 rounded-full bg-[var(--color-primary-glow)] flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-display text-3xl text-[var(--color-text-1)] mb-4">Message Received</h3>
                    <p className="text-[var(--color-text-2)]">I will get back to you within 24-48 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="relative group">
                        <input 
                          type="text" 
                          id="name"
                          required
                          className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-[var(--color-text-1)] focus:outline-none focus:border-[var(--color-primary)] transition-colors peer placeholder-transparent"
                          placeholder="Your name"
                        />
                        <label 
                          htmlFor="name" 
                          className="absolute left-0 top-4 text-[var(--color-text-3)] text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-primary)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs cursor-text"
                        >
                          Name
                        </label>
                      </div>
                      
                      <div className="relative group">
                        <input 
                          type="email" 
                          id="email"
                          required
                          className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-[var(--color-text-1)] focus:outline-none focus:border-[var(--color-primary)] transition-colors peer placeholder-transparent"
                          placeholder="Email address"
                        />
                        <label 
                          htmlFor="email" 
                          className="absolute left-0 top-4 text-[var(--color-text-3)] text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-primary)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs cursor-text"
                        >
                          Email Address
                        </label>
                      </div>
                    </div>

                    <div className="relative group">
                      <input 
                        type="text" 
                        id="subject"
                        required
                        className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-[var(--color-text-1)] focus:outline-none focus:border-[var(--color-primary)] transition-colors peer placeholder-transparent"
                        placeholder="Subject"
                      />
                      <label 
                        htmlFor="subject" 
                        className="absolute left-0 top-4 text-[var(--color-text-3)] text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-primary)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs cursor-text"
                      >
                        What are you seeking help with?
                      </label>
                    </div>

                    <div className="relative group">
                      <textarea 
                        id="message"
                        required
                        rows={4}
                        className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-[var(--color-text-1)] focus:outline-none focus:border-[var(--color-primary)] transition-colors peer placeholder-transparent resize-none"
                        placeholder="Message"
                      />
                      <label 
                        htmlFor="message" 
                        className="absolute left-0 top-4 text-[var(--color-text-3)] text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-primary)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs cursor-text"
                      >
                        Brief message (optional)
                      </label>
                    </div>

                    <div className="pt-4">
                      <MagneticButton className="btn btn-primary w-full md:w-auto" onClick={() => {}}>
                        {status === "loading" ? "Sending..." : "Send Message"}
                      </MagneticButton>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
