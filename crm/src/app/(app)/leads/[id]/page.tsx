import Link from "next/link";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { assignLead, convertLeadToDeal, markLost, markSpam, requalifyLead } from "../actions";
import type { SupabaseClient } from "@supabase/supabase-js";

type SearchParams = Promise<{ error?: string }>;

export default async function LeadDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: SearchParams;
}) {
  const { id } = await params;
  const sp = await searchParams;

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

  const [{ data: lead, error }, { data: members }] = await Promise.all([
    supabase
      .from("leads")
      .select(
        "id, status, source, assigned_to, contact_id, company_id, qualifier_score, qualifier_tier, qualifier_action, qualifier_outreach_email, qualifier_sms, qualifier_research, qualifier_raw, raw_payload, converted_to_deal_id, created_at, updated_at, contacts(first_name,last_name,email,phone,title), companies(name,domain)",
      )
      .eq("tenant_id", tenantId)
      .eq("id", id)
      .maybeSingle(),
    supabase
      .from("tenant_members")
      .select("user_id, role, created_at")
      .eq("tenant_id", tenantId)
      .order("created_at", { ascending: true }),
  ]);

  if (error || !lead) {
    redirect(`/leads?error=${encodeURIComponent(error?.message ?? "lead-not-found")}`);
  }

  const leadRec = lead as unknown as Record<string, unknown>;
  const contactRel = leadRec.contacts;
  const companyRel = leadRec.companies;
  const contact = Array.isArray(contactRel)
    ? ((contactRel[0] ?? null) as Record<string, unknown> | null)
    : ((contactRel ?? null) as Record<string, unknown> | null);
  const company = Array.isArray(companyRel)
    ? ((companyRel[0] ?? null) as Record<string, unknown> | null)
    : ((companyRel ?? null) as Record<string, unknown> | null);

  const contactName =
    [contact?.first_name, contact?.last_name].filter(Boolean).join(" ") ||
    (contact?.email as string | undefined) ||
    "Unknown";

  const assignedTo = (lead.assigned_to as string | null) ?? null;

  async function assignFromForm(formData: FormData) {
    "use server";
    const next = String(formData.get("assigned_to") ?? "").trim();
    await assignLead(id, next ? next : null);
  }

  const isConverted = Boolean(lead.converted_to_deal_id) || lead.status === "converted";

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Lead
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">{contactName}</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
            Status: <strong>{lead.status}</strong>
            {lead.source ? (
              <>
                {" · "}Source: <span className="font-mono text-xs">{lead.source}</span>
              </>
            ) : null}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/leads" className="text-sm text-[color:var(--color-fg-dim)] underline">
            Back to leads
          </Link>
        </div>
      </div>

      {sp.error ? <p className="text-sm text-red-300">{decodeURIComponent(sp.error)}</p> : null}

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card className="p-8">
            <h2 className="text-lg font-semibold">Details</h2>
            <dl className="mt-5 grid gap-4 text-sm md:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                  Email
                </dt>
                <dd className="mt-1">{(contact?.email as string | undefined) ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                  Phone
                </dt>
                <dd className="mt-1">{(contact?.phone as string | undefined) ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                  Company
                </dt>
                <dd className="mt-1">{(company?.name as string | undefined) ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                  Domain
                </dt>
                <dd className="mt-1">{(company?.domain as string | undefined) ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                  Created
                </dt>
                <dd className="mt-1">{new Date(lead.created_at as string).toLocaleString()}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                  Updated
                </dt>
                <dd className="mt-1">{new Date(lead.updated_at as string).toLocaleString()}</dd>
              </div>
            </dl>
          </Card>

          <Card className="p-8">
            <h2 className="text-lg font-semibold">Qualifier output</h2>
            <div className="mt-5 grid gap-4 text-sm md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                  Score
                </p>
                <p className="mt-1 font-mono text-xs text-[color:var(--color-fg-dim)]">
                  {typeof lead.qualifier_score === "number" ? lead.qualifier_score : "—"}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                  Tier
                </p>
                <p className="mt-1">{lead.qualifier_tier ?? "—"}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                  Recommended action
                </p>
                <p className="mt-1 whitespace-pre-wrap text-[color:var(--color-fg-dim)]">
                  {lead.qualifier_action ?? "—"}
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                  Outreach email
                </p>
                <pre className="mt-2 whitespace-pre-wrap rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] p-4 text-xs text-[color:var(--color-fg-dim)]">
                  {lead.qualifier_outreach_email ?? "—"}
                </pre>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                  SMS template
                </p>
                <pre className="mt-2 whitespace-pre-wrap rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] p-4 text-xs text-[color:var(--color-fg-dim)]">
                  {lead.qualifier_sms ?? "—"}
                </pre>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                  Research summary
                </p>
                <pre className="mt-2 whitespace-pre-wrap rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] p-4 text-xs text-[color:var(--color-fg-dim)]">
                  {lead.qualifier_research ?? "—"}
                </pre>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
                  Raw verdict
                </p>
                <pre className="mt-2 max-h-[320px] overflow-auto rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] p-4 text-xs text-[color:var(--color-fg-dim)]">
                  {lead.qualifier_raw ? JSON.stringify(lead.qualifier_raw, null, 2) : "—"}
                </pre>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-lg font-semibold">Raw payload</h2>
            <pre className="mt-5 max-h-[420px] overflow-auto rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] p-4 text-xs text-[color:var(--color-fg-dim)]">
              {lead.raw_payload ? JSON.stringify(lead.raw_payload, null, 2) : "—"}
            </pre>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-8">
            <h2 className="text-lg font-semibold">Assignment</h2>
            <form action={assignFromForm} className="mt-5 space-y-3">
              <select
                name="assigned_to"
                defaultValue={assignedTo ?? ""}
                className="w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-3 py-3 text-sm"
              >
                <option value="">Unassigned</option>
                {(members ?? []).map((m) => {
                  const id = (m as unknown as { user_id: string }).user_id;
                  const label = id === user.id ? `you (${id.slice(0, 8)}…)` : `${id.slice(0, 8)}…`;
                  return (
                    <option key={id} value={id}>
                      {label}
                    </option>
                  );
                })}
              </select>
              <Button type="submit" variant="secondary" className="w-full">
                Save assignment
              </Button>
            </form>
          </Card>

          <Card className="p-8">
            <h2 className="text-lg font-semibold">Qualifier</h2>
            <p className="mt-2 text-sm text-[color:var(--color-fg-muted)]">
              Re-runs the CrewAI qualifier and persists the verdict.
            </p>
            <form action={requalifyLead.bind(null, id)} className="mt-5">
              <Button type="submit" variant="secondary" className="w-full">
                Re-qualify
              </Button>
            </form>
          </Card>

          <Card className="p-8">
            <h2 className="text-lg font-semibold">Convert to deal</h2>
            {isConverted ? (
              <div className="mt-3 text-sm text-[color:var(--color-fg-muted)]">
                This lead is converted.
                {lead.converted_to_deal_id ? (
                  <p className="mt-2 text-xs">
                    Deal id:{" "}
                    <code className="rounded bg-[color:var(--color-bg-2)] px-1.5 py-0.5">
                      {String(lead.converted_to_deal_id)}
                    </code>
                  </p>
                ) : null}
              </div>
            ) : (
              <form action={convertLeadToDeal.bind(null, id)} className="mt-5 space-y-3">
                <Input name="title" placeholder="Deal title" defaultValue="New deal" />
                <div className="grid grid-cols-2 gap-3">
                  <Input name="value_cents" placeholder="Value (cents)" inputMode="numeric" />
                  <Input name="currency" placeholder="Currency" defaultValue="USD" />
                </div>
                <Input name="notes" placeholder="Notes (optional)" />
                <Button type="submit" className="w-full">
                  Convert to deal
                </Button>
              </form>
            )}
          </Card>

          <Card className="p-8">
            <h2 className="text-lg font-semibold">Disposition</h2>
            <div className="mt-5 grid gap-3">
              <form action={markLost.bind(null, id)}>
                <Button type="submit" variant="secondary" className="w-full">
                  Mark lost
                </Button>
              </form>
              <form action={markSpam.bind(null, id)}>
                <Button type="submit" variant="ghost" className="w-full">
                  Mark spam
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

