import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Company, Contact } from "@/lib/db/types";
import { deleteCompany, updateCompany } from "../actions";

type SearchParams = Promise<{ error?: string; saved?: string }>;

function displayName(c: Pick<Contact, "first_name" | "last_name" | "email">) {
  const full = [c.first_name ?? "", c.last_name ?? ""].join(" ").trim();
  return full || c.email || "Unnamed";
}

export default async function CompanyDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: SearchParams;
}) {
  const { id } = await params;

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

  const [{ data: company }, { data: contacts }, sp] = await Promise.all([
    supabase
      .from("companies")
      .select("id, name, domain, industry, size, website, phone, address, notes, created_at, updated_at")
      .eq("id", id)
      .maybeSingle(),
    supabase
      .from("contacts")
      .select("id, first_name, last_name, email, phone, title, updated_at")
      .eq("company_id", id)
      .order("updated_at", { ascending: false })
      .limit(200),
    searchParams,
  ]);

  if (!company) redirect(`/companies?error=${encodeURIComponent("Company not found.")}`);

  const { error, saved } = sp;
  const co = company as Company;
  const associated = (contacts as Contact[] | null) ?? [];

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Company
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">{co.name}</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
            Updated {new Date(co.updated_at).toLocaleString()}
          </p>
        </div>
        <Link href="/companies">
          <Button type="button" variant="ghost">
            Back
          </Button>
        </Link>
      </div>

      {saved ? (
        <div className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-4 py-3 text-sm">
          Saved.
        </div>
      ) : null}
      {error ? (
        <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      ) : null}

      <Card>
        <form action={updateCompany} className="space-y-6">
          <input type="hidden" name="id" value={co.id} />

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="name">
              Name
            </label>
            <Input id="name" name="name" required defaultValue={co.name} />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="domain">
                Domain
              </label>
              <Input id="domain" name="domain" defaultValue={co.domain ?? ""} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="industry">
                Industry
              </label>
              <Input id="industry" name="industry" defaultValue={co.industry ?? ""} />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="size">
                Size
              </label>
              <Input id="size" name="size" defaultValue={co.size ?? ""} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="website">
                Website
              </label>
              <Input id="website" name="website" defaultValue={co.website ?? ""} />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="phone">
                Phone
              </label>
              <Input id="phone" name="phone" defaultValue={co.phone ?? ""} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="address">
                Address
              </label>
              <Input id="address" name="address" defaultValue={co.address ?? ""} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="notes">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={6}
              defaultValue={co.notes ?? ""}
              className="w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-4 py-3 text-sm text-[color:var(--color-fg)] placeholder:text-[color:var(--color-fg-muted)] focus:border-[color:var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]/30"
            />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
            <Link href="/companies" className="text-sm text-[color:var(--color-fg-dim)] underline">
              Done
            </Link>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Contacts</h2>
          <span className="text-xs text-[color:var(--color-fg-muted)]">{associated.length}</span>
        </div>

        {associated.length === 0 ? (
          <div className="mt-5 rounded-xl border border-dashed border-[color:var(--color-border-strong)] px-6 py-8 text-center">
            <p className="text-sm text-[color:var(--color-fg-dim)]">No contacts linked to this company yet.</p>
          </div>
        ) : (
          <div className="mt-5 overflow-hidden rounded-xl border border-[color:var(--color-border)]">
            <ul className="divide-y divide-[color:var(--color-border)]">
              {associated.map((c) => (
                <li key={c.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                  <div className="min-w-[240px] flex-1">
                    <Link href={`/contacts/${c.id}`} className="font-medium hover:underline">
                      {displayName(c)}
                    </Link>
                    <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">
                      {[c.title, c.email, c.phone].filter(Boolean).join(" · ") || "—"}
                    </p>
                  </div>
                  <div className="text-xs text-[color:var(--color-fg-muted)]">
                    {new Date(c.updated_at).toLocaleDateString()}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>

      <form action={deleteCompany}>
        <input type="hidden" name="id" value={co.id} />
        <Button type="submit" variant="secondary" className="border-red-500/40 hover:border-red-400">
          Delete company
        </Button>
      </form>
    </div>
  );
}

