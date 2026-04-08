import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "OrenAgents — Buy-Lingual™ AI Voice Employees | OrenGen Worldwide",
  description:
    "OrenAgents deploys AI voice agents and digital employees that work 24/7 in 11 languages. Automate calls, qualify leads, and scale without hiring.",
  alternates: { canonical: "https://orengen.io/orenagents" },
  openGraph: {
    type: "website",
    url: "https://orengen.io/orenagents",
    title: "OrenAgents — Buy-Lingual™ AI Voice Agents | OrenGen",
    description: "AI employees in English + Spanish. Never sleep. Never quit. Starting at $1,497/mo.",
    images: [{ url: "https://blog.orengen.io/wp-content/uploads/2026/03/OrenGen-Logo-Banner-BO-and-Blk-TP.png", width: 1200, height: 630, alt: "OrenAgents Buy-Lingual AI Voice Agents" }],
  },
}

const employeeTiers = [
  {
    name: "Standard",
    price: 97,
    setup: 497,
    label: "1 AI Employee",
    was: "$197/mo",
    highlight: false,
    stripeMonthly: "https://buy.stripe.com/3cI5kD1xK7pB0hJ0lzfQI2M",
    stripeAnnual: "https://buy.stripe.com/eVqdR9a4gcJV3tV2tHfQI2N",
    stripeSetup: null,
    features: [
      "1 AI digital employee",
      "Buy-Lingual™ English + Spanish",
      "Lead qualification & routing",
      "CRM integration & auto-logging",
      "Task automation",
      "Monthly performance reporting",
    ],
  },
  {
    name: "Professional",
    price: 197,
    setup: 997,
    label: "3 AI Employees",
    was: "$397/mo",
    highlight: true,
    stripeMonthly: "https://buy.stripe.com/6oU3cvdgs5hte8zecpfQI2O",
    stripeAnnual: "https://buy.stripe.com/28E5kD90ccJV1lNd8lfQI2P",
    stripeSetup: null,
    features: [
      "3 AI digital employees",
      "Buy-Lingual™ bilingual capability",
      "Advanced task automation",
      "Multi-CRM integration",
      "Priority support",
      "All Standard features",
    ],
  },
  {
    name: "Premium",
    price: 497,
    setup: 2497,
    label: "Full AI Employee Stack",
    was: "$797/mo",
    highlight: false,
    stripeMonthly: "https://buy.stripe.com/9B69AT4JWh0bc0r6JXfQI2Q",
    stripeAnnual: "https://buy.stripe.com/28EdR96S4bFRd4vb0dfQI2R",
    stripeSetup: null,
    features: [
      "Unlimited AI digital employees",
      "Full Buy-Lingual™ suite",
      "Custom AI personalities",
      "Process automation stack",
      "Dedicated account manager",
      "All Professional features",
    ],
  },
]

const voiceTiers = [
  {
    name: "Standard",
    price: 197,
    setup: 997,
    label: "1 AI Voice Agent",
    was: "$397/mo",
    highlight: false,
    stripeMonthly: "https://buy.stripe.com/8x23cvb8k25hd4v4BPfQI2S",
    stripeAnnual: "https://buy.stripe.com/9B66oH5O039le8z0lzfQI2T",
    stripeSetup: null,
    features: [
      "1 AI voice agent (English + Spanish)",
      "Buy-Lingual™ bilingual capability",
      "Inbound call handling",
      "Lead qualification & routing",
      "CRM integration",
      "Monthly reporting",
    ],
  },
  {
    name: "Professional",
    price: 397,
    setup: 1997,
    label: "3 AI Voice Agents",
    was: "$697/mo",
    highlight: true,
    stripeMonthly: "https://buy.stripe.com/5kQ00ja4g4dpd4v3xLfQI2U",
    stripeAnnual: "https://buy.stripe.com/00wcN5foA25h7Kbb0dfQI2V",
    stripeSetup: null,
    features: [
      "3 AI voice agents (English + Spanish)",
      "Inbound + outbound call handling",
      "Appointment booking & scheduling",
      "Multi-CRM integration",
      "Priority support",
      "All Standard features",
    ],
  },
  {
    name: "Premium",
    price: 797,
    setup: 4997,
    label: "Unlimited AI Voice Agents",
    was: "$1,297/mo",
    highlight: false,
    stripeMonthly: "https://buy.stripe.com/9B6aEXccoeS38Of9W9fQI2W",
    stripeAnnual: "https://buy.stripe.com/5kQbJ1ccodNZ0hJc4hfQI2X",
    stripeSetup: null,
    features: [
      "Unlimited AI voice agents",
      "Full Buy-Lingual™ suite (+ more languages on request)",
      "Custom voice personalities per language",
      "Dedicated account manager",
      "SLA guarantee",
      "All Professional features",
    ],
  },
]

const faqs = [
  { q: "What is Buy-Lingual™?", a: "Buy-Lingual™ is OrenAgents' proprietary bilingual AI technology. Every OrenAgents deployment includes English + Spanish capability at no extra cost. The AI detects language in real-time and responds naturally in whichever language your customer prefers." },
  { q: "Can the AI handle inbound AND outbound calls?", a: "Yes. OrenAgents handles both inbound (answering calls, qualifying leads, booking appointments) and outbound (follow-ups, cold outreach, reminders). The Voice Pro and AI Workforce plans include both." },
  { q: "How quickly can an AI agent be deployed?", a: "Most OrenAgents deployments go live within days. We handle the setup, training, CRM integration, and testing — you just review and approve." },
  { q: "Does it integrate with my CRM?", a: "Yes. OrenAgents integrates with all major CRMs including GoHighLevel, Salesforce, HubSpot, Zoho, and more. Every call is automatically logged with full transcripts and notes." },
  { q: "Can I customize the AI's voice and personality?", a: "Absolutely. We work with you to create a custom voice personality that matches your brand — tone, speaking style, language preferences, and more. AI Workforce plans include separate voice personalities per language." },
  { q: "What languages are supported?", a: "Every plan includes English + Spanish via Buy-Lingual™. Additional languages (Portuguese, French, Mandarin, and more) are available on the AI Workforce Enterprise plan — contact us to discuss." },
  { q: "Is there a long-term contract?", a: "Monthly plans have no long-term commitment — cancel anytime. Annual plans are monthly × 10 (Save 17%). We're confident you'll stay because the results speak for themselves." },
]
};


export default function OrenAgentsPage() {
  return (
    <main style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", background: "#050505", color: "#fff" }}>

      {/* ═══ HERO ═══ */}
      <section style={{
        background: "linear-gradient(160deg, #020d1a 0%, #050505 60%)",
        padding: "clamp(100px,14vw,160px) 24px clamp(60px,10vw,100px)",
        position: "relative", overflow: "hidden", textAlign: "center",
      }}>
        {/* Ambient glow */}
        <div aria-hidden style={{
          position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)",
          width: 1000, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,51,102,0.4) 0%, rgba(204,85,0,0.1) 40%, transparent 70%)",
          filter: "blur(100px)", pointerEvents: "none",
        }} />

        <div style={{ position: "relative", maxWidth: 960, margin: "0 auto" }}>
          {/* Badge */}
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(0,51,102,0.35)", border: "1px solid rgba(77,166,255,0.35)",
              borderRadius: 9999, padding: "7px 18px",
              fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "#4da6ff",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4da6ff", animation: "pulse 1.8s ease-in-out infinite" }} />
              AI Voice Agents
            </span>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(204,85,0,0.15)", border: "1px solid rgba(204,85,0,0.4)",
              borderRadius: 9999, padding: "7px 18px",
              fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "#CC5500",
            }}>
              Buy-Lingual™ Powered
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-league-spartan), sans-serif",
            fontSize: "clamp(44px,8vw,96px)", fontWeight: 800,
            letterSpacing: "-0.025em", lineHeight: 0.92,
            color: "#fff", marginBottom: 28,
          }}>
            AI Employees That Never Sleep,<br />
            <span style={{
              background: "linear-gradient(135deg, #4da6ff 0%, #003366 50%, #CC5500 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Never Quit,
            </span>
            {" "}and Speak<br />Your Customer&apos;s Language
          </h1>

          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(17px,2.2vw,21px)", maxWidth: 680, margin: "0 auto 48px", lineHeight: 1.65 }}>
            OrenAgents deploys AI voice agents that handle inbound and outbound calls, book appointments, qualify leads, and deliver 24/7 support — in English AND Spanish, from day one.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a
              href="https://calendly.com/orengenio/30min"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#CC5500", color: "#fff",
                fontWeight: 700, fontSize: 16, padding: "16px 36px", borderRadius: 9999,
                textDecoration: "none",
                boxShadow: "0 0 0 4px rgba(204,85,0,0.2), 0 8px 32px rgba(204,85,0,0.45)",
              }}
            >
              ✦ Deploy My AI Agents
            </a>
            <a
              href="#pricing"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                border: "1.5px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.8)", fontWeight: 600, fontSize: 15,
                padding: "15px 28px", borderRadius: 9999, textDecoration: "none",
              }}
            >
              See Pricing →
            </a>
          </div>

          <div style={{ marginTop: 36, display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap", color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
            {["AI Employees from $97/mo", "AI Voice from $197/mo", "24/7 uptime", "No human required"].map(t => (
              <span key={t}>✓ {t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT THEY DO ═══ */}
      <section style={{ background: "#080808", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{
              display: "inline-block", background: "rgba(77,166,255,0.1)", border: "1px solid rgba(77,166,255,0.25)",
              color: "#4da6ff", fontSize: 11, fontWeight: 700, letterSpacing: "0.32em",
              textTransform: "uppercase", borderRadius: 9999, padding: "6px 16px", marginBottom: 20,
            }}>
              Capabilities
            </span>
            <h2 style={{
              fontFamily: "var(--font-league-spartan), sans-serif",
              fontSize: "clamp(34px,5vw,60px)", fontWeight: 800,
              color: "#fff", letterSpacing: "-0.022em", marginBottom: 16,
            }}>
              Your AI Employees Are Already Working
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 18, maxWidth: 580, margin: "0 auto" }}>
              While your team sleeps, OrenAgents handles calls, books appointments, and qualifies leads around the clock.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 18 }}>
            {[
              { icon: "📞", title: "Inbound Call Handling", desc: "Answers every call instantly. Qualifies callers, answers FAQs, routes to the right person, and logs everything in your CRM." },
              { icon: "📤", title: "Outbound Campaigns", desc: "Proactive follow-up calls, lead re-engagement, appointment reminders, and cold outreach — all automated, all natural." },
              { icon: "📅", title: "Appointment Booking", desc: "Books directly into your calendar. Handles rescheduling, sends confirmations, and reduces no-shows automatically." },
              { icon: "🎯", title: "Lead Qualification", desc: "Scores and qualifies every inbound lead using your criteria. Only warm, qualified leads make it to your sales team." },
              { icon: "🌐", title: "24/7 Support Coverage", desc: "Never miss a call again. OrenAgents works nights, weekends, and holidays — zero overtime, zero complaints." },
              { icon: "🔗", title: "CRM Auto-Logging", desc: "Every call is automatically transcribed, summarized, and logged with full notes in your CRM. Zero manual data entry." },
            ].map(cap => (
              <div key={cap.title} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(77,166,255,0.12)",
                borderRadius: 20, padding: "30px 26px",
                transition: "border-color 0.2s, background 0.2s",
              }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{cap.icon}</div>
                <h3 style={{
                  fontFamily: "var(--font-league-spartan), sans-serif",
                  fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 10,
                }}>
                  {cap.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.65 }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Buy-Lingual™ SECTION ═══ */}
      <section style={{
        background: "linear-gradient(160deg, #0a0505 0%, #150800 50%, #050505 100%)",
        padding: "100px 24px",
        position: "relative", overflow: "hidden",
        borderTop: "1px solid rgba(204,85,0,0.15)",
        borderBottom: "1px solid rgba(204,85,0,0.15)",
      }}>
        {/* Ambient */}
        <div aria-hidden style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: 800, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(204,85,0,0.18) 0%, transparent 65%)",
          filter: "blur(80px)", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center" }}>

            {/* Left: trademark big text */}
            <div>
              <div style={{
                fontFamily: "var(--font-league-spartan), sans-serif",
                fontSize: "clamp(48px,7vw,110px)", fontWeight: 900,
                letterSpacing: "-0.03em", lineHeight: 0.88,
                color: "#CC5500",
                marginBottom: 8,
                wordBreak: "break-word", overflowWrap: "break-word", maxWidth: "100%",
              }}>
                BUY-
              </div>
              <div style={{
                fontFamily: "var(--font-league-spartan), sans-serif",
                fontSize: "clamp(48px,7vw,110px)", fontWeight: 900,
                letterSpacing: "-0.03em", lineHeight: 0.88,
                color: "#fff",
                marginBottom: 24,
                wordBreak: "break-word", overflowWrap: "break-word", maxWidth: "100%",
              }}>
                LINGUAL™
              </div>
              <div style={{
                display: "inline-block",
                background: "rgba(204,85,0,0.15)", border: "1px solid rgba(204,85,0,0.4)",
                borderRadius: 9999, padding: "8px 20px",
                fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#CC5500",
              }}>
                Proprietary Technology
              </div>
            </div>

            {/* Right: content */}
            <div>
              <h2 style={{
                fontFamily: "var(--font-league-spartan), sans-serif",
                fontSize: "clamp(24px,3.5vw,44px)", fontWeight: 800,
                color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.2,
                marginBottom: 20,
                wordBreak: "break-word", overflowWrap: "break-word", maxWidth: "100%",
              }}>
                Our AI Voice Agents Speak Your Customers&apos; Language — Literally.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, lineHeight: 1.7, marginBottom: 36 }}>
                English + Spanish bilingual capability is built into every OrenAgents deployment. No extra cost. No separate setup. Just seamless, natural conversations in the language your customer prefers — detected in real-time.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "⚡", text: "Real-time language detection" },
                  { icon: "🗣️", text: "Natural bilingual conversation flow" },
                  { icon: "🌎", text: "English + Spanish (more languages on Enterprise)" },
                  { icon: "🎙️", text: "Custom voice personalities per language" },
                  { icon: "✦", text: "Consistent brand voice across both languages" },
                ].map(cap => (
                  <div key={cap.text} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{
                      width: 38, height: 38, borderRadius: 10,
                      background: "rgba(204,85,0,0.15)", border: "1px solid rgba(204,85,0,0.3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 18, flexShrink: 0,
                    }}>
                      {cap.icon}
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, fontWeight: 500, flex: 1, minWidth: 0, wordBreak: "break-word" }}>{cap.text}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 40, padding: "20px 24px", background: "rgba(204,85,0,0.08)", border: "1px solid rgba(204,85,0,0.25)", borderRadius: 14 }}>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  <strong style={{ color: "#CC5500" }}>Why it matters:</strong> 42+ million Spanish speakers in the US. Every missed Spanish-language call is revenue walking out the door. Buy-Lingual™ closes that gap — automatically, every time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile responsive override — handled by auto-fit grid above */}
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" style={{ background: "#080808", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* AI Employees */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{
              display: "inline-block", background: "#CC5500", color: "#fff",
              fontSize: 11, fontWeight: 700, letterSpacing: "0.32em",
              textTransform: "uppercase", borderRadius: 9999, padding: "6px 16px", marginBottom: 20,
            }}>
              AI Employees Pricing
            </span>
            <h2 style={{
              fontFamily: "var(--font-league-spartan), sans-serif",
              fontSize: "clamp(30px,4vw,52px)", fontWeight: 800,
              color: "#fff", letterSpacing: "-0.022em", marginBottom: 12,
            }}>
              AI Digital Employees
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15 }}>
              All plans include Buy-Lingual™ English + Spanish. Annual = monthly × 10 (Save 17%).
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20, marginBottom: 80 }}>
            {employeeTiers.map(tier => (
              <div key={tier.name} style={{
                background: tier.highlight ? "rgba(0,51,102,0.3)" : "rgba(255,255,255,0.03)",
                border: tier.highlight ? "2px solid #003366" : "1px solid rgba(255,255,255,0.08)",
                borderTop: `4px solid ${tier.highlight ? "#4da6ff" : "rgba(255,255,255,0.1)"}`,
                borderRadius: 20, padding: "36px 30px",
                display: "flex", flexDirection: "column",
                boxShadow: tier.highlight ? "0 0 60px rgba(0,51,102,0.3)" : "none",
                position: "relative",
              }}>
                {tier.highlight && (
                  <div style={{
                    position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                    background: "#4da6ff", color: "#fff",
                    fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase",
                    borderRadius: 9999, padding: "5px 16px", whiteSpace: "nowrap",
                  }}>
                    Most Popular
                  </div>
                )}
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: tier.highlight ? "#4da6ff" : "rgba(255,255,255,0.4)", marginBottom: 8 }}>
                  {tier.name}
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>{tier.label}</div>
                <div style={{ marginBottom: 24 }}>
                  <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, textDecoration: "line-through", marginBottom: 4 }}>Was {tier.was}</div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 4 }}>
                    <span style={{ fontFamily: "var(--font-league-spartan), sans-serif", fontSize: 44, fontWeight: 800, color: tier.highlight ? "#4da6ff" : "#fff", lineHeight: 1 }}>
                      ${tier.price.toLocaleString()}
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 14, paddingBottom: 7 }}>/mo</span>
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 4 }}>
                    Or ${(tier.price * 10).toLocaleString()}/yr (Save 17%)
                  </div>
                  <div style={{ color: "#CC5500", fontSize: 11, fontWeight: 700, marginTop: 6 }}>
                    + ${tier.setup.toLocaleString()} one-time setup
                  </div>
                </div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 28, flex: 1 }}>
                  {tier.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.65)" }}>
                      <span style={{ color: tier.highlight ? "#4da6ff" : "#CC5500", flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.stripeMonthly}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "block", textAlign: "center",
                    padding: "14px 0", borderRadius: 12,
                    fontSize: 14, fontWeight: 700, textDecoration: "none",
                    transition: "all 0.18s",
                    background: tier.highlight ? "#4da6ff" : "transparent",
                    color: tier.highlight ? "#fff" : "#4da6ff",
                    border: tier.highlight ? "none" : "1.5px solid rgba(77,166,255,0.4)",
                  }}
                >
                  Get Started →
                </a>
              </div>
            ))}
          </div>

          {/* AI Voice */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{
              display: "inline-block", background: "rgba(204,85,0,0.15)", border: "1px solid rgba(204,85,0,0.4)", color: "#CC5500",
              fontSize: 11, fontWeight: 700, letterSpacing: "0.32em",
              textTransform: "uppercase", borderRadius: 9999, padding: "6px 16px", marginBottom: 20,
            }}>
              AI Voice Pricing
            </span>
            <h2 style={{
              fontFamily: "var(--font-league-spartan), sans-serif",
              fontSize: "clamp(30px,4vw,52px)", fontWeight: 800,
              color: "#fff", letterSpacing: "-0.022em", marginBottom: 12,
            }}>
              AI Voice Agents
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15 }}>
              Handles inbound + outbound calls. Buy-Lingual™ English + Spanish included.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {voiceTiers.map(tier => (
              <div key={tier.name} style={{
                background: tier.highlight ? "rgba(204,85,0,0.12)" : "rgba(255,255,255,0.03)",
                border: tier.highlight ? "2px solid rgba(204,85,0,0.5)" : "1px solid rgba(255,255,255,0.08)",
                borderTop: `4px solid ${tier.highlight ? "#CC5500" : "rgba(255,255,255,0.1)"}`,
                borderRadius: 20, padding: "36px 30px",
                display: "flex", flexDirection: "column",
                boxShadow: tier.highlight ? "0 0 60px rgba(204,85,0,0.2)" : "none",
                position: "relative",
              }}>
                {tier.highlight && (
                  <div style={{
                    position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                    background: "#CC5500", color: "#fff",
                    fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase",
                    borderRadius: 9999, padding: "5px 16px", whiteSpace: "nowrap",
                  }}>
                    Most Popular
                  </div>
                )}
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: tier.highlight ? "#CC5500" : "rgba(255,255,255,0.4)", marginBottom: 8 }}>
                  {tier.name}
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>{tier.label}</div>
                <div style={{ marginBottom: 24 }}>
                  <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, textDecoration: "line-through", marginBottom: 4 }}>Was {tier.was}</div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 4 }}>
                    <span style={{ fontFamily: "var(--font-league-spartan), sans-serif", fontSize: 44, fontWeight: 800, color: tier.highlight ? "#CC5500" : "#fff", lineHeight: 1 }}>
                      ${tier.price.toLocaleString()}
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 14, paddingBottom: 7 }}>/mo</span>
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 4 }}>
                    Or ${(tier.price * 10).toLocaleString()}/yr (Save 17%)
                  </div>
                  <div style={{ color: "#CC5500", fontSize: 11, fontWeight: 700, marginTop: 6 }}>
                    + ${tier.setup.toLocaleString()} one-time setup
                  </div>
                </div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 28, flex: 1 }}>
                  {tier.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.65)" }}>
                      <span style={{ color: tier.highlight ? "#CC5500" : "#4da6ff", flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.stripeMonthly}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "block", textAlign: "center",
                    padding: "14px 0", borderRadius: 12,
                    fontSize: 14, fontWeight: 700, textDecoration: "none",
                    transition: "all 0.18s",
                    background: tier.highlight ? "#CC5500" : "transparent",
                    color: tier.highlight ? "#fff" : "#CC5500",
                    border: tier.highlight ? "none" : "1.5px solid rgba(204,85,0,0.4)",
                  }}
                >
                  Get Started →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ background: "#050505", padding: "100px 24px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{
              display: "inline-block", background: "rgba(204,85,0,0.1)", border: "1px solid rgba(204,85,0,0.3)",
              color: "#CC5500", fontSize: 11, fontWeight: 700, letterSpacing: "0.32em",
              textTransform: "uppercase", borderRadius: 9999, padding: "6px 16px", marginBottom: 20,
            }}>
              FAQ
            </span>
            <h2 style={{
              fontFamily: "var(--font-league-spartan), sans-serif",
              fontSize: "clamp(32px,5vw,52px)", fontWeight: 800,
              color: "#fff", letterSpacing: "-0.022em",
            }}>
              Common Questions
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map(faq => (
              <details key={faq.q} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14, overflow: "hidden",
              }}>
                <summary style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  gap: 16, padding: "20px 24px", cursor: "pointer", listStyle: "none",
                  fontWeight: 600, fontSize: 16, color: "#fff",
                }}>
                  {faq.q}
                  <span style={{ color: "#CC5500", fontSize: 22, fontWeight: 300, lineHeight: 1, flexShrink: 0 }}>+</span>
                </summary>
                <p style={{
                  padding: "0 24px 22px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 16,
                  color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.7, margin: 0,
                }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ background: "#050505", padding: "80px 24px 100px" }}>
        <div style={{
          maxWidth: 900, margin: "0 auto",
          background: "linear-gradient(135deg, rgba(0,51,102,0.4) 0%, rgba(5,5,5,0.8) 50%, rgba(204,85,0,0.15) 100%)",
          border: "1px solid rgba(77,166,255,0.2)", borderRadius: 28,
          padding: "clamp(48px,8vw,80px) clamp(24px,6vw,64px)",
          textAlign: "center", position: "relative", overflow: "hidden",
        }}>
          <div aria-hidden style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
            width: 600, height: 300,
            background: "radial-gradient(ellipse at 50% 0%, rgba(77,166,255,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{
              fontFamily: "var(--font-league-spartan), sans-serif",
              fontSize: "clamp(36px,6vw,68px)", fontWeight: 800,
              letterSpacing: "-0.025em", color: "#fff", marginBottom: 18, lineHeight: 1.0,
            }}>
              Your Competitors Are Already<br />Using AI. Are You?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 18, maxWidth: 560, margin: "0 auto 44px", lineHeight: 1.65 }}>
              Book a 30-minute strategy call. We&apos;ll show you exactly how OrenAgents fits your business — and what your ROI looks like before you spend a dollar.
            </p>
            <a
              href="https://calendly.com/orengenio/30min"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#CC5500", color: "#fff",
                fontWeight: 700, fontSize: 16, padding: "16px 40px", borderRadius: 9999,
                textDecoration: "none",
                boxShadow: "0 0 0 4px rgba(204,85,0,0.2), 0 8px 32px rgba(204,85,0,0.45)",
              }}
            >
              ✦ Deploy My AI Agents
            </a>
            <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", color: "rgba(255,255,255,0.25)", fontSize: 13 }}>
              <span>✓ Fast deployment</span>
              <span>✓ Buy-Lingual™ included</span>
              <span>✓ No long-term contract</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
