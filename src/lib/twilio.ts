// Server-only Twilio helper. Uses Node 20 builtins (fetch, crypto) — no SDK.
// Do NOT import this file from client components — it reads server env vars.
// Reference: https://www.twilio.com/docs/usage/webhooks/webhooks-security
import { createHmac } from "node:crypto";

export type SendSMSResult = { sid: string };

const TWILIO_API_BASE = "https://api.twilio.com/2010-04-01";

function getCreds(): { sid: string; token: string } {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  if (!sid || !token) {
    throw new Error(
      "Twilio credentials missing: set TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN."
    );
  }
  return { sid, token };
}

/**
 * Send an SMS via the Twilio REST API.
 * Uses MessagingServiceSid when TWILIO_MESSAGING_SERVICE_SID is set
 * (recommended for A2P 10DLC), otherwise falls back to a single From number.
 */
export async function sendSMS(
  to: string,
  body: string,
  from?: string
): Promise<SendSMSResult> {
  const { sid, token } = getCreds();

  const e164To = formatPhoneE164(to);
  if (!e164To) {
    throw new Error(`Invalid 'to' phone number: ${to}`);
  }

  const params = new URLSearchParams();
  params.set("To", e164To);
  params.set("Body", body);

  const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
  const fromNumber = from || process.env.TWILIO_PHONE_NUMBER;

  if (messagingServiceSid) {
    params.set("MessagingServiceSid", messagingServiceSid);
  } else if (fromNumber) {
    params.set("From", fromNumber);
  } else {
    throw new Error(
      "No sender configured: set TWILIO_MESSAGING_SERVICE_SID or TWILIO_PHONE_NUMBER (or pass `from`)."
    );
  }

  const url = `${TWILIO_API_BASE}/Accounts/${sid}/Messages.json`;
  const auth = Buffer.from(`${sid}:${token}`).toString("base64");

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(
      `Twilio sendSMS failed: ${res.status} ${res.statusText} — ${errBody}`
    );
  }

  const json = (await res.json()) as { sid?: string };
  if (!json.sid) {
    throw new Error("Twilio response missing message SID");
  }
  return { sid: json.sid };
}

/**
 * Verify a Twilio webhook request signature.
 * Per https://www.twilio.com/docs/usage/webhooks/webhooks-security:
 *   1. Sort the POST params alphabetically by key
 *   2. Concat full URL + key + value (no separators) for each pair
 *   3. HMAC-SHA1 with the auth token, then base64 encode
 *   4. Compare to the X-Twilio-Signature header
 */
export function validateTwilioSignature(
  url: string,
  params: Record<string, string>,
  signature: string
): boolean {
  const token = process.env.TWILIO_AUTH_TOKEN;
  if (!token) return false;
  if (!signature) return false;

  const sortedKeys = Object.keys(params).sort();
  let data = url;
  for (const key of sortedKeys) {
    data += key + params[key];
  }

  const expected = createHmac("sha1", token).update(data).digest("base64");

  // Constant-time compare
  if (expected.length !== signature.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  return diff === 0;
}

/**
 * Normalize a US-style phone number to E.164 (+1XXXXXXXXXX).
 * Accepts already-E.164 numbers (any country) and passes them through.
 * Returns null if the input cannot be confidently normalized.
 */
export function formatPhoneE164(input: string): string | null {
  if (!input || typeof input !== "string") return null;
  const trimmed = input.trim();
  if (!trimmed) return null;

  // Already E.164 (e.g. +447911123456). Allow 8–15 digits after the '+'.
  if (trimmed.startsWith("+")) {
    const digits = trimmed.slice(1).replace(/\D/g, "");
    if (digits.length >= 8 && digits.length <= 15) {
      return `+${digits}`;
    }
    return null;
  }

  const digits = trimmed.replace(/\D/g, "");
  if (digits.length === 10) {
    return `+1${digits}`;
  }
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }
  return null;
}
