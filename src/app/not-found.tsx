import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you’re looking for doesn’t exist on orengen.io.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-background text-foreground">
      <div className="max-w-xl text-center">
        <p className="text-burnt-orange text-xs font-semibold tracking-widest uppercase">
          404 — Page not found
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
          That route doesn&apos;t exist.
        </h1>
        <p className="mt-4 text-white/70 text-base sm:text-lg">
          Either the link is wrong or the page moved. Try one of these:
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-3 text-left">
          <li>
            <Link
              href="/platform"
              className="block rounded-lg border border-white/10 hover:border-burnt-orange p-4 transition"
            >
              <span className="block text-sm font-semibold">Platform</span>
              <span className="block text-xs text-white/60 mt-1">
                The SaaS suite
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/orenagents"
              className="block rounded-lg border border-white/10 hover:border-burnt-orange p-4 transition"
            >
              <span className="block text-sm font-semibold">OrenAgents</span>
              <span className="block text-xs text-white/60 mt-1">
                Autonomous workforce
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="block rounded-lg border border-white/10 hover:border-burnt-orange p-4 transition"
            >
              <span className="block text-sm font-semibold">Pricing</span>
              <span className="block text-xs text-white/60 mt-1">
                Plans from $197/mo
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block rounded-lg border border-white/10 hover:border-burnt-orange p-4 transition"
            >
              <span className="block text-sm font-semibold">Insights</span>
              <span className="block text-xs text-white/60 mt-1">
                Blog &amp; case studies
              </span>
            </Link>
          </li>
        </ul>
        <Link
          href="/"
          className="mt-10 inline-block px-5 py-2.5 rounded-lg bg-burnt-orange text-white font-medium hover:bg-burnt-orange/90 transition"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
