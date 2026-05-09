import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { AgentShowcase } from "@/components/AgentShowcase";
import { Comparison } from "@/components/Comparison";
import { Testimonials } from "@/components/Testimonials";
import { BlogPreview } from "@/components/BlogPreview";
import { Pricing } from "@/components/Pricing";
import { SocialProofBar } from "@/components/SocialProofBar";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { OFFICIAL_LOGO_BLUE_URL } from "@/lib/brandAssets";

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

const productLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "OrenGen Platform",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Operational SaaS platform that deploys autonomous AI agents for voice, chat, SMS, and email in any language, 24/7.",
  image: OFFICIAL_LOGO_BLUE_URL,
  url: "https://orengen.io/platform",
  offers: {
    "@type": "Offer",
    price: "197",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://orengen.io/pricing",
  },
  publisher: { "@type": "Organization", name: "OrenGen Worldwide" },
};

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://orengen.io" },
          { name: "Platform", url: "https://orengen.io/platform" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      <Hero />
      <SocialProofBar />
      <AgentShowcase />
      <Comparison />
      <Testimonials />
      <BlogPreview />
      <Pricing />
    </main>
  );
}
