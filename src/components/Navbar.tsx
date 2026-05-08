"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { OFFICIAL_LOGO_WHITE_URL } from "@/lib/brandAssets";
const solutionColumns = [
  {
    title: "Autonomous Workforce",
    badge: "Core",
    badgeClass: "core",
    colClass: "core",
    items: [
      { name: "OrenAgents Voice", desc: "Buy-Lingual™ conversational AI for calls.", href: "/orenagents" },
      { name: "OrenAgents Employees", desc: "Hire autonomous multi-agent departments.", href: "/orenagents" },
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
      { name: "OrenAutomations", desc: "Visual workflow automation, zero code.", href: "/orenautomations" },
    ],
  },
  {
    title: "Digital Presence",
    badge: "Add-On",
    badgeClass: "addon",
    colClass: "addon",
    items: [
      { name: "OrenWeb Design", desc: "High-performance bespoke development.", href: "/orenweb" },
      { name: "OrenWeb Talk", desc: "Websites integrated with voice AI concierges.", href: "/orenweb" },
    ],
  },
  {
    title: "Enterprise",
    badge: "Add-On",
    badgeClass: "addon",
    colClass: "addon",
    items: [{ name: "OrenConsulting", desc: "Fractional C-suite + custom AI engineering.", href: "/orenconsulting" }],
  },
  {
    title: "Infrastructure",
    badge: "Add-On",
    badgeClass: "addon",
    colClass: "addon",
    items: [
      { name: "OrenMail", desc: "Bulk email + campaign automation on your domain.", href: "/orenmail" },
      { name: "OrenBase", desc: "Backend-as-a-service: auth, DB, storage, functions.", href: "/orenbase" },
      { name: "OrenForms", desc: "Smart forms, surveys, NPS with AI scoring.", href: "/orenforms" },
      { name: "OrenFlow", desc: "Visual LLM orchestration and RAG builder.", href: "/orenflow" },
      { name: "OrenObserve", desc: "LLM observability, cost, and evals.", href: "/orenobserve" },
    ],
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
      <div className="oren-nav-shell">
        <nav className="oren-nav">
          <Link className="oren-logo" href="/">
            <img
              src={OFFICIAL_LOGO_WHITE_URL}
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
            <Link className="oren-cta" href="#demo">Try AI Agent</Link>
          </div>

          <button
            ref={buttonRef}
            className="oren-mobile-btn"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
            <Link href="#demo" className="oren-cta" onClick={() => setMobileOpen(false)}>Try AI Agent</Link>
            <Link href="https://app.orengen.io" className="oren-login-mobile" onClick={() => setMobileOpen(false)}>Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}
