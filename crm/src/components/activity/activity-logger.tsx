"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { ActivityType, UUID } from "@/lib/db/types";
import { logActivity, type ActivityParent } from "./actions";

const types: { value: ActivityType; label: string }[] = [
  { value: "note", label: "Note" },
  { value: "call", label: "Call" },
  { value: "email", label: "Email" },
  { value: "sms", label: "SMS" },
  { value: "meeting", label: "Meeting" },
  { value: "other", label: "Other" },
];

export function ActivityLogger({
  parent,
  tenantId,
}: {
  parent: ActivityParent;
  tenantId: UUID;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [type, setType] = useState<ActivityType>("note");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [occurredAt, setOccurredAt] = useState(() => {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 16);
  });
  const [error, setError] = useState<string | null>(null);
  const canSubmit = useMemo(() => subject.trim() || body.trim(), [subject, body]);

  return (
    <Card className="p-6">
      <h3 className="text-sm font-semibold">Log activity</h3>
      <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">
        Captured under this record’s timeline.
      </p>

      <form
        className="mt-5 space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (!canSubmit) return;
          setError(null);
          startTransition(async () => {
            try {
              await logActivity({
                parent,
                type,
                subject,
                body,
                occurred_at: occurredAt,
              });
              setSubject("");
              setBody("");
              router.refresh();
            } catch (err) {
              setError(err instanceof Error ? err.message : "Failed to log activity");
            }
          });
        }}
      >
        <input type="hidden" name="tenant_id" value={tenantId} />
        <div className="grid gap-3 md:grid-cols-2">
          <label className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Type
            </span>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as ActivityType)}
              className="w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-4 py-3 text-sm"
            >
              {types.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Occurred at
            </span>
            <Input
              type="datetime-local"
              value={occurredAt}
              onChange={(e) => setOccurredAt(e.target.value)}
              required
            />
          </label>
        </div>

        <label className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
            Subject
          </span>
          <Input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Quick summary (optional)"
          />
        </label>

        <label className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
            Notes
          </span>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Add detail…"
            className="min-h-28 w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-4 py-3 text-sm text-[color:var(--color-fg)] placeholder:text-[color:var(--color-fg-muted)] focus:border-[color:var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]/30"
          />
        </label>

        {error ? <p className="text-sm text-red-300">{error}</p> : null}

        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-[color:var(--color-fg-muted)]">
            {canSubmit ? "Ready to log." : "Add a subject or notes to log."}
          </p>
          <Button type="submit" disabled={!canSubmit || isPending}>
            {isPending ? "Logging…" : "Log activity"}
          </Button>
        </div>
      </form>
    </Card>
  );
}

