import "server-only";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { serverEnv } from "@/lib/env";
import type { LeadTier } from "@/lib/db/types";
import type { SupabaseClient } from "@supabase/supabase-js";

export type QualifyLeadInput = {
  lead_id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  use_case?: string;
  source?: string;
};

export type QualifyLeadVerdict = {
  lead_id: string;
  score: number;
  tier: LeadTier;
  recommended_action: string;
  outreach_email: string;
  sms_template: string;
  research_summary: string;
  raw: Record<string, unknown>;
};

function mapTier(input: unknown): LeadTier {
  const raw = String(input ?? "").toLowerCase().trim();
  if (raw === "hot" || raw === "warm" || raw === "cold" || raw === "unqualified") return raw;
  // CrewAI service may return "nurture" (older heuristic). Map to cold.
  if (raw === "nurture") return "cold";
  return "cold";
}

export async function qualifyLead(input: QualifyLeadInput): Promise<QualifyLeadVerdict> {
  if (!serverEnv.internalApiToken) {
    throw new Error("INTERNAL_API_TOKEN is not set");
  }
  if (!serverEnv.crewaiUrl) {
    throw new Error("CREWAI_URL is not set");
  }

  const url = new URL("/qualify-lead", serverEnv.crewaiUrl);
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-OrenGen-Token": serverEnv.internalApiToken,
    },
    body: JSON.stringify({
      lead_id: input.lead_id,
      name: input.name,
      email: input.email,
      phone: input.phone ?? "",
      company: input.company ?? "",
      use_case: input.use_case ?? "",
      source: input.source ?? "website",
    }),
    signal: AbortSignal.timeout(20_000),
    cache: "no-store",
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`CrewAI qualifier failed (${res.status}): ${text.slice(0, 600)}`);
  }

  let parsed: unknown = null;
  try {
    parsed = JSON.parse(text) as unknown;
  } catch {
    throw new Error(`CrewAI qualifier returned non-JSON: ${text.slice(0, 600)}`);
  }

  const obj = parsed as Record<string, unknown>;
  const scoreRaw = obj.score;
  const scoreNum = Math.max(
    0,
    Math.min(100, typeof scoreRaw === "number" ? scoreRaw : Number(scoreRaw ?? 0)),
  );

  const verdict: QualifyLeadVerdict = {
    lead_id: String(obj.lead_id ?? input.lead_id),
    score: Number.isFinite(scoreNum) ? scoreNum : 0,
    tier: mapTier(obj.tier),
    recommended_action: String(obj.recommended_action ?? ""),
    outreach_email: String(obj.outreach_email ?? ""),
    sms_template: String(obj.sms_template ?? ""),
    research_summary: String(obj.research_summary ?? ""),
    raw: obj,
  };

  return verdict;
}

export async function runQualifierAndPersist(leadId: string) {
  const admin = createSupabaseAdminClient() as unknown as SupabaseClient;

  const { data: lead, error: leadErr } = await admin
    .from("leads")
    .select(
      "id, tenant_id, source, status, contact_id, company_id, raw_payload, contacts(first_name,last_name,email,phone), companies(name,domain)",
    )
    .eq("id", leadId)
    .maybeSingle();

  if (leadErr || !lead) {
    throw new Error(leadErr?.message ?? "Lead not found");
  }

  const leadRec = lead as unknown as Record<string, unknown>;
  const contactRel = leadRec.contacts;
  const companyRel = leadRec.companies;
  const contact = Array.isArray(contactRel)
    ? ((contactRel[0] ?? null) as Record<string, unknown> | null)
    : ((contactRel ?? null) as Record<string, unknown> | null);
  const company = Array.isArray(companyRel)
    ? ((companyRel[0] ?? null) as Record<string, unknown> | null)
    : ((companyRel ?? null) as Record<string, unknown> | null);

  const nameParts = [
    String((contact?.first_name as string | undefined) ?? "").trim(),
    String((contact?.last_name as string | undefined) ?? "").trim(),
  ].filter(Boolean);
  const name = nameParts.join(" ") || "Unknown";
  const email = String((contact?.email as string | undefined) ?? "").trim().toLowerCase();

  const rawPayload = (lead as unknown as { raw_payload?: Record<string, unknown> | null }).raw_payload;
  const useCase =
    typeof rawPayload?.use_case === "string"
      ? rawPayload.use_case
      : typeof rawPayload?.message === "string"
        ? rawPayload.message
        : "";

  const verdict = await qualifyLead({
    lead_id: leadId,
    name,
    email,
    phone: String((contact as { phone?: unknown } | null)?.phone ?? ""),
    company: String((company as { name?: unknown } | null)?.name ?? ""),
    use_case: useCase,
    source: String((leadRec as { source?: unknown }).source ?? "website"),
  });

  const nextStatus =
    verdict.tier === "unqualified" ? "spam" : verdict.score < 25 ? "lost" : "qualified";

  const { error: updateErr } = await admin
    .from("leads")
    .update({
      qualifier_score: Math.round(verdict.score),
      qualifier_tier: verdict.tier,
      qualifier_action: verdict.recommended_action,
      qualifier_outreach_email: verdict.outreach_email,
      qualifier_sms: verdict.sms_template,
      qualifier_research: verdict.research_summary,
      qualifier_raw: verdict.raw,
      status: nextStatus,
    })
    .eq("id", leadId);

  if (updateErr) throw new Error(updateErr.message);
}

