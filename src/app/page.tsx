import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FloatingOrb } from "@/components/FloatingOrb";
import { Mic, Laptop, Target, Share2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const productRows = [
    {
      title: "OrenAgents",
      tagline: "Autonomous Voice & Employees",
      description: "Harness the power of Buy-Lingual™ conversational AI for inbound and outbound operations. From virtual receptionists to entire autonomous departments.",
      icon: <Mic className="h-8 w-8 text-burnt-orange" />,
      features: ["Real-time Latency (<500ms)", "Enterprise Knowledge Base", "Human-to-AI Handover"],
      href: "/orenagents-voice"
    },
    {
      title: "OrenWeb",
      tagline: "High-Performance Talking Sites",
      description: "Beyond static design. We build 'Talking Sites' that engage visitors using conversational AI, converting traffic into booked appointments automatically.",
      icon: <Laptop className="h-8 w-8 text-terracotta" />,
      features: ["Next.js 15 Foundations", "Conversational UX", "Built-in Lead Capture"],
      href: "/orenweb-talk"
    },
    {
      title: "OrenNexus",
      tagline: "Unified Growth Engine",
      description: "The ultimate command center. We replace three separate logins with one unified CRM, pipeline manager, and multi-channel automation hub.",
      icon: <Target className="h-8 w-8 text-burnt-orange" />,
      features: ["Multi-Tenant CRM", "n8n Orchestration", "Usage-Based Billing"],
      href: "/orennexus"
    }
  ];

  return (
    <main className="min-h-screen bg-background selection:bg-burnt-orange/30 selection:text-burnt-orange">
      <Navbar />
      <Hero />
      <FloatingOrb />

      {/* Product Showcase (Google-style Utility Rows) */}
      <section className="px-6 py-20 bg-background">
        <div className="container mx-auto max-w-5xl space-y-32">
          {productRows.map((product, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center gap-12 group">
              <div className="flex-1 space-y-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-foreground/5 transition-transform group-hover:scale-105">
                  {product.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-black tracking-tighter text-foreground mb-1">
                    {product.title}
                  </h2>
                  <p className="text-sm font-bold uppercase tracking-widest text-burnt-orange/60">
                    {product.tagline}
                  </p>
                </div>
                <p className="text-xl leading-relaxed text-foreground/50 max-w-lg">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm font-medium text-foreground/40">
                      <div className="h-1 w-1 rounded-full bg-burnt-orange" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  href={product.href} 
                  className="inline-flex items-center space-x-2 font-bold text-foreground group-hover:text-burnt-orange transition-colors pt-4"
                >
                  <span>Explore {product.title}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              
              {/* Abstract Visual Placeholder (Google-style Minimalist UI snippet) */}
              <div className="flex-1 h-[400px] rounded-[2.5rem] bg-foreground/[0.02] border border-foreground/5 relative overflow-hidden">
                <div className="absolute inset-x-8 inset-y-12 border border-foreground/10 rounded-2xl bg-card shadow-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-x-12 bottom-0 top-24 border border-foreground/10 rounded-t-2xl bg-background group-hover:translate-y-[-10px] transition-transform duration-700" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Voice Terminal Section */}
      <section className="py-40 px-6 bg-foreground/[0.01]">
        <div className="container mx-auto max-w-3xl text-center space-y-12">
          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-6xl">
            Talk to OrenAgents.
          </h2>
          <p className="text-xl text-foreground/50">
            Click the pulse to trigger our autonomous voice demonstration. 
            Experience zero-latency intelligence.
          </p>
          <div className="relative mx-auto h-40 w-40 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-burnt-orange/20 animate-ping" />
            <button className="relative h-24 w-24 rounded-full bg-burnt-orange shadow-2xl shadow-burnt-orange/50 flex items-center justify-center text-white transition-transform hover:scale-110 active:scale-95">
              <Mic className="h-10 w-10" />
            </button>
          </div>
        </div>
      </section>

      {/* Clinical Footer */}
      <footer className="border-t border-foreground/5 py-20 px-6">
        <div className="container mx-auto max-w-7xl flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex items-center space-x-3 grayscale opacity-30">
            <div className="h-6 w-6 rounded bg-foreground" />
            <span className="text-xl font-bold tracking-tight text-foreground uppercase tracking-widest">OrenGen</span>
          </div>
          
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Platform</h5>
              <div className="flex flex-col space-y-2 text-sm text-foreground/60">
                <Link href="/orennexus" className="hover:text-burnt-orange transition-colors">Console</Link>
                <Link href="/docs" className="hover:text-burnt-orange transition-colors">Documentation</Link>
                <Link href="/pricing" className="hover:text-burnt-orange transition-colors">API Keys</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Company</h5>
              <div className="flex flex-col space-y-2 text-sm text-foreground/60">
                <Link href="/about" className="hover:text-burnt-orange transition-colors">Ecosystem</Link>
                <Link href="/security-overview" className="hover:text-burnt-orange transition-colors">Security</Link>
                <Link href="/legal-disclaimers" className="hover:text-burnt-orange transition-colors">Compliance</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
