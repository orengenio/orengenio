import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  use_case: string;
  source: string;
};

// Reasonable email regex — not RFC perfect, but catches obvious bad input
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Phone: at least 7 digits after stripping, max 20 chars total
const PHONE_RE = /^[0-9+()\-.\s]{7,20}$/;

function validateLead(body: unknown): { ok: true; data: LeadPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }
  const b = body as Record<string, unknown>;
  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const phone = typeof b.phone === "string" ? b.phone.trim() : "";
  const company = typeof b.company === "string" ? b.company.trim() : "";
  const use_case = typeof b.use_case === "string" ? b.use_case.trim() : "";
  const source = typeof b.source === "string" ? b.source.trim() : "website";

  if (!name) return { ok: false, error: "Name is required." };
  if (!email || !EMAIL_RE.test(email)) return { ok: false, error: "A valid email is required." };
  if (!phone || !PHONE_RE.test(phone)) return { ok: false, error: "A valid phone number is required." };

  return {
    ok: true,
    data: {
      name: name.slice(0, 200),
      email: email.slice(0, 200),
      phone: phone.slice(0, 40),
      company: company.slice(0, 200),
      use_case: use_case.slice(0, 4000),
      source: source.slice(0, 80),
    },
  };
}

async function postToN8n(payload: Record<string, unknown>): Promise<void> {
  const url = process.env.N8N_LEAD_WEBHOOK_URL || "https://automate.orengen.io/webhook/lead-capture";
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.warn(`[leads] n8n webhook returned ${res.status}`);
    }
  } catch (err) {
    console.warn("[leads] n8n webhook failed:", err instanceof Error ? err.message : err);
  }
}

async function postToErpNext(lead: LeadPayload): Promise<void> {
  const erpUrl = process.env.ERPNEXT_URL;
  const apiKey = process.env.ERPNEXT_API_KEY;
  const apiSecret = process.env.ERPNEXT_API_SECRET;

  if (!erpUrl || !apiKey || !apiSecret) {
    console.warn("[leads] ERPNext envs not configured — skipping ERPNext insert.");
    return;
  }

  const doc = {
    doctype: "Lead",
    lead_name: lead.name,
    email_id: lead.email,
    mobile_no: lead.phone,
    company_name: lead.company,
    source: "Website",
    notes: lead.use_case,
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
      console.warn(`[leads] ERPNext insert returned ${res.status}: ${text.slice(0, 200)}`);
    }
  } catch (err) {
    console.warn("[leads] ERPNext insert failed:", err instanceof Error ? err.message : err);
  }
}

async function sendTwilioSms(lead: LeadPayload): Promise<void> {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_PHONE_NUMBER;
  const to = process.env.SALES_NOTIFY_PHONE;

  if (!sid) return; // gated by SID per spec
  if (!token || !from || !to) {
    console.warn("[leads] Twilio SID set but TWILIO_AUTH_TOKEN/TWILIO_PHONE_NUMBER/SALES_NOTIFY_PHONE missing.");
    return;
  }

  try {
    const body = new URLSearchParams({
      To: to,
      From: from,
      Body: `New OrenGen lead: ${lead.name} from ${lead.company || "(no company)"}`,
    });
    const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString("base64")}`,
      },
      body: body.toString(),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.warn(`[leads] Twilio SMS returned ${res.status}: ${text.slice(0, 200)}`);
    }
  } catch (err) {
    console.warn("[leads] Twilio SMS failed:", err instanceof Error ? err.message : err);
  }
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const result = validateLead(body);
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 400 });
  }
  const lead = result.data;
  const lead_id = crypto.randomUUID();
  const captured_at = new Date().toISOString();

  const fullPayload = { lead_id, captured_at, ...lead };
  // Do not include the email (PII) in plaintext logs.
  console.log(`[leads] captured ${lead_id} from ${lead.source}`);

  // Fire all integrations in parallel — never block on any single failure.
  await Promise.allSettled([
    postToN8n(fullPayload),
    postToErpNext(lead),
    sendTwilioSms(lead),
  ]);

  return NextResponse.json({ ok: true, lead_id });
}
