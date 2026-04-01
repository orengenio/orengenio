"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const trustLinks = [
  { label: "BBB", icon: "https://blog.orengen.io/wp-content/uploads/2026/02/Better-Business-Bureau-Reviews.png", href: "https://www.bbb.org/us/tx/mansfield/profile/computer-software/orengen-worldwide-0825-1000236185/customer-reviews" },
  { label: "Google", icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/6980242c66e7ca8c84cce4b8.svg", href: "https://g.page/r/CcTOiNDyo03PEBM/review" },
  { label: "Trustpilot", icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/6980251966e7ca0123cd2a56.svg", href: "https://www.trustpilot.com/review/orengen.io" },
  { label: "Clutch", icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/69802a6a1fd8278b3c8c75e6.svg", href: "https://clutch.co/profile/orengen-worldwide" },
  { label: "G2", icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/698026301311f6be3e8f43f1.svg", href: "https://www.g2.com/products/orengen/reviews" },
];

const footerColumns = [
  {
    title: "Solutions",
    links: [
      { name: "OrenAgents", href: "/orenagents" },
      { name: "OrenNexus", href: "/orennexus" },
      { name: "OrenChatbots", href: "/orenchatbots" },
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
      { name: "Support", href: "/support" },
      { name: "FAQs", href: "/faqs" },
      { name: "Pricing", href: "/pricing" },
    ]
  },
  {
    title: "Partnerships",
    links: [
      { name: "Sales Partners", href: "/salespartners" },
      { name: "Affiliates", href: "/affiliates" },
      { name: "Program", href: "/program-differences" },
      { name: "Capital Affiliates", href: "/capital-affiliates" },
      { name: "Legal Disclaimers", href: "/legal-disclaimers" },
    ]
  },
  {
    title: "Productivity",
    links: [
      { name: "Google Workspace", href: "https://workspace.google.com", ext: true },
      { name: "Eleven Labs", href: "https://elevenlabs.io", ext: true },
      { name: "N8N Automation", href: "https://n8n.partnerlinks.io/orengenio", ext: true },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Acceptable Use", href: "/acceptable-use" },
      { name: "Partner Terms", href: "/affiliate-partner-terms-and-conditions" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "GDPR Compliance", href: "/gdpr-compliance" },
      { name: "Security", href: "/security-overview" },
    ]
  }
];

export function Footer() {
  const fuseRef = useRef(null);
  const isInView = useInView(fuseRef, { once: true, amount: 0.5 });
  const [ignited, setIgnited] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIgnited(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-white/5 pt-0">
      {/* Trust Bar */}
      <div className="bg-[#050505] border-b border-white/5 py-8 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase mb-6">
            ★★★★★ PLEASE REVIEW US AND SHARE YOUR EXPERIENCE ★★★★★
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            {trustLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                target="_blank" 
                rel="noopener" 
                className="group flex items-center space-x-2 grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100"
              >
                <img src={link.icon} alt={link.label} className="h-5 w-auto" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6">
        {/* Brand Section */}
        <div className="py-16 flex flex-col items-center text-center space-y-8">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="OrenGen Worldwide" 
              width={400} 
              height={44} 
              className="h-11 w-auto brightness-95 hover:brightness-100 transition-all"
            />
          </Link>

          {/* Fuse Ignition Tagline */}
          <div ref={fuseRef} className="relative w-full max-w-2xl py-8">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/5 -translate-y-1/2 overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 3, ease: "easeIn" }}
                className="h-full bg-gradient-to-r from-transparent via-burnt-orange to-white shadow-[0_0_15px_#CC5500]"
              />
            </div>
            
            <div className={`relative inline-block px-10 py-3 rounded-xl border transition-all duration-1000 ${ignited ? 'border-burnt-orange/50 shadow-[0_0_40px_rgba(204,85,0,0.2)] bg-background' : 'border-white/5 bg-transparent'}`}>
              <p className={`text-sm font-black tracking-[0.4em] uppercase transition-colors duration-1000 ${ignited ? 'text-white' : 'text-white/20'}`}>
                ONLINE EVERYWHERE | ORENGENIO
              </p>
              {ignited && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-burnt-orange/5 to-terracotta/5 pointer-events-none"
                />
              )}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            {[
              { href: "https://www.linkedin.com/company/orengenio", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
              { href: "https://x.com/orengenio", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              { href: "https://www.instagram.com/orengenio", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                className="p-3 rounded-full border border-white/5 hover:border-burnt-orange/50 hover:bg-burnt-orange/5 transition-all group"
              >
                <svg className="h-4 w-4 fill-white/40 group-hover:fill-burnt-orange transition-colors" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 py-16 border-y border-white/5">
          {footerColumns.map((col, i) => (
            <div key={i} className="space-y-6">
              <h5 className="text-[11px] font-black uppercase tracking-[0.2em] text-white flex items-center">
                <span className="w-4 h-[2px] bg-burnt-orange mr-3" />
                {col.title}
              </h5>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      href={link.href} 
                      target={link.ext ? "_blank" : undefined}
                      className="text-sm font-medium text-white/50 hover:text-burnt-orange transition-colors"
                    >
                      {link.name} {link.ext && " ↗"}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-bold text-white/20 uppercase tracking-[0.3em]">
            © 2025–26 OrenGen Worldwide LLC. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="/privacy-policy" className="text-xs font-bold text-white/20 hover:text-burnt-orange transition-colors uppercase tracking-widest">Privacy</Link>
            <Link href="/terms" className="text-xs font-bold text-white/20 hover:text-burnt-orange transition-colors uppercase tracking-widest">Terms</Link>
            <Link href="https://orengen-status-page.instatus.com" className="text-xs font-bold text-white/20 hover:text-burnt-orange transition-colors uppercase tracking-widest">Status</Link>
          </div>
          <img 
            src="https://blog.orengen.io/wp-content/uploads/2026/01/Payment.png" 
            alt="Payment Methods" 
            className="h-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
          />
        </div>
      </div>
    </footer>
  );
}
