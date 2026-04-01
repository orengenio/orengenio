import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Cloud, Cpu, Workflow, Database, FlaskConical } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Oren AI",
      description: "Conversational intelligence evolved for enterprise scale.",
      icon: <Cpu className="h-6 w-6 text-burnt-orange" />,
      className: "md:col-span-2",
    },
    {
      title: "Oren Cloud",
      description: "High-performance infrastructure, built on the core.",
      icon: <Cloud className="h-6 w-6 text-terracotta" />,
    },
    {
      title: "Oren Flow",
      description: "Automate complex workflows with AI orchestration.",
      icon: <Workflow className="h-6 w-6 text-burnt-orange" />,
    },
    {
      title: "Oren Data",
      description: "Vector knowledge bases and RAG pipelines.",
      icon: <Database className="h-6 w-6 text-terracotta" />,
      className: "md:col-span-2",
    },
    {
      title: "Oren Labs",
      description: "Exploring the bleeding edge of AI research.",
      icon: <FlaskConical className="h-6 w-6 text-burnt-orange" />,
    },
  ];

  return (
    <main className="min-h-screen selection:bg-burnt-orange/30 selection:text-burnt-orange">
      <Navbar />
      <Hero />

      {/* Services Section */}
      <section id="products" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              The Unified Ecosystem
            </h2>
            <p className="text-lg text-foreground/60">
              A specialized suite of AI and infrastructure tools designed to 
              bring your most complex ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl border border-foreground/5 bg-card p-8 transition-all hover:border-burnt-orange/20 hover:shadow-2xl hover:shadow-burnt-orange/5 ${
                  service.className || ""
                }`}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/5 transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                <p className="text-foreground/60">{service.description}</p>
                <div className="absolute -right-8 -bottom-8 opacity-5 transition-transform group-hover:scale-125">
                  {service.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="border-t border-foreground/5 py-12 px-6">
        <div className="container mx-auto max-w-7xl flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2 opacity-50">
            <div className="h-6 w-6 rounded bg-burnt-orange" />
            <span className="font-bold tracking-tight">OrenGen</span>
          </div>
          <p className="text-sm text-foreground/40">
            © 2026 OrenGen Inc. All rights reserved. Evolved intelligence.
          </p>
        </div>
      </footer>
    </main>
  );
}
