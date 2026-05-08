import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { formatMoney } from "@/lib/format";
import { DealsBoard } from "./ui/deals-board";

type SearchParams = Promise<{ error?: string }>;

export default async function DealsKanbanPage({ searchParams }: { searchParams: SearchParams }) {
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

  const { data: pipeline } = await supabase
    .from("pipelines")
    .select("id, name")
    .eq("tenant_id", tenantId)
    .eq("is_default", true)
    .maybeSingle();

  const { error } = await searchParams;

  if (!pipeline) {
    return (
      <div className="space-y-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Deals</h1>
            <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
              No default pipeline found.
            </p>
            {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
          </div>
          <div className="flex items-center gap-2">
            <Link href="/deals/list">
              <Button variant="secondary">List view</Button>
            </Link>
            <Link href="/deals/new">
              <Button>New deal</Button>
            </Link>
          </div>
        </div>

        <Card>
          <p className="text-sm text-[color:var(--color-fg-muted)]">
            Deals require a default pipeline. Ask an owner/admin to set one in{" "}
            <Link href="/pipelines" className="text-[color:var(--color-accent)] underline">
              Pipelines
            </Link>
            .
          </p>
        </Card>
      </div>
    );
  }

  const [{ data: stages }, { data: deals }] = await Promise.all([
    supabase
      .from("stages")
      .select("id, name, position, is_won, is_lost")
      .eq("pipeline_id", pipeline.id)
      .order("position", { ascending: true }),
    supabase
      .from("deals")
      .select("id, title, value_cents, currency, stage_id, owner_id, expected_close, is_won")
      .eq("pipeline_id", pipeline.id)
      .order("updated_at", { ascending: false }),
  ]);

  const stageList = (stages ?? []).map((s) => ({
    id: s.id as string,
    name: s.name as string,
    is_won: Boolean(s.is_won),
    is_lost: Boolean(s.is_lost),
  }));
  const dealList = (deals ?? []).map((d) => ({
    id: d.id as string,
    title: d.title as string,
    value_cents: Number(d.value_cents ?? 0),
    currency: d.currency as string,
    stage_id: d.stage_id as string,
    owner_id: (d.owner_id as string | null) ?? null,
    expected_close: (d.expected_close as string | null) ?? null,
    is_won: (d.is_won as boolean | null) ?? null,
  }));

  const totalsByStageCurrency = new Map<string, Map<string, number>>();
  for (const deal of dealList) {
    const byCurrency = totalsByStageCurrency.get(deal.stage_id) ?? new Map<string, number>();
    byCurrency.set(deal.currency, (byCurrency.get(deal.currency) ?? 0) + deal.value_cents);
    totalsByStageCurrency.set(deal.stage_id, byCurrency);
  }
  const totalsDisplay: Record<string, string> = {};
  for (const s of stageList) {
    const byCurrency = totalsByStageCurrency.get(s.id);
    if (!byCurrency || byCurrency.size === 0) {
      totalsDisplay[s.id] = "—";
      continue;
    }
    const parts = [...byCurrency.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([currency, cents]) => formatMoney(cents, currency));
    totalsDisplay[s.id] = parts.join(" · ");
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
            Pipeline
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Deals</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">{pipeline.name}</p>
          {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
        </div>
        <div className="flex items-center gap-2">
          <Link href="/deals/list">
            <Button variant="secondary">List view</Button>
          </Link>
          <Link href="/deals/new">
            <Button>New deal</Button>
          </Link>
        </div>
      </div>

      {stageList.length === 0 ? (
        <Card>
          <p className="text-sm text-[color:var(--color-fg-muted)]">
            This pipeline has no stages yet. Ask an owner/admin to add stages in{" "}
            <Link href="/pipelines" className="text-[color:var(--color-accent)] underline">
              Pipelines
            </Link>
            .
          </p>
        </Card>
      ) : (
        <DealsBoard
          stages={stageList}
          deals={dealList}
          totalsByStage={totalsDisplay}
        />
      )}
    </div>
  );
}

