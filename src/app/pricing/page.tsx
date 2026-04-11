import type { Metadata } from "next"
import { Pricing } from "@/components/Pricing"

export const metadata: Metadata = {
  title: "Pricing — AI That Pays for Itself | OrenGen",
  description:
    "Simple, transparent pricing for OrenGen AI agents, CRM, automation, and web. Starter $197/mo · Growth $497/mo · Dominate $997/mo · Enterprise custom.",
  alternates: { canonical: "https://orengen.io/pricing" },
}

export default function PricingPage() {
  return (
    <main>
      <Pricing />
    </main>
  )
}
