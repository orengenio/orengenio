import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Affiliate Program — OrenGen Worldwide",
  description: "Earn recurring commissions by referring businesses to OrenGen AI. Up to 20% revenue share, 90-day cookie, real-time dashboard.",
  alternates: { canonical: "https://orengen.io/affiliate-program" },
}

const perks = [
  { stat: "Up to 20%", label: "Revenue Share", desc: "Earn up to 20% recurring commission on every client you refer — for the life of their account." },
  { stat: "90-Day", label: "Cookie Window", desc: "Your referral link stays active for 90 days. If they sign up anytime within that window, you get credit." },
  { stat: "$0", label: "Cost to Join", desc: "No fees, no minimums. Apply, get approved, start earning. It's that simple." },
  { stat: "Monthly", label: "Payouts", desc: "Commissions paid out monthly via direct deposit, PayPal, or wire transfer. Minimum $50 threshold." },
]

const steps = [
  { num: "01", title: "Apply", desc: "Fill out a short application. We review within 2 business days." },
  { num: "02", title: "Get Your Link", desc: "You'll receive a unique referral link and access to your affiliate dashboard." },
  { num: "03", title: "Share & Earn", desc: "Share your link with your network, clients, or audience. Every qualified signup earns you commissions." },
  { num: "04", title: "Get Paid", desc: "Watch your dashboard. Commissions accumulate monthly and hit your account automatically." },
]

const idealFor = [
  "Marketing consultants & agencies",
  "Business coaches & advisors",
  "SaaS founders & entrepreneurs",
  "Content creators in the B2B space",
  "IT consultants & managed service providers",
  "Anyone with a business audience",
]

export default function AffiliateProgramPage() {
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
        <div aria-hidden="true" style={{ position: "absolute", top: "-20%", right: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(204,85,0,0.12) 0%,transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 820, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 20px", background: "rgba(204,85,0,0.08)", border: "1px solid rgba(204,85,0,0.18)", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#CC5500", marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#CC5500", boxShadow: "0 0 0 3px rgba(204,85,0,0.3)" }} />
            Affiliate Program
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(40px, 7vw, 76px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#F0F4FA", marginBottom: 28 }}>
            Get Paid to Grow <span style={{ color: "#CC5500" }}>the Future</span>
          </h1>
          <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.65, color: "rgba(210,225,245,0.6)", maxWidth: 580, margin: "0 auto 44px", fontWeight: 300 }}>
            Refer businesses to OrenGen and earn up to 20% recurring revenue share — on every client, every month, for as long as they stay.
          </p>
          <a
            href="mailto:partners@orengen.io?subject=Affiliate Program Application"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px", background: "#CC5500", color: "#fff", fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.04em", textTransform: "uppercase", textDecoration: "none", borderRadius: 999, transition: "background 0.2s" }}
          >
            Apply to Join →
          </a>
        </div>
      </section>

      {/* ── PERKS GRID ── */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          {perks.map((p) => (
            <div key={p.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "32px 28px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#CC5500,#E8762B)", borderRadius: "20px 20px 0 0" }} />
              <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 40, color: "#CC5500", lineHeight: 1, marginBottom: 6 }}>{p.stat}</p>
              <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(210,225,245,0.45)", marginBottom: 14 }}>{p.label}</p>
              <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(210,225,245,0.55)", fontWeight: 300 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.03em", color: "#F0F4FA", textAlign: "center", marginBottom: 56 }}>
          How It <span style={{ color: "#CC5500" }}>Works</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }}>
          {steps.map((s) => (
            <div key={s.num} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 56, color: "rgba(204,85,0,0.15)", lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 20, color: "#F0F4FA", marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(210,225,245,0.5)", fontWeight: 300, maxWidth: 200, margin: "0 auto" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── IDEAL FOR ── */}
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px 100px" }}>
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 24, padding: "56px 48px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 42px)", color: "#F0F4FA", marginBottom: 12 }}>Who Should Apply?</h2>
          <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 16, color: "rgba(210,225,245,0.5)", marginBottom: 36, fontWeight: 300 }}>
            If you work with business owners, this program is for you.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 44 }}>
            {idealFor.map((item) => (
              <span key={item} style={{ padding: "8px 18px", background: "rgba(204,85,0,0.08)", border: "1px solid rgba(204,85,0,0.2)", borderRadius: 999, fontFamily: "'Roboto', sans-serif", fontSize: 13, fontWeight: 600, color: "rgba(210,225,245,0.8)" }}>
                {item}
              </span>
            ))}
          </div>
          <a
            href="mailto:partners@orengen.io?subject=Affiliate Program Application"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 40px", background: "#CC5500", color: "#fff", fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.04em", textTransform: "uppercase", textDecoration: "none", borderRadius: 999 }}
          >
            Apply Now — It&apos;s Free →
          </a>
          <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 13, color: "rgba(210,225,245,0.3)", marginTop: 16 }}>
            Questions? Email <a href="mailto:partners@orengen.io" style={{ color: "#CC5500", textDecoration: "none" }}>partners@orengen.io</a>
          </p>
        </div>
      </section>
    </div>
  )
}
