import { NextRequest, NextResponse } from "next/server";
import { findContactByEmail, createContact } from "@/lib/systemeio";

/**
 * GET /api/auth/google/callback
 *
 * Google OAuth callback. Exchanges code for tokens, gets user profile,
 * creates/finds systeme.io contact, redirects to app.orengen.io.
 */
export async function GET(req: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://orengen.io";
  const appUrl = process.env.SYSTEMEIO_APP_URL || "https://app.orengen.io";

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

    // 3. Find or create systeme.io contact
    try {
      const existing = await findContactByEmail(profile.email);
      if (!existing) {
        await createContact({
          email: profile.email,
          firstName: profile.given_name || profile.name,
          lastName: profile.family_name || "",
          tags: [{ name: "google-oauth" }],
        });
        console.log(`[Google OAuth] Created systeme.io contact for ${profile.email}`);
      } else {
        console.log(`[Google OAuth] Found existing systeme.io contact for ${profile.email} (id: ${existing.id})`);
      }
    } catch (contactErr) {
      // Log but don't block — user can still access app.orengen.io
      console.error("[Google OAuth] Failed to sync contact to systeme.io:", contactErr);
    }

    // 4. Redirect user to app.orengen.io
    return NextResponse.redirect(appUrl);
  } catch (err) {
    console.error("[Google OAuth] Unexpected error:", err);
    return NextResponse.redirect(`${baseUrl}/login?error=unexpected`);
  }
}
