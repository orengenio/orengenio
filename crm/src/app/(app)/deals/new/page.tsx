import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createDeal } from "../actions";

type SearchParams = Promise<{ error?: string }>;

export default async function NewDealPage({ searchParams }: { searchParams: SearchParams }) {
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

  const [{ data: pipelines }, { data: stages }, { data: contacts }, { data: companies }, { data: members }] =
    await Promise.all([
      supabase
        .from("pipelines")
        .select("id, name, is_default, position")
        .eq("tenant_id", tenantId)
        .order("position", { ascending: true }),
      supabase
        .from("stages")
        .select("id, name, pipeline_id, position, is_won, is_lost")
        .eq("tenant_id", tenantId)
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

  const defaultPipelineId = pipelines?.find((p) => p.is_default)?.id ?? pipelines?.[0]?.id ?? "";
  const defaultStageId =
    stages?.find((s) => s.pipeline_id === defaultPipelineId && !s.is_won && !s.is_lost)?.id ??
    stages?.find((s) => s.pipeline_id === defaultPipelineId)?.id ??
    "";

  const { error } = await searchParams;

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">New deal</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
            Create a deal in a pipeline stage.
          </p>
          {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
        </div>
        <Link href="/deals">
          <Button variant="secondary">Back to deals</Button>
        </Link>
      </div>

      <Card>
        <form action={createDeal} className="grid gap-4">
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                Title
              </label>
              <Input name="title" required placeholder="Website redesign" className="mt-2" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                Value
              </label>
              <Input name="value" inputMode="decimal" placeholder="10000.00" className="mt-2" />
              <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">
                Stored as cents. Avoid commas for best results.
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                Currency
              </label>
              <Input name="currency" defaultValue="USD" className="mt-2" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                Expected close
              </label>
              <Input name="expected_close" type="date" className="mt-2" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                Owner
              </label>
              <select
                name="owner_id"
                defaultValue={user.id}
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

          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                Contact
              </label>
              <select
                name="contact_id"
                defaultValue=""
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
                defaultValue=""
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

          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                Pipeline
              </label>
              <select
                name="pipeline_id"
                defaultValue={defaultPipelineId}
                className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-3 py-3 text-sm"
              >
                {(pipelines ?? []).map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                    {p.is_default ? " (default)" : ""}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                Stage
              </label>
              <select
                name="stage_id"
                defaultValue={defaultStageId}
                className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-3 py-3 text-sm"
              >
                {(stages ?? []).map((s) => {
                  const pipelineName = pipelines?.find((p) => p.id === s.pipeline_id)?.name ?? "Pipeline";
                  return (
                    <option key={s.id} value={s.id}>
                      {pipelineName} — {s.name}
                    </option>
                  );
                })}
              </select>
              <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">
                Tip: pick a stage that belongs to the selected pipeline.
              </p>
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Notes
            </label>
            <textarea
              name="notes"
              rows={5}
              className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-4 py-3 text-sm text-[color:var(--color-fg)] placeholder:text-[color:var(--color-fg-muted)] focus:border-[color:var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]/30"
              placeholder="Optional notes..."
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button type="submit">Create deal</Button>
            <Link href="/deals" className="text-sm text-[color:var(--color-fg-dim)] underline hover:text-[color:var(--color-fg)]">
              Cancel
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

