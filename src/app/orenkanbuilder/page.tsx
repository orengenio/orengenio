import type { Metadata } from "next"
import { KanBuilder } from "./KanBuilder"

export const metadata: Metadata = {
  title: "OrenKanBuilder™ — Build Your Custom AI Engine | OrenGen",
  description:
    "Drag-and-drop AI solution builder. Choose Buy-Lingual™ voice agents, CRM, social, web — select tiers, toggle billing, and lock in your custom AI engine.",
  alternates: { canonical: "https://orengen.io/orenkanbuilder" },
}

export default function OrenKanBuilderPage() {
  return <KanBuilder />
}
