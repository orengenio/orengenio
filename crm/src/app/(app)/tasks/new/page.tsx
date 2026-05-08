import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createTask } from "../actions";

type SearchParams = Promise<{ error?: string }>;

export default async function NewTaskPage({ searchParams }: { searchParams: SearchParams }) {
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

  const tenantId = memberships[0].tenant_id as string;

  const { data: members } = await supabase
    .from("tenant_members")
    .select("user_id, role, created_at")
    .eq("tenant_id", tenantId)
    .order("created_at", { ascending: true });

  const { error } = await searchParams;

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">New task</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
            Create a follow-up and assign it to someone on your team.
          </p>
        </div>
        <Link href="/tasks">
          <Button type="button" variant="ghost">
            Back
          </Button>
        </Link>
      </div>

      <Card>
        {error ? (
          <div className="mb-5 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        ) : null}

        <form action={createTask} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input id="title" name="title" required placeholder="Follow up with Acme about proposal" />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description (optional)
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Add any context for the assignee…"
              className="min-h-28 w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-4 py-3 text-sm text-[color:var(--color-fg)] placeholder:text-[color:var(--color-fg-muted)] focus:border-[color:var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]/30"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="due_at" className="text-sm font-medium">
                Due at (optional)
              </label>
              <Input id="due_at" name="due_at" type="datetime-local" />
            </div>
            <div className="space-y-2">
              <label htmlFor="priority" className="text-sm font-medium">
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                defaultValue="normal"
                className="w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-4 py-3 text-sm"
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="assigned_to" className="text-sm font-medium">
              Assigned to
            </label>
            <select
              id="assigned_to"
              name="assigned_to"
              defaultValue={user.id}
              className="w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-4 py-3 text-sm"
            >
              <option value={user.id}>Me</option>
              {(members ?? [])
                .filter((m) => m.user_id !== user.id)
                .map((m) => (
                  <option key={m.user_id} value={m.user_id}>
                    {m.user_id.slice(0, 8) + "…"} ({m.role})
                  </option>
                ))}
            </select>
            <p className="text-xs text-[color:var(--color-fg-muted)]">
              Phase 2: user display names land later (showing IDs for now).
            </p>
          </div>

          <div className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Optional links
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <label className="space-y-1">
                <span className="text-xs text-[color:var(--color-fg-muted)]">Contact ID</span>
                <Input name="contact_id" placeholder="uuid" />
              </label>
              <label className="space-y-1">
                <span className="text-xs text-[color:var(--color-fg-muted)]">Company ID</span>
                <Input name="company_id" placeholder="uuid" />
              </label>
              <label className="space-y-1">
                <span className="text-xs text-[color:var(--color-fg-muted)]">Deal ID</span>
                <Input name="deal_id" placeholder="uuid" />
              </label>
              <label className="space-y-1">
                <span className="text-xs text-[color:var(--color-fg-muted)]">Lead ID</span>
                <Input name="lead_id" placeholder="uuid" />
              </label>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <Link href="/tasks">
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </Link>
            <Button type="submit">Create task</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

