"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { ActivityType, UUID } from "@/lib/db/types";

export type ActivityParent =
  | { type: "contact"; id: UUID }
  | { type: "company"; id: UUID }
  | { type: "deal"; id: UUID }
  | { type: "lead"; id: UUID };

export type LogActivityInput = {
  parent: ActivityParent;
  type: ActivityType;
  subject?: string;
  body?: string;
  occurred_at?: string;
};

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

  return { supabase, userId: user.id, tenantId: memberships[0].tenant_id as UUID };
}

export async function logActivity(input: LogActivityInput) {
  const { supabase, userId, tenantId } = await requireUserAndTenant();

  const occurred_at = input.occurred_at ? new Date(input.occurred_at).toISOString() : new Date().toISOString();

  const parentColumns =
    input.parent.type === "contact"
      ? { contact_id: input.parent.id }
      : input.parent.type === "company"
        ? { company_id: input.parent.id }
        : input.parent.type === "deal"
          ? { deal_id: input.parent.id }
          : { lead_id: input.parent.id };

  const { error } = await supabase.from("activities").insert({
    tenant_id: tenantId,
    user_id: userId,
    type: input.type,
    subject: input.subject?.trim() ? input.subject.trim() : null,
    body: input.body?.trim() ? input.body.trim() : null,
    occurred_at,
    ...parentColumns,
  });

  if (error) {
    throw new Error(error.message);
  }

  return { ok: true as const };
}

export async function deleteActivity(id: UUID) {
  const { supabase } = await requireUserAndTenant();
  const { error } = await supabase.from("activities").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return { ok: true as const };
}

