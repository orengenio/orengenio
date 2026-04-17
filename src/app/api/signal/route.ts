import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const N8N_WEBHOOK =
  process.env.N8N_SIGNAL_WEBHOOK || "https://automate.orengen.io/webhook/newsletter-signup";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!rateLimit(ip, { maxRequests: 5, windowMs: 60_000 })) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  }

  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid JSON" }, { status: 400 });
  }

  const email = String(body.email || "").trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: "invalid email" }, { status: 400 });
  }

  const forwarded = {
    email,
    source: String(body.source || "orengen.io").slice(0, 200),
    utm_source: String(body.utm_source || "").slice(0, 100),
    utm_medium: String(body.utm_medium || "").slice(0, 100),
    utm_campaign: String(body.utm_campaign || "").slice(0, 200),
    ip: req.headers.get("x-forwarded-for") || "",
    ua: req.headers.get("user-agent") || "",
  };

  try {
    const res = await fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(forwarded),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: `upstream ${res.status}` },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e instanceof Error ? e.message : "upstream error" },
      { status: 502 },
    );
  }
}
