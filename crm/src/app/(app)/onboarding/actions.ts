"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
}

export async function createTenant(formData: FormData) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const name = String(formData.get("name") ?? "").trim();
  const requestedSlug = String(formData.get("slug") ?? "").trim();
  if (!name) {
    redirect("/onboarding?error=missing-name");
  }

  let slug = requestedSlug ? slugify(requestedSlug) : slugify(name);
  if (!/^[a-z0-9-]{2,40}$/.test(slug)) {
    redirect("/onboarding?error=invalid-slug");
  }

  // Pick a non-conflicting slug. Cap attempts so we never loop forever on
  // pathological inputs.
  for (let attempt = 0; attempt < 8; attempt += 1) {
    const candidate = attempt === 0 ? slug : `${slug}-${attempt + 1}`;
    const { data: existing } = await supabase
      .from("tenants")
      .select("id")
      .eq("slug", candidate)
      .maybeSingle();
    if (!existing) {
      slug = candidate;
      break;
    }
    if (attempt === 7) {
      redirect("/onboarding?error=slug-taken");
    }
  }

  const { error } = await supabase
    .from("tenants")
    .insert({ name, slug, created_by: user.id });
  if (error) {
    redirect(`/onboarding?error=${encodeURIComponent(error.message)}`);
  }

  redirect("/dashboard");
}
