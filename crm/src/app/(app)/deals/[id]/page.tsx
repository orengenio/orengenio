import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { formatDate, formatMoney } from "@/lib/format";
import { deleteDeal, markLost, markWon, updateDeal } from "../actions";

type SearchParams = Promise<{ error?: string }>;

export default async function DealDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: SearchParams;
}) {
  const { id: dealId } = await params;
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

  const { data: deal } = await supabase
    .from("deals")
    .select(
      "id, title, value_cents, currency, expected_close, is_won, closed_at, notes, owner_id, pipeline_id, stage_id, contact_id, company_id, created_at, updated_at, stages(id, name), pipelines(id, name)",
    )
    .eq("id", dealId)
    .maybeSingle();

  if (!deal) redirect("/deals?error=not-found");

  const [{ data: stages }, { data: contacts }, { data: companies }, { data: members }] = await Promise.all([
    supabase
      .from("stages")
      .select("id, name, position, is_won, is_lost")
      .eq("pipeline_id", deal.pipeline_id as string)
      .order("position", { ascending: true }),
    supabase
      .from("contacts")
      .select("id, first_name, last_name, email")
      .eq("tenant_id", tenantId)
      .order("created_at", { ascending: false })
      .limit(200),
    supabase
      .from("companies")
      .select("id, name")
      .eq("tenant_id", tenantId)
      .order("created_at", { ascending: false })
      .limit(200),
    supabase
      .from("tenant_members")
      .select("user_id, role")
      .eq("tenant_id", tenantId)
      .order("created_at", { ascending: true }),
  ]);

  const { error } = await searchParams;
  const status = deal.is_won === null ? "open" : deal.is_won ? "won" : "lost";

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
            Deal
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">{deal.title}</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
            {formatMoney(Number(deal.value_cents ?? 0), String(deal.currency ?? "USD"))}
            {" · "}
            Status: <strong>{status}</strong>
          </p>
          {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/deals">
            <Button variant="secondary">Back</Button>
          </Link>
          {status !== "won" ? (
            <form action={markWon}>
              <input type="hidden" name="deal_id" value={deal.id} />
              <Button type="submit">Mark won</Button>
            </form>
          ) : null}
          {status !== "lost" ? (
            <form action={markLost}>
              <input type="hidden" name="deal_id" value={deal.id} />
              <Button type="submit" variant="secondary">
                Mark lost
              </Button>
            </form>
          ) : null}
        </div>
      </div>

      <Card>
        <h2 className="text-lg font-semibold">Details</h2>
        <dl className="mt-4 grid gap-4 text-sm md:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Pipeline
            </dt>
            <dd className="mt-1">{(deal.pipelines as unknown as { name: string } | null)?.name ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Stage
            </dt>
            <dd className="mt-1">{(deal.stages as unknown as { name: string } | null)?.name ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Expected close
            </dt>
            <dd className="mt-1">{formatDate(deal.expected_close as string | null)}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Closed at
            </dt>
            <dd className="mt-1">{formatDate(deal.closed_at as string | null)}</dd>
          </div>
        </dl>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold">Edit</h2>
        <form action={updateDeal} className="mt-6 grid gap-4">
          <input type="hidden" name="deal_id" value={deal.id} />
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                Title
              </label>
              <Input name="title" defaultValue={deal.title as string} required className="mt-2" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                Value
              </label>
              <Input
                name="value"
                inputMode="decimal"
                defaultValue={(Number(deal.value_cents ?? 0) / 100).toFixed(2)}
                className="mt-2"
              />
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                Currency
              </label>
              <Input name="currency" defaultValue={String(deal.currency ?? "USD")} className="mt-2" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                Expected close
              </label>
              <Input
                name="expected_close"
                type="date"
                defaultValue={(deal.expected_close as string | null) ?? ""}
                className="mt-2"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                Owner
              </label>
              <select
                name="owner_id"
                defaultValue={(deal.owner_id as string | null) ?? ""}
                className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-3 py-3 text-sm"
              >
                <option value="">Unassigned</option>
                <option value={user.id}>Me</option>
                {(members ?? [])
                  .filter((m) => m.user_id !== user.id)
                  .map((m) => (
                    <option key={m.user_id} value={m.user_id}>
                      {m.user_id.slice(0, 8)}…
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="md:col-span-1">
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                Stage
              </label>
              <select
                name="stage_id"
                defaultValue={deal.stage_id as string}
                className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-3 py-3 text-sm"
              >
                {(stages ?? []).map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                    {s.is_won ? " (won)" : s.is_lost ? " (lost)" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                Contact
              </label>
              <select
                name="contact_id"
                defaultValue={(deal.contact_id as string | null) ?? ""}
                className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-3 py-3 text-sm"
              >
                <option value="">None</option>
                {(contacts ?? []).map((c) => {
                  const name = [c.first_name, c.last_name].filter(Boolean).join(" ").trim();
                  const label = name || (c.email ? c.email : c.id.slice(0, 8) + "…");
                  return (
                    <option key={c.id} value={c.id}>
                      {label}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                Company
              </label>
              <select
                name="company_id"
                defaultValue={(deal.company_id as string | null) ?? ""}
                className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-3 py-3 text-sm"
              >
                <option value="">None</option>
                {(companies ?? []).map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Notes
            </label>
            <textarea
              name="notes"
              rows={5}
              defaultValue={(deal.notes as string | null) ?? ""}
              className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-4 py-3 text-sm text-[color:var(--color-fg)] placeholder:text-[color:var(--color-fg-muted)] focus:border-[color:var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]/30"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button type="submit">Save changes</Button>
            <Link
              href="/deals"
              className="text-sm text-[color:var(--color-fg-dim)] underline hover:text-[color:var(--color-fg)]"
            >
              Cancel
            </Link>
          </div>
        </form>

        <div className="mt-6 border-t border-[color:var(--color-border)] pt-6">
          <form action={deleteDeal}>
            <input type="hidden" name="deal_id" value={deal.id} />
            <button type="submit" className="text-sm text-red-300 underline hover:text-red-200">
              Delete deal
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
}

