import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FloatingOrb } from "@/components/FloatingOrb";
import { Mic, Laptop, Target, ArrowUpRight, CheckCircle2, Activity, Code2, Layers, Linkedin, Instagram, Facebook, Github, Youtube, Music2, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const productRows = [
    {
      title: "OrenAgents",
      tagline: "Autonomous Voice & Employees",
      description: "Harness the power of Buy-Lingual™ conversational AI for inbound and outbound operations. Hire autonomous multi-agent departments to handle sales, support, and operations.",
      icon: <Mic className="h-8 w-8 text-burnt-orange" />,
      features: ["Real-time Latency (<500ms)", "Enterprise Knowledge Base", "Human-to-AI Handover"],
      href: "/orenagents-voice",
      visual: (
        <div className="p-8 space-y-4">
          <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-foreground/40">Agent Status: Active</span>
            </div>
            <Activity className="h-4 w-4 text-burnt-orange" />
          </div>
          <div className="space-y-3">
            <div className="rounded-xl bg-foreground/[0.03] p-3 border border-foreground/5">
              <p className="text-[10px] text-burnt-orange font-bold mb-1">VOICE_ENGINE</p>
              <p className="text-xs text-foreground/60 italic">"Analyzing sentiment... User is interested in pricing."</p>
            </div>
            <div className="rounded-xl bg-foreground/[0.03] p-3 border border-foreground/5">
              <p className="text-[10px] text-green-500 font-bold mb-1">ACTION_EXECUTED</p>
              <p className="text-xs text-foreground/60 italic">Calendar availability synced. Appointment booked for 3:00 PM.</p>
            </div>
            <div className="flex justify-center pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => <div key={i} className="h-8 w-8 rounded-full bg-burnt-orange/20 border-2 border-background" />)}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "OrenWeb",
      tagline: "High-Performance Talking Sites",
      description: "Beyond static design. We build 'Talking Sites' that engage visitors using conversational AI, converting traffic into booked appointments automatically.",
      icon: <Laptop className="h-8 w-8 text-terracotta" />,
      features: ["Next.js 15 Foundations", "Conversational UX", "Built-in Lead Capture"],
      href: "/orenweb-talk",
      visual: (
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-3 w-3 rounded-full bg-red-500/20" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
            <div className="h-3 w-3 rounded-full bg-green-500/20" />
          </div>
          <div className="flex-1 rounded-xl bg-[#1e1e1e] p-4 font-mono text-[11px] leading-relaxed overflow-hidden border border-white/5">
            <p className="text-blue-400">export default function <span className="text-yellow-300">TalkingSite</span>() {'{'}</p>
            <p className="pl-4 text-gray-400">return (</p>
            <p className="pl-8 text-pink-400">{'<VoiceConcierge'}</p>
            <p className="pl-12 text-blue-300">agentId=</p>
            <p className="pl-12 text-orange-300">"oren_master_01"</p>
            <p className="pl-12 text-blue-300">onConversion=</p>
            <p className="pl-12 text-yellow-300">{'{triggerNexus}'}</p>
            <p className="pl-8 text-pink-400">{'/>'}</p>
            <p className="pl-4 text-gray-400">)</p>
            <p className="text-blue-400">{'}'}</p>
          </div>
          <div className="mt-4 flex items-center justify-between text-[10px] text-foreground/30 font-bold uppercase tracking-widest">
            <span>Next.js 15</span>
            <span>Tailwind 4.0</span>
          </div>
        </div>
      )
    },
    {
      title: "OrenNexus",
      tagline: "Unified Growth Engine",
      description: "The ultimate command center. We replace three separate logins with one unified CRM, pipeline manager, and multi-channel automation hub.",
      icon: <Target className="h-8 w-8 text-burnt-orange" />,
      features: ["Multi-Tenant CRM", "n8n Orchestration", "Usage-Based Billing"],
      href: "/orennexus",
      visual: (
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-burnt-orange/5 border border-burnt-orange/10 p-4">
              <p className="text-[10px] font-bold text-foreground/40 uppercase mb-1">New Leads</p>
              <p className="text-2xl font-black text-burnt-orange">+124</p>
            </div>
            <div className="rounded-2xl bg-foreground/[0.03] border border-foreground/5 p-4">
              <p className="text-[10px] font-bold text-foreground/40 uppercase mb-1">Revenue</p>
              <p className="text-2xl font-black text-foreground">$14.2k</p>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { label: "Lead Inbound", status: "Completed", color: "text-green-500" },
              { label: "AI Qualification", status: "In Progress", color: "text-burnt-orange" },
              { label: "CRM Sync", status: "Pending", color: "text-foreground/20" }
            ].map((step, i) => (
              <div key={i} className="flex items-center justify-between text-xs font-bold border-b border-foreground/5 pb-2">
                <span className="text-foreground/60">{step.label}</span>
                <span className={step.color}>{step.status}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Layers className="h-12 w-12 text-foreground/5" />
          </div>
        </div>
      )
    }
  ];

  const socials = [
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/orengenio", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/orengenio", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/orengenio", label: "Facebook" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/orengenio", label: "GitHub" },
    { icon: <Youtube className="h-5 w-5" />, href: "https://www.youtube.com/@orengenio", label: "YouTube" },
    { icon: <Music2 className="h-5 w-5" />, href: "https://tiktok.com/@orengenio", label: "TikTok" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/orengenio", label: "X" },
  ];

  const trustLinks = [
    { label: "Trustpilot", href: "https://www.trustpilot.com/review/orengen.io" },
    { label: "Clutch", href: "https://clutch.co/profile/orengen-worldwide" },
    { label: "G2", href: "https://www.g2.com/products/orengen/reviews" },
    { label: "BBB", href: "https://www.bbb.org/us/tx/mansfield/profile/computer-software/orengen-worldwide-0825-1000236185/customer-reviews" },
    { label: "Product Hunt", href: "https://www.producthunt.com/products/orengen" }
  ];

  return (
    <main className="min-h-screen bg-background selection:bg-burnt-orange/30 selection:text-burnt-orange">
      <Navbar />
      <Hero />
      <FloatingOrb />

      {/* Product Showcase */}
      <section className="px-6 py-20 bg-background">
        <div className="container mx-auto max-w-5xl space-y-32">
          {productRows.map((product, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center gap-16 group">
              <div className="flex-1 space-y-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-foreground/5 border border-foreground/5 transition-all group-hover:scale-110 group-hover:border-burnt-orange/20">
                  {product.icon}
                </div>
                <div>
                  <h2 className="text-4xl font-black tracking-tighter text-foreground mb-1">
                    {product.title}
                  </h2>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-burnt-orange/60">
                    {product.tagline}
                  </p>
                </div>
                <p className="text-xl leading-relaxed text-foreground/50 max-w-lg">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-foreground/30">
                      <CheckCircle2 className="h-3 w-3 text-burnt-orange" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  href={product.href} 
                  className="inline-flex items-center space-x-3 font-bold text-foreground group-hover:text-burnt-orange transition-all pt-6"
                >
                  <span className="border-b-2 border-transparent group-hover:border-burnt-orange">Explore Platform</span>
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
              
              <div className="flex-1 h-[450px] rounded-[3rem] bg-foreground/[0.02] border border-foreground/5 relative overflow-hidden shadow-inner group-hover:border-burnt-orange/10 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-background to-transparent opacity-50" />
                <div className="relative h-full transition-transform duration-1000 group-hover:scale-[1.02]">
                  {product.visual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Voice Terminal Section */}
      <section className="py-40 px-6 bg-foreground/[0.01] border-y border-foreground/5">
        <div className="container mx-auto max-w-3xl text-center space-y-12">
          <h2 className="text-5xl font-black tracking-tighter text-foreground sm:text-7xl">
            Talk to OrenAgents.
          </h2>
          <p className="text-xl text-foreground/50 max-w-xl mx-auto">
            Experience zero-latency intelligence. Click the pulse to trigger our autonomous voice demonstration.
          </p>
          <div className="relative mx-auto h-40 w-40 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-burnt-orange/10 animate-ping" />
            <button className="relative h-28 w-28 rounded-full bg-burnt-orange shadow-[0_0_50px_rgba(204,85,0,0.4)] flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 group">
              <Mic className="h-12 w-12 transition-transform group-hover:rotate-12" />
            </button>
          </div>
        </div>
      </section>

      {/* Clinical Footer */}
      <footer className="border-t border-foreground/5 py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pb-16">
            <div className="md:col-span-1 space-y-8">
              <div className="flex items-center space-x-3">
                <div className="h-6 w-6 rounded bg-burnt-orange" />
                <span className="text-xl font-bold tracking-tight text-foreground uppercase tracking-[0.3em]">OrenGen</span>
              </div>
              <p className="text-sm text-foreground/40 leading-relaxed">
                The evolution of intelligence. Enterprise AI, Cloud Infrastructure, and Autonomous Agents.
              </p>
              <div className="flex flex-wrap gap-4">
                {socials.map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener" className="text-foreground/30 hover:text-burnt-orange transition-colors" aria-label={social.label}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Platform</h5>
              <div className="flex flex-col space-y-3 text-sm font-bold text-foreground/50">
                <Link href="/orenagents-voice" className="hover:text-burnt-orange transition-colors">OrenAgents</Link>
                <Link href="/orennexus" className="hover:text-burnt-orange transition-colors">OrenNexus</Link>
                <Link href="/orenweb-talk" className="hover:text-burnt-orange transition-colors">OrenWeb</Link>
                <Link href="/orensocial" className="hover:text-burnt-orange transition-colors">OrenSocial</Link>
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Company</h5>
              <div className="flex flex-col space-y-3 text-sm font-bold text-foreground/50">
                <Link href="/about" className="hover:text-burnt-orange transition-colors">Ecosystem</Link>
                <Link href="/security-overview" className="hover:text-burnt-orange transition-colors">Security</Link>
                <Link href="/legal-disclaimers" className="hover:text-burnt-orange transition-colors">Compliance</Link>
                <Link href="/privacy-policy" className="hover:text-burnt-orange transition-colors">Privacy Policy</Link>
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Verified On</h5>
              <div className="grid grid-cols-2 gap-3">
                {trustLinks.map((link, i) => (
                  <a key={i} href={link.href} target="_blank" rel="noopener" className="text-[10px] font-bold text-foreground/30 hover:text-burnt-orange transition-colors border border-foreground/5 rounded-lg px-3 py-2 text-center">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold text-foreground/20 uppercase tracking-[0.5em]">
              © 2026 OrenGen Worldwide LLC.
            </p>
            <div className="flex space-x-8 text-[10px] font-bold text-foreground/20 uppercase tracking-widest">
              <span>Built on Next.js 15</span>
              <span>Cloud on Coolify</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
