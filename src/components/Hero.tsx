"use client";

import { motion } from "framer-motion";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-32">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-burnt-orange/10 via-background to-background" />

      {/* Floating Sparkle Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-terracotta/20 blur-[120px]"
      />

      <div className="container relative mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center rounded-full border border-burnt-orange/20 bg-burnt-orange/5 px-4 py-1.5 text-sm font-medium text-burnt-orange"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          <span>The Evolution of Intelligence</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
        >
          Build Anything <br />
          <span className="bg-gradient-to-r from-burnt-orange to-terracotta bg-clip-text text-transparent">
            Intelligently.
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-12 max-w-2xl text-lg text-foreground/60 sm:text-xl"
        >
          Enterprise AI, Cloud Infrastructure, and Workflow Automation in one unified, 
          ultra-fast ecosystem. Evolved from the core of modern tech.
        </motion.p>

        {/* Master AI Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="group relative mx-auto max-w-2xl"
        >
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-burnt-orange/30 to-terracotta/30 blur opacity-75 transition duration-1000 group-hover:opacity-100" />
          <div className="relative flex items-center rounded-2xl bg-card p-2 shadow-2xl">
            <Search className="ml-4 h-5 w-5 text-foreground/40" />
            <input
              type="text"
              placeholder="What are you building today?"
              className="w-full bg-transparent px-4 py-4 text-lg text-foreground placeholder:text-foreground/30 focus:outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-burnt-orange text-white transition-transform active:scale-95">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          {/* Quick Suggestions */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {["Deploy n8n", "Set up Supabase", "AI Chat Widget", "Oren Cloud Status"].map((text) => (
              <button
                key={text}
                onClick={() => setInputValue(text)}
                className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-foreground/50 transition-colors hover:bg-foreground/10 hover:text-foreground"
              >
                {text}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
