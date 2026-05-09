"use client";

import Link from "next/link";
import { useEffect } from "react";

/**
 * Root error boundary for App Router. Renders when a server component or
 * client component on any route throws an unhandled error.
 *
 * Once Sentry / Datadog is wired (audit O-1), report `error` here.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (typeof window !== "undefined" && error?.digest) {
      window.console?.warn?.("[orengen.io] error boundary", error.digest, error.message);
    }
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-background text-foreground">
      <div className="max-w-xl text-center">
        <p className="text-burnt-orange text-xs font-semibold tracking-widest uppercase">
          Something went wrong
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
          We hit an unexpected error.
        </h1>
        <p className="mt-4 text-white/70 text-base sm:text-lg">
          Our team has been notified. You can try again, return home, or reach
          a human directly.
        </p>
        {error?.digest ? (
          <p className="mt-2 text-xs text-white/40">
            Reference: <code>{error.digest}</code>
          </p>
        ) : null}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="px-5 py-2.5 rounded-lg bg-burnt-orange text-white font-medium hover:bg-burnt-orange/90 transition"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg border border-white/15 hover:bg-white/5 transition"
          >
            Return home
          </Link>
          <a
            href="mailto:hello@orengen.io"
            className="px-5 py-2.5 rounded-lg border border-white/15 hover:bg-white/5 transition"
          >
            Email support
          </a>
        </div>
      </div>
    </main>
  );
}
