import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/checkout
 *
 * Creates a Stripe Checkout Session by calling the Stripe REST API
 * directly (no `stripe` npm dep). Forwards a copy of the cart to n8n
 * (fire-and-forget) for CRM/automation purposes.
 *
 * Request body:
 *   {
 *     items: [{ name, price_cents, qty, recurring?: 'month' | 'year' }],
 *     customer_email?: string,
 *     success_url?: string,
 *     cancel_url?: string,
 *     metadata?: Record<string, string>
 *   }
 *
 * Response: { url, session_id } — redirect the browser to `url`.
 */

type Recurring = "month" | "year";

interface CheckoutItem {
  name: string;
  price_cents: number;
  qty: number;
  recurring?: Recurring;
}

interface CheckoutBody {
  items: CheckoutItem[];
  customer_email?: string;
  success_url?: string;
  cancel_url?: string;
  metadata?: Record<string, string>;
}

function isRecurring(v: unknown): v is Recurring {
  return v === "month" || v === "year";
}

function validateBody(raw: unknown): { ok: true; data: CheckoutBody } | { ok: false; error: string } {
  if (!raw || typeof raw !== "object") return { ok: false, error: "Invalid request body." };
  const b = raw as Record<string, unknown>;
  if (!Array.isArray(b.items) || b.items.length === 0) {
    return { ok: false, error: "items[] is required and must be non-empty." };
  }
  const items: CheckoutItem[] = [];
  for (const it of b.items) {
    if (!it || typeof it !== "object") return { ok: false, error: "Each item must be an object." };
    const i = it as Record<string, unknown>;
    const name = typeof i.name === "string" ? i.name.trim() : "";
    const price_cents = typeof i.price_cents === "number" ? Math.round(i.price_cents) : NaN;
    const qty = typeof i.qty === "number" ? Math.max(1, Math.floor(i.qty)) : 1;
    if (!name) return { ok: false, error: "item.name is required." };
    if (!Number.isFinite(price_cents) || price_cents < 0) {
      return { ok: false, error: "item.price_cents must be a non-negative integer." };
    }
    const item: CheckoutItem = { name: name.slice(0, 250), price_cents, qty };
    if (i.recurring !== undefined && i.recurring !== null) {
      if (!isRecurring(i.recurring)) return { ok: false, error: "item.recurring must be 'month' or 'year'." };
      item.recurring = i.recurring;
    }
    items.push(item);
  }
  // Stripe Checkout cannot mix one-time and recurring line items in a single
  // session. Reject mixed carts here rather than silently coercing the
  // one-time items into a monthly subscription.
  const recurringCount = items.filter((i) => i.recurring).length;
  if (recurringCount > 0 && recurringCount !== items.length) {
    return {
      ok: false,
      error: "Cart cannot mix one-time and recurring items in a single checkout.",
    };
  }
  const data: CheckoutBody = { items };
  if (typeof b.customer_email === "string") data.customer_email = b.customer_email.trim().slice(0, 250);
  if (typeof b.success_url === "string") data.success_url = b.success_url;
  if (typeof b.cancel_url === "string") data.cancel_url = b.cancel_url;
  if (b.metadata && typeof b.metadata === "object" && !Array.isArray(b.metadata)) {
    const meta: Record<string, string> = {};
    for (const [k, v] of Object.entries(b.metadata as Record<string, unknown>)) {
      if (typeof v === "string") meta[k.slice(0, 40)] = v.slice(0, 500);
    }
    data.metadata = meta;
  }
  return { ok: true, data };
}

function buildStripeForm(data: CheckoutBody, defaults: { success_url: string; cancel_url: string }): URLSearchParams {
  const form = new URLSearchParams();

  // Mode: subscription only if every item is recurring; otherwise payment.
  // Mixed carts are rejected upstream in validateBody so we never silently
  // turn a one-time line into a monthly subscription.
  const allRecurring = data.items.every((i) => i.recurring);
  form.set("mode", allRecurring ? "subscription" : "payment");

  form.set("success_url", data.success_url || defaults.success_url);
  form.set("cancel_url", data.cancel_url || defaults.cancel_url);
  if (data.customer_email) form.set("customer_email", data.customer_email);

  data.items.forEach((item, idx) => {
    const p = `line_items[${idx}]`;
    form.set(`${p}[price_data][currency]`, "usd");
    form.set(`${p}[price_data][product_data][name]`, item.name);
    form.set(`${p}[price_data][unit_amount]`, String(item.price_cents));
    form.set(`${p}[quantity]`, String(item.qty));
    if (item.recurring) {
      form.set(`${p}[price_data][recurring][interval]`, item.recurring);
    }
  });

  if (data.metadata) {
    for (const [k, v] of Object.entries(data.metadata)) {
      form.set(`metadata[${k}]`, v);
    }
  }

  return form;
}

async function forwardToN8n(payload: unknown): Promise<void> {
  const url = process.env.N8N_CHECKOUT_WEBHOOK;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.warn("[checkout] n8n forward failed:", err instanceof Error ? err.message : err);
  }
}

export async function POST(req: NextRequest) {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "STRIPE_SECRET_KEY is not configured on the server." },
      { status: 500 },
    );
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const parsed = validateBody(raw);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
  }

  // Trust the server-configured base URL first; only fall back to the
  // request `origin` header when no env is set, and only if it is on an
  // approved host. The header is client-controlled so taking it verbatim
  // would let a third party seed Stripe redirects on their own domain.
  const ALLOWED_ORIGINS = new Set<string>([
    "https://orengen.io",
    "https://www.orengen.io",
    "https://app.orengen.io",
  ]);
  const configuredBase = process.env.NEXT_PUBLIC_BASE_URL?.trim();
  const reqOrigin = req.headers.get("origin") ?? "";
  const origin =
    configuredBase ||
    (ALLOWED_ORIGINS.has(reqOrigin) ? reqOrigin : "https://orengen.io");
  const defaults = {
    success_url: `${origin}/orenkanbuilder?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/orenkanbuilder?checkout=cancelled`,
  };

  const form = buildStripeForm(parsed.data, defaults);

  let stripeRes: Response;
  try {
    stripeRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form.toString(),
    });
  } catch (err) {
    console.error("[checkout] Stripe network error:", err);
    return NextResponse.json({ ok: false, error: "Stripe request failed." }, { status: 502 });
  }

  const session = (await stripeRes.json().catch(() => null)) as
    | { id?: string; url?: string; error?: { message?: string } }
    | null;

  if (!stripeRes.ok || !session?.url || !session.id) {
    const msg = session?.error?.message || `Stripe returned ${stripeRes.status}`;
    console.error("[checkout] Stripe error:", msg);
    return NextResponse.json({ ok: false, error: msg }, { status: 502 });
  }

  // Fire-and-forget mirror to n8n. Do NOT await — must not delay redirect.
  void forwardToN8n({
    event: "checkout.session.created",
    session_id: session.id,
    cart: parsed.data,
    created_at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true, url: session.url, session_id: session.id });
}
