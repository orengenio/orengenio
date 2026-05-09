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
          <span className="text-[color:var(--color-accent)]">Workspace</span>
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
            One place for{" "}
            <span className="text-[color:var(--color-accent)]">every conversation</span>
            , every customer.
          </h1>
          <p className="mt-6 max-w-md text-lg text-[color:var(--color-fg-dim)]">
            Calls, texts, leads, and deals — handled by your team and your AI
            agents in a single workspace, around the clock.
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
              Visit orengen.io
            </Link>
          </div>
        </div>

        <Card className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              What you get
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              A workspace built for outcomes
            </h2>
          </div>
          <ul className="space-y-3 text-sm text-[color:var(--color-fg-dim)]">
            <li>· Voice + SMS conversations in one inbox</li>
            <li>· Contacts, companies, leads, deals, tasks, and activities</li>
            <li>· Pipelines tuned to how your team actually closes</li>
            <li>· AI agents that qualify leads and draft replies for you</li>
            <li>· Role-based access — invite your team in seconds</li>
            <li>· Enterprise-grade security and tenant isolation by default</li>
          </ul>
        </Card>
      </section>
    </main>
  );
}
