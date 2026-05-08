"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { runQualifierAndPersist } from "@/lib/integrations/crewai";
import type { SupabaseClient } from "@supabase/supabase-js";

async function requireUserAndTenant() {
  const supabase = (await createSupabaseServerClient()) as unknown as SupabaseClient;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: memberships } = await supabase
    .from("tenant_members")
    .select("tenant_id, role")
    .eq("user_id", user.id)
    .limit(1);

  const tenantId = memberships?.[0]?.tenant_id as string | undefined;
  if (!tenantId) redirect("/onboarding");

  return { supabase, user, tenantId };
}

export async function createLead(formData: FormData) {
  const { supabase, user, tenantId } = await requireUserAndTenant();

  const firstName = String(formData.get("first_name") ?? "").trim() || null;
  const lastName = String(formData.get("last_name") ?? "").trim() || null;
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const phone = String(formData.get("phone") ?? "").trim() || null;
  const title = String(formData.get("title") ?? "").trim() || null;
  const source = String(formData.get("source") ?? "").trim() || "manual";

  const companyName = String(formData.get("company_name") ?? "").trim() || null;
  const companyDomain =
    String(formData.get("company_domain") ?? "").trim().toLowerCase() || null;

  if (!email && !firstName && !lastName) {
    redirect(`/leads/new?error=${encodeURIComponent("missing-name-or-email")}`);
  }

  let companyId: string | null = null;
  if (companyDomain) {
    const { data: existingCompany } = await supabase
      .from("companies")
      .select("id")
      .eq("tenant_id", tenantId)
      .ilike("domain", companyDomain)
      .maybeSingle();
    companyId = (existingCompany?.id as string | undefined) ?? null;
  }

  if (!companyId && (companyName || companyDomain)) {
    const { data: createdCompany, error: companyErr } = await supabase
      .from("companies")
      .insert({
        tenant_id: tenantId,
        name: companyName ?? companyDomain ?? "Unknown",
        domain: companyDomain,
        created_by: user.id,
      })
      .select("id")
      .single();
    if (companyErr || !createdCompany) {
      redirect(`/leads/new?error=${encodeURIComponent(companyErr?.message ?? "company-create")}`);
    }
    companyId = createdCompany.id as string;
  }

  let contactId: string | null = null;
  if (email) {
    const { data: existingContact } = await supabase
      .from("contacts")
      .select("id")
      .eq("tenant_id", tenantId)
      .ilike("email", email)
      .maybeSingle();
    contactId = (existingContact?.id as string | undefined) ?? null;
  }

  if (contactId) {
    const { error } = await supabase
      .from("contacts")
      .update({
        first_name: firstName,
        last_name: lastName,
        phone,
        title,
        company_id: companyId,
        source,
      })
      .eq("id", contactId);
    if (error) {
      redirect(`/leads/new?error=${encodeURIComponent(error.message)}`);
    }
  } else {
    const { data: createdContact, error: contactErr } = await supabase
      .from("contacts")
      .insert({
        tenant_id: tenantId,
        company_id: companyId,
        first_name: firstName,
        last_name: lastName,
        email: email || null,
        phone,
        title,
        source,
        tags: [],
        created_by: user.id,
      })
      .select("id")
      .single();
    if (contactErr || !createdContact) {
      redirect(`/leads/new?error=${encodeURIComponent(contactErr?.message ?? "contact-create")}`);
    }
    contactId = createdContact.id as string;
  }

  const { data: lead, error: leadErr } = await supabase
    .from("leads")
    .insert({
      tenant_id: tenantId,
      contact_id: contactId,
      company_id: companyId,
      source,
      status: "new",
      raw_payload: { created_via: "manual" },
      created_by: user.id,
    })
    .select("id")
    .single();

  if (leadErr || !lead) {
    redirect(`/leads/new?error=${encodeURIComponent(leadErr?.message ?? "lead-create")}`);
  }

  revalidatePath("/leads");
  redirect(`/leads/${lead.id}`);
}

export async function updateLead(formData: FormData) {
  const { supabase } = await requireUserAndTenant();
  const leadId = String(formData.get("lead_id") ?? "");
  const source = String(formData.get("source") ?? "").trim() || null;
  if (!leadId) redirect("/leads");

  const { error } = await supabase.from("leads").update({ source }).eq("id", leadId);
  if (error) redirect(`/leads/${leadId}?error=${encodeURIComponent(error.message)}`);

  revalidatePath(`/leads/${leadId}`);
  redirect(`/leads/${leadId}`);
}

export async function assignLead(leadId: string, userId: string | null) {
  const { supabase } = await requireUserAndTenant();
  const { error } = await supabase
    .from("leads")
    .update({ assigned_to: userId })
    .eq("id", leadId);
  if (error) redirect(`/leads/${leadId}?error=${encodeURIComponent(error.message)}`);
  revalidatePath(`/leads/${leadId}`);
  redirect(`/leads/${leadId}`);
}

export async function markLost(leadId: string) {
  const { supabase } = await requireUserAndTenant();
  const { error } = await supabase.from("leads").update({ status: "lost" }).eq("id", leadId);
  if (error) redirect(`/leads/${leadId}?error=${encodeURIComponent(error.message)}`);
  revalidatePath("/leads");
  revalidatePath(`/leads/${leadId}`);
  redirect(`/leads/${leadId}`);
}

export async function markSpam(leadId: string) {
  const { supabase } = await requireUserAndTenant();
  const { error } = await supabase.from("leads").update({ status: "spam" }).eq("id", leadId);
  if (error) redirect(`/leads/${leadId}?error=${encodeURIComponent(error.message)}`);
  revalidatePath("/leads");
  revalidatePath(`/leads/${leadId}`);
  redirect(`/leads/${leadId}`);
}

export async function requalifyLead(leadId: string) {
  const { supabase } = await requireUserAndTenant();

  const { error: setErr } = await supabase
    .from("leads")
    .update({ status: "qualifying" })
    .eq("id", leadId);
  if (setErr) redirect(`/leads/${leadId}?error=${encodeURIComponent(setErr.message)}`);

  try {
    await runQualifierAndPersist(leadId);
  } catch (err) {
    redirect(`/leads/${leadId}?error=${encodeURIComponent(String(err))}`);
  }

  revalidatePath("/leads");
  revalidatePath(`/leads/${leadId}`);
  redirect(`/leads/${leadId}`);
}

export async function convertLeadToDeal(leadId: string, formData: FormData) {
  const { supabase, user, tenantId } = await requireUserAndTenant();

  const { data: lead, error: leadErr } = await supabase
    .from("leads")
    .select("id, contact_id, company_id, assigned_to, converted_to_deal_id, status")
    .eq("id", leadId)
    .maybeSingle();

  if (leadErr || !lead) redirect(`/leads/${leadId}?error=${encodeURIComponent("lead-not-found")}`);
  if (lead.converted_to_deal_id) redirect(`/leads/${leadId}`);

  const { data: pipeline, error: pipelineErr } = await supabase
    .from("pipelines")
    .select("id")
    .eq("tenant_id", tenantId)
    .eq("is_default", true)
    .maybeSingle();

  if (pipelineErr || !pipeline) {
    redirect(`/leads/${leadId}?error=${encodeURIComponent("default-pipeline-not-found")}`);
  }

  const { data: stage, error: stageErr } = await supabase
    .from("stages")
    .select("id")
    .eq("tenant_id", tenantId)
    .eq("pipeline_id", pipeline.id as string)
    .order("position", { ascending: true })
    .limit(1)
    .maybeSingle();

  if (stageErr || !stage) {
    redirect(`/leads/${leadId}?error=${encodeURIComponent("first-stage-not-found")}`);
  }

  const title = String(formData.get("title") ?? "").trim() || "New deal";
  const valueCentsRaw = String(formData.get("value_cents") ?? "").trim();
  const valueCents = valueCentsRaw ? Number(valueCentsRaw) : 0;
  const currency = String(formData.get("currency") ?? "USD").trim() || "USD";
  const notes = String(formData.get("notes") ?? "").trim() || null;

  const { data: deal, error: dealErr } = await supabase
    .from("deals")
    .insert({
      tenant_id: tenantId,
      pipeline_id: pipeline.id,
      stage_id: stage.id,
      contact_id: lead.contact_id,
      company_id: lead.company_id,
      lead_id: lead.id,
      owner_id: lead.assigned_to ?? user.id,
      title,
      value_cents: Number.isFinite(valueCents) ? Math.max(0, Math.round(valueCents)) : 0,
      currency,
      notes,
      created_by: user.id,
    })
    .select("id")
    .single();

  if (dealErr || !deal) {
    redirect(`/leads/${leadId}?error=${encodeURIComponent(dealErr?.message ?? "deal-create")}`);
  }

  const { error: updateErr } = await supabase
    .from("leads")
    .update({ converted_to_deal_id: deal.id as string, status: "converted" })
    .eq("id", leadId);

  if (updateErr) {
    redirect(`/leads/${leadId}?error=${encodeURIComponent(updateErr.message)}`);
  }

  revalidatePath("/leads");
  revalidatePath(`/leads/${leadId}`);
  redirect(`/leads/${leadId}`);
}

