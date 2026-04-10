"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "CEO",
    company: "SolarEdge Pros",
    initial: "M",
    quote: "We went from losing 60% of inbound leads to booking 3x more demos within the first month. The AI voice agents handle calls at 2 AM like it\u2019s nothing.",
    stat: "3x more demos",
  },
  {
    name: "Sarah Mitchell",
    role: "VP of Sales",
    company: "Apex Roofing Group",
    initial: "S",
    quote: "Our response time dropped from 47 hours to under 90 seconds. Buy-Lingual closed a Spanish-speaking lead on a Sunday morning before we even knew it came in.",
    stat: "47hrs \u2192 90sec",
  },
  {
    name: "David Okafor",
    role: "Founder",
    company: "NovaTech Solutions",
    initial: "D",
    quote: "I replaced three SaaS subscriptions and a VA with OrenGen. The CRM, the AI agents, the automation \u2014 it all runs from one dashboard. My overhead dropped 40%.",
    stat: "40% lower overhead",
  },
  {
    name: "Rachel Torres",
    role: "Operations Director",
    company: "Brightline HVAC",
    initial: "R",
    quote: "The appointment no-show rate was killing us. OrenGen\u2019s AI sends reminders via text, email, and voice \u2014 no-shows dropped from 35% to under 8%.",
    stat: "35% \u2192 8% no-shows",
  },
  {
    name: "James Whitfield",
    role: "Managing Partner",
    company: "Whitfield Legal Advisors",
    initial: "J",
    quote: "Our intake process was a bottleneck. Now the AI qualifies leads, books consultations, and follows up \u2014 all while staying compliant. We added 22 new clients last quarter.",
    stat: "+22 clients/quarter",
  },
  {
    name: "Priya Sharma",
    role: "CMO",
    company: "GreenLeaf Wellness",
    initial: "P",
    quote: "The social media agent alone saved us 15 hours a week. Content goes out on schedule, engagement is up 180%, and I haven\u2019t touched a scheduling tool in months.",
    stat: "180% more engagement",
  },
  {
    name: "Carlos Rivera",
    role: "Owner",
    company: "Rivera Construction",
    initial: "C",
    quote: "Being bilingual is everything in our market. OrenGen\u2019s Buy-Lingual agents switch between English and Spanish flawlessly. Our close rate jumped 45% in 60 days.",
    stat: "+45% close rate",
  },
  {
    name: "Kendra Brooks",
    role: "Head of Growth",
    company: "Pinnacle Insurance",
    initial: "K",
    quote: "We ran a pilot with 500 outbound calls. The AI booked 67 qualified appointments in a single week. Our human team couldn\u2019t do that in a month.",
    stat: "67 appts/week",
  },
];

const trustPlatforms = [
  { name: "BBB", icon: "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/Better-Business-Bureau-Reviews.png", href: "https://www.bbb.org/us/tx/mansfield/profile/computer-software/orengen-worldwide-0825-1000236185/customer-reviews" },
  { name: "Google", icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/6980242c66e7ca8c84cce4b8.svg", href: "https://g.page/r/CcTOiNDyo03PEBM/review" },
  { name: "Trustpilot", icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/6980251966e7ca0123cd2a56.svg", href: "https://www.trustpilot.com/review/orengen.io" },
  { name: "Clutch", icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/69802a6a1fd8278b3c8c75e6.svg", href: "https://clutch.co/profile/orengen-worldwide" },
  { name: "G2", icon: "https://storage.googleapis.com/msgsndr/42o9MlhprxMSOet4heWk/media/698026301311f6be3e8f43f1.svg", href: "https://www.g2.com/products/orengen/reviews" },
  { name: "Capterra", icon: "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/Capterra-Reviews.png", href: "https://www.capterra.com/p/1000236185/orengen/reviews/" },
];

function StarRating() {
  return (
    <div className="testimonial-stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="testimonial-star">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="testimonials-header"
        >
          <div className="testimonials-eyebrow">
            <span className="testimonials-dot" />
            Client Results
          </div>
          <h2 className="testimonials-title">
            Real Businesses.<br /><span className="accent">Real Results.</span>
          </h2>
          <p className="testimonials-sub">
            From solar companies to law firms, our AI workforce delivers measurable outcomes
            across every industry.
          </p>
        </motion.div>

        <div className="testimonials-marquee">
          <motion.div
            className="testimonials-track"
            animate={prefersReducedMotion ? {} : { x: [0, "-50%"] }}
            transition={prefersReducedMotion ? {} : { duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {doubled.map((t, i) => (
              <div key={i} className="testimonial-card">
                <StarRating />
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-stat">{t.stat}</div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div className="testimonial-author-info">
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="testimonials-trust">
          <div className="testimonials-trust-label">Rated Excellent Across Every Platform</div>
          <div className="testimonials-trust-row">
            {trustPlatforms.map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="testimonials-trust-item" aria-label={`Review us on ${p.name}`}>
                <img src={p.icon} alt={p.name} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
