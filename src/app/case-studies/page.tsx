import type { Metadata } from "next";

import { OFFICIAL_LOGO_BLUE_URL } from "@/lib/brandAssets";
export const metadata: Metadata = {
  title: "Case Studies | OrenGen Worldwide — AI-Driven Innovations",
  description:
    "Real results from real businesses. See how OrenGen AI automation drives ROI, cuts costs, and transforms operations across industries.",
  alternates: { canonical: "https://orengen.io/case-studies" },
  openGraph: {
    type: "website",
    url: "https://orengen.io/case-studies",
    title: "Case Studies | OrenGen Worldwide — AI-Driven Innovations",
    description:
      "Real results from real businesses. See how OrenGen AI automation drives ROI, cuts costs, and transforms operations across industries.",
    images: [{ url: OFFICIAL_LOGO_BLUE_URL, width: 1200, height: 630, alt: "OrenGen Case Studies" }],
  },
};

const caseStudies = [
  {
    icon: "🏥",
    company: "Apex Health Partners",
    industry: "Healthcare",
    stat: "312% ROI",
    description:
      "Deployed AI voice agents to handle 100% of appointment scheduling and patient follow-ups, eliminating 6 FTEs of manual call volume and recovering $1.2M in missed appointments annually.",
    href: "https://book.orengen.io/coffeechat",
  },
  {
    icon: "🏗️",
    company: "Steelbridge Construction Group",
    industry: "Construction",
    stat: "47hrs → 90sec",
    description:
      "Automated bid proposal generation from 47 hours of manual assembly down to 90-second AI-powered drafts — increasing bid volume by 4x without adding headcount.",
    href: "https://book.orengen.io/coffeechat",
  },
  {
    icon: "🛒",
    company: "Velora Commerce",
    industry: "E-Commerce",
    stat: "+$2.3M Revenue",
    description:
      "Implemented AI-driven customer support and upsell agents across 14 storefronts, driving $2.3M in incremental revenue through automated post-purchase engagement.",
    href: "https://book.orengen.io/coffeechat",
  },
  {
    icon: "⚖️",
    company: "Meridian Legal Advisors",
    industry: "Legal Services",
    stat: "82% Cost Cut",
    description:
      "Replaced legacy document review workflows with AI-powered contract analysis, reducing outside counsel costs by 82% and cutting average review time from 5 days to 4 hours.",
    href: "https://book.orengen.io/coffeechat",
  },
];

export default function CaseStudiesPage() {
  return (
    <div style={{ background: "linear-gradient(165deg,#081628 0%,#0B1D3A 30%,#0F2847 60%,#0D2240 100%)", color: "#F0F4FA", minHeight: "100vh" }}>
      {/* ── HERO ── */}
      <section style={{ position: "relative", overflow: "hidden", paddingTop: 140, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
        {/* Dot grid */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
            backgroundImage: "linear-gradient(rgba(204,85,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(204,85,0,0.03) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 45%,black 0%,transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 45%,black 0%,transparent 100%)",
          }}
        />
        {/* Orb accents */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: "-25%", right: "-12%", width: 700, height: 700, borderRadius: "50%",
            background: "radial-gradient(circle,rgba(30,77,140,0.35) 0%,transparent 70%)", filter: "blur(120px)", pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute", bottom: "-18%", left: "-10%", width: 500, height: 500, borderRadius: "50%",
            background: "radial-gradient(circle,rgba(204,85,0,0.15) 0%,transparent 70%)", filter: "blur(120px)", pointerEvents: "none",
          }}
        />
        {/* Top rule */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 1, zIndex: 1, pointerEvents: "none",
            background: "linear-gradient(90deg,transparent 5%,rgba(204,85,0,0.25) 30%,rgba(204,85,0,0.4) 50%,rgba(204,85,0,0.25) 70%,transparent 95%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 20px",
              background: "rgba(204,85,0,0.08)", border: "1px solid rgba(204,85,0,0.18)",
              borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase" as const, color: "#CC5500", marginBottom: 32,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#CC5500", boxShadow: "0 0 0 3px rgba(204,85,0,0.3)" }} />
            Case Studies
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif", fontWeight: 900,
              fontSize: "clamp(42px,8vw,82px)", lineHeight: 1.02,
              letterSpacing: "-0.03em", color: "#F0F4FA", marginBottom: 28,
            }}
          >
            Results That Speak{" "}
            <span style={{ color: "#CC5500" }}>for Themselves</span>
          </h1>
          <p style={{ fontSize: "clamp(16px,2.2vw,21px)", lineHeight: 1.65, color: "rgba(210,225,245,0.55)", maxWidth: 580, margin: "0 auto", fontWeight: 300 }}>
            Proven outcomes across healthcare, construction, e-commerce, and legal — powered by OrenGen AI infrastructure.
          </p>
        </div>
      </section>

      {/* ── CASE STUDY CARDS ── */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {caseStudies.map((cs) => (
            <div
              key={cs.company}
              style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                borderRadius: 20, padding: "36px 32px",
                transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
                position: "relative", overflow: "hidden",
              }}
            >
              {/* Glow on top */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3, borderRadius: "20px 20px 0 0",
                  background: "linear-gradient(90deg, #CC5500, #E8762B)",
                }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <div
                  style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: "rgba(204,85,0,0.1)", display: "flex",
                    alignItems: "center", justifyContent: "center", fontSize: 24,
                  }}
                >
                  {cs.icon}
                </div>
                <div>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 18, color: "#F0F4FA", lineHeight: 1.2 }}>
                    {cs.company}
                  </p>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(210,225,245,0.4)", marginTop: 2 }}>
                    {cs.industry}
                  </p>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif", fontWeight: 900,
                  fontSize: 36, color: "#CC5500", lineHeight: 1, marginBottom: 16,
                }}
              >
                {cs.stat}
              </p>
              <p style={{ fontFamily: "'Roboto', sans-serif", color: "rgba(210,225,245,0.5)", fontSize: 14, lineHeight: 1.7, fontWeight: 300, marginBottom: 24 }}>
                {cs.description}
              </p>
              <a
                href={cs.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 13, fontWeight: 700, color: "#CC5500",
                  textDecoration: "none", letterSpacing: "0.02em",
                  transition: "color 0.2s",
                }}
              >
                Get Results Like This <span style={{ fontSize: 16 }}>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ padding: "100px 24px 120px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse at 50% 100%, rgba(204,85,0,0.12) 0%, transparent 60%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 640, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif", fontWeight: 900,
              fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.08,
              letterSpacing: "-0.03em", color: "#F0F4FA", marginBottom: 16,
            }}
          >
            See How AI Can Transform{" "}
            <span style={{ color: "#CC5500" }}>Your Business</span>
          </h2>
          <p style={{ color: "rgba(210,225,245,0.5)", fontSize: 17, lineHeight: 1.7, fontWeight: 300, marginBottom: 36 }}>
            Every business has operations that AI can handle permanently. Let&apos;s find yours.
          </p>
          <a
            href="https://book.orengen.io/coffeechat"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", padding: "16px 40px",
              background: "linear-gradient(135deg, #CC5500, #E8762B)", color: "#fff",
              fontWeight: 700, fontSize: 15, borderRadius: 12, textDecoration: "none",
              boxShadow: "0 4px 24px rgba(204,85,0,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            Talk to Our AI Agent
          </a>
        </div>
      </section>
    </div>
  );
}
