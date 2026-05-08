"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

async function getTenantAndRole() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: memberships } = await supabase
    .from("tenant_members")
    .select("tenant_id, role")
    .eq("user_id", user.id)
    .limit(1);
  if (!memberships || memberships.length === 0) redirect("/onboarding");

  const tenantId = memberships[0].tenant_id as string;
  const myRole = memberships[0].role as "owner" | "admin" | "member";
  return { supabase, userId: user.id, tenantId, myRole };
}

function parseCents(raw: FormDataEntryValue | null): number {
  const v = String(raw ?? "").trim();
  if (!v) return 0;
  const normalized = v.replace(/,/g, "");
  const [whole, frac = ""] = normalized.split(".");
  const w = Number.parseInt(whole || "0", 10);
  const f = Number.parseInt((frac + "00").slice(0, 2), 10);
  if (!Number.isFinite(w) || !Number.isFinite(f)) return 0;
  return w * 100 + (w < 0 ? -f : f);
}

export async function createDeal(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const currency = String(formData.get("currency") ?? "USD").trim().toUpperCase();
  const expectedClose = String(formData.get("expected_close") ?? "").trim();
  const pipelineId = String(formData.get("pipeline_id") ?? "");
  const stageId = String(formData.get("stage_id") ?? "");
  const contactId = String(formData.get("contact_id") ?? "");
  const companyId = String(formData.get("company_id") ?? "");
  const ownerId = String(formData.get("owner_id") ?? "");
  const notes = String(formData.get("notes") ?? "").trim();
  const valueCents = parseCents(formData.get("value"));

  if (!title) redirect(`/deals/new?error=${encodeURIComponent("Title is required.")}`);
  if (!pipelineId || !stageId) redirect(`/deals/new?error=${encodeURIComponent("Pipeline and stage are required.")}`);

  const { supabase, tenantId, userId } = await getTenantAndRole();

  const { data: stage } = await supabase
    .from("stages")
    .select("id")
    .eq("id", stageId)
    .eq("pipeline_id", pipelineId)
    .maybeSingle();
  if (!stage) redirect(`/deals/new?error=${encodeURIComponent("Stage must belong to selected pipeline.")}`);

  const { data, error } = await supabase
    .from("deals")
    .insert({
      tenant_id: tenantId,
      pipeline_id: pipelineId,
      stage_id: stageId,
      title,
      value_cents: valueCents,
      currency,
      expected_close: expectedClose || null,
      contact_id: contactId || null,
      company_id: companyId || null,
      owner_id: ownerId || null,
      notes: notes || null,
      created_by: userId,
    })
    .select("id")
    .single();

  if (error || !data) redirect(`/deals/new?error=${encodeURIComponent(error?.message ?? "Failed to create deal.")}`);

  revalidatePath("/deals");
  revalidatePath("/deals/list");
  redirect(`/deals/${data.id}`);
}

export async function updateDeal(formData: FormData) {
  const dealId = String(formData.get("deal_id") ?? "");
  if (!dealId) redirect("/deals");

  const title = String(formData.get("title") ?? "").trim();
  const currency = String(formData.get("currency") ?? "USD").trim().toUpperCase();
  const expectedClose = String(formData.get("expected_close") ?? "").trim();
  const stageId = String(formData.get("stage_id") ?? "");
  const contactId = String(formData.get("contact_id") ?? "");
  const companyId = String(formData.get("company_id") ?? "");
  const ownerId = String(formData.get("owner_id") ?? "");
  const notes = String(formData.get("notes") ?? "").trim();
  const valueCents = parseCents(formData.get("value"));

  if (!title) redirect(`/deals/${dealId}?error=${encodeURIComponent("Title is required.")}`);
  if (!stageId) redirect(`/deals/${dealId}?error=${encodeURIComponent("Stage is required.")}`);

  const { supabase } = await getTenantAndRole();

  const { data: existing } = await supabase
    .from("deals")
    .select("pipeline_id")
    .eq("id", dealId)
    .maybeSingle();
  const pipelineId = (existing?.pipeline_id as string | undefined) ?? null;
  if (pipelineId) {
    const { data: stage } = await supabase
      .from("stages")
      .select("id")
      .eq("id", stageId)
      .eq("pipeline_id", pipelineId)
      .maybeSingle();
    if (!stage) redirect(`/deals/${dealId}?error=${encodeURIComponent("Stage must belong to this deal's pipeline.")}`);
  }

  const { error } = await supabase
    .from("deals")
    .update({
      title,
      value_cents: valueCents,
      currency,
      expected_close: expectedClose || null,
      stage_id: stageId,
      contact_id: contactId || null,
      company_id: companyId || null,
      owner_id: ownerId || null,
      notes: notes || null,
    })
    .eq("id", dealId);

  if (error) redirect(`/deals/${dealId}?error=${encodeURIComponent(error.message)}`);

  revalidatePath("/deals");
  revalidatePath("/deals/list");
  revalidatePath(`/deals/${dealId}`);
  redirect(`/deals/${dealId}`);
}

export async function moveDealToStage(dealId: string, stageId: string) {
  const { supabase } = await getTenantAndRole();
  if (!dealId || !stageId) return;

  await supabase.from("deals").update({ stage_id: stageId }).eq("id", dealId);

  revalidatePath("/deals");
  revalidatePath("/deals/list");
  revalidatePath(`/deals/${dealId}`);
}

export async function moveDealToStageAction(formData: FormData) {
  const dealId = String(formData.get("deal_id") ?? "");
  const stageId = String(formData.get("stage_id") ?? "");
  if (!dealId) redirect("/deals");
  if (!stageId) redirect(`/deals/${dealId}`);

  await moveDealToStage(dealId, stageId);
  redirect(`/deals/${dealId}`);
}

export async function markWon(formData: FormData) {
  const dealId = String(formData.get("deal_id") ?? "");
  if (!dealId) redirect("/deals");

  const { supabase } = await getTenantAndRole();

  const { data: deal } = await supabase.from("deals").select("pipeline_id").eq("id", dealId).maybeSingle();
  const pipelineId = (deal?.pipeline_id as string | undefined) ?? null;

  let stageId: string | null = null;
  if (pipelineId) {
    const { data: wonStage } = await supabase
      .from("stages")
      .select("id")
      .eq("pipeline_id", pipelineId)
      .eq("is_won", true)
      .order("position", { ascending: true })
      .limit(1);
    stageId = (wonStage?.[0]?.id as string | undefined) ?? null;
  }

  const update: Record<string, unknown> = { is_won: true, closed_at: new Date().toISOString() };
  if (stageId) update.stage_id = stageId;

  const { error } = await supabase.from("deals").update(update).eq("id", dealId);
  if (error) redirect(`/deals/${dealId}?error=${encodeURIComponent(error.message)}`);

  revalidatePath("/deals");
  revalidatePath("/deals/list");
  revalidatePath(`/deals/${dealId}`);
  redirect(`/deals/${dealId}`);
}

export async function markLost(formData: FormData) {
  const dealId = String(formData.get("deal_id") ?? "");
  if (!dealId) redirect("/deals");

  const { supabase } = await getTenantAndRole();

  const { data: deal } = await supabase.from("deals").select("pipeline_id").eq("id", dealId).maybeSingle();
  const pipelineId = (deal?.pipeline_id as string | undefined) ?? null;

  let stageId: string | null = null;
  if (pipelineId) {
    const { data: lostStage } = await supabase
      .from("stages")
      .select("id")
      .eq("pipeline_id", pipelineId)
      .eq("is_lost", true)
      .order("position", { ascending: true })
      .limit(1);
    stageId = (lostStage?.[0]?.id as string | undefined) ?? null;
  }

  const update: Record<string, unknown> = { is_won: false, closed_at: new Date().toISOString() };
  if (stageId) update.stage_id = stageId;

  const { error } = await supabase.from("deals").update(update).eq("id", dealId);
  if (error) redirect(`/deals/${dealId}?error=${encodeURIComponent(error.message)}`);

  revalidatePath("/deals");
  revalidatePath("/deals/list");
  revalidatePath(`/deals/${dealId}`);
  redirect(`/deals/${dealId}`);
}

export async function deleteDeal(formData: FormData) {
  const dealId = String(formData.get("deal_id") ?? "");
  if (!dealId) redirect("/deals");

  const { supabase } = await getTenantAndRole();
  const { error } = await supabase.from("deals").delete().eq("id", dealId);
  if (error) redirect(`/deals/${dealId}?error=${encodeURIComponent(error.message)}`);

  revalidatePath("/deals");
  revalidatePath("/deals/list");
  redirect("/deals");
}

