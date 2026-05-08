import { redirect } from "next/navigation";
import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { signInWithGoogle, signInWithMagicLink } from "./actions";

type SearchParams = Promise<{ sent?: string; error?: string; next?: string }>;

export default async function LoginPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) redirect("/dashboard");

  const { sent, error, next } = await searchParams;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 py-16">
      <Card>
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            OrenGen CRM
          </p>
          <h1 className="mt-2 text-2xl font-semibold">Sign in</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
            We&apos;ll email you a one-time link.
          </p>
        </header>

        {sent ? (
          <div className="rounded-lg border border-[color:var(--color-accent)]/40 bg-[color:var(--color-accent)]/10 px-4 py-3 text-sm">
            Magic link sent to <strong>{sent}</strong>. Check your inbox.
          </div>
        ) : null}

        {error ? (
          <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        ) : null}

        <form action={signInWithMagicLink} className="mt-6 space-y-3">
          {next ? <input type="hidden" name="next" value={next} /> : null}
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
          />
          <Button type="submit" className="w-full">
            Send magic link
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
          <span className="h-px flex-1 bg-[color:var(--color-border)]" />
          or
          <span className="h-px flex-1 bg-[color:var(--color-border)]" />
        </div>

        <form action={signInWithGoogle}>
          {next ? <input type="hidden" name="next" value={next} /> : null}
          <Button type="submit" variant="secondary" className="w-full">
            Continue with Google
          </Button>
        </form>

        <p className="mt-8 text-center text-xs text-[color:var(--color-fg-muted)]">
          By signing in, you agree to OrenGen&apos;s{" "}
          <Link
            href="https://orengen.io/terms"
            className="underline hover:text-[color:var(--color-fg-dim)]"
          >
            Terms
          </Link>{" "}
          &amp;{" "}
          <Link
            href="https://orengen.io/privacy-policy"
            className="underline hover:text-[color:var(--color-fg-dim)]"
          >
            Privacy
          </Link>
          .
        </p>
      </Card>
    </main>
  );
}
