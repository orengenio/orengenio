"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function inviteMember(formData: FormData) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const tenantId = String(formData.get("tenant_id") ?? "");
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const role = String(formData.get("role") ?? "member") as "admin" | "member";

  if (!tenantId || !email) {
    redirect(`/settings?error=missing-fields`);
  }

  const { error } = await supabase
    .from("invites")
    .insert({ tenant_id: tenantId, email, role, invited_by: user.id });

  if (error) {
    redirect(`/settings?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/settings");
  redirect(`/settings?invited=${encodeURIComponent(email)}`);
}

export async function revokeInvite(formData: FormData) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const inviteId = String(formData.get("invite_id") ?? "");
  if (!inviteId) redirect("/settings");

  await supabase.from("invites").delete().eq("id", inviteId);
  revalidatePath("/settings");
  redirect("/settings");
}
