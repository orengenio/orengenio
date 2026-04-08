"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Vapi?: new (publicKey: string) => {
      on: (event: string, cb: (arg?: unknown) => void) => void;
      start: (config: { assistantId: string }) => void;
      stop: () => void;
    };
  }
}

const partners = [
  ["openai", "https://svgl.app/library/openai.svg", "OpenAI"],
  ["anthropic", "https://cdn.simpleicons.org/claude/CC5500", "Anthropic"],
  ["elevenlabs", "https://cdn.simpleicons.org/elevenlabs/white", "ElevenLabs"],
  ["googlecloud", "https://cdn.simpleicons.org/googlecloud/4285F4", "Google Cloud"],
  ["nvidia", "https://cdn.simpleicons.org/nvidia/76B900", "NVIDIA"],
  ["github", "https://cdn.simpleicons.org/github/white", "GitHub"],
  ["docker", "https://cdn.simpleicons.org/docker/2496ED", "Docker"],
  ["figma", "https://cdn.simpleicons.org/figma/F24E1E", "Figma"],
  ["webflow", "https://cdn.simpleicons.org/webflow/4353FF", "Webflow"],
  ["supabase", "https://cdn.simpleicons.org/supabase/3FCF8E", "Supabase"],
  ["n8n", "https://cdn.simpleicons.org/n8n/EA4B71", "n8n"],
  ["cloudflare", "https://cdn.simpleicons.org/cloudflare/F38020", "Cloudflare"],
  ["twilio", "https://svgl.app/library/twilio.svg", "Twilio"],
  ["wordpress", "https://cdn.simpleicons.org/wordpress/21759B", "WordPress"],
  ["clawbot", "https://cdn.simpleicons.org/claude/CC5500", "Clawbot"],
] as const;

export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@vapi-ai/web@latest/dist/vapi.min.js";
    script.async = true;
    document.body.appendChild(script);

    let vapi: InstanceType<NonNullable<typeof window.Vapi>> | null = null;

    script.onload = () => {
      if (!window.Vapi) return;
      vapi = new window.Vapi("44ba6f98-1c82-4261-9aa2-a2fe613470a4");

      vapi.on("call-start", () => {
        setActive(true);
        if (hintRef.current) hintRef.current.textContent = "Connected — speak now";
      });
      vapi.on("speech-start", () => {
        setSpeaking(true);
        if (hintRef.current) hintRef.current.textContent = "Speaking...";
      });
      vapi.on("speech-end", () => {
        setSpeaking(false);
        if (hintRef.current) hintRef.current.textContent = "Listening...";
      });
      vapi.on("call-end", () => {
        setSpeaking(false);
        setActive(false);
        if (hintRef.current) hintRef.current.textContent = "Click to activate";
      });
      vapi.on("error", () => {
        setSpeaking(false);
        setActive(false);
        if (hintRef.current) hintRef.current.textContent = "Error — try again";
      });
    };

    const onClick = () => {
      if (!vapi) {
        setActive((prev) => !prev);
        return;
      }
      if (!active) {
        if (hintRef.current) hintRef.current.textContent = "Connecting...";
        setActive(true);
        vapi.start({ assistantId: "997c7cd4-88fd-4172-9a7d-3a0ddad0c580" });
      } else {
        vapi.stop();
        setActive(false);
        setSpeaking(false);
        if (hintRef.current) hintRef.current.textContent = "Click to activate";
      }
    };

    const el = orbRef.current;
    el?.addEventListener("click", onClick);

    return () => {
      el?.removeEventListener("click", onClick);
      script.remove();
    };
  }, [active]);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Roboto:wght@300;400;500;700&display=swap');
        .og-hero *,.og-hero *::before,.og-hero *::after,.og-partners *,.og-partners *::before,.og-partners *::after{box-sizing:border-box;margin:0;padding:0}
        .og-hero{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:visible;background:linear-gradient(165deg,#081628 0%,#0B1D3A 30%,#0F2847 60%,#0D2240 100%);font-family:'Roboto',sans-serif;isolation:isolate;padding-top:90px}
        .og-hero-grid{position:absolute;inset:0;z-index:0;pointer-events:none;background-image:linear-gradient(rgba(204,85,0,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(204,85,0,.03) 1px,transparent 1px);background-size:80px 80px;mask-image:radial-gradient(ellipse 70% 60% at 50% 45%,black 0%,transparent 100%)}
        .og-hero-amb{position:absolute;border-radius:50%;filter:blur(120px);pointer-events:none;z-index:0}
        .og-hero-amb-1{width:900px;height:900px;top:-25%;right:-12%;background:radial-gradient(circle,rgba(30,77,140,.45) 0%,transparent 70%)}
        .og-hero-amb-2{width:650px;height:650px;bottom:-18%;left:-10%;background:radial-gradient(circle,rgba(21,53,102,.5) 0%,transparent 70%)}
        .og-hero-amb-3{width:400px;height:400px;top:35%;left:50%;transform:translateX(-50%);background:radial-gradient(circle,rgba(204,85,0,.1) 0%,transparent 70%)}
        .og-hero-amb-4{width:500px;height:500px;top:-10%;left:15%;background:radial-gradient(circle,rgba(204,85,0,.06) 0%,transparent 70%)}
        .og-hero-grain{position:absolute;inset:0;z-index:1;opacity:.14;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");background-size:128px 128px}
        .og-hero-content{position:relative;z-index:2;text-align:center;max-width:900px;padding:120px 24px 40px;display:flex;flex-direction:column;align-items:center}
        .og-hero-eyebrow{display:inline-flex;align-items:center;gap:10px;padding:8px 20px;background:rgba(204,85,0,.08);border:1px solid rgba(204,85,0,.18);border-radius:999px;font-size:12px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:rgba(210,225,245,.7);margin-bottom:32px}
        .og-hero-eyebrow-dot{width:6px;height:6px;border-radius:50%;background:#CC5500;box-shadow:0 0 8px rgba(204,85,0,.5)}
        .og-hero-h1{font-family:'Playfair Display',serif;font-weight:900;font-size:clamp(42px,8vw,92px);line-height:1.02;letter-spacing:-.03em;color:#F0F4FA;margin-bottom:30px}
        .og-line{display:block}.og-accent{color:#CC5500}
        .og-hero-sub{font-size:clamp(16px,2.2vw,21px);line-height:1.65;color:rgba(210,225,245,.55);max-width:560px;font-weight:300;margin-bottom:28px}
        .og-hero-proof{display:flex;align-items:center;gap:24px;flex-wrap:wrap;justify-content:center}.og-hero-proof-item{display:flex;align-items:center;gap:6px;font-size:13px;color:rgba(210,225,245,.45)}
        .ai-engine-container{display:flex;justify-content:center;align-items:center;padding:40px 0 60px;width:100%;position:relative;z-index:2}
        .ai-orb{width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,#CC5500 10%,#E2725B 50%,rgba(11,29,58,0) 90%);box-shadow:0 0 50px 15px rgba(204,85,0,.5),inset 0 0 25px rgba(255,255,255,.3);position:relative;display:flex;align-items:center;justify-content:center;cursor:pointer}
        .ai-orb.active{box-shadow:0 0 90px 35px rgba(204,85,0,.9),inset 0 0 25px rgba(255,255,255,.3)}
        .ai-orb.speaking{transform:scale(1.08)}
        .ai-orb-logo{width:52px;height:52px;position:relative;z-index:3;filter:drop-shadow(0 2px 8px rgba(0,0,0,.4))}
        .ai-orb-hint{position:absolute;bottom:-36px;left:50%;transform:translateX(-50%);font-size:11px;letter-spacing:.08em;color:rgba(210,225,245,.3);white-space:nowrap;opacity:0;transition:opacity .3s}
        .ai-orb:hover .ai-orb-hint{opacity:1}
        .og-partners{position:relative;padding:40px 0 44px;overflow:hidden;background:#081628;font-family:'Roboto',sans-serif}
        .og-partners-label{text-align:center;font-size:11px;font-weight:500;letter-spacing:.2em;text-transform:uppercase;margin-bottom:28px;color:rgba(210,225,245,.35)}
        .og-partners-wrapper{position:relative;overflow:hidden}
        .og-partners-wrapper::before,.og-partners-wrapper::after{content:'';position:absolute;top:0;bottom:0;width:120px;z-index:3;pointer-events:none}
        .og-partners-wrapper::before{left:0;background:linear-gradient(90deg,#081628 0%,transparent 100%)}
        .og-partners-wrapper::after{right:0;background:linear-gradient(270deg,#081628 0%,transparent 100%)}
        .og-partners-track{display:flex;animation:ogScroll 55s linear infinite;width:max-content}
        .og-partner-set{display:flex;align-items:center;gap:18px;padding:0 9px}
        .og-partner-item{display:inline-flex;align-items:center;gap:8px;padding:7px 14px 7px 10px;border-radius:10px;border:1px solid rgba(255,255,255,.05);white-space:nowrap}
        .og-partner-item img{width:20px;height:20px}.og-partner-item span{font-size:13px;font-weight:500;color:rgba(255,255,255,.45)}
        @keyframes ogScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @media(max-width:1100px){.og-chip{display:none}}
        @media(max-width:768px){.og-hero-content{padding:100px 20px 30px}.og-partners{padding:32px 0 36px}.og-partner-set{gap:12px}.og-partner-item{padding:5px 10px 5px 8px;gap:6px}.og-partner-item span{font-size:11px}.og-partner-item img{width:17px;height:17px}.og-partners-wrapper::before,.og-partners-wrapper::after{width:60px}}
      `}</style>

      <section className="og-hero">
        <div className="og-hero-grid" />
        <div className="og-hero-grain" />
        <div className="og-hero-amb og-hero-amb-1" />
        <div className="og-hero-amb og-hero-amb-2" />
        <div className="og-hero-amb og-hero-amb-3" />
        <div className="og-hero-amb og-hero-amb-4" />

        <div className="og-hero-content">
          <div className="og-hero-eyebrow"><span className="og-hero-eyebrow-dot" />AI-Driven Innovations for the Modern Enterprise</div>
          <h1 className="og-hero-h1">
            <span className="og-line"><span className="og-accent">Build</span> Your</span>
            <span className="og-line">AI Systems.</span>
            <span className="og-line">We Handle the Rest.</span>
          </h1>
          <p className="og-hero-sub">Deploy autonomous agents, automate operations, and scale without limits — all from one platform engineered to run your business.</p>
          <div className="og-hero-proof">
            <div className="og-hero-proof-item">✓ SAM.gov Registered</div>
            <div className="og-hero-proof-item">✓ Minority-Owned Certified</div>
            <div className="og-hero-proof-item">✓ Enterprise-Grade Security</div>
          </div>
        </div>

        <div className="ai-engine-container">
          <div ref={orbRef} className={`ai-orb ${active ? "active" : ""} ${speaking ? "speaking" : ""}`} id="ogEngineOrb">
            <img src="https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/GLBjK33zIX9uoJqAHz4c8kGhtn0mXn1bNtVzpUNU.png" alt="OrenGen" className="ai-orb-logo" />
            <span ref={hintRef} className="ai-orb-hint">Click to activate</span>
          </div>
        </div>
      </section>

      <section className="og-partners" aria-label="Technology Partners">
        <div className="og-partners-label">Powered by World-Class Technology</div>
        <div className="og-partners-wrapper">
          <div className="og-partners-track">
            {[0, 1].map((set) => (
              <div key={set} className="og-partner-set">
                {partners.map(([brand, src, label]) => (
                  <div className="og-partner-item" data-brand={brand} key={`${set}-${brand}`}>
                    <img src={src} alt={label} width={20} height={20} loading="lazy" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
