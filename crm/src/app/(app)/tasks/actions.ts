"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { TaskPriority, UUID } from "@/lib/db/types";

async function requireUserAndTenant() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: memberships, error } = await supabase
    .from("tenant_members")
    .select("tenant_id, role")
    .eq("user_id", user.id)
    .limit(1);

  if (error || !memberships?.[0]?.tenant_id) {
    throw new Error(error?.message ?? "missing-tenant");
  }

  return { supabase, userId: user.id as UUID, tenantId: memberships[0].tenant_id as UUID };
}

function parseOptionalUuid(value: FormDataEntryValue | null): UUID | null {
  const v = String(value ?? "").trim();
  return v ? (v as UUID) : null;
}

function parseOptionalTimestamp(value: FormDataEntryValue | null): string | null {
  const v = String(value ?? "").trim();
  if (!v) return null;
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

export async function createTask(formData: FormData) {
  const { supabase, userId, tenantId } = await requireUserAndTenant();

  const title = String(formData.get("title") ?? "").trim();
  const descriptionRaw = String(formData.get("description") ?? "").trim();
  const priority = String(formData.get("priority") ?? "normal") as TaskPriority;
  const due_at = parseOptionalTimestamp(formData.get("due_at"));
  const assigned_to = parseOptionalUuid(formData.get("assigned_to")) ?? userId;

  if (!title) redirect("/tasks/new?error=missing-title");

  const contact_id = parseOptionalUuid(formData.get("contact_id"));
  const company_id = parseOptionalUuid(formData.get("company_id"));
  const deal_id = parseOptionalUuid(formData.get("deal_id"));
  const lead_id = parseOptionalUuid(formData.get("lead_id"));

  const { data, error } = await supabase
    .from("tasks")
    .insert({
      tenant_id: tenantId,
      created_by: userId,
      title,
      description: descriptionRaw ? descriptionRaw : null,
      due_at,
      priority,
      assigned_to,
      contact_id,
      company_id,
      deal_id,
      lead_id,
    })
    .select("id")
    .single();

  if (error || !data?.id) redirect(`/tasks/new?error=${encodeURIComponent(error?.message ?? "create-failed")}`);

  revalidatePath("/tasks");
  redirect(`/tasks/${data.id}`);
}

export async function updateTask(formData: FormData) {
  const { supabase } = await requireUserAndTenant();

  const taskId = String(formData.get("task_id") ?? "").trim();
  if (!taskId) redirect("/tasks?error=missing-task");

  const title = String(formData.get("title") ?? "").trim();
  const descriptionRaw = String(formData.get("description") ?? "").trim();
  const priority = String(formData.get("priority") ?? "normal") as TaskPriority;
  const due_at = parseOptionalTimestamp(formData.get("due_at"));
  const assigned_to = parseOptionalUuid(formData.get("assigned_to"));
  const contact_id = parseOptionalUuid(formData.get("contact_id"));
  const company_id = parseOptionalUuid(formData.get("company_id"));
  const deal_id = parseOptionalUuid(formData.get("deal_id"));
  const lead_id = parseOptionalUuid(formData.get("lead_id"));

  if (!title) redirect(`/tasks/${taskId}?error=missing-title`);

  const { error } = await supabase
    .from("tasks")
    .update({
      title,
      description: descriptionRaw ? descriptionRaw : null,
      priority,
      due_at,
      assigned_to,
      contact_id,
      company_id,
      deal_id,
      lead_id,
    })
    .eq("id", taskId);

  if (error) redirect(`/tasks/${taskId}?error=${encodeURIComponent(error.message)}`);

  revalidatePath("/tasks");
  redirect(`/tasks/${taskId}`);
}

export async function completeTask(formData: FormData) {
  const { supabase } = await requireUserAndTenant();
  const taskId = String(formData.get("task_id") ?? "").trim();
  if (!taskId) redirect("/tasks");

  const { error } = await supabase
    .from("tasks")
    .update({ completed_at: new Date().toISOString() })
    .eq("id", taskId);
  if (error) redirect(`/tasks/${taskId}?error=${encodeURIComponent(error.message)}`);

  revalidatePath("/tasks");
  redirect(`/tasks/${taskId}`);
}

export async function reopenTask(formData: FormData) {
  const { supabase } = await requireUserAndTenant();
  const taskId = String(formData.get("task_id") ?? "").trim();
  if (!taskId) redirect("/tasks");

  const { error } = await supabase.from("tasks").update({ completed_at: null }).eq("id", taskId);
  if (error) redirect(`/tasks/${taskId}?error=${encodeURIComponent(error.message)}`);

  revalidatePath("/tasks");
  redirect(`/tasks/${taskId}`);
}

export async function deleteTask(formData: FormData) {
  const { supabase } = await requireUserAndTenant();
  const taskId = String(formData.get("task_id") ?? "").trim();
  if (!taskId) redirect("/tasks");

  const { error } = await supabase.from("tasks").delete().eq("id", taskId);
  if (error) redirect(`/tasks/${taskId}?error=${encodeURIComponent(error.message)}`);

  revalidatePath("/tasks");
  redirect("/tasks");
}

