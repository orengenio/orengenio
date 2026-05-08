import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { inviteMember, revokeInvite } from "./actions";

type SearchParams = Promise<{ error?: string; invited?: string }>;

type Invite = {
  id: string;
  email: string;
  role: string;
  expires_at: string;
  accepted_at: string | null;
};

type Member = {
  user_id: string;
  role: string;
  created_at: string;
};

export default async function SettingsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: memberships } = await supabase
    .from("tenant_members")
    .select("tenant_id, role, tenants(id, slug, name)")
    .eq("user_id", user.id);

  if (!memberships || memberships.length === 0) redirect("/onboarding");

  const rawTenants = memberships[0].tenants as unknown;
  const tenant = Array.isArray(rawTenants)
    ? (rawTenants[0] as { id: string; slug: string; name: string })
    : (rawTenants as { id: string; slug: string; name: string });
  const myRole = memberships[0].role as string;
  const canInvite = myRole === "owner" || myRole === "admin";

  const [{ data: members }, { data: invites }] = await Promise.all([
    supabase
      .from("tenant_members")
      .select("user_id, role, created_at")
      .eq("tenant_id", tenant.id),
    supabase
      .from("invites")
      .select("id, email, role, expires_at, accepted_at")
      .eq("tenant_id", tenant.id)
      .is("accepted_at", null)
      .order("created_at", { ascending: false }),
  ]);

  const { error, invited } = await searchParams;

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
        <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
          Workspace, members, and invites.
        </p>
      </div>

      <Card>
        <h2 className="text-lg font-semibold">Workspace</h2>
        <dl className="mt-4 grid gap-4 text-sm md:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Name
            </dt>
            <dd className="mt-1">{tenant.name}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Subdomain
            </dt>
            <dd className="mt-1">
              <code className="rounded bg-[color:var(--color-bg-2)] px-2 py-0.5">
                {tenant.slug}.app.orengen.io
              </code>
            </dd>
          </div>
        </dl>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Members</h2>
          <span className="text-xs text-[color:var(--color-fg-muted)]">
            {(members as Member[] | null)?.length ?? 0}
          </span>
        </div>
        <ul className="mt-4 divide-y divide-[color:var(--color-border)]">
          {(members as Member[] | null)?.map((m) => (
            <li
              key={m.user_id}
              className="flex items-center justify-between py-3 text-sm"
            >
              <span className="font-mono text-xs text-[color:var(--color-fg-dim)]">
                {m.user_id === user.id ? "you" : m.user_id.slice(0, 8) + "…"}
              </span>
              <span className="rounded-full bg-[color:var(--color-bg-2)] px-3 py-1 text-xs uppercase tracking-[0.15em] text-[color:var(--color-fg-dim)]">
                {m.role}
              </span>
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold">Invite a teammate</h2>
        {!canInvite ? (
          <p className="mt-2 text-sm text-[color:var(--color-fg-muted)]">
            Only owners and admins can invite.
          </p>
        ) : (
          <form action={inviteMember} className="mt-6 grid gap-3 md:grid-cols-[1fr_auto_auto]">
            <input type="hidden" name="tenant_id" value={tenant.id} />
            <Input
              name="email"
              type="email"
              required
              placeholder="teammate@company.com"
            />
            <select
              name="role"
              defaultValue="member"
              className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-3 py-3 text-sm"
            >
              <option value="member">Member</option>
              <option value="admin">Admin</option>
            </select>
            <Button type="submit">Send invite</Button>
          </form>
        )}

        {invited ? (
          <p className="mt-3 text-sm text-[color:var(--color-accent)]">
            Invite created for <strong>{invited}</strong>.
          </p>
        ) : null}
        {error ? (
          <p className="mt-3 text-sm text-red-300">{error}</p>
        ) : null}

        {invites && invites.length > 0 ? (
          <div className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Pending invites
            </h3>
            <ul className="mt-3 divide-y divide-[color:var(--color-border)]">
              {(invites as Invite[]).map((inv) => (
                <li
                  key={inv.id}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <div>
                    <p>{inv.email}</p>
                    <p className="text-xs text-[color:var(--color-fg-muted)]">
                      {inv.role} · expires{" "}
                      {new Date(inv.expires_at).toLocaleDateString()}
                    </p>
                  </div>
                  <form action={revokeInvite}>
                    <input type="hidden" name="invite_id" value={inv.id} />
                    <button
                      type="submit"
                      className="text-xs text-[color:var(--color-fg-dim)] underline hover:text-red-300"
                    >
                      Revoke
                    </button>
                  </form>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Card>
    </div>
  );
}
