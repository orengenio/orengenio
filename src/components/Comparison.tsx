"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const pains = [
  { id: 0, txt: "1. Lead opts in", desc: "Enters via ads, DM, or referral — left waiting while your team gets back to them." },
  { id: 1, txt: "2. Slow Response Times", desc: "Leads wait hours or days while your team juggles messages across email, forms, and social." },
  { id: 2, txt: "3. Back-and-Forth Scheduling", desc: "Endless email ping-pong to find a time. By the time you book, they've talked to your competitor." },
  { id: 3, txt: "4. Prospect Drop-Offs", desc: "The longer it takes, the more likely your lead vanishes or books with someone else." },
  { id: 4, txt: "5. Manual Data Entry", desc: "Every contact manually added to a spreadsheet — mistakes, duplication, lost details." },
  { id: 5, txt: "6. Disorganized Follow-Up", desc: "Your team has to remember who to follow up with and when — often relying on nothing." },
  { id: 6, txt: "7. Manually qualifying on calls", desc: "Phone calls one by one to determine interest level and qualification of each prospect." },
  { id: 7, txt: "8. Unclear Pipeline Visibility", desc: "Can't tell which deals are hot, cold, or need a nudge — stalling revenue growth." },
  { id: 8, txt: "9. Burnout for Your Team", desc: "Repetitive admin drains your team from selling and building relationships." },
  { id: 9, txt: "10. Meeting finally confirmed", desc: "After days of manual effort, repeated follow-ups, and waiting — finally confirm the meeting." },
];

const gains = [
  { id: 0, txt: "Instant Engagement & Qualification", desc: "Buy-Lingual™ agents respond within seconds — qualifying the lead, answering questions, and booking appointments in any language automatically." },
  { id: 1, txt: "Automated AI Appointment Setting", desc: "Never miss a lead again. Smart AI follows up instantly, books appointments 24/7, and sends reminders that slash no-shows and boost conversion." },
  { id: 2, txt: "Automated Reminders", desc: "SMS, email, and voice reminders triggered before every appointment to reduce no-shows and keep your calendar full." },
  { id: 3, txt: "Follow-Up on Autopilot", desc: "No-shows? Unresponsive leads? Buy-Lingual™ follows up relentlessly until they book, respond, or opt out — across every channel." },
];

const matrixRows = [
  { feat: "24/7 multilingual availability", oren: "✓", legacy: "—", alt: "~" },
  { feat: "Unified operations stack", oren: "✓", legacy: "No", alt: "Usually no" },
  { feat: "Scales without added headcount", oren: "✓", legacy: "No", alt: "Partially" },
  { feat: "Speed to deployment", oren: "Fast", legacy: "Slow", alt: "Medium", hot: true },
  { feat: "Voice + workflow automation", oren: "✓", legacy: "No", alt: "Rarely" },
  { feat: "Long-term margin efficiency", oren: "High", legacy: "Low", alt: "Medium", hot: true },
  { feat: "Single partner accountability", oren: "✓", legacy: "No", alt: "No" },
];

export function Comparison() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const oldWidth = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);
  const newWidth = useTransform(scrollYProgress, [0.12, 0.45], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="ogS3" id="ogS3">
      <div className="ogS3-wrap">
        {/* HEADER */}
        <div className="ogS3-head">
          <div className="ogS3-eyebrow">
            <span className="ogS3-eyebrow-dot" />
            Why Businesses Switch
          </div>
          <h2 className="ogS3-title">
            Stop stitching tools together.<br />
            <span className="accent">Deploy one AI operating system.</span>
          </h2>
          <p className="ogS3-sub">
            The average business takes <strong>47 hours</strong> to respond to a lead.
            Your <strong>Buy-Lingual™</strong> AI agents respond in under 2 minutes — across
            voice, chat, email, and SMS — in any language, on any channel, 24/7.
          </p>
        </div>

        {/* LAVA PROGRESS BARS */}
        <div className="ogS3-bars">
          <div className="ogS3-bar ogS3-bar-old">
            <motion.div style={{ width: oldWidth }} className="ogS3-fill bg-gradient-to-r from-red-900/0 via-red-900/25 to-red-600/70" />
            <span className="ogS3-bar-label">Manual Process</span>
            <span className="ogS3-bar-badge">⏱ 47 Hours Avg.</span>
          </div>
          <div className="ogS3-bar ogS3-bar-new">
            <motion.div style={{ width: newWidth }} className="ogS3-fill bg-gradient-to-r from-orange-600/0 via-orange-500/60 to-orange-600 shadow-[inset_0_0_40px_rgba(204,85,0,0.25)]" />
            <span className="ogS3-bar-label">Buy-Lingual™ Engine</span>
            <span className="ogS3-bar-badge">⚡ Under 2 Min</span>
          </div>
        </div>
        <p className="text-center text-[11px] text-[#0B1D3A]/30 mb-12 max-w-[620px] mx-auto font-light leading-relaxed">
          Based on the Optifai Pipeline Study (2026, N=939 B2B companies) and Harvard Business Review lead response research.
        </p>

        {/* SCROLL COMPARISON GRID */}
        <div className="ogS3-grid">
          {/* LEFT: Pain steps */}
          <div className="ogS3-left">
            {pains.map((pain) => (
              <div key={pain.id} className="ogS3-pain">
                <div className="ogS3-pain-in">
                  <span className="ogS3-pain-ico">⏳</span>
                  <div>
                    <div className="ogS3-pain-txt">{pain.txt}</div>
                    <div className="ogS3-pain-desc hidden group-hover:block">{pain.desc}</div>
                  </div>
                  <span className="ogS3-pain-chk">✓</span>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Buy-Lingual™ Gain */}
          <div className="ogS3-right">
            <div className="ogS3-right-head">
              <div className="ogS3-right-head-ico text-orange-500">⚡</div>
              <div>
                <div className="text-[11px] font-bold tracking-wider text-white/50 uppercase">Powered by</div>
                <div className="text-lg font-black text-burnt-orange">Buy-Lingual™ AI <span className="text-orange-300 font-normal text-sm">by OrenGen</span></div>
              </div>
            </div>
            {gains.map((gain) => (
              <div key={gain.id} className="ogS3-gain lit opacity-100 bg-burnt-orange/5">
                <span className="ogS3-gain-ico">⚡</span>
                <div className="ogS3-gain-body">
                  <div className="ogS3-gain-txt">{gain.txt}</div>
                  <div className="ogS3-gain-desc">{gain.desc}</div>
                </div>
                <span className="ogS3-gain-chk bg-burnt-orange text-white">✓</span>
              </div>
            ))}
          </div>
        </div>

        {/* DECISION MATRIX TABLE */}
        <div className="ogS3-matrix-wrap overflow-hidden">
          <div className="ogS3-matrix">
            <div className="ogS3-mrow mhead">
              <div className="ogS3-mcell !bg-transparent !border-r-white/10">
                <div className="flex flex-col gap-1 text-left w-full">
                  <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Decision Matrix</div>
                  <div className="text-xl font-black text-white">What actually matters</div>
                  <div className="text-xs text-white/50 font-normal">Speed, scale, clarity, and margin.</div>
                </div>
              </div>
              <div className="ogS3-mcell !bg-burnt-orange/5 border-x-2 !border-x-burnt-orange/30">
                <div className="flex flex-col gap-1 text-left w-full">
                  <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Recommended</div>
                  <div className="text-xl font-black text-burnt-orange">OrenGen + Buy-Lingual™</div>
                  <div className="text-xs text-white/50 font-normal">Unified AI operating system.</div>
                </div>
              </div>
              <div className="ogS3-mcell !bg-transparent !border-r-white/10"><div className="text-white font-bold">Legacy Model</div></div>
              <div className="ogS3-mcell !bg-transparent"><div className="text-white font-bold">Fragmented Tools</div></div>
            </div>

            {matrixRows.map((row, i) => (
              <div key={i} className="ogS3-mrow">
                <div className="ogS3-mcell feat">{row.feat}</div>
                <div className="ogS3-mcell bg-burnt-orange/[0.03] border-x border-burnt-orange/10 font-bold text-burnt-orange">{row.oren}</div>
                <div className="ogS3-mcell text-slate-400">{row.legacy}</div>
                <div className="ogS3-mcell text-slate-400">{row.alt}</div>
              </div>
            ))}
          </div>
        </div>

        {/* STATS BAR */}
        <div className="ogS3-stats py-12">
          {[
            { val: "391%", label: "More Conversions" },
            { val: "21x", label: "Better Qualification" },
            { val: "78%", label: "Buy First Responder" },
            { val: "24/7", label: "Always On" },
          ].map((stat, i) => (
            <div key={i} className="ogS3-stat">
              <div className="ogS3-stat-val">{stat.val}</div>
              <div className="text-xs text-[#0F2847]/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
