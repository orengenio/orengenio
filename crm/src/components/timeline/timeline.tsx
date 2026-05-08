import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Activity } from "@/lib/db/types";
import { TimelineItem } from "./timeline-item";

export type TimelineParent =
  | { type: "contact"; id: string }
  | { type: "company"; id: string }
  | { type: "deal"; id: string }
  | { type: "lead"; id: string };

function groupKey(ts: string): string {
  const d = new Date(ts);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function labelForKey(key: string): string {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export async function Timeline({
  parent,
  tenantId,
}: {
  parent: TimelineParent;
  tenantId: string;
}) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const column =
    parent.type === "contact"
      ? "contact_id"
      : parent.type === "company"
        ? "company_id"
        : parent.type === "deal"
          ? "deal_id"
          : "lead_id";

  const { data, error } = await supabase
    .from("activities")
    .select(
      "id, tenant_id, type, direction, contact_id, company_id, deal_id, lead_id, user_id, subject, body, metadata, occurred_at, created_at",
    )
    .eq("tenant_id", tenantId)
    .eq(column, parent.id)
    .order("occurred_at", { ascending: false })
    .limit(100);

  if (error) {
    return (
      <div className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-5 py-4 text-sm text-red-300">
        Failed to load timeline: {error.message}
      </div>
    );
  }

  const activities = (data ?? []) as Activity[];
  if (activities.length === 0) {
    return (
      <div className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-5 py-6 text-sm text-[color:var(--color-fg-muted)]">
        No activity yet.
      </div>
    );
  }

  const grouped = new Map<string, Activity[]>();
  for (const a of activities) {
    const key = groupKey(a.occurred_at);
    grouped.set(key, [...(grouped.get(key) ?? []), a]);
  }

  const keys = Array.from(grouped.keys()).sort((a, b) => (a < b ? 1 : -1));

  return (
    <div className="space-y-8">
      {keys.map((key) => (
        <section key={key} className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-[color:var(--color-border)]" />
            <h3 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              {labelForKey(key)}
            </h3>
            <div className="h-px flex-1 bg-[color:var(--color-border)]" />
          </div>
          <div className="space-y-3">
            {(grouped.get(key) ?? []).map((activity) => (
              <TimelineItem key={activity.id} activity={activity} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

