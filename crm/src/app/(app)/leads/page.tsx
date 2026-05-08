import Link from "next/link";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { LeadStatus } from "@/lib/db/types";
import type { SupabaseClient } from "@supabase/supabase-js";

type SearchParams = Promise<{ status?: string; error?: string }>;

const DEFAULT_STATUSES: LeadStatus[] = ["new", "qualifying", "qualified"];

function statusLabel(status: string) {
  return status.replace(/^\w/, (c) => c.toUpperCase());
}

function tierBadge(tier: string | null, score: number | null) {
  const t = (tier ?? "").toLowerCase();
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]";
  if (t === "hot") return `${base} bg-red-500/15 text-red-200`;
  if (t === "warm") return `${base} bg-amber-500/15 text-amber-200`;
  if (t === "cold") return `${base} bg-sky-500/15 text-sky-200`;
  if (t === "unqualified") return `${base} bg-zinc-500/15 text-zinc-200`;
  if (typeof score === "number")
    return `${base} bg-[color:var(--color-bg-2)] text-[color:var(--color-fg-dim)]`;
  return `${base} bg-[color:var(--color-bg-2)] text-[color:var(--color-fg-muted)]`;
}

export default async function LeadsPage({ searchParams }: { searchParams: SearchParams }) {
  const supabase = (await createSupabaseServerClient()) as unknown as SupabaseClient;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: memberships } = await supabase
    .from("tenant_members")
    .select("tenant_id")
    .eq("user_id", user.id)
    .limit(1);
  const tenantId = memberships?.[0]?.tenant_id as string | undefined;
  if (!tenantId) redirect("/onboarding");

  const sp = await searchParams;
  const statusParam = (sp.status ?? "").trim();

  let statuses: LeadStatus[] = DEFAULT_STATUSES;
  if (statusParam === "all") {
    statuses = ["new", "qualifying", "qualified", "converted", "lost", "spam"];
  } else if (
    statusParam === "new" ||
    statusParam === "qualifying" ||
    statusParam === "qualified" ||
    statusParam === "converted" ||
    statusParam === "lost" ||
    statusParam === "spam"
  ) {
    statuses = [statusParam];
  }

  const { data: leads, error } = await supabase
    .from("leads")
    .select(
      "id, status, source, qualifier_score, qualifier_tier, created_at, contacts(first_name,last_name,email), companies(name)",
    )
    .eq("tenant_id", tenantId)
    .in("status", statuses)
    .order("created_at", { ascending: false })
    .limit(100);

  const raw = (leads ?? []) as unknown as Array<Record<string, unknown>>;
  const list = raw.map((l) => {
    const contactRel = l.contacts;
    const companyRel = l.companies;
    const contacts = Array.isArray(contactRel)
      ? ((contactRel[0] ?? null) as Record<string, unknown> | null)
      : ((contactRel ?? null) as Record<string, unknown> | null);
    const companies = Array.isArray(companyRel)
      ? ((companyRel[0] ?? null) as Record<string, unknown> | null)
      : ((companyRel ?? null) as Record<string, unknown> | null);
    return { ...l, contacts, companies };
  }) as Array<{
    id: string;
    status: LeadStatus;
    source: string | null;
    qualifier_score: number | null;
    qualifier_tier: string | null;
    created_at: string;
    contacts: { first_name: string | null; last_name: string | null; email: string | null } | null;
    companies: { name: string } | null;
  }>;

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Leads</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
            Inbound prospects, enriched by the CrewAI qualifier.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/leads/new">
            <Button>Create lead</Button>
          </Link>
        </div>
      </div>

      <Card className="p-6">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
            Filter
          </span>
          <Link
            href="/leads"
            className="rounded-lg border border-[color:var(--color-border)] px-3 py-1.5 text-xs text-[color:var(--color-fg-dim)] hover:border-[color:var(--color-accent)]"
          >
            Default
          </Link>
          {(["new", "qualifying", "qualified", "converted", "lost", "spam", "all"] as const).map(
            (s) => (
              <Link
                key={s}
                href={`/leads?status=${encodeURIComponent(s)}`}
                className="rounded-lg border border-[color:var(--color-border)] px-3 py-1.5 text-xs text-[color:var(--color-fg-dim)] hover:border-[color:var(--color-accent)]"
              >
                {s === "all" ? "All" : statusLabel(s)}
              </Link>
            ),
          )}
        </div>

        {(sp.error || error) && (
          <p className="mt-4 text-sm text-red-300">
            {sp.error ? decodeURIComponent(sp.error) : error?.message}
          </p>
        )}

        {list.length === 0 ? (
          <div className="mt-10 rounded-xl border border-dashed border-[color:var(--color-border)] p-10 text-center">
            <p className="text-sm text-[color:var(--color-fg-muted)]">No leads yet.</p>
            <p className="mt-2 text-xs text-[color:var(--color-fg-muted)]">
              Use the intake API or create one manually.
            </p>
          </div>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                  <th className="pb-3">Lead</th>
                  <th className="pb-3">Company</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Score</th>
                  <th className="pb-3">Tier</th>
                  <th className="pb-3">Created</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[color:var(--color-border)]">
                {list.map((l) => {
                  const name =
                    [l.contacts?.first_name, l.contacts?.last_name].filter(Boolean).join(" ") ||
                    l.contacts?.email ||
                    "Unknown";
                  return (
                    <tr key={l.id} className="hover:bg-[color:var(--color-bg-2)]/40">
                      <td className="py-3 pr-4">
                        <Link
                          href={`/leads/${l.id}`}
                          className="font-medium text-[color:var(--color-fg)] hover:underline"
                        >
                          {name}
                        </Link>
                        <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">
                          {l.source ?? "—"}
                        </p>
                      </td>
                      <td className="py-3 pr-4">{l.companies?.name ?? "—"}</td>
                      <td className="py-3 pr-4">
                        <span className="rounded-full bg-[color:var(--color-bg-2)] px-3 py-1 text-xs uppercase tracking-[0.15em] text-[color:var(--color-fg-dim)]">
                          {l.status}
                        </span>
                      </td>
                      <td className="py-3 pr-4 font-mono text-xs text-[color:var(--color-fg-dim)]">
                        {typeof l.qualifier_score === "number" ? l.qualifier_score : "—"}
                      </td>
                      <td className="py-3 pr-4">
                        <span className={tierBadge(l.qualifier_tier, l.qualifier_score)}>
                          {l.qualifier_tier ?? "—"}
                        </span>
                      </td>
                      <td className="py-3 text-xs text-[color:var(--color-fg-muted)]">
                        {new Date(l.created_at).toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}

