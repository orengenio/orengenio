import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { ContactWithCompany } from "@/lib/db/types";

type SearchParams = Promise<{ q?: string; page?: string; error?: string; deleted?: string }>;

const PAGE_SIZE = 20;

function buildSearchOr(q: string) {
  const v = q.replaceAll("%", "\\%").replaceAll("_", "\\_");
  return [
    `first_name.ilike.%${v}%`,
    `last_name.ilike.%${v}%`,
    `email.ilike.%${v}%`,
    `phone.ilike.%${v}%`,
  ].join(",");
}

function displayName(c: { first_name: string | null; last_name: string | null; email: string | null }) {
  const full = [c.first_name ?? "", c.last_name ?? ""].join(" ").trim();
  return full || c.email || "Unnamed";
}

export default async function ContactsPage({ searchParams }: { searchParams: SearchParams }) {
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

  const { q, page, error, deleted } = await searchParams;
  const query = (q ?? "").trim();
  const pageNum = Math.max(1, Number(page ?? "1") || 1);
  const from = (pageNum - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  let db = supabase
    .from("contacts")
    .select(
      "id, first_name, last_name, email, phone, title, company:companies(id, name)",
      { count: "exact" },
    )
    .order("updated_at", { ascending: false })
    .range(from, to);

  if (query) {
    db = db.or(buildSearchOr(query));
  }

  const { data, count } = await db;
  const contacts = (data as unknown as ContactWithCompany[] | null) ?? [];
  const total = count ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Contacts</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
            Search by name, email, or phone.
          </p>
        </div>
        <Link href="/contacts/new">
          <Button type="button">New contact</Button>
        </Link>
      </div>

      {deleted ? (
        <div className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-4 py-3 text-sm">
          Contact deleted.
        </div>
      ) : null}
      {error ? (
        <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      ) : null}

      <Card className="space-y-5">
        <form className="flex flex-wrap items-center gap-3" action="/contacts" method="get">
          <div className="min-w-[260px] flex-1">
            <Input
              name="q"
              placeholder="Search contacts…"
              defaultValue={query}
              aria-label="Search contacts"
            />
          </div>
          <Button type="submit" variant="secondary">
            Search
          </Button>
          {query ? (
            <Link href="/contacts" className="text-sm text-[color:var(--color-fg-dim)] underline">
              Clear
            </Link>
          ) : null}
        </form>

        {contacts.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[color:var(--color-border-strong)] px-6 py-10 text-center">
            <p className="text-sm text-[color:var(--color-fg-dim)]">
              {query ? "No contacts match your search." : "No contacts yet."}
            </p>
            <div className="mt-4">
              <Link href="/contacts/new">
                <Button type="button">Create your first contact</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-[color:var(--color-border)]">
            <ul className="divide-y divide-[color:var(--color-border)]">
              {contacts.map((c) => (
                <li key={c.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                  <div className="min-w-[240px] flex-1">
                    <Link href={`/contacts/${c.id}`} className="font-medium hover:underline">
                      {displayName(c)}
                    </Link>
                    <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">
                      {[c.title, c.email, c.phone].filter(Boolean).join(" · ") || "—"}
                    </p>
                  </div>
                  <div className="text-sm text-[color:var(--color-fg-dim)]">
                    {c.company?.id ? (
                      <Link href={`/companies/${c.company.id}`} className="underline hover:text-[color:var(--color-fg)]">
                        {c.company.name}
                      </Link>
                    ) : (
                      <span className="text-[color:var(--color-fg-muted)]">No company</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <p className="text-[color:var(--color-fg-muted)]">
            {total ? (
              <>
                Showing <strong>{from + 1}</strong>–<strong>{Math.min(total, to + 1)}</strong> of{" "}
                <strong>{total}</strong>
              </>
            ) : (
              "—"
            )}
          </p>

          <div className="flex items-center gap-2">
            <Link
              href={`/contacts?q=${encodeURIComponent(query)}&page=${Math.max(1, pageNum - 1)}`}
              className={`rounded-lg border border-[color:var(--color-border)] px-3 py-1.5 text-xs ${
                pageNum <= 1 ? "pointer-events-none opacity-50" : "hover:border-[color:var(--color-accent)]"
              }`}
            >
              Prev
            </Link>
            <span className="text-xs text-[color:var(--color-fg-muted)]">
              Page {pageNum} / {totalPages}
            </span>
            <Link
              href={`/contacts?q=${encodeURIComponent(query)}&page=${Math.min(totalPages, pageNum + 1)}`}
              className={`rounded-lg border border-[color:var(--color-border)] px-3 py-1.5 text-xs ${
                pageNum >= totalPages
                  ? "pointer-events-none opacity-50"
                  : "hover:border-[color:var(--color-accent)]"
              }`}
            >
              Next
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

