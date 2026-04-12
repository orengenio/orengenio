import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sales Partner Program — OrenGen Worldwide",
  description: "Resell OrenGen AI automation under your brand. White-label options, margin-based pricing, dedicated partner support.",
  alternates: { canonical: "https://orengen.io/sales-partner-program" },
}

const tiers = [
  {
    name: "Referral Partner",
    margin: "15–20%",
    desc: "Send us leads. We close them, deliver the work, and you earn a commission on every contract.",
    features: ["Referral dashboard", "Co-branded materials", "Partner support line", "Monthly payouts"],
  },
  {
    name: "Reseller Partner",
    margin: "25–35%",
    desc: "White-label our services under your brand. You own the client relationship, we power the delivery.",
    features: ["White-label delivery", "Your branding on all deliverables", "Dedicated account manager", "Volume pricing tiers", "Priority support SLA"],
    featured: true,
  },
  {
    name: "Strategic Partner",
    margin: "Custom",
    desc: "Deep integration for agencies, consultancies, and platforms looking to embed OrenGen AI into their core offering.",
    features: ["API & platform access", "Custom pricing model", "Co-sell agreements", "Joint go-to-market", "Executive alignment"],
  },
]

const reasons = [
  { title: "Proven Platform", desc: "OrenGen runs across healthcare, legal, construction, and e-commerce. Your clients get results, not experiments." },
  { title: "You Keep the Relationship", desc: "As a Reseller, you remain the primary contact. We operate as your invisible delivery partner." },
  { title: "Fast Onboarding", desc: "Most partners are up and running within 5 business days. We handle the technical complexity." },
  { title: "Support That Shows Up", desc: "Dedicated partner success manager, Slack channel, and priority escalation — not a ticketing queue." },
]

export default function SalesPartnerProgramPage() {
  return (
    <div style={{ background: "#0B1D3A", minHeight: "100vh", color: "#F0F4FA" }}>
      {/* ── HERO ── */}
      <section
        style={{
          padding: "140px 20px 100px",
          textAlign: "center",
          background: "linear-gradient(165deg, #081628 0%, #0B1D3A 40%, #0F2847 70%, #0D2240 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(204,85,0,0.08) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.5, pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-20%", left: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(204,85,0,0.12) 0%,transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 820, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 20px", background: "rgba(204,85,0,0.08)", border: "1px solid rgba(204,85,0,0.18)", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#CC5500", marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#CC5500", boxShadow: "0 0 0 3px rgba(204,85,0,0.3)" }} />
            Sales Partner Program
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(40px, 7vw, 76px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#F0F4FA", marginBottom: 28 }}>
            Sell AI. <span style={{ color: "#CC5500" }}>Keep the Margin.</span>
          </h1>
          <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.65, color: "rgba(210,225,245,0.6)", maxWidth: 600, margin: "0 auto 44px", fontWeight: 300 }}>
            Resell OrenGen&apos;s AI automation platform under your own brand. Earn 15–35% margins while we handle all delivery, support, and infrastructure.
          </p>
          <a
            href="mailto:partners@orengen.io?subject=Sales Partner Program Inquiry"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px", background: "#CC5500", color: "#fff", fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.04em", textTransform: "uppercase", textDecoration: "none", borderRadius: 999 }}
          >
            Become a Partner →
          </a>
        </div>
      </section>

      {/* ── PARTNER TIERS ── */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.03em", color: "#F0F4FA", textAlign: "center", marginBottom: 56 }}>
          Partner <span style={{ color: "#CC5500" }}>Tiers</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {tiers.map((t) => (
            <div
              key={t.name}
              style={{
                background: t.featured ? "rgba(204,85,0,0.06)" : "rgba(255,255,255,0.03)",
                border: t.featured ? "1px solid rgba(204,85,0,0.4)" : "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20, padding: "36px 32px", position: "relative", overflow: "hidden",
              }}
            >
              {t.featured && (
                <div style={{ position: "absolute", top: 16, right: 16, padding: "4px 12px", background: "#CC5500", borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff" }}>
                  Most Popular
                </div>
              )}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#CC5500,#E8762B)", borderRadius: "20px 20px 0 0" }} />
              <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(210,225,245,0.4)", marginBottom: 8 }}>{t.name}</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 44, color: "#CC5500", lineHeight: 1, marginBottom: 16 }}>{t.margin}</p>
              <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(210,225,245,0.55)", fontWeight: 300, marginBottom: 24 }}>{t.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {t.features.map((f) => (
                  <li key={f} style={{ fontFamily: "'Roboto', sans-serif", fontSize: 13, color: "rgba(210,225,245,0.7)", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#CC5500", fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px 100px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(32px, 5vw, 48px)", letterSpacing: "-0.03em", color: "#F0F4FA", textAlign: "center", marginBottom: 48 }}>
          Why Partners Choose <span style={{ color: "#CC5500" }}>OrenGen</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, marginBottom: 64 }}>
          {reasons.map((r) => (
            <div key={r.title} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, padding: "28px 24px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 18, color: "#F0F4FA", marginBottom: 10 }}>{r.title}</h3>
              <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(210,225,245,0.5)", fontWeight: 300 }}>{r.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <a
            href="mailto:partners@orengen.io?subject=Sales Partner Program Inquiry"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 40px", background: "#CC5500", color: "#fff", fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.04em", textTransform: "uppercase", textDecoration: "none", borderRadius: 999 }}
          >
            Let&apos;s Talk Partnership →
          </a>
          <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 13, color: "rgba(210,225,245,0.3)", marginTop: 16 }}>
            Email <a href="mailto:partners@orengen.io" style={{ color: "#CC5500", textDecoration: "none" }}>partners@orengen.io</a> with your questions
          </p>
        </div>
      </section>
    </div>
  )
}
