// POST /api/sms/send — internal-only outbound SMS endpoint.
//
// Authn: shared X-OrenGen-Token header (constant-time compare in
// `requireInternalToken`). Used by the CRM at app.orengen.io, n8n workflows,
// and CrewAI agents — never exposed to the public internet without auth.
//
// Body: { to: string, body: string, from?: string, idempotency_key?: string }
// Response: { ok: true, sid } | { ok: false, error }
import { NextRequest } from "next/server";
import { sendSMS } from "@/lib/twilio";
import { requireInternalToken } from "@/lib/internalAuth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type SendBody = {
  to?: unknown;
  body?: unknown;
  from?: unknown;
  idempotency_key?: unknown;
};

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: NextRequest): Promise<Response> {
  const authError = requireInternalToken(req);
  if (authError) return authError;

  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
    return jsonResponse(
      { ok: false, error: "Twilio credentials missing on the server." },
      500,
    );
  }
  if (
    !process.env.TWILIO_MESSAGING_SERVICE_SID &&
    !process.env.TWILIO_PHONE_NUMBER
  ) {
    return jsonResponse(
      {
        ok: false,
        error:
          "No Twilio sender configured: set TWILIO_MESSAGING_SERVICE_SID or TWILIO_PHONE_NUMBER.",
      },
      500,
    );
  }

  let payload: SendBody;
  try {
    payload = (await req.json()) as SendBody;
  } catch {
    return jsonResponse({ ok: false, error: "Invalid JSON body." }, 400);
  }

  const to = typeof payload.to === "string" ? payload.to.trim() : "";
  const body = typeof payload.body === "string" ? payload.body : "";
  const from =
    typeof payload.from === "string" && payload.from.trim()
      ? payload.from.trim()
      : undefined;
  const idempotencyKey =
    typeof payload.idempotency_key === "string" &&
    payload.idempotency_key.trim()
      ? payload.idempotency_key.trim().slice(0, 128)
      : undefined;

  if (!to || !body) {
    return jsonResponse(
      { ok: false, error: "Both `to` and `body` are required." },
      400,
    );
  }
  if (body.length > 1600) {
    return jsonResponse(
      { ok: false, error: "`body` exceeds Twilio's 1600 char limit." },
      400,
    );
  }

  // Idempotency: log the key for now. A persistent dedupe store (Redis / DB
  // row keyed on idempotency_key) is a follow-up; logging at minimum gives us
  // an audit trail to detect duplicate sends after the fact.
  if (idempotencyKey) {
    console.log(`[sms/send] idempotency_key=${idempotencyKey}`);
  }

  try {
    const { sid } = await sendSMS(to, body, from);
    return jsonResponse({ ok: true, sid });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return jsonResponse({ ok: false, error: message }, 500);
  }
}
