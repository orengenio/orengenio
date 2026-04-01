"use client";

import { motion } from "framer-motion";
import { Search, ArrowRight, Sparkles, Command } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 overflow-hidden bg-background">
      {/* The Central Command Bar (Google Search Mimicry) */}
      <div className="container relative mx-auto max-w-3xl text-center">
        {/* Subtle Brand Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-center space-x-2 text-foreground/40"
        >
          <Command className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">OrenGen AI Core v4.0</span>
        </motion.div>

        {/* Main Title - Minimalist */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-12 text-4xl font-black tracking-tight text-foreground sm:text-6xl"
        >
          Automate Everything.
        </motion.h1>

        {/* The functional input bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="group relative"
        >
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-burnt-orange/20 to-terracotta/20 blur-xl opacity-0 transition-opacity duration-500 group-focus-within:opacity-100" />
          <div className="relative flex items-center rounded-[2.5rem] border border-foreground/10 bg-card/50 p-2 backdrop-blur-3xl transition-all duration-300 group-focus-within:border-burnt-orange/50 group-focus-within:shadow-2xl group-focus-within:shadow-burnt-orange/5">
            <Search className="ml-6 h-6 w-6 text-foreground/30 transition-colors group-focus-within:text-burnt-orange" />
            <input
              type="text"
              placeholder="What part of your business should we automate today?"
              className="w-full bg-transparent px-6 py-6 text-xl text-foreground placeholder:text-foreground/20 focus:outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="mr-2 flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background transition-all hover:bg-burnt-orange hover:text-white active:scale-95 shadow-xl">
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </motion.div>

        {/* Quick Access "Apps" (Google Style) */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            { label: "Hire Voice Agent", icon: "Mic" },
            { label: "Build Talking Site", icon: "Laptop" },
            { label: "Setup CRM", icon: "Target" },
            { label: "AI Social Manager", icon: "Share2" }
          ].map((app, i) => (
            <motion.button
              key={app.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              onClick={() => setInputValue(`How do I ${app.label.toLowerCase()}?`)}
              className="flex items-center space-x-2 rounded-full border border-foreground/5 bg-foreground/[0.02] px-5 py-2.5 text-sm font-semibold text-foreground/50 transition-all hover:bg-foreground/5 hover:text-foreground hover:border-foreground/20 active:scale-95"
            >
              <span>{app.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
      
      {/* Background Utility Polish */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/5 to-transparent" />
    </section>
  );
}
