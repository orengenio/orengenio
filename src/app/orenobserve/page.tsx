import type { Metadata } from "next"

import { OFFICIAL_LOGO_BLUE_URL } from "@/lib/brandAssets";
import { FONT_BODY, FONT_DISPLAY } from "@/lib/typography";
export const metadata: Metadata = {
  title: "OrenObserve — LLM Observability, Cost, and Evals | OrenGen Worldwide",
  description:
    "OrenObserve traces every LLM call across OrenAgents and OrenFlow — latency, cost, prompts, outputs, evals. See what your AI is actually doing, and what it costs.",
  alternates: { canonical: "https://orengen.io/orenobserve" },
  openGraph: {
    type: "website",
    url: "https://orengen.io/orenobserve",
    title: "OrenObserve — LLM Observability | OrenGen",
    description: "Traces, cost, evals, and dashboards for every AI call in your stack. Built on Langfuse.",
    images: [{ url: OFFICIAL_LOGO_BLUE_URL, width: 1200, height: 630, alt: "OrenObserve" }],
  },
}

const capabilities = [
  { icon: "🔎", title: "Full Tracing", desc: "Every prompt, every response, every tool call captured with input/output, model, latency, and token usage. Drill into any session." },
  { icon: "💸", title: "Cost Attribution", desc: "See spend by model, by agent, by customer, by feature. Catch runaway prompts before the invoice arrives." },
  { icon: "📏", title: "Evals & Scoring", desc: "LLM-as-judge evals, human annotations, and custom scorers. Know when a new model or prompt is actually better." },
  { icon: "🧪", title: "Prompt Versioning", desc: "Version prompts, A/B test them, promote winners. Rollback in one click if quality drops." },
  { icon: "🚨", title: "Alerts on Drift", desc: "Latency spikes, cost spikes, hallucination rates, tool failure rates. Get pinged before users complain." },
  { icon: "🧩", title: "Works With Everything", desc: "Native hooks in OrenFlow, OrenAgents, and OrenAutomations. SDKs for Python, TypeScript, and every LLM framework worth using." },
]

const faqs = [
  { q: "Is this just Langfuse rebranded?", a: "Under the hood, yes — OrenObserve runs Langfuse, with OrenGen handling hosting, retention, and access controls. You get the ecosystem without running it yourself." },
  { q: "How long is data retained?", a: "30 days on the standard plan, up to 1 year on Enterprise. All data exportable via API or CSV at any time." },
  { q: "Can I pipe traces from my own apps?", a: "Yes. Drop-in SDKs for OpenAI, Anthropic, LangChain, LlamaIndex, Vercel AI SDK, and raw REST. If it talks to an LLM, OrenObserve can see it." },
  { q: "What about PII in prompts?", a: "PII masking, selective redaction, and per-project access controls. Keep sensitive fields out of traces or restrict who can view them." },
]

export default function OrenObservePage() {
  return (
    <main style={{ fontFamily: FONT_BODY, background: "linear-gradient(165deg, #081628 0%, #0B1D3A 30%, #0F2847 60%, #0D2240 100%)", color: "#F0F4FA" }}>
      <style>{`@keyframes ooDot { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>

      <section style={{ padding: "clamp(100px,14vw,160px) 24px clamp(60px,10vw,100px)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: "radial-gradient(circle, rgba(204,85,0,0.12) 1px, transparent 1px)", backgroundSize: "32px 32px", maskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black 0%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black 0%, transparent 100%)" }} />
        <div aria-hidden style={{ position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)", width: 1000, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(204,85,0,0.15) 0%, rgba(11,29,58,0.3) 40%, transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }} />

        <div style={{ position: "relative", maxWidth: 1040, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", gap: 10, marginBottom: 32, flexWrap: "wrap", justifyContent: "center" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(204,85,0,0.08)", border: "1px solid rgba(204,85,0,0.25)", borderRadius: 9999, padding: "7px 18px", fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "#CC5500" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#CC5500", animation: "ooDot 1.8s ease-in-out infinite" }} />
              LLM Observability
            </span>
          </div>

          <h1 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(40px,7vw,84px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.02, color: "#F0F4FA", marginBottom: 28 }}>
            See What Your AI Is <span style={{ color: "#CC5500" }}>Actually Doing.</span>
          </h1>

          <p style={{ color: "rgba(210,225,245,0.55)", fontSize: "clamp(17px,2.2vw,21px)", maxWidth: 720, margin: "0 auto 40px", lineHeight: 1.65, fontWeight: 300 }}>
            OrenObserve traces every prompt, response, tool call, and cost across the OrenGen stack. Evals, drift alerts, and spend attribution so your AI never ships blind.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://langfuse.orengen.io" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #CC5500, #E8762B)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "16px 36px", borderRadius: 9999, textDecoration: "none", boxShadow: "0 0 0 4px rgba(204,85,0,0.2), 0 8px 32px rgba(204,85,0,0.45)" }}>✦ Open OrenObserve</a>
            <a href="https://book.orengen.io/coffeechat" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1.5px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "rgba(240,244,250,0.8)", fontWeight: 600, fontSize: 15, padding: "15px 28px", borderRadius: 9999, textDecoration: "none", backdropFilter: "blur(8px)" }}>Request an Audit →</a>
          </div>

          <div style={{ marginTop: 36, display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center", color: "rgba(210,225,245,0.35)", fontSize: 13 }}>
            {["End-to-end traces", "Cost per agent", "Eval framework", "SOC-ready logs"].map(t => (<span key={t}>✓ {t}</span>))}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(180deg, #0B1D3A 0%, #0D2240 100%)", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ display: "inline-block", background: "rgba(204,85,0,0.08)", border: "1px solid rgba(204,85,0,0.18)", color: "#CC5500", fontSize: 11, fontWeight: 700, letterSpacing: "0.32em", textTransform: "uppercase", borderRadius: 9999, padding: "6px 16px", marginBottom: 20 }}>Capabilities</span>
            <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(34px,5vw,56px)", fontWeight: 900, color: "#F0F4FA", letterSpacing: "-0.03em", marginBottom: 16 }}>The Control Room For Your AI</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 18 }}>
            {capabilities.map(cap => (
              <div key={cap.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderTop: "3px solid #CC5500", borderRadius: 20, padding: "30px 26px", backdropFilter: "blur(12px)" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{cap.icon}</div>
                <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 700, color: "#F0F4FA", marginBottom: 10 }}>{cap.title}</h3>
                <p style={{ color: "rgba(210,225,245,0.5)", fontSize: 14, lineHeight: 1.65 }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#0B1D3A" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(30px,4.5vw,48px)", fontWeight: 900, color: "#F0F4FA", letterSpacing: "-0.02em", marginBottom: 40, textAlign: "center" }}>Questions</h2>
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
          <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(30px,4.5vw,52px)", fontWeight: 900, color: "#F0F4FA", letterSpacing: "-0.02em", marginBottom: 20 }}>Turn on the <span style={{ color: "#CC5500" }}>lights</span>.</h2>
          <p style={{ color: "rgba(210,225,245,0.55)", fontSize: 17, marginBottom: 36 }}>Open the dashboard or get an audit of your current LLM spend.</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://langfuse.orengen.io" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #CC5500, #E8762B)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "16px 36px", borderRadius: 9999, textDecoration: "none" }}>Open OrenObserve</a>
            <a href="https://book.orengen.io/coffeechat" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1.5px solid rgba(255,255,255,0.12)", color: "rgba(240,244,250,0.8)", fontWeight: 600, fontSize: 15, padding: "15px 28px", borderRadius: 9999, textDecoration: "none" }}>Request a Cost Audit</a>
          </div>
        </div>
      </section>
    </main>
  )
}
