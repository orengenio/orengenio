"use client";

import Link from "next/link";
import { useMemo, useTransition } from "react";
import { moveDealToStage } from "../actions";
import { cn } from "@/lib/utils";
import { formatMoney, formatDate } from "@/lib/format";

type Stage = {
  id: string;
  name: string;
  is_won: boolean;
  is_lost: boolean;
};

type DealCard = {
  id: string;
  title: string;
  value_cents: number;
  currency: string;
  stage_id: string;
  owner_id: string | null;
  expected_close: string | null;
  is_won: boolean | null;
};

export function DealsBoard({
  stages,
  deals,
  totalsByStage,
}: {
  stages: Stage[];
  deals: DealCard[];
  totalsByStage: Record<string, string>;
}) {
  const [isPending, startTransition] = useTransition();

  const dealsByStage = useMemo(() => {
    const map = new Map<string, DealCard[]>();
    for (const s of stages) map.set(s.id, []);
    for (const d of deals) map.set(d.stage_id, [...(map.get(d.stage_id) ?? []), d]);
    return map;
  }, [stages, deals]);

  return (
    <div className={cn("grid gap-4", stages.length <= 3 ? "md:grid-cols-3" : "md:grid-cols-4")}>
      {stages.map((stage) => {
        const stageDeals = dealsByStage.get(stage.id) ?? [];
        const total = totalsByStage[stage.id] ?? "—";

        return (
          <div
            key={stage.id}
            className={cn(
              "rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] p-4",
              isPending ? "opacity-80" : "",
            )}
            onDragOver={(e) => {
              e.preventDefault();
              e.dataTransfer.dropEffect = "move";
            }}
            onDrop={(e) => {
              e.preventDefault();
              const dealId = e.dataTransfer.getData("text/deal-id");
              if (!dealId) return;
              startTransition(async () => {
                await moveDealToStage(dealId, stage.id);
              });
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold">{stage.name}</p>
                <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">
                  {total} · {stageDeals.length} deal{stageDeals.length === 1 ? "" : "s"}
                </p>
              </div>
              <span className="text-xs text-[color:var(--color-fg-muted)]">
                {stage.is_won ? "Won" : stage.is_lost ? "Lost" : ""}
              </span>
            </div>

            {stageDeals.length === 0 ? (
              <p className="mt-6 text-xs text-[color:var(--color-fg-muted)]">
                Drop a deal here, or create a{" "}
                <Link href="/deals/new" className="text-[color:var(--color-accent)] underline">
                  new deal
                </Link>
                .
              </p>
            ) : (
              <ul className="mt-4 space-y-3">
                {stageDeals.map((deal) => (
                  <li
                    key={deal.id}
                    draggable
                    onDragStart={(e) => {
                      e.dataTransfer.setData("text/deal-id", deal.id);
                      e.dataTransfer.effectAllowed = "move";
                    }}
                    className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg)] p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link href={`/deals/${deal.id}`} className="text-sm font-semibold hover:underline">
                          {deal.title}
                        </Link>
                        <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">
                          {formatMoney(deal.value_cents, deal.currency)}
                          {deal.expected_close ? ` · close ${formatDate(deal.expected_close)}` : ""}
                        </p>
                      </div>
                      <select
                        className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-2 py-1 text-xs"
                        value={deal.stage_id}
                        onChange={(e) => {
                          const nextStageId = e.target.value;
                          startTransition(async () => {
                            await moveDealToStage(deal.id, nextStageId);
                          });
                        }}
                        aria-label="Move deal to stage"
                      >
                        {stages.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

