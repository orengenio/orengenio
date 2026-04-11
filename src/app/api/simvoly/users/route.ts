import { NextRequest, NextResponse } from "next/server";
import { createUser, searchUser } from "@/lib/simvoly";

/**
 * POST /api/simvoly/users
 * Create or find a Simvoly user.
 *
 * Body (JSON): { name: string, email: string, password?: string }
 */
export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = (await req.json()) as {
      name: string;
      email: string;
      password?: string;
    };

    if (!name || !email) {
      return NextResponse.json({ error: "name and email are required" }, { status: 400 });
    }

    // Check if user already exists
    try {
      const existing = await searchUser(email);
      return NextResponse.json({ user: existing, created: false });
    } catch {
      // User not found — create new
    }

    const result = await createUser({ name, email, password });
    return NextResponse.json({ user: result.data, created: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[Simvoly Users]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
