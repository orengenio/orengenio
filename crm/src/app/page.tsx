import { redirect } from "next/navigation";
import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { Card } from "@/components/ui/card";

export default async function Home() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) redirect("/dashboard");

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-16">
      <header className="mb-16 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-[0.2em] uppercase">
          <span className="text-[color:var(--color-fg)]">OrenGen</span>{" "}
          <span className="text-[color:var(--color-accent)]">Backend</span>
        </span>
        <Link
          href="/login"
          className="text-sm font-semibold text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)]"
        >
          Sign in →
        </Link>
      </header>

      <section className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="font-semibold leading-[1.05] tracking-tight text-balance text-5xl md:text-6xl">
            The workspace your{" "}
            <span className="text-[color:var(--color-accent)]">AI agents</span>{" "}
            actually live in.
          </h1>
          <p className="mt-6 max-w-md text-lg text-[color:var(--color-fg-dim)]">
            One workspace per client. Voice, SMS, leads, deals, and pipelines —
            unified with autonomous OrenGen agents reading and writing alongside
            your team.
          </p>
          <div className="mt-10 flex gap-3">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-xl bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(204,85,0,0.55)] hover:bg-[color:var(--color-accent-hi)]"
            >
              Sign in
            </Link>
            <Link
              href="https://orengen.io"
              className="inline-flex items-center justify-center rounded-xl border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-2)] px-6 py-3 text-sm font-semibold text-[color:var(--color-fg)] hover:border-[color:var(--color-accent)]"
            >
              Marketing site
            </Link>
          </div>
        </div>

        <Card className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              What&apos;s inside
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              One backend per client
            </h2>
          </div>
          <ul className="space-y-3 text-sm text-[color:var(--color-fg-dim)]">
            <li>· Magic-link + Google sign-in via Supabase Auth</li>
            <li>· Strict per-tenant data isolation (Postgres RLS)</li>
            <li>· Subdomain routing — <code>acme.app.orengen.io</code></li>
            <li>· Token-based invites with role-based access</li>
            <li>· Contacts, companies, leads, deals, tasks, and activities</li>
            <li>· Twilio SMS + Vapi voice + CrewAI lead qualifier wired in</li>
          </ul>
        </Card>
      </section>
    </main>
  );
}
