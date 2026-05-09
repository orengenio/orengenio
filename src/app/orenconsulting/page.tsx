import type { Metadata } from "next"
import { LeadModalTrigger } from "@/components/LeadModal"

export const metadata: Metadata = {
  title: "OrenConsulting — Fractional C-Suite + Custom AI Engineering | OrenGen",
  description: "Your fractional CTO, CEO, CMO, COO, or CIO — powered by AI. Executive-level strategy meets hands-on AI engineering. No full-time cost, full-time results.",
  alternates: { canonical: "https://orengen.io/orenconsulting" },
}

export default function Page() {
  return (
    <>
    <LeadModalTrigger
      defaultSource="orenconsulting"
      title="Engage Your Fractional C-Suite"
      subtitle="Tell us about your business and we'll be in touch within the hour."
    />
    <div className="pt-24 pb-12 consult-page" dangerouslySetInnerHTML={{ __html: `
<style>
  :root{--primary:#CC5500;--primary-light:#E8762B;--primary-dark:#B34A00;--bg-dark:#0B1D3A;--bg-card:rgba(255,255,255,0.03);--border:rgba(255,255,255,0.06);--text:#F0F4FA;--text-secondary:rgba(210,225,245,0.6);--text-muted:rgba(210,225,245,0.4)}
  .consult-page *{margin:0;padding:0;box-sizing:border-box}
  .consult-page{background:var(--bg-dark);color:var(--text);font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;overflow-x:hidden}
  .consult-page h1,.consult-page h2,.consult-page h3,.consult-page h4,.consult-page h5,.consult-page h6{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif}

  /* ===== HERO ===== */
  .oc-hero{position:relative;min-height:90vh;display:flex;align-items:center;justify-content:center;padding:120px 40px 80px;overflow:hidden;background:linear-gradient(165deg,#081628 0%,#0B1D3A 30%,#0F2847 60%,#0D2240 100%)}
  .oc-hero::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle,rgba(204,85,0,0.1) 1px,transparent 1px);background-size:32px 32px;mask-image:radial-gradient(ellipse 70% 60% at 50% 45%,black 0%,transparent 100%);-webkit-mask-image:radial-gradient(ellipse 70% 60% at 50% 45%,black 0%,transparent 100%);pointer-events:none;z-index:0}
  .oc-hero::after{content:'';position:absolute;top:-10%;right:5%;width:500px;height:500px;background:radial-gradient(circle,rgba(204,85,0,0.1) 0%,transparent 70%);border-radius:50%;filter:blur(80px);pointer-events:none}
  .oc-hero-inner{display:flex;align-items:center;justify-content:center;gap:60px;max-width:1200px;margin:0 auto;position:relative;z-index:2;flex-wrap:wrap}
  .oc-hero-content{flex:1 1 480px;min-width:320px}
  .oc-hero-visual{flex:0 0 auto;width:420px;height:340px;position:relative}
  .oc-eyebrow{display:inline-flex;align-items:center;gap:10px;padding:10px 24px;background:rgba(204,85,0,0.08)!important;border:1px solid rgba(204,85,0,0.25)!important;border-radius:100px;color:#CC5500!important;font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif!important;font-size:12px!important;font-weight:700!important;letter-spacing:2px;text-transform:uppercase;margin-bottom:32px}
  .oc-h1{font-size:clamp(42px,6vw,72px)!important;line-height:1.05!important;margin-bottom:24px!important;letter-spacing:-0.03em;font-weight:900!important;color:#F0F4FA!important}
  .oc-h1 span{color:#CC5500!important;-webkit-text-fill-color:#CC5500!important}
  .oc-hero-sub{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif!important;font-size:18px!important;line-height:1.65;color:rgba(210,225,245,0.55)!important;max-width:600px;margin:0 0 36px;font-weight:300}

  /* Sparkle Button */
  .oc-btn{--border_radius:9999px;cursor:pointer;position:relative;display:inline-flex;align-items:center;gap:.5rem;padding:1rem 2rem;background-color:transparent;border:none;border-radius:var(--border_radius);text-decoration:none;transition:transform .3s}
  .oc-btn::before{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:100%;background-color:hsla(0 0% 12%/1);border-radius:var(--border_radius);box-shadow:inset 0 .5px hsl(0,0%,100%),inset 0 -1px 2px 0 hsl(0,0%,0%),0px 4px 10px -4px hsla(0 0% 0%/1);transition:all .3s;z-index:0}
  .oc-btn:hover::before{box-shadow:inset 0 .5px hsl(0,0%,100%),inset 0 -1px 2px 0 hsl(0,0%,0%),0 0 0 .375rem hsla(20,100%,40%,0.75)}
  .oc-btn::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:100%;background-color:hsla(20,100%,40%,0.75);background-image:radial-gradient(at 51% 89%,hsla(20,100%,40%,1) 0px,transparent 50%),radial-gradient(at 100% 100%,hsla(20,100%,35%,1) 0px,transparent 50%),radial-gradient(at 22% 91%,hsla(20,100%,35%,1) 0px,transparent 50%);background-position:top;opacity:0;border-radius:var(--border_radius);transition:opacity .3s;z-index:2}
  .oc-btn:hover::after{opacity:1}
  .oc-btn .dots_border{overflow:hidden;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:calc(100% + 2px);height:calc(100% + 2px);background-color:transparent;border-radius:var(--border_radius);z-index:-10}
  .oc-btn .dots_border::before{content:"";position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);width:100%;height:2rem;background-color:white;mask:linear-gradient(transparent 0%,white 120%);animation:ocRotate 2s linear infinite}
  @keyframes ocRotate{to{transform:rotate(360deg)}}
  .oc-btn .sparkle{position:relative;z-index:10;width:1.75rem}
  .oc-btn .sparkle .path{fill:currentColor;stroke:currentColor;transform-origin:center;color:hsl(0,0%,100%)}
  .oc-btn:hover .sparkle .path{animation:ocPathAnim 1.5s linear .5s infinite}
  @keyframes ocPathAnim{0%,34%,71%,100%{transform:scale(1)}17%{transform:scale(1.2)}49%{transform:scale(1.2)}83%{transform:scale(1.2)}}
  .oc-btn-text{position:relative;z-index:10;background-image:linear-gradient(90deg,hsla(0 0% 100%/1) 0%,hsla(0 0% 100%/0) 120%);background-clip:text;-webkit-background-clip:text;font-size:1rem;color:transparent;font-weight:600;font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif!important}
  .oc-btn:hover .oc-btn-text{background-image:linear-gradient(90deg,hsla(0 0% 100%/1) 0%,hsla(0 0% 100%/1) 120%)}

  /* ===== ORG CHART VISUAL ===== */
  .oc-org-svg{width:100%;height:100%}
  .oc-org-line{stroke:rgba(204,85,0,0.3);stroke-width:2;fill:none;stroke-dasharray:200;stroke-dashoffset:200;animation:ocDrawLine 2s ease forwards}
  .oc-org-line:nth-child(2){animation-delay:0.2s}
  .oc-org-line:nth-child(3){animation-delay:0.4s}
  .oc-org-line:nth-child(4){animation-delay:0.6s}
  .oc-org-line:nth-child(5){animation-delay:0.8s}
  @keyframes ocDrawLine{to{stroke-dashoffset:0}}
  .oc-org-node{fill:#0B1D3A;stroke:#CC5500;stroke-width:2;opacity:0;animation:ocNodeIn .5s ease forwards}
  .oc-org-node:nth-of-type(6){animation-delay:0.3s}
  .oc-org-node:nth-of-type(7){animation-delay:0.5s}
  .oc-org-node:nth-of-type(8){animation-delay:0.7s}
  .oc-org-node:nth-of-type(9){animation-delay:0.9s}
  .oc-org-node:nth-of-type(10){animation-delay:1.1s}
  .oc-org-node:nth-of-type(11){animation-delay:1.3s}
  @keyframes ocNodeIn{to{opacity:1}}
  .oc-org-glow{fill:none;stroke:#CC5500;stroke-width:3;opacity:0;filter:url(#ocglow);animation:ocPulse 3s ease-in-out infinite}
  .oc-org-glow:nth-of-type(12){animation-delay:0s}
  .oc-org-glow:nth-of-type(13){animation-delay:0.6s}
  .oc-org-glow:nth-of-type(14){animation-delay:1.2s}
  .oc-org-glow:nth-of-type(15){animation-delay:1.8s}
  .oc-org-glow:nth-of-type(16){animation-delay:2.4s}
  @keyframes ocPulse{0%,100%{opacity:0}30%,70%{opacity:0.7}50%{opacity:1}}
  .oc-org-label{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:10px;font-weight:700;fill:rgba(210,225,245,0.7);text-anchor:middle;opacity:0;animation:ocNodeIn .5s ease forwards}
  .oc-org-top-label{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:13px;font-weight:900;fill:#CC5500;text-anchor:middle;opacity:0;animation:ocNodeIn .5s ease forwards;animation-delay:0.3s}

  /* ===== FRACTIONAL MODEL ===== */
  .oc-section{max-width:1200px;margin:0 auto;padding:100px 40px}
  .oc-section-header{text-align:center;margin-bottom:60px}
  .oc-badge{display:inline-block;padding:8px 20px;background:rgba(204,85,0,0.08)!important;border:1px solid rgba(204,85,0,0.2)!important;border-radius:100px;font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif!important;font-size:12px!important;font-weight:700!important;color:#CC5500!important;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:20px}
  .oc-section-title{font-size:clamp(36px,5vw,56px)!important;line-height:1.08!important;margin-bottom:20px!important;font-weight:900!important;letter-spacing:-0.03em;color:#F0F4FA!important}
  .oc-highlight{color:#CC5500!important;-webkit-text-fill-color:#CC5500!important}
  .oc-section-desc{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif!important;font-size:18px!important;line-height:1.7;color:rgba(210,225,245,0.55)!important;max-width:700px;margin:0 auto;font-weight:300}

  .oc-compare{display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-top:40px}
  .oc-compare-card{position:relative;padding:40px 32px;border-radius:20px;backdrop-filter:blur(16px);background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);transition:all .3s}
  .oc-compare-card:hover{transform:translateY(-4px)}
  .oc-compare-card.oc-orange{border-color:rgba(204,85,0,0.35);box-shadow:0 0 32px rgba(204,85,0,0.08)}
  .oc-compare-card h3{font-size:24px!important;font-weight:800!important;margin-bottom:24px!important;color:#F0F4FA!important}
  .oc-compare-card.oc-orange h3{color:#CC5500!important;-webkit-text-fill-color:#CC5500!important}
  .oc-compare-item{display:flex;align-items:flex-start;gap:12px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.04);font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:15px;line-height:1.6;color:rgba(210,225,245,0.55)}
  .oc-compare-item:last-child{border-bottom:none}
  .oc-compare-icon{flex-shrink:0;width:24px;height:24px;display:flex;align-items:center;justify-content:center;margin-top:2px;font-size:14px}

  /* ===== ROLES ===== */
  .oc-roles-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:20px;margin-top:40px}
  .oc-role-card{position:relative;padding:32px 24px;border-radius:20px;backdrop-filter:blur(16px);background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);text-align:center;transition:all .3s}
  .oc-role-card:hover{transform:translateY(-4px);border-color:rgba(204,85,0,0.35);background:rgba(204,85,0,0.04);box-shadow:0 12px 32px rgba(204,85,0,0.1)}
  .oc-role-emoji{font-size:36px;margin-bottom:16px;display:block}
  .oc-role-card h3{font-size:18px!important;font-weight:800!important;margin-bottom:10px!important;color:#F0F4FA!important}
  .oc-role-card p{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif!important;font-size:14px!important;line-height:1.6;color:rgba(210,225,245,0.55)!important}

  /* ===== CUSTOM AI ENGINEERING ===== */
  .oc-ai-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;margin-top:40px}
  .oc-ai-card{position:relative;background:rgba(255,255,255,0.03)!important;border:1px solid rgba(255,255,255,0.06)!important;border-radius:20px;padding:32px;transition:all .3s;backdrop-filter:blur(12px)}
  .oc-ai-card:hover{transform:translateY(-4px);border-color:rgba(204,85,0,0.35)!important;background:rgba(204,85,0,0.04)!important;box-shadow:0 12px 32px rgba(204,85,0,0.1)}
  .oc-ai-card .oc-card-accent{position:absolute;top:-1px;left:-1px;right:-1px;height:4px;background:linear-gradient(90deg,#CC5500,#E8762B)!important;border-radius:20px 20px 0 0;opacity:0;transition:opacity .3s}
  .oc-ai-card:hover .oc-card-accent{opacity:1}
  .oc-ai-icon{width:56px;height:56px;border-radius:14px;background:rgba(204,85,0,0.08);border:1px solid rgba(204,85,0,0.2);display:flex;align-items:center;justify-content:center;margin-bottom:20px;transition:transform .3s}
  .oc-ai-card:hover .oc-ai-icon{transform:scale(1.1)}
  .oc-ai-icon svg{width:26px;height:26px;stroke:#CC5500;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
  .oc-ai-card h3{font-size:20px!important;font-weight:800!important;margin-bottom:10px!important;color:#F0F4FA!important}
  .oc-ai-card p{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif!important;font-size:14px!important;line-height:1.7;color:rgba(210,225,245,0.55)!important}

  /* ===== BUILD FLOW ===== */
  .oc-build-flow{max-width:1100px;margin:0 auto;padding:70px 40px;display:flex;align-items:center;justify-content:center}
  .oc-flow-node{text-align:center;flex:0 0 auto}
  .oc-flow-icon{width:76px;height:76px;border-radius:18px;display:flex;align-items:center;justify-content:center;margin:0 auto 10px}
  .oc-flow-icon svg{width:32px;height:32px;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
  .oc-flow-icon.amber{background:rgba(204,85,0,0.1);border:2px solid rgba(204,85,0,0.3)}.oc-flow-icon.amber svg{stroke:#CC5500}
  .oc-flow-icon.dark{background:rgba(255,255,255,0.03);border:2px solid rgba(255,255,255,0.08)}.oc-flow-icon.dark svg{stroke:var(--text-secondary)}
  .oc-flow-label{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif!important;font-size:12px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px}
  .oc-flow-connector{flex:1;height:2px;background:rgba(204,85,0,0.15);position:relative;min-width:30px;max-width:100px}
  .oc-flow-connector::after{content:'';position:absolute;top:-3px;width:8px;height:8px;background:#CC5500;border-radius:50%;animation:ocFlowDot 2.5s ease-in-out infinite;box-shadow:0 0 12px rgba(204,85,0,0.5)}
  .oc-flow-connector:nth-of-type(2)::after{animation-delay:0s}.oc-flow-connector:nth-of-type(4)::after{animation-delay:.5s}.oc-flow-connector:nth-of-type(6)::after{animation-delay:1s}.oc-flow-connector:nth-of-type(8)::after{animation-delay:1.5s}
  @keyframes ocFlowDot{0%{left:0;opacity:0}10%{opacity:1}90%{opacity:1}100%{left:calc(100% - 8px);opacity:0}}

  /* ===== PRICING ===== */
  .oc-pricing{max-width:1100px;margin:0 auto;padding:80px 40px 40px}
  .oc-pricing-title{text-align:center;font-size:clamp(32px,5vw,48px)!important;font-weight:900!important;letter-spacing:-0.03em;color:#F0F4FA!important;margin-bottom:12px}
  .oc-pricing-title span{color:#CC5500}
  .oc-pricing-sub{text-align:center;font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif!important;font-size:17px;color:rgba(210,225,245,0.5);margin-bottom:48px;max-width:600px;margin-left:auto;margin-right:auto}
  .oc-tiers{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
  .oc-tier{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:36px 28px;position:relative;transition:all .3s;display:flex;flex-direction:column}
  .oc-tier:hover{border-color:rgba(204,85,0,0.3);transform:translateY(-4px)}
  .oc-tier.featured{border-color:rgba(204,85,0,0.4);background:rgba(204,85,0,0.04)}
  .oc-tier.featured::before{content:'Most Popular';position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#CC5500,#E2725B);color:white;font-size:11px;font-weight:700;padding:4px 16px;border-radius:100px;letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap}
  .oc-tier-name{font-size:20px!important;font-weight:800!important;color:#F0F4FA!important;margin-bottom:6px}
  .oc-tier-desc{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif!important;font-size:13px;color:rgba(210,225,245,0.45);margin-bottom:20px;line-height:1.5}
  .oc-tier-price{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif!important;font-size:32px;font-weight:900;color:#CC5500;margin-bottom:4px}
  .oc-tier-price span{font-size:15px;color:rgba(210,225,245,0.4);font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-weight:400}
  .oc-tier-note{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif!important;font-size:12px;color:rgba(210,225,245,0.35);margin-bottom:20px}
  .oc-tier ul{list-style:none;padding:0;margin:0 0 24px;flex:1}
  .oc-tier li{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif!important;font-size:13px;color:rgba(210,225,245,0.6);padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04);line-height:1.5}
  .oc-tier li::before{content:'✓ ';color:#CC5500;font-weight:700}
  .oc-tier-btn{display:block;text-align:center;padding:12px;border-radius:12px;font-size:14px;font-weight:700;text-decoration:none;transition:all .3s;border:1px solid rgba(204,85,0,0.3);color:#CC5500;background:transparent}
  .oc-tier-btn:hover{background:rgba(204,85,0,0.08);border-color:#CC5500}
  .oc-tier-btn.primary{background:linear-gradient(135deg,#CC5500,#E2725B);color:white;border:none}
  .oc-tier-btn.primary:hover{opacity:0.9;transform:translateY(-1px)}

  /* ===== CTA ===== */
  .oc-cta{max-width:900px;margin:0 auto;padding:120px 40px 100px;text-align:center}
  .oc-cta-title{font-size:clamp(36px,5vw,56px)!important;line-height:1.08;margin-bottom:24px!important;font-weight:900!important;letter-spacing:-0.03em;color:#F0F4FA!important}
  .oc-cta-desc{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif!important;font-size:18px!important;line-height:1.7;color:rgba(210,225,245,0.55)!important;margin-bottom:40px;max-width:600px;margin-left:auto;margin-right:auto;font-weight:300}

  /* ===== STATS ===== */
  .oc-stats{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:repeat(4,1fr);gap:20px;border-top:1px solid rgba(204,85,0,0.2);border-bottom:1px solid rgba(204,85,0,0.2)}
  .oc-stat{text-align:center;padding:28px 16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:16px;transition:all .3s;backdrop-filter:blur(12px)}
  .oc-stat:hover{border-color:rgba(204,85,0,0.35);background:rgba(204,85,0,0.06);transform:translateY(-2px)}
  .oc-stat-val{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif!important;font-size:36px!important;font-weight:900!important;color:#CC5500!important;-webkit-text-fill-color:#CC5500!important;line-height:1;margin-bottom:8px;display:block}
  .oc-stat-label{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif!important;font-size:11px!important;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:1.5px;display:block}

  /* ===== RESPONSIVE ===== */
  @media(max-width:1024px){.oc-roles-grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:768px){
    .oc-hero{padding:100px 20px 60px;min-height:70vh}
    .oc-hero-inner{flex-direction:column;text-align:center}
    .oc-hero-visual{width:300px;height:260px;margin:0 auto}
    .oc-h1{font-size:36px!important}
    .oc-compare{grid-template-columns:1fr}
    .oc-roles-grid{grid-template-columns:1fr}
    .oc-ai-grid{grid-template-columns:1fr}
    .oc-stats{grid-template-columns:repeat(2,1fr);gap:16px;padding:60px 20px}
    .oc-build-flow{flex-wrap:wrap;gap:8px;padding:40px 20px}.oc-flow-connector{display:none}.oc-flow-node{flex:0 0 calc(50% - 8px)}
    .oc-section{padding:60px 20px}
    .oc-cta{padding:80px 20px}
    .oc-pricing{padding:60px 20px 20px}
    .oc-tiers{grid-template-columns:1fr}
  }
</style>

<!-- HERO -->
<section class="oc-hero">
  <div class="oc-hero-inner">
    <div class="oc-hero-content">
      <div class="oc-eyebrow">EXECUTIVE AI LEADERSHIP</div>
      <h1 class="oc-h1">Your Fractional <span>C-Suite</span>, Powered by AI</h1>
      <p class="oc-hero-sub">Executive-level strategy meets hands-on AI engineering. We embed as your CTO, CEO, CMO, COO, or CIO &mdash; and build the systems to match.</p>
      <div style="display:flex;gap:18px;flex-wrap:wrap">
        <a href="#contact" data-lead-source="orenconsulting" class="oc-btn" aria-label="Talk to a strategist about OrenConsulting">
          <div class="dots_border"></div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle"><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"></path></svg>
          <span class="oc-btn-text">Talk to a Strategist</span>
        </a>
      </div>
    </div>
    <div class="oc-hero-visual">
      <svg class="oc-org-svg" viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg">
        <defs><filter id="ocglow"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
        <!-- Lines from top node to 5 role nodes -->
        <line class="oc-org-line" x1="210" y1="70" x2="50" y2="220"/>
        <line class="oc-org-line" x1="210" y1="70" x2="130" y2="220"/>
        <line class="oc-org-line" x1="210" y1="70" x2="210" y2="220"/>
        <line class="oc-org-line" x1="210" y1="70" x2="290" y2="220"/>
        <line class="oc-org-line" x1="210" y1="70" x2="370" y2="220"/>
        <!-- Top node -->
        <rect class="oc-org-node" x="170" y="35" width="80" height="36" rx="8"/>
        <!-- 5 role nodes -->
        <rect class="oc-org-node" x="20" y="205" width="60" height="32" rx="6"/>
        <rect class="oc-org-node" x="100" y="205" width="60" height="32" rx="6"/>
        <rect class="oc-org-node" x="180" y="205" width="60" height="32" rx="6"/>
        <rect class="oc-org-node" x="260" y="205" width="60" height="32" rx="6"/>
        <rect class="oc-org-node" x="340" y="205" width="60" height="32" rx="6"/>
        <!-- Glow on role nodes -->
        <circle class="oc-org-glow" cx="50" cy="221" r="22"/>
        <circle class="oc-org-glow" cx="130" cy="221" r="22"/>
        <circle class="oc-org-glow" cx="210" cy="221" r="22"/>
        <circle class="oc-org-glow" cx="290" cy="221" r="22"/>
        <circle class="oc-org-glow" cx="370" cy="221" r="22"/>
        <!-- Labels -->
        <text class="oc-org-top-label" x="210" y="58" style="animation-delay:0.3s">OrenGen</text>
        <text class="oc-org-label" x="50" y="260" style="animation-delay:0.5s">CTO</text>
        <text class="oc-org-label" x="130" y="260" style="animation-delay:0.7s">CEO</text>
        <text class="oc-org-label" x="210" y="260" style="animation-delay:0.9s">CMO</text>
        <text class="oc-org-label" x="290" y="260" style="animation-delay:1.1s">COO</text>
        <text class="oc-org-label" x="370" y="260" style="animation-delay:1.3s">CIO</text>
      </svg>
    </div>
  </div>
</section>

<!-- THE FRACTIONAL MODEL -->
<section class="oc-section">
  <div class="oc-section-header">
    <div class="oc-badge">THE FRACTIONAL MODEL</div>
    <h2 class="oc-section-title">Full-Time Cost vs. <span class="oc-highlight">Fractional Value</span></h2>
    <p class="oc-section-desc">Why pay full-time prices when you can get executive-level strategy at a fraction of the cost?</p>
  </div>
  <div class="oc-compare">
    <div class="oc-compare-card">
      <h3>Full-Time Executive</h3>
      <div class="oc-compare-item"><span class="oc-compare-icon">💰</span><span>$350K &ndash; $600K / year salary + benefits</span></div>
      <div class="oc-compare-item"><span class="oc-compare-icon">⏳</span><span>6-month executive search process</span></div>
      <div class="oc-compare-item"><span class="oc-compare-icon">📉</span><span>Equity dilution required</span></div>
      <div class="oc-compare-item"><span class="oc-compare-icon">⚠️</span><span>Severance risk &amp; golden parachutes</span></div>
    </div>
    <div class="oc-compare-card oc-orange">
      <h3>OrenGen Fractional</h3>
      <div class="oc-compare-item"><span class="oc-compare-icon">🔥</span><span>$8K &ndash; $25K / month, all-inclusive</span></div>
      <div class="oc-compare-item"><span class="oc-compare-icon">⚡</span><span>Deploy in 2 weeks</span></div>
      <div class="oc-compare-item"><span class="oc-compare-icon">🛡️</span><span>Zero equity dilution</span></div>
      <div class="oc-compare-item"><span class="oc-compare-icon">✅</span><span>Month-to-month, cancel anytime</span></div>
    </div>
  </div>
</section>

<!-- ROLES WE FILL -->
<section class="oc-section">
  <div class="oc-section-header">
    <div class="oc-badge">ROLES WE FILL</div>
    <h2 class="oc-section-title">Your <span class="oc-highlight">Executive Team</span>, On Demand</h2>
    <p class="oc-section-desc">Plug in the leadership you need, exactly when you need it.</p>
  </div>
  <div class="oc-roles-grid">
    <div class="oc-role-card"><span class="oc-role-emoji">🧠</span><h3>Fractional CTO</h3><p>AI architecture, tech strategy, engineering team building, system design</p></div>
    <div class="oc-role-card"><span class="oc-role-emoji">📊</span><h3>Fractional CEO</h3><p>Growth strategy, investor relations, board management, operational design</p></div>
    <div class="oc-role-card"><span class="oc-role-emoji">📢</span><h3>Fractional CMO</h3><p>Brand strategy, demand generation, AI-powered marketing, content systems</p></div>
    <div class="oc-role-card"><span class="oc-role-emoji">⚙️</span><h3>Fractional COO</h3><p>Process optimization, automation deployment, scaling operations, team efficiency</p></div>
    <div class="oc-role-card"><span class="oc-role-emoji">🔒</span><h3>Fractional CIO</h3><p>Data strategy, security architecture, infrastructure, compliance</p></div>
  </div>
</section>

<!-- CUSTOM AI ENGINEERING -->
<section class="oc-section">
  <div class="oc-section-header">
    <div class="oc-badge">CUSTOM AI ENGINEERING</div>
    <h2 class="oc-section-title">Beyond Consulting &mdash; <span class="oc-highlight">We Build.</span></h2>
    <p class="oc-section-desc">We don't just advise. We architect, engineer, and deploy production-grade AI systems tailored to your business.</p>
  </div>
  <div class="oc-ai-grid">
    <div class="oc-ai-card"><span class="oc-card-accent"></span><div class="oc-ai-icon"><svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div><h3>API Integrations</h3><p>Connect any system, any platform, any data source into a unified AI-powered ecosystem.</p></div>
    <div class="oc-ai-card"><span class="oc-card-accent"></span><div class="oc-ai-icon"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/></svg></div><h3>Custom AI Models</h3><p>Purpose-built models trained on your data, your rules, your competitive advantage.</p></div>
    <div class="oc-ai-card"><span class="oc-card-accent"></span><div class="oc-ai-icon"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div><h3>Enterprise Deployments</h3><p>Scalable, secure, production-ready AI infrastructure designed for enterprise workloads.</p></div>
    <div class="oc-ai-card"><span class="oc-card-accent"></span><div class="oc-ai-icon"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><h3>White-Label Solutions</h3><p>AI products you can rebrand and sell as your own — fully customized, fully yours.</p></div>
  </div>
</section>

<!-- BUILD FLOW -->
<section class="oc-build-flow">
  <div class="oc-flow-node"><div class="oc-flow-icon amber"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><div class="oc-flow-label">Discovery</div></div>
  <div class="oc-flow-connector"></div>
  <div class="oc-flow-node"><div class="oc-flow-icon dark"><svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div><div class="oc-flow-label">Architecture</div></div>
  <div class="oc-flow-connector"></div>
  <div class="oc-flow-node"><div class="oc-flow-icon amber"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div><div class="oc-flow-label">Build</div></div>
  <div class="oc-flow-connector"></div>
  <div class="oc-flow-node"><div class="oc-flow-icon dark"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div class="oc-flow-label">Deploy</div></div>
  <div class="oc-flow-connector"></div>
  <div class="oc-flow-node"><div class="oc-flow-icon amber"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div><div class="oc-flow-label">Optimize</div></div>
</section>

<!-- PRICING -->
<section class="oc-pricing">
  <h2 class="oc-pricing-title">Fractional C-Suite <span>Pricing</span></h2>
  <p class="oc-pricing-sub">Executive-level leadership at a fraction of the cost. Deploy in 2 weeks, cancel anytime.</p>
  <div class="oc-tiers">
    <div class="oc-tier">
      <div class="oc-tier-name">Standard</div>
      <div class="oc-tier-desc">1 fractional role, strategic advisory &amp; execution.</div>
      <div class="oc-tier-price">$8,000 <span>/mo</span></div>
      <div class="oc-tier-note">Annual: $80,000/yr (save 17%)</div>
      <ul>
        <li>1 Fractional C-Suite role</li>
        <li>10–15 hours per week</li>
        <li>Strategic advisory &amp; planning</li>
        <li>AI systems architecture</li>
        <li>Monthly reporting</li>
        <li>Deploy in 2 weeks</li>
      </ul>
      <a href="https://calendly.com/orengenio/30min" class="oc-tier-btn" target="_blank" rel="noopener">Book a Call</a>
    </div>
    <div class="oc-tier featured">
      <div class="oc-tier-name">Professional</div>
      <div class="oc-tier-desc">1–2 roles with deeper integration into your team.</div>
      <div class="oc-tier-price">$15,000 <span>/mo</span></div>
      <div class="oc-tier-note">Annual: $150,000/yr (save 17%)</div>
      <ul>
        <li>1–2 Fractional C-Suite roles</li>
        <li>20–25 hours per week</li>
        <li>Team integration &amp; leadership</li>
        <li>AI implementation &amp; management</li>
        <li>Bi-weekly strategy sessions</li>
        <li>Priority support</li>
      </ul>
      <a href="https://calendly.com/orengenio/30min" class="oc-tier-btn primary" target="_blank" rel="noopener">Book a Call</a>
    </div>
    <div class="oc-tier">
      <div class="oc-tier-name">Premium</div>
      <div class="oc-tier-desc">Full C-suite access with dedicated leadership.</div>
      <div class="oc-tier-price">$25,000 <span>/mo</span></div>
      <div class="oc-tier-note">Annual: $250,000/yr (save 17%)</div>
      <ul>
        <li>Full C-Suite access</li>
        <li>Dedicated executive leadership</li>
        <li>Enterprise-scale AI strategy</li>
        <li>Board &amp; investor support</li>
        <li>Weekly strategy sessions</li>
        <li>Dedicated success manager</li>
      </ul>
      <a href="https://calendly.com/orengenio/30min" class="oc-tier-btn" target="_blank" rel="noopener">Book a Call</a>
    </div>
    <div class="oc-tier" style="border-color:rgba(204,85,0,0.15);background:rgba(15,40,71,0.3)">
      <div class="oc-tier-name">Enterprise</div>
      <div class="oc-tier-desc">Custom-scoped executive AI leadership for complex organizations.</div>
      <div class="oc-tier-price">Custom</div>
      <div class="oc-tier-note">Scoped to your organization</div>
      <ul>
        <li>Multi-executive deployment</li>
        <li>Custom AI engineering team</li>
        <li>Full organizational transformation</li>
        <li>White-label &amp; IP ownership</li>
        <li>SLA &amp; enterprise agreements</li>
        <li>White-glove onboarding</li>
      </ul>
      <a href="https://calendly.com/orengenio/30min" class="oc-tier-btn" target="_blank" rel="noopener">Book a Strategy Call</a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="oc-cta">
  <h2 class="oc-cta-title">Ready for Executive-Level <span class="oc-highlight">AI Leadership?</span></h2>
  <p class="oc-cta-desc">Stop settling for generic consultants. Get a fractional executive who builds, not just advises.</p>
  <div style="display:flex;gap:18px;flex-wrap:wrap;justify-content:center">
    <a href="https://calendly.com/orengenio/30min" class="oc-btn" target="_blank" rel="noopener">
      <div class="dots_border"></div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle"><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"></path></svg>
      <span class="oc-btn-text">Book a Strategy Call</span>
    </a>
  </div>
</section>

<!-- STATS BAR -->
<section class="oc-stats">
  <div class="oc-stat"><span class="oc-stat-val">$180K</span><span class="oc-stat-label">Avg. annual cost (vs $450K full-time)</span></div>
  <div class="oc-stat"><span class="oc-stat-val">2 weeks</span><span class="oc-stat-label">Time to deploy</span></div>
  <div class="oc-stat"><span class="oc-stat-val">Zero</span><span class="oc-stat-label">Equity dilution</span></div>
  <div class="oc-stat"><span class="oc-stat-val">Month-to-month</span><span class="oc-stat-label">No long-term contracts</span></div>
</section>
` }} />
    </>
  );
}
