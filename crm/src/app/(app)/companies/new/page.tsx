import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createCompany } from "../actions";

type SearchParams = Promise<{ error?: string }>;

export default async function NewCompanyPage({ searchParams }: { searchParams: SearchParams }) {
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

  const { error } = await searchParams;

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">New company</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">Add an account record.</p>
        </div>
        <Link href="/companies">
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

      <Card>
        <form action={createCompany} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="name">
              Name
            </label>
            <Input id="name" name="name" required placeholder="Acme Holdings" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="domain">
                Domain
              </label>
              <Input id="domain" name="domain" placeholder="acme.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="industry">
                Industry
              </label>
              <Input id="industry" name="industry" placeholder="Manufacturing" />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="size">
                Size
              </label>
              <Input id="size" name="size" placeholder="1-10 / 11-50 / 51-200…" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="website">
                Website
              </label>
              <Input id="website" name="website" placeholder="https://acme.com" />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="phone">
                Phone
              </label>
              <Input id="phone" name="phone" placeholder="+1 (555) 123-4567" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="address">
                Address
              </label>
              <Input id="address" name="address" placeholder="123 Main St, City, State" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="notes">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={5}
              className="w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-4 py-3 text-sm text-[color:var(--color-fg)] placeholder:text-[color:var(--color-fg-muted)] focus:border-[color:var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]/30"
              placeholder="Anything we should remember…"
            />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
            <Link href="/companies" className="text-sm text-[color:var(--color-fg-dim)] underline">
              Cancel
            </Link>
            <Button type="submit">Create company</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

