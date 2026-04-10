import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "OrenSocial — Social Media Management at Scale | OrenGen Worldwide",
  description: "OrenSocial manages your social media with AI-powered content, scheduling, and community management. Fully managed from $47/mo.",
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
--open-sans: 'Open Sans';
--roboto: 'Roboto';
--montserrat: 'Montserrat';
--poppins: 'Poppins';
--headlinefont: 'Inter';
--contentfont: 'Inter';
--text-color: #000000;
--link-color: #188bf6; } .bg-fixed{bottom:0;top:0;left:0;right:0;position:fixed;overflow:auto;background-color:var(--white)} 
            
            .drop-zone-draggable .hl_main_popup{box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}
            
          
#hl_main_popup.popup-body{position:absolute!important;left:50%!important;bottom:auto!important;transform:translate(-50%,0)!important;right:auto!important;box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}.--mobile #hl_main_popup.popup-body{width:380px!important}@media screen and (min-width:0px) and (max-width:480px){#hl_main_popup.popup-body{width:380px!important}} 
            
            .drop-zone-draggable .hl_main_popup-qKyhd0BwvF{box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}
            
          

            
            .drop-zone-draggable .hl_main_popup-TiXCPGYNFr{box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}
            
          
#hl_main_popup-qKyhd0BwvF.popup-body{position:absolute!important;left:50%!important;bottom:auto!important;transform:translate(-50%,0)!important;right:auto!important;box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}.--mobile #hl_main_popup-qKyhd0BwvF.popup-body{width:380px!important}@media screen and (min-width:0px) and (max-width:480px){#hl_main_popup-qKyhd0BwvF.popup-body{width:380px!important}} #hl_main_popup-TiXCPGYNFr.popup-body{position:absolute!important;left:50%!important;bottom:auto!important;transform:translate(-50%,0)!important;right:auto!important;box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}.--mobile #hl_main_popup-TiXCPGYNFr.popup-body{width:380px!important}@media screen and (min-width:0px) and (max-width:480px){#hl_main_popup-TiXCPGYNFr.popup-body{width:380px!important}} 
 /* ---- Floating Nav Header  styles ----- */  
 :root{--transparent:transparent;--black:#000000}.hl_page-preview--content .section-jQGNG4xoRE{box-shadow:none;padding:20px 0;margin:0;background-color:var(--black);border-color:var(--black);border-width:2px;border-style:solid;backdrop-filter:none}.hl_page-preview--content .col-G6pdgjwQuB,.hl_page-preview--content .row-DNwNU2q1n1{margin:0 auto;box-shadow:none;padding:15px 0;background-color:var(--transparent);border-color:var(--black);border-width:2px;border-style:solid;width:100%}.hl_page-preview--content .col-G6pdgjwQuB{padding:10px 5px;margin:0}.hl_page-preview--content .custom-code-QCRxJvpFNx{margin:0;width:auto;height:auto}#section-jQGNG4xoRE>.inner{max-width:1170px}#col-G6pdgjwQuB>.inner{flex-direction:column;justify-content:center;align-items:inherit;flex-wrap:nowrap} 
 /* ---- Section styles ----- */ 
:root{--transparent:transparent;--black:#000000}.hl_page-preview--content .col-0o4nkSYzWr,.hl_page-preview--content .row-CCCHKXOVWz,.hl_page-preview--content .section-6tSX2wjYRl{box-shadow:none;padding:20px 0;margin:0;background-color:var(--black);backdrop-filter:none;border-color:var(--black);border-width:2px;border-style:solid}.hl_page-preview--content .col-0o4nkSYzWr,.hl_page-preview--content .row-CCCHKXOVWz{margin:0 auto;padding:10px 5px;width:100%}.hl_page-preview--content .col-0o4nkSYzWr{background-color:var(--transparent);margin:0}.hl_page-preview--content .custom-code-FYpzBrVdtK{margin:0;width:auto;height:auto}#section-6tSX2wjYRl>.inner{max-width:1170px}#col-0o4nkSYzWr>.inner{flex-direction:column;justify-content:center;align-items:inherit;flex-wrap:nowrap}
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
  

        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Roboto:wght@300;400;500;600;700&display=swap');
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            /* Navy/Orange Brand Theme - OrenSocial */
            --primary: #CC5500;
            --primary-light: #E2725B;
            --primary-dark: #993D00;
            --accent: #CC5500;
            --accent-glow: rgba(204, 85, 0, 0.3);
            
            /* Base Colors */
            --bg-dark: #081628;
            --bg-card: rgba(255, 255, 255, 0.03);
            --bg-card-hover: rgba(255, 255, 255, 0.06);
            --border: rgba(255, 255, 255, 0.08);
            --text: var(--foreground);
            --text-secondary: rgba(255, 255, 255, 0.7);
            --text-muted: rgba(255, 255, 255, 0.5);
        }

        body {
            font-family: 'Roboto', 'Playfair Display', sans-serif;
            background: var(--bg-dark);
            color: var(--text);
            line-height: 1.6;
            overflow-x: hidden;
            padding: 0;
            margin: 0;
        }

        /* GHL Override - Kill their spacing */
        .ghl-override {
            margin: -40px -20px;
            padding: 0;
        }

        /* Section Styling */
        section {
            max-width: 1400px;
            margin: 0 auto 120px;
            padding: 0 40px;
        }

        section:first-of-type {
            padding-top: 60px;
        }

        .section-header {
            text-align: center;
            margin-bottom: 80px;
        }

        .section-label {
            display: inline-block;
            padding: 8px 24px;
            background: rgba(204, 85, 0, 0.1);
            border: 1px solid var(--primary);
            border-radius: 50px;
            color: var(--primary);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 24px;
        }

        h2 {
            font-family: 'Playfair Display', sans-serif;
            font-size: clamp(36px, 5vw, 56px);
            line-height: 1.2;
            margin-bottom: 20px;
            font-weight: 700;
        }

        h2 span {
            background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .section-header p {
            font-size: 20px;
            color: var(--text-secondary);
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.6;
        }

        /* Platform Overview */
        .platform-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            margin-bottom: 120px;
        }

        .platform-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 32px 24px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .platform-card:hover {
            background: var(--bg-card-hover);
            border-color: var(--primary);
            transform: translateY(-4px);
        }

        .platform-card img {
            width: 64px;
            height: 64px;
            margin-bottom: 20px;
            border-radius: 12px;
        }

        .platform-card h3 {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 8px;
            color: var(--primary);
        }

        .platform-card p {
            font-size: 14px;
            color: var(--text-muted);
            line-height: 1.5;
        }

        /* Features Grid */
        .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
        }

        .feature-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 40px 32px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--primary), var(--accent));
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .feature-card:hover::before {
            transform: scaleX(1);
        }

        .feature-card:hover {
            background: var(--bg-card-hover);
            border-color: var(--primary);
            transform: translateY(-4px);
        }

        .feature-icon {
            width: 48px;
            height: 48px;
            background: rgba(204, 85, 0, 0.1);
            border: 1px solid var(--primary);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
            color: var(--primary);
            font-size: 24px;
        }

        .feature-card h3 {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 12px;
            font-family: 'Playfair Display', sans-serif;
        }

        .feature-card p {
            font-size: 15px;
            color: var(--text-secondary);
            line-height: 1.6;
        }

        /* Capabilities List */
        .capabilities-section {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 24px;
            padding: 60px;
            margin-bottom: 120px;
        }

        .capabilities-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            margin-top: 40px;
        }

        .capability-item {
            display: flex;
            gap: 16px;
            padding: 24px;
            background: rgba(204, 85, 0, 0.05);
            border-radius: 12px;
            border: 1px solid rgba(204, 85, 0, 0.2);
            transition: all 0.3s ease;
        }

        .capability-item:hover {
            background: rgba(204, 85, 0, 0.1);
            border-color: var(--primary);
            transform: translateX(8px);
        }

        .capability-icon {
            width: 40px;
            height: 40px;
            background: var(--primary);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            color: #000;
            font-weight: 700;
        }

        .capability-content h4 {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 4px;
        }

        .capability-content p {
            font-size: 14px;
            color: var(--text-muted);
        }

        /* Workflow Visualization */
        .workflow-section {
            background: linear-gradient(135deg, rgba(204, 85, 0, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
            border: 1px solid var(--border);
            border-radius: 24px;
            padding: 60px;
            margin-bottom: 120px;
        }

        .workflow-steps {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            margin-top: 40px;
            position: relative;
        }

        .workflow-steps::before {
            content: '';
            position: absolute;
            top: 40px;
            left: 12.5%;
            right: 12.5%;
            height: 2px;
            background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
            z-index: 0;
        }

        .workflow-step {
            text-align: center;
            position: relative;
            z-index: 1;
        }

        .workflow-number {
            width: 80px;
            height: 80px;
            background: var(--bg-dark);
            border: 3px solid var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            font-weight: 700;
            color: var(--primary);
            margin: 0 auto 20px;
        }

        .workflow-step h4 {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .workflow-step p {
            font-size: 14px;
            color: var(--text-muted);
        }

        /* Stats Grid */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
        }

        .stat-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 32px 24px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .stat-card:hover {
            background: var(--bg-card-hover);
            border-color: var(--primary);
            transform: translateY(-4px);
        }

        .stat-value {
            font-size: 48px;
            font-weight: 700;
            background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 8px;
            font-family: 'Playfair Display', sans-serif;
        }

        .stat-label {
            font-size: 14px;
            color: var(--text-secondary);
            font-weight: 500;
        }

        /* Integration Section */
        .integration-logos {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 24px;
            margin-top: 40px;
        }

        .integration-logo {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            height: 100px;
        }

        .integration-logo:hover {
            background: var(--bg-card-hover);
            border-color: var(--primary);
            transform: scale(1.05);
        }

        .integration-logo img {
            max-width: 100%;
            max-height: 60px;
            opacity: 0.7;
            transition: opacity 0.3s ease;
        }

        .integration-logo:hover img {
            opacity: 1;
        }

        /* CTA Section */
        .cta-section {
            text-align: center;
            background: linear-gradient(135deg, rgba(204, 85, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
            border: 1px solid var(--primary);
            border-radius: 24px;
            padding: 80px 40px;
            margin-bottom: 60px;
        }

        .cta-section h2 {
            margin-bottom: 24px;
        }

        .cta-section p {
            font-size: 20px;
            color: var(--text-secondary);
            margin-bottom: 40px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        .cta-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            align-items: center;
        }

        /* Sparkle Button from Homepage */
        .button {
            --black-700: hsla(0 0% 12% / 1);
            --border_radius: 9999px;
            --transtion: 0.3s ease-in-out;
            --offset: 2px;

            cursor: pointer;
            position: relative;
            display: inline-flex;
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
                0 0 0 calc(var(--active, 0) * 0.375rem) hsl(24 100% 40% / 0.75);
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
            background-color: hsla(24 100% 44% / 0.75);
            background-image: radial-gradient(
                at 51% 89%,
                hsla(24, 100%, 44%, 1) 0px,
                transparent 50%
            ),
            radial-gradient(at 100% 100%, hsla(24, 100%, 40%, 1) 0px, transparent 50%),
            radial-gradient(at 22% 91%, hsla(24, 100%, 40%, 1) 0px, transparent 50%);
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
            transform-origin: left;
            transform: rotate(0deg);
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
            background-image: linear-gradient(
                90deg,
                hsla(0 0% 100% / 1) 0%,
                hsla(0 0% 100% / var(--active, 0)) 120%
            );
            background-clip: text;
            -webkit-background-clip: text;
            font-size: 1rem;
            color: transparent;
            font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 1200px) {
            .features-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .workflow-steps {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .workflow-steps::before {
                display: none;
            }
            
            .integration-logos {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        @media (max-width: 768px) {
            section {
                padding: 0 24px;
                margin-bottom: 80px;
            }
            
            .section-header {
                margin-bottom: 48px;
            }
            
            .platform-grid,
            .features-grid,
            .capabilities-grid,
            .workflow-steps,
            .stats-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .integration-logos {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .workflow-section,
            .capabilities-section,
            .cta-section {
                padding: 40px 24px;
            }
            
            .cta-buttons {
                flex-direction: column;
            }
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
    font-family: 'Playfair Display', sans-serif;
    font-size: 11px;
    font-weight: 700;
    color: #ff8c42;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 24px;
  }

  .og-section-header h2 {
    font-family: 'Playfair Display', sans-serif;
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
    font-family: 'Roboto', sans-serif;
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
    font-family: 'Playfair Display', sans-serif;
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
    font-family: 'Playfair Display', sans-serif;
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
    font-family: 'Playfair Display', sans-serif;
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
    font-family: 'Playfair Display', sans-serif; font-size: 12px; font-weight: 700;
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
    font-family: 'Roboto', sans-serif; font-size: 13px;
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
    font-family: 'Playfair Display', sans-serif; font-size: 12px; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase; color: var(--foreground);
    margin-bottom: 20px; display: flex; align-items: center; gap: 10px;
  }
  .mkt-footer-resources-title .aff-badge {
    font-size: 8px; letter-spacing: 1.5px; color: var(--orange);
    background: rgba(204, 85, 0, 0.08); padding: 3px 8px; border-radius: 4px;
  }
  .mkt-footer-resources-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 8px 24px; }
  .mkt-footer-resources-grid a {
    font-family: 'Roboto', sans-serif; font-size: 12px; color: rgba(255, 255, 255, 0.75);
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
  .mkt-footer-copy { font-family: 'Roboto', sans-serif; font-size: 12px; color: rgba(255, 255, 255, 0.6); }
  .mkt-footer-copy a { color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: color 0.25s ease; }
  .mkt-footer-copy a:hover { color: var(--orange); }
  .mkt-footer-bottom-links { display: flex; gap: 20px; flex-wrap: wrap; }
  .mkt-footer-bottom-links a { font-family: 'Roboto', sans-serif; font-size: 11px; color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: color 0.25s ease; }
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
    font-family: 'Roboto', 'Inter', system-ui, sans-serif;
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
    font-family: 'Playfair Display', sans-serif;
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


    /* === Body Navy Gradient Override === */
    body {
      background: linear-gradient(165deg, #081628 0%, #0B1D3A 30%, #0F2847 60%, #0D2240 100%) !important;
      background-attachment: fixed !important;
    }

    /* === Social Hero Section === */
    .social-hero {
      position: relative;
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 120px 40px 80px;
      background: linear-gradient(180deg, rgba(204, 85, 0, 0.08) 0%, rgba(11, 29, 58, 0.5) 50%, transparent 100%);
      max-width: 100%;
      margin: 0;
    }
    .social-hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
      background-size: 30px 30px;
      pointer-events: none;
    }
    .social-hero .hero-content {
      max-width: 900px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    .social-hero .hero-badge {
      display: inline-flex;
      align-items: center;
      padding: 10px 24px;
      background: rgba(204, 85, 0, 0.12);
      border: 2px solid rgba(204, 85, 0, 0.35);
      border-radius: 100px;
      color: #CC5500;
      font-family: 'Playfair Display', serif;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 32px;
    }
    .social-hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(48px, 8vw, 80px);
      line-height: 1.1;
      margin-bottom: 24px;
      letter-spacing: -1px;
      font-weight: 800;
      color: #F0F4FA;
    }
    .social-hero h1 span {
      background: linear-gradient(90deg, #CC5500, #E2725B);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .social-hero .hero-text {
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.7);
      max-width: 720px;
      margin: 0 auto 36px auto;
    }

    /* === Social Feed Showcase === */
    .social-feed-showcase {
      max-width: 400px;
      margin: 50px auto 0;
      position: relative;
      height: 420px;
    }
    .social-card {
      position: absolute;
      width: 300px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .social-card:nth-child(1) {
      top: 0; left: 50%;
      transform: translateX(-50%) rotate(-3deg);
      z-index: 3;
      animation: socialFloat1 6s ease-in-out infinite;
      border-color: rgba(204, 85, 0, 0.15);
    }
    .social-card:nth-child(2) {
      top: 50px; left: 58%;
      transform: translateX(-50%) rotate(2deg);
      z-index: 2;
      animation: socialFloat2 6s ease-in-out infinite;
      border-color: rgba(226, 114, 91, 0.15);
    }
    .social-card:nth-child(3) {
      top: 100px; left: 42%;
      transform: translateX(-50%) rotate(-1deg);
      z-index: 1;
      animation: socialFloat3 6s ease-in-out infinite;
      border-color: rgba(204, 85, 0, 0.1);
    }
    @keyframes socialFloat1 {
      0%, 100% { transform: translateX(-50%) rotate(-3deg) translateY(0); }
      50% { transform: translateX(-50%) rotate(-3deg) translateY(-8px); }
    }
    @keyframes socialFloat2 {
      0%, 100% { transform: translateX(-50%) rotate(2deg) translateY(0); }
      50% { transform: translateX(-50%) rotate(2deg) translateY(-6px); }
    }
    @keyframes socialFloat3 {
      0%, 100% { transform: translateX(-50%) rotate(-1deg) translateY(0); }
      50% { transform: translateX(-50%) rotate(-1deg) translateY(-10px); }
    }
    .social-card-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
    }
    .social-card-avatar {
      width: 32px; height: 32px;
      border-radius: 50%;
      background: linear-gradient(135deg, #CC5500, #E2725B);
      flex-shrink: 0;
    }
    .social-card-name {
      font-family: 'Roboto', sans-serif;
      font-size: 13px; font-weight: 600; color: #F0F4FA;
    }
    .social-card-handle {
      font-family: 'Roboto', sans-serif;
      font-size: 11px; color: rgba(255,255,255,0.4);
    }
    .social-card-image {
      width: 100%; aspect-ratio: 1;
      border-radius: 12px;
      background: linear-gradient(135deg, #0B1D3A 0%, #CC5500 50%, #E2725B 100%);
      margin-bottom: 12px;
    }
    .social-card-text {
      font-family: 'Roboto', sans-serif;
      font-size: 13px; color: rgba(255,255,255,0.7);
      line-height: 1.5; margin-bottom: 10px;
    }
    .social-card-stats {
      font-family: 'Roboto', sans-serif;
      font-size: 12px; color: rgba(255,255,255,0.4);
      display: flex; align-items: center; gap: 6px;
    }
    .social-card-stats .stat-icon { color: #CC5500; }

    /* === Glassmorphic Card Overrides === */
    .platform-card,
    .feature-card,
    .stat-card,
    .integration-logo {
      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;
      border-radius: 20px !important;
    }
    .capability-item {
      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;
    }

    @media (max-width: 768px) {
      .social-hero {
        padding: 100px 20px 60px;
        min-height: auto;
      }
      .social-hero h1 { font-size: 36px; }
      .social-feed-showcase {
        max-width: 300px; height: 360px;
      }
      .social-card { width: 250px; padding: 16px; }
    }

</style>

<!-- HERO SECTION -->
<section class="social-hero">
  <div class="hero-content">
    <div class="hero-badge">AI-Powered Social Media</div>
    <h1>Social Media<br /><span>Management</span> at Scale</h1>
    <p class="hero-text">AI-powered content creation, scheduling, and community management across all platforms. Grow your brand presence effortlessly.</p>
    <div class="cta-buttons" style="margin-bottom: 0;">
      <a href="https://calendly.com/orengenio/30min" target="_blank" rel="noopener noreferrer" class="button">
        <div class="dots_border"></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle">
          <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"></path>
          <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"></path>
          <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"></path>
        </svg>
        <span class="text_button">Book A Meeting</span>
      </a>
    </div>

    <div class="social-feed-showcase">
      <div class="social-card">
        <div class="social-card-header">
          <div class="social-card-avatar"></div>
          <div><div class="social-card-name">Brand Studio</div><div class="social-card-handle">@brandstudio</div></div>
        </div>
        <div class="social-card-image"></div>
        <div class="social-card-stats"><span class="stat-icon">&#9829;</span> 2.4K likes</div>
      </div>
      <div class="social-card">
        <div class="social-card-header">
          <div class="social-card-avatar" style="border-radius:4px;"></div>
          <div><div class="social-card-name">Marketing Pro</div><div class="social-card-handle">Chief Marketing Officer</div></div>
        </div>
        <div class="social-card-text">Excited to share our Q4 results &#8212; 340% growth in organic reach using AI-driven content strategies...</div>
        <div class="social-card-stats"><span class="stat-icon">&#128077;</span> 47 reactions</div>
      </div>
      <div class="social-card">
        <div class="social-card-header">
          <div class="social-card-avatar"></div>
          <div><div class="social-card-name">TechInsider</div><div class="social-card-handle">@techinsider</div></div>
        </div>
        <div class="social-card-text">The future of social media management is AI-powered automation. Here&#39;s what we learned from managing 500+ accounts...</div>
        <div class="social-card-stats"><span class="stat-icon">&#128065;</span> 1.2K views</div>
      </div>
    </div>
  </div>
</section>

<div class="ghl-override">

    <!-- Platform Overview -->
    <section>
        <div class="section-header">
            <span class="section-label">All Platforms. One System.</span>
            <h2>Social Media Management <span>Built for Scale</span></h2>
            <p>Unified platform for scheduling, publishing, analytics, and engagement across LinkedIn, YouTube, Facebook, and X—with enterprise-grade workflows.</p>
        </div>

        <div class="platform-grid">
            <div class="platform-card">
                <img src="https://orengen.io/wp-content/uploads/2026/02/15.png" alt="LinkedIn">
                <h3>LinkedIn</h3>
                <p>Professional content, thought leadership, B2B engagement</p>
            </div>
            <div class="platform-card">
                <img src="https://orengen.io/wp-content/uploads/2026/02/14.png" alt="YouTube">
                <h3>YouTube</h3>
                <p>Video publishing, SEO optimization, community management</p>
            </div>
            <div class="platform-card">
                <img src="https://orengen.io/wp-content/uploads/2026/02/17.png" alt="Facebook">
                <h3>Facebook</h3>
                <p>Page management, ad integration, audience insights</p>
            </div>
            <div class="platform-card">
                <img src="https://orengen.io/wp-content/uploads/2026/02/16.png" alt="X">
                <h3>X (Twitter)</h3>
                <p>Real-time engagement, trending topics, community building</p>
            </div>
        </div>
    </section>

    <!-- Core Features -->
    <section>
        <div class="section-header">
            <span class="section-label">Everything You Need</span>
            <h2>Core <span>Capabilities</span></h2>
            <p>Complete social media infrastructure designed for teams managing multiple brands at scale</p>
        </div>

        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">📅</div>
                <h3>Advanced Scheduling</h3>
                <p>Queue, calendar view, best-time posting, timezone management, bulk upload, recurring posts, and content recycling</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🎨</div>
                <h3>Content Studio</h3>
                <p>Built-in editor, media library, template system, caption variations, hashtag manager, and approval workflows</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">📊</div>
                <h3>Analytics Dashboard</h3>
                <p>Cross-platform metrics, engagement tracking, audience insights, competitor analysis, and custom reports</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">💬</div>
                <h3>Engagement Hub</h3>
                <p>Unified inbox, comment moderation, DM management, sentiment analysis, auto-responses, and escalation rules</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🤖</div>
                <h3>AI Assistance</h3>
                <p>Caption generation, image suggestions, trending topic alerts, optimal posting times, and performance predictions</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">👥</div>
                <h3>Team Collaboration</h3>
                <p>Role-based permissions, approval workflows, task assignments, internal notes, and activity logs</p>
            </div>
        </div>
    </section>

    <!-- Workflow Process -->
    <section class="workflow-section">
        <div class="section-header" style="margin-bottom: 40px;">
            <span class="section-label">How It Works</span>
            <h2>Streamlined <span>Publishing Workflow</span></h2>
            <p>From content creation to performance analysis—optimized for speed and consistency</p>
        </div>

        <div class="workflow-steps">
            <div class="workflow-step">
                <div class="workflow-number">1</div>
                <h4>Create</h4>
                <p>Draft content with AI assistance and media library</p>
            </div>
            <div class="workflow-step">
                <div class="workflow-number">2</div>
                <h4>Schedule</h4>
                <p>Queue for optimal times across all platforms</p>
            </div>
            <div class="workflow-step">
                <div class="workflow-number">3</div>
                <h4>Publish</h4>
                <p>Auto-publish or manual approval with notifications</p>
            </div>
            <div class="workflow-step">
                <div class="workflow-number">4</div>
                <h4>Analyze</h4>
                <p>Track performance and optimize future content</p>
            </div>
        </div>
    </section>

    <!-- Capabilities -->
    <section class="capabilities-section">
        <div class="section-header" style="margin-bottom: 40px;">
            <span class="section-label">Built For Enterprise</span>
            <h2>Advanced <span>Management Tools</span></h2>
            <p>Professional-grade features for agencies, brands, and marketing teams</p>
        </div>

        <div class="capabilities-grid">
            <div class="capability-item">
                <div class="capability-icon">✓</div>
                <div class="capability-content">
                    <h4>Multi-Account Management</h4>
                    <p>Manage unlimited profiles, pages, and channels from one dashboard</p>
                </div>
            </div>

            <div class="capability-item">
                <div class="capability-icon">✓</div>
                <div class="capability-content">
                    <h4>White-Label Reports</h4>
                    <p>Branded analytics reports with custom logos and client portals</p>
                </div>
            </div>

            <div class="capability-item">
                <div class="capability-icon">✓</div>
                <div class="capability-content">
                    <h4>Content Approval Chains</h4>
                    <p>Multi-level review process with version history and feedback loops</p>
                </div>
            </div>

            <div class="capability-item">
                <div class="capability-icon">✓</div>
                <div class="capability-content">
                    <h4>RSS Auto-Publishing</h4>
                    <p>Automatic content syndication from blogs and news sources</p>
                </div>
            </div>

            <div class="capability-item">
                <div class="capability-icon">✓</div>
                <div class="capability-content">
                    <h4>Competitor Monitoring</h4>
                    <p>Track competitor posts, engagement rates, and content strategies</p>
                </div>
            </div>

            <div class="capability-item">
                <div class="capability-icon">✓</div>
                <div class="capability-content">
                    <h4>Campaign Tracking</h4>
                    <p>UTM tagging, conversion tracking, ROI attribution by platform</p>
                </div>
            </div>

            <div class="capability-item">
                <div class="capability-icon">✓</div>
                <div class="capability-content">
                    <h4>Crisis Management</h4>
                    <p>Alert systems, rapid response protocols, escalation procedures</p>
                </div>
            </div>

            <div class="capability-item">
                <div class="capability-icon">✓</div>
                <div class="capability-content">
                    <h4>API Access</h4>
                    <p>Custom integrations, data exports, webhook automation</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats -->
    <section>
        <div class="section-header">
            <span class="section-label">By The Numbers</span>
            <h2>Platform <span>Performance</span></h2>
            <p>Real metrics from teams managing social at scale</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-value">10K+</div>
                <div class="stat-label">Posts Scheduled Daily</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">4</div>
                <div class="stat-label">Major Platforms</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">85%</div>
                <div class="stat-label">Time Saved vs Manual</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">24/7</div>
                <div class="stat-label">Engagement Monitoring</div>
            </div>
        </div>
    </section>

    <!-- PRICING -->
    <section>
        <div class="section-header">
            <span class="section-label">Fully Managed Pricing</span>
            <h2>Simple, <span>Transparent Pricing</span></h2>
            <p>Monthly or annual (save 17%). No per-seat charges. Cancel anytime.</p>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:24px;margin-bottom:40px;">
            <!-- Standard -->
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(204, 85, 0,0.2);border-top:4px solid #CC5500;border-radius:20px;padding:36px 30px;display:flex;flex-direction:column;">
                <div style="font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:8px;">Standard</div>
                <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-bottom:16px;">3 Platforms — Fully Managed</div>
                <div style="margin-bottom:20px;">
                    <div style="color:rgba(255,255,255,0.35);font-size:11px;text-decoration:line-through;margin-bottom:4px;">Was $97/mo</div>
                    <div style="display:flex;align-items:flex-end;gap:4px;">
                        <span style="font-family:'Playfair Display',sans-serif;font-size:44px;font-weight:800;color:#CC5500;line-height:1;">$47</span>
                        <span style="color:rgba(255,255,255,0.35);font-size:14px;padding-bottom:7px;">/mo</span>
                    </div>
                    <div style="color:rgba(255,255,255,0.3);font-size:12px;margin-top:4px;">Or $470/yr (Save 17%)</div>
                </div>
                <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:9px;margin-bottom:28px;flex:1;">
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> 3 social platforms</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> 12 posts/month</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> AI content creation</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Basic scheduling</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Monthly analytics report</li>
                </ul>
                <a href="https://buy.stripe.com/eVqbJ1gsEcJV9Sj7O1fQI2u" target="_blank" rel="noopener noreferrer" style="display:block;text-align:center;padding:14px 0;border-radius:12px;font-size:14px;font-weight:700;text-decoration:none;background:transparent;color:#CC5500;border:1.5px solid rgba(204, 85, 0,0.4);">Get Started →</a>
            </div>

            <!-- Professional -->
            <div style="background:rgba(204, 85, 0,0.08);border:2px solid rgba(204, 85, 0,0.5);border-top:4px solid #CC5500;border-radius:20px;padding:36px 30px;display:flex;flex-direction:column;position:relative;box-shadow:0 0 60px rgba(204, 85, 0,0.15);">
                <div style="position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:#CC5500;color:#000;font-size:11px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;border-radius:9999px;padding:5px 16px;white-space:nowrap;">Most Popular</div>
                <div style="font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#CC5500;margin-bottom:8px;">Professional</div>
                <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-bottom:16px;">5 Platforms + Ads — Fully Managed</div>
                <div style="margin-bottom:20px;">
                    <div style="color:rgba(255,255,255,0.35);font-size:11px;text-decoration:line-through;margin-bottom:4px;">Was $197/mo</div>
                    <div style="display:flex;align-items:flex-end;gap:4px;">
                        <span style="font-family:'Playfair Display',sans-serif;font-size:44px;font-weight:800;color:#CC5500;line-height:1;">$97</span>
                        <span style="color:rgba(255,255,255,0.35);font-size:14px;padding-bottom:7px;">/mo</span>
                    </div>
                    <div style="color:rgba(255,255,255,0.3);font-size:12px;margin-top:4px;">Or $970/yr (Save 17%)</div>
                </div>
                <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:9px;margin-bottom:28px;flex:1;">
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> 5 social platforms</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> 30 posts/month</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Community management</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Paid social support</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Bi-weekly strategy call</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> All Standard features</li>
                </ul>
                <a href="https://buy.stripe.com/4gM5kDdgs39l8Of8S5fQI2w" target="_blank" rel="noopener noreferrer" style="display:block;text-align:center;padding:14px 0;border-radius:12px;font-size:14px;font-weight:700;text-decoration:none;background:#CC5500;color:#000;border:none;">Get Started →</a>
            </div>

            <!-- Premium -->
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(204, 85, 0,0.2);border-top:4px solid #CC5500;border-radius:20px;padding:36px 30px;display:flex;flex-direction:column;">
                <div style="font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:8px;">Premium</div>
                <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-bottom:16px;">All Platforms — Fully Managed</div>
                <div style="margin-bottom:20px;">
                    <div style="color:rgba(255,255,255,0.35);font-size:11px;text-decoration:line-through;margin-bottom:4px;">Was $397/mo</div>
                    <div style="display:flex;align-items:flex-end;gap:4px;">
                        <span style="font-family:'Playfair Display',sans-serif;font-size:44px;font-weight:800;color:#CC5500;line-height:1;">$197</span>
                        <span style="color:rgba(255,255,255,0.35);font-size:14px;padding-bottom:7px;">/mo</span>
                    </div>
                    <div style="color:rgba(255,255,255,0.3);font-size:12px;margin-top:4px;">Or $1,970/yr (Save 17%)</div>
                </div>
                <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:9px;margin-bottom:28px;flex:1;">
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> All platforms + TikTok</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> 60+ posts/month</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Full community management</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Ad campaign management</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Weekly strategy call</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Dedicated social manager</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> All Professional features</li>
                </ul>
                <a href="https://buy.stripe.com/7sYdR9b8kh0bggH0lzfQI2y" target="_blank" rel="noopener noreferrer" style="display:block;text-align:center;padding:14px 0;border-radius:12px;font-size:14px;font-weight:700;text-decoration:none;background:transparent;color:#CC5500;border:1.5px solid rgba(204, 85, 0,0.4);">Get Started →</a>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
        <div class="section-header" style="margin-bottom: 0;">
            <h2>Ready to Scale Your <span>Social Presence?</span></h2>
            <p>Join marketing teams managing millions of impressions with unified workflows and real-time analytics.</p>
            
            <div class="cta-buttons">
                <a href="https://calendly.com/orengenio/30min" target="_blank" rel="noopener noreferrer" class="button">
                    <div class="dots_border"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle">
                        <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"></path>
                        <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"></path>
                        <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"></path>
                    </svg>
                    <span class="text_button">Book A Meeting</span>
                </a>
            </div>
        </div>
    </section>

</div>
`

export default function Page() {
  return (
    <div className="pt-24 pb-12" dangerouslySetInnerHTML={{ __html: `
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
--open-sans: 'Open Sans';
--roboto: 'Roboto';
--montserrat: 'Montserrat';
--poppins: 'Poppins';
--headlinefont: 'Inter';
--contentfont: 'Inter';
--text-color: #000000;
--link-color: #188bf6; } .bg-fixed{bottom:0;top:0;left:0;right:0;position:fixed;overflow:auto;background-color:var(--white)} 
            
            .drop-zone-draggable .hl_main_popup{box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}
            
          
#hl_main_popup.popup-body{position:absolute!important;left:50%!important;bottom:auto!important;transform:translate(-50%,0)!important;right:auto!important;box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}.--mobile #hl_main_popup.popup-body{width:380px!important}@media screen and (min-width:0px) and (max-width:480px){#hl_main_popup.popup-body{width:380px!important}} 
            
            .drop-zone-draggable .hl_main_popup-qKyhd0BwvF{box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}
            
          

            
            .drop-zone-draggable .hl_main_popup-TiXCPGYNFr{box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}
            
          
#hl_main_popup-qKyhd0BwvF.popup-body{position:absolute!important;left:50%!important;bottom:auto!important;transform:translate(-50%,0)!important;right:auto!important;box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}.--mobile #hl_main_popup-qKyhd0BwvF.popup-body{width:380px!important}@media screen and (min-width:0px) and (max-width:480px){#hl_main_popup-qKyhd0BwvF.popup-body{width:380px!important}} #hl_main_popup-TiXCPGYNFr.popup-body{position:absolute!important;left:50%!important;bottom:auto!important;transform:translate(-50%,0)!important;right:auto!important;box-shadow:none;padding:20px;margin-top:0;border-color:var(--gray);border-width:10px;border-style:solid;background-color:var(--white);width:720px}.--mobile #hl_main_popup-TiXCPGYNFr.popup-body{width:380px!important}@media screen and (min-width:0px) and (max-width:480px){#hl_main_popup-TiXCPGYNFr.popup-body{width:380px!important}} 
 /* ---- Floating Nav Header  styles ----- */  
 :root{--transparent:transparent;--black:#000000}.hl_page-preview--content .section-jQGNG4xoRE{box-shadow:none;padding:20px 0;margin:0;background-color:var(--black);border-color:var(--black);border-width:2px;border-style:solid;backdrop-filter:none}.hl_page-preview--content .col-G6pdgjwQuB,.hl_page-preview--content .row-DNwNU2q1n1{margin:0 auto;box-shadow:none;padding:15px 0;background-color:var(--transparent);border-color:var(--black);border-width:2px;border-style:solid;width:100%}.hl_page-preview--content .col-G6pdgjwQuB{padding:10px 5px;margin:0}.hl_page-preview--content .custom-code-QCRxJvpFNx{margin:0;width:auto;height:auto}#section-jQGNG4xoRE>.inner{max-width:1170px}#col-G6pdgjwQuB>.inner{flex-direction:column;justify-content:center;align-items:inherit;flex-wrap:nowrap} 
 /* ---- Section styles ----- */ 
:root{--transparent:transparent;--black:#000000}.hl_page-preview--content .col-0o4nkSYzWr,.hl_page-preview--content .row-CCCHKXOVWz,.hl_page-preview--content .section-6tSX2wjYRl{box-shadow:none;padding:20px 0;margin:0;background-color:var(--black);backdrop-filter:none;border-color:var(--black);border-width:2px;border-style:solid}.hl_page-preview--content .col-0o4nkSYzWr,.hl_page-preview--content .row-CCCHKXOVWz{margin:0 auto;padding:10px 5px;width:100%}.hl_page-preview--content .col-0o4nkSYzWr{background-color:var(--transparent);margin:0}.hl_page-preview--content .custom-code-FYpzBrVdtK{margin:0;width:auto;height:auto}#section-6tSX2wjYRl>.inner{max-width:1170px}#col-0o4nkSYzWr>.inner{flex-direction:column;justify-content:center;align-items:inherit;flex-wrap:nowrap}
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
  

        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Roboto:wght@300;400;500;600;700&display=swap');
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            /* Navy/Orange Brand Theme - OrenSocial */
            --primary: #CC5500;
            --primary-light: #E2725B;
            --primary-dark: #993D00;
            --accent: #CC5500;
            --accent-glow: rgba(204, 85, 0, 0.3);
            
            /* Base Colors */
            --bg-dark: #081628;
            --bg-card: rgba(255, 255, 255, 0.03);
            --bg-card-hover: rgba(255, 255, 255, 0.06);
            --border: rgba(255, 255, 255, 0.08);
            --text: var(--foreground);
            --text-secondary: var(--oren-sub);
            --text-muted: var(--oren-muted);
        }

        body {
            font-family: 'Roboto', 'Playfair Display', sans-serif;
            background: var(--bg-dark);
            color: var(--text);
            line-height: 1.6;
            overflow-x: hidden;
            padding: 0;
            margin: 0;
        }

        /* GHL Override - Kill their spacing */
        .ghl-override {
            margin: -40px -20px;
            padding: 0;
        }

        /* Section Styling */
        section {
            max-width: 1400px;
            margin: 0 auto 120px;
            padding: 0 40px;
        }

        section:first-of-type {
            padding-top: 60px;
        }

        .section-header {
            text-align: center;
            margin-bottom: 80px;
        }

        .section-label {
            display: inline-block;
            padding: 8px 24px;
            background: rgba(204, 85, 0, 0.1);
            border: 1px solid var(--primary);
            border-radius: 50px;
            color: var(--primary);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 24px;
        }

        h2 {
            font-family: 'Playfair Display', sans-serif;
            font-size: clamp(36px, 5vw, 56px);
            line-height: 1.2;
            margin-bottom: 20px;
            font-weight: 700;
        }

        h2 span {
            background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .section-header p {
            font-size: 20px;
            color: var(--text-secondary);
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.6;
        }

        /* Platform Overview */
        .platform-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            margin-bottom: 120px;
        }

        .platform-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 32px 24px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .platform-card:hover {
            background: var(--bg-card-hover);
            border-color: var(--primary);
            transform: translateY(-4px);
        }

        .platform-card img {
            width: 64px;
            height: 64px;
            margin-bottom: 20px;
            border-radius: 12px;
        }

        .platform-card h3 {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 8px;
            color: var(--primary);
        }

        .platform-card p {
            font-size: 14px;
            color: var(--text-muted);
            line-height: 1.5;
        }

        /* Features Grid */
        .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
        }

        .feature-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 40px 32px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--primary), var(--accent));
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .feature-card:hover::before {
            transform: scaleX(1);
        }

        .feature-card:hover {
            background: var(--bg-card-hover);
            border-color: var(--primary);
            transform: translateY(-4px);
        }

        .feature-icon {
            width: 48px;
            height: 48px;
            background: rgba(204, 85, 0, 0.1);
            border: 1px solid var(--primary);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
            color: var(--primary);
            font-size: 24px;
        }

        .feature-card h3 {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 12px;
            font-family: 'Playfair Display', sans-serif;
        }

        .feature-card p {
            font-size: 15px;
            color: var(--text-secondary);
            line-height: 1.6;
        }

        /* Capabilities List */
        .capabilities-section {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 24px;
            padding: 60px;
            margin-bottom: 120px;
        }

        .capabilities-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            margin-top: 40px;
        }

        .capability-item {
            display: flex;
            gap: 16px;
            padding: 24px;
            background: rgba(204, 85, 0, 0.05);
            border-radius: 12px;
            border: 1px solid rgba(204, 85, 0, 0.2);
            transition: all 0.3s ease;
        }

        .capability-item:hover {
            background: rgba(204, 85, 0, 0.1);
            border-color: var(--primary);
            transform: translateX(8px);
        }

        .capability-icon {
            width: 40px;
            height: 40px;
            background: var(--primary);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            color: #000;
            font-weight: 700;
        }

        .capability-content h4 {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 4px;
        }

        .capability-content p {
            font-size: 14px;
            color: var(--text-muted);
        }

        /* Workflow Visualization */
        .workflow-section {
            background: linear-gradient(135deg, rgba(204, 85, 0, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
            border: 1px solid var(--border);
            border-radius: 24px;
            padding: 60px;
            margin-bottom: 120px;
        }

        .workflow-steps {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            margin-top: 40px;
            position: relative;
        }

        .workflow-steps::before {
            content: '';
            position: absolute;
            top: 40px;
            left: 12.5%;
            right: 12.5%;
            height: 2px;
            background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
            z-index: 0;
        }

        .workflow-step {
            text-align: center;
            position: relative;
            z-index: 1;
        }

        .workflow-number {
            width: 80px;
            height: 80px;
            background: var(--bg-dark);
            border: 3px solid var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            font-weight: 700;
            color: var(--primary);
            margin: 0 auto 20px;
        }

        .workflow-step h4 {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .workflow-step p {
            font-size: 14px;
            color: var(--text-muted);
        }

        /* Stats Grid */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
        }

        .stat-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 32px 24px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .stat-card:hover {
            background: var(--bg-card-hover);
            border-color: var(--primary);
            transform: translateY(-4px);
        }

        .stat-value {
            font-size: 48px;
            font-weight: 700;
            background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 8px;
            font-family: 'Playfair Display', sans-serif;
        }

        .stat-label {
            font-size: 14px;
            color: var(--text-secondary);
            font-weight: 500;
        }

        /* Integration Section */
        .integration-logos {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 24px;
            margin-top: 40px;
        }

        .integration-logo {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            height: 100px;
        }

        .integration-logo:hover {
            background: var(--bg-card-hover);
            border-color: var(--primary);
            transform: scale(1.05);
        }

        .integration-logo img {
            max-width: 100%;
            max-height: 60px;
            opacity: 0.7;
            transition: opacity 0.3s ease;
        }

        .integration-logo:hover img {
            opacity: 1;
        }

        /* CTA Section */
        .cta-section {
            text-align: center;
            background: linear-gradient(135deg, rgba(204, 85, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
            border: 1px solid var(--primary);
            border-radius: 24px;
            padding: 80px 40px;
            margin-bottom: 60px;
        }

        .cta-section h2 {
            margin-bottom: 24px;
        }

        .cta-section p {
            font-size: 20px;
            color: var(--text-secondary);
            margin-bottom: 40px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        .cta-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            align-items: center;
        }

        /* Sparkle Button from Homepage */
        .button {
            --black-700: hsla(0 0% 12% / 1);
            --border_radius: 9999px;
            --transtion: 0.3s ease-in-out;
            --offset: 2px;

            cursor: pointer;
            position: relative;
            display: inline-flex;
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
                0 0 0 calc(var(--active, 0) * 0.375rem) hsl(24 100% 40% / 0.75);
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
            background-color: hsla(24 100% 44% / 0.75);
            background-image: radial-gradient(
                at 51% 89%,
                hsla(24, 100%, 44%, 1) 0px,
                transparent 50%
            ),
            radial-gradient(at 100% 100%, hsla(24, 100%, 40%, 1) 0px, transparent 50%),
            radial-gradient(at 22% 91%, hsla(24, 100%, 40%, 1) 0px, transparent 50%);
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
            transform-origin: left;
            transform: rotate(0deg);
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
            background-image: linear-gradient(
                90deg,
                hsla(0 0% 100% / 1) 0%,
                hsla(0 0% 100% / var(--active, 0)) 120%
            );
            background-clip: text;
            -webkit-background-clip: text;
            font-size: 1rem;
            color: transparent;
            font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 1200px) {
            .features-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .workflow-steps {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .workflow-steps::before {
                display: none;
            }
            
            .integration-logos {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        @media (max-width: 768px) {
            section {
                padding: 0 24px;
                margin-bottom: 80px;
            }
            
            .section-header {
                margin-bottom: 48px;
            }
            
            .platform-grid,
            .features-grid,
            .capabilities-grid,
            .workflow-steps,
            .stats-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .integration-logos {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .workflow-section,
            .capabilities-section,
            .cta-section {
                padding: 40px 24px;
            }
            
            .cta-buttons {
                flex-direction: column;
            }
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
    font-family: 'Playfair Display', sans-serif;
    font-size: 11px;
    font-weight: 700;
    color: #ff8c42;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 24px;
  }

  .og-section-header h2 {
    font-family: 'Playfair Display', sans-serif;
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
    font-family: 'Roboto', sans-serif;
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
    font-family: 'Playfair Display', sans-serif;
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
    font-family: 'Playfair Display', sans-serif;
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
    font-family: 'Playfair Display', sans-serif;
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
    font-family: 'Playfair Display', sans-serif; font-size: 12px; font-weight: 700;
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
    font-family: 'Roboto', sans-serif; font-size: 13px;
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
    font-family: 'Playfair Display', sans-serif; font-size: 12px; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase; color: var(--foreground);
    margin-bottom: 20px; display: flex; align-items: center; gap: 10px;
  }
  .mkt-footer-resources-title .aff-badge {
    font-size: 8px; letter-spacing: 1.5px; color: var(--orange);
    background: rgba(204, 85, 0, 0.08); padding: 3px 8px; border-radius: 4px;
  }
  .mkt-footer-resources-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 8px 24px; }
  .mkt-footer-resources-grid a {
    font-family: 'Roboto', sans-serif; font-size: 12px; color: rgba(255, 255, 255, 0.75);
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
  .mkt-footer-copy { font-family: 'Roboto', sans-serif; font-size: 12px; color: rgba(255, 255, 255, 0.6); }
  .mkt-footer-copy a { color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: color 0.25s ease; }
  .mkt-footer-copy a:hover { color: var(--orange); }
  .mkt-footer-bottom-links { display: flex; gap: 20px; flex-wrap: wrap; }
  .mkt-footer-bottom-links a { font-family: 'Roboto', sans-serif; font-size: 11px; color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: color 0.25s ease; }
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
    font-family: 'Roboto', 'Inter', system-ui, sans-serif;
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
    font-family: 'Playfair Display', sans-serif;
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


    /* === Body Navy Gradient Override === */
    body {
      background: linear-gradient(165deg, #081628 0%, #0B1D3A 30%, #0F2847 60%, #0D2240 100%) !important;
      background-attachment: fixed !important;
    }

    /* === Social Hero Section === */
    .social-hero {
      position: relative;
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 120px 40px 80px;
      background: linear-gradient(180deg, rgba(204, 85, 0, 0.08) 0%, rgba(11, 29, 58, 0.5) 50%, transparent 100%);
      max-width: 100%;
      margin: 0;
    }
    .social-hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
      background-size: 30px 30px;
      pointer-events: none;
    }
    .social-hero .hero-content {
      max-width: 900px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    .social-hero .hero-badge {
      display: inline-flex;
      align-items: center;
      padding: 10px 24px;
      background: rgba(204, 85, 0, 0.12);
      border: 2px solid rgba(204, 85, 0, 0.35);
      border-radius: 100px;
      color: #CC5500;
      font-family: 'Playfair Display', serif;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 32px;
    }
    .social-hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(48px, 8vw, 80px);
      line-height: 1.1;
      margin-bottom: 24px;
      letter-spacing: -1px;
      font-weight: 800;
      color: #F0F4FA;
    }
    .social-hero h1 span {
      background: linear-gradient(90deg, #CC5500, #E2725B);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .social-hero .hero-text {
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.7);
      max-width: 720px;
      margin: 0 auto 36px auto;
    }

    /* === Social Feed Showcase === */
    .social-feed-showcase {
      max-width: 400px;
      margin: 50px auto 0;
      position: relative;
      height: 420px;
    }
    .social-card {
      position: absolute;
      width: 300px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .social-card:nth-child(1) {
      top: 0; left: 50%;
      transform: translateX(-50%) rotate(-3deg);
      z-index: 3;
      animation: socialFloat1 6s ease-in-out infinite;
      border-color: rgba(204, 85, 0, 0.15);
    }
    .social-card:nth-child(2) {
      top: 50px; left: 58%;
      transform: translateX(-50%) rotate(2deg);
      z-index: 2;
      animation: socialFloat2 6s ease-in-out infinite;
      border-color: rgba(226, 114, 91, 0.15);
    }
    .social-card:nth-child(3) {
      top: 100px; left: 42%;
      transform: translateX(-50%) rotate(-1deg);
      z-index: 1;
      animation: socialFloat3 6s ease-in-out infinite;
      border-color: rgba(204, 85, 0, 0.1);
    }
    @keyframes socialFloat1 {
      0%, 100% { transform: translateX(-50%) rotate(-3deg) translateY(0); }
      50% { transform: translateX(-50%) rotate(-3deg) translateY(-8px); }
    }
    @keyframes socialFloat2 {
      0%, 100% { transform: translateX(-50%) rotate(2deg) translateY(0); }
      50% { transform: translateX(-50%) rotate(2deg) translateY(-6px); }
    }
    @keyframes socialFloat3 {
      0%, 100% { transform: translateX(-50%) rotate(-1deg) translateY(0); }
      50% { transform: translateX(-50%) rotate(-1deg) translateY(-10px); }
    }
    .social-card-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
    }
    .social-card-avatar {
      width: 32px; height: 32px;
      border-radius: 50%;
      background: linear-gradient(135deg, #CC5500, #E2725B);
      flex-shrink: 0;
    }
    .social-card-name {
      font-family: 'Roboto', sans-serif;
      font-size: 13px; font-weight: 600; color: #F0F4FA;
    }
    .social-card-handle {
      font-family: 'Roboto', sans-serif;
      font-size: 11px; color: rgba(255,255,255,0.4);
    }
    .social-card-image {
      width: 100%; aspect-ratio: 1;
      border-radius: 12px;
      background: linear-gradient(135deg, #0B1D3A 0%, #CC5500 50%, #E2725B 100%);
      margin-bottom: 12px;
    }
    .social-card-text {
      font-family: 'Roboto', sans-serif;
      font-size: 13px; color: rgba(255,255,255,0.7);
      line-height: 1.5; margin-bottom: 10px;
    }
    .social-card-stats {
      font-family: 'Roboto', sans-serif;
      font-size: 12px; color: rgba(255,255,255,0.4);
      display: flex; align-items: center; gap: 6px;
    }
    .social-card-stats .stat-icon { color: #CC5500; }

    /* === Glassmorphic Card Overrides === */
    .platform-card,
    .feature-card,
    .stat-card,
    .integration-logo {
      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;
      border-radius: 20px !important;
    }
    .capability-item {
      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;
    }

    @media (max-width: 768px) {
      .social-hero {
        padding: 100px 20px 60px;
        min-height: auto;
      }
      .social-hero h1 { font-size: 36px; }
      .social-feed-showcase {
        max-width: 300px; height: 360px;
      }
      .social-card { width: 250px; padding: 16px; }
    }

</style>

<!-- HERO SECTION -->
<section class="social-hero">
  <div class="hero-content">
    <div class="hero-badge">AI-Powered Social Media</div>
    <h1>Social Media<br /><span>Management</span> at Scale</h1>
    <p class="hero-text">AI-powered content creation, scheduling, and community management across all platforms. Grow your brand presence effortlessly.</p>
    <div class="cta-buttons" style="margin-bottom: 0;">
      <a href="https://calendly.com/orengenio/30min" target="_blank" rel="noopener noreferrer" class="button">
        <div class="dots_border"></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle">
          <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"></path>
          <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"></path>
          <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"></path>
        </svg>
        <span class="text_button">Book A Meeting</span>
      </a>
    </div>

    <div class="social-feed-showcase">
      <div class="social-card">
        <div class="social-card-header">
          <div class="social-card-avatar"></div>
          <div><div class="social-card-name">Brand Studio</div><div class="social-card-handle">@brandstudio</div></div>
        </div>
        <div class="social-card-image"></div>
        <div class="social-card-stats"><span class="stat-icon">&#9829;</span> 2.4K likes</div>
      </div>
      <div class="social-card">
        <div class="social-card-header">
          <div class="social-card-avatar" style="border-radius:4px;"></div>
          <div><div class="social-card-name">Marketing Pro</div><div class="social-card-handle">Chief Marketing Officer</div></div>
        </div>
        <div class="social-card-text">Excited to share our Q4 results &#8212; 340% growth in organic reach using AI-driven content strategies...</div>
        <div class="social-card-stats"><span class="stat-icon">&#128077;</span> 47 reactions</div>
      </div>
      <div class="social-card">
        <div class="social-card-header">
          <div class="social-card-avatar"></div>
          <div><div class="social-card-name">TechInsider</div><div class="social-card-handle">@techinsider</div></div>
        </div>
        <div class="social-card-text">The future of social media management is AI-powered automation. Here&#39;s what we learned from managing 500+ accounts...</div>
        <div class="social-card-stats"><span class="stat-icon">&#128065;</span> 1.2K views</div>
      </div>
    </div>
  </div>
</section>

<div class="ghl-override">

    <!-- Platform Overview -->
    <section>
        <div class="section-header">
            <span class="section-label">All Platforms. One System.</span>
            <h2>Social Media Management <span>Built for Scale</span></h2>
            <p>Unified platform for scheduling, publishing, analytics, and engagement across LinkedIn, YouTube, Facebook, and X—with enterprise-grade workflows.</p>
        </div>

        <div class="platform-grid">
            <div class="platform-card">
                <img src="https://orengen.io/wp-content/uploads/2026/02/15.png" alt="LinkedIn">
                <h3>LinkedIn</h3>
                <p>Professional content, thought leadership, B2B engagement</p>
            </div>
            <div class="platform-card">
                <img src="https://orengen.io/wp-content/uploads/2026/02/14.png" alt="YouTube">
                <h3>YouTube</h3>
                <p>Video publishing, SEO optimization, community management</p>
            </div>
            <div class="platform-card">
                <img src="https://orengen.io/wp-content/uploads/2026/02/17.png" alt="Facebook">
                <h3>Facebook</h3>
                <p>Page management, ad integration, audience insights</p>
            </div>
            <div class="platform-card">
                <img src="https://orengen.io/wp-content/uploads/2026/02/16.png" alt="X">
                <h3>X (Twitter)</h3>
                <p>Real-time engagement, trending topics, community building</p>
            </div>
        </div>
    </section>

    <!-- Core Features -->
    <section>
        <div class="section-header">
            <span class="section-label">Everything You Need</span>
            <h2>Core <span>Capabilities</span></h2>
            <p>Complete social media infrastructure designed for teams managing multiple brands at scale</p>
        </div>

        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">📅</div>
                <h3>Advanced Scheduling</h3>
                <p>Queue, calendar view, best-time posting, timezone management, bulk upload, recurring posts, and content recycling</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🎨</div>
                <h3>Content Studio</h3>
                <p>Built-in editor, media library, template system, caption variations, hashtag manager, and approval workflows</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">📊</div>
                <h3>Analytics Dashboard</h3>
                <p>Cross-platform metrics, engagement tracking, audience insights, competitor analysis, and custom reports</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">💬</div>
                <h3>Engagement Hub</h3>
                <p>Unified inbox, comment moderation, DM management, sentiment analysis, auto-responses, and escalation rules</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🤖</div>
                <h3>AI Assistance</h3>
                <p>Caption generation, image suggestions, trending topic alerts, optimal posting times, and performance predictions</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">👥</div>
                <h3>Team Collaboration</h3>
                <p>Role-based permissions, approval workflows, task assignments, internal notes, and activity logs</p>
            </div>
        </div>
    </section>

    <!-- Workflow Process -->
    <section class="workflow-section">
        <div class="section-header" style="margin-bottom: 40px;">
            <span class="section-label">How It Works</span>
            <h2>Streamlined <span>Publishing Workflow</span></h2>
            <p>From content creation to performance analysis—optimized for speed and consistency</p>
        </div>

        <div class="workflow-steps">
            <div class="workflow-step">
                <div class="workflow-number">1</div>
                <h4>Create</h4>
                <p>Draft content with AI assistance and media library</p>
            </div>
            <div class="workflow-step">
                <div class="workflow-number">2</div>
                <h4>Schedule</h4>
                <p>Queue for optimal times across all platforms</p>
            </div>
            <div class="workflow-step">
                <div class="workflow-number">3</div>
                <h4>Publish</h4>
                <p>Auto-publish or manual approval with notifications</p>
            </div>
            <div class="workflow-step">
                <div class="workflow-number">4</div>
                <h4>Analyze</h4>
                <p>Track performance and optimize future content</p>
            </div>
        </div>
    </section>

    <!-- Capabilities -->
    <section class="capabilities-section">
        <div class="section-header" style="margin-bottom: 40px;">
            <span class="section-label">Built For Enterprise</span>
            <h2>Advanced <span>Management Tools</span></h2>
            <p>Professional-grade features for agencies, brands, and marketing teams</p>
        </div>

        <div class="capabilities-grid">
            <div class="capability-item">
                <div class="capability-icon">✓</div>
                <div class="capability-content">
                    <h4>Multi-Account Management</h4>
                    <p>Manage unlimited profiles, pages, and channels from one dashboard</p>
                </div>
            </div>

            <div class="capability-item">
                <div class="capability-icon">✓</div>
                <div class="capability-content">
                    <h4>White-Label Reports</h4>
                    <p>Branded analytics reports with custom logos and client portals</p>
                </div>
            </div>

            <div class="capability-item">
                <div class="capability-icon">✓</div>
                <div class="capability-content">
                    <h4>Content Approval Chains</h4>
                    <p>Multi-level review process with version history and feedback loops</p>
                </div>
            </div>

            <div class="capability-item">
                <div class="capability-icon">✓</div>
                <div class="capability-content">
                    <h4>RSS Auto-Publishing</h4>
                    <p>Automatic content syndication from blogs and news sources</p>
                </div>
            </div>

            <div class="capability-item">
                <div class="capability-icon">✓</div>
                <div class="capability-content">
                    <h4>Competitor Monitoring</h4>
                    <p>Track competitor posts, engagement rates, and content strategies</p>
                </div>
            </div>

            <div class="capability-item">
                <div class="capability-icon">✓</div>
                <div class="capability-content">
                    <h4>Campaign Tracking</h4>
                    <p>UTM tagging, conversion tracking, ROI attribution by platform</p>
                </div>
            </div>

            <div class="capability-item">
                <div class="capability-icon">✓</div>
                <div class="capability-content">
                    <h4>Crisis Management</h4>
                    <p>Alert systems, rapid response protocols, escalation procedures</p>
                </div>
            </div>

            <div class="capability-item">
                <div class="capability-icon">✓</div>
                <div class="capability-content">
                    <h4>API Access</h4>
                    <p>Custom integrations, data exports, webhook automation</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats -->
    <section>
        <div class="section-header">
            <span class="section-label">By The Numbers</span>
            <h2>Platform <span>Performance</span></h2>
            <p>Real metrics from teams managing social at scale</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-value">10K+</div>
                <div class="stat-label">Posts Scheduled Daily</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">4</div>
                <div class="stat-label">Major Platforms</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">85%</div>
                <div class="stat-label">Time Saved vs Manual</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">24/7</div>
                <div class="stat-label">Engagement Monitoring</div>
            </div>
        </div>
    </section>

    <!-- PRICING -->
    <section>
        <div class="section-header">
            <span class="section-label">Fully Managed Pricing</span>
            <h2>Simple, <span>Transparent Pricing</span></h2>
            <p>Monthly or annual (save 17%). No per-seat charges. Cancel anytime.</p>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:24px;margin-bottom:40px;">
            <!-- Standard -->
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(204, 85, 0,0.2);border-top:4px solid #CC5500;border-radius:20px;padding:36px 30px;display:flex;flex-direction:column;">
                <div style="font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:8px;">Standard</div>
                <div style="font-size:13px;color:var(--oren-muted);margin-bottom:16px;">3 Platforms — Fully Managed</div>
                <div style="margin-bottom:20px;">
                    <div style="color:rgba(255,255,255,0.35);font-size:11px;text-decoration:line-through;margin-bottom:4px;">Was $97/mo</div>
                    <div style="display:flex;align-items:flex-end;gap:4px;">
                        <span style="font-family:'Playfair Display',sans-serif;font-size:44px;font-weight:800;color:#CC5500;line-height:1;">$47</span>
                        <span style="color:rgba(255,255,255,0.35);font-size:14px;padding-bottom:7px;">/mo</span>
                    </div>
                    <div style="color:rgba(255,255,255,0.3);font-size:12px;margin-top:4px;">Or $470/yr (Save 17%)</div>
                </div>
                <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:9px;margin-bottom:28px;flex:1;">
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> 3 social platforms</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> 12 posts/month</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> AI content creation</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Basic scheduling</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Monthly analytics report</li>
                </ul>
                <a href="https://buy.stripe.com/eVqbJ1gsEcJV9Sj7O1fQI2u" target="_blank" rel="noopener noreferrer" style="display:block;text-align:center;padding:14px 0;border-radius:12px;font-size:14px;font-weight:700;text-decoration:none;background:transparent;color:#CC5500;border:1.5px solid rgba(204, 85, 0,0.4);">Get Started →</a>
            </div>

            <!-- Professional -->
            <div style="background:rgba(204, 85, 0,0.08);border:2px solid rgba(204, 85, 0,0.5);border-top:4px solid #CC5500;border-radius:20px;padding:36px 30px;display:flex;flex-direction:column;position:relative;box-shadow:0 0 60px rgba(204, 85, 0,0.15);">
                <div style="position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:#CC5500;color:#000;font-size:11px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;border-radius:9999px;padding:5px 16px;white-space:nowrap;">Most Popular</div>
                <div style="font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#CC5500;margin-bottom:8px;">Professional</div>
                <div style="font-size:13px;color:var(--oren-muted);margin-bottom:16px;">5 Platforms + Ads — Fully Managed</div>
                <div style="margin-bottom:20px;">
                    <div style="color:rgba(255,255,255,0.35);font-size:11px;text-decoration:line-through;margin-bottom:4px;">Was $197/mo</div>
                    <div style="display:flex;align-items:flex-end;gap:4px;">
                        <span style="font-family:'Playfair Display',sans-serif;font-size:44px;font-weight:800;color:#CC5500;line-height:1;">$97</span>
                        <span style="color:rgba(255,255,255,0.35);font-size:14px;padding-bottom:7px;">/mo</span>
                    </div>
                    <div style="color:rgba(255,255,255,0.3);font-size:12px;margin-top:4px;">Or $970/yr (Save 17%)</div>
                </div>
                <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:9px;margin-bottom:28px;flex:1;">
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> 5 social platforms</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> 30 posts/month</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Community management</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Paid social support</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Bi-weekly strategy call</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> All Standard features</li>
                </ul>
                <a href="https://buy.stripe.com/4gM5kDdgs39l8Of8S5fQI2w" target="_blank" rel="noopener noreferrer" style="display:block;text-align:center;padding:14px 0;border-radius:12px;font-size:14px;font-weight:700;text-decoration:none;background:#CC5500;color:#000;border:none;">Get Started →</a>
            </div>

            <!-- Premium -->
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(204, 85, 0,0.2);border-top:4px solid #CC5500;border-radius:20px;padding:36px 30px;display:flex;flex-direction:column;">
                <div style="font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:8px;">Premium</div>
                <div style="font-size:13px;color:var(--oren-muted);margin-bottom:16px;">All Platforms — Fully Managed</div>
                <div style="margin-bottom:20px;">
                    <div style="color:rgba(255,255,255,0.35);font-size:11px;text-decoration:line-through;margin-bottom:4px;">Was $397/mo</div>
                    <div style="display:flex;align-items:flex-end;gap:4px;">
                        <span style="font-family:'Playfair Display',sans-serif;font-size:44px;font-weight:800;color:#CC5500;line-height:1;">$197</span>
                        <span style="color:rgba(255,255,255,0.35);font-size:14px;padding-bottom:7px;">/mo</span>
                    </div>
                    <div style="color:rgba(255,255,255,0.3);font-size:12px;margin-top:4px;">Or $1,970/yr (Save 17%)</div>
                </div>
                <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:9px;margin-bottom:28px;flex:1;">
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> All platforms + TikTok</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> 60+ posts/month</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Full community management</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Ad campaign management</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Weekly strategy call</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> Dedicated social manager</li>
                    <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:rgba(255,255,255,0.65);"><span style="color:#CC5500;flex-shrink:0;font-weight:700;">✓</span> All Professional features</li>
                </ul>
                <a href="https://buy.stripe.com/7sYdR9b8kh0bggH0lzfQI2y" target="_blank" rel="noopener noreferrer" style="display:block;text-align:center;padding:14px 0;border-radius:12px;font-size:14px;font-weight:700;text-decoration:none;background:transparent;color:#CC5500;border:1.5px solid rgba(204, 85, 0,0.4);">Get Started →</a>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
        <div class="section-header" style="margin-bottom: 0;">
            <h2>Ready to Scale Your <span>Social Presence?</span></h2>
            <p>Join marketing teams managing millions of impressions with unified workflows and real-time analytics.</p>
            
            <div class="cta-buttons">
                <a href="https://calendly.com/orengenio/30min" target="_blank" rel="noopener noreferrer" class="button">
                    <div class="dots_border"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="sparkle">
                        <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"></path>
                        <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"></path>
                        <path class="path" stroke-linejoin="round" stroke-linecap="round" stroke="black" fill="black" d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"></path>
                    </svg>
                    <span class="text_button">Book A Meeting</span>
                </a>
            </div>
        </div>
    </section>

</div>
` }} />
  );
}
