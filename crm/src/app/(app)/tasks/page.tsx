import Link from "next/link";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Task } from "@/lib/db/types";

type Tab = "my-open" | "team-open" | "completed";
type SearchParams = Promise<{ tab?: Tab; sort?: "due" | "created"; error?: string }>;

const THIRTY_DAYS_AGO_ISO = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

function tabLabel(tab: Tab) {
  if (tab === "my-open") return "My open tasks";
  if (tab === "team-open") return "Team open tasks";
  return "Completed (last 30d)";
}

function taskMeta(task: Task) {
  const due = task.due_at ? new Date(task.due_at).toLocaleString() : null;
  const created = new Date(task.created_at).toLocaleDateString();
  const priority = task.priority.toUpperCase();
  return [priority, due ? `Due ${due}` : "No due date", `Created ${created}`].join(" · ");
}

export default async function TasksPage({ searchParams }: { searchParams: SearchParams }) {
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

  const { tab: rawTab, sort: rawSort, error } = await searchParams;
  const tab: Tab = rawTab ?? "my-open";
  const sort = rawSort ?? "due";

  let q = supabase
    .from("tasks")
    .select(
      "id, tenant_id, contact_id, company_id, deal_id, lead_id, assigned_to, title, description, due_at, completed_at, priority, created_by, created_at, updated_at",
    );

  if (tab === "my-open") {
    q = q.eq("assigned_to", user.id).is("completed_at", null);
  } else if (tab === "team-open") {
    q = q.is("completed_at", null);
  } else {
    q = q.not("completed_at", "is", null).gte("completed_at", THIRTY_DAYS_AGO_ISO);
  }

  if (sort === "created") {
    q = q.order("created_at", { ascending: false });
  } else {
    q = q.order("due_at", { ascending: true, nullsFirst: false }).order("created_at", { ascending: false });
  }

  const { data, error: loadError } = await q.limit(200);
  const tasks = (data ?? []) as Task[];

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Tasks</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
            Track follow-ups and next steps across your workspace.
          </p>
        </div>
        <Link href="/tasks/new">
          <Button type="button">New task</Button>
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

      <div className="flex flex-wrap items-center gap-2">
        {(["my-open", "team-open", "completed"] as const).map((t) => (
          <Link
            key={t}
            href={`/tasks?tab=${t}&sort=${sort}`}
            className={
              "rounded-lg border px-3 py-2 text-sm " +
              (t === tab
                ? "border-[color:var(--color-accent)] bg-[color:var(--color-bg-2)] text-[color:var(--color-fg)]"
                : "border-[color:var(--color-border)] text-[color:var(--color-fg-dim)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-fg)]")
            }
          >
            {tabLabel(t)}
          </Link>
        ))}

        <div className="ml-auto flex items-center gap-2 text-sm">
          <span className="text-[color:var(--color-fg-muted)]">Sort</span>
          <Link
            href={`/tasks?tab=${tab}&sort=due`}
            className={
              "rounded-lg px-3 py-2 " +
              (sort === "due"
                ? "bg-[color:var(--color-bg-2)] text-[color:var(--color-fg)]"
                : "text-[color:var(--color-fg-dim)] hover:bg-[color:var(--color-bg-2)] hover:text-[color:var(--color-fg)]")
            }
          >
            Due date
          </Link>
          <Link
            href={`/tasks?tab=${tab}&sort=created`}
            className={
              "rounded-lg px-3 py-2 " +
              (sort === "created"
                ? "bg-[color:var(--color-bg-2)] text-[color:var(--color-fg)]"
                : "text-[color:var(--color-fg-dim)] hover:bg-[color:var(--color-bg-2)] hover:text-[color:var(--color-fg)]")
            }
          >
            Created
          </Link>
        </div>
      </div>

      {tasks.length === 0 ? (
        <Card>
          <h2 className="text-lg font-semibold">Nothing here yet</h2>
          <p className="mt-2 text-sm text-[color:var(--color-fg-dim)]">
            {tab === "completed"
              ? "No tasks were completed in the last 30 days."
              : "You have no open tasks in this view."}
          </p>
          <div className="mt-6">
            <Link href="/tasks/new">
              <Button type="button" variant="secondary">
                Create a task
              </Button>
            </Link>
          </div>
        </Card>
      ) : (
        <Card className="p-0">
          <div className="border-b border-[color:var(--color-border)] px-8 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              {tabLabel(tab)} · {tasks.length}
            </p>
          </div>
          <ul className="divide-y divide-[color:var(--color-border)]">
            {tasks.map((task) => (
              <li key={task.id} className="px-8 py-5">
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <Link
                      href={`/tasks/${task.id}`}
                      className="block truncate text-sm font-semibold hover:underline"
                    >
                      {task.title}
                    </Link>
                    <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">
                      {taskMeta(task)}
                    </p>
                    {task.description?.trim() ? (
                      <p className="mt-2 line-clamp-2 text-sm text-[color:var(--color-fg-dim)]">
                        {task.description}
                      </p>
                    ) : null}
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-mono text-[11px] text-[color:var(--color-fg-muted)]">
                      {task.assigned_to ? task.assigned_to.slice(0, 8) + "…" : "unassigned"}
                    </p>
                    {task.completed_at ? (
                      <p className="mt-1 text-xs text-[color:var(--color-accent)]">
                        Completed {new Date(task.completed_at).toLocaleDateString()}
                      </p>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}

