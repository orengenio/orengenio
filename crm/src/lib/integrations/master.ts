// Server-only SDK for cross-service calls from the CRM (app.orengen.io) to the
// master Next.js app at orengen.io. Authenticates using the shared
// INTERNAL_API_TOKEN via the X-OrenGen-Token header so we never duplicate the
// auth logic at every call site.
//
// IMPORTANT: do NOT import this from a client component. It reads server-only
// env vars (INTERNAL_API_TOKEN) and must run on the server. (CRM apps that
// install the `server-only` package can add `import "server-only";` here to
// fail-fast at build time on accidental client imports.)

const DEFAULT_MASTER_URL = "https://orengen.io";

export type SendSmsViaMasterArgs = {
  to: string;
  body: string;
  /** Override the default Twilio sender (E.164). Optional. */
  from?: string;
  /**
   * Idempotency key forwarded to the master endpoint for dedupe / audit. The
   * master currently logs this; a persistent dedupe store is a follow-up.
   */
  idempotencyKey?: string;
};

export type SendSmsViaMasterResult =
  | { ok: true; sid: string }
  | { ok: false; error: string; status?: number };

function getMasterUrl(): string {
  return (process.env.OREN_MASTER_URL || DEFAULT_MASTER_URL).replace(/\/$/, "");
}

/**
 * POST {OREN_MASTER_URL}/api/sms/send with the X-OrenGen-Token header.
 *
 * Returns the parsed JSON response from the master endpoint. Network and
 * non-JSON responses are normalized into `{ ok: false, error, status? }` so
 * callers don't have to wrap this in their own try/catch.
 */
export async function sendSmsViaMaster(
  args: SendSmsViaMasterArgs,
): Promise<SendSmsViaMasterResult> {
  const token = process.env.INTERNAL_API_TOKEN;
  if (!token) {
    return {
      ok: false,
      error:
        "INTERNAL_API_TOKEN is not configured — cannot call master /api/sms/send.",
    };
  }

  const url = `${getMasterUrl()}/api/sms/send`;
  const payload: Record<string, string> = {
    to: args.to,
    body: args.body,
  };
  if (args.from) payload.from = args.from;
  if (args.idempotencyKey) payload.idempotency_key = args.idempotencyKey;

  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-OrenGen-Token": token,
      },
      body: JSON.stringify(payload),
      // Master endpoint is server-only and does not benefit from caching.
      cache: "no-store",
    });
  } catch (err) {
    return {
      ok: false,
      error: `Network error calling master: ${err instanceof Error ? err.message : String(err)}`,
    };
  }

  let json: unknown;
  try {
    json = await res.json();
  } catch {
    return {
      ok: false,
      status: res.status,
      error: `Master returned non-JSON response (status ${res.status}).`,
    };
  }

  if (
    !res.ok ||
    !json ||
    typeof json !== "object" ||
    (json as { ok?: unknown }).ok !== true
  ) {
    const errMsg =
      json && typeof json === "object" && typeof (json as { error?: unknown }).error === "string"
        ? (json as { error: string }).error
        : `Master /api/sms/send returned status ${res.status}`;
    return { ok: false, status: res.status, error: errMsg };
  }

  const sid = (json as { sid?: unknown }).sid;
  if (typeof sid !== "string") {
    return {
      ok: false,
      status: res.status,
      error: "Master response missing message sid.",
    };
  }

  return { ok: true, sid };
}
