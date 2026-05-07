import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { AgentShowcase } from "@/components/AgentShowcase";
import { Comparison } from "@/components/Comparison";
import { Testimonials } from "@/components/Testimonials";
import { BlogPreview } from "@/components/BlogPreview";
import { Pricing } from "@/components/Pricing";

export const metadata: Metadata = {
  title: "OrenGen Platform | Operational SaaS",
  description:
    "Deploy our suite of specialized AI products — OrenAgents, Buy-Lingual™ Agents, OrenNexus, OrenAutomations and more — to modernize your existing workflows instantly.",
  alternates: { canonical: "/platform" },
  openGraph: {
    title: "OrenGen Platform | Operational SaaS",
    description:
      "Deploy autonomous AI agents that handle voice, chat, SMS, and email in any language, 24/7.",
    url: "https://orengen.io/platform",
  },
};

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <AgentShowcase />
      <Comparison />
      <Testimonials />
      <BlogPreview />
      <Pricing />
    </main>
  );
}
