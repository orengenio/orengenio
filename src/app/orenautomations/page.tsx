import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "OrenAutomations — Workflow Automation Engine | OrenGen Worldwide",
  description: "Visual workflow automation connecting your AI agents, CRM, and business tools. Zero code, infinite scale. Fully managed by OrenGen.",
  alternates: { canonical: "https://orengen.io/orenautomations" },
  openGraph: {
    type: "website",
    url: "https://orengen.io/orenautomations",
    title: "OrenAutomations — Workflow Automation Engine | OrenGen",
    description: "Visual workflow automation connecting your AI agents, CRM, and business tools. Zero code, infinite scale.",
    images: [{ url: "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/JkgbWmauRB7suRUl6bVem2msNPATeMS2h4iWgdcR.png", width: 1200, height: 630, alt: "OrenAutomations Workflow Automation Engine" }],
  },
}

export default function Page() {
  return (
    <div className="pt-24 pb-12" dangerouslySetInnerHTML={{ __html: `
<style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;800;900&family=Roboto:wght@300;400;500;600;700&display=swap');
    :root{--primary:#CC5500;--primary-light:#E8762B;--primary-dark:#B34A00;--accent:#CC5500;--accent-dark:#B34A00;--bg-dark:#0B1D3A;--bg-card:rgba(255,255,255,0.03);--border:rgba(255,255,255,0.06);--text:#F0F4FA;--text-secondary:rgba(210,225,245,0.6);--text-muted:rgba(210,225,245,0.4);--terracotta:#E2725B}
    *{margin:0;padding:0;box-sizing:border-box}
    html,body{background:var(--bg-dark)!important;color:var(--text)!important;font-family:'Roboto','Inter',sans-serif!important;overflow-x:hidden}
    h1,h2,h3,h4,h5,h6{font-family:'Playfair Display',serif!important}

    /* ===== HERO ===== */
    .hero{position:relative;min-height:90vh;display:flex;align-items:center;justify-content:center;padding:120px 40px 80px;overflow:hidden;background:linear-gradient(165deg,#081628 0%,#0B1D3A 30%,#0F2847 60%,#0D2240 100%)}
    .hero::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle,rgba(204,85,0,0.1) 1px,transparent 1px);background-size:32px 32px;mask-image:radial-gradient(ellipse 70% 60% at 50% 45%,black 0%,transparent 100%);-webkit-mask-image:radial-gradient(ellipse 70% 60% at 50% 45%,black 0%,transparent 100%);pointer-events:none;z-index:0}
    .hero::after{content:'';position:absolute;top:-10%;right:5%;width:500px;height:500px;background:radial-gradient(circle,rgba(204,85,0,0.1) 0%,transparent 70%);border-radius:50%;filter:blur(80px);pointer-events:none}
    .hero-inner{display:flex;align-items:center;justify-content:center;gap:60px;max-width:1200px;margin:0 auto;position:relative;z-index:2;flex-wrap:wrap}
    .hero-content{flex:1 1 480px;min-width:320px}
    .hero-visual{flex:0 0 auto;width:480px;height:160px;position:relative;display:flex;align-items:center;justify-content:center}
    .hero-badge{display:inline-flex;align-items:center;gap:10px;padding:10px 24px;background:rgba(204,85,0,0.08)!important;border:1px solid rgba(204,85,0,0.25)!important;border-radius:100px;color:#CC5500!important;font-family:'Roboto',sans-serif!important;font-size:12px!important;font-weight:700!important;letter-spacing:2px;text-transform:uppercase;margin-bottom:32px}
    .hero-badge svg{width:14px;height:14px;stroke:#CC5500;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
    h1{font-size:clamp(42px,7vw,84px)!important;line-height:1.02!important;margin-bottom:24px!important;letter-spacing:-0.03em;font-weight:900!important;color:#F0F4FA!important}
    h1 span{color:#CC5500!important;-webkit-text-fill-color:#CC5500!important}
    .hero-text{font-family:'Roboto',sans-serif!important;font-size:18px!important;line-height:1.65;color:rgba(210,225,245,0.55)!important;max-width:600px;margin:0 0 36px;font-weight:300}
    .actions{display:flex;gap:18px;flex-wrap:wrap}

    /* Sparkle Button */
    .button{--black-700:hsla(0 0% 12%/1);--border_radius:9999px;--transtion:0.3s ease-in-out;cursor:pointer;position:relative;display:inline-flex;align-items:center;gap:.5rem;padding:1rem 2rem;background-color:transparent;border:none;border-radius:var(--border_radius);transform:scale(calc(1+(var(--active,0)*0.1)));transition:transform var(--transtion);text-decoration:none}
    .button::before{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:100%;background-color:var(--black-700);border-radius:var(--border_radius);box-shadow:inset 0 .5px hsl(0,0%,100%),inset 0 -1px 2px 0 hsl(0,0%,0%),0px 4px 10px -4px hsla(0 0% 0%/calc(1 - var(--active,0))),0 0 0 calc(var(--active,0)*0.375rem) hsla(20,100%,40%,0.75);transition:all var(--transtion);z-index:0}
    .button::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:100%;background-color:hsla(20,100%,40%,0.75);background-image:radial-gradient(at 51% 89%,hsla(20,100%,40%,1) 0px,transparent 50%),radial-gradient(at 100% 100%,hsla(20,100%,35%,1) 0px,transparent 50%),radial-gradient(at 22% 91%,hsla(20,100%,35%,1) 0px,transparent 50%);background-position:top;opacity:var(--active,0);border-radius:var(--border_radius);transition:opacity var(--transtion);z-index:2}
    .button:is(:hover,:focus-visible){--active:1}
    .button:active{transform:scale(1)}
    .button .dots_border{--size_border:calc(100% + 2px);overflow:hidden;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:var(--size_border);height:var(--size_border);background-color:transparent;border-radius:var(--border_radius);z-index:-10}
    .button .dots_border::before{content:"";position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);width:100%;height:2rem;background-color:white;mask:linear-gradient(transparent 0%,white 120%);animation:rotate 2s linear infinite}
    @keyframes rotate{to{transform:rotate(360deg)}}
    .button .sparkle{position:relative;z-index:10;width:1.75rem}
    .button .sparkle .path{fill:currentColor;stroke:currentColor;transform-origin:center;color:hsl(0,0%,100%)}
    .button:is(:hover,:focus) .sparkle .path{animation:pathAnim 1.5s linear .5s infinite}
    .button .sparkle .path:nth-child(1){--scale_path_1:1.2}.button .sparkle .path:nth-child(2){--scale_path_2:1.2}.button .sparkle .path:nth-child(3){--scale_path_3:1.2}
    @keyframes pathAnim{0%,34%,71%,100%{transform:scale(1)}17%{transform:scale(var(--scale_path_1,1))}49%{transform:scale(var(--scale_path_2,1))}83%{transform:scale(var(--scale_path_3,1))}}
    .button .text_button{position:relative;z-index:10;background-image:linear-gradient(90deg,hsla(0 0% 100%/1) 0%,hsla(0 0% 100%/var(--active,0)) 120%);background-clip:text;-webkit-background-clip:text;font-size:1rem;color:transparent;font-weight:600;font-family:'Playfair Display',serif!important}

    /* ===== WORKFLOW DIAGRAM ===== */
    .wf-diagram{display:flex;align-items:center;gap:0;width:100%}
    .wf-node{display:flex;flex-direction:column;align-items:center;gap:8px;flex-shrink:0}
    .wf-node-circle{width:72px;height:72px;border-radius:18px;background:rgba(255,255,255,0.04);border:1.5px solid rgba(204,85,0,0.3);backdrop-filter:blur(12px);display:flex;align-items:center;justify-content:center;font-size:28px;transition:all .3s}
    .wf-node-circle:hover{border-color:rgba(204,85,0,0.6);background:rgba(204,85,0,0.08);transform:scale(1.08)}
    .wf-node-label{font-family:'Roboto',sans-serif!important;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px}
    .wf-connector{flex:1;height:2px;background:rgba(204,85,0,0.15);position:relative;min-width:20px;max-width:80px}
    .wf-connector::after{content:'';position:absolute;top:-3px;width:8px;height:8px;background:#CC5500;border-radius:50%;animation:flowDot 2.5s ease-in-out infinite;box-shadow:0 0 12px rgba(204,85,0,0.5)}
    .wf-connector:nth-of-type(2)::after{animation-delay:0s}
    .wf-connector:nth-of-type(4)::after{animation-delay:0.6s}
    .wf-connector:nth-of-type(6)::after{animation-delay:1.2s}
    @keyframes flowDot{0%{left:0;opacity:0}10%{opacity:1}90%{opacity:1}100%{left:calc(100% - 8px);opacity:0}}

    /* ===== MARQUEE BANNER ===== */
    .marquee-banner{background:#081628;border-top:1px solid rgba(204,85,0,0.25);border-bottom:1px solid rgba(204,85,0,0.25);box-shadow:0 -4px 30px rgba(204,85,0,0.06),0 4px 30px rgba(204,85,0,0.06);padding:18px 0;overflow:hidden;position:relative}
    .marquee-banner::before,.marquee-banner::after{content:'';position:absolute;top:0;bottom:0;width:120px;z-index:2;pointer-events:none}
    .marquee-banner::before{left:0;background:linear-gradient(90deg,#081628 0%,transparent 100%)}
    .marquee-banner::after{right:0;background:linear-gradient(270deg,#081628 0%,transparent 100%)}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 30s linear infinite}
    .marquee-track span{font-family:'Roboto',sans-serif!important;font-size:15px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#CC5500;white-space:nowrap;padding:0 60px}
    @keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

    /* ===== SECTIONS ===== */
    .content-section{max-width:1200px;margin:0 auto;padding:100px 40px}
    .section-header{text-align:center;margin-bottom:60px}
    .section-badge{display:inline-block;padding:8px 20px;background:rgba(204,85,0,0.08)!important;border:1px solid rgba(204,85,0,0.2)!important;border-radius:100px;font-family:'Roboto',sans-serif!important;font-size:12px!important;font-weight:700!important;color:#CC5500!important;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:20px}
    .section-title{font-size:clamp(36px,5vw,56px)!important;line-height:1.08!important;margin-bottom:20px!important;font-weight:900!important;letter-spacing:-0.03em;color:#F0F4FA!important}
    .highlight{color:#CC5500!important;-webkit-text-fill-color:#CC5500!important}
    .section-description{font-family:'Roboto',sans-serif!important;font-size:18px!important;line-height:1.7;color:rgba(210,225,245,0.55)!important;max-width:700px;margin:0 auto;font-weight:300}

    /* ===== AUTOMATION CARDS (3x2) ===== */
    .auto-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:40px}
    .auto-card{position:relative;background:rgba(255,255,255,0.03)!important;border:1px solid rgba(255,255,255,0.06)!important;border-radius:20px;padding:32px;transition:all .3s;backdrop-filter:blur(12px)}
    .auto-card:hover{transform:translateY(-4px);border-color:rgba(204,85,0,0.35)!important;background:rgba(204,85,0,0.04)!important;box-shadow:0 12px 32px rgba(204,85,0,0.1)}
    .auto-card .card-accent{position:absolute;top:-1px;left:-1px;right:-1px;height:4px;background:linear-gradient(90deg,#CC5500,#E2725B)!important;border-radius:20px 20px 0 0;opacity:0;transition:opacity .3s}
    .auto-card:hover .card-accent{opacity:1}
    .auto-card-emoji{font-size:36px;margin-bottom:16px;display:block}
    .auto-card h3{font-size:20px!important;font-weight:800!important;margin-bottom:12px!important;color:#F0F4FA!important}
    .auto-card p{font-family:'Roboto',sans-serif!important;font-size:15px!important;line-height:1.7;color:rgba(210,225,245,0.55)!important}

    /* ===== HOW IT WORKS FLOW ===== */
    .how-flow{max-width:900px;margin:0 auto;padding:0 40px;display:flex;align-items:center;justify-content:center}
    .how-node{text-align:center;flex:0 0 auto}
    .how-icon{width:90px;height:90px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;background:rgba(255,255,255,0.04);border:2px solid rgba(204,85,0,0.3);backdrop-filter:blur(12px);font-size:36px;transition:all .3s}
    .how-icon:hover{border-color:rgba(204,85,0,0.6);background:rgba(204,85,0,0.08);transform:scale(1.08)}
    .how-label{font-family:'Playfair Display',serif!important;font-size:18px!important;font-weight:800!important;color:#F0F4FA!important;margin-bottom:6px}
    .how-desc{font-family:'Roboto',sans-serif!important;font-size:13px;color:var(--text-muted);max-width:160px;margin:0 auto;line-height:1.5}
    .how-connector{flex:1;height:2px;background:rgba(204,85,0,0.15);position:relative;min-width:30px;max-width:100px}
    .how-connector::after{content:'';position:absolute;top:-3px;width:8px;height:8px;background:#CC5500;border-radius:50%;animation:flowDot 2.5s ease-in-out infinite;box-shadow:0 0 12px rgba(204,85,0,0.5)}
    .how-connector:nth-of-type(2)::after{animation-delay:0s}
    .how-connector:nth-of-type(4)::after{animation-delay:0.8s}

    /* ===== INTEGRATIONS GRID ===== */
    .integrations-grid{display:flex;flex-wrap:wrap;justify-content:center;gap:14px;margin-top:40px}
    .int-pill{padding:10px 22px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:100px;font-family:'Roboto',sans-serif!important;font-size:14px;font-weight:500;color:rgba(210,225,245,0.7);backdrop-filter:blur(8px);transition:all .3s;white-space:nowrap}
    .int-pill:hover{border-color:rgba(204,85,0,0.4);background:rgba(204,85,0,0.06);color:#F0F4FA;transform:translateY(-2px)}

    /* ===== PRICING NOTE ===== */
    .pricing-note{text-align:center;padding:60px 40px;max-width:800px;margin:0 auto}
    .pricing-note p{font-family:'Roboto',sans-serif!important;font-size:18px!important;line-height:1.7;color:rgba(210,225,245,0.6)!important;font-weight:300}
    .pricing-note strong{color:#CC5500!important;font-weight:700}

    /* ===== PRICING GRID ===== */
    .auto-pricing{max-width:1100px;margin:0 auto;padding:80px 40px 40px}
    .auto-pricing-title{text-align:center;font-size:clamp(32px,5vw,48px)!important;font-weight:900!important;letter-spacing:-0.03em;color:#F0F4FA!important;margin-bottom:12px}
    .auto-pricing-title span{color:#CC5500}
    .auto-pricing-sub{text-align:center;font-family:'Roboto',sans-serif!important;font-size:17px;color:rgba(210,225,245,0.5);margin-bottom:48px;max-width:600px;margin-left:auto;margin-right:auto}
    .auto-tiers{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
    .auto-tier{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:36px 28px;position:relative;transition:all .3s;display:flex;flex-direction:column}
    .auto-tier:hover{border-color:rgba(204,85,0,0.3);transform:translateY(-4px)}
    .auto-tier.featured{border-color:rgba(204,85,0,0.4);background:rgba(204,85,0,0.04)}
    .auto-tier.featured::before{content:'Most Popular';position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#CC5500,#E2725B);color:white;font-size:11px;font-weight:700;padding:4px 16px;border-radius:100px;letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap}
    .auto-tier-name{font-size:20px!important;font-weight:800!important;color:#F0F4FA!important;margin-bottom:6px}
    .auto-tier-desc{font-family:'Roboto',sans-serif!important;font-size:13px;color:rgba(210,225,245,0.45);margin-bottom:20px;line-height:1.5}
    .auto-tier-price{font-family:'Playfair Display',serif!important;font-size:36px;font-weight:900;color:#CC5500;margin-bottom:4px}
    .auto-tier-price span{font-size:15px;color:rgba(210,225,245,0.4);font-family:'Roboto',sans-serif;font-weight:400}
    .auto-tier-note{font-family:'Roboto',sans-serif!important;font-size:12px;color:rgba(210,225,245,0.35);margin-bottom:20px}
    .auto-tier ul{list-style:none;padding:0;margin:0 0 24px;flex:1}
    .auto-tier li{font-family:'Roboto',sans-serif!important;font-size:13px;color:rgba(210,225,245,0.6);padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04);line-height:1.5}
    .auto-tier li::before{content:'✓ ';color:#CC5500;font-weight:700}
    .auto-tier-btn{display:block;text-align:center;padding:12px;border-radius:12px;font-size:14px;font-weight:700;text-decoration:none;transition:all .3s;border:1px solid rgba(204,85,0,0.3);color:#CC5500;background:transparent}
    .auto-tier-btn:hover{background:rgba(204,85,0,0.08);border-color:#CC5500}
    .auto-tier-btn.primary{background:linear-gradient(135deg,#CC5500,#E2725B);color:white;border:none}
    .auto-tier-btn.primary:hover{opacity:0.9;transform:translateY(-1px)}

    /* ===== CTA ===== */
    .cta-section{max-width:900px;margin:0 auto;padding:100px 40px 100px;text-align:center}
    .cta-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:24px;padding:60px 40px;backdrop-filter:blur(16px);position:relative;overflow:hidden}
    .cta-card::before{content:'';position:absolute;top:-1px;left:-1px;right:-1px;height:4px;background:linear-gradient(90deg,#CC5500,#E2725B,#CC5500);border-radius:24px 24px 0 0}
    .cta-title{font-size:clamp(36px,5vw,56px)!important;line-height:1.08;margin-bottom:20px!important;font-weight:900!important;letter-spacing:-0.03em;color:#F0F4FA!important}
    .cta-description{font-family:'Roboto',sans-serif!important;font-size:18px!important;line-height:1.7;color:rgba(210,225,245,0.55)!important;margin-bottom:36px;max-width:600px;margin-left:auto;margin-right:auto;font-weight:300}

    /* ===== RESPONSIVE ===== */
    @media(max-width:768px){
      .hero{padding:100px 20px 60px;min-height:70vh}
      .hero-inner{flex-direction:column;text-align:center}
      .hero-visual{width:100%;height:auto;min-height:100px}
      h1{font-size:42px!important}
      .wf-diagram{flex-wrap:wrap;justify-content:center;gap:12px}
      .wf-connector{display:none}
      .auto-grid{grid-template-columns:1fr}
      .how-flow{flex-wrap:wrap;gap:16px}
      .how-connector{display:none}
      .how-node{flex:0 0 calc(33% - 12px)}
      .content-section{padding:60px 20px}
      .cta-section{padding:60px 20px}
      .cta-card{padding:40px 24px}
      .pricing-note{padding:40px 20px}
      .auto-pricing{padding:60px 20px 20px}
      .auto-tiers{grid-template-columns:1fr}
    }
    @media(max-width:480px){
      .how-node{flex:0 0 100%}
      .wf-node-circle{width:56px;height:56px;font-size:22px;border-radius:14px}
    }
</style>

<!-- HERO -->
<section class="hero">
  <div class="hero-inner">
    <div class="hero-content">
      <div class="hero-badge">
        <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        ZERO-CODE AUTOMATION
      </div>
      <h1>Automate Everything.<br /><span>Break Nothing.</span></h1>
      <p class="hero-text">Visual workflow automation that connects your AI agents, CRM, tools, and data — zero code, infinite scale. Fully managed.</p>
      <div class="actions">
        <a href="https://calendly.com/orengenio/30min" class="button" target="_blank" rel="noopener">
          <div class="dots_border"></div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle"><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"></path></svg>
          <span class="text_button">Book an Automation Strategy Call</span>
        </a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="wf-diagram">
        <div class="wf-node"><div class="wf-node-circle">⚡</div><div class="wf-node-label">Trigger</div></div>
        <div class="wf-connector"></div>
        <div class="wf-node"><div class="wf-node-circle">⚙️</div><div class="wf-node-label">Process</div></div>
        <div class="wf-connector"></div>
        <div class="wf-node"><div class="wf-node-circle">🔀</div><div class="wf-node-label">Decision</div></div>
        <div class="wf-connector"></div>
        <div class="wf-node"><div class="wf-node-circle">🚀</div><div class="wf-node-label">Action</div></div>
      </div>
    </div>
  </div>
</section>

<!-- MAJOR ANNOUNCEMENT MARQUEE -->
<section class="marquee-banner">
  <div class="marquee-track">
    <span>🔥 MAJOR PARTNERSHIP ANNOUNCEMENT COMING SOON — STAY TUNED 🔥</span>
    <span>🔥 MAJOR PARTNERSHIP ANNOUNCEMENT COMING SOON — STAY TUNED 🔥</span>
    <span>🔥 MAJOR PARTNERSHIP ANNOUNCEMENT COMING SOON — STAY TUNED 🔥</span>
    <span>🔥 MAJOR PARTNERSHIP ANNOUNCEMENT COMING SOON — STAY TUNED 🔥</span>
    <span>🔥 MAJOR PARTNERSHIP ANNOUNCEMENT COMING SOON — STAY TUNED 🔥</span>
    <span>🔥 MAJOR PARTNERSHIP ANNOUNCEMENT COMING SOON — STAY TUNED 🔥</span>
    <span>🔥 MAJOR PARTNERSHIP ANNOUNCEMENT COMING SOON — STAY TUNED 🔥</span>
    <span>🔥 MAJOR PARTNERSHIP ANNOUNCEMENT COMING SOON — STAY TUNED 🔥</span>
    <span>🔥 MAJOR PARTNERSHIP ANNOUNCEMENT COMING SOON — STAY TUNED 🔥</span>
    <span>🔥 MAJOR PARTNERSHIP ANNOUNCEMENT COMING SOON — STAY TUNED 🔥</span>
  </div>
</section>

<!-- WHAT YOU CAN AUTOMATE -->
<section class="content-section">
  <div class="section-header">
    <div class="section-badge">WHAT YOU CAN AUTOMATE</div>
    <h2 class="section-title">Workflows That <span class="highlight">Run Themselves</span></h2>
    <p class="section-description">From lead capture to collections — every repetitive process in your business, automated and managed by us.</p>
  </div>
  <div class="auto-grid">
    <div class="auto-card">
      <span class="card-accent"></span>
      <span class="auto-card-emoji">📞</span>
      <h3>Lead Capture → CRM Pipeline</h3>
      <p>Auto-route inbound leads to the right pipeline stage, assign agents, trigger follow-ups.</p>
    </div>
    <div class="auto-card">
      <span class="card-accent"></span>
      <span class="auto-card-emoji">📅</span>
      <h3>Appointment Booking → Reminders</h3>
      <p>Book meetings automatically, send SMS/email/voice reminders, slash no-shows.</p>
    </div>
    <div class="auto-card">
      <span class="card-accent"></span>
      <span class="auto-card-emoji">🎙️</span>
      <h3>Inbound Call → Transcription → Follow-Up</h3>
      <p>Every call recorded, transcribed, summarized, and followed up — automatically.</p>
    </div>
    <div class="auto-card">
      <span class="card-accent"></span>
      <span class="auto-card-emoji">📱</span>
      <h3>Social Post → Engagement → Report</h3>
      <p>Publish, track engagement, generate performance reports on autopilot.</p>
    </div>
    <div class="auto-card">
      <span class="card-accent"></span>
      <span class="auto-card-emoji">💳</span>
      <h3>Invoice → Payment Reminder → Collection</h3>
      <p>Automated billing cycles with escalating reminders and payment tracking.</p>
    </div>
    <div class="auto-card">
      <span class="card-accent"></span>
      <span class="auto-card-emoji">🔗</span>
      <h3>Custom Webhook → Any Action</h3>
      <p>Connect any system to any action. If it has an API, we can automate it.</p>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="content-section">
  <div class="section-header">
    <div class="section-badge">HOW IT WORKS</div>
    <h2 class="section-title">Three Steps to <span class="highlight">Autopilot</span></h2>
    <p class="section-description">We handle everything — from connecting your tools to building and managing your workflows 24/7.</p>
  </div>
  <div class="how-flow">
    <div class="how-node">
      <div class="how-icon">🔌</div>
      <div class="how-label">Connect</div>
      <div class="how-desc">Connect your tools, CRM, and channels</div>
    </div>
    <div class="how-connector"></div>
    <div class="how-node">
      <div class="how-icon">⚙️</div>
      <div class="how-label">Build</div>
      <div class="how-desc">We design your automation workflows</div>
    </div>
    <div class="how-connector"></div>
    <div class="how-node">
      <div class="how-icon">🚀</div>
      <div class="how-label">Deploy</div>
      <div class="how-desc">Runs 24/7. We manage it.</div>
    </div>
  </div>
</section>

<!-- INTEGRATION GRID -->
<section class="content-section">
  <div class="section-header">
    <div class="section-badge">INTEGRATIONS</div>
    <h2 class="section-title">Works With <span class="highlight">Everything</span></h2>
    <p class="section-description">Connect to the tools you already use. If it has an API, we can plug it in.</p>
  </div>
  <div class="integrations-grid">
    <div class="int-pill">n8n</div>
    <div class="int-pill">Zapier</div>
    <div class="int-pill">Make</div>
    <div class="int-pill">Salesforce</div>
    <div class="int-pill">HubSpot</div>
    <div class="int-pill">Slack</div>
    <div class="int-pill">Google Workspace</div>
    <div class="int-pill">Microsoft 365</div>
    <div class="int-pill">Twilio</div>
    <div class="int-pill">Stripe</div>
    <div class="int-pill">QuickBooks</div>
    <div class="int-pill">Mailchimp</div>
    <div class="int-pill">Calendly</div>
    <div class="int-pill">Shopify</div>
    <div class="int-pill">WordPress</div>
    <div class="int-pill">Supabase</div>
  </div>
</section>

<!-- PRICING -->
<section class="auto-pricing">
  <h2 class="auto-pricing-title">Custom Automation <span>Build Packages</span></h2>
  <p class="auto-pricing-sub">Automation engine included with every OrenGen plan. Need custom workflows? We build them for you.</p>
  <div class="auto-tiers">
    <div class="auto-tier">
      <div class="auto-tier-name">Standard</div>
      <div class="auto-tier-desc">Simple workflows to automate your core processes.</div>
      <div class="auto-tier-price">$497 <span>one-time</span></div>
      <div class="auto-tier-note">No recurring fees</div>
      <ul>
        <li>1–2 custom automations</li>
        <li>Basic triggers &amp; actions</li>
        <li>Single platform integration</li>
        <li>Testing &amp; deployment</li>
        <li>30-day support</li>
      </ul>
      <a href="https://calendly.com/orengenio/30min" class="auto-tier-btn" target="_blank" rel="noopener">Get Started</a>
    </div>
    <div class="auto-tier featured">
      <div class="auto-tier-name">Professional</div>
      <div class="auto-tier-desc">Multi-step workflows with logic and integrations.</div>
      <div class="auto-tier-price">$1,497 <span>one-time</span></div>
      <div class="auto-tier-note">No recurring fees</div>
      <ul>
        <li>3–5 custom automations</li>
        <li>Conditional logic &amp; branching</li>
        <li>Multi-platform integrations</li>
        <li>CRM &amp; pipeline automation</li>
        <li>Error handling &amp; retries</li>
        <li>60-day support</li>
      </ul>
      <a href="https://calendly.com/orengenio/30min" class="auto-tier-btn primary" target="_blank" rel="noopener">Build My Workflows</a>
    </div>
    <div class="auto-tier">
      <div class="auto-tier-name">Premium</div>
      <div class="auto-tier-desc">Full automation architecture for your entire operation.</div>
      <div class="auto-tier-price">$2,997 <span>one-time</span></div>
      <div class="auto-tier-note">No recurring fees</div>
      <ul>
        <li>Unlimited automations</li>
        <li>Custom API integrations</li>
        <li>Webhooks &amp; advanced logic</li>
        <li>Full stack orchestration</li>
        <li>Performance optimization</li>
        <li>90-day priority support</li>
      </ul>
      <a href="https://calendly.com/orengenio/30min" class="auto-tier-btn" target="_blank" rel="noopener">Go Premium</a>
    </div>
    <div class="auto-tier" style="border-color:rgba(204,85,0,0.15);background:rgba(15,40,71,0.3)">
      <div class="auto-tier-name">Enterprise</div>
      <div class="auto-tier-desc">Custom-scoped automation for complex, large-scale operations.</div>
      <div class="auto-tier-price">Custom</div>
      <div class="auto-tier-note">Scoped to your needs</div>
      <ul>
        <li>Dedicated automation architect</li>
        <li>Enterprise integrations &amp; APIs</li>
        <li>Multi-department workflows</li>
        <li>Ongoing optimization &amp; management</li>
        <li>SLA &amp; dedicated support</li>
        <li>White-glove delivery</li>
      </ul>
      <a href="https://calendly.com/orengenio/30min" class="auto-tier-btn" target="_blank" rel="noopener">Book a Strategy Call</a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section">
  <div class="cta-card">
    <h2 class="cta-title">Let Us Build Your <span class="highlight">Automations</span></h2>
    <p class="cta-description">White-glove automation service — we design, build, deploy, and manage your workflows so you never have to touch a single node.</p>
    <div class="actions" style="justify-content:center">
      <a href="https://calendly.com/orengenio/30min" class="button" target="_blank" rel="noopener">
        <div class="dots_border"></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle"><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"></path></svg>
        <span class="text_button">Book an Automation Strategy Call</span>
      </a>
    </div>
  </div>
</section>
` }} />
  );
}
