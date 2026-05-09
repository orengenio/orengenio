// GET /api/health — liveness/readiness probe for Coolify, Cloudflare, and
// uptime checks. Cheap, no external calls. Returns 200 with a JSON heartbeat
// when the process is up and the request loop is responsive.
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      service: "orengen-master",
      ts: new Date().toISOString(),
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}

export async function HEAD() {
  return new Response(null, { status: 200, headers: { "Cache-Control": "no-store" } });
}
