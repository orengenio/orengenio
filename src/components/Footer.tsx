import React from 'react';
import Link from 'next/link';

interface TrustLink {
  href: string;
  icon: string;
  label: string;
}

interface InternalLink {
  name: string;
  href: string;
}

interface AffiliateLink {
  name: string;
  href: string;
  external: true;
}

interface FooterColumn {
  title: string;
  links: Array<InternalLink | AffiliateLink>;
}

const trustLinks: TrustLink[] = [
  { href: 'https://www.bbb.org/us/tx/mansfield/profile/computer-software/orengen-worldwide-0825-1000236185/customer-reviews', icon: 'https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/Better-Business-Bureau-Reviews.png', label: 'BBB' },
  { href: 'https://g.page/r/CcTOiNDyo03PEBM/review', icon: 'https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/6980242c66e7ca8c84cce4b8.svg', label: 'Google' },
  { href: 'https://www.trustpilot.com/review/orengen.io', icon: 'https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/6980251966e7ca0123cd2a56.svg', label: 'Trustpilot' },
  { href: 'https://clutch.co/profile/orengen-worldwide', icon: 'https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/69802a6a1fd8278b3c8c75e6.svg', label: 'Clutch' },
  { href: 'https://www.g2.com/products/orengen/reviews', icon: 'https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/698026301311f6be3e8f43f1.svg', label: 'G2' },
  { href: 'https://www.capterra.com/p/1000236185/orengen/reviews/', icon: 'https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/Capterra-Reviews.png', label: 'Capterra' },
];

interface SocialLink {
  id: string;
  href: string;
  label: string;
  svg: string;
}

const socialLinks: SocialLink[] = [
  { id: 'linkedin', href: 'https://www.linkedin.com/company/orengenio', label: 'LinkedIn', svg: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>' },
  { id: 'x', href: 'https://x.com/orengenio', label: 'X (Twitter)', svg: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>' },
  { id: 'instagram', href: 'https://www.instagram.com/orengenio', label: 'Instagram', svg: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>' },
  { id: 'facebook', href: 'https://www.facebook.com/orengenio', label: 'Facebook', svg: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>' },
  { id: 'github', href: 'https://github.com/orengenio', label: 'GitHub', svg: '<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>' },
  { id: 'youtube', href: 'https://www.youtube.com/@orengenio', label: 'YouTube', svg: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>' },
  { id: 'tiktok', href: 'https://tiktok.com/@orengenio', label: 'TikTok', svg: '<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>' },
];

const affiliateLinks: AffiliateLink[] = [
  { name: 'Google Workspace', href: 'https://referworkspace.app.goo.gl/iQuV', external: true },
  { name: 'N8N Automation', href: 'https://n8n.partnerlinks.io/orengenio', external: true },
  { name: 'Eleven Labs', href: 'https://try.elevenlabs.io/orengenio', external: true },
  { name: 'Banking for Techies', href: 'https://mercury.com/r/orengenworldwide', external: true },
  { name: 'Nav Business Credit', href: 'https://nav.nkwcmr.net/c/6210768/1813107/2410', external: true },
  { name: 'Custom E-Signature', href: 'https://www.customesignature.com/?via=orengenio', external: true },
  { name: 'Custom Affiliate Software', href: 'https://www.partnero.com?aff=orengenio', external: true },
];

const footerColumns: FooterColumn[] = [
  { title: 'Solutions', links: [{ name: 'OrenAgents', href: '/orenagents' }, { name: 'OrenNexus', href: '/orennexus' }, { name: 'OrenWeb', href: '/orenweb' }, { name: 'OrenSocial', href: '/orensocial' }, { name: 'OrenCustoms', href: '/orencustoms' }] },
  { title: 'Company', links: [{ name: 'About', href: '/about' }, { name: 'Blog', href: '/blog' }, { name: 'Case Studies', href: '/case-studies' }, { name: 'Integrations', href: '/integrations' }, { name: 'Support', href: '/support' }, { name: 'FAQs', href: '/faqs' }, { name: 'Pricing', href: '/pricing' }] },
  { title: 'Partnerships', links: [{ name: 'Sales Partners', href: '/salespartners' }, { name: 'Program Differences', href: '/program-differences' }, { name: 'Legal Disclaimers', href: '/legal-disclaimers' }] },
  { title: 'Productivity', links: affiliateLinks },
  { title: 'Legal', links: [{ name: 'Acceptable Use', href: '/acceptable-use' }, { name: 'Privacy Policy', href: '/privacy-policy' }, { name: 'Cookie Policy', href: '/cookie-policy' }, { name: 'Copyright Notice', href: '/copyright-notice' }, { name: 'Refund Policy', href: '/refund-policy' }] }
];

export const Footer: React.FC = () => {
  return (
    <footer className="og-footer bg-white text-black" aria-label="OrenGen Worldwide Footer">
      {/* ─── TRUST BAR — Brand blue background ─── */}
      <section className="og-trust-bar py-8 border-b border-white/10 bg-[#0B1D3A]">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="og-trust-label mb-6 text-[11px] font-black tracking-[4px] uppercase text-white/50">
            <span aria-hidden="true">★★★★★</span> REAL CLIENTS. REAL RESULTS. LEAVE YOUR REVIEW. <span aria-hidden="true">★★★★★</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {trustLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="og-trust-item transition-all hover:scale-110 hover:brightness-125" aria-label={`Review us on ${link.label}`}>
                <img src={link.icon} alt={link.label} className="h-6 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6">
        {/* ─── BRAND SECTION — Logo + Tagline + Socials ─── */}
        <div className="og-brand-section flex flex-col items-center py-12">
          <Link href="/">
            <img src="https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/U95jP6KTuXOCdXDuQM1UmUfgzMcecV7mpVpQgMxI.png" alt="OrenGen Worldwide" className="og-footer-logo" width="380" />
          </Link>

          {/* Fuse ignition tagline — brought closer, fire border active */}
          <div className="og-fuse-container mt-6 relative">
            <style>{`
              @property --fire-angle {
                syntax: '<angle>';
                initial-value: 0deg;
                inherits: false;
              }
              .og-fuse-fire {
                position: relative;
                display: inline-block;
                padding: 10px 28px;
                border-radius: 8px;
                background: white;
              }
              .og-fuse-fire::before {
                content: '';
                position: absolute;
                inset: -2px;
                border-radius: 10px;
                padding: 2px;
                background: conic-gradient(
                  from var(--fire-angle, 0deg),
                  #FF6A00 0%, #FFD700 10%, #FF4500 20%, #CC5500 30%,
                  rgba(204, 85, 0, 0.3) 50%, transparent 60%, transparent 80%,
                  rgba(204, 85, 0, 0.3) 90%, #FF6A00 100%
                );
                -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
                animation: fireSpin 3s linear infinite;
              }
              @keyframes fireSpin {
                0% { --fire-angle: 0deg; }
                100% { --fire-angle: 360deg; }
              }
              @supports not (background: conic-gradient(from var(--fire-angle), red, blue)) {
                .og-fuse-fire::before {
                  background: linear-gradient(90deg, #FF6A00, #FFD700, #FF4500, #CC5500, #FF6A00);
                  background-size: 300% 100%;
                  animation: fireFallback 2s linear infinite;
                }
                @keyframes fireFallback {
                  0% { background-position: 0% 50%; }
                  100% { background-position: 300% 50%; }
                }
              }
              .og-fuse-fire {
                box-shadow: 0 0 15px rgba(255, 106, 0, 0.2), 0 0 30px rgba(204, 85, 0, 0.1);
              }
            `}</style>
            <div className="og-fuse-fire">
              <div className="text-[11px] font-black tracking-[4px] uppercase whitespace-nowrap">
                <span className="text-[#CC5500]">ONLINE EVERYWHERE</span>
                <span className="text-black/30 mx-2">|</span>
                <span className="text-black">ORENGENIO</span>
              </div>
            </div>
          </div>

          {/* Social icons — inline SVGs, correct URLs, tightened spacing */}
          <div className="flex gap-2 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-black/10 hover:border-[#CC5500] hover:bg-[#CC5500]/5 transition-all"
                aria-label={social.label}
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-black/60 hover:fill-[#CC5500] transition-colors" dangerouslySetInnerHTML={{ __html: social.svg }} />
              </a>
            ))}
          </div>
        </div>

        {/* ─── LINK COLUMNS — Tightened by 1/4 inch (gap-3) ─── */}
        <div className="og-columns-grid py-12 grid grid-cols-2 md:grid-cols-5 gap-3 border-t border-black/5">
          {footerColumns.map((col) => (
            <div key={col.title} className="og-col">
              <h4 className="og-col-title text-[11px] font-black uppercase tracking-widest mb-5 inline-block pb-1 border-b-2 border-[#CC5500]">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => {
                  const isExternal = 'external' in link && link.external;
                  const linkClass = "text-[13px] font-medium text-black hover:text-[#CC5500] transition-colors";
                  return (
                    <li key={link.name}>
                      {isExternal ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          {link.name} <span className="text-[10px] text-black/30">&#8599;</span>
                        </a>
                      ) : (
                        <Link href={link.href} className={linkClass}>{link.name}</Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* ─── BOTTOM BAR — All black text, correct fonts ─── */}
        <div className="og-bottom-bar py-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-black/5">
          <div className="text-[11px] font-medium text-black/70">
            &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> <a href="https://orengen.io" className="hover:text-[#CC5500] transition-colors">OrenGen Worldwide LLC</a>. All rights reserved.
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {[
              { path: '/privacy-policy', label: 'Privacy' },
              { path: '/terms', label: 'Terms' },
              { path: '/ai-communications-opt-in', label: 'AI Opt-In' },
              { path: '/sitemap.xml', label: 'Sitemap' },
            ].map(({ path, label }) => (
              <Link key={path} href={path} className="text-[11px] font-medium text-black/70 hover:text-[#CC5500] transition-colors">{label}</Link>
            ))}
            <a href="https://orengen-status-page.instatus.com" className="text-[11px] font-medium text-black/70 hover:text-[#CC5500] transition-colors" target="_blank" rel="noopener noreferrer">Site Status</a>
          </div>
          </div>
          <div className="og-payment flex items-center">
            <img src="https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/cxVPrJJ67UaREKmwI8Qc17nRrlI6Ml8mB2BCzWUd.png" alt="We accept Visa, Mastercard, Amex, PayPal, Stripe and more" className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};
