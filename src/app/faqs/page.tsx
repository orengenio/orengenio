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
    images: [{ url: "https://blog.orengen.io/wp-content/uploads/2026/03/OrenGen-Logo-Banner-BO-and-Blk-TP.png", width: 1200, height: 630, alt: "OrenGen Worldwide FAQs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | OrenGen Worldwide — AI-Driven Innovations",
    description:
      "Frequently asked questions about OrenGen AI automation solutions. Implementation timelines, compliance, cancellation, and white-label options.",
    images: ["https://blog.orengen.io/wp-content/uploads/2026/03/OrenGen-Logo-Banner-BO-and-Blk-TP.png"],
  },
  other: {
    "script:ld+json": JSON.stringify(faqSchema),
  },
};

export default function FaqsPage() {
  return (
    <div className="bg-background text-white min-h-screen">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #CC5500 0%, transparent 70%)", filter: "blur(100px)" }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="text-burnt-orange text-sm font-semibold uppercase tracking-widest mb-4">FAQ</p>
          <h1
            className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none text-white mb-6"
            style={{ fontFamily: "var(--font-league-spartan), sans-serif" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-white/65 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about working with OrenGen. Don&apos;t see your question? Book a call and we&apos;ll answer it in 30 minutes.
          </p>
        </div>
      </section>

      {/* ── ACCORDION ── */}
      <section className="py-8 pb-20 px-6">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 bg-[#0a0a0a] text-center relative overflow-hidden">
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
            Still Have Questions?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Our team answers every question personally. Book a free 30-minute strategy call and get straight answers.
          </p>
          <a
            href="https://calendly.com/orengenio/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-burnt-orange hover:bg-[#b34a00] text-white font-semibold px-10 py-4 rounded-xl text-base transition-colors duration-200"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>
    </div>
  );
}
