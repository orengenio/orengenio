import { Hero } from "@/components/Hero";
import { Comparison } from "@/components/Comparison";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Comparison />
      <Pricing />
    </main>
  );
}
