import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Affiliate Program — OrenGen Worldwide",
  description: "Join the OrenGen Worldwide Affiliate Program and earn commissions by referring businesses to our AI automation platform.",
  alternates: { canonical: "https://orengen.io/affiliate-program" },
}

export default function AffiliateProgramPage() {
  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      {/* ── HERO ── */}
      <section
        style={{
          padding: "140px 20px 80px",
          textAlign: "center",
          background: "linear-gradient(165deg, #081628 0%, #0B1D3A 30%, #0F2847 60%, #0D2240 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(204,85,0,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            background: "linear-gradient(to bottom, transparent, #FFFFFF)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 20px",
              background: "rgba(204,85,0,0.08)",
              border: "1px solid rgba(204,85,0,0.18)",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase" as const,
              color: "#CC5500",
              marginBottom: 32,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#CC5500", boxShadow: "0 0 0 3px rgba(204,85,0,0.3)" }} />
            Partnerships
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 6vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#F0F4FA",
              marginBottom: 24,
            }}
          >
            Join Our <span style={{ color: "#CC5500" }}>Affiliate Program</span>
          </h1>
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "clamp(15px, 2vw, 19px)",
              lineHeight: 1.65,
              color: "rgba(210,225,245,0.6)",
              maxWidth: 560,
              margin: "0 auto",
              fontWeight: 300,
            }}
          >
            Earn commissions by referring businesses to the OrenGen AI platform. Details coming soon.
          </p>
        </div>
      </section>

      {/* ── PLACEHOLDER CONTENT ── */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px 100px" }}>
        <div
          style={{
            background: "#FFF7ED",
            border: "2px solid #CC5500",
            borderRadius: 12,
            padding: "40px 48px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: 28,
              color: "#0B1D3A",
              marginBottom: 16,
            }}
          >
            Coming Soon
          </h2>
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 16,
              lineHeight: 1.75,
              color: "#374151",
              maxWidth: 560,
              margin: "0 auto 24px",
            }}
          >
            Our Affiliate Program details are being finalized. Check back soon to learn how you can earn by referring clients to OrenGen Worldwide.
          </p>
          <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 14, color: "#6B7280" }}>
            In the meantime, reach out to us at{" "}
            <a href="mailto:hello@orengen.io" style={{ color: "#CC5500", textDecoration: "none", fontWeight: 600 }}>
              hello@orengen.io
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
