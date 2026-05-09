import type { Metadata } from "next"
import { LeadModalTrigger } from "@/components/LeadModal"


export const metadata: Metadata = {
  title: "OrenWeb — High-Performance Websites That Convert | OrenGen Worldwide",
  description: "OrenWeb builds high-converting websites engineered to rank, convert, and impress. Professional web design and development starting at $247/mo.",
}

const html = `
<style>
 

 :root{ --transparent: transparent;
--primary: #37ca37;
--secondary: #188bf6;
--white: var(--foreground);
--gray: #cbd5e0;
--black: #000000;
--red: #e93d3d;
--orange: #f6ad55;
--yellow: #faf089;
--green: #9ae6b4;
--teal: #81e6d9;
--malibu: #63b3ed;
--indigo: #757BBD;
--purple: #d6bcfa;
--pink: #fbb6ce;
--cobalt: #155eef;
--smoke: #f5f5f5;
--overlay: rgba(0, 0, 0, 0.5);
--color-m5ye8saq: #ebeef2ff;
--color-m65wrxxb: #0B1D3Aff;
--color-m65wsmwf: #E2725Bff;
--color-azujpfxo: var(--oren-orange)ff;
--color-lgf1duy4: #0E182C;
--color-lx2q00eu: #8893A8;
--color-lx2prsc2: #000321;
--color-lyrjldj8: rgba(255,255,255,0.40);
--color-hpmuetwt: #003366ff;
--inter: 'Inter';
--space-grotesk: 'Space Grotesk';
--abel: 'Abel';
--headlinefont: 'Inter';
--contentfont: 'Inter';
--text-color: #000000;
--link-color: #188bf6; } .bg-fixed{bottom:0;top:0;left:0;right:0;position:fixed;overflow:auto;background-color:var(--white)} 
            
            .drop-zone-draggable .hl_main_popup{box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}
            
          
#hl_main_popup.popup-body{position:absolute!important;left:50%!important;bottom:auto!important;transform:translate(-50%,0)!important;right:auto!important;box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}.--mobile #hl_main_popup.popup-body{width:380px!important}@media screen and (min-width:0px) and (max-width:480px){#hl_main_popup.popup-body{width:380px!important}} 
            
            .drop-zone-draggable .hl_main_popup-qKyhd0BwvF{box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}
            
          
#hl_main_popup-qKyhd0BwvF.popup-body{position:absolute!important;left:50%!important;bottom:auto!important;transform:translate(-50%,0)!important;right:auto!important;box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}.--mobile #hl_main_popup-qKyhd0BwvF.popup-body{width:380px!important}@media screen and (min-width:0px) and (max-width:480px){#hl_main_popup-qKyhd0BwvF.popup-body{width:380px!important}}  
 /* ---- Section styles ----- */ 
:root{--transparent:transparent;--black:#000000}.hl_page-preview--content .section-suI_XhuIK{box-shadow:none;padding:20px 0;margin:0;background-color:var(--black);border-color:var(--black);border-width:2px;border-style:solid;backdrop-filter:none}.hl_page-preview--content .col-SpvDr4g-EU,.hl_page-preview--content .row-2euixjSQzQ{margin:0 auto;box-shadow:none;padding:15px 0;background-color:var(--transparent);border-color:var(--black);border-width:2px;border-style:solid;width:100%}.hl_page-preview--content .col-SpvDr4g-EU{padding:10px 5px;margin:0}.hl_page-preview--content .custom-code-nrRWH1UvqV{margin:0;width:auto;height:auto}#section-suI_XhuIK>.inner{max-width:1170px}#col-SpvDr4g-EU>.inner{flex-direction:column;justify-content:center;align-items:inherit;flex-wrap:nowrap} 
 /* ---- Section styles ----- */ 
:root{--transparent:transparent;--black:#000000}.hl_page-preview--content .col-wD6YQTez_Q,.hl_page-preview--content .row-EbP6CNfwe8,.hl_page-preview--content .section-FG2xR0rBz7{box-shadow:none;padding:0 0 20px;margin:0;background-color:var(--black);backdrop-filter:none;border-color:var(--black);border-width:2px;border-style:solid}.hl_page-preview--content .col-wD6YQTez_Q,.hl_page-preview--content .row-EbP6CNfwe8{margin:0 auto;padding:10px 5px;background-color:var(--transparent);width:100%}.hl_page-preview--content .col-wD6YQTez_Q{margin:0}.hl_page-preview--content .col-8piuZVsqe6,.hl_page-preview--content .col-xequVtIuFA,.hl_page-preview--content .row-8XSvHiFB2C,.hl_page-preview--content .row-Yc4I5bNhZr{margin:0 auto;box-shadow:none;padding:10px 5px;background-color:var(--transparent);backdrop-filter:none;border-color:var(--black);border-width:2px;border-style:solid;width:100%}.hl_page-preview--content .col-8piuZVsqe6,.hl_page-preview--content .col-xequVtIuFA,.hl_page-preview--content .row-Yc4I5bNhZr{margin:0}.hl_page-preview--content .col-xequVtIuFA,.hl_page-preview--content .row-Yc4I5bNhZr{margin:0 auto}.hl_page-preview--content .col-xequVtIuFA{width:50%;margin:0}.hl_page-preview--content .custom-code-iW2McDwl3b,.hl_page-preview--content .custom-code-wcFYfFuaYT{margin:0;width:auto;height:auto}#section-FG2xR0rBz7>.inner{max-width:1170px}#col-8piuZVsqe6>.inner,#col-wD6YQTez_Q>.inner,#col-xequVtIuFA>.inner{flex-direction:column;justify-content:center;align-items:inherit;flex-wrap:nowrap}
 /* ---- Global OrenGen Footer 2.5.26 styles ----- */  
 :root{--transparent:transparent;--black:#000000}.hl_page-preview--content .col-FEb6HvlC2D,.hl_page-preview--content .row-zi9SKpNODQ,.hl_page-preview--content .section-pR7gv78FnH{box-shadow:none;padding:20px 0;margin:0;background-color:var(--black);backdrop-filter:none;border-color:var(--black);border-width:2px;border-style:solid}.hl_page-preview--content .col-FEb6HvlC2D,.hl_page-preview--content .row-zi9SKpNODQ{margin:0 auto;padding:10px 5px;background-color:var(--transparent);width:100%}.hl_page-preview--content .col-FEb6HvlC2D{margin:0}.hl_page-preview--content .custom-code-NXSL2LSZ8x,.hl_page-preview--content .custom-code-v-Tvn2gxry{margin:0;width:auto;height:auto}#section-pR7gv78FnH>.inner{max-width:1170px}#col-FEb6HvlC2D>.inner{flex-direction:column;justify-content:center;align-items:inherit;flex-wrap:nowrap}



    :root {
      --og-primary: var(--oren-orange);
      --og-secondary: #E2725B;
      --og-ink: #000000;
      --og-paper: #E9E7EB;
      --og-charcoal: #1A1A1A;
      --og-gold: #D4A843;
      --og-cream: #FFF3E6;
    }

    :root {
      /* OrenWeb Navy/Orange Brand Theme — #CC5500 */
      --primary: #CC5500;
      --primary-light: #E2725B;
      --primary-dark: #993D00;
      --accent: #CC5500;
      --accent-dark: #993D00;

      /* Base Colors */
      --bg-dark: #081628;
      --bg-card: rgba(255, 255, 255, 0.03);
      --bg-card-hover: rgba(255, 255, 255, 0.06);
      --border: rgba(255, 255, 255, 0.08);
      --text: var(--foreground);
      --text-secondary: rgba(255, 255, 255, 0.7);
      --text-muted: rgba(255, 255, 255, 0.5);
    }

    .web-page * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .web-page {
      background: linear-gradient(165deg, #081628 0%, #0B1D3A 30%, #0F2847 60%, #0D2240 100%);
      background-attachment: fixed;
      color: var(--text);
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif;
      overflow-x: hidden;
    }

    .web-page h1,
    .web-page h2,
    .web-page h3,
    .web-page h4,
    .web-page h5,
    .web-page h6 {
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif;
    }

    /* Hero Section */
    .hero {
      position: relative;
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 120px 40px 80px;
      background: linear-gradient(180deg, rgba(204, 85, 0, 0.06) 0%, transparent 100%);
    }

    .hero-content {
      max-width: 900px;
      margin: 0 auto;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      padding: 10px 24px;
      background: rgba(204, 85, 0, 0.12) !important;
      border: 2px solid rgba(204, 85, 0, 0.35) !important;
      border-radius: 100px;
      color: var(--accent) !important;
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: 12px !important;
      font-weight: 700 !important;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 32px;
    }

    .web-page h1 {
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: clamp(48px, 8vw, 96px) !important;
      line-height: 1.05 !important;
      margin-bottom: 24px !important;
      letter-spacing: -1px;
      font-weight: 800 !important;
      color: var(--text) !important;
    }

    .web-page h1 span {
      background: linear-gradient(90deg, #CC5500, #E2725B) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background-clip: text !important;
    }

    .hero-text {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 18px !important;
      line-height: 1.6;
      color: var(--text-secondary) !important;
      max-width: 720px;
      margin: 0 auto 36px auto;
    }

    .actions {
      display: flex;
      gap: 18px;
      justify-content: center;
    }

    /* Premium Sparkle Button - Purple Theme */
    .button {
      --black-700: hsla(0 0% 12% / 1);
      --border_radius: 9999px;
      --transtion: 0.3s ease-in-out;
      cursor: pointer;
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      background-color: transparent;
      border: none;
      border-radius: var(--border_radius);
      transform: scale(calc(1 + (var(--active, 0) * 0.1)));
      transition: transform var(--transtion);
      text-decoration: none;
    }

    .button::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background-color: var(--black-700);
      border-radius: var(--border_radius);
      box-shadow: inset 0 0.5px hsl(0, 0%, 100%), inset 0 -1px 2px 0 hsl(0, 0%, 0%),
        0px 4px 10px -4px hsla(0 0% 0% / calc(1 - var(--active, 0))),
        0 0 0 calc(var(--active, 0) * 0.375rem) hsla(24, 100%, 40%, 0.75);
      transition: all var(--transtion);
      z-index: 0;
    }

    .button::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background-color: hsla(24, 100%, 40%, 0.75);
      background-image: radial-gradient(at 51% 89%, hsla(24, 100%, 40%, 1) 0px, transparent 50%),
        radial-gradient(at 100% 100%, hsla(24, 100%, 44%, 1) 0px, transparent 50%),
        radial-gradient(at 22% 91%, hsla(24, 100%, 44%, 1) 0px, transparent 50%);
      background-position: top;
      opacity: var(--active, 0);
      border-radius: var(--border_radius);
      transition: opacity var(--transtion);
      z-index: 2;
    }

    .button:is(:hover, :focus-visible) {
      --active: 1;
    }

    .button:active {
      transform: scale(1);
    }

    .button .dots_border {
      --size_border: calc(100% + 2px);
      overflow: hidden;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: var(--size_border);
      height: var(--size_border);
      background-color: transparent;
      border-radius: var(--border_radius);
      z-index: -10;
    }

    .button .dots_border::before {
      content: "";
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 2rem;
      background-color: white;
      mask: linear-gradient(transparent 0%, white 120%);
      animation: rotate 2s linear infinite;
    }

    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }

    .button .sparkle {
      position: relative;
      z-index: 10;
      width: 1.75rem;
    }

    .button .sparkle .path {
      fill: currentColor;
      stroke: currentColor;
      transform-origin: center;
      color: hsl(0, 0%, 100%);
    }

    .button:is(:hover, :focus) .sparkle .path {
      animation: path 1.5s linear 0.5s infinite;
    }

    .button .sparkle .path:nth-child(1) {
      --scale_path_1: 1.2;
    }

    .button .sparkle .path:nth-child(2) {
      --scale_path_2: 1.2;
    }

    .button .sparkle .path:nth-child(3) {
      --scale_path_3: 1.2;
    }

    @keyframes path {
      0%, 34%, 71%, 100% {
        transform: scale(1);
      }
      17% {
        transform: scale(var(--scale_path_1, 1));
      }
      49% {
        transform: scale(var(--scale_path_2, 1));
      }
      83% {
        transform: scale(var(--scale_path_3, 1));
      }
    }

    .button .text_button {
      position: relative;
      z-index: 10;
      background-image: linear-gradient(90deg, hsla(0 0% 100% / 1) 0%, hsla(0 0% 100% / var(--active, 0)) 120%);
      background-clip: text;
      -webkit-background-clip: text;
      font-size: 1rem;
      color: transparent;
      font-weight: 600;
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
    }

    /* Content Sections */
    .content-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 100px 40px;
    }

    .section-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .section-badge {
      display: inline-block;
      padding: 8px 20px;
      background: rgba(204, 85, 0, 0.12) !important;
      border: 1px solid rgba(204, 85, 0, 0.35) !important;
      border-radius: 100px;
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: 12px !important;
      font-weight: 700 !important;
      color: var(--accent) !important;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 20px;
    }

    .section-title {
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: clamp(36px, 5vw, 56px) !important;
      line-height: 1.1 !important;
      margin-bottom: 20px !important;
      color: var(--text) !important;
      font-weight: 800 !important;
    }

    .highlight {
      background: linear-gradient(90deg, #CC5500, #E2725B) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background-clip: text !important;
    }

    .section-description {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 18px !important;
      line-height: 1.7;
      color: var(--text-secondary) !important;
      max-width: 700px;
      margin: 0 auto;
    }

    /* Stats Section */
    .stats-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 80px 40px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
      border-top: 1px solid rgba(204, 85, 0, 0.25);
      border-bottom: 1px solid rgba(204, 85, 0, 0.25);
    }

    .stat-item {
      text-align: center;
    }

    .stat-value {
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: 56px !important;
      font-weight: 800 !important;
      background: linear-gradient(135deg, #CC5500, #E2725B) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background-clip: text !important;
      line-height: 1;
      margin-bottom: 12px;
      display: block;
    }

    .stat-label {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 14px !important;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 1px;
      display: block;
    }

    .stat-context {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 13px !important;
      color: var(--accent);
      margin-top: 8px;
    }

    /* Capability Cards */
    .capabilities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
      margin-top: 40px;
    }

    .capability-card {
      position: relative;
      background: var(--bg-card) !important;
      border: 1px solid rgba(204, 85, 0, 0.2) !important;
      border-radius: 16px;
      padding: 32px;
      transition: all 0.3s ease;
    }

    .capability-card:hover {
      transform: translateY(-4px);
      border-color: rgba(204, 85, 0, 0.5) !important;
      background: rgba(204, 85, 0, 0.06) !important;
      box-shadow: 0 12px 32px rgba(204, 85, 0, 0.15);
    }

    .capability-card .card-accent {
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      height: 4px;
      background: linear-gradient(90deg, #CC5500, #E2725B) !important;
      border-radius: 16px 16px 0 0;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .capability-card:hover .card-accent {
      opacity: 1;
    }

    .capability-card h3 {
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: 22px !important;
      font-weight: 700 !important;
      color: var(--text) !important;
      margin-bottom: 12px !important;
    }

    .capability-card p {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 15px !important;
      line-height: 1.7;
      color: var(--text-secondary) !important;
      margin-bottom: 20px;
    }

    .capability-card ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .capability-card ul li {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 14px !important;
      color: var(--text-muted);
      padding: 8px 0;
      padding-left: 24px;
      position: relative;
    }

    .capability-card ul li::before {
      content: "→";
      position: absolute;
      left: 0;
      color: var(--accent);
      font-weight: bold;
    }

    /* Process Timeline */
    .process-section {
      max-width: 1000px;
      margin: 0 auto;
      padding: 100px 40px;
    }

    .process-timeline {
      margin-top: 60px;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .process-step {
      display: flex;
      gap: 32px;
      align-items: flex-start;
    }

    .process-number {
      flex-shrink: 0;
      width: 80px;
      height: 80px;
      border-radius: 16px;
      background: rgba(204, 85, 0, 0.12) !important;
      border: 2px solid rgba(204, 85, 0, 0.3) !important;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: 32px !important;
      font-weight: 800 !important;
      color: var(--accent) !important;
      -webkit-text-fill-color: var(--accent) !important;
    }

    .process-content h3 {
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: 24px !important;
      font-weight: 700 !important;
      color: var(--text) !important;
      margin-bottom: 12px !important;
    }

    .process-content p {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 16px !important;
      line-height: 1.7;
      color: var(--text-secondary) !important;
    }

    /* Tech Stack Grid */
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 24px;
      margin-top: 40px;
    }

    .tech-item {
      background: var(--bg-card) !important;
      border: 1px solid rgba(204, 85, 0, 0.2) !important;
      border-radius: 12px;
      padding: 28px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .tech-item:hover {
      transform: translateY(-4px);
      border-color: rgba(204, 85, 0, 0.5) !important;
      background: rgba(204, 85, 0, 0.06) !important;
      box-shadow: 0 8px 24px rgba(204, 85, 0, 0.15);
    }

    .tech-icon i {
      font-size: 48px !important;
    }

    .tech-name {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 14px !important;
      font-weight: 600;
      color: var(--text-secondary);
      text-align: center;
    }

    /* CTA Section */
    .cta-section {
      max-width: 900px;
      margin: 0 auto;
      padding: 120px 40px;
      text-align: center;
    }

    .cta-title {
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: clamp(36px, 5vw, 56px) !important;
      line-height: 1.2 !important;
      margin-bottom: 24px !important;
      color: var(--text) !important;
      font-weight: 800 !important;
    }

    .cta-description {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 18px !important;
      line-height: 1.7;
      color: var(--text-secondary) !important;
      margin-bottom: 40px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero {
        padding: 100px 20px 60px;
      }

      .web-page h1 {
        font-size: 42px !important;
      }

      .stats-section {
        grid-template-columns: 1fr;
        gap: 32px;
        padding: 60px 20px;
      }

      .capabilities-grid {
        grid-template-columns: 1fr;
      }

      .process-step {
        flex-direction: column;
        gap: 20px;
      }

      .process-number {
        width: 60px;
        height: 60px;
        font-size: 24px !important;
      }

      .tech-grid {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 16px;
      }

      .content-section,
      .process-section {
        padding: 60px 20px;
      }
    }
  

    .web-page *{margin:0;padding:0;box-sizing:border-box}
    .web-page{color:#fff;font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;overflow-x:hidden;min-height:100vh}
    .web-page h1,.web-page h2,.web-page h3,.web-page h4,.web-page h5,.web-page h6{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif}

    :root{
      --purple:#CC5500;
      --purple-light:#E2725B;
      --purple-glow:rgba(204,85,0,0.35);
      --purple-dim:rgba(204,85,0,0.7);
      --green:#4FBF24;
    }

    /* ===== HEADER ===== */
    .pricing-header{text-align:center;padding:80px 40px 40px;position:relative}
    .pricing-header::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-60%);width:600px;height:600px;background:radial-gradient(circle,rgba(204, 85, 0,0.06) 0%,transparent 65%);pointer-events:none}
    .pricing-header h1{font-size:clamp(36px,6vw,60px);font-weight:800;color:var(--purple);margin-bottom:16px;letter-spacing:-1px;position:relative}
    .pricing-header p{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:17px;color:rgba(255,255,255,0.6);max-width:620px;margin:0 auto 0;position:relative}

    /* ===== CENTERED NESTED TAB TOGGLE ===== */
    .tab-container{display:flex;flex-direction:column;align-items:center;padding:36px 20px 48px}
    .tab-toggle{
      display:inline-flex;
      background:rgba(204, 85, 0,0.08);
      border:1px solid rgba(204, 85, 0,0.2);
      border-radius:14px;
      padding:5px;
      gap:4px;
    }
    .tab-btn{
      font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;
      font-size:15px;
      font-weight:700;
      padding:12px 32px;
      border:none;
      border-radius:10px;
      cursor:pointer;
      background:transparent;
      color:rgba(255,255,255,0.45);
      transition:all .35s ease;
      letter-spacing:.3px;
    }
    .tab-btn:hover{color:rgba(255,255,255,0.7)}
    .tab-btn#tab-talking.active{
      background:var(--purple);
      color:#fff;
      box-shadow:0 4px 20px rgba(204, 85, 0,0.4),0 0 0 1px rgba(166,79,212,0.3);
    }
    .tab-btn#tab-custom.active{
      background:#fff;
      color:var(--purple);
      box-shadow:0 4px 20px rgba(255,255,255,0.15),0 0 0 1px rgba(255,255,255,0.2);
    }
    .tab-btn .tab-icon{margin-right:8px;font-size:16px}
    .tab-subtitle{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:12px;color:rgba(255,255,255,0.3);margin-top:14px}

    /* ===== TAB PANELS ===== */
    .tab-panel{display:none;animation:fadeUp .4s ease}
    .tab-panel.active{display:block}
    @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}

    /* ===== PANEL SUBHEADER ===== */
    .panel-header{text-align:center;padding:0 40px 20px}
    .panel-header h2{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:clamp(20px,3vw,28px);font-weight:800;color:#fff;margin-bottom:8px}
    .panel-header h2 span{color:var(--purple)}
    .panel-header p{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:14px;color:rgba(255,255,255,0.45);max-width:560px;margin:0 auto}

    /* Engagement pills */
    .engagement-strip{display:flex;align-items:center;justify-content:center;gap:10px;padding:12px 24px;flex-wrap:wrap}
    .engage-pill{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:12px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:.5px;padding:6px 16px;border:1px solid rgba(204, 85, 0,0.2);border-radius:99px;background:rgba(204, 85, 0,0.06)}

    /* Zero strip */
    .zero-strip{display:flex;align-items:center;justify-content:center;gap:10px;margin:16px auto 40px;padding:12px 24px;background:rgba(204, 85, 0,0.06);border:1px solid rgba(204, 85, 0,0.15);border-radius:99px;flex-wrap:wrap;max-width:640px}
    .zero-item{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:13px;font-weight:700;color:rgba(255,255,255,0.8);letter-spacing:.3px;display:flex;align-items:center;gap:6px}
    .zero-icon{color:var(--purple);font-size:10px}
    .zero-divider{color:rgba(255,255,255,0.15);font-size:16px}

    /* ===== 4-COLUMN GRID ===== */
    .pricing-grid{max-width:1320px;margin:0 auto;padding:0 20px 80px;display:grid;grid-template-columns:repeat(4,1fr);gap:16px;align-items:start}

    /* ===== CARD ===== */
    .plan-card{position:relative;background:rgba(255,255,255,0.03);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:28px 20px 24px;display:flex;flex-direction:column;transition:all .4s ease;overflow:visible}
    .plan-card:hover{transform:translateY(-4px);border-color:rgba(204, 85, 0,0.35);box-shadow:0 0 12px rgba(204, 85, 0,0.06),0 20px 60px rgba(0,0,0,0.4)}
    .plan-card.popular{overflow:visible}
    .popular-badge{position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#CC5500,#E2725B);color:#fff;font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:11px;font-weight:700;padding:6px 20px;border-radius:99px;letter-spacing:1px;text-transform:uppercase;white-space:nowrap;box-shadow:0 4px 16px rgba(204, 85, 0,0.4);z-index:10}

    .logo-spot{width:100%;display:flex;justify-content:center;margin-bottom:16px;min-height:36px}
    .logo-spot img{height:32px;width:auto;opacity:.85}

    .plan-name{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:22px;font-weight:800;color:var(--purple);text-align:center;margin-bottom:2px}
    .plan-subtitle{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:11px;color:rgba(255,255,255,0.4);text-align:center;margin-bottom:16px;line-height:1.3}

    /* Price block (monthly retainer) */
    .price-block{text-align:center;margin-bottom:16px}
    .price-build-label{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:10px;font-weight:700;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:1px;margin-bottom:2px}
    .price-current{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:40px;font-weight:800;color:var(--purple);line-height:1}
    .price-current .currency{font-size:22px;font-weight:700;vertical-align:super;margin-right:1px}
    .price-current.small{font-size:26px;margin-top:8px}
    .price-period{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:12px;color:rgba(255,255,255,0.35);display:inline}
    .price-setup{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:11px;color:rgba(255,255,255,0.45);margin-top:5px}
    .price-setup strong{color:var(--purple-light);font-weight:700}
    .price-care-label{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:10px;font-weight:700;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:1px;margin-top:10px;margin-bottom:2px}
    .price-divider{width:40px;height:1px;background:rgba(204, 85, 0,0.3);margin:8px auto}

    /* Custom card price */
    .price-custom{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:28px;font-weight:800;color:var(--purple);line-height:1;margin-bottom:4px}

    /* Outcome badge */
    .outcome-badge{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:10px;color:var(--purple-light);background:rgba(204, 85, 0,0.08);border:1px solid rgba(204, 85, 0,0.15);border-radius:8px;padding:7px 10px;text-align:center;margin-bottom:14px;line-height:1.4;font-style:italic}

    /* ===== NUTRITION LABEL ===== */
    .nutrition-label{background:#000;border:3px solid rgba(204, 85, 0,0.8);border-radius:4px;padding:8px 10px 12px;margin-bottom:16px;flex:1}
    .plan-card.popular .nutrition-label{border-color:var(--purple)}

    .nl-title{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.5px;line-height:1;margin-bottom:2px}
    .nl-serving{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:10px;color:rgba(255,255,255,0.65);line-height:1.4;padding-bottom:5px}
    .nl-serving strong{color:var(--purple)}

    .nl-thick{height:7px;background:var(--purple);margin:0 -10px}
    .nl-thin{height:1px;background:rgba(204, 85, 0,0.3);margin:0 -10px}

    .nl-header{display:flex;justify-content:space-between;align-items:flex-end;padding:3px 0 2px}
    .nl-header-left,.nl-header-right{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:9px;font-weight:700;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:.5px}

    .nl-row{display:flex;justify-content:space-between;align-items:baseline;padding:4px 0;border-bottom:1px solid rgba(204, 85, 0,0.12);gap:6px}
    .nl-row:last-child{border-bottom:none}
    .nl-row.blend{border-bottom:1px solid rgba(204, 85, 0,0.2);padding-top:6px}
    .nl-row.blend .nl-feature{font-weight:800;color:#fff;font-size:11px}
    .nl-row.indent .nl-feature{padding-left:12px;font-weight:400;color:rgba(255,255,255,0.55);font-size:10.5px}

    .nl-feature{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:11px;font-weight:600;color:rgba(255,255,255,0.75);flex:1;line-height:1.3}
    .nl-value{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:11px;font-weight:700;color:var(--purple);white-space:nowrap;text-align:right;flex-shrink:0}
    .nl-value.green{color:#4FBF24}
    .nl-value.white{color:rgba(255,255,255,0.4)}
    .nl-value.na{color:rgba(255,255,255,0.15);font-weight:400;font-size:10px}
    .nl-value.highlight{color:var(--purple-light);font-weight:800}

    .nl-credits{display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid rgba(204, 85, 0,0.15)}
    .nl-credits .nl-feature{color:var(--purple);font-weight:800;font-size:11px}
    .nl-credits .nl-value{color:var(--purple);font-size:11px;font-weight:800}

    .nl-footnote{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:8px;color:rgba(255,255,255,0.3);padding-top:6px;line-height:1.4}

    /* ===== CTA ===== */
    .cta-btn{display:block;width:100%;padding:12px 0;border:none;border-radius:12px;font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:14px;font-weight:700;cursor:pointer;text-decoration:none;text-align:center;transition:all .3s;margin-top:auto}
    .cta-btn.primary{background:rgba(204, 85, 0,0.15);color:var(--purple-light);border:1px solid rgba(204, 85, 0,0.35)}
    .cta-btn.primary:hover{background:rgba(204, 85, 0,0.25);border-color:rgba(204, 85, 0,0.6);box-shadow:0 0 16px rgba(204, 85, 0,0.15)}
    .cta-btn.calendly{background:rgba(204, 85, 0,0.08);color:var(--purple-light);border:1px dashed rgba(204, 85, 0,0.4)}
    .cta-btn.calendly:hover{background:rgba(204, 85, 0,0.15);border-color:rgba(204, 85, 0,0.6)}
    .btn-sub{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:10px;color:rgba(255,255,255,0.3);text-align:center;margin-top:6px;display:block}

    /* ===== RESPONSIVE ===== */
    @media(max-width:1200px){.pricing-grid{grid-template-columns:repeat(2,1fr);gap:16px;max-width:740px}}
    @media(max-width:600px){
      .pricing-grid{grid-template-columns:1fr;max-width:440px}
      .pricing-header{padding:60px 20px 30px}
      .pricing-header h1{font-size:36px}
      .plan-card{padding:24px 18px 22px}
      .tab-btn{padding:10px 18px;font-size:13px}
      .tab-btn .tab-icon{margin-right:6px;font-size:14px}
      .panel-header{padding:0 20px 16px}
    }
  


  .og-section-header {
    padding: 80px 20px;
    text-align: center;
    background: linear-gradient(180deg, transparent 0%, rgba(204, 85, 0, 0.03) 50%, transparent 100%);
  }

  .og-section-label {
    display: inline-block;
    padding: 8px 20px;
    background: rgba(204, 85, 0, 0.1);
    border: 1px solid rgba(204, 85, 0, 0.3);
    border-radius: 100px;
    font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif;
    font-size: 11px;
    font-weight: 700;
    color: #ff8c42;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 24px;
  }

  .og-section-header h2 {
    font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif;
    font-size: clamp(36px, 6vw, 56px);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 20px;
    color: var(--foreground);
    letter-spacing: -0.02em;
  }

  .og-section-header h2 .orange {
    color: var(--oren-orange);
  }

  .og-section-subtitle {
    font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif;
    font-size: clamp(16px, 2vw, 18px);
    color: rgba(255, 255, 255, 0.7);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.8;
  }


  /* ========================================
     FOOTER VARIABLES
     ======================================== */
  :root {
    --orange: var(--oren-orange);
    --orange-glow: rgba(204, 85, 0, 0.4);
    --navy: #003366;
    --bg: var(--background);
    --bg-footer: #020202;
    --bg-card: #0a0a0a;
    --border: rgba(255, 255, 255, 0.06);
    --border-hover: rgba(255, 255, 255, 0.12);
    --text: var(--foreground);
    --text-secondary: rgba(255, 255, 255, 0.85);
    --text-muted: var(--foreground);
    --metallic-1: var(--foreground);
    --metallic-2: var(--foreground);
    --metallic-3: rgba(255, 255, 255, 0.6);
    --gold-1: #FFD700;
    --gold-2: #FFC107;
    --gold-3: #B8860B;
  }

  /* ========================================
     AFFILIATE REVIEW TRUST BAR
     ======================================== */
  .mkt-footer-trust {
    background: linear-gradient(180deg, #0a0a0a 0%, var(--bg-footer) 100%);
    border-top: 1px solid var(--border);
    padding: 60px 28px 48px;
    text-align: center;
  }

  .mkt-footer-trust-label {
    font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    margin-bottom: 28px;
  }

  .mkt-footer-trust-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 12px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .mkt-trust-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 8px;
    background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .mkt-trust-link::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(204,85,0,0.08) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .mkt-trust-link:hover {
    border-color: rgba(204, 85, 0, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(204, 85, 0, 0.1);
  }

  .mkt-trust-link:hover::before { opacity: 1; }

  .mkt-trust-link:hover .mkt-trust-name {
    background: linear-gradient(135deg, var(--foreground) 0%, var(--orange) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .mkt-trust-svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    object-fit: contain;
    filter: grayscale(0.3) brightness(0.9);
    transition: filter 0.3s ease;
  }

  .mkt-trust-link:hover .mkt-trust-svg {
    filter: grayscale(0) brightness(1.1);
  }

  .mkt-trust-name {
    font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: var(--foreground);
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
    background: none;
    -webkit-text-fill-color: var(--foreground);
  }

  .mkt-trust-link:hover .mkt-trust-name {
    -webkit-text-fill-color: transparent;
  }

  .mkt-trust-star {
    font-size: 10px;
    color: var(--orange);
    letter-spacing: 1px;
    position: relative;
    z-index: 1;
  }

  /* ========================================
     MEGA FOOTER
     ======================================== */
  .mkt-mega-footer {
    background: var(--bg-footer);
    padding: 64px 28px 0;
    border-top: 1px solid var(--border);
    position: relative;
  }

  .mkt-mega-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--orange), transparent);
  }

  .mkt-footer-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .mkt-footer-top {
    display: grid;
    grid-template-columns: 1.4fr repeat(5, 1fr);
    gap: 40px;
    padding-bottom: 48px;
    border-bottom: 1px solid var(--border);
  }

  /* Brand Column */
  .mkt-footer-brand {
    padding-right: 20px;
    text-align: center;
  }

  .mkt-footer-logo {
    height: 50px;
    width: auto;
    margin-bottom: 4px;
    filter: brightness(0.95);
  }

  /* ========================================
     FUSE IGNITION TAGLINE
     ======================================== */
  .mkt-fuse-container {
    position: relative;
    margin-bottom: 24px;
    padding: 16px 0;
    overflow: visible;
    display: flex;
    justify-content: center;
  }

  .mkt-fuse-line {
    position: absolute;
    top: 50%;
    left: -40px;
    width: calc(100% + 80px);
    height: 2px;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: 1;
  }

  .mkt-fuse-burn {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, 
      rgba(80, 40, 10, 0.6) 0%,
      rgba(120, 60, 10, 0.8) 70%,
      #FF6A00 85%,
      #FFD700 92%,
      var(--foreground) 100%
    );
    border-radius: 2px;
    animation: fuseBurn 3s ease-in forwards;
    animation-play-state: paused;
  }

  .mkt-fuse-burn::after {
    content: '';
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--foreground) 0%, #FFD700 30%, #FF6A00 60%, transparent 100%);
    box-shadow: 
      0 0 8px 3px rgba(255, 165, 0, 0.8),
      0 0 20px 6px rgba(255, 100, 0, 0.5),
      0 0 40px 10px rgba(204, 85, 0, 0.3);
    animation: emberGlow 0.15s ease-in-out infinite alternate;
  }

  @keyframes fuseBurn { 0% { width: 0%; } 100% { width: 100%; } }
  @keyframes emberGlow { 0% { transform: translateY(-50%) scale(1); opacity: 1; } 100% { transform: translateY(-50%) scale(1.3); opacity: 0.8; } }

  .mkt-spark {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #FFD700;
    pointer-events: none;
    z-index: 3;
    opacity: 0;
  }

  .mkt-tagline-box {
    position: relative;
    display: inline-block;
    padding: 12px 28px;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 8px;
    z-index: 5;
    overflow: visible;
    background: #020202;
  }

  .mkt-tagline-box::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 10px;
    padding: 2px;
    background: conic-gradient(from 0deg, transparent 0%, transparent 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .mkt-tagline-box.ignited::before {
    background: conic-gradient(
      from var(--fire-angle, 0deg),
      #FF6A00 0%, #FFD700 10%, #FF4500 20%, var(--oren-orange) 30%,
      rgba(204, 85, 0, 0.3) 50%, transparent 60%, transparent 80%,
      rgba(204, 85, 0, 0.3) 90%, #FF6A00 100%
    );
    opacity: 1;
    animation: fireBorderRotate 3s linear infinite;
  }

  @keyframes fireBorderRotate { 0% { --fire-angle: 0deg; } 100% { --fire-angle: 360deg; } }

  @supports not (background: conic-gradient(from var(--fire-angle), red, blue)) {
    .mkt-tagline-box.ignited::before {
      background: linear-gradient(90deg, #FF6A00, #FFD700, #FF4500, var(--oren-orange), #FF6A00);
      background-size: 300% 100%;
      animation: fireBorderFallback 2s linear infinite;
    }
    @keyframes fireBorderFallback { 0% { background-position: 0% 50%; } 100% { background-position: 300% 50%; } }
  }

  .mkt-tagline-box.ignited {
    box-shadow: 0 0 15px rgba(255, 106, 0, 0.3), 0 0 30px rgba(204, 85, 0, 0.15), inset 0 0 20px rgba(255, 106, 0, 0.05);
    border-color: transparent;
  }

  .mkt-flame-tip {
    position: absolute;
    width: 6px;
    height: 12px;
    pointer-events: none;
    opacity: 0;
    z-index: 4;
  }

  .mkt-tagline-box.ignited .mkt-flame-tip { opacity: 1; }

  .mkt-flame-tip::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 10px;
    background: radial-gradient(ellipse at bottom, #FFD700 0%, #FF6A00 40%, transparent 70%);
    border-radius: 50% 50% 20% 20%;
    animation: flameFlicker 0.4s ease-in-out infinite alternate;
  }

  .mkt-flame-tip:nth-child(2)::before { animation-delay: 0.1s; height: 8px; }
  .mkt-flame-tip:nth-child(3)::before { animation-delay: 0.2s; height: 12px; }
  .mkt-flame-tip:nth-child(4)::before { animation-delay: 0.05s; height: 7px; }
  .mkt-flame-tip:nth-child(5)::before { animation-delay: 0.15s; height: 9px; }
  .mkt-flame-tip:nth-child(6)::before { animation-delay: 0.25s; height: 11px; }

  @keyframes flameFlicker {
    0% { transform: translateX(-50%) scaleY(1) scaleX(1); opacity: 0.8; }
    100% { transform: translateX(-50%) scaleY(1.4) scaleX(0.8); opacity: 1; }
  }

  .mkt-footer-tagline {
    font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: uppercase;
    white-space: nowrap;
    position: relative;
    z-index: 2;
  }

  .mkt-footer-tagline .tl-char { display: inline-block; opacity: 0.4; transition: opacity 0.6s ease, text-shadow 0.6s ease, color 0.6s ease; }
  .mkt-footer-tagline .tl-char.lit { opacity: 1; }
  .mkt-footer-tagline .tl-char.seg-online { color: var(--oren-orange); }
  .mkt-footer-tagline .tl-char.seg-online.lit { color: var(--oren-orange); text-shadow: 0 0 10px rgba(204, 85, 0, 0.6), 0 0 30px rgba(204, 85, 0, 0.3); }
  .mkt-footer-tagline .tl-char.seg-pipe { color: var(--gold-1); }
  .mkt-footer-tagline .tl-char.seg-pipe.lit { color: var(--gold-1); text-shadow: 0 0 8px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 193, 7, 0.5); }
  .mkt-footer-tagline .tl-char.seg-brand { color: var(--foreground); }
  .mkt-footer-tagline .tl-char.seg-brand.lit { color: var(--foreground); text-shadow: 0 0 10px rgba(255, 255, 255, 0.5); }

  /* ========================================
     SOCIAL ICONS
     ======================================== */
  .mkt-footer-socials { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }

  .mkt-footer-social-link {
    display: flex; align-items: center; justify-content: center;
    width: 36px; height: 36px; border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.04);
    color: var(--foreground); text-decoration: none; transition: all 0.3s ease;
  }

  .mkt-footer-social-link svg { width: 16px; height: 16px; fill: var(--foreground); }

  .mkt-footer-social-link:hover {
    border-color: var(--orange); color: var(--orange);
    background: rgba(204, 85, 0, 0.08); transform: translateY(-2px);
  }
  .mkt-footer-social-link:hover svg { fill: var(--orange); }

  /* ========================================
     FOOTER COLUMNS
     ======================================== */
  .mkt-footer-col-title {
    font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif; font-size: 12px; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase; color: var(--foreground);
    margin-bottom: 20px; position: relative; padding-bottom: 10px;
  }
  .mkt-footer-col-title::after {
    content: ''; position: absolute; bottom: 0; left: 0;
    width: 20px; height: 2px; background: var(--orange); border-radius: 2px;
  }

  .mkt-footer-links { list-style: none; padding: 0; margin: 0; }
  .mkt-footer-links li { margin-bottom: 10px; }
  .mkt-footer-links a {
    font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif; font-size: 13px;
    color: rgba(255, 255, 255, 0.75); text-decoration: none;
    transition: all 0.25s ease; display: inline-flex; align-items: center; gap: 6px;
  }
  .mkt-footer-links a:hover { color: var(--orange); transform: translateX(3px); }
  .mkt-footer-links .ext-link::after { content: '↗'; font-size: 10px; color: rgba(255,255,255,0.4); transition: all 0.25s ease; }
  .mkt-footer-links .ext-link:hover::after { color: var(--orange); }

  /* ========================================
     RESOURCES SECTION
     ======================================== */
  .mkt-footer-resources { padding: 40px 0; border-bottom: 1px solid var(--border); }
  .mkt-footer-resources-title {
    font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif; font-size: 12px; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase; color: var(--foreground);
    margin-bottom: 20px; display: flex; align-items: center; gap: 10px;
  }
  .mkt-footer-resources-title .aff-badge {
    font-size: 8px; letter-spacing: 1.5px; color: var(--orange);
    background: rgba(204, 85, 0, 0.08); padding: 3px 8px; border-radius: 4px;
  }
  .mkt-footer-resources-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 8px 24px; }
  .mkt-footer-resources-grid a {
    font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif; font-size: 12px; color: rgba(255, 255, 255, 0.75);
    text-decoration: none; padding: 6px 0; display: inline-flex; align-items: center; gap: 6px; transition: all 0.25s ease;
  }
  .mkt-footer-resources-grid a:hover { color: var(--orange); }
  .mkt-footer-resources-grid a .r-dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(255,255,255,0.4); flex-shrink: 0; transition: background 0.25s ease; }
  .mkt-footer-resources-grid a:hover .r-dot { background: var(--orange); }

  /* ========================================
     BOTTOM BAR
     ======================================== */
  .mkt-footer-bottom {
    padding: 28px 0; display: flex; align-items: center;
    justify-content: space-between; flex-wrap: wrap; gap: 16px;
  }
  .mkt-footer-copy { font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif; font-size: 12px; color: rgba(255, 255, 255, 0.6); }
  .mkt-footer-copy a { color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: color 0.25s ease; }
  .mkt-footer-copy a:hover { color: var(--orange); }
  .mkt-footer-bottom-links { display: flex; gap: 20px; flex-wrap: wrap; }
  .mkt-footer-bottom-links a { font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif; font-size: 11px; color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: color 0.25s ease; }
  .mkt-footer-bottom-links a:hover { color: var(--orange); }
  .mkt-footer-payment { display: flex; align-items: center; }
  .mkt-footer-payment-img { height: 28px; width: auto; filter: brightness(0.85); transition: filter 0.3s ease; object-fit: contain; }
  .mkt-footer-payment:hover .mkt-footer-payment-img { filter: brightness(1); }

  /* ========================================
     MOBILE ACCORDION
     ======================================== */
  .mkt-footer-accordion-toggle {
    display: none; width: 100%; background: none; border: none;
    padding: 16px 0; cursor: pointer; text-align: left;
  }
  .mkt-footer-accordion-toggle .mkt-footer-col-title { margin-bottom: 0; padding-bottom: 0; display: flex; align-items: center; justify-content: space-between; }
  .mkt-footer-accordion-toggle .mkt-footer-col-title::after { display: none; }
  .mkt-footer-accordion-toggle .acc-arrow { font-size: 12px; color: var(--foreground); transition: transform 0.3s ease; }
  .mkt-footer-accordion-toggle.active .acc-arrow { transform: rotate(180deg); }
  .mkt-footer-col-content { overflow: hidden; transition: max-height 0.35s ease; }

  /* ========================================
     COOKIE CONSENT BANNER
     ======================================== */
  .og-cookie-banner {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    z-index: 99999;
    background: rgba(5, 5, 5, 0.97);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255,255,255,0.08);
    padding: 20px 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    transform: translateY(100%);
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
    font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif;
  }

  .og-cookie-banner.visible {
    transform: translateY(0);
  }

  .og-cookie-text {
    font-size: 13px;
    color: rgba(255,255,255,0.75);
    max-width: 600px;
    line-height: 1.5;
  }

  .og-cookie-text a {
    color: var(--orange);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .og-cookie-actions {
    display: flex;
    gap: 10px;
    flex-shrink: 0;
  }

  .og-cookie-btn {
    padding: 10px 22px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 700;
    font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.25s ease;
    border: none;
  }

  .og-cookie-btn-accept {
    background: var(--orange);
    color: #fff;
  }
  .og-cookie-btn-accept:hover {
    background: #e06000;
    box-shadow: 0 4px 20px rgba(204, 85, 0, 0.3);
  }

  .og-cookie-btn-decline {
    background: transparent;
    color: rgba(255,255,255,0.6);
    border: 1px solid rgba(255,255,255,0.12);
  }
  .og-cookie-btn-decline:hover {
    border-color: rgba(255,255,255,0.25);
    color: #fff;
  }

  @media (max-width: 640px) {
    .og-cookie-banner {
      flex-direction: column;
      text-align: center;
      padding: 18px 20px;
      gap: 14px;
    }
    .og-cookie-text { font-size: 12px; }
  }

  /* ========================================
     RESPONSIVE
     ======================================== */
  @media (max-width: 1024px) {
    .mkt-footer-top { grid-template-columns: 1fr 1fr 1fr; gap: 32px; }
    .mkt-footer-brand { grid-column: 1 / -1; padding-right: 0; }
  }

  @media (max-width: 768px) {
    .mkt-footer-trust { padding: 40px 16px 36px; }
    .mkt-trust-link { padding: 8px 14px; }
    .mkt-trust-name { font-size: 11px; }
    .mkt-mega-footer { padding: 40px 16px 0; }
    .mkt-footer-top { display: flex !important; flex-direction: column !important; gap: 0 !important; padding-bottom: 0; }
    .mkt-footer-brand { padding-bottom: 32px; border-bottom: 1px solid var(--border); }
    .mkt-footer-accordion-toggle { display: block !important; }
    .mkt-footer-col { border-bottom: 1px solid var(--border); }
    .mkt-footer-col > .mkt-footer-col-title { display: none !important; }
    .mkt-footer-col-content { max-height: 0; padding-bottom: 0; }
    .mkt-footer-col-content.open { max-height: 600px; padding-bottom: 16px; }
    .mkt-footer-resources { padding: 32px 0; }
    .mkt-footer-resources-grid { grid-template-columns: 1fr 1fr; }
    .mkt-footer-bottom { flex-direction: column; align-items: center; text-align: center; gap: 12px; }
    .mkt-footer-payment { justify-content: center; order: -2; }
    .mkt-footer-bottom-links { justify-content: center; order: -1; }
    .mkt-footer-copy { order: 1; }
    .mkt-fuse-line { left: -20px; width: calc(100% + 20px); }
    .mkt-footer-tagline { font-size: 9px; letter-spacing: 3px; }
    .mkt-tagline-box { padding: 10px 16px; }
  }

  @media (max-width: 480px) {
    .mkt-trust-link { padding: 7px 12px; }
    .mkt-trust-name { font-size: 10px; }
    .mkt-trust-svg { width: 16px; height: 16px; }
    .mkt-footer-resources-grid { grid-template-columns: 1fr; }
    .mkt-footer-tagline { font-size: 8px; letter-spacing: 2px; }
  }

  @property --fire-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }


    /* === Dot Grid Overlay for Hero === */
    .hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
      background-size: 30px 30px;
      pointer-events: none;
    }

    /* === Browser Mockup Showcase === */
    .browser-mockup {
      max-width: 700px;
      margin: 50px auto 0;
      border-radius: 20px;
      overflow: hidden;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      box-shadow: 0 30px 80px rgba(0,0,0,0.4);
      position: relative;
      z-index: 1;
    }
    .browser-bar {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      background: rgba(11, 29, 58, 0.8);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      gap: 12px;
    }
    .browser-dots { display: flex; gap: 6px; }
    .browser-dots span { width: 10px; height: 10px; border-radius: 50%; }
    .browser-dots span:nth-child(1) { background: #ff5f57; }
    .browser-dots span:nth-child(2) { background: #febc2e; }
    .browser-dots span:nth-child(3) { background: #28c840; }
    .browser-url {
      flex: 1;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(204, 85, 0, 0.3);
      border-radius: 8px;
      padding: 6px 14px;
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif;
      font-size: 12px;
      color: rgba(255,255,255,0.5);
    }
    .browser-viewport {
      position: relative;
      width: 100%;
      aspect-ratio: 16/10;
      overflow: hidden;
      background: #0B1D3A;
    }
    .browser-viewport img {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      object-fit: cover;
      opacity: 0;
      animation: browserCrossfade 12s infinite;
    }
    .browser-viewport img:nth-child(1) { animation-delay: 0s; }
    .browser-viewport img:nth-child(2) { animation-delay: 4s; }
    .browser-viewport img:nth-child(3) { animation-delay: 8s; }
    @keyframes browserCrossfade {
      0%, 5% { opacity: 0; }
      8.33%, 30% { opacity: 1; }
      33.33%, 100% { opacity: 0; }
    }

    /* === Glassmorphic Card Overrides === */
    .capability-card {
      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;
      border-radius: 20px !important;
    }
    .tech-item {
      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;
      border-radius: 16px !important;
    }

    @media (max-width: 768px) {
      .browser-mockup { margin-top: 30px; }
    }

</style>
<!-- HERO SECTION -->
  <section class="hero">
    <div class="hero-content">
      <div class="hero-badge">Custom Web Solutions</div>
      <h1>
        Website Experiences<br />
        That <span>Convert</span>
      </h1>
      <p class="hero-text">
        High-performance websites and applications engineered as revenue assets.
        We build digital experiences that users love and businesses profit from.
      </p>
      <div class="actions">
        <a href="#contact" data-lead-source="orenweb" class="button" aria-label="Talk to a strategist about OrenWeb">
          <div class="dots_border"></div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle">
            <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black"
              d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z">
            </path>
            <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black"
              d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z">
            </path>
            <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black"
              d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z">
            </path>
          </svg>
          <span class="text_button">Talk to a Strategist</span>
        </a>
      </div>

      <div class="browser-mockup">
        <div class="browser-bar">
          <div class="browser-dots"><span></span><span></span><span></span></div>
          <div class="browser-url">orenweb.io/showcase</div>
        </div>
        <div class="browser-viewport">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Dashboard Analytics" />
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Modern SaaS" />
          <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80" alt="Clean Design" />
        </div>
      </div>
    </div>
  </section>

  <!-- STATS SECTION -->
  <section class="stats-section">
    <div class="stat-item">
      <span class="stat-value">400%</span>
      <span class="stat-label">Higher Conversions</span>
      <span class="stat-context">With superior UX design</span>
    </div>

    <div class="stat-item">
      <span class="stat-value">2%</span>
      <span class="stat-label">Per Second Faster</span>
      <span class="stat-context">Walmart: Every 1s = 2% more conversions</span>
    </div>

    <div class="stat-item">
      <span class="stat-value">75%</span>
      <span class="stat-label">Judge By Design</span>
      <span class="stat-context">Website credibility based on aesthetics</span>
    </div>

    <div class="stat-item">
      <span class="stat-value">&lt;2s</span>
      <span class="stat-label">Load Time Target</span>
      <span class="stat-context">Industry standard for peak performance</span>
    </div>
  </section>

  <!-- CAPABILITIES SECTION -->
  <section class="content-section">
    <div class="section-header">
      <div class="section-badge">CAPABILITIES</div>
      <h2 class="section-title">
        What We <span class="highlight">Build</span>
      </h2>
      <p class="section-description">
        From concept to launch, we deliver digital solutions that drive measurable business results.
      </p>
    </div>

    <div class="capabilities-grid">
      <!-- Custom Websites -->
      <div class="capability-card">
        <span class="card-accent"></span>
        <div class="content">
          <h3>Custom Websites</h3>
          <p>
            Bespoke designs tailored to your brand identity. Fast, responsive,
            and optimized for conversions on every device.
          </p>
          <ul>
            <li>Brand-First Design</li>
            <li>Mobile-First Approach</li>
            <li>SEO Optimization</li>
            <li>Performance Tuning</li>
          </ul>
        </div>
      </div>

      <!-- Talking Websites -->
      <div class="capability-card">
        <span class="card-accent"></span>
        <div class="content">
          <h3>Talking Websites with AI Voice</h3>
          <p>
            Revolutionary AI-powered websites that literally talk to your visitors. Engage users with interactive voice conversations that convert.
          </p>
          <ul>
            <li>AI Voice Agents Embedded</li>
            <li>24/7 Customer Engagement</li>
            <li>Real-Time Conversations</li>
            <li>Multilingual Support</li>
          </ul>
        </div>
      </div>

      <!-- Web Applications -->
      <div class="capability-card">
        <span class="card-accent"></span>
        <div class="content">
          <h3>Web Applications</h3>
          <p>
            Powerful, scalable web apps built with cutting-edge technology.
            Complex functionality made simple and intuitive.
          </p>
          <ul>
            <li>Custom Development</li>
            <li>API Integration</li>
            <li>Real-time Features</li>
            <li>Cloud Infrastructure</li>
          </ul>
        </div>
      </div>

      <!-- E-Commerce -->
      <div class="capability-card">
        <span class="card-accent"></span>
        <div class="content">
          <h3>E-Commerce Solutions</h3>
          <p>
            Complete online stores that maximize conversions. Secure payments,
            inventory management, and seamless checkout experiences.
          </p>
          <ul>
            <li>Payment Gateways</li>
            <li>Product Management</li>
            <li>Order Processing</li>
            <li>Analytics Dashboard</li>
          </ul>
        </div>
      </div>

      <!-- UI/UX Design -->
      <div class="capability-card">
        <span class="card-accent"></span>
        <div class="content">
          <h3>UI/UX Design</h3>
          <p>
            Beautiful interfaces backed by user research. We create intuitive
            experiences that users love and businesses profit from.
          </p>
          <ul>
            <li>User Research</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>Usability Testing</li>
          </ul>
        </div>
      </div>

      <!-- Maintenance & Support -->
      <div class="capability-card">
        <span class="card-accent"></span>
        <div class="content">
          <h3>Maintenance & Support</h3>
          <p>
            Keep your website running smoothly with ongoing updates, security
            patches, and performance optimization.
          </p>
          <ul>
            <li>24/7 Monitoring</li>
            <li>Regular Backups</li>
            <li>Security Updates</li>
            <li>Priority Support</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- PROCESS SECTION -->
  <section class="process-section">
    <div class="section-header">
      <div class="section-badge">OUR PROCESS</div>
      <h2 class="section-title">
        How We <span class="highlight">Build Excellence</span>
      </h2>
      <p class="section-description">
        A proven methodology that transforms your vision into a digital reality through
        strategic planning and expert execution.
      </p>
    </div>

    <div class="process-timeline">
      <div class="process-step">
        <div class="process-number">01</div>
        <div class="process-content">
          <h3>Discovery & Strategy</h3>
          <p>
            We dive deep into your business goals, target audience, and competitive
            landscape to create a strategic roadmap that ensures your project's success
            from day one.
          </p>
        </div>
      </div>

      <div class="process-step">
        <div class="process-number">02</div>
        <div class="process-content">
          <h3>Design & Prototyping</h3>
          <p>
            Our designers craft stunning interfaces with user experience at the forefront.
            You'll see interactive prototypes before we write a single line of code.
          </p>
        </div>
      </div>

      <div class="process-step">
        <div class="process-number">03</div>
        <div class="process-content">
          <h3>Development & Testing</h3>
          <p>
            Expert developers bring designs to life with clean, scalable code. Rigorous
            testing ensures everything works flawlessly across all devices and browsers.
          </p>
        </div>
      </div>

      <div class="process-step">
        <div class="process-number">04</div>
        <div class="process-content">
          <h3>Launch & Optimization</h3>
          <p>
            We handle deployment, monitoring, and post-launch optimization to ensure peak
            performance. Your success is measured in results, not just deliverables.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- TECH STACK SECTION -->
  <section class="content-section">
    <div class="section-header">
      <div class="section-badge">TECHNOLOGY STACK</div>
      <h2 class="section-title">
        Built With <span class="highlight">Cutting-Edge Tech</span>
      </h2>
      <p class="section-description">
        We leverage the best tools and frameworks to deliver fast, secure, and scalable solutions.
      </p>
    </div>

    <div class="tech-grid">
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-graphql-plain colored"></i></div>
        <div class="tech-name">GraphQL</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-redis-plain colored"></i></div>
        <div class="tech-name">Redis</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-react-original colored"></i></div>
        <div class="tech-name">React</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-nextjs-plain colored"></i></div>
        <div class="tech-name">Next.js</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-nodejs-plain colored"></i></div>
        <div class="tech-name">Node.js</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-typescript-plain colored"></i></div>
        <div class="tech-name">TypeScript</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-javascript-plain colored"></i></div>
        <div class="tech-name">JavaScript</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-html5-plain colored"></i></div>
        <div class="tech-name">HTML5</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-css3-plain colored"></i></div>
        <div class="tech-name">CSS3</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-tailwindcss-plain colored"></i></div>
        <div class="tech-name">Tailwind CSS</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-mysql-plain colored"></i></div>
        <div class="tech-name">MySQL</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-postgresql-plain colored"></i></div>
        <div class="tech-name">PostgreSQL</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-mongodb-plain colored"></i></div>
        <div class="tech-name">MongoDB</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-firebase-plain colored"></i></div>
        <div class="tech-name">Firebase</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-amazonwebservices-plain-wordmark colored"></i></div>
        <div class="tech-name">AWS</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-python-plain colored"></i></div>
        <div class="tech-name">Python</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-docker-plain colored"></i></div>
        <div class="tech-name">Docker</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-vercel-plain colored"></i></div>
        <div class="tech-name">Vercel</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-git-plain colored"></i></div>
        <div class="tech-name">Git</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-github-original colored"></i></div>
        <div class="tech-name">GitHub</div>
      </div>
    </div>
  </section>

  <!-- CTA SECTION -->
  <section class="cta-section" id="contact">
    <h2 class="cta-title">
      Ready to Build <span class="highlight">Something Amazing?</span>
    </h2>
    <p class="cta-description">
      Let's transform your vision into a digital experience that drives real results.
      Schedule a free consultation to discuss your project.
    </p>
    <div class="actions">
      <a href="https://calendly.com/orengenio/30min" class="button" target="_blank" rel="noopener">
        <div class="dots_border"></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle">
          <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black"
            d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z">
          </path>
          <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black"
            d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z">
          </path>
          <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black"
            d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z">
          </path>
        </svg>
        <span class="text_button">Book A Meeting</span>
      </a>
    </div>
  </section>
`

export default function Page() {
  return (
    <>
    <LeadModalTrigger
      defaultSource="orenweb"
      title="Launch Your Next Website"
      subtitle="Tell us about the project and we'll be in touch within the hour."
    />
    <div className="pt-24 pb-12 web-page" dangerouslySetInnerHTML={{ __html: `
<style>
 

 :root{ --transparent: transparent;
--primary: #37ca37;
--secondary: #188bf6;
--white: var(--foreground);
--gray: #cbd5e0;
--black: #000000;
--red: #e93d3d;
--orange: #f6ad55;
--yellow: #faf089;
--green: #9ae6b4;
--teal: #81e6d9;
--malibu: #63b3ed;
--indigo: #757BBD;
--purple: #d6bcfa;
--pink: #fbb6ce;
--cobalt: #155eef;
--smoke: #f5f5f5;
--overlay: rgba(0, 0, 0, 0.5);
--color-m5ye8saq: #ebeef2ff;
--color-m65wrxxb: #0B1D3Aff;
--color-m65wsmwf: #E2725Bff;
--color-azujpfxo: var(--oren-orange)ff;
--color-lgf1duy4: #0E182C;
--color-lx2q00eu: #8893A8;
--color-lx2prsc2: #000321;
--color-lyrjldj8: rgba(255,255,255,0.40);
--color-hpmuetwt: var(--oren-orange)ff;
--inter: 'Inter';
--space-grotesk: 'Space Grotesk';
--abel: 'Abel';
--headlinefont: 'Inter';
--contentfont: 'Inter';
--text-color: #000000;
--link-color: #188bf6; } .bg-fixed{bottom:0;top:0;left:0;right:0;position:fixed;overflow:auto;background-color:var(--white)} 
            
            .drop-zone-draggable .hl_main_popup{box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}
            
          
#hl_main_popup.popup-body{position:absolute!important;left:50%!important;bottom:auto!important;transform:translate(-50%,0)!important;right:auto!important;box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}.--mobile #hl_main_popup.popup-body{width:380px!important}@media screen and (min-width:0px) and (max-width:480px){#hl_main_popup.popup-body{width:380px!important}} 
            
            .drop-zone-draggable .hl_main_popup-qKyhd0BwvF{box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}
            
          
#hl_main_popup-qKyhd0BwvF.popup-body{position:absolute!important;left:50%!important;bottom:auto!important;transform:translate(-50%,0)!important;right:auto!important;box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}.--mobile #hl_main_popup-qKyhd0BwvF.popup-body{width:380px!important}@media screen and (min-width:0px) and (max-width:480px){#hl_main_popup-qKyhd0BwvF.popup-body{width:380px!important}}  
 /* ---- Section styles ----- */ 
:root{--transparent:transparent;--black:#000000}.hl_page-preview--content .section-suI_XhuIK{box-shadow:none;padding:20px 0;margin:0;background-color:var(--black);border-color:var(--black);border-width:2px;border-style:solid;backdrop-filter:none}.hl_page-preview--content .col-SpvDr4g-EU,.hl_page-preview--content .row-2euixjSQzQ{margin:0 auto;box-shadow:none;padding:15px 0;background-color:var(--transparent);border-color:var(--black);border-width:2px;border-style:solid;width:100%}.hl_page-preview--content .col-SpvDr4g-EU{padding:10px 5px;margin:0}.hl_page-preview--content .custom-code-nrRWH1UvqV{margin:0;width:auto;height:auto}#section-suI_XhuIK>.inner{max-width:1170px}#col-SpvDr4g-EU>.inner{flex-direction:column;justify-content:center;align-items:inherit;flex-wrap:nowrap} 
 /* ---- Section styles ----- */ 
:root{--transparent:transparent;--black:#000000}.hl_page-preview--content .col-wD6YQTez_Q,.hl_page-preview--content .row-EbP6CNfwe8,.hl_page-preview--content .section-FG2xR0rBz7{box-shadow:none;padding:0 0 20px;margin:0;background-color:var(--black);backdrop-filter:none;border-color:var(--black);border-width:2px;border-style:solid}.hl_page-preview--content .col-wD6YQTez_Q,.hl_page-preview--content .row-EbP6CNfwe8{margin:0 auto;padding:10px 5px;background-color:var(--transparent);width:100%}.hl_page-preview--content .col-wD6YQTez_Q{margin:0}.hl_page-preview--content .col-8piuZVsqe6,.hl_page-preview--content .col-xequVtIuFA,.hl_page-preview--content .row-8XSvHiFB2C,.hl_page-preview--content .row-Yc4I5bNhZr{margin:0 auto;box-shadow:none;padding:10px 5px;background-color:var(--transparent);backdrop-filter:none;border-color:var(--black);border-width:2px;border-style:solid;width:100%}.hl_page-preview--content .col-8piuZVsqe6,.hl_page-preview--content .col-xequVtIuFA,.hl_page-preview--content .row-Yc4I5bNhZr{margin:0}.hl_page-preview--content .col-xequVtIuFA,.hl_page-preview--content .row-Yc4I5bNhZr{margin:0 auto}.hl_page-preview--content .col-xequVtIuFA{width:50%;margin:0}.hl_page-preview--content .custom-code-iW2McDwl3b,.hl_page-preview--content .custom-code-wcFYfFuaYT{margin:0;width:auto;height:auto}#section-FG2xR0rBz7>.inner{max-width:1170px}#col-8piuZVsqe6>.inner,#col-wD6YQTez_Q>.inner,#col-xequVtIuFA>.inner{flex-direction:column;justify-content:center;align-items:inherit;flex-wrap:nowrap}
 /* ---- Global OrenGen Footer 2.5.26 styles ----- */  
 :root{--transparent:transparent;--black:#000000}.hl_page-preview--content .col-FEb6HvlC2D,.hl_page-preview--content .row-zi9SKpNODQ,.hl_page-preview--content .section-pR7gv78FnH{box-shadow:none;padding:20px 0;margin:0;background-color:var(--black);backdrop-filter:none;border-color:var(--black);border-width:2px;border-style:solid}.hl_page-preview--content .col-FEb6HvlC2D,.hl_page-preview--content .row-zi9SKpNODQ{margin:0 auto;padding:10px 5px;background-color:var(--transparent);width:100%}.hl_page-preview--content .col-FEb6HvlC2D{margin:0}.hl_page-preview--content .custom-code-NXSL2LSZ8x,.hl_page-preview--content .custom-code-v-Tvn2gxry{margin:0;width:auto;height:auto}#section-pR7gv78FnH>.inner{max-width:1170px}#col-FEb6HvlC2D>.inner{flex-direction:column;justify-content:center;align-items:inherit;flex-wrap:nowrap}



    :root {
      --og-primary: var(--oren-orange);
      --og-secondary: #E2725B;
      --og-ink: #000000;
      --og-paper: #E9E7EB;
      --og-charcoal: #1A1A1A;
      --og-gold: #D4A843;
      --og-cream: #FFF3E6;
    }

    :root {
      /* OrenWeb Navy/Orange Brand Theme — #CC5500 */
      --primary: #CC5500;
      --primary-light: #E2725B;
      --primary-dark: #993D00;
      --accent: #CC5500;
      --accent-dark: #993D00;

      /* Base Colors */
      --bg-dark: #081628;
      --bg-card: rgba(255, 255, 255, 0.03);
      --bg-card-hover: rgba(255, 255, 255, 0.06);
      --border: rgba(255, 255, 255, 0.08);
      --text: var(--foreground);
      --text-secondary: var(--oren-sub);
      --text-muted: var(--oren-muted);
    }

    .web-page * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .web-page {
      background: linear-gradient(165deg, #081628 0%, #0B1D3A 30%, #0F2847 60%, #0D2240 100%);
      background-attachment: fixed;
      color: var(--text);
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif;
      overflow-x: hidden;
    }

    .web-page h1,
    .web-page h2,
    .web-page h3,
    .web-page h4,
    .web-page h5,
    .web-page h6 {
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif;
    }

    /* Hero Section */
    .hero {
      position: relative;
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 120px 40px 80px;
      background: linear-gradient(180deg, rgba(204, 85, 0, 0.06) 0%, transparent 100%);
    }

    .hero-content {
      max-width: 900px;
      margin: 0 auto;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      padding: 10px 24px;
      background: rgba(204, 85, 0, 0.12) !important;
      border: 2px solid rgba(204, 85, 0, 0.35) !important;
      border-radius: 100px;
      color: var(--accent) !important;
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: 12px !important;
      font-weight: 700 !important;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 32px;
    }

    .web-page h1 {
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: clamp(48px, 8vw, 96px) !important;
      line-height: 1.05 !important;
      margin-bottom: 24px !important;
      letter-spacing: -1px;
      font-weight: 800 !important;
      color: var(--text) !important;
    }

    .web-page h1 span {
      background: linear-gradient(90deg, #CC5500, #E2725B) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background-clip: text !important;
    }

    .hero-text {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 18px !important;
      line-height: 1.6;
      color: var(--text-secondary) !important;
      max-width: 720px;
      margin: 0 auto 36px auto;
    }

    .actions {
      display: flex;
      gap: 18px;
      justify-content: center;
    }

    /* Premium Sparkle Button - Purple Theme */
    .button {
      --black-700: hsla(0 0% 12% / 1);
      --border_radius: 9999px;
      --transtion: 0.3s ease-in-out;
      cursor: pointer;
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      background-color: transparent;
      border: none;
      border-radius: var(--border_radius);
      transform: scale(calc(1 + (var(--active, 0) * 0.1)));
      transition: transform var(--transtion);
      text-decoration: none;
    }

    .button::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background-color: var(--black-700);
      border-radius: var(--border_radius);
      box-shadow: inset 0 0.5px hsl(0, 0%, 100%), inset 0 -1px 2px 0 hsl(0, 0%, 0%),
        0px 4px 10px -4px hsla(0 0% 0% / calc(1 - var(--active, 0))),
        0 0 0 calc(var(--active, 0) * 0.375rem) hsla(24, 100%, 40%, 0.75);
      transition: all var(--transtion);
      z-index: 0;
    }

    .button::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background-color: hsla(24, 100%, 40%, 0.75);
      background-image: radial-gradient(at 51% 89%, hsla(24, 100%, 40%, 1) 0px, transparent 50%),
        radial-gradient(at 100% 100%, hsla(24, 100%, 44%, 1) 0px, transparent 50%),
        radial-gradient(at 22% 91%, hsla(24, 100%, 44%, 1) 0px, transparent 50%);
      background-position: top;
      opacity: var(--active, 0);
      border-radius: var(--border_radius);
      transition: opacity var(--transtion);
      z-index: 2;
    }

    .button:is(:hover, :focus-visible) {
      --active: 1;
    }

    .button:active {
      transform: scale(1);
    }

    .button .dots_border {
      --size_border: calc(100% + 2px);
      overflow: hidden;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: var(--size_border);
      height: var(--size_border);
      background-color: transparent;
      border-radius: var(--border_radius);
      z-index: -10;
    }

    .button .dots_border::before {
      content: "";
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 2rem;
      background-color: white;
      mask: linear-gradient(transparent 0%, white 120%);
      animation: rotate 2s linear infinite;
    }

    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }

    .button .sparkle {
      position: relative;
      z-index: 10;
      width: 1.75rem;
    }

    .button .sparkle .path {
      fill: currentColor;
      stroke: currentColor;
      transform-origin: center;
      color: hsl(0, 0%, 100%);
    }

    .button:is(:hover, :focus) .sparkle .path {
      animation: path 1.5s linear 0.5s infinite;
    }

    .button .sparkle .path:nth-child(1) {
      --scale_path_1: 1.2;
    }

    .button .sparkle .path:nth-child(2) {
      --scale_path_2: 1.2;
    }

    .button .sparkle .path:nth-child(3) {
      --scale_path_3: 1.2;
    }

    @keyframes path {
      0%, 34%, 71%, 100% {
        transform: scale(1);
      }
      17% {
        transform: scale(var(--scale_path_1, 1));
      }
      49% {
        transform: scale(var(--scale_path_2, 1));
      }
      83% {
        transform: scale(var(--scale_path_3, 1));
      }
    }

    .button .text_button {
      position: relative;
      z-index: 10;
      background-image: linear-gradient(90deg, hsla(0 0% 100% / 1) 0%, hsla(0 0% 100% / var(--active, 0)) 120%);
      background-clip: text;
      -webkit-background-clip: text;
      font-size: 1rem;
      color: transparent;
      font-weight: 600;
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
    }

    /* Content Sections */
    .content-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 100px 40px;
    }

    .section-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .section-badge {
      display: inline-block;
      padding: 8px 20px;
      background: rgba(204, 85, 0, 0.12) !important;
      border: 1px solid rgba(204, 85, 0, 0.35) !important;
      border-radius: 100px;
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: 12px !important;
      font-weight: 700 !important;
      color: var(--accent) !important;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 20px;
    }

    .section-title {
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: clamp(36px, 5vw, 56px) !important;
      line-height: 1.1 !important;
      margin-bottom: 20px !important;
      color: var(--text) !important;
      font-weight: 800 !important;
    }

    .highlight {
      background: linear-gradient(90deg, #CC5500, #E2725B) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background-clip: text !important;
    }

    .section-description {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 18px !important;
      line-height: 1.7;
      color: var(--text-secondary) !important;
      max-width: 700px;
      margin: 0 auto;
    }

    /* Stats Section */
    .stats-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 80px 40px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
      border-top: 1px solid rgba(204, 85, 0, 0.25);
      border-bottom: 1px solid rgba(204, 85, 0, 0.25);
    }

    .stat-item {
      text-align: center;
    }

    .stat-value {
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: 56px !important;
      font-weight: 800 !important;
      background: linear-gradient(135deg, #CC5500, #E2725B) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background-clip: text !important;
      line-height: 1;
      margin-bottom: 12px;
      display: block;
    }

    .stat-label {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 14px !important;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 1px;
      display: block;
    }

    .stat-context {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 13px !important;
      color: var(--accent);
      margin-top: 8px;
    }

    /* Capability Cards */
    .capabilities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
      margin-top: 40px;
    }

    .capability-card {
      position: relative;
      background: var(--bg-card) !important;
      border: 1px solid rgba(204, 85, 0, 0.2) !important;
      border-radius: 16px;
      padding: 32px;
      transition: all 0.3s ease;
    }

    .capability-card:hover {
      transform: translateY(-4px);
      border-color: rgba(204, 85, 0, 0.5) !important;
      background: rgba(204, 85, 0, 0.06) !important;
      box-shadow: 0 12px 32px rgba(204, 85, 0, 0.15);
    }

    .capability-card .card-accent {
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      height: 4px;
      background: linear-gradient(90deg, #CC5500, #E2725B) !important;
      border-radius: 16px 16px 0 0;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .capability-card:hover .card-accent {
      opacity: 1;
    }

    .capability-card h3 {
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: 22px !important;
      font-weight: 700 !important;
      color: var(--text) !important;
      margin-bottom: 12px !important;
    }

    .capability-card p {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 15px !important;
      line-height: 1.7;
      color: var(--text-secondary) !important;
      margin-bottom: 20px;
    }

    .capability-card ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .capability-card ul li {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 14px !important;
      color: var(--text-muted);
      padding: 8px 0;
      padding-left: 24px;
      position: relative;
    }

    .capability-card ul li::before {
      content: "→";
      position: absolute;
      left: 0;
      color: var(--accent);
      font-weight: bold;
    }

    /* Process Timeline */
    .process-section {
      max-width: 1000px;
      margin: 0 auto;
      padding: 100px 40px;
    }

    .process-timeline {
      margin-top: 60px;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .process-step {
      display: flex;
      gap: 32px;
      align-items: flex-start;
    }

    .process-number {
      flex-shrink: 0;
      width: 80px;
      height: 80px;
      border-radius: 16px;
      background: rgba(204, 85, 0, 0.12) !important;
      border: 2px solid rgba(204, 85, 0, 0.3) !important;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: 32px !important;
      font-weight: 800 !important;
      color: var(--accent) !important;
      -webkit-text-fill-color: var(--accent) !important;
    }

    .process-content h3 {
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: 24px !important;
      font-weight: 700 !important;
      color: var(--text) !important;
      margin-bottom: 12px !important;
    }

    .process-content p {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 16px !important;
      line-height: 1.7;
      color: var(--text-secondary) !important;
    }

    /* Tech Stack Grid */
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 24px;
      margin-top: 40px;
    }

    .tech-item {
      background: var(--bg-card) !important;
      border: 1px solid rgba(204, 85, 0, 0.2) !important;
      border-radius: 12px;
      padding: 28px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .tech-item:hover {
      transform: translateY(-4px);
      border-color: rgba(204, 85, 0, 0.5) !important;
      background: rgba(204, 85, 0, 0.06) !important;
      box-shadow: 0 8px 24px rgba(204, 85, 0, 0.15);
    }

    .tech-icon i {
      font-size: 48px !important;
    }

    .tech-name {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 14px !important;
      font-weight: 600;
      color: var(--text-secondary);
      text-align: center;
    }

    /* CTA Section */
    .cta-section {
      max-width: 900px;
      margin: 0 auto;
      padding: 120px 40px;
      text-align: center;
    }

    .cta-title {
      font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif !important;
      font-size: clamp(36px, 5vw, 56px) !important;
      line-height: 1.2 !important;
      margin-bottom: 24px !important;
      color: var(--text) !important;
      font-weight: 800 !important;
    }

    .cta-description {
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif !important;
      font-size: 18px !important;
      line-height: 1.7;
      color: var(--text-secondary) !important;
      margin-bottom: 40px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero {
        padding: 100px 20px 60px;
      }

      .web-page h1 {
        font-size: 42px !important;
      }

      .stats-section {
        grid-template-columns: 1fr;
        gap: 32px;
        padding: 60px 20px;
      }

      .capabilities-grid {
        grid-template-columns: 1fr;
      }

      .process-step {
        flex-direction: column;
        gap: 20px;
      }

      .process-number {
        width: 60px;
        height: 60px;
        font-size: 24px !important;
      }

      .tech-grid {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 16px;
      }

      .content-section,
      .process-section {
        padding: 60px 20px;
      }
    }
  

    .web-page *{margin:0;padding:0;box-sizing:border-box}
    .web-page{color:#fff;font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;overflow-x:hidden;min-height:100vh}
    .web-page h1,.web-page h2,.web-page h3,.web-page h4,.web-page h5,.web-page h6{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif}

    :root{
      --purple:#CC5500;
      --purple-light:#E2725B;
      --purple-glow:rgba(204,85,0,0.35);
      --purple-dim:rgba(204,85,0,0.7);
      --green:#4FBF24;
    }

    /* ===== HEADER ===== */
    .pricing-header{text-align:center;padding:80px 40px 40px;position:relative}
    .pricing-header::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-60%);width:600px;height:600px;background:radial-gradient(circle,rgba(204, 85, 0,0.06) 0%,transparent 65%);pointer-events:none}
    .pricing-header h1{font-size:clamp(36px,6vw,60px);font-weight:800;color:var(--purple);margin-bottom:16px;letter-spacing:-1px;position:relative}
    .pricing-header p{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:17px;color:rgba(255,255,255,0.6);max-width:620px;margin:0 auto 0;position:relative}

    /* ===== CENTERED NESTED TAB TOGGLE ===== */
    .tab-container{display:flex;flex-direction:column;align-items:center;padding:36px 20px 48px}
    .tab-toggle{
      display:inline-flex;
      background:rgba(204, 85, 0,0.08);
      border:1px solid rgba(204, 85, 0,0.2);
      border-radius:14px;
      padding:5px;
      gap:4px;
    }
    .tab-btn{
      font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;
      font-size:15px;
      font-weight:700;
      padding:12px 32px;
      border:none;
      border-radius:10px;
      cursor:pointer;
      background:transparent;
      color:rgba(255,255,255,0.45);
      transition:all .35s ease;
      letter-spacing:.3px;
    }
    .tab-btn:hover{color:var(--oren-sub)}
    .tab-btn#tab-talking.active{
      background:var(--purple);
      color:#fff;
      box-shadow:0 4px 20px rgba(204, 85, 0,0.4),0 0 0 1px rgba(166,79,212,0.3);
    }
    .tab-btn#tab-custom.active{
      background:#fff;
      color:var(--purple);
      box-shadow:0 4px 20px rgba(255,255,255,0.15),0 0 0 1px rgba(255,255,255,0.2);
    }
    .tab-btn .tab-icon{margin-right:8px;font-size:16px}
    .tab-subtitle{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:12px;color:rgba(255,255,255,0.3);margin-top:14px}

    /* ===== TAB PANELS ===== */
    .tab-panel{display:none;animation:fadeUp .4s ease}
    .tab-panel.active{display:block}
    @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}

    /* ===== PANEL SUBHEADER ===== */
    .panel-header{text-align:center;padding:0 40px 20px}
    .panel-header h2{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:clamp(20px,3vw,28px);font-weight:800;color:#fff;margin-bottom:8px}
    .panel-header h2 span{color:var(--purple)}
    .panel-header p{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:14px;color:rgba(255,255,255,0.45);max-width:560px;margin:0 auto}

    /* Engagement pills */
    .engagement-strip{display:flex;align-items:center;justify-content:center;gap:10px;padding:12px 24px;flex-wrap:wrap}
    .engage-pill{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:12px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:.5px;padding:6px 16px;border:1px solid rgba(204, 85, 0,0.2);border-radius:99px;background:rgba(204, 85, 0,0.06)}

    /* Zero strip */
    .zero-strip{display:flex;align-items:center;justify-content:center;gap:10px;margin:16px auto 40px;padding:12px 24px;background:rgba(204, 85, 0,0.06);border:1px solid rgba(204, 85, 0,0.15);border-radius:99px;flex-wrap:wrap;max-width:640px}
    .zero-item{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:13px;font-weight:700;color:var(--oren-sub);letter-spacing:.3px;display:flex;align-items:center;gap:6px}
    .zero-icon{color:var(--purple);font-size:10px}
    .zero-divider{color:rgba(255,255,255,0.15);font-size:16px}

    /* ===== 4-COLUMN GRID ===== */
    .pricing-grid{max-width:1320px;margin:0 auto;padding:0 20px 80px;display:grid;grid-template-columns:repeat(4,1fr);gap:16px;align-items:start}

    /* ===== CARD ===== */
    .plan-card{position:relative;background:rgba(255,255,255,0.03);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid var(--oren-line-subtle);border-radius:20px;padding:28px 20px 24px;display:flex;flex-direction:column;transition:all .4s ease;overflow:visible}
    .plan-card:hover{transform:translateY(-4px);border-color:rgba(204, 85, 0,0.35);box-shadow:0 0 12px rgba(204, 85, 0,0.06),0 20px 60px rgba(0,0,0,0.4)}
    .plan-card.popular{overflow:visible}
    .popular-badge{position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#CC5500,#E2725B);color:#fff;font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:11px;font-weight:700;padding:6px 20px;border-radius:99px;letter-spacing:1px;text-transform:uppercase;white-space:nowrap;box-shadow:0 4px 16px rgba(204, 85, 0,0.4);z-index:10}

    .logo-spot{width:100%;display:flex;justify-content:center;margin-bottom:16px;min-height:36px}
    .logo-spot img{height:32px;width:auto;opacity:.85}

    .plan-name{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:22px;font-weight:800;color:var(--purple);text-align:center;margin-bottom:2px}
    .plan-subtitle{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:11px;color:rgba(255,255,255,0.4);text-align:center;margin-bottom:16px;line-height:1.3}

    /* Price block (monthly retainer) */
    .price-block{text-align:center;margin-bottom:16px}
    .price-build-label{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:10px;font-weight:700;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:1px;margin-bottom:2px}
    .price-current{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:40px;font-weight:800;color:var(--purple);line-height:1}
    .price-current .currency{font-size:22px;font-weight:700;vertical-align:super;margin-right:1px}
    .price-current.small{font-size:26px;margin-top:8px}
    .price-period{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:12px;color:rgba(255,255,255,0.35);display:inline}
    .price-setup{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:11px;color:rgba(255,255,255,0.45);margin-top:5px}
    .price-setup strong{color:var(--purple-light);font-weight:700}
    .price-care-label{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:10px;font-weight:700;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:1px;margin-top:10px;margin-bottom:2px}
    .price-divider{width:40px;height:1px;background:rgba(204, 85, 0,0.3);margin:8px auto}

    /* Custom card price */
    .price-custom{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:28px;font-weight:800;color:var(--purple);line-height:1;margin-bottom:4px}

    /* Outcome badge */
    .outcome-badge{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:10px;color:var(--purple-light);background:rgba(204, 85, 0,0.08);border:1px solid rgba(204, 85, 0,0.15);border-radius:8px;padding:7px 10px;text-align:center;margin-bottom:14px;line-height:1.4;font-style:italic}

    /* ===== NUTRITION LABEL ===== */
    .nutrition-label{background:#000;border:3px solid rgba(204, 85, 0,0.8);border-radius:4px;padding:8px 10px 12px;margin-bottom:16px;flex:1}
    .plan-card.popular .nutrition-label{border-color:var(--purple)}

    .nl-title{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.5px;line-height:1;margin-bottom:2px}
    .nl-serving{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:10px;color:rgba(255,255,255,0.65);line-height:1.4;padding-bottom:5px}
    .nl-serving strong{color:var(--purple)}

    .nl-thick{height:7px;background:var(--purple);margin:0 -10px}
    .nl-thin{height:1px;background:rgba(204, 85, 0,0.3);margin:0 -10px}

    .nl-header{display:flex;justify-content:space-between;align-items:flex-end;padding:3px 0 2px}
    .nl-header-left,.nl-header-right{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:9px;font-weight:700;color:var(--oren-muted);text-transform:uppercase;letter-spacing:.5px}

    .nl-row{display:flex;justify-content:space-between;align-items:baseline;padding:4px 0;border-bottom:1px solid rgba(204, 85, 0,0.12);gap:6px}
    .nl-row:last-child{border-bottom:none}
    .nl-row.blend{border-bottom:1px solid rgba(204, 85, 0,0.2);padding-top:6px}
    .nl-row.blend .nl-feature{font-weight:800;color:#fff;font-size:11px}
    .nl-row.indent .nl-feature{padding-left:12px;font-weight:400;color:rgba(255,255,255,0.55);font-size:10.5px}

    .nl-feature{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:11px;font-weight:600;color:rgba(255,255,255,0.75);flex:1;line-height:1.3}
    .nl-value{font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:11px;font-weight:700;color:var(--purple);white-space:nowrap;text-align:right;flex-shrink:0}
    .nl-value.green{color:#4FBF24}
    .nl-value.white{color:rgba(255,255,255,0.4)}
    .nl-value.na{color:rgba(255,255,255,0.15);font-weight:400;font-size:10px}
    .nl-value.highlight{color:var(--purple-light);font-weight:800}

    .nl-credits{display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid rgba(204, 85, 0,0.15)}
    .nl-credits .nl-feature{color:var(--purple);font-weight:800;font-size:11px}
    .nl-credits .nl-value{color:var(--purple);font-size:11px;font-weight:800}

    .nl-footnote{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:8px;color:rgba(255,255,255,0.3);padding-top:6px;line-height:1.4}

    /* ===== CTA ===== */
    .cta-btn{display:block;width:100%;padding:12px 0;border:none;border-radius:12px;font-family:var(--font-space-grotesk),"Space Grotesk",system-ui,sans-serif;font-size:14px;font-weight:700;cursor:pointer;text-decoration:none;text-align:center;transition:all .3s;margin-top:auto}
    .cta-btn.primary{background:rgba(204, 85, 0,0.15);color:var(--purple-light);border:1px solid rgba(204, 85, 0,0.35)}
    .cta-btn.primary:hover{background:rgba(204, 85, 0,0.25);border-color:rgba(204, 85, 0,0.6);box-shadow:0 0 16px rgba(204, 85, 0,0.15)}
    .cta-btn.calendly{background:rgba(204, 85, 0,0.08);color:var(--purple-light);border:1px dashed rgba(204, 85, 0,0.4)}
    .cta-btn.calendly:hover{background:rgba(204, 85, 0,0.15);border-color:rgba(204, 85, 0,0.6)}
    .btn-sub{font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",system-ui,sans-serif;font-size:10px;color:rgba(255,255,255,0.3);text-align:center;margin-top:6px;display:block}

    /* ===== RESPONSIVE ===== */
    @media(max-width:1200px){.pricing-grid{grid-template-columns:repeat(2,1fr);gap:16px;max-width:740px}}
    @media(max-width:600px){
      .pricing-grid{grid-template-columns:1fr;max-width:440px}
      .pricing-header{padding:60px 20px 30px}
      .pricing-header h1{font-size:36px}
      .plan-card{padding:24px 18px 22px}
      .tab-btn{padding:10px 18px;font-size:13px}
      .tab-btn .tab-icon{margin-right:6px;font-size:14px}
      .panel-header{padding:0 20px 16px}
    }
  


  .og-section-header {
    padding: 80px 20px;
    text-align: center;
    background: linear-gradient(180deg, transparent 0%, rgba(204, 85, 0, 0.03) 50%, transparent 100%);
  }

  .og-section-label {
    display: inline-block;
    padding: 8px 20px;
    background: rgba(204, 85, 0, 0.1);
    border: 1px solid rgba(204, 85, 0, 0.3);
    border-radius: 100px;
    font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif;
    font-size: 11px;
    font-weight: 700;
    color: #ff8c42;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 24px;
  }

  .og-section-header h2 {
    font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif;
    font-size: clamp(36px, 6vw, 56px);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 20px;
    color: var(--foreground);
    letter-spacing: -0.02em;
  }

  .og-section-header h2 .orange {
    color: var(--oren-orange);
  }

  .og-section-subtitle {
    font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif;
    font-size: clamp(16px, 2vw, 18px);
    color: var(--oren-sub);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.8;
  }


  /* ========================================
     FOOTER VARIABLES
     ======================================== */
  :root {
    --orange: var(--oren-orange);
    --orange-glow: rgba(204, 85, 0, 0.4);
    --navy: var(--oren-orange);
    --bg: var(--background);
    --bg-footer: #020202;
    --bg-card: #0a0a0a;
    --border: rgba(255, 255, 255, 0.06);
    --border-hover: rgba(255, 255, 255, 0.12);
    --text: var(--foreground);
    --text-secondary: rgba(255, 255, 255, 0.85);
    --text-muted: var(--foreground);
    --metallic-1: var(--foreground);
    --metallic-2: var(--foreground);
    --metallic-3: rgba(255, 255, 255, 0.6);
    --gold-1: #FFD700;
    --gold-2: #FFC107;
    --gold-3: #B8860B;
  }

  /* ========================================
     AFFILIATE REVIEW TRUST BAR
     ======================================== */
  .mkt-footer-trust {
    background: linear-gradient(180deg, #0a0a0a 0%, var(--bg-footer) 100%);
    border-top: 1px solid var(--border);
    padding: 60px 28px 48px;
    text-align: center;
  }

  .mkt-footer-trust-label {
    font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--oren-muted);
    margin-bottom: 28px;
  }

  .mkt-footer-trust-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 12px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .mkt-trust-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 8px;
    background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .mkt-trust-link::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(204,85,0,0.08) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .mkt-trust-link:hover {
    border-color: rgba(204, 85, 0, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(204, 85, 0, 0.1);
  }

  .mkt-trust-link:hover::before { opacity: 1; }

  .mkt-trust-link:hover .mkt-trust-name {
    background: linear-gradient(135deg, var(--foreground) 0%, var(--orange) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .mkt-trust-svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    object-fit: contain;
    filter: grayscale(0.3) brightness(0.9);
    transition: filter 0.3s ease;
  }

  .mkt-trust-link:hover .mkt-trust-svg {
    filter: grayscale(0) brightness(1.1);
  }

  .mkt-trust-name {
    font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: var(--foreground);
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
    background: none;
    -webkit-text-fill-color: var(--foreground);
  }

  .mkt-trust-link:hover .mkt-trust-name {
    -webkit-text-fill-color: transparent;
  }

  .mkt-trust-star {
    font-size: 10px;
    color: var(--orange);
    letter-spacing: 1px;
    position: relative;
    z-index: 1;
  }

  /* ========================================
     MEGA FOOTER
     ======================================== */
  .mkt-mega-footer {
    background: var(--bg-footer);
    padding: 64px 28px 0;
    border-top: 1px solid var(--border);
    position: relative;
  }

  .mkt-mega-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--orange), transparent);
  }

  .mkt-footer-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .mkt-footer-top {
    display: grid;
    grid-template-columns: 1.4fr repeat(5, 1fr);
    gap: 40px;
    padding-bottom: 48px;
    border-bottom: 1px solid var(--border);
  }

  /* Brand Column */
  .mkt-footer-brand {
    padding-right: 20px;
    text-align: center;
  }

  .mkt-footer-logo {
    height: 50px;
    width: auto;
    margin-bottom: 4px;
    filter: brightness(0.95);
  }

  /* ========================================
     FUSE IGNITION TAGLINE
     ======================================== */
  .mkt-fuse-container {
    position: relative;
    margin-bottom: 24px;
    padding: 16px 0;
    overflow: visible;
    display: flex;
    justify-content: center;
  }

  .mkt-fuse-line {
    position: absolute;
    top: 50%;
    left: -40px;
    width: calc(100% + 80px);
    height: 2px;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: 1;
  }

  .mkt-fuse-burn {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, 
      rgba(80, 40, 10, 0.6) 0%,
      rgba(120, 60, 10, 0.8) 70%,
      #FF6A00 85%,
      #FFD700 92%,
      var(--foreground) 100%
    );
    border-radius: 2px;
    animation: fuseBurn 3s ease-in forwards;
    animation-play-state: paused;
  }

  .mkt-fuse-burn::after {
    content: '';
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--foreground) 0%, #FFD700 30%, #FF6A00 60%, transparent 100%);
    box-shadow: 
      0 0 8px 3px rgba(255, 165, 0, 0.8),
      0 0 20px 6px rgba(255, 100, 0, 0.5),
      0 0 40px 10px rgba(204, 85, 0, 0.3);
    animation: emberGlow 0.15s ease-in-out infinite alternate;
  }

  @keyframes fuseBurn { 0% { width: 0%; } 100% { width: 100%; } }
  @keyframes emberGlow { 0% { transform: translateY(-50%) scale(1); opacity: 1; } 100% { transform: translateY(-50%) scale(1.3); opacity: 0.8; } }

  .mkt-spark {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #FFD700;
    pointer-events: none;
    z-index: 3;
    opacity: 0;
  }

  .mkt-tagline-box {
    position: relative;
    display: inline-block;
    padding: 12px 28px;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 8px;
    z-index: 5;
    overflow: visible;
    background: #020202;
  }

  .mkt-tagline-box::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 10px;
    padding: 2px;
    background: conic-gradient(from 0deg, transparent 0%, transparent 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .mkt-tagline-box.ignited::before {
    background: conic-gradient(
      from var(--fire-angle, 0deg),
      #FF6A00 0%, #FFD700 10%, #FF4500 20%, var(--oren-orange) 30%,
      rgba(204, 85, 0, 0.3) 50%, transparent 60%, transparent 80%,
      rgba(204, 85, 0, 0.3) 90%, #FF6A00 100%
    );
    opacity: 1;
    animation: fireBorderRotate 3s linear infinite;
  }

  @keyframes fireBorderRotate { 0% { --fire-angle: 0deg; } 100% { --fire-angle: 360deg; } }

  @supports not (background: conic-gradient(from var(--fire-angle), red, blue)) {
    .mkt-tagline-box.ignited::before {
      background: linear-gradient(90deg, #FF6A00, #FFD700, #FF4500, var(--oren-orange), #FF6A00);
      background-size: 300% 100%;
      animation: fireBorderFallback 2s linear infinite;
    }
    @keyframes fireBorderFallback { 0% { background-position: 0% 50%; } 100% { background-position: 300% 50%; } }
  }

  .mkt-tagline-box.ignited {
    box-shadow: 0 0 15px rgba(255, 106, 0, 0.3), 0 0 30px rgba(204, 85, 0, 0.15), inset 0 0 20px rgba(255, 106, 0, 0.05);
    border-color: transparent;
  }

  .mkt-flame-tip {
    position: absolute;
    width: 6px;
    height: 12px;
    pointer-events: none;
    opacity: 0;
    z-index: 4;
  }

  .mkt-tagline-box.ignited .mkt-flame-tip { opacity: 1; }

  .mkt-flame-tip::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 10px;
    background: radial-gradient(ellipse at bottom, #FFD700 0%, #FF6A00 40%, transparent 70%);
    border-radius: 50% 50% 20% 20%;
    animation: flameFlicker 0.4s ease-in-out infinite alternate;
  }

  .mkt-flame-tip:nth-child(2)::before { animation-delay: 0.1s; height: 8px; }
  .mkt-flame-tip:nth-child(3)::before { animation-delay: 0.2s; height: 12px; }
  .mkt-flame-tip:nth-child(4)::before { animation-delay: 0.05s; height: 7px; }
  .mkt-flame-tip:nth-child(5)::before { animation-delay: 0.15s; height: 9px; }
  .mkt-flame-tip:nth-child(6)::before { animation-delay: 0.25s; height: 11px; }

  @keyframes flameFlicker {
    0% { transform: translateX(-50%) scaleY(1) scaleX(1); opacity: 0.8; }
    100% { transform: translateX(-50%) scaleY(1.4) scaleX(0.8); opacity: 1; }
  }

  .mkt-footer-tagline {
    font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: uppercase;
    white-space: nowrap;
    position: relative;
    z-index: 2;
  }

  .mkt-footer-tagline .tl-char { display: inline-block; opacity: 0.4; transition: opacity 0.6s ease, text-shadow 0.6s ease, color 0.6s ease; }
  .mkt-footer-tagline .tl-char.lit { opacity: 1; }
  .mkt-footer-tagline .tl-char.seg-online { color: var(--oren-orange); }
  .mkt-footer-tagline .tl-char.seg-online.lit { color: var(--oren-orange); text-shadow: 0 0 10px rgba(204, 85, 0, 0.6), 0 0 30px rgba(204, 85, 0, 0.3); }
  .mkt-footer-tagline .tl-char.seg-pipe { color: var(--gold-1); }
  .mkt-footer-tagline .tl-char.seg-pipe.lit { color: var(--gold-1); text-shadow: 0 0 8px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 193, 7, 0.5); }
  .mkt-footer-tagline .tl-char.seg-brand { color: var(--foreground); }
  .mkt-footer-tagline .tl-char.seg-brand.lit { color: var(--foreground); text-shadow: 0 0 10px var(--oren-muted); }

  /* ========================================
     SOCIAL ICONS
     ======================================== */
  .mkt-footer-socials { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }

  .mkt-footer-social-link {
    display: flex; align-items: center; justify-content: center;
    width: 36px; height: 36px; border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.04);
    color: var(--foreground); text-decoration: none; transition: all 0.3s ease;
  }

  .mkt-footer-social-link svg { width: 16px; height: 16px; fill: var(--foreground); }

  .mkt-footer-social-link:hover {
    border-color: var(--orange); color: var(--orange);
    background: rgba(204, 85, 0, 0.08); transform: translateY(-2px);
  }
  .mkt-footer-social-link:hover svg { fill: var(--orange); }

  /* ========================================
     FOOTER COLUMNS
     ======================================== */
  .mkt-footer-col-title {
    font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif; font-size: 12px; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase; color: var(--foreground);
    margin-bottom: 20px; position: relative; padding-bottom: 10px;
  }
  .mkt-footer-col-title::after {
    content: ''; position: absolute; bottom: 0; left: 0;
    width: 20px; height: 2px; background: var(--orange); border-radius: 2px;
  }

  .mkt-footer-links { list-style: none; padding: 0; margin: 0; }
  .mkt-footer-links li { margin-bottom: 10px; }
  .mkt-footer-links a {
    font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif; font-size: 13px;
    color: rgba(255, 255, 255, 0.75); text-decoration: none;
    transition: all 0.25s ease; display: inline-flex; align-items: center; gap: 6px;
  }
  .mkt-footer-links a:hover { color: var(--orange); transform: translateX(3px); }
  .mkt-footer-links .ext-link::after { content: '↗'; font-size: 10px; color: rgba(255,255,255,0.4); transition: all 0.25s ease; }
  .mkt-footer-links .ext-link:hover::after { color: var(--orange); }

  /* ========================================
     RESOURCES SECTION
     ======================================== */
  .mkt-footer-resources { padding: 40px 0; border-bottom: 1px solid var(--border); }
  .mkt-footer-resources-title {
    font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif; font-size: 12px; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase; color: var(--foreground);
    margin-bottom: 20px; display: flex; align-items: center; gap: 10px;
  }
  .mkt-footer-resources-title .aff-badge {
    font-size: 8px; letter-spacing: 1.5px; color: var(--orange);
    background: rgba(204, 85, 0, 0.08); padding: 3px 8px; border-radius: 4px;
  }
  .mkt-footer-resources-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 8px 24px; }
  .mkt-footer-resources-grid a {
    font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif; font-size: 12px; color: rgba(255, 255, 255, 0.75);
    text-decoration: none; padding: 6px 0; display: inline-flex; align-items: center; gap: 6px; transition: all 0.25s ease;
  }
  .mkt-footer-resources-grid a:hover { color: var(--orange); }
  .mkt-footer-resources-grid a .r-dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(255,255,255,0.4); flex-shrink: 0; transition: background 0.25s ease; }
  .mkt-footer-resources-grid a:hover .r-dot { background: var(--orange); }

  /* ========================================
     BOTTOM BAR
     ======================================== */
  .mkt-footer-bottom {
    padding: 28px 0; display: flex; align-items: center;
    justify-content: space-between; flex-wrap: wrap; gap: 16px;
  }
  .mkt-footer-copy { font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif; font-size: 12px; color: rgba(255, 255, 255, 0.6); }
  .mkt-footer-copy a { color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: color 0.25s ease; }
  .mkt-footer-copy a:hover { color: var(--orange); }
  .mkt-footer-bottom-links { display: flex; gap: 20px; flex-wrap: wrap; }
  .mkt-footer-bottom-links a { font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif; font-size: 11px; color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: color 0.25s ease; }
  .mkt-footer-bottom-links a:hover { color: var(--orange); }
  .mkt-footer-payment { display: flex; align-items: center; }
  .mkt-footer-payment-img { height: 28px; width: auto; filter: brightness(0.85); transition: filter 0.3s ease; object-fit: contain; }
  .mkt-footer-payment:hover .mkt-footer-payment-img { filter: brightness(1); }

  /* ========================================
     MOBILE ACCORDION
     ======================================== */
  .mkt-footer-accordion-toggle {
    display: none; width: 100%; background: none; border: none;
    padding: 16px 0; cursor: pointer; text-align: left;
  }
  .mkt-footer-accordion-toggle .mkt-footer-col-title { margin-bottom: 0; padding-bottom: 0; display: flex; align-items: center; justify-content: space-between; }
  .mkt-footer-accordion-toggle .mkt-footer-col-title::after { display: none; }
  .mkt-footer-accordion-toggle .acc-arrow { font-size: 12px; color: var(--foreground); transition: transform 0.3s ease; }
  .mkt-footer-accordion-toggle.active .acc-arrow { transform: rotate(180deg); }
  .mkt-footer-col-content { overflow: hidden; transition: max-height 0.35s ease; }

  /* ========================================
     COOKIE CONSENT BANNER
     ======================================== */
  .og-cookie-banner {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    z-index: 99999;
    background: rgba(5, 5, 5, 0.97);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255,255,255,0.08);
    padding: 20px 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    transform: translateY(100%);
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
    font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif;
  }

  .og-cookie-banner.visible {
    transform: translateY(0);
  }

  .og-cookie-text {
    font-size: 13px;
    color: rgba(255,255,255,0.75);
    max-width: 600px;
    line-height: 1.5;
  }

  .og-cookie-text a {
    color: var(--orange);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .og-cookie-actions {
    display: flex;
    gap: 10px;
    flex-shrink: 0;
  }

  .og-cookie-btn {
    padding: 10px 22px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 700;
    font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.25s ease;
    border: none;
  }

  .og-cookie-btn-accept {
    background: var(--orange);
    color: #fff;
  }
  .og-cookie-btn-accept:hover {
    background: #e06000;
    box-shadow: 0 4px 20px rgba(204, 85, 0, 0.3);
  }

  .og-cookie-btn-decline {
    background: transparent;
    color: rgba(255,255,255,0.6);
    border: 1px solid rgba(255,255,255,0.12);
  }
  .og-cookie-btn-decline:hover {
    border-color: rgba(255,255,255,0.25);
    color: #fff;
  }

  @media (max-width: 640px) {
    .og-cookie-banner {
      flex-direction: column;
      text-align: center;
      padding: 18px 20px;
      gap: 14px;
    }
    .og-cookie-text { font-size: 12px; }
  }

  /* ========================================
     RESPONSIVE
     ======================================== */
  @media (max-width: 1024px) {
    .mkt-footer-top { grid-template-columns: 1fr 1fr 1fr; gap: 32px; }
    .mkt-footer-brand { grid-column: 1 / -1; padding-right: 0; }
  }

  @media (max-width: 768px) {
    .mkt-footer-trust { padding: 40px 16px 36px; }
    .mkt-trust-link { padding: 8px 14px; }
    .mkt-trust-name { font-size: 11px; }
    .mkt-mega-footer { padding: 40px 16px 0; }
    .mkt-footer-top { display: flex !important; flex-direction: column !important; gap: 0 !important; padding-bottom: 0; }
    .mkt-footer-brand { padding-bottom: 32px; border-bottom: 1px solid var(--border); }
    .mkt-footer-accordion-toggle { display: block !important; }
    .mkt-footer-col { border-bottom: 1px solid var(--border); }
    .mkt-footer-col > .mkt-footer-col-title { display: none !important; }
    .mkt-footer-col-content { max-height: 0; padding-bottom: 0; }
    .mkt-footer-col-content.open { max-height: 600px; padding-bottom: 16px; }
    .mkt-footer-resources { padding: 32px 0; }
    .mkt-footer-resources-grid { grid-template-columns: 1fr 1fr; }
    .mkt-footer-bottom { flex-direction: column; align-items: center; text-align: center; gap: 12px; }
    .mkt-footer-payment { justify-content: center; order: -2; }
    .mkt-footer-bottom-links { justify-content: center; order: -1; }
    .mkt-footer-copy { order: 1; }
    .mkt-fuse-line { left: -20px; width: calc(100% + 20px); }
    .mkt-footer-tagline { font-size: 9px; letter-spacing: 3px; }
    .mkt-tagline-box { padding: 10px 16px; }
  }

  @media (max-width: 480px) {
    .mkt-trust-link { padding: 7px 12px; }
    .mkt-trust-name { font-size: 10px; }
    .mkt-trust-svg { width: 16px; height: 16px; }
    .mkt-footer-resources-grid { grid-template-columns: 1fr; }
    .mkt-footer-tagline { font-size: 8px; letter-spacing: 2px; }
  }

  @property --fire-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }


    /* === Dot Grid Overlay for Hero === */
    .hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
      background-size: 30px 30px;
      pointer-events: none;
    }

    /* === Browser Mockup Showcase === */
    .browser-mockup {
      max-width: 700px;
      margin: 50px auto 0;
      border-radius: 20px;
      overflow: hidden;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      box-shadow: 0 30px 80px rgba(0,0,0,0.4);
      position: relative;
      z-index: 1;
    }
    .browser-bar {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      background: rgba(11, 29, 58, 0.8);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      gap: 12px;
    }
    .browser-dots { display: flex; gap: 6px; }
    .browser-dots span { width: 10px; height: 10px; border-radius: 50%; }
    .browser-dots span:nth-child(1) { background: #ff5f57; }
    .browser-dots span:nth-child(2) { background: #febc2e; }
    .browser-dots span:nth-child(3) { background: #28c840; }
    .browser-url {
      flex: 1;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(204, 85, 0, 0.3);
      border-radius: 8px;
      padding: 6px 14px;
      font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", system-ui, sans-serif;
      font-size: 12px;
      color: rgba(255,255,255,0.5);
    }
    .browser-viewport {
      position: relative;
      width: 100%;
      aspect-ratio: 16/10;
      overflow: hidden;
      background: #0B1D3A;
    }
    .browser-viewport img {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      object-fit: cover;
      opacity: 0;
      animation: browserCrossfade 12s infinite;
    }
    .browser-viewport img:nth-child(1) { animation-delay: 0s; }
    .browser-viewport img:nth-child(2) { animation-delay: 4s; }
    .browser-viewport img:nth-child(3) { animation-delay: 8s; }
    @keyframes browserCrossfade {
      0%, 5% { opacity: 0; }
      8.33%, 30% { opacity: 1; }
      33.33%, 100% { opacity: 0; }
    }

    /* === Glassmorphic Card Overrides === */
    .capability-card {
      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;
      border-radius: 20px !important;
    }
    .tech-item {
      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;
      border-radius: 16px !important;
    }

    @media (max-width: 768px) {
      .browser-mockup { margin-top: 30px; }
    }

</style>
<!-- HERO SECTION -->
  <section class="hero">
    <div class="hero-content">
      <div class="hero-badge">Custom Web Solutions</div>
      <h1>
        Website Experiences<br />
        That <span>Convert</span>
      </h1>
      <p class="hero-text">
        High-performance websites and applications engineered as revenue assets.
        We build digital experiences that users love and businesses profit from.
      </p>
      <div class="actions">
        <a href="#contact" data-lead-source="orenweb" class="button" aria-label="Talk to a strategist about OrenWeb">
          <div class="dots_border"></div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle">
            <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black"
              d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z">
            </path>
            <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black"
              d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z">
            </path>
            <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black"
              d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z">
            </path>
          </svg>
          <span class="text_button">Talk to a Strategist</span>
        </a>
      </div>

      <div class="browser-mockup">
        <div class="browser-bar">
          <div class="browser-dots"><span></span><span></span><span></span></div>
          <div class="browser-url">orenweb.io/showcase</div>
        </div>
        <div class="browser-viewport">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Dashboard Analytics" />
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Modern SaaS" />
          <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80" alt="Clean Design" />
        </div>
      </div>
    </div>
  </section>

  <!-- STATS SECTION -->
  <section class="stats-section">
    <div class="stat-item">
      <span class="stat-value">400%</span>
      <span class="stat-label">Higher Conversions</span>
      <span class="stat-context">With superior UX design</span>
    </div>

    <div class="stat-item">
      <span class="stat-value">2%</span>
      <span class="stat-label">Per Second Faster</span>
      <span class="stat-context">Walmart: Every 1s = 2% more conversions</span>
    </div>

    <div class="stat-item">
      <span class="stat-value">75%</span>
      <span class="stat-label">Judge By Design</span>
      <span class="stat-context">Website credibility based on aesthetics</span>
    </div>

    <div class="stat-item">
      <span class="stat-value">&lt;2s</span>
      <span class="stat-label">Load Time Target</span>
      <span class="stat-context">Industry standard for peak performance</span>
    </div>
  </section>

  <!-- CAPABILITIES SECTION -->
  <section class="content-section">
    <div class="section-header">
      <div class="section-badge">CAPABILITIES</div>
      <h2 class="section-title">
        What We <span class="highlight">Build</span>
      </h2>
      <p class="section-description">
        From concept to launch, we deliver digital solutions that drive measurable business results.
      </p>
    </div>

    <div class="capabilities-grid">
      <!-- Custom Websites -->
      <div class="capability-card">
        <span class="card-accent"></span>
        <div class="content">
          <h3>Custom Websites</h3>
          <p>
            Bespoke designs tailored to your brand identity. Fast, responsive,
            and optimized for conversions on every device.
          </p>
          <ul>
            <li>Brand-First Design</li>
            <li>Mobile-First Approach</li>
            <li>SEO Optimization</li>
            <li>Performance Tuning</li>
          </ul>
        </div>
      </div>

      <!-- Talking Websites -->
      <div class="capability-card">
        <span class="card-accent"></span>
        <div class="content">
          <h3>Talking Websites with AI Voice</h3>
          <p>
            Revolutionary AI-powered websites that literally talk to your visitors. Engage users with interactive voice conversations that convert.
          </p>
          <ul>
            <li>AI Voice Agents Embedded</li>
            <li>24/7 Customer Engagement</li>
            <li>Real-Time Conversations</li>
            <li>Multilingual Support</li>
          </ul>
        </div>
      </div>

      <!-- Web Applications -->
      <div class="capability-card">
        <span class="card-accent"></span>
        <div class="content">
          <h3>Web Applications</h3>
          <p>
            Powerful, scalable web apps built with cutting-edge technology.
            Complex functionality made simple and intuitive.
          </p>
          <ul>
            <li>Custom Development</li>
            <li>API Integration</li>
            <li>Real-time Features</li>
            <li>Cloud Infrastructure</li>
          </ul>
        </div>
      </div>

      <!-- E-Commerce -->
      <div class="capability-card">
        <span class="card-accent"></span>
        <div class="content">
          <h3>E-Commerce Solutions</h3>
          <p>
            Complete online stores that maximize conversions. Secure payments,
            inventory management, and seamless checkout experiences.
          </p>
          <ul>
            <li>Payment Gateways</li>
            <li>Product Management</li>
            <li>Order Processing</li>
            <li>Analytics Dashboard</li>
          </ul>
        </div>
      </div>

      <!-- UI/UX Design -->
      <div class="capability-card">
        <span class="card-accent"></span>
        <div class="content">
          <h3>UI/UX Design</h3>
          <p>
            Beautiful interfaces backed by user research. We create intuitive
            experiences that users love and businesses profit from.
          </p>
          <ul>
            <li>User Research</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>Usability Testing</li>
          </ul>
        </div>
      </div>

      <!-- Maintenance & Support -->
      <div class="capability-card">
        <span class="card-accent"></span>
        <div class="content">
          <h3>Maintenance & Support</h3>
          <p>
            Keep your website running smoothly with ongoing updates, security
            patches, and performance optimization.
          </p>
          <ul>
            <li>24/7 Monitoring</li>
            <li>Regular Backups</li>
            <li>Security Updates</li>
            <li>Priority Support</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- PROCESS SECTION -->
  <section class="process-section">
    <div class="section-header">
      <div class="section-badge">OUR PROCESS</div>
      <h2 class="section-title">
        How We <span class="highlight">Build Excellence</span>
      </h2>
      <p class="section-description">
        A proven methodology that transforms your vision into a digital reality through
        strategic planning and expert execution.
      </p>
    </div>

    <div class="process-timeline">
      <div class="process-step">
        <div class="process-number">01</div>
        <div class="process-content">
          <h3>Discovery & Strategy</h3>
          <p>
            We dive deep into your business goals, target audience, and competitive
            landscape to create a strategic roadmap that ensures your project's success
            from day one.
          </p>
        </div>
      </div>

      <div class="process-step">
        <div class="process-number">02</div>
        <div class="process-content">
          <h3>Design & Prototyping</h3>
          <p>
            Our designers craft stunning interfaces with user experience at the forefront.
            You'll see interactive prototypes before we write a single line of code.
          </p>
        </div>
      </div>

      <div class="process-step">
        <div class="process-number">03</div>
        <div class="process-content">
          <h3>Development & Testing</h3>
          <p>
            Expert developers bring designs to life with clean, scalable code. Rigorous
            testing ensures everything works flawlessly across all devices and browsers.
          </p>
        </div>
      </div>

      <div class="process-step">
        <div class="process-number">04</div>
        <div class="process-content">
          <h3>Launch & Optimization</h3>
          <p>
            We handle deployment, monitoring, and post-launch optimization to ensure peak
            performance. Your success is measured in results, not just deliverables.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- TECH STACK SECTION -->
  <section class="content-section">
    <div class="section-header">
      <div class="section-badge">TECHNOLOGY STACK</div>
      <h2 class="section-title">
        Built With <span class="highlight">Cutting-Edge Tech</span>
      </h2>
      <p class="section-description">
        We leverage the best tools and frameworks to deliver fast, secure, and scalable solutions.
      </p>
    </div>

    <div class="tech-grid">
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-graphql-plain colored"></i></div>
        <div class="tech-name">GraphQL</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-redis-plain colored"></i></div>
        <div class="tech-name">Redis</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-react-original colored"></i></div>
        <div class="tech-name">React</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-nextjs-plain colored"></i></div>
        <div class="tech-name">Next.js</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-nodejs-plain colored"></i></div>
        <div class="tech-name">Node.js</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-typescript-plain colored"></i></div>
        <div class="tech-name">TypeScript</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-javascript-plain colored"></i></div>
        <div class="tech-name">JavaScript</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-html5-plain colored"></i></div>
        <div class="tech-name">HTML5</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-css3-plain colored"></i></div>
        <div class="tech-name">CSS3</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-tailwindcss-plain colored"></i></div>
        <div class="tech-name">Tailwind CSS</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-mysql-plain colored"></i></div>
        <div class="tech-name">MySQL</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-postgresql-plain colored"></i></div>
        <div class="tech-name">PostgreSQL</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-mongodb-plain colored"></i></div>
        <div class="tech-name">MongoDB</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-firebase-plain colored"></i></div>
        <div class="tech-name">Firebase</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-amazonwebservices-plain-wordmark colored"></i></div>
        <div class="tech-name">AWS</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-python-plain colored"></i></div>
        <div class="tech-name">Python</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-docker-plain colored"></i></div>
        <div class="tech-name">Docker</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-vercel-plain colored"></i></div>
        <div class="tech-name">Vercel</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-git-plain colored"></i></div>
        <div class="tech-name">Git</div>
      </div>
      <div class="tech-item">
        <div class="tech-icon"><i class="devicon-github-original colored"></i></div>
        <div class="tech-name">GitHub</div>
      </div>
    </div>
  </section>

  <!-- CTA SECTION -->
  <section class="cta-section" id="contact">
    <h2 class="cta-title">
      Ready to Build <span class="highlight">Something Amazing?</span>
    </h2>
    <p class="cta-description">
      Let's transform your vision into a digital experience that drives real results.
      Schedule a free consultation to discuss your project.
    </p>
    <div class="actions">
      <a href="https://calendly.com/orengenio/30min" class="button" target="_blank" rel="noopener">
        <div class="dots_border"></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle">
          <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black"
            d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z">
          </path>
          <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black"
            d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z">
          </path>
          <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black"
            d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z">
          </path>
        </svg>
        <span class="text_button">Book A Meeting</span>
      </a>
    </div>
  </section>
` }} />
    </>
  );
}
