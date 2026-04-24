import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const N8N_WEBHOOK =
  process.env.N8N_CONSENT_WEBHOOK ||
  "https://automate.orengen.io/webhook/sms-consent";

function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (phone.startsWith("+")) return `+${digits}`;
  return `+${digits}`;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip, { maxRequests: 3, windowMs: 60_000 })) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  }

  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const firstName = String(body.firstName || "").trim();
  const lastName = String(body.lastName || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const phoneRaw = String(body.phone || "").trim();
  const company = String(body.company || "").trim();
  const consent = body.consent === true;
  const consentText = String(body.consentText || "").trim();

  if (!firstName || firstName.length > 100 || !lastName || lastName.length > 100) {
    return NextResponse.json({ ok: false, error: "Invalid name" }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  const phoneDigits = phoneRaw.replace(/\D/g, "");
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return NextResponse.json({ ok: false, error: "Invalid phone" }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json(
      { ok: false, error: "Consent checkbox is required" },
      { status: 400 },
    );
  }
  if (!consentText || consentText.length < 50) {
    return NextResponse.json(
      { ok: false, error: "Missing consent text" },
      { status: 400 },
    );
  }

  const phone = normalizePhone(phoneRaw);
  const userAgent = req.headers.get("user-agent") || "unknown";
  const referer = req.headers.get("referer") || "";
  const timestamp = new Date().toISOString();

  const proofOfConsent = {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    email,
    phone,
    phoneDigits,
    company: company.slice(0, 200),
    consent,
    consentText: consentText.slice(0, 2000),
    pageUrl: String(body.pageUrl || "https://orengen.io/sms-consent").slice(0, 500),
    referer: referer.slice(0, 500),
    ip,
    userAgent: userAgent.slice(0, 500),
    submittedAt: timestamp,
    source: "web-form",
    optInMethod: "express-written-consent-web-form",
    complianceFramework: "TCPA-CTIA-A2P10DLC",
  };

  try {
    const res = await fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(proofOfConsent),
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      console.error(`Consent webhook failed: ${res.status}`);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We couldn't record your consent right now. Please try again in a moment.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Consent recorded successfully",
      timestamp,
    });
  } catch (e) {
    console.error("Consent route error:", e);
    return NextResponse.json(
      {
        ok: false,
        error:
          e instanceof Error ? e.message : "Failed to record consent",
      },
      { status: 502 },
    );
  }
}
