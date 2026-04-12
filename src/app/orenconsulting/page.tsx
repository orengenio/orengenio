import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "OrenConsulting — Fractional C-Suite + Custom AI Engineering | OrenGen",
  description: "Your fractional CTO, CEO, CMO, COO, or CIO — powered by AI. Executive-level strategy meets hands-on AI engineering. No full-time cost, full-time results.",
  alternates: { canonical: "https://orengen.io/orenconsulting" },
}

export default function Page() {
  return (
    <div className="pt-24 pb-12" dangerouslySetInnerHTML={{ __html: `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;800;900&family=Roboto:wght@300;400;500;600;700&display=swap');
  :root{--primary:#CC5500;--primary-light:#E8762B;--primary-dark:#B34A00;--bg-dark:#0B1D3A;--bg-card:rgba(255,255,255,0.03);--border:rgba(255,255,255,0.06);--text:#F0F4FA;--text-secondary:rgba(210,225,245,0.6);--text-muted:rgba(210,225,245,0.4)}
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{background:var(--bg-dark)!important;color:var(--text)!important;font-family:'Roboto','Inter',sans-serif!important;overflow-x:hidden}
  h1,h2,h3,h4,h5,h6{font-family:'Playfair Display',serif!important}

  /* ===== HERO ===== */
  .oc-hero{position:relative;min-height:90vh;display:flex;align-items:center;justify-content:center;padding:120px 40px 80px;overflow:hidden;background:linear-gradient(165deg,#081628 0%,#0B1D3A 30%,#0F2847 60%,#0D2240 100%)}
  .oc-hero::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle,rgba(204,85,0,0.1) 1px,transparent 1px);background-size:32px 32px;mask-image:radial-gradient(ellipse 70% 60% at 50% 45%,black 0%,transparent 100%);-webkit-mask-image:radial-gradient(ellipse 70% 60% at 50% 45%,black 0%,transparent 100%);pointer-events:none;z-index:0}
  .oc-hero::after{content:'';position:absolute;top:-10%;right:5%;width:500px;height:500px;background:radial-gradient(circle,rgba(204,85,0,0.1) 0%,transparent 70%);border-radius:50%;filter:blur(80px);pointer-events:none}
  .oc-hero-inner{display:flex;align-items:center;justify-content:center;gap:60px;max-width:1200px;margin:0 auto;position:relative;z-index:2;flex-wrap:wrap}
  .oc-hero-content{flex:1 1 480px;min-width:320px}
  .oc-hero-visual{flex:0 0 auto;width:460px;height:460px;position:relative}
  .oc-eyebrow{display:inline-flex;align-items:center;gap:10px;padding:10px 24px;background:rgba(204,85,0,0.08)!important;border:1px solid rgba(204,85,0,0.25)!important;border-radius:100px;color:#CC5500!important;font-family:'Roboto',sans-serif!important;font-size:12px!important;font-weight:700!important;letter-spacing:2px;text-transform:uppercase;margin-bottom:32px}
  .oc-h1{font-size:clamp(42px,6vw,72px)!important;line-height:1.05!important;margin-bottom:24px!important;letter-spacing:-0.03em;font-weight:900!important;color:#F0F4FA!important}
  .oc-h1 span{color:#CC5500!important;-webkit-text-fill-color:#CC5500!important}
  .oc-hero-sub{font-family:'Roboto',sans-serif!important;font-size:18px!important;line-height:1.65;color:rgba(210,225,245,0.55)!important;max-width:600px;margin:0 0 36px;font-weight:300}

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
  .oc-btn-text{position:relative;z-index:10;background-image:linear-gradient(90deg,hsla(0 0% 100%/1) 0%,hsla(0 0% 100%/0) 120%);background-clip:text;-webkit-background-clip:text;font-size:1rem;color:transparent;font-weight:600;font-family:'Playfair Display',serif!important}
  .oc-btn:hover .oc-btn-text{background-image:linear-gradient(90deg,hsla(0 0% 100%/1) 0%,hsla(0 0% 100%/1) 120%)}

  /* ===== COMMAND HUB VISUAL ===== */
  .oc-hub-svg{width:100%;height:100%;overflow:visible}
  /* Rings */
  .oc-hub-ring-orbit{fill:none;stroke:rgba(204,85,0,0.15);stroke-width:1;stroke-dasharray:4 9}
  .oc-hub-ring-outer{fill:none;stroke:rgba(204,85,0,0.06);stroke-width:1;stroke-dasharray:5 40}
  .oc-hub-ring-inner{fill:none;stroke:rgba(255,255,255,0.06);stroke-width:1}
  .oc-hub-ring-mid{fill:none;stroke:rgba(204,85,0,0.08);stroke-width:1;stroke-dasharray:2 18;transform-origin:250px 250px;animation:ocHubSpin 28s linear infinite}
  /* Scan arcs */
  .oc-hub-scan-arcs{transform-origin:250px 250px;animation:ocHubSpin 12s linear infinite}
  .oc-hub-scan-a{fill:none;stroke:rgba(204,85,0,0.55);stroke-width:2;stroke-linecap:round}
  .oc-hub-scan-b{fill:none;stroke:rgba(204,85,0,0.18);stroke-width:1.5;stroke-linecap:round}
  @keyframes ocHubSpin{to{transform:rotate(360deg)}}
  /* Sector arcs */
  .oc-hub-arc{fill:none;stroke:rgba(204,85,0,0.08);stroke-width:1.5}
  /* Center */
  .oc-hub-center-ring{fill:none;stroke:rgba(204,85,0,0.22);stroke-width:1;animation:ocHubRingPulse 6s ease-in-out infinite}
  .oc-hub-center-hex{fill:rgba(204,85,0,0.07);stroke:#CC5500;stroke-width:1.5;animation:ocHubPulse 4s ease-in-out infinite}
  @keyframes ocHubPulse{0%,100%{stroke-opacity:0.45;fill-opacity:0.04}50%{stroke-opacity:1;fill-opacity:0.1}}
  @keyframes ocHubRingPulse{0%,100%{stroke-opacity:0.12}50%{stroke-opacity:0.4}}
  /* Center labels */
  .oc-hub-center-title{font-family:'Playfair Display',serif;font-size:17px;font-weight:900;fill:#CC5500;text-anchor:middle;dominant-baseline:middle}
  .oc-hub-center-sub{font-family:'Roboto',sans-serif;font-size:8px;font-weight:700;fill:rgba(210,225,245,0.3);text-anchor:middle;dominant-baseline:middle;letter-spacing:2.5px}
  .oc-hub-center-role{font-family:'Playfair Display',serif;font-size:12px;font-weight:700;fill:#F0F4FA;text-anchor:middle;dominant-baseline:middle}
  .oc-hub-center-keys{font-family:'Roboto',sans-serif;font-size:7.5px;font-weight:600;fill:rgba(204,85,0,0.9);text-anchor:middle;dominant-baseline:middle;letter-spacing:1.2px}
  /* Label switching */
  .oc-hub-label-default,.oc-hub-label-cto,.oc-hub-label-ceo,.oc-hub-label-cmo,.oc-hub-label-coo,.oc-hub-label-cio{transition:opacity 0.35s ease}
  .oc-hub-label-cto,.oc-hub-label-ceo,.oc-hub-label-cmo,.oc-hub-label-coo,.oc-hub-label-cio{opacity:0;pointer-events:none}
  .oc-hub-svg:has(.oc-hub-role:hover) .oc-hub-label-default{opacity:0}
  .oc-hub-svg:has(.oc-role-cto:hover) .oc-hub-label-cto{opacity:1}
  .oc-hub-svg:has(.oc-role-ceo:hover) .oc-hub-label-ceo{opacity:1}
  .oc-hub-svg:has(.oc-role-cmo:hover) .oc-hub-label-cmo{opacity:1}
  .oc-hub-svg:has(.oc-role-coo:hover) .oc-hub-label-coo{opacity:1}
  .oc-hub-svg:has(.oc-role-cio:hover) .oc-hub-label-cio{opacity:1}
  /* Connecting lines */
  .oc-hub-line{fill:none;stroke-width:1.5;stroke-dasharray:4 16;animation:ocHubFlow 2.2s linear infinite}
  @keyframes ocHubFlow{to{stroke-dashoffset:-20}}
  .oc-hub-role:hover .oc-hub-line{stroke-width:2;animation-duration:0.9s}
  /* Role nodes */
  .oc-hub-role{cursor:pointer}
  .oc-hub-node{fill:rgba(8,18,38,0.96);stroke:rgba(204,85,0,0.35);stroke-width:1.5;transition:fill 0.3s,stroke 0.3s,stroke-width 0.3s,filter 0.3s}
  .oc-hub-hittarget{fill:transparent;pointer-events:all}
  .oc-hub-role:hover .oc-hub-node{fill:rgba(204,85,0,0.1);stroke:#CC5500;stroke-width:2.5;filter:url(#hubglow)}
  .oc-hub-icon{fill:none;stroke:rgba(204,85,0,0.5);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;pointer-events:none;transition:stroke 0.3s}
  .oc-hub-role:hover .oc-hub-icon{stroke:#CC5500}
  .oc-hub-abbr{font-family:'Roboto',sans-serif;font-size:8px;font-weight:800;fill:rgba(210,225,245,0.5);text-anchor:middle;dominant-baseline:middle;pointer-events:none;letter-spacing:1.5px;transition:fill 0.3s}
  .oc-hub-role:hover .oc-hub-abbr{fill:rgba(210,225,245,0.9)}
  /* Cardinal diamonds */
  .oc-hub-diamond{fill:rgba(204,85,0,0.5);transition:fill 0.3s}
  /* HUD corners */
  .oc-hub-corner{fill:none;stroke:rgba(204,85,0,0.3);stroke-width:2;stroke-linecap:square}
  /* Orbit dots */
  .oc-hub-dot{animation:ocHubDotPulse 3.5s ease-in-out infinite}
  @keyframes ocHubDotPulse{0%,100%{opacity:0.25}50%{opacity:0.75}}

  /* ===== FRACTIONAL MODEL ===== */
  .oc-section{max-width:1200px;margin:0 auto;padding:100px 40px}
  .oc-section-header{text-align:center;margin-bottom:60px}
  .oc-badge{display:inline-block;padding:8px 20px;background:rgba(204,85,0,0.08)!important;border:1px solid rgba(204,85,0,0.2)!important;border-radius:100px;font-family:'Roboto',sans-serif!important;font-size:12px!important;font-weight:700!important;color:#CC5500!important;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:20px}
  .oc-section-title{font-size:clamp(36px,5vw,56px)!important;line-height:1.08!important;margin-bottom:20px!important;font-weight:900!important;letter-spacing:-0.03em;color:#F0F4FA!important}
  .oc-highlight{color:#CC5500!important;-webkit-text-fill-color:#CC5500!important}
  .oc-section-desc{font-family:'Roboto',sans-serif!important;font-size:18px!important;line-height:1.7;color:rgba(210,225,245,0.55)!important;max-width:700px;margin:0 auto;font-weight:300}

  .oc-compare{display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-top:40px}
  .oc-compare-card{position:relative;padding:40px 32px;border-radius:20px;backdrop-filter:blur(16px);background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);transition:all .3s}
  .oc-compare-card:hover{transform:translateY(-4px)}
  .oc-compare-card.oc-orange{border-color:rgba(204,85,0,0.35);box-shadow:0 0 32px rgba(204,85,0,0.08)}
  .oc-compare-card h3{font-size:24px!important;font-weight:800!important;margin-bottom:24px!important;color:#F0F4FA!important}
  .oc-compare-card.oc-orange h3{color:#CC5500!important;-webkit-text-fill-color:#CC5500!important}
  .oc-compare-item{display:flex;align-items:flex-start;gap:12px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.04);font-family:'Roboto',sans-serif;font-size:15px;line-height:1.6;color:rgba(210,225,245,0.55)}
  .oc-compare-item:last-child{border-bottom:none}
  .oc-compare-icon{flex-shrink:0;width:24px;height:24px;display:flex;align-items:center;justify-content:center;margin-top:2px;font-size:14px}

  /* ===== ROLES ===== */
  .oc-roles-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:20px;margin-top:40px}
  .oc-role-card{position:relative;padding:32px 24px;border-radius:20px;backdrop-filter:blur(16px);background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);text-align:center;transition:all .3s}
  .oc-role-card:hover{transform:translateY(-4px);border-color:rgba(204,85,0,0.35);background:rgba(204,85,0,0.04);box-shadow:0 12px 32px rgba(204,85,0,0.1)}
  .oc-role-emoji{font-size:36px;margin-bottom:16px;display:block}
  .oc-role-card h3{font-size:18px!important;font-weight:800!important;margin-bottom:10px!important;color:#F0F4FA!important}
  .oc-role-card p{font-family:'Roboto',sans-serif!important;font-size:14px!important;line-height:1.6;color:rgba(210,225,245,0.55)!important}

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
  .oc-ai-card p{font-family:'Roboto',sans-serif!important;font-size:14px!important;line-height:1.7;color:rgba(210,225,245,0.55)!important}

  /* ===== BUILD FLOW ===== */
  .oc-build-flow{max-width:1100px;margin:0 auto;padding:70px 40px;display:flex;align-items:center;justify-content:center}
  .oc-flow-node{text-align:center;flex:0 0 auto}
  .oc-flow-icon{width:76px;height:76px;border-radius:18px;display:flex;align-items:center;justify-content:center;margin:0 auto 10px}
  .oc-flow-icon svg{width:32px;height:32px;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
  .oc-flow-icon.amber{background:rgba(204,85,0,0.1);border:2px solid rgba(204,85,0,0.3)}.oc-flow-icon.amber svg{stroke:#CC5500}
  .oc-flow-icon.dark{background:rgba(255,255,255,0.03);border:2px solid rgba(255,255,255,0.08)}.oc-flow-icon.dark svg{stroke:var(--text-secondary)}
  .oc-flow-label{font-family:'Roboto',sans-serif!important;font-size:12px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px}
  .oc-flow-connector{flex:1;height:2px;background:rgba(204,85,0,0.15);position:relative;min-width:30px;max-width:100px}
  .oc-flow-connector::after{content:'';position:absolute;top:-3px;width:8px;height:8px;background:#CC5500;border-radius:50%;animation:ocFlowDot 2.5s ease-in-out infinite;box-shadow:0 0 12px rgba(204,85,0,0.5)}
  .oc-flow-connector:nth-of-type(2)::after{animation-delay:0s}.oc-flow-connector:nth-of-type(4)::after{animation-delay:.5s}.oc-flow-connector:nth-of-type(6)::after{animation-delay:1s}.oc-flow-connector:nth-of-type(8)::after{animation-delay:1.5s}
  @keyframes ocFlowDot{0%{left:0;opacity:0}10%{opacity:1}90%{opacity:1}100%{left:calc(100% - 8px);opacity:0}}

  /* ===== CTA ===== */
  .oc-cta{max-width:900px;margin:0 auto;padding:120px 40px 100px;text-align:center}
  .oc-cta-title{font-size:clamp(36px,5vw,56px)!important;line-height:1.08;margin-bottom:24px!important;font-weight:900!important;letter-spacing:-0.03em;color:#F0F4FA!important}
  .oc-cta-desc{font-family:'Roboto',sans-serif!important;font-size:18px!important;line-height:1.7;color:rgba(210,225,245,0.55)!important;margin-bottom:40px;max-width:600px;margin-left:auto;margin-right:auto;font-weight:300}

  /* ===== STATS ===== */
  .oc-stats{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:repeat(4,1fr);gap:20px;border-top:1px solid rgba(204,85,0,0.2);border-bottom:1px solid rgba(204,85,0,0.2)}
  .oc-stat{text-align:center;padding:28px 16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:16px;transition:all .3s;backdrop-filter:blur(12px)}
  .oc-stat:hover{border-color:rgba(204,85,0,0.35);background:rgba(204,85,0,0.06);transform:translateY(-2px)}
  .oc-stat-val{font-family:'Playfair Display',serif!important;font-size:36px!important;font-weight:900!important;color:#CC5500!important;-webkit-text-fill-color:#CC5500!important;line-height:1;margin-bottom:8px;display:block}
  .oc-stat-label{font-family:'Roboto',sans-serif!important;font-size:11px!important;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:1.5px;display:block}

  /* ===== RESPONSIVE ===== */
  @media(max-width:1024px){.oc-roles-grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:768px){
    .oc-hero{padding:100px 20px 60px;min-height:70vh}
    .oc-hero-inner{flex-direction:column;text-align:center}
    .oc-hero-visual{width:300px;height:300px;margin:0 auto}
    .oc-h1{font-size:36px!important}
    .oc-compare{grid-template-columns:1fr}
    .oc-roles-grid{grid-template-columns:1fr}
    .oc-ai-grid{grid-template-columns:1fr}
    .oc-stats{grid-template-columns:repeat(2,1fr);gap:16px;padding:60px 20px}
    .oc-build-flow{flex-wrap:wrap;gap:8px;padding:40px 20px}.oc-flow-connector{display:none}.oc-flow-node{flex:0 0 calc(50% - 8px)}
    .oc-section{padding:60px 20px}
    .oc-cta{padding:80px 20px}
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
        <a href="https://book.orengen.io/coffeechat" class="oc-btn" target="_blank" rel="noopener">
          <div class="dots_border"></div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle"><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"></path></svg>
          <span class="oc-btn-text">Book a Strategy Call</span>
        </a>
      </div>
    </div>
    <div class="oc-hero-visual">
      <svg class="oc-hub-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="hubglow" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="7" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="hubglowsm" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <radialGradient id="hubbg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="rgba(204,85,0,0.1)"/>
            <stop offset="70%" stop-color="rgba(11,29,58,0.3)"/>
            <stop offset="100%" stop-color="rgba(8,18,38,0)"/>
          </radialGradient>
          <!-- Per-line gradients: orange at center, fading outward -->
          <linearGradient id="lg-cto" x1="250" y1="198" x2="250" y2="119" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#CC5500" stop-opacity="0.85"/>
            <stop offset="100%" stop-color="#CC5500" stop-opacity="0.12"/>
          </linearGradient>
          <linearGradient id="lg-ceo" x1="300" y1="234" x2="375" y2="210" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#CC5500" stop-opacity="0.85"/>
            <stop offset="100%" stop-color="#CC5500" stop-opacity="0.12"/>
          </linearGradient>
          <linearGradient id="lg-cmo" x1="281" y1="292" x2="328" y2="357" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#CC5500" stop-opacity="0.85"/>
            <stop offset="100%" stop-color="#CC5500" stop-opacity="0.12"/>
          </linearGradient>
          <linearGradient id="lg-coo" x1="219" y1="292" x2="172" y2="357" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#CC5500" stop-opacity="0.85"/>
            <stop offset="100%" stop-color="#CC5500" stop-opacity="0.12"/>
          </linearGradient>
          <linearGradient id="lg-cio" x1="200" y1="234" x2="125" y2="210" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#CC5500" stop-opacity="0.85"/>
            <stop offset="100%" stop-color="#CC5500" stop-opacity="0.12"/>
          </linearGradient>
        </defs>

        <!-- Background disk -->
        <circle cx="250" cy="250" r="234" fill="rgba(7,16,34,0.75)" stroke="rgba(204,85,0,0.08)" stroke-width="1"/>
        <circle cx="250" cy="250" r="234" fill="url(#hubbg)"/>

        <!-- HUD corner brackets -->
        <path d="M 28 72 L 28 28 L 72 28" class="oc-hub-corner"/>
        <path d="M 472 72 L 472 28 L 428 28" class="oc-hub-corner"/>
        <path d="M 28 428 L 28 472 L 72 472" class="oc-hub-corner"/>
        <path d="M 472 428 L 472 472 L 428 472" class="oc-hub-corner"/>

        <!-- Outer static tick ring -->
        <circle cx="250" cy="250" r="220" class="oc-hub-ring-outer"/>

        <!-- Mid spinning ring -->
        <circle cx="250" cy="250" r="196" class="oc-hub-ring-mid"/>

        <!-- Orbital ring -->
        <circle cx="250" cy="250" r="165" class="oc-hub-ring-orbit"/>

        <!-- Inner ring around center -->
        <circle cx="250" cy="250" r="80" class="oc-hub-ring-inner"/>

        <!-- Sector arc boundaries between nodes -->
        <path d="M 250 85 A 165 165 0 0 1 407 199" class="oc-hub-arc"/>
        <path d="M 407 199 A 165 165 0 0 1 347 383" class="oc-hub-arc"/>
        <path d="M 347 383 A 165 165 0 0 1 153 383" class="oc-hub-arc"/>
        <path d="M 153 383 A 165 165 0 0 1 93 199" class="oc-hub-arc"/>
        <path d="M 93 199 A 165 165 0 0 1 250 85" class="oc-hub-arc"/>

        <!-- Cardinal point diamonds on orbit ring -->
        <polygon class="oc-hub-diamond" points="250,29 254,39 250,49 246,39" filter="url(#hubglowsm)"/>
        <polygon class="oc-hub-diamond" points="451,246 461,250 451,254 441,250" style="opacity:0.35"/>
        <polygon class="oc-hub-diamond" points="250,451 254,461 250,471 246,461" style="opacity:0.35"/>
        <polygon class="oc-hub-diamond" points="39,246 49,250 39,254 29,250" style="opacity:0.35"/>

        <!-- Rotating scan arcs (the key dynamic element) -->
        <g class="oc-hub-scan-arcs">
          <!-- Primary scan arc: 80° sweep on outer ring r=220 -->
          <path d="M 250 30 A 220 220 0 0 1 442 358" class="oc-hub-scan-a"/>
          <!-- Secondary ghost arc: offset 180°, softer -->
          <path d="M 250 470 A 220 220 0 0 1 58 142" class="oc-hub-scan-b"/>
        </g>

        <!-- Orbit position dots -->
        <circle cx="250" cy="85" r="3.5" fill="#CC5500" class="oc-hub-dot" style="animation-delay:0s"/>
        <circle cx="407" cy="199" r="3.5" fill="#CC5500" class="oc-hub-dot" style="animation-delay:0.7s"/>
        <circle cx="347" cy="383" r="3.5" fill="#CC5500" class="oc-hub-dot" style="animation-delay:1.4s"/>
        <circle cx="153" cy="383" r="3.5" fill="#CC5500" class="oc-hub-dot" style="animation-delay:2.1s"/>
        <circle cx="93" cy="199" r="3.5" fill="#CC5500" class="oc-hub-dot" style="animation-delay:2.8s"/>

        <!-- Center glow halo -->
        <circle cx="250" cy="250" r="72" fill="rgba(204,85,0,0.05)" filter="url(#hubglow)"/>

        <!-- Center outer ring (double hex effect) -->
        <polygon class="oc-hub-center-ring" points="303,221 303,279 250,308 197,279 197,221 250,192"/>

        <!-- Center hex (flat-top, r=48) -->
        <polygon class="oc-hub-center-hex" points="292,226 292,274 250,298 208,274 208,226 250,202"/>

        <!-- Center label: default -->
        <g class="oc-hub-label-default">
          <text class="oc-hub-center-title" x="250" y="246">OrenGen</text>
          <text class="oc-hub-center-sub" x="250" y="265">COMMAND HUB</text>
        </g>
        <!-- Center label: CTO -->
        <g class="oc-hub-label-cto">
          <text class="oc-hub-center-role" x="250" y="236">Chief Technology</text>
          <text class="oc-hub-center-role" x="250" y="252">Officer</text>
          <text class="oc-hub-center-keys" x="250" y="268">AI · SYSTEMS · ENGINEERING</text>
        </g>
        <!-- Center label: CEO -->
        <g class="oc-hub-label-ceo">
          <text class="oc-hub-center-role" x="250" y="236">Chief Executive</text>
          <text class="oc-hub-center-role" x="250" y="252">Officer</text>
          <text class="oc-hub-center-keys" x="250" y="268">STRATEGY · VISION · GROWTH</text>
        </g>
        <!-- Center label: CMO -->
        <g class="oc-hub-label-cmo">
          <text class="oc-hub-center-role" x="250" y="236">Chief Marketing</text>
          <text class="oc-hub-center-role" x="250" y="252">Officer</text>
          <text class="oc-hub-center-keys" x="250" y="268">BRAND · GROWTH · DEMAND</text>
        </g>
        <!-- Center label: COO -->
        <g class="oc-hub-label-coo">
          <text class="oc-hub-center-role" x="250" y="236">Chief Operating</text>
          <text class="oc-hub-center-role" x="250" y="252">Officer</text>
          <text class="oc-hub-center-keys" x="250" y="268">PROCESS · TEAMS · SYSTEMS</text>
        </g>
        <!-- Center label: CIO -->
        <g class="oc-hub-label-cio">
          <text class="oc-hub-center-role" x="250" y="236">Chief Information</text>
          <text class="oc-hub-center-role" x="250" y="252">Officer</text>
          <text class="oc-hub-center-keys" x="250" y="268">DATA · SECURITY · DIGITAL</text>
        </g>

        <!-- Role: CTO (top) -->
        <g class="oc-hub-role oc-role-cto">
          <line class="oc-hub-line" x1="250" y1="202" x2="250" y2="119" stroke="url(#lg-cto)" style="animation-delay:0s"/>
          <circle class="oc-hub-hittarget" cx="250" cy="85" r="46"/>
          <polygon class="oc-hub-node" points="279,68 279,102 250,119 221,102 221,68 250,51"/>
          <!-- CTO icon: processor chip -->
          <g transform="translate(250,79)" class="oc-hub-icon">
            <rect x="-6" y="-5" width="12" height="10" rx="1"/>
            <line x1="-2" y1="-8" x2="-2" y2="-5"/><line x1="2" y1="-8" x2="2" y2="-5"/>
            <line x1="-2" y1="5" x2="-2" y2="8"/><line x1="2" y1="5" x2="2" y2="8"/>
            <line x1="-9" y1="-2" x2="-6" y2="-2"/><line x1="-9" y1="2" x2="-6" y2="2"/>
            <line x1="6" y1="-2" x2="9" y2="-2"/><line x1="6" y1="2" x2="9" y2="2"/>
          </g>
          <text class="oc-hub-abbr" x="250" y="96">CTO</text>
        </g>

        <!-- Role: CEO (upper-right) -->
        <g class="oc-hub-role oc-role-ceo">
          <line class="oc-hub-line" x1="300" y1="234" x2="375" y2="210" stroke="url(#lg-ceo)" style="animation-delay:0.44s"/>
          <circle class="oc-hub-hittarget" cx="407" cy="199" r="46"/>
          <polygon class="oc-hub-node" points="436,182 436,216 407,233 378,216 378,182 407,165"/>
          <!-- CEO icon: upward arrow -->
          <g transform="translate(407,192)" class="oc-hub-icon">
            <polyline points="-6,6 0,-6 6,6"/>
            <line x1="0" y1="-6" x2="0" y2="7"/>
          </g>
          <text class="oc-hub-abbr" x="407" y="210">CEO</text>
        </g>

        <!-- Role: CMO (lower-right) -->
        <g class="oc-hub-role oc-role-cmo">
          <line class="oc-hub-line" x1="281" y1="292" x2="328" y2="357" stroke="url(#lg-cmo)" style="animation-delay:0.88s"/>
          <circle class="oc-hub-hittarget" cx="347" cy="383" r="46"/>
          <polygon class="oc-hub-node" points="376,366 376,400 347,417 318,400 318,366 347,349"/>
          <!-- CMO icon: broadcast waves -->
          <g transform="translate(347,376)" class="oc-hub-icon">
            <path d="M -3,6 A 4 4 0 0 1 3,6"/>
            <path d="M -6,3 A 7 7 0 0 1 6,3"/>
            <path d="M -9,0 A 10 10 0 0 1 9,0"/>
          </g>
          <text class="oc-hub-abbr" x="347" y="395">CMO</text>
        </g>

        <!-- Role: COO (lower-left) -->
        <g class="oc-hub-role oc-role-coo">
          <line class="oc-hub-line" x1="219" y1="292" x2="172" y2="357" stroke="url(#lg-coo)" style="animation-delay:1.32s"/>
          <circle class="oc-hub-hittarget" cx="153" cy="383" r="46"/>
          <polygon class="oc-hub-node" points="182,366 182,400 153,417 124,400 124,366 153,349"/>
          <!-- COO icon: settings cross + circle -->
          <g transform="translate(153,376)" class="oc-hub-icon">
            <circle cx="0" cy="0" r="5"/>
            <line x1="0" y1="-9" x2="0" y2="9"/>
            <line x1="-9" y1="0" x2="9" y2="0"/>
          </g>
          <text class="oc-hub-abbr" x="153" y="395">COO</text>
        </g>

        <!-- Role: CIO (upper-left) -->
        <g class="oc-hub-role oc-role-cio">
          <line class="oc-hub-line" x1="200" y1="234" x2="125" y2="210" stroke="url(#lg-cio)" style="animation-delay:1.76s"/>
          <circle class="oc-hub-hittarget" cx="93" cy="199" r="46"/>
          <polygon class="oc-hub-node" points="122,182 122,216 93,233 64,216 64,182 93,165"/>
          <!-- CIO icon: database stack -->
          <g transform="translate(93,192)" class="oc-hub-icon">
            <ellipse cx="0" cy="-4" rx="7" ry="3"/>
            <line x1="-7" y1="-4" x2="-7" y2="4"/>
            <line x1="7" y1="-4" x2="7" y2="4"/>
            <path d="M -7,4 A 7 3 0 0 0 7,4"/>
          </g>
          <text class="oc-hub-abbr" x="93" y="210">CIO</text>
        </g>
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

<!-- CTA -->
<section class="oc-cta">
  <h2 class="oc-cta-title">Ready for Executive-Level <span class="oc-highlight">AI Leadership?</span></h2>
  <p class="oc-cta-desc">Stop settling for generic consultants. Get a fractional executive who builds, not just advises.</p>
  <div style="display:flex;gap:18px;flex-wrap:wrap;justify-content:center">
    <a href="https://book.orengen.io/coffeechat" class="oc-btn" target="_blank" rel="noopener">
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
  );
}
