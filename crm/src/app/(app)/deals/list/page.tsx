import Link from "next/link";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { formatDate, formatMoney } from "@/lib/format";

type SearchParams = Promise<{
  stage?: string;
  owner?: string;
  status?: string; // open|won|lost|all
}>;

export default async function DealsListPage({ searchParams }: { searchParams: SearchParams }) {
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
  const tenantId = memberships[0].tenant_id;

  const { stage, owner, status } = await searchParams;
  const stageFilter = stage ? String(stage) : "";
  const ownerFilter = owner ? String(owner) : "";
  const statusFilter = status ? String(status) : "open";

  const [{ data: stages }, { data: members }] = await Promise.all([
    supabase
      .from("stages")
      .select("id, name, pipeline_id, position")
      .eq("tenant_id", tenantId)
      .order("position", { ascending: true }),
    supabase
      .from("tenant_members")
      .select("user_id, role")
      .eq("tenant_id", tenantId)
      .order("created_at", { ascending: true }),
  ]);

  let query = supabase
    .from("deals")
    .select(
      "id, title, value_cents, currency, expected_close, is_won, stage_id, owner_id, stages(name), pipelines(name)",
    )
    .eq("tenant_id", tenantId)
    .order("updated_at", { ascending: false });

  if (stageFilter) query = query.eq("stage_id", stageFilter);
  if (ownerFilter === "unassigned") query = query.is("owner_id", null);
  else if (ownerFilter) query = query.eq("owner_id", ownerFilter);

  if (statusFilter === "open") query = query.is("is_won", null);
  else if (statusFilter === "won") query = query.eq("is_won", true);
  else if (statusFilter === "lost") query = query.eq("is_won", false);

  const { data: deals } = await query;

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Deals</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
            Flat list with filters.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/deals">
            <Button variant="secondary">Kanban</Button>
          </Link>
          <Link href="/deals/new">
            <Button>New deal</Button>
          </Link>
        </div>
      </div>

      <Card>
        <h2 className="text-lg font-semibold">Filters</h2>
        <form className="mt-6 grid gap-3 md:grid-cols-4" action="/deals/list" method="get">
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Stage
            </label>
            <select
              name="stage"
              defaultValue={stageFilter}
              className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-3 py-3 text-sm"
            >
              <option value="">All stages</option>
              {(stages ?? []).map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Owner
            </label>
            <select
              name="owner"
              defaultValue={ownerFilter}
              className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-3 py-3 text-sm"
            >
              <option value="">All owners</option>
              <option value="unassigned">Unassigned</option>
              {(members ?? []).map((m) => (
                <option key={m.user_id} value={m.user_id}>
                  {m.user_id.slice(0, 8)}…
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Status
            </label>
            <select
              name="status"
              defaultValue={statusFilter}
              className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-3 py-3 text-sm"
            >
              <option value="open">Open</option>
              <option value="won">Won</option>
              <option value="lost">Lost</option>
              <option value="all">All</option>
            </select>
          </div>
          <div className="flex items-end gap-2">
            <Button type="submit" className="w-full">
              Apply
            </Button>
            <Link href="/deals/list" className="w-full">
              <Button type="button" variant="secondary" className="w-full">
                Reset
              </Button>
            </Link>
          </div>
        </form>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Results</h2>
          <span className="text-xs text-[color:var(--color-fg-muted)]">{deals?.length ?? 0}</span>
        </div>

        {!deals || deals.length === 0 ? (
          <p className="mt-4 text-sm text-[color:var(--color-fg-muted)]">
            No deals match these filters.
          </p>
        ) : (
          <ul className="mt-6 divide-y divide-[color:var(--color-border)]">
            {deals.map((d) => (
              <li key={d.id} className="flex flex-wrap items-center justify-between gap-4 py-4">
                <div>
                  <Link href={`/deals/${d.id}`} className="font-semibold hover:underline">
                    {d.title}
                  </Link>
                  <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">
                    {formatMoney(Number(d.value_cents ?? 0), String(d.currency ?? "USD"))}
                    {" · "}
                    Stage: {(d.stages as unknown as { name: string } | null)?.name ?? "—"}
                    {" · "}
                    Close: {formatDate(d.expected_close as string | null)}
                  </p>
                </div>
                <span className="rounded-full bg-[color:var(--color-bg-2)] px-3 py-1 text-xs uppercase tracking-[0.15em] text-[color:var(--color-fg-dim)]">
                  {d.is_won === null ? "open" : d.is_won ? "won" : "lost"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}

