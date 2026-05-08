import type { Metadata } from "next"

import { OFFICIAL_LOGO_BLUE_URL } from "@/lib/brandAssets";
export const metadata: Metadata = {
  title: "OrenForms — Surveys, Feedback, and Smart Forms | OrenGen Worldwide",
  description:
    "OrenForms turns surveys, NPS, feedback widgets, and lead forms into AI-readable signal. Built on Formbricks, wired into the OrenGen agent stack.",
  alternates: { canonical: "https://orengen.io/orenforms" },
  openGraph: {
    type: "website",
    url: "https://orengen.io/orenforms",
    title: "OrenForms — Smart Forms & Surveys | OrenGen",
    description: "Branching logic, real-time dashboards, AI-scored responses. Branded for your domain.",
    images: [{ url: OFFICIAL_LOGO_BLUE_URL, width: 1200, height: 630, alt: "OrenForms" }],
  },
}

const capabilities = [
  { icon: "🪞", title: "Surveys That Think", desc: "Branching logic, conditional questions, and hidden fields. Ask the right follow-up based on the last answer." },
  { icon: "📊", title: "NPS & CSAT", desc: "Prebuilt NPS, CSAT, and CES templates with trend charts. Know what your customers think before they churn." },
  { icon: "🎯", title: "Lead Capture", desc: "Smart forms with progressive profiling. Each visit fills in more — fewer fields asked, more data collected." },
  { icon: "🧠", title: "AI Scoring", desc: "Responses flow to OrenAgents for sentiment, intent, and urgency classification. Hot leads routed instantly." },
  { icon: "🖼️", title: "Embed Anywhere", desc: "Web widgets, full pages, email embed, in-app modals. One response channel, every surface." },
  { icon: "🔄", title: "Webhook Everything", desc: "Fires into OrenNexus CRM, OrenAutomations, OrenMail, or any third party. Real-time response routing." },
]

const faqs = [
  { q: "Can I white-label it?", a: "Yes — OrenForms runs on your subdomain (e.g., forms.yourbrand.com), matches your colors, fonts, and logo. Recipients never see Formbricks branding." },
  { q: "Does it work for in-app feedback?", a: "Yes. Drop the OrenForms SDK in your web or mobile app to trigger targeted micro-surveys based on user behavior (page views, feature usage, session count)." },
  { q: "How is it different from Typeform / Tally?", a: "Self-hosted, no per-response caps, and integrated with the rest of OrenGen — responses become signal for agents, CRM, and automation, not a dead-end spreadsheet." },
  { q: "What about privacy and GDPR?", a: "Data stays on OrenGen infrastructure. EU and US regions available. Consent flows, anonymization, and response export/delete baked in." },
]

export default function OrenFormsPage() {
  return (
    <main style={{ fontFamily: "'Roboto', sans-serif", background: "linear-gradient(165deg, #081628 0%, #0B1D3A 30%, #0F2847 60%, #0D2240 100%)", color: "#F0F4FA" }}>
      <style>{`@keyframes ofDot { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>

      <section style={{ padding: "clamp(100px,14vw,160px) 24px clamp(60px,10vw,100px)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: "radial-gradient(circle, rgba(204,85,0,0.12) 1px, transparent 1px)", backgroundSize: "32px 32px", maskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black 0%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black 0%, transparent 100%)" }} />
        <div aria-hidden style={{ position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)", width: 1000, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(204,85,0,0.15) 0%, rgba(11,29,58,0.3) 40%, transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }} />

        <div style={{ position: "relative", maxWidth: 1040, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", gap: 10, marginBottom: 32, flexWrap: "wrap", justifyContent: "center" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(204,85,0,0.08)", border: "1px solid rgba(204,85,0,0.25)", borderRadius: 9999, padding: "7px 18px", fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "#CC5500" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#CC5500", animation: "ofDot 1.8s ease-in-out infinite" }} />
              Voice of the Customer
            </span>
          </div>

          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px,7vw,84px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.02, color: "#F0F4FA", marginBottom: 28 }}>
            Feedback That <span style={{ color: "#CC5500" }}>Goes Somewhere.</span>
          </h1>

          <p style={{ color: "rgba(210,225,245,0.55)", fontSize: "clamp(17px,2.2vw,21px)", maxWidth: 720, margin: "0 auto 40px", lineHeight: 1.65, fontWeight: 300 }}>
            Every OrenForms response is scored, routed, and actioned. NPS, surveys, lead forms, and in-app feedback that flow straight into the OrenGen agent stack — not another spreadsheet.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://formbricks.orengen.io" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #CC5500, #E8762B)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "16px 36px", borderRadius: 9999, textDecoration: "none", boxShadow: "0 0 0 4px rgba(204,85,0,0.2), 0 8px 32px rgba(204,85,0,0.45)" }}>✦ Open OrenForms</a>
            <a href="https://book.orengen.io/coffeechat" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1.5px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "rgba(240,244,250,0.8)", fontWeight: 600, fontSize: 15, padding: "15px 28px", borderRadius: 9999, textDecoration: "none", backdropFilter: "blur(8px)" }}>See it in Action →</a>
          </div>

          <div style={{ marginTop: 36, display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center", color: "rgba(210,225,245,0.35)", fontSize: 13 }}>
            {["White-label", "Unlimited responses", "AI-scored", "GDPR-ready"].map(t => (<span key={t}>✓ {t}</span>))}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(180deg, #0B1D3A 0%, #0D2240 100%)", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ display: "inline-block", background: "rgba(204,85,0,0.08)", border: "1px solid rgba(204,85,0,0.18)", color: "#CC5500", fontSize: 11, fontWeight: 700, letterSpacing: "0.32em", textTransform: "uppercase", borderRadius: 9999, padding: "6px 16px", marginBottom: 20 }}>Capabilities</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(34px,5vw,56px)", fontWeight: 900, color: "#F0F4FA", letterSpacing: "-0.03em", marginBottom: 16 }}>Smart Forms, Smarter Routing</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 18 }}>
            {capabilities.map(cap => (
              <div key={cap.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderTop: "3px solid #CC5500", borderRadius: 20, padding: "30px 26px", backdropFilter: "blur(12px)" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{cap.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#F0F4FA", marginBottom: 10 }}>{cap.title}</h3>
                <p style={{ color: "rgba(210,225,245,0.5)", fontSize: 14, lineHeight: 1.65 }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#0B1D3A" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px,4.5vw,48px)", fontWeight: 900, color: "#F0F4FA", letterSpacing: "-0.02em", marginBottom: 40, textAlign: "center" }}>Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((f, i) => (
              <details key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(204,85,0,0.15)", borderRadius: 14, padding: "18px 22px" }}>
                <summary style={{ cursor: "pointer", fontWeight: 700, color: "#F0F4FA", fontSize: 16, listStyle: "none" }}>{f.q}</summary>
                <p style={{ color: "rgba(210,225,245,0.6)", fontSize: 14, lineHeight: 1.7, marginTop: 12 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "linear-gradient(165deg, #0B1D3A 0%, #0D2240 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px,4.5vw,52px)", fontWeight: 900, color: "#F0F4FA", letterSpacing: "-0.02em", marginBottom: 20 }}>Turn feedback into <span style={{ color: "#CC5500" }}>pipeline</span>.</h2>
          <p style={{ color: "rgba(210,225,245,0.55)", fontSize: 17, marginBottom: 36 }}>Launch OrenForms or let us design your survey program.</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://formbricks.orengen.io" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #CC5500, #E8762B)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "16px 36px", borderRadius: 9999, textDecoration: "none" }}>Open OrenForms</a>
            <a href="https://book.orengen.io/coffeechat" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1.5px solid rgba(255,255,255,0.12)", color: "rgba(240,244,250,0.8)", fontWeight: 600, fontSize: 15, padding: "15px 28px", borderRadius: 9999, textDecoration: "none" }}>Design My Program</a>
          </div>
        </div>
      </section>
    </main>
  )
}
