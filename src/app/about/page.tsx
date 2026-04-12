import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About OrenGen Worldwide | OrenGen Worldwide — AI-Driven Innovations",
  description:
    "OrenGen Worldwide LLC is a certified minority-owned AI automation company based in Texas. SAM.gov registered. Serving businesses nationwide.",
  alternates: { canonical: "https://orengen.io/about" },
  openGraph: {
    type: "website",
    url: "https://orengen.io/about",
    title: "About OrenGen Worldwide | OrenGen Worldwide — AI-Driven Innovations",
    description:
      "OrenGen Worldwide LLC is a certified minority-owned AI automation company based in Texas. SAM.gov registered. Serving businesses nationwide.",
    images: [{ url: "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/JkgbWmauRB7suRUl6bVem2msNPATeMS2h4iWgdcR.png", width: 1200, height: 630, alt: "About OrenGen Worldwide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About OrenGen Worldwide | OrenGen Worldwide — AI-Driven Innovations",
    description:
      "Founded in 2025 in Mansfield, TX. OrenGen Worldwide builds enterprise-grade AI automation infrastructure for organizations ready to eliminate manual operations.",
    images: ["https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/JkgbWmauRB7suRUl6bVem2msNPATeMS2h4iWgdcR.png"],
  },
};

const differentiators = [
  {
    title: "Open-Source First",
    desc: "We build on proven open-source infrastructure — giving you full transparency, auditability, and zero vendor lock-in.",
  },
  {
    title: "Self-Hosted Infrastructure",
    desc: "Your data stays in your environment. No shared SaaS databases, no third-party data exposure, no platform risk.",
  },
  {
    title: "White-Label Friendly",
    desc: "Every solution we build can be presented under your brand. Perfect for agencies, MSPs, and enterprise deployments.",
  },
  {
    title: "Automation-Native",
    desc: "Our systems are designed to operate without human intervention from day one — not adapted to automation as an afterthought.",
  },
  {
    title: "Enterprise-Grade Security",
    desc: "SOC 2-ready infrastructure, HIPAA-compliant architecture, end-to-end encryption, and government-standard security practices.",
  },
];

const certs = [
  { label: "SAM.gov Registered", detail: "UEI: RX16QFYT6YM5" },
  { label: "CAGE Code", detail: "12XC1" },
  { label: "TX CMBL", detail: "Vendor #550248" },
  { label: "Minority Business Enterprise", detail: "Certified MBE" },
  { label: "BBB Rated", detail: "A− Rating" },
];

export default function AboutPage() {
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
            About OrenGen
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif", fontWeight: 900,
              fontSize: "clamp(42px,8vw,82px)", lineHeight: 1.02,
              letterSpacing: "-0.03em", color: "#F0F4FA", marginBottom: 28,
            }}
          >
            About <span style={{ color: "#CC5500" }}>OrenGen</span>
          </h1>
          <p style={{ fontSize: "clamp(16px,2.2vw,21px)", lineHeight: 1.65, color: "rgba(210,225,245,0.55)", maxWidth: 560, margin: "0 auto", fontWeight: 300 }}>
            We build AI systems that sell, support, and scale — so your team can focus on growth, not operations.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ padding: "0 24px 60px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {[
            { stat: "40+", label: "Years Leadership Experience" },
            { stat: "11", label: "Integrated AI Solutions" },
            { stat: "3-Day", label: "Standard Deployment" },
            { stat: "24/7", label: "Autonomous Operation" },
          ].map(({ stat, label }) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                borderRadius: 20, padding: "32px 20px", textAlign: "center",
                transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
              }}
            >
              <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 42, color: "#CC5500", lineHeight: 1, marginBottom: 8 }}>
                {stat}
              </p>
              <p style={{ fontSize: 13, color: "rgba(210,225,245,0.5)", fontWeight: 400 }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPANY STORY ── */}
      <section style={{ padding: "80px 24px", position: "relative" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "75%", height: 1,
            background: "linear-gradient(to right,transparent,rgba(204,85,0,0.2),transparent)",
          }}
        />
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
              borderRadius: 20, padding: "48px 40px",
            }}
          >
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 16px",
                background: "rgba(204,85,0,0.08)", border: "1px solid rgba(204,85,0,0.18)",
                borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase" as const, color: "#CC5500", marginBottom: 20,
              }}
            >
              Our Story
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif", fontWeight: 900,
                fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.08,
                letterSpacing: "-0.03em", color: "#F0F4FA", marginBottom: 24,
              }}
            >
              Built in Mansfield, TX.<br />Deployed <span style={{ color: "#CC5500" }}>Worldwide</span>.
            </h2>
            <p style={{ color: "rgba(210,225,245,0.55)", lineHeight: 1.75, marginBottom: 16, fontSize: 16, fontWeight: 300 }}>
              Founded in 2025 and headquartered in Mansfield, Texas, OrenGen Worldwide emerged from a simple observation: most businesses were drowning in manual, repetitive operations that AI could handle permanently.
            </p>
            <p style={{ color: "rgba(210,225,245,0.55)", lineHeight: 1.75, marginBottom: 16, fontSize: 16, fontWeight: 300 }}>
              Our leadership team brings over 40 years of combined business leadership experience — spanning technology, finance, operations, and government contracting — unified around a single mission: give every organization access to enterprise-grade AI infrastructure.
            </p>
            <p style={{ color: "rgba(210,225,245,0.55)", lineHeight: 1.75, fontSize: 16, fontWeight: 300 }}>
              Today we serve clients across healthcare, government, real estate, e-commerce, and professional services — building systems that don&apos;t just automate tasks, but transform how organizations operate at their core.
            </p>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {/* Mission */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
              borderRadius: 20, padding: "44px 36px",
              transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
            }}
          >
            <div
              style={{
                width: 44, height: 44, borderRadius: 12,
                background: "rgba(204,85,0,0.1)", display: "flex",
                alignItems: "center", justifyContent: "center", marginBottom: 24,
              }}
            >
              <svg style={{ width: 22, height: 22, color: "#CC5500" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p style={{ color: "#CC5500", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, marginBottom: 12 }}>Our Mission</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 26, color: "#F0F4FA", marginBottom: 16, lineHeight: 1.15 }}>
              Empower Every Business With AI
            </h3>
            <p style={{ color: "rgba(210,225,245,0.55)", lineHeight: 1.75, fontSize: 15, fontWeight: 300 }}>
              To empower businesses of every size with cutting-edge AI infrastructure that eliminates manual operations, accelerates revenue, and enables teams to focus on what matters most — growth.
            </p>
          </div>
          {/* Vision */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
              borderRadius: 20, padding: "44px 36px",
              transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
            }}
          >
            <div
              style={{
                width: 44, height: 44, borderRadius: 12,
                background: "rgba(30,77,140,0.15)", display: "flex",
                alignItems: "center", justifyContent: "center", marginBottom: 24,
              }}
            >
              <svg style={{ width: 22, height: 22, color: "#5b8fd4" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <p style={{ color: "#5b8fd4", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, marginBottom: 12 }}>Our Vision</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 26, color: "#F0F4FA", marginBottom: 16, lineHeight: 1.15 }}>
              The World&apos;s Most Trusted AI Provider
            </h3>
            <p style={{ color: "rgba(210,225,245,0.55)", lineHeight: 1.75, fontSize: 15, fontWeight: 300 }}>
              To become the world&apos;s most trusted provider of AI-driven business innovations — setting the standard for transparency, reliability, and measurable outcomes across every industry we serve.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY ORENGEN ── */}
      <section style={{ padding: "80px 24px", position: "relative" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "75%", height: 1,
            background: "linear-gradient(to right,transparent,rgba(204,85,0,0.15),transparent)",
          }}
        />
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 20px",
                background: "rgba(204,85,0,0.08)", border: "1px solid rgba(204,85,0,0.18)",
                borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase" as const, color: "#CC5500", marginBottom: 24,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#CC5500", boxShadow: "0 0 0 3px rgba(204,85,0,0.3)" }} />
              Why OrenGen
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif", fontWeight: 900,
                fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.08,
                letterSpacing: "-0.03em", color: "#F0F4FA",
              }}
            >
              What Makes Us <span style={{ color: "#CC5500" }}>Different</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {differentiators.map((d, i) => (
              <div
                key={d.title}
                style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                  borderRadius: 20, padding: "28px 24px",
                  transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
                }}
              >
                <div
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "rgba(204,85,0,0.1)", display: "flex",
                    alignItems: "center", justifyContent: "center", marginBottom: 16,
                    fontSize: 13, fontWeight: 700, color: "#CC5500",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 17, color: "#F0F4FA", marginBottom: 10, lineHeight: 1.3 }}>
                  {d.title}
                </h3>
                <p style={{ color: "rgba(210,225,245,0.45)", fontSize: 13.5, lineHeight: 1.65, fontWeight: 300 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 20px",
                background: "rgba(204,85,0,0.08)", border: "1px solid rgba(204,85,0,0.18)",
                borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase" as const, color: "#CC5500", marginBottom: 24,
              }}
            >
              Credentials
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif", fontWeight: 900,
                fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.08,
                letterSpacing: "-0.03em", color: "#F0F4FA", marginBottom: 16,
              }}
            >
              Verified &amp; <span style={{ color: "#CC5500" }}>Certified</span>
            </h2>
            <p style={{ color: "rgba(210,225,245,0.5)", maxWidth: 600, margin: "0 auto", fontSize: 17, lineHeight: 1.7, fontWeight: 300 }}>
              OrenGen is registered, certified, and compliant — ready for government, enterprise, and regulated industry engagements.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            {certs.map((c) => (
              <div
                key={c.label}
                style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                  borderRadius: 16, padding: "20px 28px", textAlign: "center",
                  transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
                }}
              >
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 14, color: "#F0F4FA", marginBottom: 4 }}>
                  {c.label}
                </p>
                <p style={{ color: "rgba(210,225,245,0.4)", fontSize: 12 }}>{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
            Ready to Work <span style={{ color: "#CC5500" }}>With Us</span>?
          </h2>
          <p style={{ color: "rgba(210,225,245,0.5)", fontSize: 17, lineHeight: 1.7, fontWeight: 300, marginBottom: 36 }}>
            Let&apos;s talk about what&apos;s slowing your business down — and build the AI system that fixes it permanently.
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
            Book a Strategy Call
          </a>
        </div>
      </section>
    </div>
  );
}
