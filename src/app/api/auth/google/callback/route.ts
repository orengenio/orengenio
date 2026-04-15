import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { STATE_COOKIE } from "../route";

/**
 * GET /api/auth/google/callback
 *
 * Google OAuth callback. Verifies the CSRF `state` value against the
 * HttpOnly cookie set by /api/auth/google, exchanges the code for tokens,
 * fetches the user profile, syncs to ERPNext via n8n webhook, and
 * redirects to app.orengen.io.
 */
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function safeEqual(a: string, b: string): boolean {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return timingSafeEqual(aBuf, bBuf);
}

export async function GET(req: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://orengen.io";
  const appUrl = process.env.APP_URL || "https://app.orengen.io";
  const n8nWebhook = process.env.N8N_WEBHOOK_URL || "https://automate.orengen.io/webhook/google-oauth-sync";

  try {
    const code = req.nextUrl.searchParams.get("code");
    const error = req.nextUrl.searchParams.get("error");
    const stateParam = req.nextUrl.searchParams.get("state") ?? "";
    const stateCookie = req.cookies.get(STATE_COOKIE)?.value ?? "";

    if (error) {
      return NextResponse.redirect(`${baseUrl}/login?error=${encodeURIComponent(error)}`);
    }

    if (!code) {
      return NextResponse.redirect(`${baseUrl}/login?error=missing_code`);
    }

    // CSRF protection: state from Google must match the cookie we set.
    if (!stateParam || !stateCookie || !safeEqual(stateParam, stateCookie)) {
      console.warn("[Google OAuth] State mismatch — possible CSRF.");
      const res = NextResponse.redirect(`${baseUrl}/login?error=invalid_state`);
      res.cookies.delete(STATE_COOKIE);
      return res;
    }

    // 1. Exchange code for tokens
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

    if (!clientId?.trim() || !clientSecret?.trim()) {
      console.error("[Google OAuth] Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET");
      return NextResponse.redirect(`${baseUrl}/login?error=google_oauth_not_configured`);
    }
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

    console.log(`[Google OAuth] Authenticated user id: ${profile.id}`);

    // 3. Sync user to ERPNext via n8n webhook
    try {
      const syncRes = await fetch(n8nWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: profile.email,
          name: profile.name,
          given_name: profile.given_name,
          family_name: profile.family_name,
          picture: profile.picture,
          google_id: profile.id,
        }),
      });

      if (syncRes.ok) {
        const result = (await syncRes.json()) as { redirect?: string };
        if (result.redirect) {
          const res = NextResponse.redirect(result.redirect);
          res.cookies.delete(STATE_COOKIE);
          return res;
        }
      } else {
        console.error("[Google OAuth] n8n sync failed:", await syncRes.text());
      }
    } catch (syncErr) {
      // Log but don't block — user can still access app
      console.error("[Google OAuth] n8n webhook error:", syncErr);
    }

    // 4. Redirect to app dashboard
    const res = NextResponse.redirect(appUrl);
    res.cookies.delete(STATE_COOKIE);
    return res;
  } catch (err) {
    console.error("[Google OAuth] Unexpected error:", err);
    return NextResponse.redirect(`${baseUrl}/login?error=unexpected`);
  }
}
