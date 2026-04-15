/**
 * Conversion + analytics helpers.
 *
 * Each helper safely no-ops when the underlying SDK (gtag, fbq, lintrk)
 * is missing — usually because the corresponding NEXT_PUBLIC_* env var
 * was not provided at build time and the script tag was never injected.
 */

type GtagCommand = "config" | "event" | "set" | "consent" | "js" | "get";

type GtagFn = (
  command: GtagCommand,
  targetIdOrEventName: string | Date,
  params?: Record<string, unknown>,
) => void;

type FbqFn = {
  (command: "init", pixelId: string, params?: Record<string, unknown>): void;
  (command: "track", eventName: string, params?: Record<string, unknown>): void;
  (command: "trackCustom", eventName: string, params?: Record<string, unknown>): void;
  (command: string, ...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
  push?: (...args: unknown[]) => void;
};

type LintrkFn = (command: "track", params: { conversion_id: number | string }) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
    fbq?: FbqFn;
    _fbq?: FbqFn;
    lintrk?: LintrkFn;
  }
}

function safeGtag(): GtagFn | undefined {
  if (typeof window === "undefined") return undefined;
  return typeof window.gtag === "function" ? window.gtag : undefined;
}

function safeFbq(): FbqFn | undefined {
  if (typeof window === "undefined") return undefined;
  return typeof window.fbq === "function" ? window.fbq : undefined;
}

function safeLintrk(): LintrkFn | undefined {
  if (typeof window === "undefined") return undefined;
  return typeof window.lintrk === "function" ? window.lintrk : undefined;
}

/**
 * Fire a generic event across every analytics provider that is loaded.
 */
export function trackEvent(name: string, params?: Record<string, unknown>): void {
  const gtag = safeGtag();
  if (gtag) {
    try {
      gtag("event", name, params);
    } catch {
      // ignore
    }
  }

  const fbq = safeFbq();
  if (fbq) {
    try {
      fbq("trackCustom", name, params);
    } catch {
      // ignore
    }
  }

  const lintrk = safeLintrk();
  if (lintrk && params && typeof params.conversion_id !== "undefined") {
    try {
      const conversionId = params.conversion_id as number | string;
      lintrk("track", { conversion_id: conversionId });
    } catch {
      // ignore
    }
  }
}

export interface LeadPayload {
  lead_id: string;
  source: string;
  value?: number;
}

export function trackLead(payload: LeadPayload): void {
  const { lead_id, source, value } = payload;
  const params: Record<string, unknown> = {
    lead_id,
    source,
    currency: "USD",
  };
  if (typeof value === "number") params.value = value;

  const gtag = safeGtag();
  if (gtag) {
    try {
      gtag("event", "generate_lead", params);
    } catch {
      // ignore
    }
  }

  const fbq = safeFbq();
  if (fbq) {
    try {
      fbq("track", "Lead", {
        content_name: source,
        value: value ?? 0,
        currency: "USD",
      });
    } catch {
      // ignore
    }
  }

  const lintrk = safeLintrk();
  if (lintrk) {
    try {
      lintrk("track", { conversion_id: lead_id });
    } catch {
      // ignore
    }
  }
}

export function trackVoiceStart(source: string): void {
  trackEvent("voice_call_start", { source });
}

export function trackChatStart(source: string): void {
  trackEvent("chat_start", { source });
}

export function trackBeginCheckout(plan: string, value: number): void {
  const gtag = safeGtag();
  if (gtag) {
    try {
      gtag("event", "begin_checkout", {
        currency: "USD",
        value,
        items: [{ item_id: plan, item_name: plan, price: value, quantity: 1 }],
      });
    } catch {
      // ignore
    }
  }

  const fbq = safeFbq();
  if (fbq) {
    try {
      fbq("track", "InitiateCheckout", {
        content_ids: [plan],
        content_name: plan,
        value,
        currency: "USD",
      });
    } catch {
      // ignore
    }
  }
}

export function trackPurchase(order_id: string, value: number, plan: string): void {
  const gtag = safeGtag();
  if (gtag) {
    try {
      gtag("event", "purchase", {
        transaction_id: order_id,
        currency: "USD",
        value,
        items: [{ item_id: plan, item_name: plan, price: value, quantity: 1 }],
      });
    } catch {
      // ignore
    }
  }

  const fbq = safeFbq();
  if (fbq) {
    try {
      fbq("track", "Purchase", {
        content_ids: [plan],
        content_name: plan,
        value,
        currency: "USD",
      });
    } catch {
      // ignore
    }
  }
}
