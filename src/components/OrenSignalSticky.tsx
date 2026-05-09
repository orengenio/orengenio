"use client";

/**
 * OrenSignal newsletter capture — sticky CTA + dialog.
 *
 * - Hidden on the SaaS-vs-Sovereign chooser at "/" (intentionally clean).
 * - Hidden once the visitor dismisses or submits successfully (24h).
 * - Submits to the existing /api/signal endpoint (rate-limited to 5/min/IP).
 * - Auto-opens the dialog on first scroll past 60% of viewport, exit-intent,
 *   or after 25s of dwell — whichever fires first.
 */

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Mail, X } from "lucide-react";

const STORAGE_KEY = "og-signal-dismiss";
const DISMISS_HOURS = 24;
const HIDE_ON: ReadonlySet<string> = new Set(["/", "/login"]);

function isDismissed(): boolean {
  if (typeof window === "undefined") return true;
  const ts = window.localStorage.getItem(STORAGE_KEY);
  if (!ts) return false;
  const age = Date.now() - Number(ts);
  return Number.isFinite(age) && age < DISMISS_HOURS * 60 * 60 * 1000;
}

function markDismissed() {
  window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
}

export function OrenSignalSticky() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (HIDE_ON.has(pathname)) {
      setHidden(true);
      return;
    }
    setHidden(isDismissed());
  }, [pathname]);

  useEffect(() => {
    if (hidden || open) return;
    let opened = false;
    const openOnce = () => {
      if (opened) return;
      opened = true;
      setOpen(true);
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > 0.6) openOnce();
    };
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) openOnce();
    };
    const dwell = window.setTimeout(openOnce, 25_000);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.clearTimeout(dwell);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [hidden, open]);

  if (hidden) return null;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Enter a valid email.");
      setStatus("err");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const params = new URLSearchParams(window.location.search);
      const res = await fetch("/api/signal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: window.location.pathname,
          utm_source: params.get("utm_source") ?? "",
          utm_medium: params.get("utm_medium") ?? "",
          utm_campaign: params.get("utm_campaign") ?? "",
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("ok");
      setEmail("");
      markDismissed();
      window.setTimeout(() => {
        setOpen(false);
        setHidden(true);
      }, 1500);
    } catch (err) {
      setStatus("err");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open OrenSignal newsletter signup"
        className="fixed bottom-6 left-6 z-[70] hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-burnt-orange text-white shadow-lg hover:bg-burnt-orange/90 transition font-medium text-sm"
      >
        <Mail className="h-4 w-4" />
        Get OrenSignal
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="og-signal-title"
          className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              markDismissed();
              setOpen(false);
              setHidden(true);
            }
          }}
        >
          <div className="w-full max-w-md rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl p-6 sm:p-7 relative text-white">
            <button
              type="button"
              onClick={() => {
                markDismissed();
                setOpen(false);
                setHidden(true);
              }}
              aria-label="Close newsletter signup"
              className="absolute top-3 right-3 text-white/60 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2 text-burnt-orange mb-3">
              <Mail className="h-5 w-5" />
              <span className="text-xs font-semibold tracking-wider uppercase">OrenSignal</span>
            </div>
            <h2 id="og-signal-title" className="text-xl sm:text-2xl font-semibold leading-tight">
              The intelligence newsletter for operators.
            </h2>
            <p className="mt-2 text-sm text-white/70">
              Weekly: AI deployments, automation playbooks, and what we&apos;re shipping.
              No spam. Unsubscribe in one click.
            </p>

            {status === "ok" ? (
              <p className="mt-5 text-sm text-emerald-400">
                You&apos;re on the list. Check your inbox for confirmation.
              </p>
            ) : (
              <form onSubmit={submit} className="mt-5 flex flex-col gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  aria-label="Email address"
                  className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-burnt-orange"
                />
                {status === "err" && error ? (
                  <p className="text-sm text-red-400">{error}</p>
                ) : null}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-4 py-2.5 rounded-lg bg-burnt-orange text-white font-medium hover:bg-burnt-orange/90 disabled:opacity-60 transition"
                >
                  {status === "loading" ? "Subscribing…" : "Subscribe"}
                </button>
                <p className="text-xs text-white/40">
                  By subscribing you agree to our{" "}
                  <a href="/privacy-policy" className="underline hover:text-white">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
