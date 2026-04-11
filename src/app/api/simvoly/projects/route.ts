import { NextRequest, NextResponse } from "next/server";
import { listSubscriptions, findContactByEmail } from "@/lib/systemeio";

/**
 * GET /api/simvoly/projects?email=...
 * List subscriptions for a contact (replaces Simvoly project listing).
 */
export async function GET(req: NextRequest) {
  try {
    const email = req.nextUrl.searchParams.get("email");
    if (!email) {
      return NextResponse.json({ error: "email query parameter is required" }, { status: 400 });
    }

    const contact = await findContactByEmail(email);
    if (!contact) {
      return NextResponse.json({ subscriptions: [], contact: null });
    }

    const subscriptions = await listSubscriptions();
    return NextResponse.json({ subscriptions: subscriptions.items, contact });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[systeme.io Subscriptions]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
