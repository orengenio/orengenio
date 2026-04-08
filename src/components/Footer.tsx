"use client";

import { useState } from "react";
import Link from "next/link";

const trustLinks = [
  { href: "https://www.bbb.org/us/tx/mansfield/profile/computer-software/orengen-worldwide-0825-1000236185/customer-reviews", icon: "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/Better-Business-Bureau-Reviews.png", label: "BBB" },
  { href: "https://g.page/r/CcTOiNDyo03PEBM/review", icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/6980242c66e7ca8c84cce4b8.svg", label: "Google" },
  { href: "https://www.trustpilot.com/review/orengen.io", icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/6980251966e7ca0123cd2a56.svg", label: "Trustpilot" },
  { href: "https://clutch.co/profile/orengen-worldwide", icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/69802a6a1fd8278b3c8c75e6.svg", label: "Clutch" },
  { href: "https://www.g2.com/products/orengen/reviews", icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/698026301311f6be3e8f43f1.svg", label: "G2" },
  { href: "https://www.g2.com/products/orengen/reviews", icon: "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/Capterra-Reviews.png", label: "Capterra" },
];

type InternalLink = { name: string; href: string };
// ⚠️ AFFILIATE LINKS — external: true is REQUIRED. Never remove it or replace tracking URLs with plain URLs.
type AffiliateLink = { name: string; href: string; external: true };

// ⚠️ AFFILIATE LINKS — do NOT replace these hrefs with plain domain URLs.
// These are tracked affiliate/referral URLs that generate revenue. Replacing them breaks tracking.
const affiliateLinks: AffiliateLink[] = [
  { name: "Google Workspace",        href: "https://referworkspace.app.goo.gl/iQuV",              external: true },
  { name: "N8N Automation",          href: "https://n8n.partnerlinks.io/orengenio",                external: true },
  { name: "Eleven Labs",             href: "https://try.elevenlabs.io/orengenio",                  external: true },
  { name: "Banking for Techies",     href: "https://mercury.com/r/orengenworldwide",               external: true },
  { name: "Nav Business Credit",     href: "https://nav.nkwcmr.net/c/6210768/1813107/2410",        external: true },
  { name: "Custom E-Signature",      href: "https://www.customesignature.com/?via=orengenio",      external: true },
  { name: "Custom Affiliate Software", href: "https://www.partnero.com?aff=orengenio",             external: true },
];

const footerColumns: Array<{ title: string; links: Array<InternalLink | AffiliateLink> }> = [
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
    links: affiliateLinks,
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
  return (
    <footer className="og-footer bg-white text-black" aria-label="OrenGen Worldwide Footer">
      {/* Trust Bar */}
      <section className="og-trust-bar py-12 border-b border-black/5 bg-[#F8FAFE]">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="og-trust-label mb-10 text-[11px] font-black tracking-[4px] uppercase text-black/60">★★★★★ PLEASE REVIEW US AND SHARE YOUR EXPERIENCE ★★★★★</div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {trustLinks.map((link, i) => (
              <a key={i} href={link.href} target="_blank" rel="noopener" className="og-trust-item transition-transform hover:scale-110">
                <img 
                  src={link.icon} 
                  alt={link.label} 
                  className="h-6 w-auto object-contain" 
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6">
        {/* Brand Section */}
        <div className="og-brand-section flex flex-col items-center py-16">
          <Link href="/">
            <img 
              src="https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/U95jP6KTuXOCdXDuQM1UmUfgzMcecV7mpVpQgMxI.png" 
              alt="OrenGen Worldwide" 
              className="og-footer-logo" 
              width="380" 
            />
          </Link>

          {/* Tagline Box with FIRE */}
          <div className="og-fuse-container mt-12">
            <div className="og-tagline-box ignited">
              <div className="og-tagline uppercase">
                <span className="text-[#CC5500]">ONLINE EVERYWHERE</span> | ORENGENIO
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-12">
            {[
              { id: 'linkedin', url: 'https://linkedin.com/company/orengenio' },
              { id: 'twitter', url: 'https://twitter.com/orengenio' },
              { id: 'instagram', url: 'https://instagram.com/orengenio' },
              { id: 'facebook', url: 'https://facebook.com/orengenio' },
              { id: 'github', url: 'https://github.com/orengenio' },
              { id: 'youtube', url: 'https://youtube.com/@orengenio' }
            ].map((social) => (
              <Link key={social.id} href={social.url} className="w-11 h-11 flex items-center justify-center rounded-xl border border-black/10 hover:border-[#CC5500] hover:bg-[#CC5500]/5 transition-all">
                <img src={`https://cdn.simpleicons.org/${social.id}/000000`} className="w-5 h-5" alt={social.id} />
              </Link>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        <div className="og-columns-grid py-20 grid grid-cols-2 md:grid-cols-5 gap-12 border-t border-black/5">
          {footerColumns.map((col) => (
            <div key={col.title} className="og-col">
              <h4 className="og-col-title text-[11px] font-black uppercase tracking-widest mb-8 inline-block pb-1 border-b-2 border-[#CC5500]">{col.title}</h4>
              <ul className="flex flex-col gap-4">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-[13px] font-bold text-black hover:text-[#CC5500] transition-colors"

        {/* Bottom Bar */}
        <div className="og-bottom-bar py-12 flex flex-col md:flex-row items-center justify-between gap-10 border-t border-black/5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-black/50">© 2025–26 OrenGen Worldwide LLC. All rights reserved.</div>
          
          <div className="og-payment flex items-center gap-6">
             <span className="text-[10px] font-black uppercase tracking-widest text-black/40 mr-2">Accepted Payment Methods</span>
             <img 
              src="https://blog.orengen.io/wp-content/uploads/2026/01/Payment.png" 
              alt="Payment Methods" 
              className="h-6 w-auto grayscale brightness-0"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-widest text-black/50">
            <Link href="/privacy-policy" className="hover:text-[#CC5500] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#CC5500] transition-colors">Terms</Link>
            <Link href="/cookie-policy" className="hover:text-[#CC5500] transition-colors">Cookies</Link>
            <Link href="/ai-communications-opt-in" className="hover:text-[#CC5500] transition-colors">AI Opt-In</Link>
            <Link href="/sitemap.xml" className="hover:text-[#CC5500] transition-colors">Sitemap</Link>
            <Link href="https://status.orengen.io" className="hover:text-[#CC5500] transition-colors" target="_blank">Site Status</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
