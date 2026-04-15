import { NextRequest } from "next/server";
import { validateTwilioSignature } from "@/lib/twilio";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function shouldSkipVerify(): boolean {
  return (
    process.env.NODE_ENV !== "production" &&
    process.env.SKIP_TWILIO_VERIFY === "1"
  );
}

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
  for (const [k, v] of new URLSearchParams(formText).entries()) {
    params[k] = v;
  }

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

  const n8nUrl = process.env.N8N_VOICE_STATUS_WEBHOOK;
  if (n8nUrl) {
    try {
      await fetch(n8nUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          receivedAt: new Date().toISOString(),
          source: "twilio-voice-status",
          params,
        }),
      });
    } catch (err) {
      console.error("[voice/status] forward to n8n failed:", err);
    }
  }

  return new Response("", { status: 200 });
}
