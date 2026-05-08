import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Company } from "@/lib/db/types";

type SearchParams = Promise<{ q?: string; page?: string; error?: string; deleted?: string }>;

const PAGE_SIZE = 20;

function buildSearchOr(q: string) {
  const v = q.replaceAll("%", "\\%").replaceAll("_", "\\_");
  return [`name.ilike.%${v}%`, `domain.ilike.%${v}%`].join(",");
}

export default async function CompaniesPage({ searchParams }: { searchParams: SearchParams }) {
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
    .from("companies")
    .select("id, name, domain, industry, website, phone, updated_at", { count: "exact" })
    .order("updated_at", { ascending: false })
    .range(from, to);

  if (query) db = db.or(buildSearchOr(query));

  const { data, count } = await db;
  const companies = (data as Company[] | null) ?? [];
  const total = count ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Companies</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">Search by name or domain.</p>
        </div>
        <Link href="/companies/new">
          <Button type="button">New company</Button>
        </Link>
      </div>

      {deleted ? (
        <div className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-4 py-3 text-sm">
          Company deleted.
        </div>
      ) : null}
      {error ? (
        <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      ) : null}

      <Card className="space-y-5">
        <form className="flex flex-wrap items-center gap-3" action="/companies" method="get">
          <div className="min-w-[260px] flex-1">
            <Input name="q" placeholder="Search companies…" defaultValue={query} aria-label="Search companies" />
          </div>
          <Button type="submit" variant="secondary">
            Search
          </Button>
          {query ? (
            <Link href="/companies" className="text-sm text-[color:var(--color-fg-dim)] underline">
              Clear
            </Link>
          ) : null}
        </form>

        {companies.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[color:var(--color-border-strong)] px-6 py-10 text-center">
            <p className="text-sm text-[color:var(--color-fg-dim)]">
              {query ? "No companies match your search." : "No companies yet."}
            </p>
            <div className="mt-4">
              <Link href="/companies/new">
                <Button type="button">Create your first company</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-[color:var(--color-border)]">
            <ul className="divide-y divide-[color:var(--color-border)]">
              {companies.map((c) => (
                <li key={c.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                  <div className="min-w-[240px] flex-1">
                    <Link href={`/companies/${c.id}`} className="font-medium hover:underline">
                      {c.name}
                    </Link>
                    <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">
                      {[c.domain, c.industry].filter(Boolean).join(" · ") || "—"}
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
              href={`/companies?q=${encodeURIComponent(query)}&page=${Math.max(1, pageNum - 1)}`}
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
              href={`/companies?q=${encodeURIComponent(query)}&page=${Math.min(totalPages, pageNum + 1)}`}
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

