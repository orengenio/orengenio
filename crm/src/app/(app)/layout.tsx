import { redirect } from "next/navigation";
import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { BrandMark } from "@/components/brand-mark";
import { signOut } from "../login/actions";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: memberships } = await supabase
    .from("tenant_members")
    .select("tenant_id, role, tenants(id, slug, name)")
    .eq("user_id", user.id);

  const rawTenants = memberships?.[0]?.tenants as unknown;
  const activeTenant = Array.isArray(rawTenants)
    ? (rawTenants[0] as { id: string; slug: string; name: string } | undefined)
    : (rawTenants as { id: string; slug: string; name: string } | undefined);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
      <header className="flex items-center justify-between border-b border-[color:var(--color-border)] pb-6">
        <BrandMark tenantName={activeTenant?.name} />
        <nav className="flex items-center gap-1 text-sm">
          <NavLink href="/dashboard">Dashboard</NavLink>
          <NavLink href="/leads">Leads</NavLink>
          <NavLink href="/settings">Settings</NavLink>
          <span className="ml-3 hidden text-xs text-[color:var(--color-fg-muted)] md:inline">
            {user.email}
          </span>
          <form action={signOut}>
            <button
              type="submit"
              className="ml-3 rounded-lg border border-[color:var(--color-border)] px-3 py-1.5 text-xs text-[color:var(--color-fg-dim)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-fg)]"
            >
              Sign out
            </button>
          </form>
        </nav>
      </header>
      <main className="flex-1 py-10">{children}</main>
    </div>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-lg px-3 py-2 text-[color:var(--color-fg-dim)] hover:bg-[color:var(--color-bg-2)] hover:text-[color:var(--color-fg)]"
    >
      {children}
    </Link>
  );
}
