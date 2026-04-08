'use client';
"use client";

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
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={faq.q}
            className={`bg-[#0a0a0a] border rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen ? "border-[#CC5500]/40" : "border-white/10 hover:border-white/20"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 px-7 py-6 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span
                className="text-base font-semibold text-white pr-2"
                style={{ fontFamily: "var(--font-league-spartan), sans-serif" }}
              >
                {faq.q}
              </span>
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ background: isOpen ? "#CC5500" : "rgba(255,255,255,0.08)" }}
              >
                {isOpen ? (
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                  </svg>
                )}
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0 }}
            >
              <p className="text-white/65 text-sm leading-relaxed px-7 pb-6">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
