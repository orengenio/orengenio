"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background Parallax Layer 1 (Abstract Shapes) */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="h-[600px] w-[600px] rounded-full bg-burnt-orange/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-full rounded-full bg-terracotta/5 blur-[100px]" />
      </motion.div>

      {/* Main Content Layer */}
      <motion.div 
        style={{ y: y2, opacity }} 
        className="container relative mx-auto max-w-5xl text-center z-10"
      >
        {/* Flagship Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 inline-flex items-center rounded-full border border-burnt-orange/20 bg-burnt-orange/5 px-6 py-2 text-sm font-bold tracking-widest text-burnt-orange uppercase"
        >
          <Sparkles className="mr-3 h-4 w-4" />
          <span>The Evolution of Intelligence</span>
        </motion.div>

        {/* Hero Title - Massive & Bold */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 text-6xl font-black tracking-tighter text-foreground sm:text-8xl lg:text-9xl"
        >
          Build the <br />
          <span className="bg-gradient-to-r from-burnt-orange via-terracotta to-burnt-orange bg-clip-text text-transparent">
            Autonomous.
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-16 max-w-2xl text-xl font-medium leading-relaxed text-foreground/40 sm:text-2xl"
        >
          OrenGen is the AI-native ecosystem designed for the next generation of enterprise. 
          Deploy autonomous agents, voice assistants, and unified infrastructure in seconds.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6"
        >
          <Link 
            href="https://app.orengen.io" 
            className="group flex items-center space-x-3 rounded-full bg-foreground px-8 py-4 text-lg font-bold text-background transition-all hover:scale-105 active:scale-95"
          >
            <span>Start Building</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link 
            href="#ecosystem" 
            className="rounded-full border border-foreground/10 bg-background/50 px-8 py-4 text-lg font-bold text-foreground transition-all hover:bg-foreground hover:text-background active:scale-95 backdrop-blur-sm"
          >
            Explore Ecosystem
          </Link>
        </motion.div>
      </motion.div>

      {/* Parallax Layer 2 (Floating Grid/Pattern) */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-0 left-0 right-0 -z-20 h-full opacity-[0.03] pointer-events-none"
      >
        <div className="h-full w-full bg-[grid-white-500/20] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" 
             style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </motion.div>
    </section>
  );
}
