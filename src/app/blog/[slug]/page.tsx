import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const posts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}> = {
  "post-1-the-past": {
    title: "The Past",
    date: "June 3, 2026",
    readTime: "4 min read",
    category: "Schema Therapy",
    content: `
The past is not behind us — it lives inside us.

It shows up in the way we react when someone raises their voice, even slightly. In the tightening in our chest before a difficult conversation. In the patterns we swore we'd break but keep finding ourselves inside of.

Schema Therapy operates on a simple but profound premise: many of the emotional and behavioural patterns that cause us suffering in adulthood have their roots in unmet needs from childhood. Not necessarily dramatic trauma, though that too. Often it's subtler: a household where feelings were dismissed, a parent who was emotionally unavailable, an environment where love felt conditional.

**Why the past matters now**

When we talk about "healing," we're not trying to change what happened. We can't. What we can change is the meaning we've attached to those experiences — and the automatic, unconscious strategies we developed to cope with them.

These coping strategies made perfect sense at the time. Shutting down emotionally when things got overwhelming protected you. People-pleasing kept you safe. Perfectionism gave you a sense of control. The problem is that these strategies tend to outlive their usefulness. We carry them into adulthood and they run — often invisibly — in the background of every relationship, every conflict, every moment of self-doubt.

**Going beneath the surface**

This is where Schema Therapy begins: not with what you're doing wrong, but with understanding *why* you do it. What is the emotional logic behind the pattern? Where did it come from? What was it protecting you from?

This isn't about blame — of your parents, your environment, or yourself. It's about understanding. Because understanding is what makes change possible.

Once we understand the root, we can work on the present — with CBT tools that help reshape the specific thoughts and reactions that keep the old pattern alive. Schema Therapy without CBT gives you insight without agency. CBT without Schema Therapy gives you tools without roots. Together, they give you both.

**A note on pace**

Going into the past doesn't mean getting lost in it. Therapy here is carefully paced. We go as deep as the work requires — and no further than you're ready for. The goal is always to come back to the present, more equipped to live it.

If you find yourself thinking *"I know what my problem is, I just can't seem to change it"* — that's exactly the space where this work lives.
    `,
  },
  "post-2-we-all-out-here-sacrificing": {
    title: "We All Out Here Sacrificing",
    date: "June 2026",
    readTime: "5 min read",
    category: "Wellbeing",
    content: `
There's a particular kind of exhaustion that comes from giving too much.

Not the exhaustion of working too many hours (though that too). This is the exhaustion of constantly managing other people's emotions. Of making yourself smaller so others can be comfortable. Of saying yes when you mean no, because disappointing someone feels unbearable.

This is the exhaustion of self-sacrifice — and it's extraordinarily common.

**Where it comes from**

Most people who struggle with over-giving didn't choose it consciously. It developed, usually early, as a strategy for keeping the peace. Maybe expressing needs led to conflict. Maybe love in your household felt most available when you were easy, helpful, not a problem. Maybe being needed felt like the safest form of connection.

So you learned to be the helper. The one who holds it together. The one who doesn't cause a fuss.

And it worked — at least for a while.

**The cost**

The cost of chronic self-sacrifice is cumulative and often invisible. You don't notice it until one day you realise that you're resentful. That you don't know what you actually want, because you've spent so long attending to what others want. That your relationships feel one-directional. That you're tired in a way that sleep doesn't fix.

This is burnout — not just the workplace variety, but the relational kind.

**What therapy offers**

Therapy doesn't tell you to stop caring about others. It offers something more nuanced: the capacity to care *and* to have needs. To show up fully in relationship without disappearing from yourself in the process.

This often requires understanding the belief underneath the behaviour. What do you fear would happen if you said no? If you asked for what you needed? If you let someone be disappointed in you and stayed with that discomfort?

For many people, the answer is something like: I would lose them. I would be too much. I am only lovable when I am useful.

These are deeply held beliefs — often formed long before we had the language to question them. And they require more than just willpower to shift.

**The beginning**

Recognising this pattern is the beginning. Not fixing it immediately — just seeing it clearly. Because you can't change something you haven't yet acknowledged.

If any of this sounds familiar, you're not broken. You learned a way to survive. Now it might be time to learn a new one.
    `,
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.content.slice(0, 155).replace(/\n/g, " ").replace(/\*/g, "") + "...",
  };
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

function renderContent(content: string) {
  return content
    .trim()
    .split("\n\n")
    .map((block, i) => {
      if (block.startsWith("**") && block.endsWith("**")) {
        return (
          <h3
            key={i}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.5rem",
              fontWeight: 500,
              color: "var(--primary-dark)",
              marginTop: "2rem",
              marginBottom: "0.75rem",
            }}
          >
            {block.replace(/\*\*/g, "")}
          </h3>
        );
      }
      const hasStrong = block.includes("**");
      if (hasStrong) {
        const parts = block.split(/\*\*(.*?)\*\*/g);
        return (
          <p
            key={i}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "var(--charcoal-light)",
              marginBottom: "1rem",
            }}
          >
            {parts.map((part, j) =>
              j % 2 === 1 ? <strong key={j} style={{ color: "var(--charcoal)" }}>{part}</strong> : part
            )}
          </p>
        );
      }
      return (
        <p
          key={i}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--charcoal-light)",
            marginBottom: "1rem",
          }}
        >
          {block}
        </p>
      );
    });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden pt-40 pb-20"
          style={{ background: "var(--primary-dark)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="container relative z-10 max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider mb-8 transition-colors hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)" }}
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5"
              style={{ background: "rgba(122,171,142,0.2)", color: "var(--sage-300)", fontFamily: "var(--font-inter)" }}
            >
              {post.category}
            </span>
            <h1
              className="mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 300,
                color: "white",
                lineHeight: 1.1,
              }}
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center gap-2">
                <User size={13} style={{ color: "rgba(255,255,255,0.4)" }} />
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)" }}>
                  Trinity Reda
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays size={13} style={{ color: "rgba(255,255,255,0.4)" }} />
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)" }}>
                  {post.date}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={13} style={{ color: "rgba(255,255,255,0.4)" }} />
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)" }}>
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, var(--cream-100))" }}
          />
        </section>

        {/* Article body */}
        <article className="section-sm" style={{ background: "var(--cream-100)" }}>
          <div className="container max-w-2xl mx-auto">
            <div className="prose">{renderContent(post.content)}</div>

            {/* Author box */}
            <div
              className="mt-16 rounded-2xl p-8 flex items-start gap-6"
              style={{ background: "var(--stone-100)", border: "1px solid var(--border)" }}
            >
              <div
                className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{ background: "var(--sage-200)" }}
              >
                <User size={24} style={{ color: "var(--sage-600)" }} />
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--primary-dark)", fontFamily: "var(--font-inter)" }}>
                  Trinity Reda
                </p>
                <p className="text-xs mb-3" style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}>
                  Mgr. Clinical & Counselling Psychology · CBT & Schema Therapy
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--charcoal-light)", fontFamily: "var(--font-inter)" }}>
                  Trinity is a Canadian psychologist based in Prague for over a decade. 
                  She specialises in CBT and Schema Therapy for individuals and couples.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <p className="text-sm mb-4" style={{ color: "var(--charcoal-light)", fontFamily: "var(--font-inter)" }}>
                Ready to do this work?
              </p>
              <a
                href="https://humblewarriorpsychology.simplybook.it"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: "0.85rem" }}
              >
                Book a Session →
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
