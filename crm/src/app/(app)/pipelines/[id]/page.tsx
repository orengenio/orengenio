import { redirect } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import {
  addStage,
  deletePipeline,
  deleteStage,
  reorderStagesAction,
  setDefaultPipeline,
  updatePipeline,
  updateStage,
} from "../actions";

type SearchParams = Promise<{ error?: string }>;

export default async function PipelineDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: SearchParams;
}) {
  const { id: pipelineId } = await params;
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

  const myRole = memberships[0].role as "owner" | "admin" | "member";
  const canAdmin = myRole === "owner" || myRole === "admin";

  const [{ data: pipeline }, { data: stages }] = await Promise.all([
    supabase.from("pipelines").select("id, name, is_default").eq("id", pipelineId).maybeSingle(),
    supabase
      .from("stages")
      .select("id, name, position, win_probability, is_won, is_lost")
      .eq("pipeline_id", pipelineId)
      .order("position", { ascending: true }),
  ]);

  if (!pipeline) redirect("/pipelines?error=not-found");

  const stageOrder = (stages ?? []).map((s) => s.id);
  const { error } = await searchParams;

  return (
    <div className="space-y-10">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
            Pipeline
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">{pipeline.name}</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
            <Link href="/pipelines" className="underline hover:text-[color:var(--color-accent)]">
              Back to pipelines
            </Link>
            {pipeline.is_default ? (
              <span className="ml-3 rounded-full bg-[color:var(--color-bg-2)] px-3 py-1 text-xs uppercase tracking-[0.15em] text-[color:var(--color-accent)]">
                default
              </span>
            ) : null}
          </p>
          {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
        </div>
        <div className="flex items-center gap-2">
          {canAdmin && !pipeline.is_default ? (
            <form action={setDefaultPipeline}>
              <input type="hidden" name="pipeline_id" value={pipeline.id} />
              <Button type="submit" variant="secondary">
                Set default
              </Button>
            </form>
          ) : null}
          {canAdmin ? (
            <form action={deletePipeline}>
              <input type="hidden" name="pipeline_id" value={pipeline.id} />
              <button type="submit" className="text-xs text-red-300 underline hover:text-red-200">
                Delete pipeline
              </button>
            </form>
          ) : null}
        </div>
      </div>

      <Card>
        <h2 className="text-lg font-semibold">Rename pipeline</h2>
        {!canAdmin ? (
          <p className="mt-2 text-sm text-[color:var(--color-fg-muted)]">
            Only owners and admins can edit pipelines.
          </p>
        ) : (
          <form action={updatePipeline} className="mt-6 grid gap-3 md:grid-cols-[1fr_auto]">
            <input type="hidden" name="pipeline_id" value={pipeline.id} />
            <Input name="name" defaultValue={pipeline.name} required />
            <Button type="submit">Save</Button>
          </form>
        )}
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Stages</h2>
          <span className="text-xs text-[color:var(--color-fg-muted)]">{stages?.length ?? 0}</span>
        </div>

        {!stages || stages.length === 0 ? (
          <p className="mt-4 text-sm text-[color:var(--color-fg-muted)]">
            No stages yet. Add one below.
          </p>
        ) : (
          <ul className="mt-6 space-y-4">
            {stages.map((s, idx) => {
              const canMoveUp = idx > 0;
              const canMoveDown = idx < stages.length - 1;
              const orderUp = canMoveUp
                ? (() => {
                    const next = stageOrder.slice();
                    [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
                    return JSON.stringify(next);
                  })()
                : "[]";
              const orderDown = canMoveDown
                ? (() => {
                    const next = stageOrder.slice();
                    [next[idx], next[idx + 1]] = [next[idx + 1], next[idx]];
                    return JSON.stringify(next);
                  })()
                : "[]";

              return (
                <li key={s.id} className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium">{s.name}</p>
                      <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">
                        Win probability: {s.win_probability}%
                        {s.is_won ? " · Won stage" : ""}
                        {s.is_lost ? " · Lost stage" : ""}
                      </p>
                    </div>
                    {canAdmin ? (
                      <div className="flex items-center gap-3">
                        <form action={reorderStagesAction}>
                          <input type="hidden" name="pipeline_id" value={pipeline.id} />
                          <input type="hidden" name="ordered_stage_ids" value={orderUp} />
                          <button
                            type="submit"
                            disabled={!canMoveUp}
                            className="text-xs text-[color:var(--color-fg-dim)] underline disabled:opacity-40"
                          >
                            Up
                          </button>
                        </form>
                        <form action={reorderStagesAction}>
                          <input type="hidden" name="pipeline_id" value={pipeline.id} />
                          <input type="hidden" name="ordered_stage_ids" value={orderDown} />
                          <button
                            type="submit"
                            disabled={!canMoveDown}
                            className="text-xs text-[color:var(--color-fg-dim)] underline disabled:opacity-40"
                          >
                            Down
                          </button>
                        </form>
                      </div>
                    ) : null}
                  </div>

                  {canAdmin ? (
                    <div className="mt-4 grid gap-3 md:grid-cols-[1fr_120px_auto_auto_auto]">
                      <form action={updateStage} className="contents">
                        <input type="hidden" name="pipeline_id" value={pipeline.id} />
                        <input type="hidden" name="stage_id" value={s.id} />
                        <Input name="name" defaultValue={s.name} required />
                        <Input
                          name="win_probability"
                          type="number"
                          min={0}
                          max={100}
                          defaultValue={s.win_probability}
                        />
                        <label className="flex items-center gap-2 text-xs text-[color:var(--color-fg-dim)]">
                          <input name="is_won" type="checkbox" defaultChecked={s.is_won} />
                          Won
                        </label>
                        <label className="flex items-center gap-2 text-xs text-[color:var(--color-fg-dim)]">
                          <input name="is_lost" type="checkbox" defaultChecked={s.is_lost} />
                          Lost
                        </label>
                        <Button type="submit" variant="secondary" className="md:col-span-5">
                          Save stage
                        </Button>
                      </form>
                      <form action={deleteStage}>
                        <input type="hidden" name="pipeline_id" value={pipeline.id} />
                        <input type="hidden" name="stage_id" value={s.id} />
                        <button type="submit" className="text-xs text-red-300 underline hover:text-red-200">
                          Delete stage
                        </button>
                      </form>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )}

        <div className="mt-8 border-t border-[color:var(--color-border)] pt-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
            Add stage
          </h3>
          {!canAdmin ? (
            <p className="mt-2 text-sm text-[color:var(--color-fg-muted)]">
              Only owners and admins can add stages.
            </p>
          ) : (
            <form action={addStage} className="mt-4 grid gap-3 md:grid-cols-[1fr_120px_auto_auto_auto]">
              <input type="hidden" name="pipeline_id" value={pipeline.id} />
              <Input name="name" required placeholder="Qualified" />
              <Input name="win_probability" type="number" min={0} max={100} defaultValue={0} />
              <label className="flex items-center gap-2 text-xs text-[color:var(--color-fg-dim)]">
                <input name="is_won" type="checkbox" />
                Won
              </label>
              <label className="flex items-center gap-2 text-xs text-[color:var(--color-fg-dim)]">
                <input name="is_lost" type="checkbox" />
                Lost
              </label>
              <Button type="submit" className="md:col-span-5">
                Add stage
              </Button>
            </form>
          )}
        </div>
      </Card>
    </div>
  );
}

