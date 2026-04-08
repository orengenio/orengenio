import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
      <section className="og-trust-bar py-12 border-b border-black/5 bg-[#F8FAFE]">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="og-trust-label mb-10 text-[11px] font-black tracking-[4px] uppercase text-black/60">
            <span aria-hidden="true">★★★★★</span> PLEASE REVIEW US AND SHARE YOUR EXPERIENCE <span aria-hidden="true">★★★★★</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {trustLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="og-trust-item transition-transform hover:scale-110">
                <img src={link.icon} alt={link.label} className="h-6 w-auto object-contain" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="og-brand-section flex flex-col items-center py-16">
          <Link href="/">
            <img src="https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/U95jP6KTuXOCdXDuQM1UmUfgzMcecV7mpVpQgMxI.png" alt="OrenGen Worldwide" className="og-footer-logo" width="380" />
          </Link>
          <div className="og-fuse-container mt-12">
            <div className="og-tagline-box ignited">
              <div className="og-tagline uppercase">
                <span className="text-[#CC5500]">ONLINE EVERYWHERE</span> | ORENGENIO
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-12">
            {['linkedin', 'twitter', 'instagram', 'facebook', 'github', 'youtube'].map((id) => (
              <a key={id} href={`https://${id}.com/${id === 'youtube' ? '@' : ''}orengenio`} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-xl border border-black/10 hover:border-[#CC5500] hover:bg-[#CC5500]/5 transition-all">
                <Image src={`https://cdn.simpleicons.org/${id}/000000`} className="w-5 h-5" alt={`${id} profile`} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
        <div className="og-columns-grid py-20 grid grid-cols-2 md:grid-cols-5 gap-12 border-t border-black/5">
          {footerColumns.map((col) => (
            <div key={col.title} className="og-col">
              <h4 className="og-col-title text-[11px] font-black uppercase tracking-widest mb-8 inline-block pb-1 border-b-2 border-[#CC5500]">{col.title}</h4>
              <ul className="flex flex-col gap-4">
                {col.links.map((link) => {
                  const isExternal = 'external' in link && link.external;
                  const className = "text-[13px] font-bold text-black hover:text-[#CC5500] transition-colors";
                  return (
                    <li key={link.name}>
                      {isExternal ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>{link.name}</a>
                      ) : (
                        <Link href={link.href} className={className}>{link.name}</Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="og-bottom-bar py-12 flex flex-col md:flex-row items-center justify-between gap-10 border-t border-black/5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-black/50">© <span suppressHydrationWarning>{new Date().getFullYear()}</span> OrenGen Worldwide LLC. All rights reserved.</div>
          <div className="og-payment flex items-center gap-6">
            <img src="https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/cxVPrJJ67UaREKmwI8Qc17nRrlI6Ml8mB2BCzWUd.png" alt="Payment Methods" className="h-6 w-auto color" />
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-widest text-black/50">
            {['privacy-policy', 'terms', 'cookie-policy', 'ai-communications-opt-in', 'sitemap.xml'].map(path => (
              <Link key={path} href={`/${path}`} className="hover:text-[#CC5500] transition-colors">{path.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ').replace('.xml', '')}</Link>
            ))}
            <a href="https://dashboard.instatus.com/om0t4/orengen-status-page/page" className="hover:text-[#CC5500] transition-colors" target="_blank" rel="noopener noreferrer">Site Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
