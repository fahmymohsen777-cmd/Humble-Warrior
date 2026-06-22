"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Me" },
  { href: "/#services", label: "Services" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "F.A.Q." },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 glass shadow-lg shadow-sage-900/5"
            : "py-5 bg-transparent"
        }`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none" onClick={() => setMobileOpen(false)}>
            <span
              className="text-xl font-semibold tracking-tight transition-colors group-hover:opacity-80"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: scrolled ? "var(--primary-dark)" : "white",
                fontSize: "1.4rem",
                letterSpacing: "-0.01em",
              }}
            >
              Humble Warrior
            </span>
            <span
              className="text-xs tracking-widest uppercase mt-0.5"
              style={{
                fontFamily: "var(--font-inter)",
                color: scrolled ? "var(--accent)" : "rgba(255,255,255,0.7)",
                fontSize: "0.6rem",
              }}
            >
              Psychology
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm transition-all duration-200 hover:bg-white/10"
                style={{
                  color: scrolled ? "var(--charcoal)" : "rgba(255,255,255,0.9)",
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.85rem",
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://humblewarriorpsychology.simplybook.it"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-primary text-xs px-5 py-2.5"
              style={{ fontSize: "0.8rem" }}
            >
              Book a Session
            </a>
            <button
              className="lg:hidden p-2 rounded-full transition-colors"
              style={{
                color: scrolled ? "var(--charcoal)" : "white",
                background: "rgba(255,255,255,0.1)",
              }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(45, 74, 56, 0.97)", backdropFilter: "blur(20px)" }}
        ref={menuRef}
      >
        {/* Close button top right */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-full text-white/60 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center h-3/4 gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/80 hover:text-white transition-all duration-300 py-3 px-8 rounded-full hover:bg-white/10"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.8rem",
                fontWeight: 400,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                opacity: mobileOpen ? 1 : 0,
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://humblewarriorpsychology.simplybook.it"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 btn-primary"
            onClick={() => setMobileOpen(false)}
            style={{
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              opacity: mobileOpen ? 1 : 0,
              transitionDelay: `${navLinks.length * 60}ms`,
              transition: "all 0.4s ease",
            }}
          >
            Book a Session
          </a>
        </nav>

        {/* Decorative blobs */}
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10 animate-blob"
          style={{ background: "var(--sage-400)" }} />
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-10 animate-float"
          style={{ background: "var(--terra-500)" }} />
      </div>
    </>
  );
}
