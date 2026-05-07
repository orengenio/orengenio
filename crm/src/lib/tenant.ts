import "server-only";
import { env } from "@/lib/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export type TenantContext = {
  id: string;
  slug: string;
  name: string;
  branding: Record<string, unknown>;
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
