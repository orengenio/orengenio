"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const agents = [
  {
    id: "voice",
    badge: "Buy-Lingual™",
    name: "OrenAgents Voice",
    tagline: "Your 24/7 multilingual phone team.",
    desc: "AI voice agents that answer, qualify, and book — in English, Spanish, and 9 more languages. Inbound and outbound, around the clock.",
    capabilities: [
      "Inbound & outbound call handling",
      "Lead qualification in real time",
      "Appointment booking & reminders",
      "Custom voice cloning",
    ],
    stat: { val: "< 2 min", label: "Avg. response time" },
    icon: "🎙",
    accentFrom: "from-[#CC5500]",
    accentTo: "to-[#E2725B]",
  },
  {
    id: "employees",
    badge: "Autonomous",
    name: "OrenAgents Employees",
    tagline: "Hire departments, not headcount.",
    desc: "Digital employees that handle lead routing, CRM updates, task automation, and follow-ups — across every channel, every timezone.",
    capabilities: [
      "Multi-channel lead routing",
      "CRM integration & auto-logging",
      "Task & process automation",
      "Bilingual customer engagement",
    ],
    stat: { val: "24/7", label: "Always-on workforce" },
    icon: "⚙",
    accentFrom: "from-[#1E4D8C]",
    accentTo: "to-[#3B82F6]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.12,
    },
  }),
};

export function AgentsShowcase() {
  return (
    <section className="ogAg" id="agents">
      <div className="ogAg-grain" />
      <div className="ogAg-amb ogAg-amb-1" />
      <div className="ogAg-amb ogAg-amb-2" />

      <div className="ogAg-wrap">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
          className="ogAg-head"
        >
          <div className="ogAg-eyebrow">
            <span className="ogAg-eyebrow-dot" />
            Your AI Workforce
          </div>

          <h2 className="ogAg-title">
            Agents That <span className="accent">Work</span>.
            <br />
            So You Don&apos;t Have To.
          </h2>

          <p className="ogAg-sub">
            Deploy intelligent voice agents and digital employees that qualify
            leads, book appointments, and run operations — in any language, on any
            channel, 24/7.
          </p>
        </motion.div>

        <div className="ogAg-grid">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i + 1}
              className="ogAg-card"
            >
              <div
                className={`ogAg-card-glow bg-gradient-to-r ${agent.accentFrom} ${agent.accentTo}`}
              />

              <div className="ogAg-card-inner">
                <div className="ogAg-card-top">
                  <div className="ogAg-card-icon">{agent.icon}</div>
                  <span className="ogAg-card-badge">{agent.badge}</span>
                </div>

                <h3 className="ogAg-card-name">{agent.name}</h3>
                <p className="ogAg-card-tagline">{agent.tagline}</p>

                <p className="ogAg-card-desc">{agent.desc}</p>

                <ul className="ogAg-card-caps">
                  {agent.capabilities.map((cap) => (
                    <li key={cap}>
                      <span className="ogAg-cap-check">✓</span>
                      {cap}
                    </li>
                  ))}
                </ul>

                <div className="ogAg-card-stat">
                  <span className="ogAg-stat-val">{agent.stat.val}</span>
                  <span className="ogAg-stat-label">{agent.stat.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          custom={3}
          className="ogAg-cta-row"
        >
          <Link href="/orenagents" className="ogAg-cta-primary">
            Explore AI Agents
          </Link>

          <Link href="#demo" className="ogAg-cta-ghost">
            Book a Demo →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
