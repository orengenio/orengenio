import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OrenNexus — Unified CRM + Automation Hub | OrenGen Worldwide",
  description:
    "OrenNexus is a unified CRM and automation hub. Every pipeline, contact, and workflow in one AI-powered command center. Starting at $97/mo.",
  alternates: { canonical: "https://orengen.io/orennexus" },
};

export default function Page() {
  return (
    <div className="pt-24 pb-12" dangerouslySetInnerHTML={{ __html: `
<script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js"></script>

<style>


    @import url('https://fonts.cdnfonts.com/css/canva-sans');

    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --primary: #BA2D1D; /* OrenNexus accent */
      --secondary: #E2725B;
      --navy: var(--oren-orange);
      --bg-dark: var(--background);
      --bg-card: #0a0a0a;
      --bg-card-hover: #111111;
      --text-primary: var(--foreground);
      --text-muted: rgba(255, 255, 255, 0.6);
      --text-dim: rgba(255, 255, 255, 0.4);
      --stat-blue: #BA2D1D; /* OrenNexus stat color */
      --gold: #FBBC05;
      --crm-blue: #0D3B66;
      --web-silver: #B0BEC5;
      --leads-green: #10B981;
      --font-display: 'League Spartan', sans-serif;
      --font-body: 'Canva Sans', 'Inter', system-ui, sans-serif;
      --radius-lg: 20px;
      --radius-md: 15px;
      --radius-sm: 10px;
      --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
      --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    html, body {
      background: var(--bg-dark) !important;
      color: var(--text-primary) !important;
      font-family: var(--font-body) !important;
      overflow-x: hidden !important;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* ═══════════════════════════════════════════════════════
       SECTION 1 — HERO (Spline 3D + Title + CTA)
       ═══════════════════════════════════════════════════════ */
    .experience {
      position: relative;
      height: 110vh;
      min-height: 860px;
      width: 100%;
      overflow: hidden;
    }

    .experience::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 20% 50%, rgba(186, 45, 29, 0.20) 0%, transparent 55%),
        radial-gradient(circle at 80% 50%, rgba(212, 168, 67, 0.12) 0%, transparent 60%);
      animation: gradientPulse 8s ease-in-out infinite;
      pointer-events: none;
      z-index: 1;
    }

    @keyframes gradientPulse {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.1); }
    }

    .bot-layer {
      position: absolute;
      inset: 0;
      z-index: 1;
      transform: translateY(-40px);
    }

    spline-viewer { width: 100%; height: 100%; }

    /* Fire canvas — behind overlay text, above robot */
    #fire-canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      pointer-events: none;
    }

    .overlay {
      position: relative;
      z-index: 3;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding-top: 14vh;
      pointer-events: none;
    }

    .overlay-content {
      max-width: 900px;
      text-align: center;
      transition: transform 0.3s var(--ease-out);
    }

    .hero-title {
      font-family: var(--font-display) !important;
      font-size: clamp(48px, 8vw, 96px) !important;
      line-height: 1.05 !important;
      margin-bottom: 24px !important;
      letter-spacing: -1px !important;
      font-weight: 700 !important;
      color: white !important;
      perspective: 1000px;
      position: relative;
    }

    .hero-title::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      animation: shimmer 3s infinite 2s;
      pointer-events: none;
    }

    @keyframes shimmer {
      0% { left: -100%; }
      100% { left: 200%; }
    }

    /* Eyebrow + Fire Title */
    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      font-family: var(--font-display) !important;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.36em;
      text-transform: uppercase;
      color: var(--secondary);
      margin-bottom: 22px;
      opacity: 0;
      transform: translateY(20px);
      animation: titleReveal 1.0s var(--ease-out) forwards 0.15s;
    }
    .eyebrow::before, .eyebrow::after {
      content: '';
      display: block;
      width: 44px;
      height: 1px;
    }
    .eyebrow::before { background: linear-gradient(90deg, transparent, var(--primary)); }
    .eyebrow::after  { background: linear-gradient(90deg, var(--primary), transparent); }

    .hero-title .solid { display: block; color: white !important; }

    .hero-title .fire-text {
      display: block;
      background: linear-gradient(155deg,
        var(--foreground) 0%, #F8C4BE 18%, #BA2D1D 40%,
        #E04634 62%, #D4A843 82%, var(--foreground) 100%);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: fireTextShift 4s ease-in-out infinite, fireGlow 3s ease-in-out infinite;
    }
    @keyframes fireTextShift {
      0%,100%{ background-position: 0% 0%; }
      33%    { background-position: 100% 50%; }
      66%    { background-position: 50% 100%; }
    }
    @keyframes fireGlow {
      0%,100%{ filter: drop-shadow(0 0 22px rgba(255,100,0,.7))  drop-shadow(0 0 55px rgba(204,60,0,.35)); }
      30%    { filter: drop-shadow(0 0 44px rgba(255,150,0,.95)) drop-shadow(0 0 90px rgba(220,80,0,.55)); }
      60%    { filter: drop-shadow(0 0 16px rgba(255,70,0,.5))   drop-shadow(0 0 40px rgba(180,50,0,.25)); }
    }

    .our-systems, .your-growth {
      display: inline-block;
      opacity: 0;
      transform: translateY(30px);
      animation: titleReveal 1.2s var(--ease-out) forwards;
      color: white !important;
    }

    .our-systems { animation-delay: 0.2s; }
    .your-growth { animation-delay: 0.5s; }

    @keyframes titleReveal {
      to { opacity: 1; transform: translateY(0); }
    }

    .our-systems .accent {
      color: var(--primary) !important;
      text-shadow:
        0 0 40px rgba(204, 85, 0, 0.5),
        0 0 80px rgba(204, 85, 0, 0.3),
        0 2px 10px rgba(0, 0, 0, 0.8) !important;
      animation: pulseGlowOrange 3s ease-in-out infinite;
    }

    .your-growth .accent {
      color: var(--navy) !important;
      text-shadow:
        0 0 40px rgba(0, 51, 102, 0.6),
        0 0 80px rgba(0, 51, 102, 0.4),
        0 2px 10px rgba(0, 0, 0, 0.8) !important;
      animation: pulseGlowBlue 3s ease-in-out infinite 1.5s;
    }

    @keyframes pulseGlowOrange {
      0%, 100% { text-shadow: 0 0 40px rgba(204, 85, 0, 0.5), 0 0 80px rgba(204, 85, 0, 0.3), 0 2px 10px rgba(0, 0, 0, 0.8); }
      50% { text-shadow: 0 0 60px rgba(204, 85, 0, 0.8), 0 0 120px rgba(204, 85, 0, 0.5), 0 2px 15px rgba(0, 0, 0, 0.9); }
    }

    @keyframes pulseGlowBlue {
      0%, 100% { text-shadow: 0 0 40px rgba(0, 51, 102, 0.6), 0 0 80px rgba(0, 51, 102, 0.4), 0 2px 10px rgba(0, 0, 0, 0.8); }
      50% { text-shadow: 0 0 60px rgba(0, 51, 102, 0.9), 0 0 120px rgba(0, 51, 102, 0.6), 0 2px 15px rgba(0, 0, 0, 0.9); }
    }

    .hero-text {
      font-family: var(--font-body) !important;
      font-size: 18px !important;
      line-height: 1.6 !important;
      color: rgba(255, 255, 255, 0.85) !important;
      max-width: 720px !important;
      margin: 0 auto 36px auto !important;
      opacity: 0;
      transform: translateY(20px);
      animation: subtitleReveal 1.2s var(--ease-out) forwards 0.9s;
    }

    @keyframes subtitleReveal {
      to { opacity: 1; transform: translateY(0); }
    }

    .hero-actions {
      display: flex;
      gap: 18px;
      justify-content: center;
      pointer-events: auto;
      opacity: 0;
      transform: translateY(20px);
      animation: actionsReveal 1.2s var(--ease-out) forwards 1.2s;
    }

    @keyframes actionsReveal {
      to { opacity: 1; transform: translateY(0); }
    }

    /* ─── Sparkle CTA Button ─── */
    .cta-button {
      --black-700: hsla(0 0% 12% / 1);
      --border_radius: 9999px;
      --transtion: 0.3s ease-in-out;
      cursor: pointer;
      position: relative;
      display: flex;
      width: fit-content;
      align-self: center;
      align-items: center;
      gap: 0.5rem;
      transform-origin: center;
      padding: 1rem 2rem;
      background-color: transparent;
      border: none;
      border-radius: var(--border_radius);
      transform: scale(calc(1 + (var(--active, 0) * 0.1)));
      transition: transform var(--transtion);
      text-decoration: none;
    }

    .cta-button::before {
      content: "";
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 100%; height: 100%;
      background-color: var(--black-700);
      border-radius: var(--border_radius);
      box-shadow: inset 0 0.5px hsl(0, 0%, 100%), inset 0 -1px 2px 0 hsl(0, 0%, 0%),
        0px 4px 10px -4px hsla(0 0% 0% / calc(1 - var(--active, 0))),
        0 0 0 calc(var(--active, 0) * 0.375rem) hsl(27 93% 50% / 0.75);
      transition: all var(--transtion);
      z-index: 0;
    }

    .cta-button::after {
      content: "";
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 100%; height: 100%;
      background-color: hsla(27 93% 61% / 0.75);
      background-image:
        radial-gradient(at 51% 89%, hsla(27, 93%, 61%, 1) 0px, transparent 50%),
        radial-gradient(at 100% 100%, hsla(27, 93%, 50%, 1) 0px, transparent 50%),
        radial-gradient(at 22% 91%, hsla(27, 93%, 50%, 1) 0px, transparent 50%);
      background-position: top;
      opacity: var(--active, 0);
      border-radius: var(--border_radius);
      transition: opacity var(--transtion);
      z-index: 2;
    }

    .cta-button:is(:hover, :focus-visible) { --active: 1; }
    .cta-button:active { transform: scale(1); }

    .cta-button .dots_border {
      --size_border: calc(100% + 2px);
      overflow: hidden;
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: var(--size_border);
      height: var(--size_border);
      background-color: transparent;
      border-radius: var(--border_radius);
      z-index: -10;
    }

    .cta-button .dots_border::before {
      content: "";
      position: absolute;
      top: 30%; left: 50%;
      transform: translate(-50%, -50%);
      transform-origin: left;
      transform: rotate(0deg);
      width: 100%; height: 2rem;
      background-color: white;
      mask: linear-gradient(transparent 0%, white 120%);
      animation: rotate 2s linear infinite;
    }

    @keyframes rotate { to { transform: rotate(360deg); } }

    .cta-button .sparkle {
      position: relative;
      z-index: 10;
      width: 1.75rem;
    }

    .cta-button .sparkle .path {
      fill: currentColor;
      stroke: currentColor;
      transform-origin: center;
      color: hsl(0, 0%, 100%);
    }

    .cta-button:is(:hover, :focus) .sparkle .path {
      animation: sparkPath 1.5s linear 0.5s infinite;
    }

    .cta-button .sparkle .path:nth-child(1) { --sp: 1.2; }
    .cta-button .sparkle .path:nth-child(2) { --sp: 1.2; }
    .cta-button .sparkle .path:nth-child(3) { --sp: 1.2; }

    @keyframes sparkPath {
      0%, 34%, 71%, 100% { transform: scale(1); }
      17% { transform: scale(var(--sp, 1)); }
      49% { transform: scale(var(--sp, 1)); }
      83% { transform: scale(var(--sp, 1)); }
    }

    .cta-button .text_button {
      position: relative;
      z-index: 10;
      background-image: linear-gradient(90deg, hsla(0 0% 100% / 1) 0%, hsla(0 0% 100% / var(--active, 0)) 120%);
      background-clip: text;
      -webkit-background-clip: text;
      font-size: 1rem;
      color: transparent;
      font-weight: 600;
      font-family: var(--font-display);
    }

    /* ═══════════════════════════════════════════════════════
       SECTION 2 — ANIMATED STATS BANNER
       ═══════════════════════════════════════════════════════ */
    .stats-section {
      position: relative;
      padding: 0 28px 110px;
      background: transparent;
      z-index: 4;
      margin-top: -360px; /* pulls TRANSFORMING... across robot legs */
      overflow: visible;
    }

    .stats-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(204, 85, 0, 0.4), rgba(0, 51, 102, 0.4), transparent);
    }

    .stats-container {
      max-width: 1400px;
      margin: 0 auto;
      position: relative;
    }

    .stats-header {
      text-align: center;
      margin-bottom: 70px;
    }

    .stats-header h2 {
      font-family: var(--font-display) !important;
      font-size: clamp(24px, 3.5vw, 42px) !important;
      font-weight: 400 !important;
      color: var(--text-primary) !important;
      margin-bottom: 20px !important;
      line-height: 1.2 !important;
      letter-spacing: 0.08em !important;
      text-transform: uppercase !important;
    }

    .stats-header p {
      font-family: var(--font-display) !important;
      font-size: 15px !important;
      font-weight: 300 !important;
      line-height: 1.7 !important;
      color: var(--text-dim) !important;
      max-width: 900px !important;
      margin: 0 auto !important;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .stat-card {
      text-align: center;
      padding: 30px 10px;
      position: relative;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.14);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      box-shadow: 0 18px 60px rgba(0,0,0,.55);
      transition: all 0.5s var(--ease-out);
      opacity: 0;
      transform: translateY(40px);
    }

    .stat-card.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .stat-card:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(204, 85, 0, 0.25);
      transform: translateY(-4px);
    }

    .stat-number {
      font-family: var(--font-display) !important;
      font-size: clamp(36px, 4vw, 56px) !important;
      font-weight: 300 !important;
      color: var(--stat-blue) !important;
      line-height: 1 !important;
      margin-bottom: 12px !important;
      display: block;
      transition: color 0.3s;
    }

    .stat-card:hover .stat-number {
      color: var(--primary) !important;
    }

    .stat-label {
      font-family: var(--font-display) !important;
      font-size: 13px !important;
      font-weight: 400 !important;
      color: var(--oren-sub) !important;
      line-height: 1.4 !important;
      letter-spacing: 0.5px !important;
    }

    /* ═══════════════════════════════════════════════════════

    /* ═══════════════════════════════════════════════════════
       RESPONSIVE
       ═══════════════════════════════════════════════════════ */
    @media (max-width: 1200px) {
      .stats-grid { grid-template-columns: repeat(3, 1fr); }
    }

    @media (max-width: 768px) {
      .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
      .stats-section { padding: 0 20px 100px; margin-top: -300px; }
      .bot-layer { transform: translateY(-20px); }
      .experience { min-height: 760px; }
      .stats-header { margin-bottom: 50px; }
      .stat-card { padding: 20px 8px; }
    }

    @media (max-width: 480px) {
      .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
      .stat-number { font-size: 32px !important; }
      .stat-label { font-size: 11px !important; }
      .stat-card { padding: 16px 6px; }
    }

  
  /* ── OrenNexus Brand Variables ── */
  :root {
    --nexus: #BA2D1D;
    --nexus-glow: rgba(186,45,29,0.35);
    --nexus-soft: rgba(186,45,29,0.12);
  }
  /* ── Stats ── */
  .nx-stats {
    padding: 80px 24px;
    background: linear-gradient(180deg, var(--background) 0%, #070b0f 100%);
  }
  .nx-stats-inner {
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
  }
  .nx-stats-label {
    font-family: 'League Spartan', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--nexus);
    margin-bottom: 16px;
  }
  .nx-stats-title {
    font-family: 'League Spartan', sans-serif;
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 800;
    color: #fff;
    margin: 0 0 48px;
  }
  .nx-stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 24px;
  }
  .nx-stat-card {
    background: var(--bg-card);
    border: 1px solid rgba(186,45,29,0.12);
    border-radius: 16px;
    padding: 32px 20px;
    text-align: center;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  .nx-stat-card:hover {
    border-color: rgba(186,45,29,0.35);
    box-shadow: 0 0 30px rgba(186,45,29,0.1);
  }
  .nx-stat-num {
    display: block;
    font-family: 'League Spartan', sans-serif;
    font-size: clamp(36px, 5vw, 52px);
    font-weight: 800;
    color: var(--nexus);
    line-height: 1;
    margin-bottom: 8px;
  }
  .nx-stat-lbl {
    font-family: 'Canva Sans', sans-serif;
    font-size: 13px;
    color: var(--text-muted);
  }

  /* ── What's Inside ── */
  .nx-inside {
    padding: 100px 24px;
    max-width: 1100px;
    margin: 0 auto;
  }
  .nx-section-tag {
    font-family: 'League Spartan', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--nexus);
    margin-bottom: 12px;
    display: block;
    text-align: center;
  }
  .nx-section-title {
    font-family: 'League Spartan', sans-serif;
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 800;
    color: #fff;
    text-align: center;
    margin: 0 0 16px;
  }
  .nx-section-sub {
    font-family: 'Canva Sans', sans-serif;
    font-size: 16px;
    color: var(--text-muted);
    text-align: center;
    max-width: 600px;
    margin: 0 auto 64px;
    line-height: 1.7;
  }
  .nx-pillars {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }
  .nx-pillar {
    background: var(--bg-card);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 20px;
    padding: 40px 32px;
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s, transform 0.3s;
  }
  .nx-pillar::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--nexus), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .nx-pillar:hover { border-color: rgba(186,45,29,0.2); transform: translateY(-4px); }
  .nx-pillar:hover::before { opacity: 1; }
  .nx-pillar-icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: var(--nexus-soft);
    border: 1px solid rgba(186,45,29,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 24px;
  }
  .nx-pillar-name {
    font-family: 'League Spartan', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    margin: 0 0 8px;
  }
  .nx-pillar-desc {
    font-family: 'Canva Sans', sans-serif;
    font-size: 14px;
    color: var(--text-muted);
    line-height: 1.7;
    margin: 0 0 20px;
  }
  .nx-pillar-features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .nx-pillar-features li {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Canva Sans', sans-serif;
    font-size: 13px;
    color: var(--text-muted);
  }
  .nx-pillar-features li::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--nexus);
    flex-shrink: 0;
  }

  /* ── Add-on Banner ── */
  .nx-addon {
    margin: 0 24px 100px;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    background: linear-gradient(135deg, rgba(186,45,29,0.08) 0%, rgba(204,85,0,0.08) 100%);
    border: 1px solid rgba(186,45,29,0.15);
    border-radius: 24px;
    padding: 60px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
  }
  .nx-addon-text {}
  .nx-addon-tag {
    font-family: 'League Spartan', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--oren-orange);
    margin-bottom: 12px;
    display: block;
  }
  .nx-addon-title {
    font-family: 'League Spartan', sans-serif;
    font-size: clamp(24px, 3vw, 36px);
    font-weight: 800;
    color: #fff;
    margin: 0 0 12px;
  }
  .nx-addon-desc {
    font-family: 'Canva Sans', sans-serif;
    font-size: 15px;
    color: var(--text-muted);
    line-height: 1.7;
    max-width: 520px;
    margin: 0;
  }
  .nx-addon-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    background: var(--oren-orange);
    color: #fff;
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    font-size: 15px;
    border-radius: 100px;
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.3s;
    box-shadow: 0 0 24px rgba(204,85,0,0.3);
  }
  .nx-addon-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 40px rgba(204,85,0,0.5);
    background: #e06000;
  }

  /* ── Final CTA ── */
  .nx-final-cta {
    text-align: center;
    padding: 80px 24px 120px;
    background: linear-gradient(180deg, var(--background) 0%, #070b0f 100%);
  }
  .nx-final-cta h2 {
    font-family: 'League Spartan', sans-serif;
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 800;
    color: #fff;
    margin: 0 0 16px;
  }
  .nx-final-cta h2 span { color: var(--nexus); }
  .nx-final-cta p {
    font-family: 'Canva Sans', sans-serif;
    font-size: 16px;
    color: var(--text-muted);
    max-width: 500px;
    margin: 0 auto 40px;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    .nx-experience { min-height: 700px; }
    .nx-addon { padding: 40px 28px; }
    .nx-pillars { grid-template-columns: 1fr; }
  }
</style>

<section class="experience" aria-label="Hero">
    <div class="bot-layer" aria-hidden="true">
      <spline-viewer url="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"></spline-viewer>
    </div>

    <canvas id="fire-canvas" aria-hidden="true"></canvas>

    <div class="overlay">
      <div class="overlay-content">
        <div class="eyebrow">CLIENT CLOSING SYSTEM</div>

        <h1 class="hero-title">
          <span class="solid">OREN NEXUS.</span>
          <span class="fire-text" id="fire-text">PIPELINE ON DEMAND.</span>
        </h1>

        <p class="hero-text">
          The unified command center that helps you find, close, and grow your clients.
        </p>

        <div class="hero-actions">
          <a href="https://calendly.com/orengenio/30min" class="cta-button" target="_blank" rel="noopener" aria-label="Book a strategy meeting with OrenGen">
            <div class="dots_border"></div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle">
              <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"></path>
              <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"></path>
              <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"></path>
            </svg>
            <span class="text_button">Book A Strategy Call</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  
  <section class="stats-section" aria-label="Company statistics">
    <div class="stats-container">
      <div class="stats-header">
        <h2>Predictable Pipeline. Measurable Growth.</h2>
        <p>Deploy scalable acquisition systems that continuously feed your CRM with qualified prospects—without manual prospecting bottlenecks.</p>
      </div>

      <div class="stats-grid">
        <div class="stat-card" data-delay="0">
          <span class="stat-number" data-target="1200" data-suffix="+">0</span>
          <span class="stat-label">Customers Served</span>
        </div>
        <div class="stat-card" data-delay="100">
          <span class="stat-number" data-target="98" data-suffix="%">0</span>
          <span class="stat-label">Client Satisfaction</span>
        </div>
        <div class="stat-card" data-delay="200">
          <span class="stat-number" data-target="100" data-suffix="%" data-prefix="">0</span>
          <span class="stat-label">AI-Automated</span>
        </div>
        <div class="stat-card" data-delay="300">
          <span class="stat-number" data-target="100" data-suffix="%" data-prefix="">0</span>
          <span class="stat-label">Compliance Ready</span>
        </div>
        <div class="stat-card" data-delay="400">
          <span class="stat-number" data-target="5" data-suffix="M+" data-prefix="$">0</span>
          <span class="stat-label">Revenue Generated</span>
        </div>
        <div class="stat-card" data-delay="500">
          <span class="stat-number" data-static="24/7">24/7</span>
          <span class="stat-label">AI Systems Running</span>
        </div>
      </div>
    </div>
  </section>

  

<script>
/* ─── Hero Parallax ─── */
    const overlay = document.querySelector('.overlay-content');
    const experience = document.querySelector('.experience');

    if (experience && overlay) {
      experience.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { width, height } = experience.getBoundingClientRect();
        const xPos = (clientX / width - 0.5) * 20;
        const yPos = (clientY / height - 0.5) * 20;
        overlay.style.transform = 'translate(' + xPos + 'px, ' + yPos + 'px)';
      });
      experience.addEventListener('mouseleave', () => {
        overlay.style.transform = 'translate(0, 0)';
      });
    }


    /* ─── Fire Emitter (tracks #fire-text) ─── */
    const fireCanvas = document.getElementById('fire-canvas');
    const fireCtx = fireCanvas ? fireCanvas.getContext('2d') : null;

    function sizeFireCanvas() {
      if (!fireCanvas) return;
      fireCanvas.width = window.innerWidth;
      fireCanvas.height = window.innerHeight;
    }
    sizeFireCanvas();
    window.addEventListener('resize', sizeFireCanvas);

    const fireParts = [];

    function getFireOrigin() {
      const el = document.getElementById('fire-text');
      if (!el) return { x: window.innerWidth / 2, y: window.innerHeight / 2 + 80, w: 520 };
      const r = el.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.bottom, w: r.width };
    }

    function spawnFire() {
      if (!fireCtx) return;
      const { x, y, w } = getFireOrigin();
      const spread = w * 0.5;

      // Main flame blobs
      for (let i = 0; i < 3; i++) {
        fireParts.push({
          x: x + (Math.random() - 0.5) * spread,
          y,
          vx: (Math.random() - 0.5) * 0.6,
          vy: -(0.8 + Math.random() * 1.8),
          life: 1.0,
          decay: 0.005 + Math.random() * 0.007,
          size: 14 + Math.random() * 26,
          hue: Math.random() < 0.5 ? 18 : (Math.random() < 0.5 ? 32 : 8),
          bright: 48 + Math.random() * 42,
          wx: (Math.random() - 0.5) * 0.12,
          ember: false
        });
      }

      // Embers
      for (let i = 0; i < 2; i++) {
        fireParts.push({
          x: x + (Math.random() - 0.5) * spread * 0.7,
          y,
          vx: (Math.random() - 0.5) * 1.1,
          vy: -(1.5 + Math.random() * 2.8),
          life: 1.0,
          decay: 0.003 + Math.random() * 0.005,
          size: 1.5 + Math.random() * 3.5,
          hue: 28 + Math.random() * 18,
          bright: 85,
          wx: (Math.random() - 0.5) * 0.2,
          ember: true
        });
      }
    }

    function drawFire() {
      if (!fireCtx) return;
      fireCtx.clearRect(0, 0, fireCanvas.width, fireCanvas.height);

      for (let i = fireParts.length - 1; i >= 0; i--) {
        const p = fireParts[i];
        p.x += p.vx + p.wx;
        p.y += p.vy;
        p.vy += 0.022;
        p.wx += (Math.random() - 0.5) * 0.055;
        p.life -= p.decay;

        if (p.life <= 0) { fireParts.splice(i, 1); continue; }

        const s = p.size * p.life;

        if (p.ember) {
          fireCtx.beginPath();
          fireCtx.arc(p.x, p.y, s * 0.55, 0, Math.PI * 2);
          fireCtx.fillStyle = 'hsla(' + p.hue + ',100%,' + p.bright + '%,' + p.life + ')';
          fireCtx.fill();
        } else {
          const g = fireCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, s);
          g.addColorStop(0,    'hsla(' + (p.hue + 22) + ',100%,92%,' + (p.life * 0.9) + ')');
          g.addColorStop(0.28, 'hsla(' + p.hue + ',100%,' + p.bright + '%,' + (p.life * 0.65) + ')');
          g.addColorStop(0.65, 'hsla(' + (p.hue - 12) + ',90%,32%,' + (p.life * 0.32) + ')');
          g.addColorStop(1,    'hsla(' + (p.hue - 16) + ',80%,12%,0)');
          fireCtx.beginPath();
          fireCtx.arc(p.x, p.y, s, 0, Math.PI * 2);
          fireCtx.fillStyle = g;
          fireCtx.fill();
        }
      }
    }

    let fireTick = 0;
    (function fireLoop() {
      if (++fireTick % 5 === 0) spawnFire();
      drawFire();
      requestAnimationFrame(fireLoop);
    })();

    /* ─── Stats Counter Animation ─── */
    function animateCounter(element, target, duration, prefix, suffix) {
      const start = performance.now();
      const format = (val) => {
        let str = '';
        if (prefix) str += prefix;
        str += Math.floor(val).toLocaleString();
        if (suffix) str += suffix;
        return str;
      };

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * target;
        element.textContent = format(current);
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    }

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const delay = parseInt(card.dataset.delay || 0);

          setTimeout(() => {
            card.classList.add('visible');
            const numEl = card.querySelector('.stat-number');
            if (numEl && !numEl.dataset.counted) {
              numEl.dataset.counted = 'true';
              if (numEl.dataset.static) return; // 24/7 — no animation needed
              const target = parseFloat(numEl.dataset.target);
              const prefix = numEl.dataset.prefix || '';
              const suffix = numEl.dataset.suffix || '';
              animateCounter(numEl, target, 2200, prefix, suffix);
            }
          }, delay);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.stat-card').forEach(card => {
      statsObserver.observe(card);
    });
  </script>

<!-- STATS -->
<section class="nx-stats">
  <div class="nx-stats-inner">
    <div class="nx-stats-label">Results That Speak</div>
    <h2 class="nx-stats-title">One Platform. Every Stage of the Client Journey.</h2>
    <div class="nx-stats-grid">
      <div class="nx-stat-card">
        <span class="nx-stat-num" data-target="1200" data-suffix="+">0</span>
        <span class="nx-stat-lbl">Clients Managed</span>
      </div>
      <div class="nx-stat-card">
        <span class="nx-stat-num" data-target="98" data-suffix="%">0</span>
        <span class="nx-stat-lbl">Client Satisfaction</span>
      </div>
      <div class="nx-stat-card">
        <span class="nx-stat-num" data-target="3" data-suffix="x">0</span>
        <span class="nx-stat-lbl">Avg. Lead Conversion Lift</span>
      </div>
      <div class="nx-stat-card">
        <span class="nx-stat-num" data-static="24/7">24/7</span>
        <span class="nx-stat-lbl">Automated Outreach</span>
      </div>
      <div class="nx-stat-card">
        <span class="nx-stat-num" data-target="5" data-suffix="M+" data-prefix="$">0</span>
        <span class="nx-stat-lbl">Revenue Influenced</span>
      </div>
      <div class="nx-stat-card">
        <span class="nx-stat-num" data-target="100" data-suffix="%">0</span>
        <span class="nx-stat-lbl">Fully Integrated</span>
      </div>
    </div>
  </div>
</section>

<!-- WHAT'S INSIDE -->
<section class="nx-inside" id="nx-inside">
  <span class="nx-section-tag">Everything You Need</span>
  <h2 class="nx-section-title">Three Engines. One Command Center.</h2>
  <p class="nx-section-sub">
    Stop managing three separate tools with three separate logins. OrenNexus unifies your entire client acquisition and growth stack.
  </p>
  <div class="nx-pillars">
    <div class="nx-pillar">
      <div class="nx-pillar-icon">🎯</div>
      <h3 class="nx-pillar-name">Lead Generation</h3>
      <p class="nx-pillar-desc">
        Capture, qualify, and route inbound leads automatically. Fill your pipeline without lifting a finger.
      </p>
      <ul class="nx-pillar-features">
        <li>Multi-channel lead capture forms</li>
        <li>Automated lead scoring &amp; routing</li>
        <li>Real-time pipeline notifications</li>
        <li>Landing page &amp; funnel builder</li>
        <li>Integration with paid ad platforms</li>
      </ul>
    </div>
    <div class="nx-pillar">
      <div class="nx-pillar-icon">⚙️</div>
      <h3 class="nx-pillar-name">CRM &amp; Pipeline</h3>
      <p class="nx-pillar-desc">
        A full-suite CRM built for growing businesses. Track every deal, conversation, and contact from one dashboard.
      </p>
      <ul class="nx-pillar-features">
        <li>Visual pipeline management</li>
        <li>Automated follow-up sequences</li>
        <li>Contact &amp; deal tracking</li>
        <li>Task &amp; appointment management</li>
        <li>Two-way SMS &amp; email inbox</li>
      </ul>
    </div>
    <div class="nx-pillar">
      <div class="nx-pillar-icon">📣</div>
      <h3 class="nx-pillar-name">Marketing Automation</h3>
      <p class="nx-pillar-desc">
        Run campaigns that convert on autopilot. Email, SMS, and social — all scheduled, segmented, and tracked.
      </p>
      <ul class="nx-pillar-features">
        <li>Drag-and-drop campaign builder</li>
        <li>Email &amp; SMS broadcast sequences</li>
        <li>Audience segmentation &amp; tagging</li>
        <li>A/B testing &amp; analytics</li>
        <li>Reputation &amp; review management</li>
      </ul>
    </div>
  </div>
</section>

<!-- ADD-ON BANNER -->
<div class="nx-addon" style="margin-bottom: 100px;">
  <div class="nx-addon-text">
    <span class="nx-addon-tag">Supercharge It · Add-On Available</span>
    <h3 class="nx-addon-title">Pair With OrenAgents</h3>
    <p class="nx-addon-desc">
      OrenNexus gives you the command center. OrenAgents — our Buy-Lingual™ AI agents — run it for you. Automated calls, follow-ups, bookings, and support. Zero headcount required.
    </p>
  </div>
  <a href="/orenagents" class="nx-addon-cta">Explore OrenAgents →</a>
</div>

<!-- FINAL CTA -->
<section class="nx-final-cta">
  <h2>Ready to Take <span>Command</span>?</h2>
  <p>One platform. Every touchpoint. Let's build your client acquisition engine.</p>
  <a href="https://calendly.com/orengenio/30min" class="nx-cta-primary" target="_blank" rel="noopener" style="display:inline-flex;">
    Book A Strategy Call
  </a>
</section>

<script>
/* NX Stat counter */
(function(){
  var nxStats = document.querySelectorAll('.nx-stat-num');
  if (!nxStats.length) return;
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (!entry.isIntersecting) return;
      var el = entry.target;
      if (el.dataset.static) return;
      var target = +el.dataset.target, suffix = el.dataset.suffix||'', prefix = el.dataset.prefix||'', t0=0;
      (function step(ts){
        if (!t0) t0=ts;
        var p=Math.min((ts-t0)/1800,1), e=1-Math.pow(1-p,3);
        el.textContent=prefix+Math.floor(e*target)+suffix;
        if(p<1) requestAnimationFrame(step);
      })(performance.now());
      obs.unobserve(el);
    });
  },{threshold:0.3});
  nxStats.forEach(function(el){obs.observe(el);});
})();
</script>
` }} />
  );
}
