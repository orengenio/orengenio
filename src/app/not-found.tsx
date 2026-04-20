import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Explore OrenGen's AI-powered solutions instead.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl font-bold text-burnt-orange">404</h1>
      <p className="mt-4 text-xl font-medium text-foreground/80">
        This page doesn&apos;t exist.
      </p>
      <p className="mt-2 max-w-md text-foreground/60">
        Let&apos;s get you back on track — explore our AI agents, check pricing, or talk to our AI assistant.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-burnt-orange px-6 py-3 font-semibold text-white transition hover:brightness-110"
        >
          Back to Home
        </Link>
        <Link
          href="/pricing"
          className="rounded-lg border border-burnt-orange px-6 py-3 font-semibold text-burnt-orange transition hover:bg-burnt-orange/10"
        >
          See Pricing
        </Link>
      </div>
    </main>
  );
}
