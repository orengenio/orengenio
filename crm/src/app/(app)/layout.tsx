import { redirect } from "next/navigation";
import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { BrandMark } from "@/components/brand-mark";
import { TenantBranding } from "@/components/tenant-branding";
import { getActiveTenant } from "@/lib/tenant";
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

  const ctx = await getActiveTenant();
  if (!ctx) redirect("/onboarding");

  const myRole = ctx.role;

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
      <TenantBranding />
      <header className="flex items-center justify-between border-b border-[color:var(--color-border)] pb-6">
        <BrandMark tenantName={ctx.tenant.name} />
        <nav className="flex items-center gap-1 text-sm">
          <NavLink href="/dashboard">Dashboard</NavLink>
          <NavLink href="/companies">Companies</NavLink>
          <NavLink href="/contacts">Contacts</NavLink>
          <NavLink href="/leads">Leads</NavLink>
          <NavLink href="/deals">Deals</NavLink>
          <NavLink href="/tasks">Tasks</NavLink>
          {myRole === "owner" || myRole === "admin" ? (
            <NavLink href="/pipelines">Pipelines</NavLink>
          ) : null}
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
