import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Task } from "@/lib/db/types";
import { completeTask, deleteTask, reopenTask, updateTask } from "../actions";

type SearchParams = Promise<{ error?: string }>;

export default async function TaskDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: SearchParams;
}) {
  const { id } = await params;

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: memberships } = await supabase
    .from("tenant_members")
    .select("tenant_id")
    .eq("user_id", user.id)
    .limit(1);
  if (!memberships || memberships.length === 0) redirect("/onboarding");

  const { data, error: loadError } = await supabase
    .from("tasks")
    .select(
      "id, tenant_id, contact_id, company_id, deal_id, lead_id, assigned_to, title, description, due_at, completed_at, priority, created_by, created_at, updated_at",
    )
    .eq("id", id)
    .maybeSingle();

  const task = data as Task | null;
  if (!task) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-tight">Task</h1>
          <Link href="/tasks">
            <Button type="button" variant="ghost">
              Back
            </Button>
          </Link>
        </div>
        <Card>
          <h2 className="text-lg font-semibold">Not found</h2>
          <p className="mt-2 text-sm text-[color:var(--color-fg-dim)]">
            This task doesn’t exist, or you don’t have access to it.
          </p>
        </Card>
      </div>
    );
  }

  const { data: members } = await supabase
    .from("tenant_members")
    .select("user_id, role, created_at")
    .eq("tenant_id", task.tenant_id)
    .order("created_at", { ascending: true });

  const { error } = await searchParams;

  const dueLocal = task.due_at
    ? (() => {
        const d = new Date(task.due_at);
        d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
        return d.toISOString().slice(0, 16);
      })()
    : "";

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Task</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
            {task.completed_at ? (
              <>
                Completed{" "}
                <span className="text-[color:var(--color-accent)]">
                  {new Date(task.completed_at).toLocaleString()}
                </span>
              </>
            ) : (
              <>Open · assigned to {task.assigned_to ? task.assigned_to.slice(0, 8) + "…" : "unassigned"}</>
            )}
          </p>
        </div>
        <Link href="/tasks">
          <Button type="button" variant="ghost">
            Back
          </Button>
        </Link>
      </div>

      {error ? (
        <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      ) : null}
      {loadError ? (
        <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {loadError.message}
        </div>
      ) : null}

      <Card>
        <form action={updateTask} className="space-y-5">
          <input type="hidden" name="task_id" value={task.id} />

          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input id="title" name="title" required defaultValue={task.title} />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={task.description ?? ""}
              className="min-h-28 w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-4 py-3 text-sm text-[color:var(--color-fg)] placeholder:text-[color:var(--color-fg-muted)] focus:border-[color:var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]/30"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="due_at" className="text-sm font-medium">
                Due at
              </label>
              <Input id="due_at" name="due_at" type="datetime-local" defaultValue={dueLocal} />
            </div>
            <div className="space-y-2">
              <label htmlFor="priority" className="text-sm font-medium">
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                defaultValue={task.priority}
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
              defaultValue={task.assigned_to ?? ""}
              className="w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-4 py-3 text-sm"
            >
              <option value="">Unassigned</option>
              {(members ?? []).map((m) => (
                <option key={m.user_id} value={m.user_id}>
                  {m.user_id.slice(0, 8) + "…"} ({m.role})
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Optional links
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <label className="space-y-1">
                <span className="text-xs text-[color:var(--color-fg-muted)]">Contact ID</span>
                <Input name="contact_id" defaultValue={task.contact_id ?? ""} />
              </label>
              <label className="space-y-1">
                <span className="text-xs text-[color:var(--color-fg-muted)]">Company ID</span>
                <Input name="company_id" defaultValue={task.company_id ?? ""} />
              </label>
              <label className="space-y-1">
                <span className="text-xs text-[color:var(--color-fg-muted)]">Deal ID</span>
                <Input name="deal_id" defaultValue={task.deal_id ?? ""} />
              </label>
              <label className="space-y-1">
                <span className="text-xs text-[color:var(--color-fg-muted)]">Lead ID</span>
                <Input name="lead_id" defaultValue={task.lead_id ?? ""} />
              </label>
            </div>
          </div>

          <div className="flex items-center justify-end pt-2">
            <Button type="submit">Save changes</Button>
          </div>
        </form>
      </Card>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {task.completed_at ? (
            <form action={reopenTask}>
              <input type="hidden" name="task_id" value={task.id} />
              <Button type="submit" variant="secondary">
                Reopen
              </Button>
            </form>
          ) : (
            <form action={completeTask}>
              <input type="hidden" name="task_id" value={task.id} />
              <Button type="submit" variant="secondary">
                Complete
              </Button>
            </form>
          )}
        </div>

        <form action={deleteTask}>
          <input type="hidden" name="task_id" value={task.id} />
          <button
            type="submit"
            className="text-xs text-[color:var(--color-fg-dim)] underline hover:text-red-300"
          >
            Delete task
          </button>
        </form>
      </div>
    </div>
  );
}

