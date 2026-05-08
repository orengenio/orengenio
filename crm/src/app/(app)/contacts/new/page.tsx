import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createContact } from "../actions";
import type { Company } from "@/lib/db/types";

type SearchParams = Promise<{ error?: string }>;

export default async function NewContactPage({ searchParams }: { searchParams: SearchParams }) {
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

  const [{ data: companies }, { error }] = await Promise.all([
    supabase
      .from("companies")
      .select("id, name, domain")
      .order("name", { ascending: true })
      .limit(200),
    searchParams,
  ]);

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">New contact</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
            Add a person and optionally link them to a company.
          </p>
        </div>
        <Link href="/contacts">
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
        <form action={createContact} className="space-y-6">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="first_name">
                First name
              </label>
              <Input id="first_name" name="first_name" placeholder="Jane" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="last_name">
                Last name
              </label>
              <Input id="last_name" name="last_name" placeholder="Doe" />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <Input id="email" name="email" type="email" placeholder="jane@acme.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="phone">
                Phone
              </label>
              <Input id="phone" name="phone" placeholder="+1 (555) 123-4567" />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="title">
                Title
              </label>
              <Input id="title" name="title" placeholder="VP Sales" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="source">
                Source
              </label>
              <Input id="source" name="source" placeholder="Inbound / Referral / Event" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="company_id">
              Company (optional)
            </label>
            <select
              id="company_id"
              name="company_id"
              defaultValue=""
              className="w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-3 py-3 text-sm"
            >
              <option value="">No company</option>
              {(companies as Pick<Company, "id" | "name" | "domain">[] | null)?.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                  {c.domain ? ` (${c.domain})` : ""}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="tags">
              Tags
            </label>
            <Input id="tags" name="tags" placeholder="vip, partner, investor" />
            <p className="text-xs text-[color:var(--color-fg-muted)]">
              Comma-separated.
            </p>
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
            <Link href="/contacts" className="text-sm text-[color:var(--color-fg-dim)] underline">
              Cancel
            </Link>
            <Button type="submit">Create contact</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

