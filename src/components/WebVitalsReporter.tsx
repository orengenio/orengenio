"use client";

import { useReportWebVitals } from "next/web-vitals";

import { getConsent } from "./ConsentBanner";

/**
 * Reports Core Web Vitals (LCP, INP, CLS, FCP, TTFB) to GA4 as
 * `web_vitals` events when the visitor has accepted analytics. Gives
 * field data to replace the predicted CWV table in
 * docs/WEBSITE_RATING.md (audit O-5).
 *
 * Uses Next's built-in useReportWebVitals — no extra runtime dep.
 */
export function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    if (typeof window === "undefined") return;
    if (getConsent() !== "granted") return;
    if (typeof window.gtag !== "function") return;

    window.gtag("event", "web_vitals", {
      metric_name: metric.name,
      metric_id: metric.id,
      metric_value: Math.round(
        metric.name === "CLS" ? metric.value * 1000 : metric.value,
      ),
      metric_rating: metric.rating,
      non_interaction: true,
    });
  });

  return null;
}
