import type { Metadata } from "next"
import { LeadModalTrigger } from "@/components/LeadModal"


import { OFFICIAL_LOGO_BLUE_URL } from "@/lib/brandAssets";
export const metadata: Metadata = {
  title: "OrenNexus — Unified CRM + Automation Hub | OrenGen Worldwide",
  description:
    "OrenNexus is a unified CRM and automation hub. Every pipeline, contact, and workflow in one AI-powered command center. Starting at $97/mo.",
  alternates: { canonical: "https://orengen.io/orennexus" },
  openGraph: {
    type: "website",
    url: "https://orengen.io/orennexus",
    title: "OrenNexus — Unified CRM + Automation Hub | OrenGen Worldwide",
    description: "Unified CRM, pipeline, automations, email & SMS campaigns. Replaces OrenCRM, OrenLeads, and OrenMarketing. From $97/mo.",
    images: [{ url: OFFICIAL_LOGO_BLUE_URL, width: 1200, height: 630, alt: "OrenNexus Unified CRM" }],
  },
}

export default function Page() {
  return (
    <>
    <LeadModalTrigger
      defaultSource="orennexus"
      title="Centralize Your CRM with OrenNexus"
      subtitle="Tell us about your team and we'll be in touch within the hour."
    />
    <div className="pt-24 pb-12 nexus-page" dangerouslySetInnerHTML={{ __html: `

<style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Roboto:wght@300;400;500;700&display=swap');

    .nexus-page *, .nexus-page *::before, .nexus-page *::after { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --primary: #CC5500;
      --secondary: #E2725B;
      --navy: #0B1D3A;
      --navy-deep: #081628;
      --navy-mid: #0F2847;
      --navy-light: #0D2240;
      --bg-dark: #081628;
      --bg-card: rgba(255,255,255,0.03);
      --bg-card-hover: rgba(255,255,255,0.06);
      --text-primary: #F0F4FA;
      --text-muted: rgba(240, 244, 250, 0.6);
      --text-dim: rgba(240, 244, 250, 0.4);
      --accent: #CC5500;
      --accent-light: #E8762B;
      --accent-soft: #E2725B;
      --font-display: 'Playfair Display', Georgia, serif;
      --font-body: 'Roboto', system-ui, sans-serif;
      --radius-lg: 20px;
      --radius-md: 15px;
      --radius-sm: 10px;
      --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
      --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
      --glass-bg: rgba(255,255,255,0.03);
      --glass-border: rgba(255,255,255,0.06);
      --glass-blur: blur(12px);
    }

    .nexus-page {
      background: var(--bg-dark);
      color: var(--text-primary);
      font-family: var(--font-body);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* ═══════════════════════════════════════════════════════
       SECTION 1 — HERO (Dark Navy Gradient + Mock Dashboard)
       ═══════════════════════════════════════════════════════ */
    .experience {
      position: relative;
      min-height: 100vh;
      width: 100%;
      overflow: hidden;
      background: linear-gradient(165deg, #081628 0%, #0B1D3A 30%, #0F2847 60%, #0D2240 100%);
    }

    .experience::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 20% 40%, rgba(204, 85, 0, 0.08) 0%, transparent 55%),
        radial-gradient(circle at 75% 60%, rgba(204, 85, 0, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 50% 80%, rgba(15, 40, 71, 0.4) 0%, transparent 60%);
      animation: gradientPulse 10s ease-in-out infinite;
      pointer-events: none;
      z-index: 1;
    }

    @keyframes gradientPulse {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1; }
    }

    .hero-layout {
      position: relative;
      z-index: 3;
      max-width: 1300px;
      margin: 0 auto;
      padding: 12vh 40px 80px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      min-height: 100vh;
    }

    .hero-left {
      opacity: 0;
      transform: translateY(30px);
      animation: heroReveal 1s var(--ease-out) forwards 0.2s;
    }

    @keyframes heroReveal {
      to { opacity: 1; transform: translateY(0); }
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      font-family: var(--font-body) !important;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 24px;
    }
    .eyebrow::before, .eyebrow::after {
      content: '';
      display: block;
      width: 44px;
      height: 1px;
    }
    .eyebrow::before { background: linear-gradient(90deg, transparent, var(--accent)); }
    .eyebrow::after  { background: linear-gradient(90deg, var(--accent), transparent); }

    .hero-title {
      font-family: var(--font-display) !important;
      font-size: clamp(36px, 4.5vw, 64px) !important;
      line-height: 1.1 !important;
      margin-bottom: 24px !important;
      font-weight: 700 !important;
      color: #F0F4FA !important;
    }

    .hero-title .accent {
      color: var(--accent) !important;
      text-shadow: 0 0 40px rgba(204, 85, 0, 0.4);
    }

    .hero-text {
      font-family: var(--font-body) !important;
      font-size: 18px !important;
      line-height: 1.7 !important;
      color: var(--text-muted) !important;
      max-width: 520px !important;
      margin-bottom: 36px !important;
    }

    .hero-actions {
      display: flex;
      gap: 18px;
      pointer-events: auto;
    }

    /* ─── CTA Button ─── */
    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 36px;
      background: linear-gradient(135deg, #CC5500 0%, #E8762B 100%);
      color: #fff;
      font-family: var(--font-body);
      font-weight: 700;
      font-size: 15px;
      border-radius: 100px;
      text-decoration: none;
      border: none;
      cursor: pointer;
      transition: all 0.3s var(--ease-out);
      box-shadow: 0 4px 20px rgba(204, 85, 0, 0.3), 0 0 0 0 rgba(204, 85, 0, 0);
      position: relative;
      overflow: hidden;
    }

    .cta-button::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, #E8762B 0%, #CC5500 100%);
      opacity: 0;
      transition: opacity 0.3s;
      border-radius: inherit;
    }

    .cta-button:hover::before { opacity: 1; }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(204, 85, 0, 0.5), 0 0 0 4px rgba(204, 85, 0, 0.15);
    }

    .cta-button span {
      position: relative;
      z-index: 1;
    }

    .cta-button svg {
      position: relative;
      z-index: 1;
      width: 20px;
      height: 20px;
    }

    /* ─── Mock CRM Dashboard ─── */
    .hero-right {
      opacity: 0;
      transform: translateY(30px) scale(0.97);
      animation: dashReveal 1.2s var(--ease-out) forwards 0.5s;
    }

    @keyframes dashReveal {
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    .mock-dashboard {
      background: rgba(11, 29, 58, 0.85);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 20px;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      overflow: hidden;
      box-shadow:
        0 32px 80px rgba(0,0,0,0.5),
        0 0 80px rgba(204, 85, 0, 0.06),
        inset 0 1px 0 rgba(255,255,255,0.08);
    }

    .dash-titlebar {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 14px 20px;
      background: rgba(0,0,0,0.3);
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }

    .dash-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .dash-dot.red { background: #ff5f56; }
    .dash-dot.yellow { background: #ffbd2e; }
    .dash-dot.green { background: #27c93f; }

    .dash-titlebar-text {
      margin-left: 12px;
      font-family: var(--font-body);
      font-size: 12px;
      color: rgba(255,255,255,0.4);
      letter-spacing: 0.5px;
    }

    .dash-body {
      padding: 24px;
    }

    .dash-chart-area {
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.04);
      border-radius: 14px;
      padding: 20px;
      margin-bottom: 16px;
      position: relative;
      overflow: hidden;
    }

    .dash-chart-label {
      font-family: var(--font-body);
      font-size: 11px;
      font-weight: 500;
      color: rgba(255,255,255,0.4);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 4px;
    }

    .dash-chart-value {
      font-family: var(--font-display);
      font-size: 28px;
      font-weight: 700;
      color: var(--accent);
      margin-bottom: 16px;
    }

    .dash-chart-svg {
      width: 100%;
      height: 80px;
      display: block;
    }

    @keyframes chartPulse {
      0%, 100% { opacity: 0.7; }
      50% { opacity: 1; }
    }

    .chart-area-fill {
      animation: chartPulse 4s ease-in-out infinite;
    }

    .dash-stats-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-bottom: 16px;
    }

    .dash-mini-stat {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px;
      padding: 16px 14px;
      text-align: center;
      backdrop-filter: var(--glass-blur);
      -webkit-backdrop-filter: var(--glass-blur);
    }

    .dash-mini-stat-val {
      font-family: var(--font-display);
      font-size: 20px;
      font-weight: 700;
      color: #F0F4FA;
      display: block;
      margin-bottom: 4px;
    }

    .dash-mini-stat-lbl {
      font-family: var(--font-body);
      font-size: 11px;
      color: rgba(255,255,255,0.45);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .dash-pipeline {
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.04);
      border-radius: 12px;
      padding: 14px 16px;
    }

    .dash-pipeline-label {
      font-family: var(--font-body);
      font-size: 11px;
      color: rgba(255,255,255,0.4);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }

    .dash-pipeline-bar {
      display: flex;
      height: 8px;
      border-radius: 4px;
      overflow: hidden;
      gap: 2px;
    }

    .pipeline-stage {
      height: 100%;
      border-radius: 4px;
      transition: transform 0.3s;
    }

    .pipeline-stage:nth-child(1) { flex: 3; background: #CC5500; }
    .pipeline-stage:nth-child(2) { flex: 2.5; background: #E8762B; }
    .pipeline-stage:nth-child(3) { flex: 2; background: #E2725B; }
    .pipeline-stage:nth-child(4) { flex: 1.5; background: rgba(226, 114, 91, 0.5); }

    .dash-pipeline-labels {
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
    }

    .dash-pipeline-stage-lbl {
      font-family: var(--font-body);
      font-size: 10px;
      color: rgba(255,255,255,0.35);
    }

    /* ═══════════════════════════════════════════════════════
       SECTION 2 — ANIMATED STATS BANNER
       ═══════════════════════════════════════════════════════ */
    .stats-section {
      position: relative;
      padding: 100px 28px;
      background: linear-gradient(180deg, #0D2240 0%, #0B1D3A 50%, #081628 100%);
      z-index: 4;
      overflow: visible;
    }

    .stats-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(204, 85, 0, 0.3), transparent);
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
      font-weight: 700 !important;
      color: var(--text-primary) !important;
      margin-bottom: 20px !important;
      line-height: 1.2 !important;
    }

    .stats-header p {
      font-family: var(--font-body) !important;
      font-size: 16px !important;
      font-weight: 300 !important;
      line-height: 1.7 !important;
      color: var(--text-dim) !important;
      max-width: 700px !important;
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
      border-radius: 20px;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      backdrop-filter: var(--glass-blur);
      -webkit-backdrop-filter: var(--glass-blur);
      box-shadow: 0 18px 60px rgba(0,0,0,.35);
      transition: all 0.5s var(--ease-out);
      opacity: 0;
      transform: translateY(40px);
    }

    .stat-card.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .stat-card:hover {
      background: var(--bg-card-hover);
      border-color: rgba(204, 85, 0, 0.2);
      transform: translateY(-4px);
      box-shadow: 0 24px 70px rgba(0,0,0,.4), 0 0 30px rgba(204, 85, 0, 0.05);
    }

    .stat-number {
      font-family: var(--font-display) !important;
      font-size: clamp(36px, 4vw, 52px) !important;
      font-weight: 700 !important;
      color: var(--accent) !important;
      line-height: 1 !important;
      margin-bottom: 12px !important;
      display: block;
      transition: color 0.3s;
    }

    .stat-label {
      font-family: var(--font-body) !important;
      font-size: 13px !important;
      font-weight: 400 !important;
      color: var(--text-muted) !important;
      line-height: 1.4 !important;
      letter-spacing: 0.5px !important;
    }

    /* ═══════════════════════════════════════════════════════
       NX SECTIONS — Branded
       ═══════════════════════════════════════════════════════ */

    :root {
      --nexus: #CC5500;
      --nexus-glow: rgba(204,85,0,0.35);
      --nexus-soft: rgba(204,85,0,0.12);
    }

    .nx-stats {
      padding: 80px 24px;
      background: linear-gradient(180deg, #081628 0%, #0B1D3A 50%, #0F2847 100%);
    }
    .nx-stats-inner {
      max-width: 1100px;
      margin: 0 auto;
      text-align: center;
    }
    .nx-stats-label {
      font-family: var(--font-body);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--nexus);
      margin-bottom: 16px;
    }
    .nx-stats-title {
      font-family: var(--font-display);
      font-size: clamp(28px, 4vw, 42px);
      font-weight: 700;
      color: #F0F4FA;
      margin: 0 0 48px;
    }
    .nx-stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 24px;
    }
    .nx-stat-card {
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: 20px;
      padding: 32px 20px;
      text-align: center;
      backdrop-filter: var(--glass-blur);
      -webkit-backdrop-filter: var(--glass-blur);
      transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
    }
    .nx-stat-card:hover {
      border-color: rgba(204,85,0,0.25);
      box-shadow: 0 0 30px rgba(204,85,0,0.08);
      transform: translateY(-4px);
    }
    .nx-stat-num {
      display: block;
      font-family: var(--font-display);
      font-size: clamp(36px, 5vw, 52px);
      font-weight: 700;
      color: var(--nexus);
      line-height: 1;
      margin-bottom: 8px;
    }
    .nx-stat-lbl {
      font-family: var(--font-body);
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
      font-family: var(--font-body);
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
      font-family: var(--font-display);
      font-size: clamp(28px, 4vw, 44px);
      font-weight: 700;
      color: #F0F4FA;
      text-align: center;
      margin: 0 0 16px;
    }
    .nx-section-sub {
      font-family: var(--font-body);
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
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: 20px;
      padding: 40px 32px;
      position: relative;
      overflow: hidden;
      backdrop-filter: var(--glass-blur);
      -webkit-backdrop-filter: var(--glass-blur);
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
    .nx-pillar:hover { border-color: rgba(204,85,0,0.2); transform: translateY(-4px); }
    .nx-pillar:hover::before { opacity: 1; }
    .nx-pillar-icon {
      width: 52px;
      height: 52px;
      border-radius: 14px;
      background: var(--nexus-soft);
      border: 1px solid rgba(204,85,0,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      font-size: 24px;
    }
    .nx-pillar-name {
      font-family: var(--font-display);
      font-size: 22px;
      font-weight: 700;
      color: #F0F4FA;
      margin: 0 0 8px;
    }
    .nx-pillar-desc {
      font-family: var(--font-body);
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
      font-family: var(--font-body);
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
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: 24px;
      padding: 60px 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
      flex-wrap: wrap;
      backdrop-filter: var(--glass-blur);
      -webkit-backdrop-filter: var(--glass-blur);
      box-shadow: 0 24px 60px rgba(0,0,0,0.25);
    }
    .nx-addon-text {}
    .nx-addon-tag {
      font-family: var(--font-body);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 12px;
      display: block;
    }
    .nx-addon-title {
      font-family: var(--font-display);
      font-size: clamp(24px, 3vw, 36px);
      font-weight: 700;
      color: #F0F4FA;
      margin: 0 0 12px;
    }
    .nx-addon-desc {
      font-family: var(--font-body);
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
      background: linear-gradient(135deg, #CC5500 0%, #E8762B 100%);
      color: #fff;
      font-family: var(--font-body);
      font-weight: 700;
      font-size: 15px;
      border-radius: 100px;
      text-decoration: none;
      white-space: nowrap;
      transition: all 0.3s;
      box-shadow: 0 4px 24px rgba(204,85,0,0.3);
    }
    .nx-addon-cta:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 40px rgba(204,85,0,0.5);
    }

    /* ── Final CTA ── */
    .nx-final-cta {
      text-align: center;
      padding: 80px 24px 120px;
      background: linear-gradient(180deg, #0F2847 0%, #0B1D3A 40%, #081628 100%);
    }
    .nx-final-cta h2 {
      font-family: var(--font-display);
      font-size: clamp(32px, 5vw, 56px);
      font-weight: 700;
      color: #F0F4FA;
      margin: 0 0 16px;
    }
    .nx-final-cta h2 span { color: var(--nexus); }
    .nx-final-cta p {
      font-family: var(--font-body);
      font-size: 16px;
      color: var(--text-muted);
      max-width: 500px;
      margin: 0 auto 40px;
      line-height: 1.7;
    }

    .nx-cta-primary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 40px;
      background: linear-gradient(135deg, #CC5500 0%, #E8762B 100%);
      color: #fff !important;
      font-family: var(--font-body);
      font-weight: 700;
      font-size: 16px;
      border-radius: 100px;
      text-decoration: none;
      transition: all 0.3s var(--ease-out);
      box-shadow: 0 4px 20px rgba(204, 85, 0, 0.3);
    }
    .nx-cta-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 40px rgba(204, 85, 0, 0.5);
    }

    /* ═══════════════════════════════════════════════════════
       RESPONSIVE
       ═══════════════════════════════════════════════════════ */
    @media (max-width: 1200px) {
      .stats-grid { grid-template-columns: repeat(3, 1fr); }
    }

    @media (max-width: 960px) {
      .hero-layout {
        grid-template-columns: 1fr;
        text-align: center;
        padding: 14vh 24px 60px;
        gap: 40px;
      }
      .hero-left { text-align: center; }
      .hero-text { margin-left: auto !important; margin-right: auto !important; }
      .hero-actions { justify-content: center; }
      .mock-dashboard { max-width: 520px; margin: 0 auto; }
    }

    @media (max-width: 768px) {
      .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
      .stats-section { padding: 60px 20px; }
      .stat-card { padding: 20px 8px; }
      .nx-addon { padding: 40px 28px; }
      .nx-pillars { grid-template-columns: 1fr; }
      .dash-stats-row { grid-template-columns: repeat(3, 1fr); gap: 8px; }
      .dash-mini-stat { padding: 12px 8px; }
      .dash-mini-stat-val { font-size: 16px; }
      .dash-mini-stat-lbl { font-size: 9px; }
    }

    @media (max-width: 480px) {
      .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
      .stat-number { font-size: 32px !important; }
      .stat-label { font-size: 11px !important; }
      .stat-card { padding: 16px 6px; }
      .hero-title { font-size: 32px !important; }
    }
</style>

<!-- ═══════════════════════════════════════════════════════
     HERO SECTION
     ═══════════════════════════════════════════════════════ -->
<section class="experience" aria-label="Hero">
  <div class="hero-layout">
    <div class="hero-left">
      <div class="eyebrow">UNIFIED CRM + AUTOMATION</div>

      <h1 class="hero-title">
        The Command Center for Your <span class="accent">AI Workforce</span>
      </h1>

      <p class="hero-text">
        Every pipeline, contact, and workflow in one AI-powered command center. OrenNexus unifies your CRM, lead generation, and marketing automation so you can find, close, and grow clients — all from a single dashboard.
      </p>

      <div class="hero-actions">
        <a href="#contact" data-lead-source="orennexus" class="cta-button" aria-label="Talk to a strategist about OrenNexus">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <span>Talk to a Strategist</span>
        </a>
      </div>
    </div>

    <div class="hero-right">
      <div class="mock-dashboard">
        <div class="dash-titlebar">
          <div class="dash-dot red"></div>
          <div class="dash-dot yellow"></div>
          <div class="dash-dot green"></div>
          <span class="dash-titlebar-text">OrenNexus Dashboard</span>
        </div>
        <div class="dash-body">
          <div class="dash-chart-area">
            <div class="dash-chart-label">Monthly Revenue</div>
            <div class="dash-chart-value">$47.2K</div>
            <svg class="dash-chart-svg" viewBox="0 0 400 80" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#CC5500" stop-opacity="0.4"/>
                  <stop offset="100%" stop-color="#CC5500" stop-opacity="0.02"/>
                </linearGradient>
              </defs>
              <path class="chart-area-fill" d="M0,70 C30,65 60,60 90,52 C120,44 150,38 180,30 C210,22 240,18 270,15 C300,12 330,10 360,8 C380,6 400,5 400,5 L400,80 L0,80 Z" fill="url(#chartGrad)"/>
              <path d="M0,70 C30,65 60,60 90,52 C120,44 150,38 180,30 C210,22 240,18 270,15 C300,12 330,10 360,8 C380,6 400,5 400,5" fill="none" stroke="#CC5500" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>

          <div class="dash-stats-row">
            <div class="dash-mini-stat">
              <span class="dash-mini-stat-val">$47.2K</span>
              <span class="dash-mini-stat-lbl">Revenue</span>
            </div>
            <div class="dash-mini-stat">
              <span class="dash-mini-stat-val">1,284</span>
              <span class="dash-mini-stat-lbl">Leads</span>
            </div>
            <div class="dash-mini-stat">
              <span class="dash-mini-stat-val">34%</span>
              <span class="dash-mini-stat-lbl">Close Rate</span>
            </div>
          </div>

          <div class="dash-pipeline">
            <div class="dash-pipeline-label">Pipeline Stages</div>
            <div class="dash-pipeline-bar">
              <div class="pipeline-stage"></div>
              <div class="pipeline-stage"></div>
              <div class="pipeline-stage"></div>
              <div class="pipeline-stage"></div>
            </div>
            <div class="dash-pipeline-labels">
              <span class="dash-pipeline-stage-lbl">Prospect</span>
              <span class="dash-pipeline-stage-lbl">Qualified</span>
              <span class="dash-pipeline-stage-lbl">Proposal</span>
              <span class="dash-pipeline-stage-lbl">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════
     STATS BANNER
     ═══════════════════════════════════════════════════════ -->
<section class="stats-section" aria-label="Company statistics">
  <div class="stats-container">
    <div class="stats-header">
      <h2>Predictable Pipeline. Measurable Growth.</h2>
      <p>Deploy scalable acquisition systems that continuously feed your CRM with qualified prospects—without manual prospecting bottlenecks.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card" data-delay="0">
        <span class="stat-number" data-target="500" data-suffix="+">500+</span>
        <span class="stat-label">Customers Served</span>
      </div>
      <div class="stat-card" data-delay="100">
        <span class="stat-number" data-target="98" data-suffix="%">98%</span>
        <span class="stat-label">Client Satisfaction</span>
      </div>
      <div class="stat-card" data-delay="200">
        <span class="stat-number" data-target="100" data-suffix="%" data-prefix="">100%</span>
        <span class="stat-label">AI-Automated</span>
      </div>
      <div class="stat-card" data-delay="300">
        <span class="stat-number" data-target="100" data-suffix="%" data-prefix="">100%</span>
        <span class="stat-label">Compliance Ready</span>
      </div>
      <div class="stat-card" data-delay="400">
        <span class="stat-number" data-target="12" data-suffix="M+" data-prefix="$">$12M+</span>
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
    /* ─── Stats Counter Animation ─── */
    function animateCounter(element, target, duration, prefix, suffix) {
      var start = performance.now();
      function tick(now) {
        var elapsed = now - start;
        var progress = Math.min(elapsed / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = eased * target;
        var str = '';
        if (prefix) str += prefix;
        str += Math.floor(current).toLocaleString();
        if (suffix) str += suffix;
        element.textContent = str;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    var statsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var card = entry.target;
          var delay = parseInt(card.dataset.delay || 0);

          setTimeout(function() {
            card.classList.add('visible');
            var numEl = card.querySelector('.stat-number');
            if (numEl && !numEl.dataset.counted) {
              numEl.dataset.counted = 'true';
              if (numEl.dataset.static) return;
              var target = parseFloat(numEl.dataset.target);
              var prefix = numEl.dataset.prefix || '';
              var suffix = numEl.dataset.suffix || '';
              animateCounter(numEl, target, 2200, prefix, suffix);
            }
          }, delay);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.stat-card').forEach(function(card) {
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
        <span class="nx-stat-num" data-target="500" data-suffix="+">500+</span>
        <span class="nx-stat-lbl">Clients Managed</span>
      </div>
      <div class="nx-stat-card">
        <span class="nx-stat-num" data-target="98" data-suffix="%">98%</span>
        <span class="nx-stat-lbl">Client Satisfaction</span>
      </div>
      <div class="nx-stat-card">
        <span class="nx-stat-num" data-target="391" data-suffix="%">391%</span>
        <span class="nx-stat-lbl">Avg. Lead Conversion Lift</span>
      </div>
      <div class="nx-stat-card">
        <span class="nx-stat-num" data-static="24/7">24/7</span>
        <span class="nx-stat-lbl">Automated Outreach</span>
      </div>
      <div class="nx-stat-card">
        <span class="nx-stat-num" data-target="12" data-suffix="M+" data-prefix="$">$12M+</span>
        <span class="nx-stat-lbl">Revenue Influenced</span>
      </div>
      <div class="nx-stat-card">
        <span class="nx-stat-num" data-target="100" data-suffix="%">100%</span>
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
      <div class="nx-pillar-icon">&#x1F3AF;</div>
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
      <div class="nx-pillar-icon">&#x2699;&#xFE0F;</div>
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
      <div class="nx-pillar-icon">&#x1F4E3;</div>
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
    </>
  );
}
