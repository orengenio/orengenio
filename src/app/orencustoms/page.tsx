import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "OrenCustoms — Custom AI & Automation Solutions | OrenGen Worldwide",
  description: "OrenCustoms builds bespoke AI systems to your exact specifications. Custom AI solutions engineered from scratch for your unique business needs.",
}

const html = `
<style>

    @import url('https://fonts.cdnfonts.com/css/canva-sans');
    :root{--primary:#F89E16;--primary-light:#FBBA42;--primary-dark:#D4850F;--accent:#FFC857;--accent-dark:#F89E16;--bg-dark:#0d0d0d;--bg-card:rgba(255,255,255,0.03);--border:rgba(255,255,255,0.08);--text:#fff;--text-secondary:rgba(255,255,255,0.7);--text-muted:rgba(255,255,255,0.5)}
    *{margin:0;padding:0;box-sizing:border-box}
    html,body{background:var(--bg-dark)!important;color:var(--text)!important;font-family:'Canva Sans','Inter',sans-serif!important;overflow-x:hidden}
    h1,h2,h3,h4,h5,h6{font-family:'League Spartan',sans-serif!important}

    /* ===== HERO ===== */
    .hero{position:relative;min-height:90vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 40px 80px;overflow:hidden}
    .hero::before{content:'';position:absolute;top:-20%;right:10%;width:600px;height:600px;background:radial-gradient(circle,rgba(248,158,22,0.12) 0%,transparent 70%);border-radius:50%;animation:heroFloat 8s ease-in-out infinite}
    .hero::after{content:'';position:absolute;bottom:-10%;left:5%;width:500px;height:500px;background:radial-gradient(circle,rgba(255,200,87,0.08) 0%,transparent 70%);border-radius:50%;animation:heroFloat 10s ease-in-out infinite reverse}
    @keyframes heroFloat{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(30px,-40px) scale(1.05)}}
    .hero-content{max-width:900px;margin:0 auto;position:relative;z-index:2}
    .hero-badge{display:inline-flex;align-items:center;gap:10px;padding:10px 24px;background:rgba(248,158,22,0.12)!important;border:2px solid rgba(248,158,22,0.35)!important;border-radius:100px;color:var(--accent)!important;font-family:'League Spartan',sans-serif!important;font-size:12px!important;font-weight:700!important;letter-spacing:2px;text-transform:uppercase;margin-bottom:32px}
    .hero-badge svg{width:14px;height:14px;stroke:var(--accent);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
    h1{font-size:clamp(48px,8vw,96px)!important;line-height:1.05!important;margin-bottom:24px!important;letter-spacing:-1px;font-weight:800!important}
    h1 span{background:linear-gradient(90deg,#F89E16,#FFC857)!important;-webkit-background-clip:text!important;-webkit-text-fill-color:transparent!important;background-clip:text!important}
    .hero-text{font-family:'Canva Sans',sans-serif!important;font-size:18px!important;line-height:1.6;color:var(--text-secondary)!important;max-width:720px;margin:0 auto 36px}
    .actions{display:flex;gap:18px;justify-content:center;flex-wrap:wrap}

    /* Sparkle Button — Amber */
    .button{--black-700:hsla(0 0% 12%/1);--border_radius:9999px;--transtion:0.3s ease-in-out;cursor:pointer;position:relative;display:inline-flex;align-items:center;gap:.5rem;padding:1rem 2rem;background-color:transparent;border:none;border-radius:var(--border_radius);transform:scale(calc(1+(var(--active,0)*0.1)));transition:transform var(--transtion);text-decoration:none}
    .button::before{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:100%;background-color:var(--black-700);border-radius:var(--border_radius);box-shadow:inset 0 .5px hsl(0,0%,100%),inset 0 -1px 2px 0 hsl(0,0%,0%),0px 4px 10px -4px hsla(0 0% 0%/calc(1 - var(--active,0))),0 0 0 calc(var(--active,0)*0.375rem) hsla(37,95%,53%,0.75);transition:all var(--transtion);z-index:0}
    .button::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:100%;background-color:hsla(37,95%,53%,0.75);background-image:radial-gradient(at 51% 89%,hsla(37,95%,53%,1) 0px,transparent 50%),radial-gradient(at 100% 100%,hsla(37,95%,43%,1) 0px,transparent 50%),radial-gradient(at 22% 91%,hsla(37,95%,43%,1) 0px,transparent 50%);background-position:top;opacity:var(--active,0);border-radius:var(--border_radius);transition:opacity var(--transtion);z-index:2}
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
    .button .text_button{position:relative;z-index:10;background-image:linear-gradient(90deg,hsla(0 0% 100%/1) 0%,hsla(0 0% 100%/var(--active,0)) 120%);background-clip:text;-webkit-background-clip:text;font-size:1rem;color:transparent;font-weight:600;font-family:'League Spartan',sans-serif!important}

    /* ===== BUILD FLOW ANIMATION ===== */
    .build-flow{max-width:1100px;margin:0 auto;padding:70px 40px;display:flex;align-items:center;justify-content:center}
    .flow-node{text-align:center;flex:0 0 auto}
    .flow-icon{width:76px;height:76px;border-radius:18px;display:flex;align-items:center;justify-content:center;margin:0 auto 10px}
    .flow-icon svg{width:32px;height:32px;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
    .flow-icon.amber{background:rgba(248,158,22,0.15);border:2px solid rgba(248,158,22,0.4)}.flow-icon.amber svg{stroke:var(--accent)}
    .flow-icon.dark{background:rgba(255,255,255,0.04);border:2px solid rgba(255,255,255,0.12)}.flow-icon.dark svg{stroke:var(--text-secondary)}
    .flow-label{font-family:'League Spartan',sans-serif!important;font-size:12px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px}
    .flow-connector{flex:1;height:2px;background:rgba(248,158,22,0.2);position:relative;min-width:30px;max-width:100px}
    .flow-connector::after{content:'';position:absolute;top:-3px;width:8px;height:8px;background:var(--accent);border-radius:50%;animation:flowDot 2.5s ease-in-out infinite;box-shadow:0 0 12px rgba(255,200,87,0.6)}
    .flow-connector:nth-of-type(2)::after{animation-delay:0s}.flow-connector:nth-of-type(4)::after{animation-delay:.5s}.flow-connector:nth-of-type(6)::after{animation-delay:1s}.flow-connector:nth-of-type(8)::after{animation-delay:1.5s}
    @keyframes flowDot{0%{left:0;opacity:0}10%{opacity:1}90%{opacity:1}100%{left:calc(100% - 8px);opacity:0}}

    /* ===== STATS ===== */
    .stats-section{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:20px;border-top:1px solid rgba(248,158,22,0.25);border-bottom:1px solid rgba(248,158,22,0.25)}
    .stat-item{text-align:center;padding:28px 16px;background:var(--bg-card);border:1px solid rgba(248,158,22,0.15);border-radius:16px;transition:all .3s}
    .stat-item:hover{border-color:rgba(248,158,22,0.4);background:rgba(248,158,22,0.06);transform:translateY(-2px)}
    .stat-value{font-family:'League Spartan',sans-serif!important;font-size:40px!important;font-weight:800!important;background:linear-gradient(135deg,#F89E16,#FFC857)!important;-webkit-background-clip:text!important;-webkit-text-fill-color:transparent!important;background-clip:text!important;line-height:1;margin-bottom:8px;display:block}
    .stat-label{font-family:'Canva Sans',sans-serif!important;font-size:11px!important;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:1.5px;display:block}

    /* ===== SECTIONS ===== */
    .content-section{max-width:1200px;margin:0 auto;padding:100px 40px}
    .section-header{text-align:center;margin-bottom:60px}
    .section-badge{display:inline-block;padding:8px 20px;background:rgba(248,158,22,0.12)!important;border:1px solid rgba(248,158,22,0.35)!important;border-radius:100px;font-family:'League Spartan',sans-serif!important;font-size:12px!important;font-weight:700!important;color:var(--accent)!important;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:20px}
    .section-title{font-size:clamp(36px,5vw,56px)!important;line-height:1.1!important;margin-bottom:20px!important;font-weight:800!important}
    .highlight{background:linear-gradient(90deg,#F89E16,#FFC857)!important;-webkit-background-clip:text!important;-webkit-text-fill-color:transparent!important;background-clip:text!important}
    .section-description{font-family:'Canva Sans',sans-serif!important;font-size:18px!important;line-height:1.7;color:var(--text-secondary)!important;max-width:700px;margin:0 auto}

    /* ===== FEATURE CARDS ===== */
    .capabilities-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:40px}
    .capability-card{position:relative;background:var(--bg-card)!important;border:1px solid rgba(248,158,22,0.15)!important;border-radius:16px;padding:32px;transition:all .3s}
    .capability-card:hover{transform:translateY(-4px);border-color:rgba(248,158,22,0.5)!important;background:rgba(248,158,22,0.06)!important;box-shadow:0 12px 32px rgba(248,158,22,0.12)}
    .capability-card .card-accent{position:absolute;top:-1px;left:-1px;right:-1px;height:4px;background:linear-gradient(90deg,#F89E16,#FFC857)!important;border-radius:16px 16px 0 0;opacity:0;transition:opacity .3s}
    .capability-card:hover .card-accent{opacity:1}
    .card-icon{width:56px;height:56px;border-radius:14px;background:rgba(248,158,22,0.12);border:1px solid rgba(248,158,22,0.25);display:flex;align-items:center;justify-content:center;margin-bottom:20px;transition:transform .3s}
    .capability-card:hover .card-icon{transform:scale(1.1)}
    .card-icon svg{width:26px;height:26px;stroke:var(--accent);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
    .capability-card h3{font-size:22px!important;font-weight:700!important;margin-bottom:12px!important}
    .capability-card p{font-family:'Canva Sans',sans-serif!important;font-size:15px!important;line-height:1.7;color:var(--text-secondary)!important;margin-bottom:20px}
    .capability-card ul{list-style:none;padding:0}
    .capability-card ul li{font-family:'Canva Sans',sans-serif!important;font-size:14px!important;color:var(--text-muted);padding:8px 0 8px 24px;position:relative}
    .capability-card ul li::before{content:"→";position:absolute;left:0;color:var(--accent);font-weight:bold}

    /* ===== WHY CHOOSE ===== */
    .why-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:24px;margin-top:40px}
    .why-card{display:flex;gap:20px;padding:28px;border:1px solid transparent;border-radius:16px;transition:all .3s}
    .why-card:hover{background:rgba(248,158,22,0.04);border-color:rgba(248,158,22,0.15)}
    .why-icon{width:52px;height:52px;background:rgba(248,158,22,0.1);border:1px solid rgba(248,158,22,0.2);border-radius:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
    .why-icon svg{width:24px;height:24px;stroke:var(--accent);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
    .why-card h3{font-size:20px!important;font-weight:700!important;margin-bottom:8px!important}
    .why-card p{font-family:'Canva Sans',sans-serif!important;font-size:14px!important;line-height:1.7;color:var(--text-muted)}

    /* ===== PROCESS ===== */
    .process-section{max-width:1000px;margin:0 auto;padding:100px 40px}
    .process-timeline{margin-top:60px;display:flex;flex-direction:column;gap:40px}
    .process-step{display:flex;gap:32px;align-items:flex-start}
    .process-number{flex-shrink:0;width:80px;height:80px;border-radius:16px;background:rgba(248,158,22,0.12)!important;border:2px solid rgba(248,158,22,0.3)!important;display:flex;align-items:center;justify-content:center;font-size:32px!important;font-weight:800!important;color:var(--accent)!important;-webkit-text-fill-color:var(--accent)!important}
    .process-content h3{font-size:24px!important;font-weight:700!important;margin-bottom:12px!important}
    .process-content p{font-family:'Canva Sans',sans-serif!important;font-size:16px!important;line-height:1.7;color:var(--text-secondary)!important}

    /* ===== TRUSTED ===== */
    .trusted-section{max-width:900px;margin:0 auto;padding:60px 40px;text-align:center}
    .trusted-label{font-family:'League Spartan',sans-serif!important;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:3px;margin-bottom:28px}
    .trusted-logos{display:flex;align-items:center;justify-content:center;gap:24px;flex-wrap:wrap}
    .trusted-logos a{display:flex;align-items:center;opacity:.5;transition:opacity .3s;height:28px}
    .trusted-logos a:hover{opacity:1}
    .trusted-logos img{height:28px;width:auto;filter:grayscale(100%) brightness(2);transition:filter .3s}
    .trusted-logos a:hover img{filter:none}

    /* ===== CTA ===== */
    .cta-section{max-width:900px;margin:0 auto;padding:120px 40px 100px;text-align:center}
    .cta-title{font-size:clamp(36px,5vw,56px)!important;line-height:1.2;margin-bottom:24px!important;font-weight:800!important}
    .cta-description{font-family:'Canva Sans',sans-serif!important;font-size:18px!important;line-height:1.7;color:var(--text-secondary)!important;margin-bottom:40px;max-width:600px;margin-left:auto;margin-right:auto}

    /* ===== RESPONSIVE ===== */
    @media(max-width:768px){
      .hero{padding:100px 20px 60px;min-height:70vh}
      h1{font-size:42px!important}
      .build-flow{flex-wrap:wrap;gap:8px;padding:40px 20px}.flow-connector{display:none}.flow-node{flex:0 0 calc(50% - 8px)}
      .stats-section{grid-template-columns:repeat(2,1fr);gap:16px;padding:60px 20px}
      .capabilities-grid{grid-template-columns:1fr}
      .why-grid{grid-template-columns:1fr}
      .process-step{flex-direction:column;gap:20px}
      .process-number{width:60px;height:60px;font-size:24px!important}
      .content-section,.process-section{padding:60px 20px}
      .cta-section{padding:80px 20px}
      .trusted-section{padding:40px 20px}
    }
  
</style>
<!-- HERO -->
  <section class="hero">
    <div class="hero-content">
      <div class="hero-badge">
        <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        Bespoke Systems &amp; Custom Builds
      </div>
      <h1>Your Business Logic.<br /><span>Our Engineering.</span></h1>
      <p class="hero-text">Bespoke systems — AI apps, integrations, automations, SMTP, and infrastructure — built around your exact business logic and owned by you. No templates. No compromises. 100% yours.</p>
      <div class="actions">
        <a href="https://calendly.com/orengenio/30min" class="button" target="_blank" rel="noopener">
          <div class="dots_border"></div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle"><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"></path></svg>
          <span class="text_button">Start Your Custom Build</span>
        </a>
      </div>
    </div>
  </section>

  <!-- BUILD FLOW ANIMATION -->
  <section class="build-flow">
    <div class="flow-node"><div class="flow-icon amber"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><div class="flow-label">Discovery</div></div>
    <div class="flow-connector"></div>
    <div class="flow-node"><div class="flow-icon dark"><svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div><div class="flow-label">Architect</div></div>
    <div class="flow-connector"></div>
    <div class="flow-node"><div class="flow-icon amber"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div><div class="flow-label">Build</div></div>
    <div class="flow-connector"></div>
    <div class="flow-node"><div class="flow-icon dark"><svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></div><div class="flow-label">Test</div></div>
    <div class="flow-connector"></div>
    <div class="flow-node"><div class="flow-icon amber"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div class="flow-label">Deploy</div></div>
  </section>

  <!-- STATS -->
  <section class="stats-section">
    <div class="stat-item"><span class="stat-value">100%</span><span class="stat-label">Client Ownership</span></div>
    <div class="stat-item"><span class="stat-value">0</span><span class="stat-label">Templates Used</span></div>
    <div class="stat-item"><span class="stat-value">∞</span><span class="stat-label">Customization</span></div>
    <div class="stat-item"><span class="stat-value">24/7</span><span class="stat-label">Ongoing Support</span></div>
    <div class="stat-item"><span class="stat-value">Full</span><span class="stat-label">Source Access</span></div>
    <div class="stat-item"><span class="stat-value">1:1</span><span class="stat-label">Dedicated Team</span></div>
  </section>

  <!-- WHAT WE BUILD -->
  <section class="content-section">
    <div class="section-header">
      <div class="section-badge">WHAT WE BUILD</div>
      <h2 class="section-title">Bespoke <span class="highlight">Custom Systems</span></h2>
      <p class="section-description">From AI-powered apps to full infrastructure stacks — we engineer exactly what your business needs, nothing more, nothing less.</p>
    </div>
    <div class="capabilities-grid">
      <div class="capability-card"><span class="card-accent"></span><div class="card-icon"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/></svg></div><h3>Custom AI Applications</h3><p>Intelligent applications built with your proprietary data, workflows, and business rules baked directly into the system.</p><ul><li>Custom LLM integrations</li><li>Proprietary AI models</li><li>Intelligent automation</li></ul></div>
      <div class="capability-card"><span class="card-accent"></span><div class="card-icon"><svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div><h3>System Integrations</h3><p>Connect your existing tools, platforms, and databases into a unified ecosystem that works as one.</p><ul><li>API development</li><li>Platform bridges</li><li>Data synchronization</li></ul></div>
      <div class="capability-card"><span class="card-accent"></span><div class="card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div><h3>Workflow Automation</h3><p>End-to-end automation engines that eliminate manual processes and run your operations on autopilot.</p><ul><li>Multi-step workflows</li><li>Conditional logic</li><li>Event-driven triggers</li></ul></div>
      <div class="capability-card"><span class="card-accent"></span><div class="card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="2 3 12 13 22 3"/></svg></div><h3>Custom SMTP & Email</h3><p>Dedicated email infrastructure built to your specifications — sending volume, domain strategy, and compliance all tailored.</p><ul><li>Private IP pools</li><li>Custom routing rules</li><li>Deliverability engineering</li></ul></div>
      <div class="capability-card"><span class="card-accent"></span><div class="card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div><h3>Infrastructure Builds</h3><p>Self-hosted, secure infrastructure designed around your performance, compliance, and scalability requirements.</p><ul><li>Self-hosted deployments</li><li>Container orchestration</li><li>Security hardening</li></ul></div>
      <div class="capability-card"><span class="card-accent"></span><div class="card-icon"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><h3>Full-Stack Applications</h3><p>Complete web and mobile applications engineered from the ground up with your brand, your logic, your data.</p><ul><li>Frontend & backend</li><li>Database architecture</li><li>Deployment pipeline</li></ul></div>
    </div>
  </section>

  <!-- WHY CHOOSE -->
  <section class="content-section">
    <div class="section-header">
      <div class="section-badge">THE ORENCUSTOMS DIFFERENCE</div>
      <h2 class="section-title">Why Go <span class="highlight">Custom</span></h2>
      <p class="section-description">Off-the-shelf tools force you to work around their limitations. Custom builds work around yours.</p>
    </div>
    <div class="why-grid">
      <div class="why-card"><div class="why-icon"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div><div><h3>You Own Everything</h3><p>Full source code, full IP ownership. No vendor lock-in, no monthly ransom. It's yours forever.</p></div></div>
      <div class="why-card"><div class="why-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div><h3>Built for Your Logic</h3><p>Every feature, every workflow, every rule mirrors your actual business processes — not someone else's template.</p></div></div>
      <div class="why-card"><div class="why-icon"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div><div><h3>Scale Without Limits</h3><p>No per-seat pricing, no feature gates. Your custom system scales with your business on your terms.</p></div></div>
      <div class="why-card"><div class="why-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div><h3>Faster Than You Think</h3><p>Our modular approach and proven architecture patterns mean custom doesn't mean slow. Weeks, not months.</p></div></div>
      <div class="why-card"><div class="why-icon"><svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div><div><h3>Competitive Advantage</h3><p>While competitors use the same SaaS tools, your custom system becomes an asset only you have.</p></div></div>
      <div class="why-card"><div class="why-icon"><svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></div><div><h3>Ongoing Partnership</h3><p>We don't disappear after launch. Continuous support, iteration, and optimization as your business evolves.</p></div></div>
    </div>
  </section>

  <!-- PROCESS -->
  <section class="process-section">
    <div class="section-header">
      <div class="section-badge">HOW IT WORKS</div>
      <h2 class="section-title">From Idea to <span class="highlight">Deployed System</span></h2>
      <p class="section-description">A battle-tested process that turns complex requirements into production-ready systems.</p>
    </div>
    <div class="process-timeline">
      <div class="process-step"><div class="process-number">01</div><div class="process-content"><h3>Discovery & Scoping</h3><p>Deep dive into your business logic, workflows, pain points, and goals. We document every requirement and map the technical architecture before a single line of code is written.</p></div></div>
      <div class="process-step"><div class="process-number">02</div><div class="process-content"><h3>Architecture & Design</h3><p>We design the system architecture, data models, integration points, and user experience. You review and approve the blueprint before build begins.</p></div></div>
      <div class="process-step"><div class="process-number">03</div><div class="process-content"><h3>Build & Iterate</h3><p>Agile development with weekly demos so you see progress in real time. Each sprint delivers working functionality you can test and provide feedback on immediately.</p></div></div>
      <div class="process-step"><div class="process-number">04</div><div class="process-content"><h3>Test, Deploy & Support</h3><p>Rigorous QA, security hardening, and performance optimization before launch. Post-deployment, we provide ongoing support, monitoring, and iteration.</p></div></div>
    </div>
  </section>

  <!-- TRUSTED BY -->
  <section class="trusted-section">
    <div class="trusted-label">Verified & Reviewed On</div>
    <div class="trusted-logos">
      <a href="https://g.page/r/CcTOiNDyo03PEBM/review" target="_blank" rel="noopener" aria-label="Google Reviews"><img src="https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/6980242c66e7ca8c84cce4b8.svg" alt="Google Reviews" loading="lazy"></a>
      <a href="https://www.trustpilot.com/review/orengen.io" target="_blank" rel="noopener" aria-label="Trustpilot"><img src="https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/6980251966e7ca0123cd2a56.svg" alt="Trustpilot" loading="lazy"></a>
      <a href="https://clutch.co/profile/orengen-worldwide" target="_blank" rel="noopener" aria-label="Clutch"><img src="https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/69802a6a1fd8278b3c8c75e6.svg" alt="Clutch" loading="lazy"></a>
      <a href="https://www.g2.com/products/orengen/reviews" target="_blank" rel="noopener" aria-label="G2"><img src="https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/698026301311f6be3e8f43f1.svg" alt="G2" loading="lazy"></a>
      <a href="https://www.bbb.org/us/tx/mansfield/profile/computer-software/orengen-worldwide-0825-1000236185/#sealclick" target="_blank" rel="noopener" aria-label="BBB Accredited"><img src="https://seal-fortworth.bbb.org/seals/blue-seal-200-65-bbb-1000236185.png" alt="BBB Accredited" loading="lazy"></a>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <h2 class="cta-title">Ready to Build <span class="highlight">Something Custom?</span></h2>
    <p class="cta-description">Tell us what you need. We'll architect it, build it, deploy it, and hand you the keys. No templates. No shortcuts. Just your system.</p>
    <div class="actions">
      <a href="https://calendly.com/orengenio/30min" class="button" target="_blank" rel="noopener">
        <div class="dots_border"></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle"><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"></path></svg>
        <span class="text_button">Start Your Custom Build</span>
      </a>
    </div>
  </section>
`

export default function Page() {
  return (
    <div className="pt-24 pb-12" dangerouslySetInnerHTML={{ __html: `
<style>

    @import url('https://fonts.cdnfonts.com/css/canva-sans');
    :root{--primary:#F89E16;--primary-light:#FBBA42;--primary-dark:#D4850F;--accent:#FFC857;--accent-dark:#F89E16;--bg-dark:#0d0d0d;--bg-card:rgba(255,255,255,0.03);--border:rgba(255,255,255,0.08);--text:#fff;--text-secondary:var(--oren-sub);--text-muted:var(--oren-muted)}
    *{margin:0;padding:0;box-sizing:border-box}
    html,body{background:var(--bg-dark)!important;color:var(--text)!important;font-family:'Canva Sans','Inter',sans-serif!important;overflow-x:hidden}
    h1,h2,h3,h4,h5,h6{font-family:'League Spartan',sans-serif!important}

    /* ===== HERO ===== */
    .hero{position:relative;min-height:90vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 40px 80px;overflow:hidden}
    .hero::before{content:'';position:absolute;top:-20%;right:10%;width:600px;height:600px;background:radial-gradient(circle,rgba(248,158,22,0.12) 0%,transparent 70%);border-radius:50%;animation:heroFloat 8s ease-in-out infinite}
    .hero::after{content:'';position:absolute;bottom:-10%;left:5%;width:500px;height:500px;background:radial-gradient(circle,rgba(255,200,87,0.08) 0%,transparent 70%);border-radius:50%;animation:heroFloat 10s ease-in-out infinite reverse}
    @keyframes heroFloat{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(30px,-40px) scale(1.05)}}
    .hero-content{max-width:900px;margin:0 auto;position:relative;z-index:2}
    .hero-badge{display:inline-flex;align-items:center;gap:10px;padding:10px 24px;background:rgba(248,158,22,0.12)!important;border:2px solid rgba(248,158,22,0.35)!important;border-radius:100px;color:var(--accent)!important;font-family:'League Spartan',sans-serif!important;font-size:12px!important;font-weight:700!important;letter-spacing:2px;text-transform:uppercase;margin-bottom:32px}
    .hero-badge svg{width:14px;height:14px;stroke:var(--accent);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
    h1{font-size:clamp(48px,8vw,96px)!important;line-height:1.05!important;margin-bottom:24px!important;letter-spacing:-1px;font-weight:800!important}
    h1 span{background:linear-gradient(90deg,#F89E16,#FFC857)!important;-webkit-background-clip:text!important;-webkit-text-fill-color:transparent!important;background-clip:text!important}
    .hero-text{font-family:'Canva Sans',sans-serif!important;font-size:18px!important;line-height:1.6;color:var(--text-secondary)!important;max-width:720px;margin:0 auto 36px}
    .actions{display:flex;gap:18px;justify-content:center;flex-wrap:wrap}

    /* Sparkle Button — Amber */
    .button{--black-700:hsla(0 0% 12%/1);--border_radius:9999px;--transtion:0.3s ease-in-out;cursor:pointer;position:relative;display:inline-flex;align-items:center;gap:.5rem;padding:1rem 2rem;background-color:transparent;border:none;border-radius:var(--border_radius);transform:scale(calc(1+(var(--active,0)*0.1)));transition:transform var(--transtion);text-decoration:none}
    .button::before{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:100%;background-color:var(--black-700);border-radius:var(--border_radius);box-shadow:inset 0 .5px hsl(0,0%,100%),inset 0 -1px 2px 0 hsl(0,0%,0%),0px 4px 10px -4px hsla(0 0% 0%/calc(1 - var(--active,0))),0 0 0 calc(var(--active,0)*0.375rem) hsla(37,95%,53%,0.75);transition:all var(--transtion);z-index:0}
    .button::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:100%;background-color:hsla(37,95%,53%,0.75);background-image:radial-gradient(at 51% 89%,hsla(37,95%,53%,1) 0px,transparent 50%),radial-gradient(at 100% 100%,hsla(37,95%,43%,1) 0px,transparent 50%),radial-gradient(at 22% 91%,hsla(37,95%,43%,1) 0px,transparent 50%);background-position:top;opacity:var(--active,0);border-radius:var(--border_radius);transition:opacity var(--transtion);z-index:2}
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
    .button .text_button{position:relative;z-index:10;background-image:linear-gradient(90deg,hsla(0 0% 100%/1) 0%,hsla(0 0% 100%/var(--active,0)) 120%);background-clip:text;-webkit-background-clip:text;font-size:1rem;color:transparent;font-weight:600;font-family:'League Spartan',sans-serif!important}

    /* ===== BUILD FLOW ANIMATION ===== */
    .build-flow{max-width:1100px;margin:0 auto;padding:70px 40px;display:flex;align-items:center;justify-content:center}
    .flow-node{text-align:center;flex:0 0 auto}
    .flow-icon{width:76px;height:76px;border-radius:18px;display:flex;align-items:center;justify-content:center;margin:0 auto 10px}
    .flow-icon svg{width:32px;height:32px;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
    .flow-icon.amber{background:rgba(248,158,22,0.15);border:2px solid rgba(248,158,22,0.4)}.flow-icon.amber svg{stroke:var(--accent)}
    .flow-icon.dark{background:rgba(255,255,255,0.04);border:2px solid rgba(255,255,255,0.12)}.flow-icon.dark svg{stroke:var(--text-secondary)}
    .flow-label{font-family:'League Spartan',sans-serif!important;font-size:12px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px}
    .flow-connector{flex:1;height:2px;background:rgba(248,158,22,0.2);position:relative;min-width:30px;max-width:100px}
    .flow-connector::after{content:'';position:absolute;top:-3px;width:8px;height:8px;background:var(--accent);border-radius:50%;animation:flowDot 2.5s ease-in-out infinite;box-shadow:0 0 12px rgba(255,200,87,0.6)}
    .flow-connector:nth-of-type(2)::after{animation-delay:0s}.flow-connector:nth-of-type(4)::after{animation-delay:.5s}.flow-connector:nth-of-type(6)::after{animation-delay:1s}.flow-connector:nth-of-type(8)::after{animation-delay:1.5s}
    @keyframes flowDot{0%{left:0;opacity:0}10%{opacity:1}90%{opacity:1}100%{left:calc(100% - 8px);opacity:0}}

    /* ===== STATS ===== */
    .stats-section{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:20px;border-top:1px solid rgba(248,158,22,0.25);border-bottom:1px solid rgba(248,158,22,0.25)}
    .stat-item{text-align:center;padding:28px 16px;background:var(--bg-card);border:1px solid rgba(248,158,22,0.15);border-radius:16px;transition:all .3s}
    .stat-item:hover{border-color:rgba(248,158,22,0.4);background:rgba(248,158,22,0.06);transform:translateY(-2px)}
    .stat-value{font-family:'League Spartan',sans-serif!important;font-size:40px!important;font-weight:800!important;background:linear-gradient(135deg,#F89E16,#FFC857)!important;-webkit-background-clip:text!important;-webkit-text-fill-color:transparent!important;background-clip:text!important;line-height:1;margin-bottom:8px;display:block}
    .stat-label{font-family:'Canva Sans',sans-serif!important;font-size:11px!important;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:1.5px;display:block}

    /* ===== SECTIONS ===== */
    .content-section{max-width:1200px;margin:0 auto;padding:100px 40px}
    .section-header{text-align:center;margin-bottom:60px}
    .section-badge{display:inline-block;padding:8px 20px;background:rgba(248,158,22,0.12)!important;border:1px solid rgba(248,158,22,0.35)!important;border-radius:100px;font-family:'League Spartan',sans-serif!important;font-size:12px!important;font-weight:700!important;color:var(--accent)!important;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:20px}
    .section-title{font-size:clamp(36px,5vw,56px)!important;line-height:1.1!important;margin-bottom:20px!important;font-weight:800!important}
    .highlight{background:linear-gradient(90deg,#F89E16,#FFC857)!important;-webkit-background-clip:text!important;-webkit-text-fill-color:transparent!important;background-clip:text!important}
    .section-description{font-family:'Canva Sans',sans-serif!important;font-size:18px!important;line-height:1.7;color:var(--text-secondary)!important;max-width:700px;margin:0 auto}

    /* ===== FEATURE CARDS ===== */
    .capabilities-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:40px}
    .capability-card{position:relative;background:var(--bg-card)!important;border:1px solid rgba(248,158,22,0.15)!important;border-radius:16px;padding:32px;transition:all .3s}
    .capability-card:hover{transform:translateY(-4px);border-color:rgba(248,158,22,0.5)!important;background:rgba(248,158,22,0.06)!important;box-shadow:0 12px 32px rgba(248,158,22,0.12)}
    .capability-card .card-accent{position:absolute;top:-1px;left:-1px;right:-1px;height:4px;background:linear-gradient(90deg,#F89E16,#FFC857)!important;border-radius:16px 16px 0 0;opacity:0;transition:opacity .3s}
    .capability-card:hover .card-accent{opacity:1}
    .card-icon{width:56px;height:56px;border-radius:14px;background:rgba(248,158,22,0.12);border:1px solid rgba(248,158,22,0.25);display:flex;align-items:center;justify-content:center;margin-bottom:20px;transition:transform .3s}
    .capability-card:hover .card-icon{transform:scale(1.1)}
    .card-icon svg{width:26px;height:26px;stroke:var(--accent);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
    .capability-card h3{font-size:22px!important;font-weight:700!important;margin-bottom:12px!important}
    .capability-card p{font-family:'Canva Sans',sans-serif!important;font-size:15px!important;line-height:1.7;color:var(--text-secondary)!important;margin-bottom:20px}
    .capability-card ul{list-style:none;padding:0}
    .capability-card ul li{font-family:'Canva Sans',sans-serif!important;font-size:14px!important;color:var(--text-muted);padding:8px 0 8px 24px;position:relative}
    .capability-card ul li::before{content:"→";position:absolute;left:0;color:var(--accent);font-weight:bold}

    /* ===== WHY CHOOSE ===== */
    .why-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:24px;margin-top:40px}
    .why-card{display:flex;gap:20px;padding:28px;border:1px solid transparent;border-radius:16px;transition:all .3s}
    .why-card:hover{background:rgba(248,158,22,0.04);border-color:rgba(248,158,22,0.15)}
    .why-icon{width:52px;height:52px;background:rgba(248,158,22,0.1);border:1px solid rgba(248,158,22,0.2);border-radius:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
    .why-icon svg{width:24px;height:24px;stroke:var(--accent);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
    .why-card h3{font-size:20px!important;font-weight:700!important;margin-bottom:8px!important}
    .why-card p{font-family:'Canva Sans',sans-serif!important;font-size:14px!important;line-height:1.7;color:var(--text-muted)}

    /* ===== PROCESS ===== */
    .process-section{max-width:1000px;margin:0 auto;padding:100px 40px}
    .process-timeline{margin-top:60px;display:flex;flex-direction:column;gap:40px}
    .process-step{display:flex;gap:32px;align-items:flex-start}
    .process-number{flex-shrink:0;width:80px;height:80px;border-radius:16px;background:rgba(248,158,22,0.12)!important;border:2px solid rgba(248,158,22,0.3)!important;display:flex;align-items:center;justify-content:center;font-size:32px!important;font-weight:800!important;color:var(--accent)!important;-webkit-text-fill-color:var(--accent)!important}
    .process-content h3{font-size:24px!important;font-weight:700!important;margin-bottom:12px!important}
    .process-content p{font-family:'Canva Sans',sans-serif!important;font-size:16px!important;line-height:1.7;color:var(--text-secondary)!important}

    /* ===== TRUSTED ===== */
    .trusted-section{max-width:900px;margin:0 auto;padding:60px 40px;text-align:center}
    .trusted-label{font-family:'League Spartan',sans-serif!important;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:3px;margin-bottom:28px}
    .trusted-logos{display:flex;align-items:center;justify-content:center;gap:24px;flex-wrap:wrap}
    .trusted-logos a{display:flex;align-items:center;opacity:.5;transition:opacity .3s;height:28px}
    .trusted-logos a:hover{opacity:1}
    .trusted-logos img{height:28px;width:auto;filter:grayscale(100%) brightness(2);transition:filter .3s}
    .trusted-logos a:hover img{filter:none}

    /* ===== CTA ===== */
    .cta-section{max-width:900px;margin:0 auto;padding:120px 40px 100px;text-align:center}
    .cta-title{font-size:clamp(36px,5vw,56px)!important;line-height:1.2;margin-bottom:24px!important;font-weight:800!important}
    .cta-description{font-family:'Canva Sans',sans-serif!important;font-size:18px!important;line-height:1.7;color:var(--text-secondary)!important;margin-bottom:40px;max-width:600px;margin-left:auto;margin-right:auto}

    /* ===== RESPONSIVE ===== */
    @media(max-width:768px){
      .hero{padding:100px 20px 60px;min-height:70vh}
      h1{font-size:42px!important}
      .build-flow{flex-wrap:wrap;gap:8px;padding:40px 20px}.flow-connector{display:none}.flow-node{flex:0 0 calc(50% - 8px)}
      .stats-section{grid-template-columns:repeat(2,1fr);gap:16px;padding:60px 20px}
      .capabilities-grid{grid-template-columns:1fr}
      .why-grid{grid-template-columns:1fr}
      .process-step{flex-direction:column;gap:20px}
      .process-number{width:60px;height:60px;font-size:24px!important}
      .content-section,.process-section{padding:60px 20px}
      .cta-section{padding:80px 20px}
      .trusted-section{padding:40px 20px}
    }
  
</style>
<!-- HERO -->
  <section class="hero">
    <div class="hero-content">
      <div class="hero-badge">
        <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        Bespoke Systems &amp; Custom Builds
      </div>
      <h1>Your Business Logic.<br /><span>Our Engineering.</span></h1>
      <p class="hero-text">Bespoke systems — AI apps, integrations, automations, SMTP, and infrastructure — built around your exact business logic and owned by you. No templates. No compromises. 100% yours.</p>
      <div class="actions">
        <a href="https://calendly.com/orengenio/30min" class="button" target="_blank" rel="noopener">
          <div class="dots_border"></div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle"><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"></path></svg>
          <span class="text_button">Start Your Custom Build</span>
        </a>
      </div>
    </div>
  </section>

  <!-- BUILD FLOW ANIMATION -->
  <section class="build-flow">
    <div class="flow-node"><div class="flow-icon amber"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><div class="flow-label">Discovery</div></div>
    <div class="flow-connector"></div>
    <div class="flow-node"><div class="flow-icon dark"><svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div><div class="flow-label">Architect</div></div>
    <div class="flow-connector"></div>
    <div class="flow-node"><div class="flow-icon amber"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div><div class="flow-label">Build</div></div>
    <div class="flow-connector"></div>
    <div class="flow-node"><div class="flow-icon dark"><svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></div><div class="flow-label">Test</div></div>
    <div class="flow-connector"></div>
    <div class="flow-node"><div class="flow-icon amber"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div class="flow-label">Deploy</div></div>
  </section>

  <!-- STATS -->
  <section class="stats-section">
    <div class="stat-item"><span class="stat-value">100%</span><span class="stat-label">Client Ownership</span></div>
    <div class="stat-item"><span class="stat-value">0</span><span class="stat-label">Templates Used</span></div>
    <div class="stat-item"><span class="stat-value">∞</span><span class="stat-label">Customization</span></div>
    <div class="stat-item"><span class="stat-value">24/7</span><span class="stat-label">Ongoing Support</span></div>
    <div class="stat-item"><span class="stat-value">Full</span><span class="stat-label">Source Access</span></div>
    <div class="stat-item"><span class="stat-value">1:1</span><span class="stat-label">Dedicated Team</span></div>
  </section>

  <!-- WHAT WE BUILD -->
  <section class="content-section">
    <div class="section-header">
      <div class="section-badge">WHAT WE BUILD</div>
      <h2 class="section-title">Bespoke <span class="highlight">Custom Systems</span></h2>
      <p class="section-description">From AI-powered apps to full infrastructure stacks — we engineer exactly what your business needs, nothing more, nothing less.</p>
    </div>
    <div class="capabilities-grid">
      <div class="capability-card"><span class="card-accent"></span><div class="card-icon"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/></svg></div><h3>Custom AI Applications</h3><p>Intelligent applications built with your proprietary data, workflows, and business rules baked directly into the system.</p><ul><li>Custom LLM integrations</li><li>Proprietary AI models</li><li>Intelligent automation</li></ul></div>
      <div class="capability-card"><span class="card-accent"></span><div class="card-icon"><svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div><h3>System Integrations</h3><p>Connect your existing tools, platforms, and databases into a unified ecosystem that works as one.</p><ul><li>API development</li><li>Platform bridges</li><li>Data synchronization</li></ul></div>
      <div class="capability-card"><span class="card-accent"></span><div class="card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div><h3>Workflow Automation</h3><p>End-to-end automation engines that eliminate manual processes and run your operations on autopilot.</p><ul><li>Multi-step workflows</li><li>Conditional logic</li><li>Event-driven triggers</li></ul></div>
      <div class="capability-card"><span class="card-accent"></span><div class="card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="2 3 12 13 22 3"/></svg></div><h3>Custom SMTP & Email</h3><p>Dedicated email infrastructure built to your specifications — sending volume, domain strategy, and compliance all tailored.</p><ul><li>Private IP pools</li><li>Custom routing rules</li><li>Deliverability engineering</li></ul></div>
      <div class="capability-card"><span class="card-accent"></span><div class="card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div><h3>Infrastructure Builds</h3><p>Self-hosted, secure infrastructure designed around your performance, compliance, and scalability requirements.</p><ul><li>Self-hosted deployments</li><li>Container orchestration</li><li>Security hardening</li></ul></div>
      <div class="capability-card"><span class="card-accent"></span><div class="card-icon"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><h3>Full-Stack Applications</h3><p>Complete web and mobile applications engineered from the ground up with your brand, your logic, your data.</p><ul><li>Frontend & backend</li><li>Database architecture</li><li>Deployment pipeline</li></ul></div>
    </div>
  </section>

  <!-- WHY CHOOSE -->
  <section class="content-section">
    <div class="section-header">
      <div class="section-badge">THE ORENCUSTOMS DIFFERENCE</div>
      <h2 class="section-title">Why Go <span class="highlight">Custom</span></h2>
      <p class="section-description">Off-the-shelf tools force you to work around their limitations. Custom builds work around yours.</p>
    </div>
    <div class="why-grid">
      <div class="why-card"><div class="why-icon"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div><div><h3>You Own Everything</h3><p>Full source code, full IP ownership. No vendor lock-in, no monthly ransom. It's yours forever.</p></div></div>
      <div class="why-card"><div class="why-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div><h3>Built for Your Logic</h3><p>Every feature, every workflow, every rule mirrors your actual business processes — not someone else's template.</p></div></div>
      <div class="why-card"><div class="why-icon"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div><div><h3>Scale Without Limits</h3><p>No per-seat pricing, no feature gates. Your custom system scales with your business on your terms.</p></div></div>
      <div class="why-card"><div class="why-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div><h3>Faster Than You Think</h3><p>Our modular approach and proven architecture patterns mean custom doesn't mean slow. Weeks, not months.</p></div></div>
      <div class="why-card"><div class="why-icon"><svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div><div><h3>Competitive Advantage</h3><p>While competitors use the same SaaS tools, your custom system becomes an asset only you have.</p></div></div>
      <div class="why-card"><div class="why-icon"><svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></div><div><h3>Ongoing Partnership</h3><p>We don't disappear after launch. Continuous support, iteration, and optimization as your business evolves.</p></div></div>
    </div>
  </section>

  <!-- PROCESS -->
  <section class="process-section">
    <div class="section-header">
      <div class="section-badge">HOW IT WORKS</div>
      <h2 class="section-title">From Idea to <span class="highlight">Deployed System</span></h2>
      <p class="section-description">A battle-tested process that turns complex requirements into production-ready systems.</p>
    </div>
    <div class="process-timeline">
      <div class="process-step"><div class="process-number">01</div><div class="process-content"><h3>Discovery & Scoping</h3><p>Deep dive into your business logic, workflows, pain points, and goals. We document every requirement and map the technical architecture before a single line of code is written.</p></div></div>
      <div class="process-step"><div class="process-number">02</div><div class="process-content"><h3>Architecture & Design</h3><p>We design the system architecture, data models, integration points, and user experience. You review and approve the blueprint before build begins.</p></div></div>
      <div class="process-step"><div class="process-number">03</div><div class="process-content"><h3>Build & Iterate</h3><p>Agile development with weekly demos so you see progress in real time. Each sprint delivers working functionality you can test and provide feedback on immediately.</p></div></div>
      <div class="process-step"><div class="process-number">04</div><div class="process-content"><h3>Test, Deploy & Support</h3><p>Rigorous QA, security hardening, and performance optimization before launch. Post-deployment, we provide ongoing support, monitoring, and iteration.</p></div></div>
    </div>
  </section>

  <!-- TRUSTED BY -->
  <section class="trusted-section">
    <div class="trusted-label">Verified & Reviewed On</div>
    <div class="trusted-logos">
      <a href="https://g.page/r/CcTOiNDyo03PEBM/review" target="_blank" rel="noopener" aria-label="Google Reviews"><img src="https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/6980242c66e7ca8c84cce4b8.svg" alt="Google Reviews" loading="lazy"></a>
      <a href="https://www.trustpilot.com/review/orengen.io" target="_blank" rel="noopener" aria-label="Trustpilot"><img src="https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/6980251966e7ca0123cd2a56.svg" alt="Trustpilot" loading="lazy"></a>
      <a href="https://clutch.co/profile/orengen-worldwide" target="_blank" rel="noopener" aria-label="Clutch"><img src="https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/69802a6a1fd8278b3c8c75e6.svg" alt="Clutch" loading="lazy"></a>
      <a href="https://www.g2.com/products/orengen/reviews" target="_blank" rel="noopener" aria-label="G2"><img src="https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/698026301311f6be3e8f43f1.svg" alt="G2" loading="lazy"></a>
      <a href="https://www.bbb.org/us/tx/mansfield/profile/computer-software/orengen-worldwide-0825-1000236185/#sealclick" target="_blank" rel="noopener" aria-label="BBB Accredited"><img src="https://seal-fortworth.bbb.org/seals/blue-seal-200-65-bbb-1000236185.png" alt="BBB Accredited" loading="lazy"></a>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <h2 class="cta-title">Ready to Build <span class="highlight">Something Custom?</span></h2>
    <p class="cta-description">Tell us what you need. We'll architect it, build it, deploy it, and hand you the keys. No templates. No shortcuts. Just your system.</p>
    <div class="actions">
      <a href="https://calendly.com/orengenio/30min" class="button" target="_blank" rel="noopener">
        <div class="dots_border"></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle"><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"></path><path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"></path></svg>
        <span class="text_button">Start Your Custom Build</span>
      </a>
    </div>
  </section>
` }} />
  );
}
