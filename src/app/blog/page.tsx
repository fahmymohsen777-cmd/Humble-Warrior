import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FadeUp } from "@/components/animations";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on therapy, mental health, and personal growth from Humble Warrior Psychology.",
};

const posts = [
  {
    slug: "post-1-the-past",
    title: "The Past",
    date: "June 3, 2026",
    readTime: "4 min read",
    category: "Schema Therapy",
    excerpt:
      "The past shapes the patterns we carry into the present. Understanding how our histories influence our thoughts, emotions, and behaviours is the first step toward real change.",
    featured: true,
  },
  {
    slug: "post-2-we-all-out-here-sacrificing",
    title: "We All Out Here Sacrificing",
    date: "June 2026",
    readTime: "5 min read",
    category: "Wellbeing",
    excerpt:
      "On the quiet exhaustion that comes from giving too much of yourself — and what therapy can teach us about boundaries, burnout, and reclaiming your energy.",
    featured: false,
  },
];

const gradients = [
  "linear-gradient(135deg, var(--sage-700) 0%, var(--sage-500) 100%)",
  "linear-gradient(135deg, var(--charcoal) 0%, var(--terra-600) 100%)",
  "linear-gradient(135deg, var(--primary-dark) 0%, var(--sage-600) 100%)",
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden pt-40 pb-24"
          style={{ background: "var(--primary-dark)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-10 animate-blob"
            style={{ background: "radial-gradient(circle, var(--sage-400), transparent 70%)" }}
          />
          <div className="container relative z-10 text-center">
            <FadeUp>
              <p className="section-label justify-center" style={{ color: "var(--terra-400)" }}>
                Blog
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 300,
                  color: "white",
                  lineHeight: 1.1,
                }}
              >
                Thoughts &amp;{" "}
                <span style={{ fontStyle: "italic", color: "var(--sage-300)" }}>Insights</span>
              </h1>
              <p
                className="mt-4 max-w-md mx-auto"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-inter)", fontSize: "1rem" }}
              >
                Reflections on therapy, patterns, and the work of becoming.
              </p>
            </FadeUp>
          </div>
          {/* Bottom blend */}
          <div
            className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, var(--cream-100))" }}
          />
        </section>

        {/* Posts grid */}
        <section className="section" style={{ background: "var(--cream-100)" }}>
          <div className="container">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
                  No posts yet — check back soon.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                  <FadeUp key={post.slug} delay={i * 80}>
                    <Link href={`/blog/${post.slug}`} className="block group h-full">
                      <article
                        className="card-premium overflow-hidden h-full flex flex-col"
                        style={{ background: "var(--surface)" }}
                      >
                        {/* Image area */}
                        <div
                          className="h-52 relative overflow-hidden"
                          style={{ background: gradients[i % gradients.length] }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center opacity-20">
                            <span
                              style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "6rem",
                                color: "white",
                                fontStyle: "italic",
                              }}
                            >
                              {post.title.charAt(0)}
                            </span>
                          </div>
                          {/* Category badge */}
                          <div className="absolute top-4 left-4">
                            <span
                              className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full"
                              style={{
                                background: "rgba(255,255,255,0.15)",
                                color: "white",
                                fontFamily: "var(--font-inter)",
                                backdropFilter: "blur(8px)",
                              }}
                            >
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-7 flex flex-col flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <CalendarDays size={12} style={{ color: "var(--muted)" }} />
                            <span className="text-xs" style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
                              {post.date}
                            </span>
                            <Clock size={12} style={{ color: "var(--stone-400)" }} />
                            <span className="text-xs" style={{ color: "var(--stone-400)", fontFamily: "var(--font-inter)" }}>
                              {post.readTime}
                            </span>
                          </div>
                          <h2
                            className="text-xl mb-3 transition-colors"
                            style={{
                              fontFamily: "var(--font-cormorant)",
                              color: "var(--primary-dark)",
                              fontWeight: 500,
                            }}
                          >
                            {post.title}
                          </h2>
                          <p
                            className="text-sm leading-relaxed flex-1 mb-5"
                            style={{ color: "var(--charcoal-light)", fontFamily: "var(--font-inter)" }}
                          >
                            {post.excerpt}
                          </p>
                          <span
                            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all group-hover:gap-3"
                            style={{ color: "var(--sage-500)", fontFamily: "var(--font-inter)" }}
                          >
                            Read article <ArrowRight size={12} />
                          </span>
                        </div>
                      </article>
                    </Link>
                  </FadeUp>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
