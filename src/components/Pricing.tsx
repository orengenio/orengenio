"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const compData = [
  { label: 'OrenGen', low: 0.12, high: 0.14, ours: true },
  { label: 'Bland AI', low: 0.12, high: 0.14, ours: false },
  { label: 'Retell AI', low: 0.11, high: 0.15, ours: false },
  { label: 'Centerfy', low: 0.15, high: 0.15, ours: false },
  { label: 'Ringly.io', low: 0.19, high: 0.35, ours: false },
  { label: 'CallAgentAI', low: 0.08, high: 0.45, ours: false },
  { label: 'CloudTalk', low: 0.19, high: 0.49, ours: false },
  { label: 'Synthflow', low: 0.09, high: 0.58, ours: false }
];
const maxVal = 0.62;

export function Pricing() {
  const [animateChart, setAnimateChart] = useState(false);

  useEffect(() => {
    // Simple intersection observer to trigger chart animation
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setAnimateChart(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    const chartEl = document.getElementById("compChartSection");
    if (chartEl) observer.observe(chartEl);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pricing-section" id="pricing">
      <div className="section-tag">Simple, Transparent Pricing</div>
      <h2 className="section-title">AI That <span>Pays for Itself</span></h2>
      <p className="section-sub">
        Every plan includes AI agents, CRM, automation, and a dedicated team that builds and manages it for you. No DIY. No developers needed.
      </p>

      {/* 4 PRICING TIERS */}
      <div className="tiers-grid">
        {/* TIER 1 */}
        <div className="tier-card">
          <div className="tier-name">Starter</div>
          <div className="tier-desc">Your first AI employee + the CRM to manage every lead.</div>
          <div className="tier-price-row">
            <span className="tier-was">$397/mo</span>
            <span className="tier-price">$197<span className="tier-price-period">/mo</span></span>
          </div>
          <div className="tier-setup">One-time setup: $597</div>
          <div className="tier-divider"></div>
          <div className="tier-includes">What's included</div>
          <ul className="tier-features">
            <li>1 AI Chat Employee — 24/7 lead capture</li>
            <li>Website chat widget</li>
            <li>Lead qualification + FAQ automation</li>
            <li>OrenNexus CRM (Standard)</li>
            <li>Pipeline, funnels, basic analytics</li>
            <li>We build it. We manage it.</li>
            <li>Email support</li>
          </ul>
          <Link href="https://buy.stripe.com/3cIaEXekw11dc0rd8lfQI3s" target="_blank" rel="noopener noreferrer" className="tier-cta outline">Get Started</Link>
        </div>

        {/* TIER 2 - FEATURED */}
        <div className="tier-card featured">
          <div className="tier-badge">Most Popular</div>
          <div className="tier-name">Growth</div>
          <div className="tier-desc">Voice + chat AI working together to close deals around the clock.</div>
          <div className="tier-price-row">
            <span className="tier-was">$897/mo</span>
            <span className="tier-price">$497<span className="tier-price-period">/mo</span></span>
          </div>
          <div className="tier-setup">One-time setup: $1,997</div>
          <div className="tier-divider"></div>
          <div className="tier-includes">Everything in Starter, plus</div>
          <ul className="tier-features">
            <li>1 AI Voice Agent — inbound + outbound</li>
            <li>1 AI Chat Employee — chat + SMS</li>
            <li>Bilingual (English + Spanish)</li>
            <li>Appointment scheduling + lead scoring</li>
            <li>OrenNexus CRM (Professional)</li>
            <li>Multi-channel deployment, 24/7</li>
            <li>Priority support</li>
          </ul>
          <Link href="https://buy.stripe.com/7sYcN52BObFRc0r8S5fQI3t" target="_blank" rel="noopener noreferrer" className="tier-cta primary">Start Growing</Link>
        </div>

        {/* TIER 3 */}
        <div className="tier-card">
          <div className="tier-name">Dominate</div>
          <div className="tier-desc">Full AI workforce — multiple agents handling every channel at scale.</div>
          <div className="tier-price-row">
            <span className="tier-was">$1,797/mo</span>
            <span className="tier-price">$997<span className="tier-price-period">/mo</span></span>
          </div>
          <div className="tier-setup">One-time setup: $3,997</div>
          <div className="tier-divider"></div>
          <div className="tier-includes">Everything in Growth, plus</div>
          <ul className="tier-features">
            <li>3 AI Voice Agents — inbound + outbound</li>
            <li>3 AI Chat Employees — chat + SMS + email</li>
            <li>Call transfers to live agents</li>
            <li>Custom voice cloning</li>
            <li>Multilingual support</li>
            <li>OrenNexus CRM (Professional)</li>
            <li>Advanced analytics + lead scoring</li>
            <li>Priority support</li>
          </ul>
          <Link href="https://buy.stripe.com/dRm5kDb8k25h9Sjd8lfQI3u" target="_blank" rel="noopener noreferrer" className="tier-cta outline">Start Dominating</Link>
        </div>

        {/* TIER 4 - ENTERPRISE */}
        <div className="tier-card custom-tier">
          <div className="tier-name">Enterprise</div>
          <div className="tier-desc">Total AI deployment built around your operation. White-glove everything.</div>
          <div className="tier-price-row">
            <span className="tier-price">Custom<span className="tier-price-period"> pricing</span></span>
          </div>
          <div className="tier-setup">Starts at $1,997/mo · Setup: custom scoping</div>
          <div className="tier-divider"></div>
          <div className="tier-includes">Everything in Dominate, plus</div>
          <ul className="tier-features">
            <li>Unlimited AI voice agents + employees</li>
            <li>Multilingual (5+ languages)</li>
            <li>Custom call flows + sentiment analysis</li>
            <li>OrenWeb + OrenSocial available</li>
            <li>API &amp; webhook access</li>
            <li>Dedicated success manager</li>
            <li>White-glove onboarding</li>
            <li>SLA &amp; custom integrations</li>
          </ul>
          <Link href="https://book.orengen.io" className="tier-cta">Book a Strategy Call</Link>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ marginBottom: 64 }}
      >
        <Link
          href="/orenkanbuilder"
          className="tier-custom-link"
          style={{
            display: "block",
            maxWidth: 720,
            margin: "0 auto",
            padding: "32px 36px",
            background: "rgba(204,85,0,0.06)",
            border: "1px solid rgba(204,85,0,0.25)",
            borderRadius: 20,
            textAlign: "center",
            textDecoration: "none",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 0 30px rgba(204,85,0,0.08), 0 0 60px rgba(204,85,0,0.04)",
            animation: "ctaPulseGlow 3s ease-in-out infinite",
            transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
            fontSize: 18,
            fontWeight: 700,
            color: "#CC5500",
            lineHeight: 1.5,
          }}
        >
          <span style={{ display: "block", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(210,225,245,0.5)", marginBottom: 8 }}>
            Custom Configuration
          </span>
          Want full control? Build your custom AI Engine with OrenKanBuilder™ →
        </Link>
      </motion.div>

      {/* USAGE-BASED RATES */}
      <div className="usage-section">
        <h3 className="usage-title">Usage-Based Rates</h3>
        <p className="usage-sub">On top of your plan, you only pay for what your AI agents actually use.</p>
        <div className="usage-grid">
          <div className="usage-card">
            <div className="usage-card-label">Voice — Inbound</div>
            <div className="usage-card-price">$0.12</div>
            <div className="usage-card-unit">per minute</div>
          </div>
          <div className="usage-card">
            <div className="usage-card-label">Voice — Outbound</div>
            <div className="usage-card-price">$0.14</div>
            <div className="usage-card-unit">per minute</div>
          </div>
          <div className="usage-card">
            <div className="usage-card-label">SMS — Outbound</div>
            <div className="usage-card-price">$0.02</div>
            <div className="usage-card-unit">per message</div>
          </div>
          <div className="usage-card">
            <div className="usage-card-label">SMS — Inbound</div>
            <div className="usage-card-price">$0.015</div>
            <div className="usage-card-unit">per message</div>
          </div>
        </div>
        <p className="usage-note">
          All-inclusive — no hidden API fees, no BYOK, no managing 5 different vendors.<br />
          Your AI agents just work. We handle the infrastructure.
        </p>
      </div>

      {/* COMPETITIVE COMPARISON CHART */}
      <div className="comp-section" id="compChartSection">
        <h3 className="comp-title">How Our Voice Rates Compare</h3>
        <p className="comp-sub">All-inclusive per-minute pricing vs. the competition. No hidden stack costs.</p>

        <div className="comp-chart">
          {compData.map((d, i) => {
            const widthPct = animateChart ? (d.high / maxVal * 100) : 0;
            const rangeText = d.low === d.high
              ? `$${d.low.toFixed(2)}/min`
              : `$${d.low.toFixed(2)} – $${d.high.toFixed(2)}/min`;

            return (
              <div key={i} className="comp-row">
                <div className={`comp-label ${d.ours ? 'ours' : ''}`}>{d.label}</div>
                <div className="comp-bar-wrap">
                  <motion.div 
                    className={`comp-bar ${d.ours ? 'ours' : 'competitor'}`}
                    initial={{ width: "0%" }}
                    animate={{ width: `${widthPct}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {rangeText}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="comp-legend">
          <span><span className="comp-legend-dot" style={{background: 'linear-gradient(90deg,#CC5500,#E8762B)'}}></span>OrenGen (all-inclusive)</span>
          <span><span className="comp-legend-dot" style={{background: 'linear-gradient(90deg,#1E4D8C,#2A6ABF)'}}></span>Competitor range</span>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="bottom-cta">
        <div className="bottom-cta-text">Ready to Deploy Your AI Workforce?</div>
        <p className="bottom-cta-sub">Talk to our live AI agent now — or book a strategy call to see Buy-Lingual™ in action.</p>
        <Link href="#demo">Talk to AI Agent →</Link>
      </div>

    </section>
  );
}
