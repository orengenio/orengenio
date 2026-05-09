"use client";

/**
 * GDPR / CCPA cookie-consent banner.
 *
 * Persists the user's choice to localStorage as `og-consent` ("granted" |
 * "denied") and broadcasts a `og:consent-change` CustomEvent so the
 * Analytics component can attach / detach pixel scripts at runtime.
 *
 * The banner is shown to every visitor who has not yet decided. Region
 * detection is intentionally NOT done client-side: showing the banner
 * universally is the more conservative interpretation of GDPR Art. 7 +
 * CCPA / CPRA, and it avoids leaking IP geo to a third party just to
 * decide whether to ask.
 */

import { useEffect, useState } from "react";
import Link from "next/link";

export type ConsentValue = "granted" | "denied";

const STORAGE_KEY = "og-consent";
const EVENT = "og:consent-change";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "granted" || v === "denied" ? v : null;
}

function setConsent(value: ConsentValue) {
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent<ConsentValue>(EVENT, { detail: value }));
}

export function ConsentBanner() {
  const [decided, setDecided] = useState<boolean>(true);

  useEffect(() => {
    setDecided(getConsent() !== null);
  }, []);

  if (decided) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[80] border-t border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-4 sm:py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-white/90">
          We use cookies for analytics (Google Analytics, Meta Pixel,
          LinkedIn Insight) so we can improve the site. Reject and only
          strictly-necessary cookies are set. See{" "}
          <Link href="/cookie-policy" className="underline hover:text-burnt-orange">
            Cookie Policy
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="underline hover:text-burnt-orange">
            Privacy
          </Link>
          .
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setConsent("denied");
              setDecided(true);
            }}
            className="px-4 py-2 text-sm rounded border border-white/20 hover:bg-white/10 transition"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => {
              setConsent("granted");
              setDecided(true);
            }}
            className="px-4 py-2 text-sm rounded bg-burnt-orange text-white hover:bg-burnt-orange/90 transition font-medium"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
