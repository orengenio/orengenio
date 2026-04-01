"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Sparkles, ChevronDown, Users, Mic, Laptop, Target, Share2, MessageSquare, Code, Workflow } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const megaMenuData = [
  {
    category: "Autonomous Workforce",
    items: [
      { title: "OrenAgents Voice", desc: "Buy-Lingual™ conversational AI for calls.", icon: <Mic className="h-5 w-5 text-burnt-orange" />, href: "/orenagents-voice" },
      { title: "OrenAgents Employees", desc: "Hire autonomous multi-agent departments.", icon: <Users className="h-5 w-5 text-burnt-orange" />, href: "/orenagents-workforce" },
    ]
  },
  {
    category: "Digital Presence",
    items: [
      { title: "OrenWeb Design", desc: "High-performance bespoke development.", icon: <Laptop className="h-5 w-5 text-terracotta" />, href: "/orenweb-design" },
      { title: "OrenWeb Talk", desc: "Websites integrated with voice AI concierges.", icon: <MessageSquare className="h-5 w-5 text-terracotta" />, href: "/orenweb-talk" },
    ]
  },
  {
    category: "Growth & Automation",
    items: [
      { title: "OrenNexus", desc: "Unified CRM and automation command center.", icon: <Target className="h-5 w-5 text-burnt-orange" />, href: "/orennexus" },
      { title: "OrenSocial", desc: "AI-powered social media and content scheduling.", icon: <Share2 className="h-5 w-5 text-burnt-orange" />, href: "/orensocial" },
    ]
  },
  {
    category: "Enterprise",
    items: [
      { title: "OrenChatbots", desc: "24/7 intelligent support intelligence.", icon: <Workflow className="h-5 w-5 text-terracotta" />, href: "/orenchatbots" },
      { title: "OrenCustoms", desc: "Bespoke AI engineering for scale.", icon: <Code className="h-5 w-5 text-terracotta" />, href: "/orencustoms" },
    ]
  }
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 z-[100] w-full border-b border-foreground/5 bg-background/80 backdrop-blur-2xl transition-all duration-300">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Left: Logo */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-burnt-orange text-white shadow-lg shadow-burnt-orange/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Oren<span className="text-burnt-orange font-black">Gen</span>
            </span>
          </Link>

          {/* Center: Links */}
          <div className="hidden items-center space-x-1 md:flex">
            <div 
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
              className="relative py-4"
            >
              <button className={cn(
                "flex items-center space-x-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground/5",
                isMegaMenuOpen ? "text-burnt-orange bg-foreground/5" : "text-foreground/70"
              )}>
                <span>Solutions</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isMegaMenuOpen && "rotate-180")} />
              </button>

              {/* Mega Menu Dropdown - CENTERED FIX */}
              <AnimatePresence>
                {isMegaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-[-200px] top-[100%] w-[90vw] max-w-5xl rounded-[3rem] border border-foreground/10 bg-background/95 backdrop-blur-3xl p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]"
                  >
                    <div className="grid grid-cols-4 gap-8">
                      {megaMenuData.map((col, i) => (
                        <div key={i} className="space-y-4">
                          <h5 className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 px-2">
                            {col.category}
                          </h5>
                          <div className="space-y-1">
                            {col.items.map((item, j) => (
                              <Link
                                key={j}
                                href={item.href}
                                className="group flex flex-col space-y-1 rounded-2xl p-3 transition-colors hover:bg-foreground/5"
                              >
                                <div className="flex items-center space-x-2">
                                  {item.icon}
                                  <span className="text-sm font-bold text-foreground group-hover:text-burnt-orange">{item.title}</span>
                                </div>
                                <p className="text-xs leading-relaxed text-foreground/50">{item.desc}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link href="#pricing" className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground">Pricing</Link>
            <Link href="#docs" className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground">Docs</Link>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 transition-all hover:bg-foreground/10 active:scale-95"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <Link 
            href="https://app.orengen.io"
            className="hidden rounded-full bg-foreground px-6 py-2.5 text-sm font-bold text-background transition-all hover:opacity-90 active:scale-95 sm:block"
          >
            Open Console
          </Link>
        </div>
      </div>
    </nav>
  );
}
