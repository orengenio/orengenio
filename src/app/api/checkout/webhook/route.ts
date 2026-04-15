import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * POST /api/checkout/webhook
 *
 * Stripe webhook endpoint. Verifies the `Stripe-Signature` header using
 * HMAC-SHA256 over `${timestamp}.${rawBody}` with `STRIPE_WEBHOOK_SECRET`.
 *
 * On `checkout.session.completed`:
 *   - Forwards the event to N8N_PURCHASE_WEBHOOK (best effort)
 *   - Creates an ERPNext Sales Order if ERPNEXT_URL + creds are set
 *
 * Always returns 200 to Stripe so it does not retry on our downstream
 * failures. Returns 400 only when the signature is missing or invalid.
 */

// Tolerance window for the signed timestamp, matching Stripe's default.
const TOLERANCE_SECONDS = 300;

function parseSignatureHeader(header: string): { t: string; v1: string[] } | null {
  const parts = header.split(",").map((p) => p.trim());
  let t: string | null = null;
  const v1: string[] = [];
  for (const part of parts) {
    const eq = part.indexOf("=");
    if (eq < 0) continue;
    const k = part.slice(0, eq);
    const v = part.slice(eq + 1);
    if (k === "t") t = v;
    else if (k === "v1") v1.push(v);
  }
  if (!t || v1.length === 0) return null;
  return { t, v1 };
}

function verifySignature(rawBody: string, header: string, secret: string): boolean {
  const parsed = parseSignatureHeader(header);
  if (!parsed) return false;
  const tsNum = Number.parseInt(parsed.t, 10);
  if (!Number.isFinite(tsNum)) return false;
  const nowSec = Math.floor(Date.now() / 1000);
  if (Math.abs(nowSec - tsNum) > TOLERANCE_SECONDS) return false;

  const expected = createHmac("sha256", secret)
    .update(`${parsed.t}.${rawBody}`, "utf8")
    .digest("hex");
  const expectedBuf = Buffer.from(expected, "utf8");

  for (const candidate of parsed.v1) {
    const candBuf = Buffer.from(candidate, "utf8");
    if (candBuf.length !== expectedBuf.length) continue;
    if (timingSafeEqual(candBuf, expectedBuf)) return true;
  }
  return false;
}

async function forwardToN8n(event: unknown): Promise<void> {
  const url = process.env.N8N_PURCHASE_WEBHOOK;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });
  } catch (err) {
    console.warn("[checkout/webhook] n8n forward failed:", err instanceof Error ? err.message : err);
  }
}

interface StripeSession {
  id?: string;
  customer_email?: string | null;
  customer_details?: { email?: string | null; name?: string | null } | null;
  amount_total?: number | null;
  currency?: string | null;
  metadata?: Record<string, string> | null;
}

async function createErpNextSalesOrder(session: StripeSession): Promise<void> {
  const erpUrl = process.env.ERPNEXT_URL;
  const apiKey = process.env.ERPNEXT_API_KEY;
  const apiSecret = process.env.ERPNEXT_API_SECRET;
  if (!erpUrl || !apiKey || !apiSecret) return;

  const customer =
    session.customer_details?.name ||
    session.customer_email ||
    session.customer_details?.email ||
    "Stripe Customer";
  const grandTotal = ((session.amount_total ?? 0) / 100).toFixed(2);

  const doc = {
    doctype: "Sales Order",
    customer,
    order_type: "Sales",
    items: [
      {
        item_code: "STRIPE-CHECKOUT",
        item_name: "Stripe Checkout Order",
        description: `Stripe session ${session.id ?? "(unknown)"}`,
        qty: 1,
        rate: grandTotal,
      },
    ],
    notes: `Auto-created from Stripe checkout.session.completed for session ${session.id ?? ""}`,
  };

  try {
    const body = new URLSearchParams({ doc: JSON.stringify(doc) });
    const res = await fetch(`${erpUrl.replace(/\/$/, "")}/api/method/frappe.client.insert`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `token ${apiKey}:${apiSecret}`,
      },
      body: body.toString(),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.warn(`[checkout/webhook] ERPNext insert ${res.status}: ${text.slice(0, 200)}`);
    }
  } catch (err) {
    console.warn("[checkout/webhook] ERPNext insert failed:", err instanceof Error ? err.message : err);
  }
}

export async function POST(req: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const sigHeader = req.headers.get("stripe-signature");
  // Read the raw body — required for HMAC verification.
  const rawBody = await req.text();

  if (!secret) {
    console.error("[checkout/webhook] STRIPE_WEBHOOK_SECRET not configured.");
    // Still return 200 so Stripe stops retrying; nothing we can do without the secret.
    return NextResponse.json({ ok: true, ignored: "no-secret-configured" });
  }
  if (!sigHeader) {
    return NextResponse.json({ ok: false, error: "Missing Stripe-Signature header." }, { status: 400 });
  }
  if (!verifySignature(rawBody, sigHeader, secret)) {
    return NextResponse.json({ ok: false, error: "Invalid signature." }, { status: 400 });
  }

  let event: { type?: string; data?: { object?: unknown } };
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ ok: true, ignored: "invalid-json" });
  }

  if (event.type === "checkout.session.completed") {
    const session = (event.data?.object ?? {}) as StripeSession;
    // Best-effort downstream side effects; never fail the webhook on them.
    await Promise.allSettled([forwardToN8n(event), createErpNextSalesOrder(session)]);
  }

  return NextResponse.json({ ok: true, received: true });
}
