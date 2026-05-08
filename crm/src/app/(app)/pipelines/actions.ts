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

function assertAdmin(myRole: "owner" | "admin" | "member") {
  if (myRole !== "owner" && myRole !== "admin") {
    redirect(`/pipelines?error=${encodeURIComponent("Only owners and admins can edit pipelines.")}`);
  }
}

export async function createPipeline(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  if (!name) redirect(`/pipelines?error=${encodeURIComponent("Pipeline name is required.")}`);

  const { supabase, tenantId, myRole } = await getTenantAndRole();
  assertAdmin(myRole);

  const { data: existing } = await supabase
    .from("pipelines")
    .select("position")
    .eq("tenant_id", tenantId)
    .order("position", { ascending: false })
    .limit(1);
  const nextPosition = (existing?.[0]?.position ?? 0) + 1;

  const { data, error } = await supabase
    .from("pipelines")
    .insert({ tenant_id: tenantId, name, position: nextPosition })
    .select("id")
    .single();

  if (error || !data) redirect(`/pipelines?error=${encodeURIComponent(error?.message ?? "Failed to create pipeline.")}`);

  revalidatePath("/pipelines");
  redirect(`/pipelines/${data.id}`);
}

export async function updatePipeline(formData: FormData) {
  const pipelineId = String(formData.get("pipeline_id") ?? "");
  const name = String(formData.get("name") ?? "").trim();
  if (!pipelineId) redirect("/pipelines");
  if (!name) redirect(`/pipelines/${pipelineId}?error=${encodeURIComponent("Pipeline name is required.")}`);

  const { supabase, myRole } = await getTenantAndRole();
  assertAdmin(myRole);

  const { error } = await supabase.from("pipelines").update({ name }).eq("id", pipelineId);
  if (error) redirect(`/pipelines/${pipelineId}?error=${encodeURIComponent(error.message)}`);

  revalidatePath("/pipelines");
  revalidatePath(`/pipelines/${pipelineId}`);
  redirect(`/pipelines/${pipelineId}`);
}

export async function deletePipeline(formData: FormData) {
  const pipelineId = String(formData.get("pipeline_id") ?? "");
  if (!pipelineId) redirect("/pipelines");

  const { supabase, myRole } = await getTenantAndRole();
  assertAdmin(myRole);

  const { error } = await supabase.from("pipelines").delete().eq("id", pipelineId);
  if (error) redirect(`/pipelines/${pipelineId}?error=${encodeURIComponent(error.message)}`);

  revalidatePath("/pipelines");
  revalidatePath("/deals");
  redirect("/pipelines");
}

export async function setDefaultPipeline(formData: FormData) {
  const pipelineId = String(formData.get("pipeline_id") ?? "");
  if (!pipelineId) redirect("/pipelines");

  const { supabase, tenantId, myRole } = await getTenantAndRole();
  assertAdmin(myRole);

  const { error: clearErr } = await supabase
    .from("pipelines")
    .update({ is_default: false })
    .eq("tenant_id", tenantId)
    .eq("is_default", true);
  if (clearErr) redirect(`/pipelines?error=${encodeURIComponent(clearErr.message)}`);

  const { error: setErr } = await supabase.from("pipelines").update({ is_default: true }).eq("id", pipelineId);
  if (setErr) redirect(`/pipelines?error=${encodeURIComponent(setErr.message)}`);

  revalidatePath("/pipelines");
  revalidatePath("/deals");
  redirect("/pipelines");
}

export async function addStage(formData: FormData) {
  const pipelineId = String(formData.get("pipeline_id") ?? "");
  const name = String(formData.get("name") ?? "").trim();
  const winProbability = Number(formData.get("win_probability") ?? 0);
  const isWon = String(formData.get("is_won") ?? "") === "on";
  const isLost = String(formData.get("is_lost") ?? "") === "on";

  if (!pipelineId) redirect("/pipelines");
  if (!name) redirect(`/pipelines/${pipelineId}?error=${encodeURIComponent("Stage name is required.")}`);
  if (isWon && isLost) redirect(`/pipelines/${pipelineId}?error=${encodeURIComponent("Stage cannot be both won and lost.")}`);

  const { supabase, tenantId, myRole } = await getTenantAndRole();
  assertAdmin(myRole);

  const { data: existing } = await supabase
    .from("stages")
    .select("position")
    .eq("pipeline_id", pipelineId)
    .order("position", { ascending: false })
    .limit(1);
  const nextPosition = (existing?.[0]?.position ?? 0) + 1;

  const { error } = await supabase.from("stages").insert({
    tenant_id: tenantId,
    pipeline_id: pipelineId,
    name,
    position: nextPosition,
    win_probability: Number.isFinite(winProbability) ? Math.max(0, Math.min(100, Math.trunc(winProbability))) : 0,
    is_won: isWon,
    is_lost: isLost,
  });

  if (error) redirect(`/pipelines/${pipelineId}?error=${encodeURIComponent(error.message)}`);

  revalidatePath(`/pipelines/${pipelineId}`);
  revalidatePath("/deals");
  redirect(`/pipelines/${pipelineId}`);
}

export async function updateStage(formData: FormData) {
  const pipelineId = String(formData.get("pipeline_id") ?? "");
  const stageId = String(formData.get("stage_id") ?? "");
  const name = String(formData.get("name") ?? "").trim();
  const winProbability = Number(formData.get("win_probability") ?? 0);
  const isWon = String(formData.get("is_won") ?? "") === "on";
  const isLost = String(formData.get("is_lost") ?? "") === "on";

  if (!pipelineId) redirect("/pipelines");
  if (!stageId) redirect(`/pipelines/${pipelineId}`);
  if (!name) redirect(`/pipelines/${pipelineId}?error=${encodeURIComponent("Stage name is required.")}`);
  if (isWon && isLost) redirect(`/pipelines/${pipelineId}?error=${encodeURIComponent("Stage cannot be both won and lost.")}`);

  const { supabase, myRole } = await getTenantAndRole();
  assertAdmin(myRole);

  const { error } = await supabase
    .from("stages")
    .update({
      name,
      win_probability: Number.isFinite(winProbability) ? Math.max(0, Math.min(100, Math.trunc(winProbability))) : 0,
      is_won: isWon,
      is_lost: isLost,
    })
    .eq("id", stageId);

  if (error) redirect(`/pipelines/${pipelineId}?error=${encodeURIComponent(error.message)}`);

  revalidatePath(`/pipelines/${pipelineId}`);
  revalidatePath("/deals");
  redirect(`/pipelines/${pipelineId}`);
}

export async function reorderStages(pipelineId: string, orderedStageIds: string[]) {
  const { supabase, myRole } = await getTenantAndRole();
  assertAdmin(myRole);

  if (!pipelineId || orderedStageIds.length === 0) return;

  await Promise.all(
    orderedStageIds.map((id, idx) => supabase.from("stages").update({ position: idx }).eq("id", id)),
  );

  revalidatePath(`/pipelines/${pipelineId}`);
  revalidatePath("/deals");
}

export async function reorderStagesAction(formData: FormData) {
  const pipelineId = String(formData.get("pipeline_id") ?? "");
  const raw = String(formData.get("ordered_stage_ids") ?? "[]");
  let orderedStageIds: string[] = [];
  try {
    orderedStageIds = JSON.parse(raw) as string[];
  } catch {
    orderedStageIds = [];
  }

  if (!pipelineId || orderedStageIds.length === 0) redirect(`/pipelines/${pipelineId}`);
  await reorderStages(pipelineId, orderedStageIds);
  redirect(`/pipelines/${pipelineId}`);
}

export async function deleteStage(formData: FormData) {
  const pipelineId = String(formData.get("pipeline_id") ?? "");
  const stageId = String(formData.get("stage_id") ?? "");
  if (!pipelineId) redirect("/pipelines");
  if (!stageId) redirect(`/pipelines/${pipelineId}`);

  const { supabase, myRole } = await getTenantAndRole();
  assertAdmin(myRole);

  const { error } = await supabase.from("stages").delete().eq("id", stageId);
  if (error) redirect(`/pipelines/${pipelineId}?error=${encodeURIComponent(error.message)}`);

  revalidatePath(`/pipelines/${pipelineId}`);
  revalidatePath("/deals");
  redirect(`/pipelines/${pipelineId}`);
}

