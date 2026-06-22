"use client";
import React, { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How do I know if therapy is right for me?",
    a: "If you're feeling stuck, overwhelmed, or noticing patterns in your life that you can't seem to break despite your best efforts, therapy can help. You don't need to be in a crisis to benefit from having a dedicated, objective space to process your thoughts."
  },
  {
    q: "What is the difference between CBT and Schema Therapy?",
    a: "Cognitive Behavioural Therapy (CBT) focuses on identifying and changing negative thought patterns and behaviours in the present. Schema Therapy goes deeper, looking at long-standing patterns (schemas) that developed in childhood and how they drive your current reactions and relationships."
  },
  {
    q: "How long does the 10-Session Program take?",
    a: "Typically, the program runs for 10-12 weeks, with one session per week. This consistency is key for building momentum, practicing new skills, and seeing tangible changes in a relatively short timeframe."
  },
  {
    q: "Do you offer online sessions?",
    a: "Yes, I offer secure, confidential online sessions for clients residing outside of Prague, or those who simply prefer the convenience of therapy from their own home."
  },
  {
    q: "What is your cancellation policy?",
    a: "I require 24 hours notice for cancellations. Sessions cancelled with less than 24 hours notice will incur a 75% fee (1125 CZK for individual sessions / 1575 CZK for couples sessions), as that time was reserved specifically for you."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-[var(--color-surface-2)] py-32 lg:py-48">
      <div className="container-lg max-w-4xl">
        
        <ScrollReveal>
          <div className="mb-20">
            <div className="label mb-6">Common Questions</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-1)]">
              Clarity Before We Begin
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                <div 
                  className={`border-b border-[var(--color-border)] transition-colors duration-500 ${isOpen ? 'border-[var(--color-border-hover)]' : ''}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
                  >
                    <span className={`font-display text-xl md:text-2xl transition-colors duration-300 ${isOpen ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-1)] group-hover:text-[var(--color-text-2)]'}`}>
                      {faq.q}
                    </span>
                    <div className={`ml-6 shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'border-[var(--color-primary)] bg-[var(--color-primary-glow)] text-[var(--color-primary)]' : 'border-[var(--color-border)] text-[var(--color-text-3)] group-hover:border-[var(--color-text-3)]'}`}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-[var(--color-text-2)] text-base md:text-lg leading-relaxed max-w-3xl">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
