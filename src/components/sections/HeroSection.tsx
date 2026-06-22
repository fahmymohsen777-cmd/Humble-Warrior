"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Shield, Award, Globe } from "lucide-react";

const trustPhrases = [
  "CBT Certified", "Schema Therapy", "Evidence-Based", "Prague",
  "English Native", "Individual Sessions", "Couples Therapy",
  "Online Available", "Charles University", "10+ Years",
  "Data-Driven", "Lasting Change",
];

const floatingCards = [
  {
    icon: Shield,
    title: "Evidence-Based",
    sub: "CBT + Schema Therapy",
    delay: 0,
    floatClass: "float-a",
    pos: "top-[22%] right-[6%]",
    mobilePos: "top-[12%] right-[4%]",
  },
  {
    icon: Award,
    title: "Mgr. Trinity Reda",
    sub: "Doctoral Candidate, Charles University",
    delay: 0.3,
    floatClass: "float-b",
    pos: "bottom-[28%] right-[10%]",
    mobilePos: "hidden",
  },
  {
    icon: Globe,
    title: "Prague + Online",
    sub: "In-person & remote sessions",
    delay: 0.6,
    floatClass: "float-c",
    pos: "bottom-[18%] left-[5%]",
    mobilePos: "hidden",
  },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    setMounted(true);
    const handleMouse = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.6 + i * 0.025, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  const line1 = "Therapy for";
  const line3 = "lasting change.";

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden mesh-gradient"
      style={{ background: "var(--color-bg)" }}
    >
      {/* === BACKGROUND LAYERS === */}
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute rounded-full pulse-glow"
          style={{
            width: "60vw",
            height: "60vw",
            top: "-10%",
            right: "-15%",
            background: "radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "40vw",
            height: "40vw",
            bottom: "5%",
            left: "-10%",
            background: "radial-gradient(circle, rgba(196,131,90,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "pulseGlow 6s ease-in-out infinite 2s",
          }}
        />
        {/* Mouse spotlight */}
        {mounted && (
          <div
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(61,107,80,0.06) 0%, transparent 70%)`,
            }}
          />
        )}
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, var(--color-text-1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Noise */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* === FLOATING CREDENTIAL CARDS === */}
      {floatingCards.map((card) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            className={`absolute ${card.pos} hidden lg:block`}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.4 + card.delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={`glass rounded-2xl p-4 ${card.floatClass}`} style={{ minWidth: "200px" }}>
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--color-primary-glow)" }}
                >
                  <Icon size={15} style={{ color: "var(--color-primary)" }} />
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: "var(--color-text-1)", fontFamily: "var(--font-inter)" }}>
                    {card.title}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--color-text-3)", fontFamily: "var(--font-inter)" }}>
                    {card.sub}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* === MAIN CONTENT === */}
      <motion.div
        className="relative z-10 flex flex-col items-start justify-center flex-1 container"
        style={{ paddingTop: "140px", paddingBottom: "120px", y, opacity }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="label mb-8"
        >
          Humble Warrior Psychology
        </motion.div>

        {/* Headline */}
        <div className="mb-8" style={{ maxWidth: "820px" }}>
          {/* Line 1 */}
          <div
            className="font-display block overflow-hidden"
            style={{
              fontSize: "clamp(52px, 8vw, 96px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: "var(--color-text-1)",
            }}
          >
            {line1.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={charVariants}
                initial="hidden"
                animate="visible"
                style={{ display: char === " " ? "inline" : "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Line 2 — italic sage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display block"
            style={{
              fontSize: "clamp(52px, 8vw, 96px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: "var(--color-primary)",
            }}
          >
            resilience,
          </motion.div>

          {/* Line 3 — gradient gold */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display block text-gradient-hero"
            style={{
              fontSize: "clamp(52px, 8vw, 96px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            {line3}
          </motion.div>
        </div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "clamp(15px, 1.8vw, 18px)",
            fontWeight: 300,
            color: "var(--color-text-2)",
            lineHeight: 1.75,
            maxWidth: "560px",
          }}
        >
          You already know something&apos;s off — the same argument, the same thoughts spiralling, the same reaction you swore you&apos;d stop having.
          Therapy here is about understanding <em>why</em> this keeps happening — and actually doing something about it.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://humblewarriorpsychology.simplybook.it"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary group"
          >
            Book a Session
            <motion.span
              className="inline-flex"
              whileHover={{ x: 3, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight size={15} />
            </motion.span>
          </a>
          <button
            onClick={scrollToAbout}
            className="btn btn-ghost"
          >
            Learn More
          </button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-16 flex items-center gap-6 flex-wrap"
        >
          {[
            { val: "10+", label: "Years in Prague" },
            { val: "CBT", label: "Cognitive Behavioural Therapy" },
            { val: "2", label: "Core therapeutic modalities" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div
                className="h-8 w-px"
                style={{ background: "var(--color-border)", display: "inline-block" }}
              />
              <div>
                <p
                  className="font-display"
                  style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--color-text-1)", lineHeight: 1 }}
                >
                  {item.val}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.7rem",
                    color: "var(--color-text-3)",
                    marginTop: "2px",
                  }}
                >
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* === MARQUEE STRIP === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="relative z-10 w-full border-t overflow-hidden py-5 marquee-container"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="marquee-track marquee-left" style={{ gap: "0" }}>
          {[...trustPhrases, ...trustPhrases, ...trustPhrases, ...trustPhrases].map((phrase, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 px-5"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-text-3)",
                whiteSpace: "nowrap",
              }}
            >
              {phrase}
              <span style={{ color: "var(--color-accent)", fontSize: "0.5rem" }}>◆</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{ color: "var(--color-text-3)" }}
        aria-label="Scroll down"
      >
        <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>

      {/* Section blend bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, transparent, var(--color-bg))" }}
      />
    </section>
  );
}
