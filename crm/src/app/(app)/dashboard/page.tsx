import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: memberships } = await supabase
    .from("tenant_members")
    .select("tenant_id, role, tenants(id, slug, name, branding)")
    .eq("user_id", user.id);

  if (!memberships || memberships.length === 0) {
    redirect("/onboarding");
  }

  const rawTenants = memberships[0].tenants as unknown;
  const tenant = Array.isArray(rawTenants)
    ? (rawTenants[0] as {
        id: string;
        slug: string;
        name: string;
        branding: Record<string, unknown>;
      })
    : (rawTenants as {
        id: string;
        slug: string;
        name: string;
        branding: Record<string, unknown>;
      });
  const role = memberships[0].role as string;

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
          Workspace
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          {tenant.name}
        </h1>
        <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
          Slug: <code className="rounded bg-[color:var(--color-bg-2)] px-1.5 py-0.5">{tenant.slug}</code>
          {" · "}Your role: <strong>{role}</strong>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
            Contacts
          </p>
          <p className="mt-2 text-3xl font-semibold">0</p>
          <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">
            Phase 2
          </p>
        </Card>
        <Card>
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
            Open deals
          </p>
          <p className="mt-2 text-3xl font-semibold">0</p>
          <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">
            Phase 2
          </p>
        </Card>
        <Card>
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
            Activities (24h)
          </p>
          <p className="mt-2 text-3xl font-semibold">0</p>
          <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">
            Phase 2
          </p>
        </Card>
      </div>

      <Card>
        <h2 className="text-lg font-semibold">Phase 1 is live</h2>
        <p className="mt-2 text-sm text-[color:var(--color-fg-dim)]">
          Auth, multi-tenant DB, and tenant invites are wired. Next up: contacts,
          leads, deals, and pipeline. Visit{" "}
          <a
            href="/settings"
            className="text-[color:var(--color-accent)] underline"
          >
            Settings
          </a>{" "}
          to invite teammates.
        </p>
      </Card>
    </div>
  );
}
