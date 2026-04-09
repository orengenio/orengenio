import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { posts, type BlogPost } from "@/data/blog-posts";


const categoryColors: Record<string, string> = {
  "Fractional Leadership": "#CC5500",
  "AI Automation": "#3b6caa",
  "CRM & Sales": "#CC5500",
  "Email & Deliverability": "#0e7490",
  "Government Contracting": "#374151",
  "Web & Design": "#5b4fcf",
  "Business Strategy": "#16a34a",
  "AI Strategy": "#CC5500",
  "Operations": "#5b8fd4",
  "Government": "#a855f7",
  "Customer Experience": "#22c55e",
  "Technology": "#f59e0b",
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | OrenGen Insights`,
    description: post.excerpt,
    alternates: { canonical: `https://orengen.io/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `https://orengen.io/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      images: [{ url: "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/JkgbWmauRB7suRUl6bVem2msNPATeMS2h4iWgdcR.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/JkgbWmauRB7suRUl6bVem2msNPATeMS2h4iWgdcR.png"],
    },
  };
}

// ── Safe inline content parser — no dangerouslySetInnerHTML ──────────────────

type Segment = { type: "link"; text: string; href: string } | { type: "text"; value: string };

function parseInlineSegments(raw: string): Segment[] {
  const segments: Segment[] = [];
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const matches = [...raw.matchAll(linkPattern)];

  if (matches.length === 0) {
    return [{ type: "text", value: raw }];
  }

  let cursor = 0;
  for (const m of matches) {
    const start = m.index ?? 0;
    if (start > cursor) {
      segments.push({ type: "text", value: raw.slice(cursor, start) });
    }
    segments.push({ type: "link", text: m[1], href: m[2] });
    cursor = start + m[0].length;
  }
  if (cursor < raw.length) {
    segments.push({ type: "text", value: raw.slice(cursor) });
  }
  return segments;
}

function InlineContent({ text }: { text: string }) {
  const segments = parseInlineSegments(text);
  return (
    <>
      {segments.map((seg, i) =>
        seg.type === "link" ? (
          <Link
            key={i}
            href={seg.href}
            className="text-[#CC5500] hover:text-[#e06010] underline underline-offset-2 transition-colors duration-150"
          >
            {seg.text}
          </Link>
        ) : (
          <span key={i}>{seg.value}</span>
        )
      )}
    </>
  );
}

function renderContent(content: string): React.ReactNode[] {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-2xl sm:text-3xl font-extrabold text-white mt-12 mb-4 leading-tight"
          style={{ fontFamily: "var(--font-league-spartan), sans-serif" }}
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      const labelText = line.slice(2, -2);
      const dashIdx = labelText.indexOf(" — ");
      const label = dashIdx !== -1 ? labelText.slice(0, dashIdx) : labelText;
      const rest = dashIdx !== -1 ? labelText.slice(dashIdx) : "";
      elements.push(
        <p key={i} className="text-white/70 leading-relaxed my-4">
          <strong className="text-white font-semibold">{label}</strong>
          {rest && <InlineContent text={rest} />}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        listItems.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={`list-${i}`} className="list-none space-y-2 my-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-white/70 leading-relaxed">
              <span className="text-[#CC5500] mt-1 flex-shrink-0">▸</span>
              <span>
                <InlineContent text={item} />
              </span>
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.length > 0) {
      elements.push(
        <p key={i} className="text-white/70 leading-relaxed my-4">
          <InlineContent text={line} />
        </p>
      );
    }

    i++;
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3)
    .concat(posts.filter((p) => p.slug !== slug && p.category !== post.category).slice(0, 3 - Math.min(3, posts.filter((p) => p.slug !== slug && p.category === post.category).length)))
    .slice(0, 3);

  const accentColor = categoryColors[post.category] ?? "#CC5500";

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-16 px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
            filter: "blur(100px)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-8 transition-colors duration-150"
          >
            ← Back to Insights
          </Link>
          <div className="mb-4">
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ color: accentColor, background: `${accentColor}20` }}
            >
              {post.category}
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-league-spartan), sans-serif" }}
          >
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/40 text-sm">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} read</span>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="px-6">
        <div className="mx-auto max-w-3xl">
          <div className="h-px bg-white/10" />
        </div>
      </div>

      {/* ── ARTICLE ── */}
      <article className="py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-xl text-white/75 leading-relaxed mb-10 pb-10 border-b border-white/10 font-medium">
            {post.excerpt}
          </p>

          <div>{renderContent(post.content)}</div>

          {/* Social share */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Share this article</p>
            <div className="flex items-center gap-3">
              <button
                className="text-xs font-semibold px-4 py-2 rounded-lg border border-white/10 text-white/50 hover:text-white hover:border-white/25 transition-all duration-200"
                aria-label="Share on X"
              >
                𝕏 Share
              </button>
              <button
                className="text-xs font-semibold px-4 py-2 rounded-lg border border-white/10 text-white/50 hover:text-white hover:border-white/25 transition-all duration-200"
                aria-label="Share on LinkedIn"
              >
                in LinkedIn
              </button>
              <button
                className="text-xs font-semibold px-4 py-2 rounded-lg border border-white/10 text-white/50 hover:text-white hover:border-white/25 transition-all duration-200"
                aria-label="Copy link"
              >
                ⧉ Copy Link
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* ── CTA ── */}
      <section className="py-20 px-6 relative overflow-hidden" style={{ background: "#0a0a0a" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{ background: `radial-gradient(ellipse at 50% 100%, ${accentColor} 0%, transparent 60%)` }}
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-league-spartan), sans-serif" }}
          >
            Ready to Automate Your Operations?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Book a 30-minute strategy call and we&apos;ll show you exactly what AI automation looks like for your business.
          </p>
          <a
            href="https://calendly.com/orengenio/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#CC5500] hover:bg-[#b34a00] text-white font-semibold px-10 py-4 rounded-xl text-base transition-colors duration-200"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>

      {/* ── RELATED POSTS ── */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h3
            className="text-2xl font-extrabold text-white mb-8"
            style={{ fontFamily: "var(--font-league-spartan), sans-serif" }}
          >
            More from OrenGen Insights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((related) => {
              const relColor = categoryColors[related.category] ?? "#CC5500";
              return (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="group block">
                  <article
                    className="h-full overflow-hidden rounded-2xl border border-white/10 hover:border-[#CC5500]/30 transition-all duration-300 flex flex-col"
                    style={{ background: "rgba(10,10,10,0.8)", backdropFilter: "blur(12px)" }}
                  >
                    <div
                      className="h-28 w-full relative flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${relColor}25 0%, ${relColor}08 100%)` }}
                    >
                      <div className="absolute top-3 left-3">
                        <span
                          className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                          style={{ color: relColor, background: `${relColor}20` }}
                        >
                          {related.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-white/35 text-xs mb-2">{related.readTime} read</p>
                      <h4
                        className="text-sm font-bold text-white group-hover:text-[#CC5500] transition-colors duration-200 leading-snug flex-1 mb-3"
                        style={{ fontFamily: "var(--font-league-spartan), sans-serif" }}
                      >
                        {related.title}
                      </h4>
                      <span className="text-[#CC5500] text-xs font-semibold">Read More →</span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
