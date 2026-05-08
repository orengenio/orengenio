import "server-only";
import { env } from "@/lib/env";
import type { TenantRole } from "@/lib/db/types";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { headers } from "next/headers";

export type TenantContext = {
  id: string;
  slug: string;
  name: string;
  branding: Record<string, unknown>;
};

export type ActiveTenantContext = {
  tenant: TenantContext;
  role: TenantRole;
  member: { tenant_id: string; user_id: string; role: TenantRole; created_at: string };
};

/**
 * Extract the tenant slug from a request host. The apex `app.orengen.io`
 * (and `localhost`, `127.0.0.1`) is treated as no-tenant. Anything ending in
 * `.<NEXT_PUBLIC_APP_HOST>` returns the leftmost label as the slug.
 */
export function tenantSlugFromHost(host: string | null | undefined): string | null {
  if (!host) return null;
  const apex = env.appHost.toLowerCase();
  const cleaned = host.toLowerCase().replace(/:\d+$/, "");
  if (cleaned === apex) return null;
  if (cleaned === "localhost" || cleaned === "127.0.0.1") return null;
  if (!cleaned.endsWith(`.${apex}`)) return null;
  const label = cleaned.slice(0, cleaned.length - apex.length - 1);
  if (!/^[a-z0-9-]{2,40}$/.test(label)) return null;
  return label;
}

/**
 * Look up a tenant by slug using the service-role client (bypasses RLS).
 * Used in middleware / server components to resolve subdomain → tenant.
 */
export async function getTenantBySlug(slug: string): Promise<TenantContext | null> {
  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("tenants")
    .select("id, slug, name, branding")
    .eq("slug", slug)
    .maybeSingle();
  if (error || !data) return null;
  return data as TenantContext;
}

/**
 * Resolve the tenant (if any) for a given request host.
 * This is a convenience wrapper around `tenantSlugFromHost` + `getTenantBySlug`.
 */
export async function resolveTenantFromHost(
  host: string | null | undefined,
): Promise<TenantContext | null> {
  const slug = tenantSlugFromHost(host);
  if (!slug) return null;
  return await getTenantBySlug(slug);
}

/**
 * Server-only helper used by server components to identify the active tenant.
 *
 * Rules:
 * - If a subdomain tenant slug is present (from `proxy.ts`), prefer that tenant *if*
 *   the current user is a member.
 * - Otherwise, fall back to the first membership tenant.
 */
export async function getActiveTenant(): Promise<ActiveTenantContext | null> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const hdrs = await headers();
  const preferredSlug = hdrs.get("x-orengen-tenant-slug");

  if (preferredSlug) {
    const preferredTenant = await getTenantBySlug(preferredSlug);
    if (preferredTenant) {
      const { data: member } = await supabase
        .from("tenant_members")
        .select("tenant_id, user_id, role, created_at")
        .eq("tenant_id", preferredTenant.id)
        .eq("user_id", user.id)
        .maybeSingle();
      if (member) {
        return {
          tenant: preferredTenant,
          role: member.role as TenantRole,
          member: member as ActiveTenantContext["member"],
        };
      }
    }
  }

  const { data: memberships } = await supabase
    .from("tenant_members")
    .select("tenant_id, role, created_at, tenants(id, slug, name, branding)")
    .eq("user_id", user.id)
    .order("created_at", { ascending: true })
    .limit(1);

  const first = memberships?.[0];
  if (!first) return null;

  const rawTenant = first.tenants as unknown;
  const tenant = Array.isArray(rawTenant)
    ? (rawTenant[0] as TenantContext | undefined)
    : (rawTenant as TenantContext | undefined);
  if (!tenant) return null;

  return {
    tenant,
    role: first.role as TenantRole,
    member: {
      tenant_id: first.tenant_id as string,
      user_id: user.id,
      role: first.role as TenantRole,
      created_at: first.created_at as string,
    },
  };
}
