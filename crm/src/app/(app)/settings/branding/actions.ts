"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { getActiveTenant } from "@/lib/tenant";

type BrandingInput = {
  logoUrl: string;
  primaryColor: string;
  accentColor: string;
  darkModeDefault: boolean;
};

type PostgrestError = { message: string } | null;
type PostgrestSingle<T> = Promise<{ data: T | null; error: PostgrestError }>;

function isHexColor(value: string): boolean {
  return /^#[0-9a-f]{6}$/i.test(value);
}

function isHttpsUrl(value: string): boolean {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function updateBranding(input: BrandingInput) {
  const ctx = await getActiveTenant();
  if (!ctx) redirect("/login");

  if (ctx.role !== "owner" && ctx.role !== "admin") {
    redirect("/settings?error=forbidden");
  }

  const logoUrl = input.logoUrl.trim();
  const primaryColor = input.primaryColor.trim();
  const accentColor = input.accentColor.trim();
  const darkModeDefault = Boolean(input.darkModeDefault);

  if (logoUrl && !isHttpsUrl(logoUrl)) {
    redirect("/settings/branding?error=logo-must-be-https");
  }
  if (primaryColor && !isHexColor(primaryColor)) {
    redirect("/settings/branding?error=invalid-primary-color");
  }
  if (accentColor && !isHexColor(accentColor)) {
    redirect("/settings/branding?error=invalid-accent-color");
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const admin = createSupabaseAdminClient() as unknown as {
    from: (table: string) => unknown;
  };

  const tenants = admin.from("tenants") as unknown as {
    select: (cols: string) => {
      eq: (col: string, value: string) => { maybeSingle: () => PostgrestSingle<{ branding: unknown }> };
    };
    update: (values: { branding: Record<string, unknown> }) => {
      eq: (col: string, value: string) => Promise<{ error: PostgrestError }>;
    };
  };

  const { data: tenantRow, error: tenantError } = await tenants
    .select("branding")
    .eq("id", ctx.tenant.id)
    .maybeSingle();

  if (tenantError || !tenantRow) {
    redirect(`/settings/branding?error=${encodeURIComponent(tenantError?.message ?? "tenant-not-found")}`);
  }

  const prev = ((tenantRow.branding ?? {}) as Record<string, unknown>) ?? {};
  const branding = {
    ...prev,
    logo_url: logoUrl || null,
    primary_color: primaryColor || null,
    accent_color: accentColor || null,
    dark_mode_default: darkModeDefault,
    updated_by: user.id,
    updated_at: new Date().toISOString(),
  };

  const { error: updateError } = await tenants.update({ branding }).eq("id", ctx.tenant.id);

  if (updateError) {
    redirect(`/settings/branding?error=${encodeURIComponent(updateError.message)}`);
  }

  revalidatePath("/settings/branding");
  revalidatePath("/dashboard");
  revalidatePath("/settings");
  redirect("/settings/branding?saved=1");
}

