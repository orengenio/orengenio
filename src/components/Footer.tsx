"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const trustLinks = [
  { label: "BBB",              href: "https://www.bbb.org/us/tx/mansfield/profile/computer-software/orengen-worldwide-0825-1000236185/customer-reviews", icon: "https://blog.orengen.io/wp-content/uploads/2026/02/Better-Business-Bureau-Reviews.png" },
  { label: "Google",           href: "https://g.page/r/CcTOiNDyo03PEBM/review",                                                                          icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/6980242c66e7ca8c84cce4b8.svg" },
  { label: "Trustpilot",       href: "https://www.trustpilot.com/review/orengen.io",                                                                      icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/6980251966e7ca0123cd2a56.svg" },
  { label: "Clutch",           href: "https://clutch.co/profile/orengen-worldwide",                                                                       icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/69802a6a1fd8278b3c8c75e6.svg" },
  { label: "G2",               href: "https://www.g2.com/products/orengen/reviews",                                                                       icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/698026301311f6be3e8f43f1.svg" },
  { label: "Capterra",         href: "https://www.g2.com/products/orengen/reviews",                                                                       icon: "https://blog.orengen.io/wp-content/uploads/2026/02/Capterra-Reviews.png" },
  { label: "Product Hunt",     href: "https://www.producthunt.com/products/orengen",                                                                      icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/698027b41f68d16b0bec4572.svg" },
  { label: "SourceForge",      href: "https://sourceforge.net/software/product/orengen/",                                                                 icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/698027b41311f6008a8fb68f.svg" },
  { label: "SiteJabber",       href: "https://www.sitejabber.com/reviews/orengen.io",                                                                     icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/69802b0f1311f6295190d8c8.svg" },
  { label: "TrustRadius",      href: "https://www.trustradius.com/products/orengen/reviews",                                                              icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/69802cbc1f68d13edcee1232.svg" },
  { label: "Software Suggest", href: "https://www.softwaresuggest.com/orengen",                                                                           icon: "https://blog.orengen.io/wp-content/uploads/2026/02/Software-Suggest-Reviews.png" },
];

const socials = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/orengenio",   path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { label: "X",         href: "https://x.com/orengenio",                      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "Instagram", href: "https://www.instagram.com/orengenio",          path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { label: "Facebook",  href: "https://www.facebook.com/orengenio",           path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { label: "GitHub",    href: "https://github.com/orengenio",                 path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
  { label: "YouTube",   href: "https://www.youtube.com/@orengenio",           path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { label: "TikTok",    href: "https://tiktok.com/@orengenio",                path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
];

const TAGLINE_CHARS: Array<{ char: string; seg: "online" | "pipe" | "brand" }> = [
  ...Array.from("ONLINE EVERYWHERE ").map((c) => ({ char: c, seg: "online" as const })),
  { char: "|", seg: "pipe" },
  { char: " ", seg: "brand" },
  ...Array.from("ORENGENIO").map((c) => ({ char: c, seg: "brand" as const })),
];

const footerColumns = [
  {
    title: "Solutions",
    links: [
      { name: "OrenAgents",   href: "/orenagents" },
      { name: "OrenNexus",    href: "/orennexus" },
      { name: "OrenChatbots", href: "/orenchatbots" },
      { name: "OrenWeb",      href: "/orenweb" },
      { name: "OrenSocial",   href: "/orensocial" },
      { name: "OrenCustoms",  href: "/orencustoms" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About",        href: "/about" },
      { name: "Blog",         href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Integrations", href: "/integrations" },
      { name: "Support",      href: "/support" },
      { name: "FAQs",         href: "/faqs" },
      { name: "Pricing",      href: "/pricing" },
    ],
  },
  {
    title: "Partnerships",
    links: [
      { name: "Sales Partners",      href: "/salespartners" },
      { name: "Affiliates",          href: "/affiliates" },
      { name: "Program Differences", href: "/program-differences" },
      { name: "Capital Affiliates",  href: "/capital-affiliates" },
      { name: "Legal Disclaimers",   href: "/legal-disclaimers" },
    ],
  },
  {
    title: "Productivity",
    links: [
      { name: "Google Workspace",     href: "https://workspace.google.com",                    ext: true },
      { name: "Eleven Labs",          href: "https://elevenlabs.io",                           ext: true },
      { name: "Tech Banking",         href: "/tech-banking" },
      { name: "Nav Business Credit",  href: "https://www.nav.com",                             ext: true },
      { name: "N8N Automation",       href: "https://n8n.partnerlinks.io/orengenio",           ext: true },
      { name: "Animated Esignatures", href: "https://www.customesignature.com/?via=orengenio", ext: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Acceptable Use",            href: "/acceptable-use" },
      { name: "Affiliate & Partner Terms", href: "/affiliate-partner-terms-and-conditions" },
      { name: "Cookie Policy",             href: "/cookie-policy" },
      { name: "Copyright Notice",          href: "/copyright-notice" },
      { name: "Disclaimers",               href: "/legal-disclaimers" },
      { name: "Refund Policy",             href: "/refund-policy" },
      { name: "Security Overview",         href: "/security-overview" },
      { name: "Trademark",                 href: "/trademark-policy" },
      { name: "GDPR Compliance",           href: "/gdpr-compliance" },
    ],
  },
];

const bottomLinks = [
  { name: "Privacy",     href: "/privacy-policy" },
  { name: "Terms",       href: "/terms" },
  { name: "Cookies",     href: "/cookie-policy" },
  { name: "AI Opt-In",   href: "/ai-communications-opt-in" },
  { name: "Sitemap",     href: "/sitemap.xml" },
  { name: "Site Status", href: "https://orengen-status-page.instatus.com", ext: true },
];

const flameTips = [
  { top: "-12px", left: "15%" },
  { top: "-12px", left: "35%" },
  { top: "-12px", left: "55%" },
  { top: "-12px", left: "75%" },
  { top: "-12px", left: "90%" },
  { bottom: "-12px", left: "25%", transform: "rotate(180deg)" },
];

// ─── Spark helper (Web Animations API — fine inside useEffect) ───────────────

function spawnSpark(
  container: HTMLElement,
  x: number,
  y: number,
  dx: number,
  dy: number,
  burstColor = false,
) {
  const el = document.createElement("div");
  el.style.cssText = `position:absolute;border-radius:50%;left:${x}px;top:${y}px;pointer-events:none;z-index:3;`;
  container.appendChild(el);
  const COLORS = ["#FFD700", "#FF6A00", "#FF4500", "#FFA500", "#FFFFFF"];
  const color = burstColor ? "#FFD700" : COLORS[Math.floor(Math.random() * COLORS.length)];
  const size = 2 + Math.random() * 3;
  el.animate(
    [
      { opacity: 1, transform: "translate(0,0) scale(1)", background: color, width: size + "px", height: size + "px", boxShadow: `0 0 4px ${color}` },
      { opacity: 0, transform: `translate(${dx}px,${dy}px) scale(0.2)`, background: "#FF4500", width: size + "px", height: size + "px", boxShadow: "0 0 0 transparent" },
    ],
    { duration: 300 + Math.random() * 500, easing: "ease-out", fill: "forwards" },
  ).onfinish = () => el.remove();
}

// ─── Component ───────────────────────────────────────────────────────────────

export function Footer() {
  const fuseRef = useRef<HTMLDivElement>(null);
  const taglineBoxRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(fuseRef, { once: true, amount: 0.3 });
  const fuseStarted = useRef(false);

  const [litChars, setLitChars] = useState<boolean[]>(
    new Array(TAGLINE_CHARS.length).fill(false),
  );
  const [fuseRunning, setFuseRunning] = useState(false);
  const [ignited, setIgnited] = useState(false);
  const [openCol, setOpenCol] = useState<number | null>(null);

  useEffect(() => {
    if (!isInView || fuseStarted.current) return;
    fuseStarted.current = true;
    setFuseRunning(true);

    const FUSE_DELAY = 3000;
    const CHAR_DELAY = 60;
    const container = fuseRef.current;
    const taglineBox = taglineBoxRef.current;

    const t1 = setTimeout(() => {
      TAGLINE_CHARS.forEach((_, idx) => {
        setTimeout(() => {
          setLitChars((prev) => {
            const next = [...prev];
            next[idx] = true;
            return next;
          });
          if (container && taglineBox && idx % 2 === 0) {
            const charEls = taglineBox.querySelectorAll<HTMLElement>("[data-char-idx]");
            const charEl = charEls[idx];
            if (charEl) {
              const br = charEl.getBoundingClientRect();
              const cr = container.getBoundingClientRect();
              const cx = br.left - cr.left + br.width / 2;
              const cy = br.top - cr.top;
              const count = idx % 4 === 0 ? 3 : 1;
              for (let s = 0; s < count; s++) {
                const angle = (-30 - Math.random() * 120) * (Math.PI / 180);
                const dist = 15 + Math.random() * 30;
                spawnSpark(container, cx, cy, Math.cos(angle) * dist, Math.sin(angle) * dist);
              }
            }
          }
        }, idx * CHAR_DELAY);
      });

      const afterChars = TAGLINE_CHARS.length * CHAR_DELAY + 200;

      setTimeout(() => {
        setIgnited(true);

        if (container && taglineBox) {
          // Celebration burst
          for (let s = 0; s < 8; s++) {
            setTimeout(() => {
              const br = taglineBox.getBoundingClientRect();
              const cr = container.getBoundingClientRect();
              spawnSpark(
                container,
                br.left - cr.left + Math.random() * br.width,
                br.top - cr.top,
                (Math.random() - 0.5) * 30,
                -(60 + Math.random() * 40),
                true,
              );
            }, s * 80);
          }

          // Ambient sparks
          const interval = setInterval(() => {
            const br = taglineBox.getBoundingClientRect();
            const cr = container.getBoundingClientRect();
            const edge = Math.floor(Math.random() * 4);
            let x = 0, y = 0, dx = 0, dy = 0;
            switch (edge) {
              case 0: x = Math.random() * br.width;  y = -4;            dx = (Math.random() - 0.5) * 20; dy = -(10 + Math.random() * 20); break;
              case 1: x = br.width + 4;              y = Math.random() * br.height; dx = 10 + Math.random() * 15; dy = (Math.random() - 0.5) * 20; break;
              case 2: x = Math.random() * br.width;  y = br.height + 4; dx = (Math.random() - 0.5) * 20; dy = 10 + Math.random() * 20; break;
              case 3: x = -4;                        y = Math.random() * br.height; dx = -(10 + Math.random() * 15); dy = (Math.random() - 0.5) * 20; break;
            }
            spawnSpark(container, br.left - cr.left + x, br.top - cr.top + y, dx, dy);
          }, 400);

          return () => clearInterval(interval);
        }
      }, afterChars);
    }, FUSE_DELAY);

    return () => clearTimeout(t1);
  }, [isInView]);

  return (
    <footer className="w-full bg-[#0a0a0a]">

      {/* Trust Bar */}
      <div className="border-b border-white/[0.08] bg-[#050505] px-6 py-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[3px] text-white/40">
            ★★★★★ Please Review Us And Share Your Experience ★★★★★
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {trustLinks.map((t) => (
              <a
                key={t.label}
                href={t.href}
                target="_blank"
                rel="noopener"
                aria-label={t.label}
                className="inline-flex items-center gap-2 rounded-[6px] border border-transparent px-3 py-2 transition-all hover:border-white/[0.08] hover:bg-white/[0.04]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.icon}
                  alt={t.label}
                  width={18}
                  height={18}
                  loading="lazy"
                  className="h-[18px] w-[18px] object-contain brightness-90 grayscale-[20%] transition-all hover:brightness-110 hover:grayscale-0"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10">

        {/* Brand Section */}
        <div className="flex flex-col items-center border-b border-white/[0.08] py-14 text-center">
          <a href="https://orengen.io" className="mb-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://blog.orengen.io/wp-content/uploads/2026/03/OrenGen-Logo-Banner-BO-and-White-TP-scaled.png"
              alt="OrenGen Worldwide"
              width={400}
              height={44}
              loading="lazy"
              className="h-11 w-auto brightness-95 transition-all hover:brightness-100"
            />
          </a>

          {/* Fuse Ignition Tagline */}
          <div
            ref={fuseRef}
            className="relative mb-7 flex w-full max-w-2xl justify-center overflow-visible py-4"
          >
            {/* Fuse burn line */}
            <div className="pointer-events-none absolute top-1/2 -left-10 -right-10 h-[2px] -translate-y-1/2">
              <motion.div
                initial={{ width: "0%" }}
                animate={fuseRunning ? { width: "100%" } : {}}
                transition={{ duration: 3, ease: "easeIn" }}
                className="h-full rounded-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(80,40,10,0.6) 0%, rgba(120,60,10,0.8) 70%, #FF6A00 85%, #FFD700 92%, #FFFFFF 100%)",
                }}
              />
            </div>

            {/* Tagline box */}
            <div
              ref={taglineBoxRef}
              className="relative z-[5] inline-block rounded-[8px] px-7 py-3 transition-all duration-1000"
              style={{
                background: "#0a0a0a",
                border: ignited ? "1px solid transparent" : "1px solid rgba(255,255,255,0.06)",
                boxShadow: ignited
                  ? "0 0 15px rgba(255,106,0,0.3), 0 0 30px rgba(204,85,0,0.15), inset 0 0 20px rgba(255,106,0,0.05)"
                  : "none",
                outline: ignited ? "2px solid rgba(204,85,0,0.4)" : "none",
                outlineOffset: "2px",
              }}
            >
              {/* Flame tips */}
              {ignited &&
                flameTips.map((pos, i) => (
                  <span
                    key={i}
                    className="pointer-events-none absolute h-3 w-1.5"
                    style={pos}
                  >
                    <motion.span
                      animate={{ scaleY: [1, 1.4], scaleX: [1, 0.8], opacity: [0.8, 1] }}
                      transition={{
                        duration: 0.4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.05,
                      }}
                      className="absolute bottom-0 left-1/2 block h-[10px] w-1.5 -translate-x-1/2 rounded-[50%_50%_20%_20%]"
                      style={{
                        background:
                          "radial-gradient(ellipse at bottom, #FFD700 0%, #FF6A00 40%, transparent 70%)",
                      }}
                    />
                  </span>
                ))}

              {/* Chars */}
              <span className="relative z-[2] whitespace-nowrap text-[11px] font-bold uppercase tracking-[4px]">
                {TAGLINE_CHARS.map((c, i) => (
                  <span
                    key={i}
                    data-char-idx={i}
                    className="inline-block transition-all duration-[600ms]"
                    style={{
                      opacity: litChars[i] ? 1 : 0.4,
                      color:
                        c.seg === "online"
                          ? "#CC5500"
                          : c.seg === "pipe"
                          ? "#FFD700"
                          : "#ffffff",
                      textShadow: litChars[i]
                        ? c.seg === "online"
                          ? "0 0 10px rgba(204,85,0,0.6), 0 0 30px rgba(204,85,0,0.3)"
                          : c.seg === "pipe"
                          ? "0 0 8px rgba(255,215,0,0.8), 0 0 20px rgba(255,193,7,0.5)"
                          : "0 0 10px rgba(255,255,255,0.5)"
                        : "none",
                    }}
                  >
                    {c.char === " " ? "\u00A0" : c.char}
                  </span>
                ))}
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-1.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
                className="group flex h-[34px] w-[34px] items-center justify-center rounded-[8px] border border-white/[0.08] transition-all hover:border-[#CC5500] hover:bg-[#CC5500]/[0.06]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[15px] w-[15px] fill-white/60 transition-colors group-hover:fill-[#CC5500]"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Desktop columns */}
        <div className="hidden border-b border-white/[0.08] py-12 md:grid md:grid-cols-5 md:gap-x-6 md:gap-y-10">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 inline-block border-b-2 border-[#CC5500] pb-3 text-[11px] font-bold uppercase tracking-[2px] text-white">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={"ext" in link && link.ext ? "_blank" : undefined}
                      rel={"ext" in link && link.ext ? "noopener" : undefined}
                      className="text-[13px] leading-relaxed text-white/60 transition-colors hover:text-[#CC5500]"
                    >
                      {link.name}
                      {"ext" in link && link.ext && " \u2197"}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile accordion */}
        <div className="flex flex-col border-b border-white/[0.08] md:hidden">
          {footerColumns.map((col, idx) => (
            <div key={col.title} className="border-b border-white/[0.08]">
              <button
                className="flex w-full items-center justify-between py-[14px] text-left"
                onClick={() => setOpenCol(openCol === idx ? null : idx)}
                aria-expanded={openCol === idx}
              >
                <span className="text-[11px] font-bold uppercase tracking-[2px] text-white">
                  {col.title}
                </span>
                <span
                  className="text-[12px] text-white/40 transition-transform duration-300"
                  style={{ transform: openCol === idx ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  &#9662;
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openCol === idx ? "auto" : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 pb-4">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        target={"ext" in link && link.ext ? "_blank" : undefined}
                        rel={"ext" in link && link.ext ? "noopener" : undefined}
                        className="text-[13px] leading-relaxed text-white/60 transition-colors hover:text-[#CC5500]"
                      >
                        {link.name}
                        {"ext" in link && link.ext && " \u2197"}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center md:flex-row md:text-left">
          <p className="text-xs text-white/40">
            &copy; 2025&ndash;26{" "}
            <a href="https://orengen.io" className="transition-colors hover:text-[#CC5500]">
              OrenGen Worldwide LLC
            </a>
            . All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {bottomLinks.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                target={"ext" in l && l.ext ? "_blank" : undefined}
                className="text-xs text-white/40 transition-colors hover:text-[#CC5500]"
              >
                {l.name}
              </Link>
            ))}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://blog.orengen.io/wp-content/uploads/2026/01/Payment.png"
            alt="Accepted payment methods"
            width={300}
            height={24}
            loading="lazy"
            className="h-6 w-auto opacity-30 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          />
        </div>

      </div>
    </footer>
  );
}
