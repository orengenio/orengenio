import { NextRequest } from "next/server";
import { sendSMS } from "@/lib/twilio";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type SendBody = { to?: unknown; body?: unknown };

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: NextRequest): Promise<Response> {
  const internalToken = process.env.INTERNAL_API_TOKEN;
  if (!internalToken) {
    return jsonResponse(
      { ok: false, error: "INTERNAL_API_TOKEN is not configured on the server." },
      500
    );
  }

  const presented = req.headers.get("x-orengen-token");
  if (!presented || presented !== internalToken) {
    return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
  }

  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
    return jsonResponse(
      { ok: false, error: "Twilio credentials missing on the server." },
      500
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
      500
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

  if (!to || !body) {
    return jsonResponse(
      { ok: false, error: "Both `to` and `body` are required." },
      400
    );
  }
  if (body.length > 1600) {
    return jsonResponse(
      { ok: false, error: "`body` exceeds Twilio's 1600 char limit." },
      400
    );
  }

  try {
    const { sid } = await sendSMS(to, body);
    return jsonResponse({ ok: true, sid });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return jsonResponse({ ok: false, error: message }, 500);
  }
}
