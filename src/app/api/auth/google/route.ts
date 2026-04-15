import { NextResponse } from "next/server";
import { randomBytes } from "crypto";

/**
 * GET /api/auth/google
 *
 * Redirects user to Google OAuth 2.0 consent screen.
 * After consent, Google redirects to /api/auth/google/callback.
 *
 * We generate a cryptographically random `state` value, send it to Google
 * as the `state` query parameter, and store it in an HttpOnly cookie. The
 * callback route compares the two to defend against CSRF.
 */
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const STATE_COOKIE = "oren_oauth_state";

export async function GET() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) {
    return NextResponse.json(
      { error: "GOOGLE_CLIENT_ID is not configured" },
      { status: 500 }
    );
  }

  const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL || "https://orengen.io"}/api/auth/google/callback`;
  const state = randomBytes(32).toString("hex");

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "openid email profile",
    access_type: "offline",
    prompt: "consent",
    state,
  });

  const res = NextResponse.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`,
  );
  res.cookies.set({
    name: STATE_COOKIE,
    value: state,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 10, // 10 minutes
  });
  return res;
}
