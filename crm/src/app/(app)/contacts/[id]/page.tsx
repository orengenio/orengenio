import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Company, Contact } from "@/lib/db/types";
import { deleteContact, updateContact } from "../actions";

type SearchParams = Promise<{ error?: string; saved?: string }>;

function displayName(c: Pick<Contact, "first_name" | "last_name" | "email">) {
  const full = [c.first_name ?? "", c.last_name ?? ""].join(" ").trim();
  return full || c.email || "Contact";
}

export default async function ContactDetailPage({
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

  const [{ data: contact }, { data: companies }, sp] = await Promise.all([
    supabase
      .from("contacts")
      .select("id, company_id, first_name, last_name, email, phone, title, source, tags, notes, created_at, updated_at")
      .eq("id", id)
      .maybeSingle(),
    supabase.from("companies").select("id, name, domain").order("name", { ascending: true }).limit(200),
    searchParams,
  ]);

  if (!contact) redirect(`/contacts?error=${encodeURIComponent("Contact not found.")}`);

  const { error, saved } = sp;
  const c = contact as Contact;

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">{displayName(c)}</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
            Updated {new Date(c.updated_at).toLocaleString()}
          </p>
        </div>
        <Link href="/contacts">
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
        <form action={updateContact} className="space-y-6">
          <input type="hidden" name="id" value={c.id} />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="first_name">
                First name
              </label>
              <Input id="first_name" name="first_name" defaultValue={c.first_name ?? ""} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="last_name">
                Last name
              </label>
              <Input id="last_name" name="last_name" defaultValue={c.last_name ?? ""} />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <Input id="email" name="email" type="email" defaultValue={c.email ?? ""} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="phone">
                Phone
              </label>
              <Input id="phone" name="phone" defaultValue={c.phone ?? ""} />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="title">
                Title
              </label>
              <Input id="title" name="title" defaultValue={c.title ?? ""} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="source">
                Source
              </label>
              <Input id="source" name="source" defaultValue={c.source ?? ""} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="company_id">
              Company
            </label>
            <select
              id="company_id"
              name="company_id"
              defaultValue={c.company_id ?? ""}
              className="w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-3 py-3 text-sm"
            >
              <option value="">No company</option>
              {(companies as Pick<Company, "id" | "name" | "domain">[] | null)?.map((co) => (
                <option key={co.id} value={co.id}>
                  {co.name}
                  {co.domain ? ` (${co.domain})` : ""}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="tags">
              Tags
            </label>
            <Input id="tags" name="tags" defaultValue={(c.tags ?? []).join(", ")} />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="notes">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={6}
              defaultValue={c.notes ?? ""}
              className="w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-4 py-3 text-sm text-[color:var(--color-fg)] placeholder:text-[color:var(--color-fg-muted)] focus:border-[color:var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]/30"
            />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
            <Link href="/contacts" className="text-sm text-[color:var(--color-fg-dim)] underline">
              Done
            </Link>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Card>

      <form action={deleteContact}>
        <input type="hidden" name="id" value={c.id} />
        <Button type="submit" variant="secondary" className="border-red-500/40 hover:border-red-400">
          Delete contact
        </Button>
      </form>
    </div>
  );
}

