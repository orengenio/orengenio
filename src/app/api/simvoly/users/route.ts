import { NextRequest, NextResponse } from "next/server";
import { findContactByEmail, createContact } from "@/lib/systemeio";

/**
 * POST /api/simvoly/users
 * Create or find a systeme.io contact.
 * (Route path kept for backwards compatibility — uses systeme.io under the hood.)
 *
 * Body (JSON): { name: string, email: string }
 */
export async function POST(req: NextRequest) {
  try {
    const { name, email } = (await req.json()) as {
      name: string;
      email: string;
    };

    if (!name || !email) {
      return NextResponse.json({ error: "name and email are required" }, { status: 400 });
    }

    // Check if contact already exists
    const existing = await findContactByEmail(email);
    if (existing) {
      return NextResponse.json({ contact: existing, created: false });
    }

    // Parse name into first/last
    const parts = name.trim().split(/\s+/);
    const firstName = parts[0] || name;
    const lastName = parts.slice(1).join(" ") || "";

    const contact = await createContact({
      email,
      firstName,
      lastName,
      tags: [{ name: "website-signup" }],
    });

    return NextResponse.json({ contact, created: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[systeme.io Contacts]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
