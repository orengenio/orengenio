import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "OrenKanBuilder™ — Build Your Custom AI Engine | OrenGen",
  description: "Configure your perfect AI workforce. Choose agents, channels, languages, and integrations. Enterprise-grade custom pricing, fully managed by OrenGen.",
  alternates: { canonical: "https://orengen.io/orenkanbuilder" },
  openGraph: {
    type: "website",
    url: "https://orengen.io/orenkanbuilder",
    title: "OrenKanBuilder™ — Build Your Custom AI Engine",
    description: "Configure your perfect AI workforce with custom pricing.",
    images: [{ url: "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/JkgbWmauRB7suRUl6bVem2msNPATeMS2h4iWgdcR.png", width: 1200, height: 630, alt: "OrenKanBuilder Custom AI Engine" }],
  },
}

const agentOptions = [
  { name: "AI Voice Agents", desc: "Inbound & outbound calls in any language", basePrice: 197, icon: "🎙" },
  { name: "AI Chat Employees", desc: "Website chat, SMS, and messaging", basePrice: 97, icon: "💬" },
  { name: "AI Email Agents", desc: "Automated email sequences & follow-ups", basePrice: 97, icon: "📧" },
  { name: "AI Social Agents", desc: "Content scheduling & engagement", basePrice: 147, icon: "📱" },
]

const channelOptions = [
  { name: "Voice (English)", included: true },
  { name: "Voice (Spanish)", included: true },
  { name: "Voice (5+ Languages)", price: 297 },
  { name: "SMS / Text", included: true },
  { name: "Email", included: true },
  { name: "WhatsApp", price: 97 },
  { name: "Live Chat Widget", included: true },
]

const integrationOptions = [
  { name: "OrenNexus CRM", included: true },
  { name: "Salesforce", price: 197 },
  { name: "HubSpot", price: 197 },
  { name: "Custom API", price: 297 },
  { name: "Zapier / n8n", price: 97 },
]

export default function OrenKanBuilderPage() {
  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(165deg, #081628 0%, #0B1D3A 30%, #0F2847 60%, #0D2240 100%)" }}>
      
      {/* Hero */}
      <section style={{
        position: "relative", padding: "140px 24px 80px", textAlign: "center", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(204,85,0,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px", opacity: 0.5, pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 24px",
            background: "rgba(204,85,0,0.1)", border: "1px solid rgba(204,85,0,0.25)",
            borderRadius: 999, marginBottom: 28,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#CC5500", boxShadow: "0 0 0 3px rgba(204,85,0,0.3)" }} />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#CC5500" }}>
              Custom Configuration
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 900, lineHeight: 1.05, color: "#F0F4FA", marginBottom: 20, letterSpacing: "-0.02em",
          }}>
            Build Your Custom <span style={{ color: "#CC5500" }}>AI Engine</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(210,225,245,0.55)", maxWidth: 600, margin: "0 auto 36px" }}>
            Configure your perfect AI workforce — choose agents, channels, languages, and integrations.
            Enterprise-grade. Fully managed. No compromises.
          </p>
        </div>
      </section>

      {/* Agent Selection */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 60px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#F0F4FA", marginBottom: 8 }}>
          Choose Your <span style={{ color: "#CC5500" }}>AI Agents</span>
        </h2>
        <p style={{ color: "rgba(210,225,245,0.45)", fontSize: 15, marginBottom: 32 }}>
          Select the agents you need. Each agent is fully managed and deployed for you.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {agentOptions.map((agent) => (
            <div key={agent.name} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 20, padding: "28px 24px", backdropFilter: "blur(12px)",
              transition: "border-color 0.3s, transform 0.3s",
            }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{agent.icon}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 800, color: "#F0F4FA", marginBottom: 4 }}>{agent.name}</div>
              <div style={{ fontSize: 13, color: "rgba(210,225,245,0.45)", marginBottom: 16, lineHeight: 1.5 }}>{agent.desc}</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#CC5500" }}>
                ${agent.basePrice}<span style={{ fontSize: 13, color: "rgba(210,225,245,0.4)", fontWeight: 400 }}>/mo per agent</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Channels */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 60px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#F0F4FA", marginBottom: 8 }}>
          Communication <span style={{ color: "#CC5500" }}>Channels</span>
        </h2>
        <p style={{ color: "rgba(210,225,245,0.45)", fontSize: 15, marginBottom: 32 }}>
          Every plan includes core channels. Add premium channels as needed.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
          {channelOptions.map((ch) => (
            <div key={ch.name} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 14, padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#F0F4FA" }}>{ch.name}</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: ch.included ? "#3FCF8E" : "#CC5500" }}>
                {ch.included ? "Included" : `+$${ch.price}/mo`}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 60px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#F0F4FA", marginBottom: 8 }}>
          Integrations &amp; <span style={{ color: "#CC5500" }}>Connections</span>
        </h2>
        <p style={{ color: "rgba(210,225,245,0.45)", fontSize: 15, marginBottom: 32 }}>
          Connect your existing tools or use our native OrenNexus CRM.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
          {integrationOptions.map((int) => (
            <div key={int.name} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 14, padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#F0F4FA" }}>{int.name}</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: int.included ? "#3FCF8E" : "#CC5500" }}>
                {int.included ? "Included" : `+$${int.price}/mo`}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 100px", textAlign: "center" }}>
        <div style={{
          background: "rgba(204,85,0,0.08)", border: "1px solid rgba(204,85,0,0.2)",
          borderRadius: 28, padding: "56px 40px", backdropFilter: "blur(12px)",
        }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 900, color: "#F0F4FA", marginBottom: 12 }}>
            Ready to Build Your <span style={{ color: "#CC5500" }}>Custom Engine?</span>
          </h2>
          <p style={{ color: "rgba(210,225,245,0.5)", fontSize: 16, lineHeight: 1.65, maxWidth: 500, margin: "0 auto 32px" }}>
            Our team will configure, deploy, and manage your custom AI workforce. No templates. No compromises. 100% yours.
          </p>
          <Link href="https://calendly.com/orengen/strategy" target="_blank" style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 40px",
            background: "linear-gradient(135deg, #CC5500, #E8762B)", color: "#fff",
            fontWeight: 700, fontSize: 15, borderRadius: 12, textDecoration: "none",
            boxShadow: "0 4px 24px rgba(204,85,0,0.35)",
          }}>
            Book a Strategy Call →
          </Link>
          <p style={{ color: "rgba(210,225,245,0.3)", fontSize: 12, marginTop: 16 }}>
            Free consultation. Custom quote within 24 hours.
          </p>
        </div>
      </section>
    </main>
  )
}
