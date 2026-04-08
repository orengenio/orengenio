import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Comparison } from "@/components/Comparison";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-burnt-orange/30 selection:text-burnt-orange text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Comparison />
      <Pricing />
      <Footer />
    </main>
  );
}
