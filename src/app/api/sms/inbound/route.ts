import { NextRequest } from "next/server";
import { validateTwilioSignature } from "@/lib/twilio";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const TWIML_REPLY = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Message>Thanks! An OrenGen rep will be with you shortly. For immediate help: orengen.io/orenagents</Message>
</Response>`;

const DEFAULT_N8N_WEBHOOK =
  "https://automate.orengen.io/webhook/sms-inbound";

function shouldSkipVerify(): boolean {
  return (
    process.env.NODE_ENV !== "production" &&
    process.env.SKIP_TWILIO_VERIFY === "1"
  );
}

/**
 * Reconstruct the public URL Twilio used to call this webhook.
 * In production behind a proxy (Vercel/Cloudflare), prefer the forwarded
 * host/proto headers so the signature base string matches what Twilio signed.
 */
function getRequestUrl(req: NextRequest): string {
  const forwardedProto = req.headers.get("x-forwarded-proto");
  const forwardedHost = req.headers.get("x-forwarded-host");
  const host = forwardedHost ?? req.headers.get("host");
  if (host) {
    const proto = forwardedProto ?? "https";
    const url = new URL(req.url);
    return `${proto}://${host}${url.pathname}${url.search}`;
  }
  return req.url;
}

export async function POST(req: NextRequest): Promise<Response> {
  let formText: string;
  try {
    formText = await req.text();
  } catch {
    return new Response("Bad Request", { status: 400 });
  }

  const params: Record<string, string> = {};
  const search = new URLSearchParams(formText);
  for (const [k, v] of search.entries()) params[k] = v;

  const signature = req.headers.get("x-twilio-signature") ?? "";
  const url = getRequestUrl(req);

  if (!shouldSkipVerify()) {
    const ok = validateTwilioSignature(url, params, signature);
    if (!ok) {
      return new Response("Forbidden: invalid Twilio signature", {
        status: 403,
      });
    }
  }

  // Fire-and-await forward to n8n. We intentionally don't fail the webhook
  // on n8n errors — Twilio still expects a valid TwiML reply for the SMS.
  const n8nUrl = process.env.N8N_SMS_INBOUND_WEBHOOK || DEFAULT_N8N_WEBHOOK;
  try {
    await fetch(n8nUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        receivedAt: new Date().toISOString(),
        source: "twilio-sms-inbound",
        params,
      }),
    });
  } catch (err) {
    console.error("[sms/inbound] forward to n8n failed:", err);
  }

  return new Response(TWIML_REPLY, {
    status: 200,
    headers: { "Content-Type": "text/xml; charset=utf-8" },
  });
}
