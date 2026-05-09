/**
 * Named-event helpers for HEART instrumentation. Wraps the generic
 * trackEvent() in src/lib/track.ts so callers don't have to remember
 * event names and param shapes.
 *
 * Every helper no-ops when the analytics SDKs aren't loaded (which is
 * the case until the visitor accepts cookies in ConsentBanner).
 */

import { trackEvent } from "./track";

export const events = {
  leadSubmit: (source: string) => trackEvent("lead_submit", { source }),
  leadFail: (source: string, reason: string) =>
    trackEvent("lead_submit_fail", { source, reason }),
  checkoutStart: (cartValue: number) =>
    trackEvent("checkout_start", { value: cartValue, currency: "USD" }),
  chatOpen: () => trackEvent("chat_open"),
  orbMessage: (kind: "voice" | "chat") => trackEvent("orb_message", { kind }),
  signalSubscribe: (source: string) =>
    trackEvent("signal_subscribe", { source }),
  ctaClick: (cta: string, location: string) =>
    trackEvent("cta_click", { cta, location }),
};
