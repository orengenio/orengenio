import { Hero } from "@/components/Hero";
import { AgentShowcase } from "@/components/AgentShowcase";
import { Comparison } from "@/components/Comparison";
import { Testimonials } from "@/components/Testimonials";
import { BlogPreview } from "@/components/BlogPreview";
import { Pricing } from "@/components/Pricing";

export default function Home() {
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
