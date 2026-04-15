import { NextRequest } from "next/server";
import { validateTwilioSignature } from "@/lib/twilio";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const FALLBACK_TWIML = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna">Sorry, our assistant is currently unavailable. Please call back later.</Say>
  <Hangup/>
</Response>`;

function buildVapiTwiml(assistantId: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna">Welcome to OrenGen. Connecting you to your AI assistant.</Say>
  <Dial answerOnBridge="true">
    <Sip>sip:${assistantId}@sip.vapi.ai</Sip>
  </Dial>
</Response>`;
}

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

  const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;
  const xml =
    assistantId && assistantId.trim() && assistantId !== "your-vapi-assistant-id"
      ? buildVapiTwiml(assistantId.trim())
      : FALLBACK_TWIML;

  return new Response(xml, {
    status: 200,
    headers: { "Content-Type": "text/xml; charset=utf-8" },
  });
}
