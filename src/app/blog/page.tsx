import type { Metadata } from "next"
import Link from "next/link"
import { posts } from "./[slug]/page"

export const metadata: Metadata = {
  title: "OrenGen Insights | AI Automation, Fractional Leadership & Business Strategy",
  description:
    "Executive-level analysis on fractional C-suite leadership, AI automation, government contracting, email deliverability, and CRM strategy from OrenGen Worldwide.",
  alternates: { canonical: "https://orengen.io/blog" },
  openGraph: {
    type: "website",
    url: "https://orengen.io/blog",
    title: "OrenGen Insights | AI Automation, Fractional Leadership & Business Strategy",
    description: "Executive-level analysis on fractional C-suite leadership, AI automation, government contracting, email deliverability, and CRM strategy.",
    images: [{ url: "https://blog.orengen.io/wp-content/uploads/2026/03/OrenGen-Logo-Banner-BO-and-Blk-TP.png", width: 1200, height: 630, alt: "OrenGen Insights" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OrenGen Insights | AI Automation, Fractional Leadership & Business Strategy",
    description: "Executive-level analysis on fractional C-suite leadership, AI automation, government contracting, and email deliverability.",
    images: ["https://blog.orengen.io/wp-content/uploads/2026/03/OrenGen-Logo-Banner-BO-and-Blk-TP.png"],
    creator: "@orengenio",
  },
}

const STYLES = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .blog-card {
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
    animation: fadeUp 0.6s ease both;
  }
  .blog-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0,0,0,0.10);
  }
  .featured-card {
    transition: transform 0.22s ease, box-shadow 0.22s ease;
  }
  .featured-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 60px rgba(204,85,0,0.12);
  }
`

// Category configuration — order is display order
const CATEGORY_CONFIG: Array<{
  name: string
  accent: string
  icon: string
}> = [
  { name: "Fractional Leadership", accent: "#CC5500", icon: "👔" },
  { name: "AI Automation",         accent: "#3b6caa", icon: "🤖" },
  { name: "CRM & Sales",           accent: "#CC5500", icon: "📈" },
  { name: "Email & Deliverability", accent: "#0e7490", icon: "📨" },
  { name: "Web & Design",          accent: "#5b4fcf", icon: "🌐" },
  { name: "Government Contracting", accent: "#374151", icon: "🏛️" },
  { name: "Business Strategy",     accent: "#16a34a", icon: "♟️" },
]
};

export default function BlogPage() {
  // Featured = most recent Fractional Leadership article, or first post overall
  const featured =
    posts.find((p) => p.category === "Fractional Leadership") ?? posts[0]

  // Build category sections, each with filtered posts (exclude the featured post)
  const categorySections = CATEGORY_CONFIG.map((cat) => ({
    ...cat,
    articles: posts.filter(
      (p) => p.category === cat.name && p.slug !== featured.slug
    ),
  })).filter((s) => s.articles.length > 0)

  const featuredAccent = "#CC5500"

  return (
    <main style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", background: "#fff" }}>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(160deg, #050505 0%, #0d0808 60%, #1a0a00 100%)",
        padding: "clamp(120px,16vw,180px) 24px clamp(60px,8vw,100px)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Ambient glow */}
        <div aria-hidden style={{
          position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)",
          width: 900, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(204,85,0,0.18) 0%, transparent 70%)",
          filter: "blur(80px)", pointerEvents: "none",
        }} />
        {/* Dot grid */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(204,85,0,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px", opacity: 0.5, pointerEvents: "none",
        }} />

        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(204,85,0,0.12)", border: "1px solid rgba(204,85,0,0.3)",
            borderRadius: 9999, padding: "7px 18px", marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#CC5500", boxShadow: "0 0 0 3px rgba(204,85,0,0.3)" }} aria-hidden />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.32em", textTransform: "uppercase", color: "#CC5500" }}>
              OrenGen Insights
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-league-spartan), sans-serif",
            fontSize: "clamp(42px,7vw,80px)", fontWeight: 800,
            letterSpacing: "-0.025em", lineHeight: 0.92,
            color: "#fff", marginBottom: 24,
          }}>
            Executive Intelligence.
            <br />
            <span style={{
              background: "linear-gradient(135deg, #CC5500 0%, #FF7A00 50%, #FF9A3C 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Built to Scale.
            </span>
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.6)", fontSize: "clamp(16px,2vw,20px)",
            maxWidth: 600, margin: "0 auto 48px", lineHeight: 1.65,
          }}>
            Strategy, analysis, and operational frameworks from the OrenGen team.
            Fractional leadership, AI automation, government contracting, and beyond.
          </p>

          {/* Category pills */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 }}>
            {CATEGORY_CONFIG.map((cat) => (
              <span key={cat.name} style={{
                border: `1px solid rgba(255,255,255,0.12)`,
                background: "rgba(255,255,255,0.04)",
                borderRadius: 9999, padding: "7px 16px",
                fontSize: 12, fontWeight: 600,
                color: "rgba(255,255,255,0.55)",
                cursor: "default",
                display: "inline-flex", alignItems: "center", gap: 6,
              }}>
                <span style={{ fontSize: 13 }}>{cat.icon}</span>
                {cat.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ── */}
      <section style={{ background: "#F9F6F1", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{
              background: "#CC5500", color: "#fff",
              fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase",
              borderRadius: 9999, padding: "5px 14px",
            }}>
              Featured
            </span>
            <span style={{ color: "#9b8070", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Editor&apos;s Pick
            </span>
          </div>

          <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none" }}>
            <div className="featured-card" style={{
              background: "#fff",
              border: "1.5px solid rgba(204,85,0,0.15)",
              borderTop: `4px solid ${featuredAccent}`,
              borderRadius: 24, padding: "clamp(32px,5vw,56px)",
              display: "grid", gridTemplateColumns: "1fr auto",
              gap: 40, alignItems: "center",
              cursor: "pointer",
            }}>
              <div>
                <span style={{
                  display: "inline-block",
                  background: "rgba(204,85,0,0.08)", border: "1px solid rgba(204,85,0,0.2)",
                  borderRadius: 9999, padding: "5px 14px", marginBottom: 20,
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#CC5500",
                }}>
                  {featured.category}
                </span>
                <h2 style={{
                  fontFamily: "var(--font-league-spartan), sans-serif",
                  fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800,
                  letterSpacing: "-0.02em", color: "#0f0a05",
                  lineHeight: 1.15, marginBottom: 18, maxWidth: 720,
                }}>
                  {featured.title}
                </h2>
                <p style={{ color: "#7a6858", fontSize: 17, lineHeight: 1.7, marginBottom: 28, maxWidth: 660 }}>
                  {featured.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "#CC5500", color: "#fff",
                    fontWeight: 700, fontSize: 14, padding: "12px 28px", borderRadius: 9999,
                    boxShadow: "0 4px 20px rgba(204,85,0,0.3)",
                  }}>
                    Read Article →
                  </span>
                  <span style={{ color: "#9b8070", fontSize: 13 }}>
                    {featured.author} · {featured.date} · {featured.readTime} read
                  </span>
                </div>
              </div>
              <div aria-hidden style={{
                width: 120, height: 120, borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(204,85,0,0.12) 0%, rgba(204,85,0,0.04) 100%)",
                border: "2px solid rgba(204,85,0,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, fontSize: 48,
              }}>
                ⚡
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── CATEGORY SECTIONS ── */}
      {categorySections.map((section, sIdx) => (
        <section
          key={section.name}
          style={{
            background: sIdx % 2 === 0 ? "#fff" : "#FAFAFA",
            padding: "72px 24px",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {/* Section header */}
            <div style={{
              display: "flex", alignItems: "flex-end", justifyContent: "space-between",
              flexWrap: "wrap", gap: 12,
              marginBottom: 40,
              paddingBottom: 20,
              borderBottom: `2px solid ${section.accent}18`,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${section.accent}10`,
                  border: `1.5px solid ${section.accent}25`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, flexShrink: 0,
                }}>
                  {section.icon}
                </div>
                <div>
                  <h2 style={{
                    fontFamily: "var(--font-league-spartan), sans-serif",
                    fontSize: "clamp(22px,3vw,32px)", fontWeight: 800,
                    letterSpacing: "-0.02em", color: "#0f0a05",
                    lineHeight: 1.1,
                  }}>
                    {section.name}
                  </h2>
                  <p style={{ color: "#9b8070", fontSize: 13, marginTop: 2 }}>
                    {section.articles.length} article{section.articles.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
              <div style={{
                height: 3, flex: 1, minWidth: 40, maxWidth: 200,
                background: `linear-gradient(90deg, ${section.accent}, transparent)`,
                borderRadius: 9999, marginBottom: 4,
              }} />
            </div>

            {/* Article cards */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}>
              {section.articles.map((article, aIdx) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <article className="blog-card" style={{
                    background: "#fff",
                    border: "1.5px solid rgba(0,0,0,0.07)",
                    borderTop: `4px solid ${section.accent}`,
                    borderRadius: 20, padding: "28px 24px",
                    display: "flex", flexDirection: "column",
                    animationDelay: `${aIdx * 0.07}s`,
                    height: "100%",
                    cursor: "pointer",
                  }}>
                    {/* Category badge */}
                    <span style={{
                      display: "inline-block",
                      background: `${section.accent}10`, border: `1px solid ${section.accent}22`,
                      borderRadius: 9999, padding: "4px 12px", marginBottom: 14,
                      fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
                      color: section.accent, width: "fit-content",
                    }}>
                      {article.category}
                    </span>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: "var(--font-league-spartan), sans-serif",
                      fontSize: 19, fontWeight: 700, color: "#0f0a05",
                      lineHeight: 1.25, marginBottom: 10, flex: 0,
                    }}>
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p style={{
                      color: "#7a6858", fontSize: 14, lineHeight: 1.65,
                      flex: 1, marginBottom: 20,
                    }}>
                      {article.excerpt}
                    </p>

                    {/* Footer */}
                    <div style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      paddingTop: 14, borderTop: `1px solid ${section.accent}12`,
                      flexWrap: "wrap", gap: 8,
                    }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <span style={{ color: "#7a6858", fontSize: 12, fontWeight: 600 }}>
                          {article.author}
                        </span>
                        <span style={{ color: "#9b8070", fontSize: 11 }}>
                          {article.date} · {article.readTime} read
                        </span>
                      </div>
                      <span style={{
                        color: section.accent, fontWeight: 700, fontSize: 13,
                        display: "flex", alignItems: "center", gap: 4,
                      }}>
                        Read →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── POST COUNT SUMMARY ── */}
      <section style={{ background: "#F9F6F1", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#9b8070", fontSize: 14 }}>
            <strong style={{ color: "#0f0a05" }}>{posts.length} articles</strong> across{" "}
            <strong style={{ color: "#0f0a05" }}>{CATEGORY_CONFIG.length} categories</strong>.
            New articles published weekly.
          </p>
        </div>
      </section>

      {/* ── NEWSLETTER SIGNUP ── */}
      <section style={{ background: "#050505", padding: "80px 24px" }}>
        <div style={{
          maxWidth: 720, margin: "0 auto",
          background: "linear-gradient(135deg, rgba(204,85,0,0.2) 0%, rgba(5,5,5,0.6) 60%)",
          border: "1px solid rgba(204,85,0,0.3)",
          borderRadius: 28, padding: "clamp(40px,7vw,72px) clamp(24px,5vw,56px)",
          textAlign: "center",
        }}>
          <span style={{
            display: "inline-block",
            border: "1px solid rgba(204,85,0,0.4)", background: "rgba(204,85,0,0.1)",
            color: "#CC5500", fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase",
            borderRadius: 9999, padding: "6px 16px", marginBottom: 24,
          }}>
            Stay Sharp
          </span>
          <h2 style={{
            fontFamily: "var(--font-league-spartan), sans-serif",
            fontSize: "clamp(28px,4.5vw,48px)", fontWeight: 800,
            letterSpacing: "-0.02em", color: "#fff",
            marginBottom: 16, lineHeight: 1.1,
          }}>
            The executive edge,
            <br />
            <span style={{ color: "#CC5500" }}>delivered weekly.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.65 }}>
            Fractional leadership strategy, AI automation frameworks, and government contracting intelligence — from the OrenGen team to your inbox.
          </p>
          <div style={{ display: "flex", gap: 10, maxWidth: 440, margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
            <input
              type="email"
              placeholder="your@company.com"
              style={{
                flex: 1, minWidth: 200,
                background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 12, padding: "13px 18px",
                color: "#fff", fontSize: 14, outline: "none",
              }}
              aria-label="Email address"
            />
            <button type="button" style={{
              background: "#CC5500", color: "#fff",
              fontWeight: 700, fontSize: 14, padding: "13px 24px",
              borderRadius: 12, border: "none", cursor: "pointer",
              whiteSpace: "nowrap",
            }}>
              Subscribe →
            </button>
          </div>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, marginTop: 14 }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </main>
  )
}
