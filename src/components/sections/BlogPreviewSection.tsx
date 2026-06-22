import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { FadeUp } from "@/components/animations";

const posts = [
  {
    slug: "post-1-the-past",
    title: "The Past",
    date: "June 3, 2026",
    excerpt:
      "The past shapes the patterns we carry into the present. Understanding how our histories influence our thoughts, emotions, and behaviours is the first step toward real change.",
    readTime: "4 min read",
  },
  {
    slug: "post-2-we-all-out-here-sacrificing",
    title: "We All Out Here Sacrificing",
    date: "June 2026",
    excerpt:
      "On the quiet exhaustion that comes from giving too much of yourself — and what therapy can teach us about boundaries, burnout, and reclaiming your energy.",
    readTime: "5 min read",
  },
];

export default function BlogPreviewSection() {
  return (
    <section
      className="section"
      style={{ background: "var(--cream-100)" }}
    >
      <div className="container">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <FadeUp>
            <p className="section-label">Blog</p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 400,
                color: "var(--primary-dark)",
              }}
            >
              Thoughts &amp; insights
            </h2>
          </FadeUp>
          <FadeUp delay={100}>
            <Link
              href="/blog"
              className="btn-outline text-sm flex items-center gap-2"
              style={{ fontSize: "0.82rem" }}
            >
              View all posts <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <FadeUp key={post.slug} delay={i * 100}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <div
                  className="card-premium overflow-hidden h-full flex flex-col"
                  style={{ background: "var(--surface)" }}
                >
                  {/* Image placeholder */}
                  <div
                    className="h-52 relative overflow-hidden"
                    style={{
                      background: i === 0
                        ? "linear-gradient(135deg, var(--sage-700) 0%, var(--sage-500) 100%)"
                        : "linear-gradient(135deg, var(--charcoal) 0%, var(--terra-600) 100%)",
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <span
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          fontSize: "5rem",
                          color: "white",
                          fontStyle: "italic",
                        }}
                      >
                        {post.title.charAt(0)}
                      </span>
                    </div>
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1/3"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <CalendarDays size={13} style={{ color: "var(--muted)" }} />
                      <span className="text-xs" style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
                        {post.date}
                      </span>
                      <span className="text-xs" style={{ color: "var(--stone-400)", fontFamily: "var(--font-inter)" }}>
                        · {post.readTime}
                      </span>
                    </div>

                    <h3
                      className="text-xl mb-3 group-hover:text-sage-600 transition-colors"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        color: "var(--primary-dark)",
                        fontWeight: 500,
                      }}
                    >
                      {post.title}
                    </h3>

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
                      Read more <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
