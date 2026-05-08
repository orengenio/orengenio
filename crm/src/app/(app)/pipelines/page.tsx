import Link from "next/link";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createPipeline, setDefaultPipeline } from "./actions";

type SearchParams = Promise<{ error?: string }>;

export default async function PipelinesPage({ searchParams }: { searchParams: SearchParams }) {
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
  const myRole = memberships[0].role as "owner" | "admin" | "member";
  const canAdmin = myRole === "owner" || myRole === "admin";

  const { data: pipelines } = await supabase
    .from("pipelines")
    .select("id, name, is_default, position")
    .eq("tenant_id", tenantId)
    .order("position", { ascending: true });

  const { error } = await searchParams;

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Pipelines</h1>
        <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
          Configure pipelines and stages. Only owners/admins can edit.
        </p>
        {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
      </div>

      <Card>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">All pipelines</h2>
          <span className="text-xs text-[color:var(--color-fg-muted)]">
            {pipelines?.length ?? 0}
          </span>
        </div>

        {!pipelines || pipelines.length === 0 ? (
          <p className="mt-4 text-sm text-[color:var(--color-fg-muted)]">
            No pipelines yet. Create your first one below.
          </p>
        ) : (
          <ul className="mt-6 divide-y divide-[color:var(--color-border)]">
            {pipelines.map((p) => (
              <li key={p.id} className="flex items-center justify-between py-4 text-sm">
                <div>
                  <Link href={`/pipelines/${p.id}`} className="font-medium hover:underline">
                    {p.name}
                  </Link>
                  {p.is_default ? (
                    <span className="ml-2 rounded-full bg-[color:var(--color-bg-2)] px-3 py-1 text-xs uppercase tracking-[0.15em] text-[color:var(--color-accent)]">
                      default
                    </span>
                  ) : null}
                </div>
                {canAdmin && !p.is_default ? (
                  <form action={setDefaultPipeline}>
                    <input type="hidden" name="pipeline_id" value={p.id} />
                    <button type="submit" className="text-xs text-[color:var(--color-fg-dim)] underline hover:text-[color:var(--color-accent)]">
                      Set default
                    </button>
                  </form>
                ) : (
                  <span />
                )}
              </li>
            ))}
          </ul>
        )}
      </Card>

      <Card>
        <h2 className="text-lg font-semibold">Create pipeline</h2>
        {!canAdmin ? (
          <p className="mt-2 text-sm text-[color:var(--color-fg-muted)]">
            Only owners and admins can create pipelines.
          </p>
        ) : (
          <form action={createPipeline} className="mt-6 grid gap-3 md:grid-cols-[1fr_auto]">
            <Input name="name" required placeholder="Sales Pipeline" />
            <Button type="submit">Create</Button>
          </form>
        )}
      </Card>
    </div>
  );
}

