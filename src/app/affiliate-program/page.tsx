import type { Metadata } from "next"

import { FONT_BODY, FONT_DISPLAY } from "@/lib/typography";

export const metadata: Metadata = {
  title: "Affiliate Program — OrenGen Worldwide",
  description: "Earn recurring commissions by referring businesses to OrenGen AI. 120-day cookie, monthly payouts, full marketing kit included.",
  alternates: { canonical: "https://orengen.io/affiliate-program" },
}

const tiers = [
  { pct: "15%", label: "Tier 1 — Direct Referrals", desc: "Every client you refer earns you 15% of their monthly spend, recurring, for the life of the account." },
  { pct: "5%", label: "Tier 2 — Your Network", desc: "When affiliates you refer bring in clients, you earn 5% of those commissions automatically." },
]

const bonuses = [
  { threshold: "$5K+ MRR", bonus: "+2%" },
  { threshold: "$15K+ MRR", bonus: "+5%" },
  { threshold: "$50K+ MRR", bonus: "+10%" },
]

const features = [
  { title: "Universal Single Link", desc: "One link, every product. Share it once, earn on every product your referral buys — forever." },
  { title: "Ready-Made Marketing Kit", desc: "Cold emails, social posts, ad copy, scripts — all pre-written and auto-filled with your link." },
  { title: "2-Tier Network", desc: "Recruit other affiliates and earn from their referrals automatically — 2 levels deep." },
  { title: "120-Day Cookie", desc: "Your referral link stays active for 120 days. If they sign up anytime in that window, you get credit." },
  { title: "AI Revenue Coach", desc: "Your AI coach answers questions, suggests strategies, and tracks your progress 24/7." },
  { title: "Real-Time Dashboard", desc: "See every click, conversion, commission, and payout — live, with full downline visibility." },
]

export default function AffiliateProgramPage() {
  return (
    <div style={{ background: "#0B1D3A", minHeight: "100vh", color: "#F0F4FA" }}>
      {/* ── HERO ── */}
      <section style={{ padding: "140px 20px 100px", textAlign: "center", background: "linear-gradient(165deg,#081628 0%,#0B1D3A 40%,#0F2847 70%,#0D2240 100%)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(204,85,0,0.08) 1px,transparent 1px)", backgroundSize: "40px 40px", opacity: 0.5, pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-20%", right: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(204,85,0,0.12) 0%,transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 20px", background: "rgba(204,85,0,0.08)", border: "1px solid rgba(204,85,0,0.18)", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#CC5500", marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#CC5500", boxShadow: "0 0 0 3px rgba(204,85,0,0.3)" }} />
            Affiliate Program — Recurring Commissions
          </div>
          <h1 style={{ fontFamily: FONT_DISPLAY, fontWeight: 900, fontSize: "clamp(40px,7vw,78px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#F0F4FA", marginBottom: 28 }}>
            Turn Your Network Into <span style={{ color: "#CC5500" }}>Recurring Revenue</span>
          </h1>
          <p style={{ fontFamily: FONT_BODY, fontSize: "clamp(16px,2vw,20px)", lineHeight: 1.65, color: "rgba(210,225,245,0.6)", maxWidth: 620, margin: "0 auto 20px", fontWeight: 300 }}>
            Join OrenGen&apos;s affiliate program and earn <strong style={{ color: "#F0F4FA", fontWeight: 700 }}>15% recurring commissions on every referral + 5% on your network</strong> — with a full marketing kit and AI coach included.
          </p>
          <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: "rgba(210,225,245,0.4)", marginBottom: 44 }}>
            120-day cookie · Monthly payouts · $50 minimum · Powered by WeShare
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://weshare.orengen.io" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px", background: "#CC5500", color: "#fff", fontFamily: FONT_BODY, fontWeight: 700, fontSize: 15, letterSpacing: "0.04em", textTransform: "uppercase" as const, textDecoration: "none", borderRadius: 999 }}>
              Start Earning Today →
            </a>
            <a href="https://weshare.orengen.io" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px", background: "transparent", color: "rgba(210,225,245,0.7)", fontFamily: FONT_BODY, fontWeight: 600, fontSize: 15, textDecoration: "none", borderRadius: 999, border: "1px solid rgba(255,255,255,0.12)" }}>
              Already a Member? Sign In
            </a>
          </div>
        </div>
      </section>

      {/* ── COMMISSION TIERS ── */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 24px 0" }}>
        <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 900, fontSize: "clamp(32px,5vw,52px)", letterSpacing: "-0.03em", color: "#F0F4FA", textAlign: "center", marginBottom: 56 }}>
          Commission <span style={{ color: "#CC5500" }}>Structure</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, marginBottom: 32 }}>
          {tiers.map((t, i) => (
            <div key={t.label} style={{ background: i === 0 ? "rgba(204,85,0,0.06)" : "rgba(255,255,255,0.03)", border: i === 0 ? "1px solid rgba(204,85,0,0.35)" : "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "36px 32px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#CC5500,#E8762B)", borderRadius: "20px 20px 0 0" }} />
              <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 900, fontSize: 56, color: "#CC5500", lineHeight: 1, marginBottom: 8 }}>{t.pct}</p>
              <p style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(210,225,245,0.4)", marginBottom: 14 }}>{t.label}</p>
              <p style={{ fontFamily: FONT_BODY, fontSize: 14, lineHeight: 1.7, color: "rgba(210,225,245,0.55)", fontWeight: 300 }}>{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Volume bonuses */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "28px 32px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: 24, justifyContent: "space-between" }}>
          <p style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(210,225,245,0.45)" }}>Volume Bonuses</p>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {bonuses.map((b) => (
              <div key={b.threshold} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 900, fontSize: 28, color: "#4ade80", lineHeight: 1, marginBottom: 4 }}>{b.bonus}</p>
                <p style={{ fontFamily: FONT_BODY, fontSize: 12, color: "rgba(210,225,245,0.4)", fontWeight: 600 }}>{b.threshold}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 900, fontSize: "clamp(32px,5vw,52px)", letterSpacing: "-0.03em", color: "#F0F4FA", textAlign: "center", marginBottom: 56 }}>
          Everything You Need to <span style={{ color: "#CC5500" }}>Win</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
          {features.map((f) => (
            <div key={f.title} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, padding: "28px 24px" }}>
              <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 18, color: "#F0F4FA", marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontFamily: FONT_BODY, fontSize: 14, lineHeight: 1.7, color: "rgba(210,225,245,0.5)", fontWeight: 300 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 120px", textAlign: "center" }}>
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(204,85,0,0.2)", borderRadius: 24, padding: "56px 40px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#CC5500,#E8762B,#CC5500)", borderRadius: "24px 24px 0 0" }} />
          <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 900, fontSize: "clamp(28px,4vw,44px)", color: "#F0F4FA", marginBottom: 16 }}>
            Your Dashboard Is <span style={{ color: "#CC5500" }}>Ready</span>
          </h2>
          <p style={{ fontFamily: FONT_BODY, fontSize: 16, color: "rgba(210,225,245,0.5)", marginBottom: 36, fontWeight: 300, maxWidth: 480, margin: "0 auto 36px" }}>
            Apply now and get instant access to WeShare — your real-time affiliate dashboard, marketing kit, and AI revenue coach.
          </p>
          <a href="https://weshare.orengen.io" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 40px", background: "#CC5500", color: "#fff", fontFamily: FONT_BODY, fontWeight: 700, fontSize: 15, letterSpacing: "0.04em", textTransform: "uppercase" as const, textDecoration: "none", borderRadius: 999 }}>
            Join WeShare — It&apos;s Free →
          </a>
          <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: "rgba(210,225,245,0.25)", marginTop: 16 }}>
            Questions? <a href="mailto:partners@orengen.io" style={{ color: "#CC5500", textDecoration: "none" }}>partners@orengen.io</a>
          </p>
        </div>
      </section>
    </div>
  )
}
