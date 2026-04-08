import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About OrenGen Worldwide | OrenGen Worldwide — AI-Driven Innovations",
  description:
    "OrenGen Worldwide LLC is a certified minority-owned AI automation company based in Texas. SAM.gov registered. Serving businesses nationwide.",
  alternates: { canonical: "https://orengen.io/about" },
  openGraph: {
    type: "website",
    url: "https://orengen.io/about",
    title: "About OrenGen Worldwide | OrenGen Worldwide — AI-Driven Innovations",
    description:
      "OrenGen Worldwide LLC is a certified minority-owned AI automation company based in Texas. SAM.gov registered. Serving businesses nationwide.",
    images: [{ url: "https://blog.orengen.io/wp-content/uploads/2026/03/OrenGen-Logo-Banner-BO-and-Blk-TP.png", width: 1200, height: 630, alt: "About OrenGen Worldwide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About OrenGen Worldwide | OrenGen Worldwide — AI-Driven Innovations",
    description:
      "Founded in 2025 in Mansfield, TX. OrenGen Worldwide builds enterprise-grade AI automation infrastructure for organizations ready to eliminate manual operations.",
    images: ["https://blog.orengen.io/wp-content/uploads/2026/03/OrenGen-Logo-Banner-BO-and-Blk-TP.png"],
  },
};

const differentiators = [
  {
    title: "Open-Source First",
    desc: "We build on proven open-source infrastructure — giving you full transparency, auditability, and zero vendor lock-in.",
  },
  {
    title: "Self-Hosted Infrastructure",
    desc: "Your data stays in your environment. No shared SaaS databases, no third-party data exposure, no platform risk.",
  },
  {
    title: "White-Label Friendly",
    desc: "Every solution we build can be presented under your brand. Perfect for agencies, MSPs, and enterprise deployments.",
  },
  {
    title: "Automation-Native",
    desc: "Our systems are designed to operate without human intervention from day one — not adapted to automation as an afterthought.",
  },
  {
    title: "Enterprise-Grade Security",
    desc: "SOC 2-ready infrastructure, HIPAA-compliant architecture, end-to-end encryption, and government-standard security practices.",
  },
];

const certs = [
  { label: "SAM.gov Registered", detail: "UEI: RX16QFYT6YM5" },
  { label: "CAGE Code", detail: "12XC1" },
  { label: "TX CMBL", detail: "Vendor #550248" },
  { label: "Minority Business Enterprise", detail: "Certified MBE" },
  { label: "BBB Rated", detail: "A− Rating" },
];
};


export default function AboutPage() {
  return (
    <div className="bg-background text-white min-h-screen">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6">
        {/* Orb accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #CC5500 0%, transparent 70%)", filter: "blur(90px)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-40 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #003366 0%, transparent 70%)", filter: "blur(90px)" }}
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-burnt-orange text-sm font-semibold uppercase tracking-widest mb-4">About OrenGen</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-white mb-6"
            style={{ fontFamily: "var(--font-league-spartan), sans-serif" }}
          >
            About OrenGen Worldwide
          </h1>
          <p className="text-white/65 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            We build AI systems that sell, support, and scale — so your team can focus on growth, not operations.
          </p>
        </div>
      </section>

      {/* ── COMPANY STORY ── */}
      <section className="py-20 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#CC5500]/20 to-transparent" />
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-burnt-orange text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
            <h2
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6"
              style={{ fontFamily: "var(--font-league-spartan), sans-serif" }}
            >
              Built in Mansfield, TX.<br />Deployed Worldwide.
            </h2>
            <p className="text-white/65 leading-relaxed mb-4">
              Founded in 2025 and headquartered in Mansfield, Texas, OrenGen Worldwide emerged from a simple observation: most businesses were drowning in manual, repetitive operations that AI could handle permanently.
            </p>
            <p className="text-white/65 leading-relaxed mb-4">
              Our leadership team brings over 40 years of combined business leadership experience — spanning technology, finance, operations, and government contracting — unified around a single mission: give every organization access to enterprise-grade AI infrastructure.
            </p>
            <p className="text-white/65 leading-relaxed">
              Today we serve clients across healthcare, government, real estate, e-commerce, and professional services — building systems that don&apos;t just automate tasks, but transform how organizations operate at their core.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "40+", label: "Years Leadership Experience" },
              { stat: "11", label: "Integrated AI Solutions" },
              { stat: "3-Day", label: "Standard Deployment" },
              { stat: "24/7", label: "Autonomous Operation" },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 text-center hover:border-[#CC5500]/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <p
                  className="text-4xl font-extrabold text-burnt-orange mb-2"
                  style={{ fontFamily: "var(--font-league-spartan), sans-serif" }}
                >
                  {stat}
                </p>
                <p className="text-white/55 text-sm leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-10 hover:border-[#CC5500]/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-burnt-orange/15 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-burnt-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-burnt-orange text-xs font-semibold uppercase tracking-widest mb-3">Our Mission</p>
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-league-spartan), sans-serif" }}
            >
              Empower Every Business With AI
            </h3>
            <p className="text-white/65 leading-relaxed">
              To empower businesses of every size with cutting-edge AI infrastructure that eliminates manual operations, accelerates revenue, and enables teams to focus on what matters most — growth.
            </p>
          </div>
          <div className="bg-[#111] border border-white/10 rounded-2xl p-10 hover:border-[#003366]/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#003366]/30 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-[#5b8fd4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <p className="text-[#5b8fd4] text-xs font-semibold uppercase tracking-widest mb-3">Our Vision</p>
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-league-spartan), sans-serif" }}
            >
              The World&apos;s Most Trusted AI Provider
            </h3>
            <p className="text-white/65 leading-relaxed">
              To become the world&apos;s most trusted provider of AI-driven business innovations — setting the standard for transparency, reliability, and measurable outcomes across every industry we serve.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY ORENGEN ── */}
      <section className="py-20 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#CC5500]/15 to-transparent" />
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-burnt-orange text-sm font-semibold uppercase tracking-widest mb-3">Why OrenGen</p>
            <h2
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: "var(--font-league-spartan), sans-serif" }}
            >
              What Makes Us Different
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <div
                key={d.title}
                className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-7 hover:border-[#CC5500]/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-md bg-burnt-orange/15 flex items-center justify-center mb-4">
                  <span className="text-burnt-orange text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3 group-hover:text-burnt-orange transition-colors"
                  style={{ fontFamily: "var(--font-league-spartan), sans-serif" }}
                >
                  {d.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-burnt-orange text-sm font-semibold uppercase tracking-widest mb-3">Credentials</p>
            <h2
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: "var(--font-league-spartan), sans-serif" }}
            >
              Verified &amp; Certified
            </h2>
            <p className="text-white/55 mt-4 max-w-xl mx-auto">
              OrenGen is registered, certified, and compliant — ready for government, enterprise, and regulated industry engagements.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certs.map((c) => (
              <div
                key={c.label}
                className="bg-[#111] border border-white/10 rounded-2xl px-6 py-4 hover:border-[#CC5500]/40 hover:-translate-y-0.5 transition-all duration-300 text-center"
              >
                <p
                  className="text-white font-semibold text-sm"
                  style={{ fontFamily: "var(--font-league-spartan), sans-serif" }}
                >
                  {c.label}
                </p>
                <p className="text-white/45 text-xs mt-1">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 pb-32 sm:pb-24 px-6 text-center relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{ background: "radial-gradient(ellipse at 50% 100%, #CC5500 0%, transparent 60%)" }}
        />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-league-spartan), sans-serif" }}
          >
            Ready to Work With Us?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Let&apos;s talk about what&apos;s slowing your business down — and build the AI system that fixes it permanently.
          </p>
          <a
            href="https://calendly.com/orengenio/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-burnt-orange hover:bg-[#b34a00] text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>
    </div>
  );
}
