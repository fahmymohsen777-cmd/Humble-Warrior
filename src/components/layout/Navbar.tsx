"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const links = [
  { href: "/#about",        label: "About" },
  { href: "/#services",     label: "Services" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq",          label: "FAQ" },
  { href: "/blog",          label: "Blog" },
  { href: "/#contact",      label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (y) => setScrolled(y > 60));
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navBg = useTransform(scrollY, [0, 80], ["rgba(0,0,0,0)", "rgba(255,255,255,0)"]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ y: 0 }}
      >
        <motion.div
          className="mx-4 mt-4 rounded-2xl transition-all duration-500"
          style={{
            background: scrolled
              ? "var(--glass-bg)"
              : "transparent",
            backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
            borderColor: scrolled ? "var(--glass-border)" : "transparent",
            borderWidth: "1px",
            borderStyle: "solid",
            boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.08)" : "none",
          }}
        >
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <Link href="/" onClick={() => setOpen(false)} className="group flex flex-col leading-none">
              <motion.span
                className="font-display tracking-tight"
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  color: "var(--color-text-1)",
                  letterSpacing: "-0.02em",
                }}
                whileHover={{ letterSpacing: "-0.01em" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Humble Warrior
              </motion.span>
              <span
                className="label"
                style={{
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  color: "var(--color-accent)",
                  marginTop: "1px",
                }}
              >
                Psychology
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 rounded-xl group"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 400,
                    color: "var(--color-text-2)",
                    transition: "color 0.3s ease",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-1)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-2)"; }}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-1.5 left-4 right-4 h-px"
                    style={{ background: "var(--color-primary)", scaleX: 0, originX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </Link>
              ))}
            </nav>

            {/* Right: Theme + CTA + Burger */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="https://humblewarriorpsychology.as.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary hidden sm:inline-flex"
                style={{ fontSize: "0.75rem", padding: "10px 22px", gap: "6px" }}
              >
                Book Session <ArrowUpRight size={13} />
              </a>
              <button
                className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "var(--color-surface-2)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-1)",
                }}
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{
              background: "var(--color-bg)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Decorative bg */}
            <div
              className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, var(--color-primary-glow), transparent 70%)" }}
            />

            <div className="flex flex-col items-center justify-center h-full gap-2">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display block text-center py-3 px-8"
                    style={{
                      fontSize: "clamp(2rem, 6vw, 3rem)",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "var(--color-text-2)",
                      letterSpacing: "-0.02em",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-1)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-2)"; }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: links.length * 0.06 + 0.1, duration: 0.5 }}
                className="mt-8"
              >
                <a
                  href="https://humblewarriorpsychology.as.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  onClick={() => setOpen(false)}
                >
                  Book a Session <ArrowUpRight size={14} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
