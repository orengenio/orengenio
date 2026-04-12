import type { Metadata } from "next";
import FaqAccordion from "./faq-accordion";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is OrenGen different from hiring a development agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A development agency builds you something and leaves. OrenGen builds permanent AI systems that run autonomously — 24/7, without human oversight. You deploy infrastructure that replaces entire operational functions permanently.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Healthcare, government contracting, real estate, financial services, e-commerce, professional services, construction, legal, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How long does implementation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solutions deploy fast. Complex enterprise integrations typically take 2-4 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical knowledge to use your solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our systems are designed to operate autonomously once deployed.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I need to cancel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Month-to-month flexibility. No long-term contracts required. Cancel any time and retain full ownership of everything built for you.",
      },
    },
    {
      "@type": "Question",
      name: "Are your systems compliant with government security requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. OrenGen is SAM.gov registered (UEI: RX16QFYT6YM5), CAGE-coded (12XC1), and TX CMBL listed. Infrastructure partners maintain SOC 2, HIPAA, and GDPR certifications.",
      },
    },
    {
      "@type": "Question",
      name: "Can I start with one solution and add more later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Most clients start with 1-2 solutions and expand over time. Solutions integrate with each other for compounding value.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer white-label solutions for agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Full branding control, custom domains, and vendor-neutral presentation for agencies, MSPs, and resellers.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "FAQs | OrenGen Worldwide — AI-Driven Innovations",
  description:
    "Frequently asked questions about OrenGen AI solutions, pricing, deployment, and capabilities. Get answers about AI automation for your business.",
  alternates: { canonical: "https://orengen.io/faqs" },
  openGraph: {
    type: "website",
    url: "https://orengen.io/faqs",
    title: "FAQs | OrenGen Worldwide — AI-Driven Innovations",
    description:
      "Frequently asked questions about OrenGen AI solutions, pricing, deployment, and capabilities. Get answers about AI automation for your business.",
    images: [{ url: "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/JkgbWmauRB7suRUl6bVem2msNPATeMS2h4iWgdcR.png", width: 1200, height: 630, alt: "OrenGen Worldwide FAQs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | OrenGen Worldwide — AI-Driven Innovations",
    description:
      "Frequently asked questions about OrenGen AI automation solutions. Implementation timelines, compliance, cancellation, and white-label options.",
    images: ["https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/JkgbWmauRB7suRUl6bVem2msNPATeMS2h4iWgdcR.png"],
  },
  other: {
    "script:ld+json": JSON.stringify(faqSchema),
  },
};

export default function FaqsPage() {
  return (
    <div style={{ background: "linear-gradient(165deg,#081628 0%,#0B1D3A 30%,#0F2847 60%,#0D2240 100%)", color: "#F0F4FA", minHeight: "100vh" }}>
      {/* ── HERO ── */}
      <section style={{ position: "relative", overflow: "hidden", paddingTop: 140, paddingBottom: 64, paddingLeft: 24, paddingRight: 24 }}>
        {/* Dot grid */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
            backgroundImage: "linear-gradient(rgba(204,85,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(204,85,0,0.03) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 45%,black 0%,transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 45%,black 0%,transparent 100%)",
          }}
        />
        {/* Orb accent */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)",
            width: 600, height: 400, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(204,85,0,0.12) 0%, transparent 70%)", filter: "blur(120px)", pointerEvents: "none",
          }}
        />
        {/* Top rule */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 1, zIndex: 1, pointerEvents: "none",
            background: "linear-gradient(90deg,transparent 5%,rgba(204,85,0,0.25) 30%,rgba(204,85,0,0.4) 50%,rgba(204,85,0,0.25) 70%,transparent 95%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 20px",
              background: "rgba(204,85,0,0.08)", border: "1px solid rgba(204,85,0,0.18)",
              borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase" as const, color: "#CC5500", marginBottom: 32,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#CC5500", boxShadow: "0 0 0 3px rgba(204,85,0,0.3)" }} />
            FAQ
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif", fontWeight: 900,
              fontSize: "clamp(42px,8vw,82px)", lineHeight: 1.02,
              letterSpacing: "-0.03em", color: "#F0F4FA", marginBottom: 28,
            }}
          >
            Frequently Asked <span style={{ color: "#CC5500" }}>Questions</span>
          </h1>
          <p style={{ fontSize: "clamp(16px,2.2vw,21px)", lineHeight: 1.65, color: "rgba(210,225,245,0.55)", maxWidth: 560, margin: "0 auto", fontWeight: 300 }}>
            Everything you need to know about working with OrenGen. Don&apos;t see your question? Book a call and we&apos;ll answer it in 30 minutes.
          </p>
        </div>
      </section>

      {/* ── ACCORDION ── */}
      <section style={{ padding: "16px 24px 80px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <FaqAccordion />
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "100px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse at 50% 100%, rgba(204,85,0,0.12) 0%, transparent 60%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 640, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif", fontWeight: 900,
              fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.08,
              letterSpacing: "-0.03em", color: "#F0F4FA", marginBottom: 16,
            }}
          >
            Still Have <span style={{ color: "#CC5500" }}>Questions</span>?
          </h2>
          <p style={{ color: "rgba(210,225,245,0.5)", fontSize: 17, lineHeight: 1.7, fontWeight: 300, marginBottom: 36 }}>
            Our team answers every question personally. Book a free 30-minute strategy call and get straight answers.
          </p>
          <a
            href="https://book.orengen.io/coffeechat"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", padding: "16px 40px",
              background: "linear-gradient(135deg, #CC5500, #E8762B)", color: "#fff",
              fontWeight: 700, fontSize: 15, borderRadius: 12, textDecoration: "none",
              boxShadow: "0 4px 24px rgba(204,85,0,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            Book a Strategy Call
          </a>
        </div>
      </section>
    </div>
  );
}
