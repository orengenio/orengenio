import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FloatingOrb } from "@/components/FloatingOrb";
import { Users, Mic, Laptop, Target, Share2, Workflow } from "lucide-react";

export default function Home() {
  const products = [
    {
      title: "OrenAgents",
      subtitle: "The Autonomous Workforce",
      description: "Deploy Buy-Lingual™ conversational AI for inbound/outbound calls, or hire autonomous multi-agent departments to handle sales, support, and operations.",
      features: ["OrenAgents Voice", "OrenAgents Employees"],
      icon: <Users className="h-8 w-8 text-burnt-orange" />,
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2",
      bgClass: "bg-gradient-to-br from-card to-burnt-orange/5",
    },
    {
      title: "OrenNexus",
      subtitle: "The Command Center",
      description: "Stop managing three separate tools. OrenNexus unifies your entire client acquisition, CRM pipeline, and growth stack into one intelligent hub.",
      features: ["Unified CRM", "Pipeline Automation"],
      icon: <Target className="h-6 w-6 text-terracotta" />,
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-2",
      bgClass: "bg-card",
    },
    {
      title: "OrenWeb",
      subtitle: "The Digital Presence",
      description: "Bespoke, high-performance web development and 'Talking Sites' integrated with conversational AI concierges.",
      features: ["OrenWeb Design", "OrenWeb Talk"],
      icon: <Laptop className="h-6 w-6 text-burnt-orange" />,
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1",
      bgClass: "bg-card",
    },
    {
      title: "OrenSocial",
      subtitle: "The Amplifier",
      description: "AI-powered social media management and autonomous content scheduling.",
      features: ["Content Scheduling", "Community Management"],
      icon: <Share2 className="h-6 w-6 text-terracotta" />,
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      bgClass: "bg-card",
    },
  ];

  return (
    <main className="min-h-screen selection:bg-burnt-orange/30 selection:text-burnt-orange">
      <Navbar />
      
      {/* The "Claude" Minimalist Hero */}
      <Hero />
      <FloatingOrb />

      {/* The "Google" Ecosystem Grid (Bento Box) */}
      <section id="ecosystem" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              The Verified Ecosystem
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-foreground/60">
              A specialized suite of AI agents and infrastructure tools designed to bring your most complex ideas to life, autonomously.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-[minmax(250px,_auto)]">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[2rem] border border-foreground/5 p-10 transition-all hover:border-burnt-orange/30 hover:shadow-2xl hover:shadow-burnt-orange/10 ${product.colSpan} ${product.rowSpan} ${product.bgClass}`}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-background/50 backdrop-blur-sm transition-transform group-hover:scale-110">
                  {product.icon}
                </div>
                
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
                  {product.title}
                </h3>
                <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-burnt-orange">
                  {product.subtitle}
                </h4>
                
                <p className="mb-8 text-lg text-foreground/70 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {product.features.map((feature, fIndex) => (
                    <span 
                      key={fIndex} 
                      className="inline-flex items-center rounded-full border border-foreground/10 bg-background/50 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Subtle Background Icon */}
                <div className="absolute -right-12 -bottom-12 opacity-5 transition-transform duration-700 group-hover:scale-125 group-hover:opacity-10">
                  {product.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The "Show, Don't Tell" Demo Section (Vapi Placeholder) */}
      <section className="border-t border-foreground/5 bg-foreground/[0.02] py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12 inline-flex h-20 w-20 items-center justify-center rounded-full bg-burnt-orange/10">
            <Mic className="h-10 w-10 text-burnt-orange" />
          </div>
          <h2 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl">
            Experience OrenAgents Voice
          </h2>
          <p className="mb-12 text-xl text-foreground/60">
            Don't just read about Buy-Lingual™ conversational AI. Speak to it right now.
          </p>
          
          {/* VAPI.AI INTEGRATION POINT */}
          <div className="relative mx-auto flex max-w-md flex-col items-center justify-center rounded-3xl border border-foreground/10 bg-card p-12 shadow-xl">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-burnt-orange/5 to-transparent blur-xl" />
            <button className="group flex h-24 w-24 items-center justify-center rounded-full bg-burnt-orange text-white shadow-lg shadow-burnt-orange/25 transition-all hover:scale-105 active:scale-95">
              <Mic className="h-10 w-10 transition-transform group-hover:scale-110" />
            </button>
            <p className="mt-6 font-medium text-foreground/60">Click to Call Agent</p>
            <p className="mt-2 text-xs text-foreground/40">(Vapi.ai Integration Active)</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/5 bg-background py-16 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity">
            <div className="h-6 w-6 rounded bg-burnt-orange" />
            <span className="text-xl font-bold tracking-tight text-foreground">Oren<span className="text-burnt-orange">Gen</span></span>
          </div>
          
          <div className="flex space-x-8 text-sm font-medium text-foreground/60">
            <a href="/legal-disclaimers" className="hover:text-burnt-orange transition-colors">Legal Disclaimers</a>
            <a href="/privacy-policy" className="hover:text-burnt-orange transition-colors">Privacy Policy</a>
            <a href="/termsandconditions" className="hover:text-burnt-orange transition-colors">Terms & Conditions</a>
          </div>

          <p className="text-sm text-foreground/40">
            © 2026 OrenGen Worldwide LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
