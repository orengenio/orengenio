import { Card } from "@/components/ui/card";
import type { Activity, ActivityType } from "@/lib/db/types";

const typeIcon: Record<ActivityType, string> = {
  call: "☎",
  email: "✉",
  sms: "💬",
  meeting: "📅",
  note: "📝",
  other: "•",
};

export function TimelineItem({ activity }: { activity: Activity }) {
  const occurred = new Date(activity.occurred_at);
  const time = occurred.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <Card className="p-5">
      <div className="flex items-start gap-4">
        <div
          className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--color-bg-2)] text-sm text-[color:var(--color-fg)]"
          aria-hidden
        >
          {typeIcon[activity.type]}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-4">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">
                {activity.subject?.trim() ? activity.subject : "Activity"}
              </p>
              <p className="mt-0.5 text-xs text-[color:var(--color-fg-muted)]">
                {activity.type}
                {activity.direction ? ` · ${activity.direction}` : ""} · {time}
              </p>
            </div>
            <p className="shrink-0 font-mono text-[11px] text-[color:var(--color-fg-muted)]">
              {activity.user_id ? activity.user_id.slice(0, 8) + "…" : "system"}
            </p>
          </div>

          {activity.body?.trim() ? (
            <div className="mt-3 whitespace-pre-wrap text-sm text-[color:var(--color-fg-dim)]">
              {activity.body}
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

