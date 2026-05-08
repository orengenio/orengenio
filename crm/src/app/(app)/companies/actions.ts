"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

async function getActiveTenantId() {
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

  return { supabase, userId: user.id, tenantId: memberships[0].tenant_id as string };
}

export async function createCompany(formData: FormData) {
  const { supabase, userId, tenantId } = await getActiveTenantId();

  const name = String(formData.get("name") ?? "").trim();
  const domain = String(formData.get("domain") ?? "").trim() || null;
  const industry = String(formData.get("industry") ?? "").trim() || null;
  const size = String(formData.get("size") ?? "").trim() || null;
  const website = String(formData.get("website") ?? "").trim() || null;
  const phone = String(formData.get("phone") ?? "").trim() || null;
  const address = String(formData.get("address") ?? "").trim() || null;
  const notes = String(formData.get("notes") ?? "").trim() || null;

  if (!name) {
    redirect(`/companies/new?error=${encodeURIComponent("Company name is required.")}`);
  }

  const { data, error } = await supabase
    .from("companies")
    .insert({
      tenant_id: tenantId,
      created_by: userId,
      name,
      domain,
      industry,
      size,
      website,
      phone,
      address,
      notes,
    })
    .select("id")
    .single();

  if (error || !data?.id) {
    redirect(`/companies/new?error=${encodeURIComponent(error?.message ?? "Unable to create company.")}`);
  }

  revalidatePath("/companies");
  redirect(`/companies/${data.id}`);
}

export async function updateCompany(formData: FormData) {
  const { supabase } = await getActiveTenantId();

  const id = String(formData.get("id") ?? "").trim();
  if (!id) redirect(`/companies?error=${encodeURIComponent("Missing company id.")}`);

  const name = String(formData.get("name") ?? "").trim();
  const domain = String(formData.get("domain") ?? "").trim() || null;
  const industry = String(formData.get("industry") ?? "").trim() || null;
  const size = String(formData.get("size") ?? "").trim() || null;
  const website = String(formData.get("website") ?? "").trim() || null;
  const phone = String(formData.get("phone") ?? "").trim() || null;
  const address = String(formData.get("address") ?? "").trim() || null;
  const notes = String(formData.get("notes") ?? "").trim() || null;

  if (!name) {
    redirect(`/companies/${id}?error=${encodeURIComponent("Company name is required.")}`);
  }

  const { error } = await supabase
    .from("companies")
    .update({
      name,
      domain,
      industry,
      size,
      website,
      phone,
      address,
      notes,
    })
    .eq("id", id);

  if (error) {
    redirect(`/companies/${id}?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/companies");
  revalidatePath(`/companies/${id}`);
  redirect(`/companies/${id}?saved=1`);
}

export async function deleteCompany(formData: FormData) {
  const { supabase } = await getActiveTenantId();

  const id = String(formData.get("id") ?? "").trim();
  if (!id) redirect(`/companies?error=${encodeURIComponent("Missing company id.")}`);

  const { error } = await supabase.from("companies").delete().eq("id", id);
  if (error) {
    redirect(`/companies/${id}?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/companies");
  redirect("/companies?deleted=1");
}

