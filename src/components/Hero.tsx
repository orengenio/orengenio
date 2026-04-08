"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const partners = [
  { name: "OpenAI", logo: "https://svgl.app/library/openai.svg", brand: "openai" },
  { name: "Anthropic", logo: "https://cdn.simpleicons.org/claude/CC5500", brand: "anthropic" },
  { name: "ElevenLabs", logo: "https://cdn.simpleicons.org/elevenlabs/white", brand: "elevenlabs" },
  { name: "Google Cloud", logo: "https://cdn.simpleicons.org/googlecloud/4285F4", brand: "googlecloud" },
  { name: "NVIDIA", logo: "https://cdn.simpleicons.org/nvidia/76B900", brand: "nvidia" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github/white", brand: "github" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED", brand: "docker" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E", brand: "figma" },
  { name: "Webflow", logo: "https://cdn.simpleicons.org/webflow/4353FF", brand: "webflow" },
  { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/3FCF8E", brand: "supabase" },
  { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/EA4B71", brand: "n8n" },
  { name: "Cloudflare", logo: "https://cdn.simpleicons.org/cloudflare/F38020", brand: "cloudflare" },
  { name: "Twilio", logo: "https://svgl.app/library/twilio.svg", brand: "twilio" },
  { name: "WordPress", logo: "https://cdn.simpleicons.org/wordpress/21759B", brand: "wordpress" },
  { name: "Clawbot", logo: "https://cdn.simpleicons.org/claude/CC5500", brand: "clawbot" },
];

export function Hero() {
  const [isOrbActive, setIsOrbActive] = useState(false);
  const [orbHint, setOrbHint] = useState("Click to activate");

  const toggleOrb = () => {
    setIsOrbActive(!isOrbActive);
    setOrbHint(!isOrbActive ? "Engine active" : "Click to activate");
  };

  return (
    <>
      <section className="og-hero min-h-screen pt-20">
        <div className="og-hero-grid" />
        <div className="og-hero-grain" />
        
        {/* Ambient Orbs */}
        <motion.div 
          animate={{ x: [-50, 0, -50], scale: [1, 1.08, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="og-hero-amb og-hero-amb-1" 
          style={{ width: 900, height: 900, top: '-25%', right: '-12%', background: 'radial-gradient(circle,rgba(30,77,140,0.45) 0%,transparent 70%)' }}
        />
        <motion.div 
          animate={{ x: [35, 0, 35], scale: [1, 1.06, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="og-hero-amb og-hero-amb-2" 
          style={{ width: 650, height: 650, bottom: '-18%', left: '-10%', background: 'radial-gradient(circle,rgba(21,53,102,0.5) 0%,transparent 70%)' }}
        />
        <motion.div 
          animate={{ scale: [1, 1.25, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="og-hero-amb og-hero-amb-3" 
          style={{ width: 400, height: 400, top: '35%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle,rgba(204,85,0,0.1) 0%,transparent 70%)' }}
        />
        
        <div className="og-hero-rule" />

        {/* Floating Metric Chips */}
        <div className="og-hero-chips absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { id: 1, icon: "⚡", val: "24/7", label: "AI Workforce", pos: "top-[18%] left-[6%]", color: "#CC5500", bg: "rgba(204,85,0,0.15)", delay: 0 },
            { id: 2, icon: "↗", val: "10x", label: "Faster Ops", pos: "top-[22%] right-[5%]", color: "#3FCF8E", bg: "rgba(63,207,142,0.12)", delay: -2 },
            { id: 3, icon: "◎", val: "Zero", label: "Complexity", pos: "bottom-[22%] left-[8%]", color: "#4285F4", bg: "rgba(66,133,244,0.12)", delay: -4 },
            { id: 4, icon: "∞", val: "Scale", label: "No Limits", pos: "bottom-[18%] right-[7%]", color: "#E2725B", bg: "rgba(226,114,91,0.12)", delay: -1.5 },
          ].map((chip) => (
            <motion.div
              key={chip.id}
              animate={{ translateY: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: chip.delay }}
              className={`og-chip ${chip.pos} absolute pointer-events-auto`}
            >
              <div className="og-chip-icon" style={{ background: chip.bg, color: chip.color }}>{chip.icon}</div>
              <div className="og-chip-text">
                <span className="og-chip-val">{chip.val}</span>
                <span className="og-chip-label">{chip.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="og-hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="og-hero-eyebrow"
          >
            <span className="og-hero-eyebrow-dot" />
            AI-Driven Innovations for the Modern Enterprise
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="og-hero-h1"
          >
            <span className="block"><span className="og-accent">Build</span> Your</span>
            <span className="block">AI Systems.</span>
            <span className="block">We Handle the Rest.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="og-hero-sub"
          >
            Deploy autonomous agents, automate operations, and scale without limits — all from one platform engineered to run your business.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="og-hero-proof"
          >
            {["SAM.gov Registered", "Minority-Owned Certified", "Enterprise-Grade Security"].map((proof, i) => (
              <div key={i} className="og-hero-proof-item">
                <span className="og-hero-proof-icon">
                  <Check className="h-4 w-4 text-burnt-orange" />
                </span>
                {proof}
              </div>
            ))}
          </motion.div>
        </div>

        {/* AI ENGINE ORB */}
        <div className="ai-engine-container">
          <motion.div 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleOrb}
            animate={{ 
              scale: isOrbActive ? [0.97, 1.08, 0.97] : [0.95, 1.05, 0.95],
              boxShadow: isOrbActive 
                ? [
                    "0 0 50px 15px rgba(204,85,0,0.6)",
                    "0 0 90px 35px rgba(204,85,0,0.9)",
                    "0 0 50px 15px rgba(204,85,0,0.6)"
                  ]
                : [
                    "0 0 35px 5px rgba(204,85,0,0.4)",
                    "0 0 70px 25px rgba(204,85,0,0.7)",
                    "0 0 35px 5px rgba(204,85,0,0.4)"
                  ]
            }}
            transition={{ duration: isOrbActive ? 1.5 : 3, repeat: Infinity, ease: "easeInOut" }}
            className={`ai-orb group relative`}
          >
            <img 
              src="https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/GLBjK33zIX9uoJqAHz4c8kGhtn0mXn1bNtVzpUNU.png" 
              alt="OrenGen" 
              className="ai-orb-logo" 
            />
            <span className="ai-orb-hint group-hover:opacity-100 opacity-0 transition-opacity">
              {orbHint}
            </span>
            
            {/* Animated Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: isOrbActive ? 4 : 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-burnt-orange/30 pointer-events-none"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: isOrbActive ? 6 : 12, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full border-2 border-dashed border-terracotta/40 pointer-events-none"
            />
          </motion.div>
        </div>

        <div className="og-hero-fade" />
      </section>

      {/* TECH PARTNERS BAR */}
      <section className="og-partners" aria-label="Technology Partners">
        <div className="og-partners-label">Powered by World-Class Technology</div>
        <div className="og-partners-wrapper">
          <motion.div 
            animate={{ x: [0, "-50%"] }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            className="og-partners-track"
          >
            {/* Duplicated for seamless loop */}
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="og-partner-set">
                <div className="og-partner-item" data-brand={partner.brand}>
                  <img src={partner.logo} alt={partner.name} width="20" height="20" loading="lazy" />
                  <span>{partner.name}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
