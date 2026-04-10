"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CDN = "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026";

const agents = [
  { id: 1, name: "Marcus Thompson", role: "Voice Agent", desc: "Inbound & outbound voice calls in any language, 24/7.", img: `${CDN}/0en2s7yB49MbtyKWUbQBtoD0LTak2efoFTwNnIne.png` },
  { id: 2, name: "Mei Lin Chen", role: "Chat Agent", desc: "Real-time website chat that qualifies and converts.", img: `${CDN}/ulCvfZnyWhP728iI6r49IB6edmUJhP3dtNYtxi6d.png` },
  { id: 3, name: "David Okafor", role: "Pipeline Manager", desc: "Automated CRM updates, lead scoring, deal tracking.", img: `${CDN}/5GUZsCIDK7EtI9IXX8eXDodhFU5WLxPTIt5OjPVe.png` },
  { id: 4, name: "Priya Sharma", role: "Social Agent", desc: "AI-powered content scheduling and engagement.", img: `${CDN}/6gykA2fUW07eswgzXXBKZDaYryiuZJQo1M2uNlj1.png` },
  { id: 5, name: "James Mitchell", role: "Outbound Caller", desc: "Cold outreach campaigns that book meetings on autopilot.", img: `${CDN}/0kvoSAWaBaSKZRTiNVWpMPgZIC5OvdHoxperpkV3.png` },
  { id: 6, name: "Elena Torres", role: "SMS Agent", desc: "Two-way texting for follow-ups, reminders, and re-engagement.", img: `${CDN}/5pskqfuAhTBYlvOoORFggFLnhGevlpvBfD3pKl44.png` },
  { id: 7, name: "Nathan Brooks", role: "Email Agent", desc: "Automated email sequences with smart personalization.", img: `${CDN}/IxZAEmDYHEoOZ5ZzjgBG4HqpQD4FVmJGYYbPyUVn.png` },
  { id: 8, name: "Aisha Williams", role: "Scheduler", desc: "AI appointment booking that eliminates no-shows.", img: `${CDN}/KrbVdZn8iJm8uu7ITI70tRrltw0d0HNaUTiRkFgr.png` },
  { id: 9, name: "Carlos Mendez", role: "Lead Qualifier", desc: "Scores and qualifies every lead before your team sees it.", img: `${CDN}/Ah0QGWHKOnmqIXAIDUOqG1ELinSUoFG4lWwQWaqp.png` },
  { id: 10, name: "Rachel Kim", role: "Analytics Agent", desc: "Real-time dashboards and performance intelligence.", img: `${CDN}/fCrG3qB5RJyo07xuxEFtFQETrS7pF6w0kcmI9D60.png` },
  { id: 11, name: "Michael Osei", role: "Support Agent", desc: "Tier-1 customer support across every channel.", img: `${CDN}/630pIcDcYFr25CQDlYix4uZ6nsoljoZxKbDXoReL.png` },
  { id: 12, name: "Sarah Whitfield", role: "Compliance Agent", desc: "Monitors conversations for compliance and quality.", img: `${CDN}/iqZj5mGXEzmK1UusWvX6KXSSd8gdvsIAQHMK1lt0.png` },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function AgentShowcase() {
  return (
    <section id="engine" className="agent-showcase">
      <div className="agent-showcase-bg" />
      <div className="agent-showcase-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="agent-showcase-header"
        >
          <div className="agent-showcase-eyebrow">
            <span className="agent-showcase-dot" />
            Your AI Workforce
          </div>
          <h2 className="agent-showcase-title">
            Meet the Agents That<br /><span className="accent">Never Clock Out</span>
          </h2>
          <p className="agent-showcase-sub">
            12 specialized AI employees — each trained for a specific role — working together
            as one autonomous workforce. Deploy them individually or as a team.
          </p>
        </motion.div>

        <motion.div
          className="agent-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {agents.map((agent) => (
            <motion.div key={agent.id} variants={cardVariants} className="agent-card">
              <div className="agent-card-img-wrap">
                <div className="agent-card-ring" />
                <img
                  src={agent.img}
                  alt={`${agent.name} — ${agent.role}`}
                  className="agent-card-img"
                  loading="lazy"
                  width={160}
                  height={160}
                />
              </div>
              <div className="agent-card-info">
                <div className="agent-card-name">{agent.name}</div>
                <div className="agent-card-role">{agent.role}</div>
                <div className="agent-card-desc">{agent.desc}</div>
              </div>
              <div className="agent-card-status">
                <span className="agent-status-dot" />
                Online
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="agent-showcase-cta"
        >
          <Link href="#pricing" className="agent-cta-btn">
            Deploy Your First Agent
          </Link>
          <span className="agent-cta-note">No developers needed. We build &amp; manage it for you.</span>
        </motion.div>
      </div>
    </section>
  );
}
