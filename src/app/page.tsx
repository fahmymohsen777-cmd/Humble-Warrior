import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        {/* Mid-page CTA banner */}
        <section
          className="py-20 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, var(--sage-600) 0%, var(--sage-800) 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="container text-center relative z-10">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)" }}
            >
              Take the next step
            </p>
            <h2
              className="text-3xl md:text-5xl mb-6"
              style={{ fontFamily: "var(--font-cormorant)", color: "white", fontWeight: 300, lineHeight: 1.2 }}
            >
              Ready to understand{" "}
              <span style={{ fontStyle: "italic", color: "var(--sage-300)" }}>
                why this keeps happening?
              </span>
            </h2>
            <p
              className="text-sm mb-8 max-w-md mx-auto"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)" }}
            >
              A free 10–15 minute consultation is available. No commitment required.
            </p>
            <a
              href="https://humblewarriorpsychology.simplybook.it"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300"
              style={{
                background: "var(--accent)",
                color: "white",
                fontFamily: "var(--font-inter)",
                boxShadow: "0 8px 30px rgba(196,124,90,0.4)",
              }}
            >
              Book a Session <ArrowRight size={14} />
            </a>
          </div>
        </section>
        <TestimonialsSection />
        <BlogPreviewSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
