import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createTenant } from "./actions";

type SearchParams = Promise<{ error?: string }>;

export default async function OnboardingPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: memberships } = await supabase
    .from("tenant_members")
    .select("tenant_id")
    .eq("user_id", user.id);
  if (memberships && memberships.length > 0) redirect("/dashboard");

  const { error } = await searchParams;

  return (
    <div className="mx-auto max-w-xl">
      <Card>
        <h1 className="text-2xl font-semibold">Create your workspace</h1>
        <p className="mt-2 text-sm text-[color:var(--color-fg-dim)]">
          Each workspace is a fully isolated tenant. You can invite teammates
          after this.
        </p>

        {error ? (
          <div className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        ) : null}

        <form action={createTenant} className="mt-8 space-y-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Workspace name
            </label>
            <Input
              id="name"
              name="name"
              required
              minLength={2}
              maxLength={80}
              placeholder="Acme Holdings"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="slug" className="text-sm font-medium">
              Subdomain (optional)
            </label>
            <div className="flex items-center gap-2 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-3">
              <Input
                id="slug"
                name="slug"
                pattern="[a-z0-9-]{2,40}"
                placeholder="acme"
                className="flex-1 border-0 bg-transparent px-1 focus:ring-0"
              />
              <span className="text-xs text-[color:var(--color-fg-muted)]">
                .app.orengen.io
              </span>
            </div>
            <p className="text-xs text-[color:var(--color-fg-muted)]">
              Lower-case letters, numbers, dashes. We&apos;ll pick one for you
              if you leave it blank.
            </p>
          </div>

          <Button type="submit" className="w-full">
            Create workspace
          </Button>
        </form>
      </Card>
    </div>
  );
}
