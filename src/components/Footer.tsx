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

type FooterLink = {
  name: string;
  href: string;
  external?: boolean;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const footerColumns: FooterColumn[] = [
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

const paymentIcons = [
  { name: "Visa", url: "https://cdn.simpleicons.org/visa/current" },
  { name: "Mastercard", url: "https://cdn.simpleicons.org/mastercard/current" },
  { name: "Amex", url: "https://cdn.simpleicons.org/americanexpress/current" },
  { name: "PayPal", url: "https://cdn.simpleicons.org/paypal/current" },
  { name: "Stripe", url: "https://cdn.simpleicons.org/stripe/current" },
  { name: "Apple Pay", url: "https://cdn.simpleicons.org/applepay/current" },
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
          <div className="og-trust-label mb-8 text-[10px] font-bold tracking-[3px] uppercase opacity-40">★★★★★ Rated 4.9/5 by industry leaders ★★★★★</div>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {trustLinks.map((link, i) => (
              <a key={i} href={link.href} target="_blank" rel="noopener" className="og-trust-item group opacity-50 hover:opacity-100 transition-all">
                <img 
                  src={link.isGoogle || link.label === "Trustpilot" || link.label === "Clutch" || link.label === "G2"
                    ? `https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/${link.icon}`
                    : `https://orengen.io/wp-content/uploads/2026/02/${link.icon}`
                  } 
                  alt={link.label} 
                  className="og-trust-icon grayscale group-hover:grayscale-0 h-5 w-auto" 
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
              src="https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/GDFiuJWunF3ONupIrOtSqWBlqpIx79Cxvvut9s7p.png" 
              alt="OrenGen Worldwide" 
              className="og-footer-logo" 
              width="320" 
            />
          </Link>

          {/* Tagline */}
          <div className="og-fuse-container mt-10">
            <div className="og-tagline-box py-3.5 px-10 rounded-full border border-black/5 bg-white shadow-sm">
              <div className="og-tagline text-[10px] font-black tracking-[5px] uppercase">
                <span className="text-burnt-orange">ONLINE EVERYWHERE</span> | ORENGENIO
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-10">
            {["linkedin", "twitter", "instagram", "facebook", "github", "youtube"].map((social) => (
              <Link key={social} href={`https://${social}.com/orengenio`} className="og-social-link w-11 h-11 flex items-center justify-center rounded-xl border border-black/5 hover:bg-burnt-orange/5 hover:border-burnt-orange/30 transition-all">
                <img src={`https://cdn.simpleicons.org/${social}/0B1D3A`} className="w-5 h-5 opacity-70" alt={social} />
              </Link>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        <div className="og-columns-grid py-20 grid grid-cols-2 md:grid-cols-5 gap-12 border-b border-black/5">
          {footerColumns.map((col) => (
            <div key={col.title} className="og-col">
              <h4 className="og-col-title text-[11px] font-black uppercase tracking-widest mb-8 inline-block pb-2 border-b-2 border-burnt-orange">{col.title}</h4>
              <ul className="flex flex-col gap-5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-[13px] font-semibold text-blue-950/70 transition-colors hover:text-burnt-orange"
                    >
                      {link.name}
                      {link.external && <span className="ml-1.5 text-[9px] opacity-30">↗</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="og-bottom-bar py-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-[11px] font-bold uppercase tracking-wider text-blue-950/40">&copy; 2025–26 OrenGen Worldwide LLC. All rights reserved.</div>
          
          <div className="og-payment flex items-center gap-5 opacity-40">
            {paymentIcons.map(icon => (
              <img key={icon.name} src={icon.url} alt={icon.name} className="h-4 w-auto grayscale" title={icon.name} />
            ))}
          </div>

          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-blue-950/50">
            <Link href="/privacy-policy" className="hover:text-burnt-orange transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-burnt-orange transition-colors">Terms</Link>
            <Link href="/cookie-policy" className="hover:text-burnt-orange transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
