'use client';

import { useState } from "react";

const faqs = [
  {
    q: "How is OrenGen different from hiring a development agency?",
    a: "A development agency builds you something and leaves. OrenGen builds permanent AI systems that run autonomously — 24/7, without human oversight. You don't hire our team by the hour; you deploy infrastructure that replaces entire operational functions. The result is a system you own, not a project that ends.",
  },
  {
    q: "What industries do you serve?",
    a: "We work across healthcare, government contracting, real estate, financial services, e-commerce, professional services, construction, legal, and more. Our AI infrastructure is industry-agnostic by design — the same automation principles apply whether you're managing patient appointments or federal procurement pipelines.",
  },
  {
    q: "How long does implementation take?",
    a: "Solutions deploy fast. Complex enterprise integrations — multi-system, multi-location, or government-regulated environments — typically take 2–4 weeks. We give you a precise timeline in your first strategy call before any commitment is made.",
  },
  {
    q: "Do I need technical knowledge to use your solutions?",
    a: "No. Our systems are designed to operate autonomously once deployed. You'll receive a dashboard for visibility and reporting, but you don't need to manage, configure, or maintain anything. If something needs attention, our team handles it — that's included in your plan.",
  },
  {
    q: "What happens if I need to cancel?",
    a: "Month-to-month flexibility. No long-term contracts required. You can cancel at any time and retain full ownership of everything we've built for you. We believe in earning your business every month — not locking you in.",
  },
  {
    q: "Are your systems compliant with government security requirements?",
    a: "Yes. OrenGen is SAM.gov registered (UEI: RX16QFYT6YM5), CAGE-coded (12XC1), and TX CMBL listed. Our infrastructure partners maintain SOC 2, HIPAA, and GDPR certifications. We've designed our systems with government and regulated-industry compliance as a first-class requirement, not an afterthought.",
  },
  {
    q: "Can I start with one solution and add more later?",
    a: "Absolutely. Most clients start with 1–2 solutions that address their most immediate pain point — typically AI voice agents or CRM automation — and expand from there. Our solutions are designed to integrate with each other, so adding capabilities becomes progressively more powerful over time.",
  },
  {
    q: "Do you offer white-label solutions for agencies?",
    a: "Yes. Our platforms support full branding control, custom domains, and vendor-neutral presentation. If you're an agency, MSP, or reseller, we can configure every client deployment to appear completely native to your brand. Contact us to discuss white-label pricing and co-delivery arrangements.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={faq.q}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: isOpen ? "1px solid rgba(204,85,0,0.35)" : "1px solid rgba(255,255,255,0.06)",
              borderRadius: 20, overflow: "hidden",
              backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
              transition: "border-color 0.3s",
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              style={{
                width: "100%", display: "flex", alignItems: "center",
                justifyContent: "space-between", gap: 16,
                padding: "22px 28px", textAlign: "left",
                background: "transparent", border: "none", cursor: "pointer",
                outline: "none",
              }}
              aria-expanded={isOpen}
            >
              <span
                style={{
                  fontFamily: "'Roboto', sans-serif", fontSize: 16, fontWeight: 600,
                  color: "#F0F4FA", paddingRight: 8, lineHeight: 1.4,
                }}
              >
                {faq.q}
              </span>
              <span
                style={{
                  flexShrink: 0, width: 30, height: 30, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: isOpen ? "#CC5500" : "rgba(255,255,255,0.06)",
                  transition: "background 0.2s",
                }}
              >
                {isOpen ? (
                  <svg style={{ width: 14, height: 14, color: "#fff" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  </svg>
                ) : (
                  <svg style={{ width: 14, height: 14, color: "#CC5500" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                  </svg>
                )}
              </span>
            </button>
            <div
              style={{
                overflow: "hidden",
                maxHeight: isOpen ? 500 : 0,
                opacity: isOpen ? 1 : 0,
                transition: "max-height 0.3s ease, opacity 0.3s ease",
              }}
            >
              <p style={{ fontFamily: "'Roboto', sans-serif", color: "rgba(210,225,245,0.55)", fontSize: 14.5, lineHeight: 1.75, padding: "0 28px 24px", fontWeight: 300 }}>
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
