"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const trustLinks = [
  { href: "https://www.bbb.org/us/tx/mansfield/profile/computer-software/orengen-worldwide-0825-1000236185/customer-reviews", icon: "Better-Business-Bureau-Reviews.png", label: "BBB" },
  { href: "https://g.page/r/CcTOiNDyo03PEBM/review", icon: "6980242c66e7ca8c84cce4b8.svg", label: "Google", isGoogle: true },
  { href: "https://www.trustpilot.com/review/orengen.io", icon: "6980251966e7ca0123cd2a56.svg", label: "Trustpilot" },
  { href: "https://clutch.co/profile/orengen-worldwide", icon: "69802a6a1fd8278b3c8c75e6.svg", label: "Clutch" },
  { href: "https://www.g2.com/products/orengen/reviews", icon: "698026301311f6be3e8f43f1.svg", label: "G2" },
  { href: "https://www.g2.com/products/orengen/reviews", icon: "Capterra-Reviews.png", label: "Capterra" },
];

const footerColumns = [
  {
    title: "Solutions",
    links: [
      { name: "OrenAgents", href: "/orenagents" },
      { name: "OrenNexus", href: "/orennexus" },
      { name: "OrenWeb", href: "/orenweb" },
      { name: "OrenSocial", href: "/orensocial" },
      { name: "OrenCustoms", href: "/orencustoms" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Integrations", href: "/integrations" },
      { name: "Support", href: "/support" },
      { name: "FAQs", href: "/faqs" },
      { name: "Pricing", href: "/pricing" },
    ]
  },
  {
    title: "Partnerships",
    links: [
      { name: "Sales Partners", href: "/salespartners" },
      { name: "Program Differences", href: "/program-differences" },
      { name: "Legal Disclaimers", href: "/legal-disclaimers" },
    ]
  },
  {
    title: "Productivity",
    links: [
      { name: "Google Workspace", href: "https://workspace.google.com", external: true },
      { name: "Eleven Labs", href: "https://elevenlabs.io", external: true },
      { name: "Tech Banking", href: "/tech-banking", external: true },
      { name: "Nav Business Credit", href: "https://www.nav.com", external: true },
      { name: "N8N Automation", href: "https://n8n.partnerlinks.io/orengenio", external: true },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Acceptable Use", href: "/acceptable-use" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "Copyright Notice", href: "/copyright-notice" },
      { name: "Refund Policy", href: "/refund-policy" },
    ]
  }
];

export function Footer() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  return (
    <footer className="og-footer" aria-label="OrenGen Worldwide Footer">
      {/* Trust Bar */}
      <section className="og-trust-bar">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="og-trust-label mb-6 text-[10px] font-bold tracking-[3px] uppercase opacity-50">★★★★★ Please Review Us And Share Your Experience ★★★★★</div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {trustLinks.map((link, i) => (
              <a key={i} href={link.href} target="_blank" rel="noopener" className="og-trust-item group opacity-60 hover:opacity-100 transition-opacity">
                <img 
                  src={link.isGoogle || link.label === "Trustpilot" || link.label === "Clutch" || link.label === "G2"
                    ? `https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/${link.icon}`
                    : `https://blog.orengen.io/wp-content/uploads/2026/02/${link.icon}`
                  } 
                  alt={link.label} 
                  className="og-trust-icon grayscale group-hover:grayscale-0" 
                  width="20" height="20" 
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6">
        {/* Brand Section */}
        <div className="og-brand-section">
          <Link href="/">
            <img 
              src="https://blog.orengen.io/wp-content/uploads/2026/03/OrenGen-Logo-Banner-BO-and-Blk-TP.png" 
              alt="OrenGen Worldwide" 
              className="og-footer-logo" 
              width="320" 
            />
          </Link>

          {/* Tagline */}
          <div className="og-fuse-container mt-8">
            <div className="og-tagline-box py-3 px-8 rounded-full border">
              <div className="og-tagline text-xs font-bold tracking-[4px]">
                <span className="text-burnt-orange">ONLINE EVERYWHERE</span> | ORENGENIO
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-8">
            {["linkedin", "twitter", "instagram", "facebook", "github", "youtube"].map((social) => (
              <Link key={social} href={`https://${social}.com/orengenio`} className="og-social-link w-10 h-10 flex items-center justify-center rounded-xl border">
                <div className="w-4 h-4 bg-current opacity-20 rounded-sm" />
              </Link>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        <div className="og-columns-grid py-16 grid grid-cols-2 md:grid-cols-5 gap-12">
          {footerColumns.map((col) => (
            <div key={col.title} className="og-col">
              <h4 className="og-col-title text-[11px] font-black uppercase tracking-widest mb-6 inline-block pb-2 border-b-2 border-burnt-orange">{col.title}</h4>
              <ul className="flex flex-col gap-4">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm font-medium transition-colors hover:text-burnt-orange"
                    >
                      {link.name}
                      {link.external && <span className="ml-1 text-[10px] opacity-30">↗</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="og-bottom-bar flex flex-col md:flex-row items-center justify-between gap-8 border-t border-black/5">
          <div className="text-xs font-medium opacity-50">&copy; 2025–26 OrenGen Worldwide LLC. All rights reserved.</div>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-wider opacity-60">
            <Link href="/privacy-policy" className="hover:text-burnt-orange transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-burnt-orange transition-colors">Terms</Link>
            <Link href="/cookie-policy" className="hover:text-burnt-orange transition-colors">Cookies</Link>
          </div>
          <div className="og-payment">
            <img 
              src="https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/6791244f0b72a6320088cb39.png" 
              alt="Payment Methods" 
              className="h-8 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
