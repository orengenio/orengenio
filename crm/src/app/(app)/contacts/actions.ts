"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function parseTags(raw: string) {
  return raw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean)
    .slice(0, 50);
}

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

export async function createContact(formData: FormData) {
  const { supabase, userId, tenantId } = await getActiveTenantId();

  const firstName = String(formData.get("first_name") ?? "").trim() || null;
  const lastName = String(formData.get("last_name") ?? "").trim() || null;
  const email = String(formData.get("email") ?? "").trim().toLowerCase() || null;
  const phone = String(formData.get("phone") ?? "").trim() || null;
  const title = String(formData.get("title") ?? "").trim() || null;
  const source = String(formData.get("source") ?? "").trim() || null;
  const notes = String(formData.get("notes") ?? "").trim() || null;
  const tags = parseTags(String(formData.get("tags") ?? ""));
  const companyId = String(formData.get("company_id") ?? "").trim() || null;

  if (!firstName && !lastName && !email) {
    redirect(`/contacts/new?error=${encodeURIComponent("Add a name or email.")}`);
  }

  const { data, error } = await supabase
    .from("contacts")
    .insert({
      tenant_id: tenantId,
      created_by: userId,
      company_id: companyId,
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      title,
      source,
      tags,
      notes,
    })
    .select("id")
    .single();

  if (error || !data?.id) {
    redirect(`/contacts/new?error=${encodeURIComponent(error?.message ?? "Unable to create contact.")}`);
  }

  revalidatePath("/contacts");
  redirect(`/contacts/${data.id}`);
}

export async function updateContact(formData: FormData) {
  const { supabase } = await getActiveTenantId();

  const id = String(formData.get("id") ?? "").trim();
  if (!id) redirect(`/contacts?error=${encodeURIComponent("Missing contact id.")}`);

  const firstName = String(formData.get("first_name") ?? "").trim() || null;
  const lastName = String(formData.get("last_name") ?? "").trim() || null;
  const email = String(formData.get("email") ?? "").trim().toLowerCase() || null;
  const phone = String(formData.get("phone") ?? "").trim() || null;
  const title = String(formData.get("title") ?? "").trim() || null;
  const source = String(formData.get("source") ?? "").trim() || null;
  const notes = String(formData.get("notes") ?? "").trim() || null;
  const tags = parseTags(String(formData.get("tags") ?? ""));
  const companyId = String(formData.get("company_id") ?? "").trim() || null;

  if (!firstName && !lastName && !email) {
    redirect(`/contacts/${id}?error=${encodeURIComponent("Add a name or email.")}`);
  }

  const { error } = await supabase
    .from("contacts")
    .update({
      company_id: companyId,
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      title,
      source,
      tags,
      notes,
    })
    .eq("id", id);

  if (error) {
    redirect(`/contacts/${id}?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/contacts");
  revalidatePath(`/contacts/${id}`);
  redirect(`/contacts/${id}?saved=1`);
}

export async function deleteContact(formData: FormData) {
  const { supabase } = await getActiveTenantId();

  const id = String(formData.get("id") ?? "").trim();
  if (!id) redirect(`/contacts?error=${encodeURIComponent("Missing contact id.")}`);

  const { error } = await supabase.from("contacts").delete().eq("id", id);
  if (error) {
    redirect(`/contacts/${id}?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/contacts");
  redirect("/contacts?deleted=1");
}

