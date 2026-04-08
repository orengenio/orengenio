"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const solutionColumns = [
  {
    title: "Autonomous Workforce",
    badge: "Core",
    badgeClass: "core",
    colClass: "core",
    items: [
      { name: "OrenAgents Voice", desc: "Buy-Lingual™ conversational AI for calls.", href: "/orenagents-voice" },
      { name: "OrenAgents Employees", desc: "Hire autonomous multi-agent departments.", href: "/orenagents-workforce" },
    ],
  },
  {
    title: "Growth & Automation",
    badge: "Core",
    badgeClass: "core",
    colClass: "core",
    items: [
      { name: "OrenNexus", desc: "Unified CRM and automation command center.", href: "/orennexus" },
      { name: "OrenSocial", desc: "AI-powered social media and content scheduling.", href: "/orensocial" },
    ],
  },
  {
    title: "Digital Presence",
    badge: "Add-On",
    badgeClass: "addon",
    colClass: "addon",
    items: [
      { name: "OrenWeb Design", desc: "High-performance bespoke development.", href: "/orenweb-design" },
      { name: "OrenWeb Talk", desc: "Websites integrated with voice AI concierges.", href: "/orenweb-talk" },
    ],
  },
  {
    title: "Enterprise",
    badge: "Add-On",
    badgeClass: "addon",
    colClass: "addon",
    items: [{ name: "OrenCustoms", desc: "Bespoke AI engineering for scale.", href: "/orencustoms" }],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!mobileOpen) return;
      const target = e.target as Node;
      if (panelRef.current?.contains(target) || buttonRef.current?.contains(target)) return;
      setMobileOpen(false);
    };

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [mobileOpen]);

  return (
    <>
      <style jsx>{`
        :global(:root){--oren-deep:#0B1D3A;--oren-rich:#0F2847;--oren-edge:#081628;--oren-close:#0D2240;--oren-orange:#CC5500;--oren-terra:#E2725B;--oren-white:#F0F4FA;--oren-sub:rgba(210,225,245,.6);--oren-glass:rgba(11,29,58,.94);--oren-line:rgba(204,85,0,.16);--oren-line-subtle:rgba(255,255,255,.06);--oren-shadow:0 12px 40px rgba(0,0,0,.32);--oren-shadow-lg:0 20px 50px rgba(0,0,0,.4);--oren-radius:999px;--oren-radius-panel:22px;--nav-height:72px;--nav-top:16px}
        .oren-nav-shell{position:fixed;top:var(--nav-top);left:50%;transform:translateX(-50%);width:min(1240px,calc(100% - 32px));z-index:99999}
        .oren-nav{display:grid;grid-template-columns:minmax(180px,260px) 1fr auto;align-items:center;column-gap:20px;height:var(--nav-height);padding:0 18px 0 22px;background:var(--oren-glass);backdrop-filter:blur(20px);border:1px solid var(--oren-line);border-radius:var(--oren-radius);box-shadow:var(--oren-shadow)}
        .oren-logo{display:flex;align-items:center;max-width:260px}.oren-logo img{display:block;height:42px !important;width:auto !important;max-width:100%;object-fit:contain}
        .oren-center{display:flex;align-items:center;justify-content:center;gap:4px;min-width:0}
        .oren-link,.oren-trigger{border:none;background:transparent;color:rgba(240,244,250,.85);text-decoration:none;font-size:15px;font-weight:500;height:42px;padding:0 14px;border-radius:var(--oren-radius);display:inline-flex;align-items:center;gap:6px;white-space:nowrap;cursor:pointer;transition:color .2s,background .2s}
        .oren-link:hover,.oren-trigger:hover,.oren-item:hover>.oren-trigger{color:#fff;background:rgba(255,255,255,.06)}
        .oren-caret{font-size:9px;opacity:.6;transition:transform .25s ease}.oren-item:hover .oren-caret{transform:rotate(180deg)}
        .oren-right{display:flex;align-items:center;gap:6px}
        .oren-login{color:rgba(240,244,250,.85);text-decoration:none;font-size:14px;font-weight:500;height:40px;padding:0 14px;display:inline-flex;align-items:center;border-radius:var(--oren-radius);transition:color .2s,background .2s}
        .oren-login:hover{background:rgba(255,255,255,.06);color:#fff}
        .oren-cta{text-decoration:none;color:#fff!important;background:var(--oren-orange);min-height:44px;padding:0 24px;border-radius:var(--oren-radius);display:inline-flex;align-items:center;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;white-space:nowrap;box-shadow:0 6px 18px rgba(204,85,0,.25);transition:transform .2s,box-shadow .2s,background .2s}
        .oren-cta:hover{transform:translateY(-1px);background:var(--oren-terra);box-shadow:0 8px 26px rgba(204,85,0,.35)}
        .oren-item{position:relative}
        .oren-mega{position:absolute;top:calc(100% + 18px);left:50%;transform:translateX(-50%) translateY(6px);width:min(1040px,calc(100vw - 40px));background:rgba(8,22,40,.97);border:1px solid var(--oren-line);border-radius:var(--oren-radius-panel);box-shadow:var(--oren-shadow-lg);padding:18px;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .22s ease,transform .22s ease,visibility .22s}
        .oren-item:hover .oren-mega{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) translateY(0)}
        .oren-mega-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
        .oren-col{padding:14px;border-radius:16px}.oren-col.core{background:rgba(255,255,255,.025);border:1px solid var(--oren-line-subtle)}.oren-col.addon{background:rgba(204,85,0,.04);border:1px solid rgba(204,85,0,.1)}
        .oren-col-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid var(--oren-line-subtle)}
        .oren-col-title{color:var(--oren-orange);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
        .oren-badge{min-height:20px;padding:0 8px;border-radius:var(--oren-radius);display:inline-flex;align-items:center;font-size:9px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:rgba(240,244,250,.65)}
        .oren-badge.core{background:rgba(255,255,255,.06)}.oren-badge.addon{background:rgba(204,85,0,.14);color:var(--oren-orange)}
        .oren-menu-link{display:block;text-decoration:none;padding:10px 12px;border-radius:12px;border:1px solid transparent;transition:background .2s,border-color .2s}.oren-menu-link:hover{background:rgba(255,255,255,.04);border-color:var(--oren-line-subtle)}.oren-menu-link+.oren-menu-link{margin-top:4px}
        .oren-menu-name{display:block;color:#fff;font-size:14px;font-weight:600;line-height:1.3;margin-bottom:3px}.oren-menu-desc{display:block;color:var(--oren-sub);font-size:12px;line-height:1.45}
        .oren-mobile-btn{display:none;border:none;background:rgba(255,255,255,.06);color:#fff;width:42px;height:42px;border-radius:var(--oren-radius);align-items:center;justify-content:center;cursor:pointer;font-size:18px}
        .oren-mobile-panel{display:none;position:fixed;top:calc(var(--nav-top) + var(--nav-height) + 10px);left:50%;transform:translateX(-50%);width:min(1240px,calc(100% - 32px));z-index:99998}
        .oren-mobile-panel.show{display:block;animation:panelSlideIn .25s ease-out both}
        .oren-mobile-card{background:var(--oren-glass);backdrop-filter:blur(24px);border:1px solid var(--oren-line);border-radius:var(--oren-radius-panel);box-shadow:var(--oren-shadow-lg);padding:8px;overflow-y:auto;max-height:calc(100vh - var(--nav-top) - var(--nav-height) - 28px)}
        .oren-mobile-link,.oren-mobile-trigger{color:var(--oren-white);text-decoration:none;font-size:16px;display:flex;align-items:center;height:50px;padding:0 18px;border-radius:14px}
        .oren-mobile-link{font-weight:600}.oren-mobile-trigger{border:none;background:transparent;color:var(--oren-orange);font-weight:700;gap:8px;width:100%;cursor:pointer}
        .oren-mobile-trigger-caret{font-size:12px;transition:transform .3s ease}.oren-mobile-trigger-caret.flipped{transform:rotate(180deg)}
        .oren-accordion-panel{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s ease}.oren-accordion-panel.open{grid-template-rows:1fr}.oren-accordion-inner{overflow:hidden}
        .oren-mobile-group{padding:6px 10px 10px}.oren-mobile-group+.oren-mobile-group{border-top:1px solid var(--oren-line-subtle);margin-top:4px;padding-top:10px}
        .oren-mobile-group-head{display:flex;align-items:center;gap:10px;margin-bottom:8px}.oren-mobile-group-title{color:var(--oren-orange);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
        .oren-mobile-badge{display:inline-flex;align-items:center;min-height:18px;padding:0 8px;border-radius:var(--oren-radius);font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.06em}
        .oren-mobile-badge.core{background:rgba(255,255,255,.08);color:rgba(240,244,250,.65)}.oren-mobile-badge.addon{background:rgba(204,85,0,.14);color:var(--oren-orange)}
        .oren-mobile-service{display:block;text-decoration:none;padding:11px 14px;border-radius:12px}.oren-mobile-service-name{display:block;color:#fff;font-size:15px;font-weight:600}.oren-mobile-service-desc{display:block;color:var(--oren-sub);font-size:12px;line-height:1.4}
        .oren-mobile-divider{height:1px;background:var(--oren-line-subtle);margin:4px 14px}
        .oren-mobile-actions{display:flex;flex-direction:column;gap:8px;padding:6px 8px 8px}.oren-login-mobile{min-height:50px;border-radius:14px;background:rgba(255,255,255,.05);border:1px solid var(--oren-line-subtle);color:var(--oren-white);text-decoration:none;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600}
        @media (max-width:1100px){.oren-nav{grid-template-columns:auto auto;justify-content:space-between}.oren-center,.oren-right{display:none}.oren-mobile-btn{display:inline-flex}}
        @keyframes panelSlideIn{from{opacity:0;transform:translateX(-50%) translateY(-8px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
        @media (max-width:640px){:global(:root){--nav-top:10px;--nav-height:64px}.oren-nav-shell,.oren-mobile-panel{width:calc(100% - 16px)}.oren-nav{padding:0 12px 0 16px}.oren-logo img{height:34px}}
      `}</style>

      <div className="oren-nav-shell">
        <nav className="oren-nav">
          <Link className="oren-logo" href="/">
            <img
              src="https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/JkgbWmauRB7suRUl6bVem2msNPATeMS2h4iWgdcR.png"
              alt="OrenGen Worldwide"
            />
          </Link>

          <div className="oren-center">
            <Link className="oren-link" href="#engine">The Engine</Link>
            <div className="oren-item">
              <button className="oren-trigger" type="button">Solutions <span className="oren-caret">▼</span></button>
              <div className="oren-mega">
                <div className="oren-mega-grid">
                  {solutionColumns.map((column) => (
                    <div key={column.title} className={`oren-col ${column.colClass}`}>
                      <div className="oren-col-head">
                        <div className="oren-col-title">{column.title}</div>
                        <span className={`oren-badge ${column.badgeClass}`}>{column.badge}</span>
                      </div>
                      {column.items.map((item) => (
                        <Link key={item.name} href={item.href} className="oren-menu-link">
                          <span className="oren-menu-name">{item.name}</span>
                          <span className="oren-menu-desc">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link className="oren-link" href="#pricing">Pricing</Link>
          </div>

          <div className="oren-right">
            <Link className="oren-login" href="https://app.orengen.io">Login</Link>
            <Link className="oren-cta" href="#demo">Book Demo</Link>
          </div>

          <button
            ref={buttonRef}
            className="oren-mobile-btn"
            aria-label="Open menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </nav>
      </div>

      <div ref={panelRef} className={`oren-mobile-panel ${mobileOpen ? "show" : ""}`}>
        <div className="oren-mobile-card">
          <Link href="#engine" className="oren-mobile-link" onClick={() => setMobileOpen(false)}>The Engine</Link>

          <button className="oren-mobile-trigger" onClick={() => setSolutionsOpen((p) => !p)}>
            Solutions <span className={`oren-mobile-trigger-caret ${solutionsOpen ? "flipped" : ""}`}>▼</span>
          </button>

          <div className={`oren-accordion-panel ${solutionsOpen ? "open" : ""}`}>
            <div className="oren-accordion-inner">
              {solutionColumns.map((column) => (
                <div key={column.title} className="oren-mobile-group">
                  <div className="oren-mobile-group-head">
                    <span className="oren-mobile-group-title">{column.title}</span>
                    <span className={`oren-mobile-badge ${column.badgeClass}`}>{column.badge}</span>
                  </div>
                  {column.items.map((item) => (
                    <Link key={item.name} href={item.href} className="oren-mobile-service" onClick={() => setMobileOpen(false)}>
                      <span className="oren-mobile-service-name">{item.name}</span>
                      <span className="oren-mobile-service-desc">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="oren-mobile-divider" />
          <Link href="#pricing" className="oren-mobile-link" onClick={() => setMobileOpen(false)}>Pricing</Link>
          <div className="oren-mobile-divider" />
          <div className="oren-mobile-actions">
            <Link href="#demo" className="oren-cta" onClick={() => setMobileOpen(false)}>Book Demo</Link>
            <Link href="https://app.orengen.io" className="oren-login-mobile" onClick={() => setMobileOpen(false)}>Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}
