import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/auth/google/callback
 *
 * Google OAuth callback. Exchanges code for tokens, gets user profile,
 * and redirects to the app dashboard.
 *
 * When ERPNext is set up, this callback will create/authenticate
 * the user in Frappe and establish a session.
 */
export async function GET(req: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://orengen.io";
  const appUrl = process.env.APP_URL || "https://app.orengen.io";

  try {
    const code = req.nextUrl.searchParams.get("code");
    const error = req.nextUrl.searchParams.get("error");

    if (error) {
      return NextResponse.redirect(`${baseUrl}/login?error=${encodeURIComponent(error)}`);
    }

    if (!code) {
      return NextResponse.redirect(`${baseUrl}/login?error=missing_code`);
    }

    // 1. Exchange code for tokens
    const clientId = process.env.GOOGLE_CLIENT_ID!;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET!;
    const redirectUri = `${baseUrl}/api/auth/google/callback`;

    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    });

    if (!tokenRes.ok) {
      const errText = await tokenRes.text();
      console.error("[Google OAuth] Token exchange failed:", errText);
      return NextResponse.redirect(`${baseUrl}/login?error=token_exchange_failed`);
    }

    const tokens = (await tokenRes.json()) as { access_token: string };

    // 2. Get user profile from Google
    const profileRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });

    if (!profileRes.ok) {
      return NextResponse.redirect(`${baseUrl}/login?error=profile_fetch_failed`);
    }

    const profile = (await profileRes.json()) as {
      id: string;
      email: string;
      name: string;
      given_name: string;
      family_name: string;
      picture: string;
    };

    console.log(`[Google OAuth] Authenticated: ${profile.email} (${profile.name})`);

    // TODO: When ERPNext/Frappe is set up:
    // - Create or find user in Frappe via API
    // - Generate Frappe session/token
    // - Set session cookie
    // For now, redirect to the app dashboard
    return NextResponse.redirect(appUrl);
  } catch (err) {
    console.error("[Google OAuth] Unexpected error:", err);
    return NextResponse.redirect(`${baseUrl}/login?error=unexpected`);
  }
}
