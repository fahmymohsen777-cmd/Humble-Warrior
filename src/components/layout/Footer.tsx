import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About Me" },
    { href: "/#services", label: "Services" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#faq", label: "F.A.Q." },
    { href: "/blog", label: "Blog" },
  ],
  services: [
    { href: "/#services", label: "The 10-Session Program" },
    { href: "/#services", label: "Ongoing Therapy" },
    { href: "/#services", label: "Individual Sessions" },
    { href: "/#services", label: "Couples Therapy" },
    { href: "/#services", label: "Online Sessions" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--primary-dark)", color: "var(--sage-100)" }}
    >
      {/* Decorative top wave */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, var(--terra-500), var(--sage-400), var(--terra-500))" }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-5 animate-blob"
        style={{ background: "var(--sage-400)" }}
      />
      <div
        className="absolute bottom-20 left-0 w-48 h-48 rounded-full opacity-5 animate-float-reverse"
        style={{ background: "var(--terra-500)" }}
      />

      <div className="container-wide relative z-10 pt-20 pb-12">
        {/* Top CTA Banner */}
        <div
          className="rounded-2xl p-10 mb-16 text-center relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: "var(--terra-400)", fontFamily: "var(--font-inter)" }}>
            Ready to begin?
          </p>
          <h3
            className="text-4xl mb-6"
            style={{ fontFamily: "var(--font-cormorant)", color: "white", fontWeight: 400 }}
          >
            Take the first step toward lasting change
          </h3>
          <a
            href="https://humblewarriorpsychology.simplybook.it"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300"
            style={{
              background: "var(--accent)",
              color: "white",
              fontFamily: "var(--font-inter)",
              boxShadow: "0 4px 20px rgba(196, 124, 90, 0.4)",
            }}
          >
            Book a Session <ArrowRight size={14} />
          </a>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="group flex flex-col mb-4 leading-none">
              <span
                className="text-2xl font-normal"
                style={{ fontFamily: "var(--font-cormorant)", color: "white" }}
              >
                Humble Warrior
              </span>
              <span
                className="text-xs tracking-widest uppercase mt-1"
                style={{ fontFamily: "var(--font-inter)", color: "var(--terra-400)" }}
              >
                Psychology
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--sage-200)", fontFamily: "var(--font-inter)" }}>
              Evidence-based therapy for resilience, clarity, and lasting change.
            </p>
            <p className="text-xs" style={{ color: "var(--sage-300)", fontFamily: "var(--font-inter)" }}>
              Mgr. Trinity Reda<br />
              Clinical & Counselling Psychologist
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--terra-400)", fontFamily: "var(--font-inter)" }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white flex items-center gap-2 group"
                    style={{ color: "var(--sage-200)", fontFamily: "var(--font-inter)" }}
                  >
                    <span className="w-0 group-hover:w-3 h-px transition-all duration-300" style={{ background: "var(--terra-400)" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--terra-400)", fontFamily: "var(--font-inter)" }}>
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white flex items-center gap-2 group"
                    style={{ color: "var(--sage-200)", fontFamily: "var(--font-inter)" }}
                  >
                    <span className="w-0 group-hover:w-3 h-px transition-all duration-300" style={{ background: "var(--terra-400)" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--terra-400)", fontFamily: "var(--font-inter)" }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: "var(--terra-400)" }} />
                <span className="text-sm leading-relaxed" style={{ color: "var(--sage-200)", fontFamily: "var(--font-inter)" }}>
                  Ortenovo náměstí 890/2<br />
                  Holešovice, Prague<br />
                  170 00, Czech Republic
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="flex-shrink-0" style={{ color: "var(--terra-400)" }} />
                <a href="tel:+420722199439" className="text-sm hover:text-white transition-colors" style={{ color: "var(--sage-200)", fontFamily: "var(--font-inter)" }}>
                  +420 722 199 439
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="flex-shrink-0" style={{ color: "var(--terra-400)" }} />
                <a href="mailto:trinityreda@gmail.com" className="text-sm hover:text-white transition-colors" style={{ color: "var(--sage-200)", fontFamily: "var(--font-inter)" }}>
                  trinityreda@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="flex-shrink-0" style={{ color: "var(--terra-400)" }} />
                <span className="text-sm" style={{ color: "var(--sage-200)", fontFamily: "var(--font-inter)" }}>
                  Mon–Fri, 10:00–18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "var(--sage-300)", fontFamily: "var(--font-inter)" }}>
            © {new Date().getFullYear()} Humble Warrior Psychology. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/#faq" className="text-xs hover:text-white transition-colors" style={{ color: "var(--sage-300)", fontFamily: "var(--font-inter)" }}>
              FAQ
            </Link>
            <Link href="/#contact" className="text-xs hover:text-white transition-colors" style={{ color: "var(--sage-300)", fontFamily: "var(--font-inter)" }}>
              Contact
            </Link>
            <a href="https://humblewarriorpsychology.simplybook.it" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors" style={{ color: "var(--sage-300)", fontFamily: "var(--font-inter)" }}>
              Book Online
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
