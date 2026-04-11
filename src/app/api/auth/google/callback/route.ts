import { NextRequest, NextResponse } from "next/server";
import { searchUser, createUser, createSSOSession, listProjects } from "@/lib/simvoly";

/**
 * GET /api/auth/google/callback
 *
 * Google OAuth callback. Exchanges code for tokens, gets user profile,
 * creates/finds Simvoly user, starts SSO session, redirects to builder.
 */
export async function GET(req: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://orengen.io";

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

    // 3. Find or create Simvoly user
    let simvolyUserId: number | undefined;

    try {
      const existing = await searchUser(profile.email);
      simvolyUserId = existing.id;
    } catch {
      // User doesn't exist — create them
      try {
        const newUser = await createUser({
          name: profile.name,
          email: profile.email,
        });
        simvolyUserId = newUser.data.id;
      } catch (createErr) {
        console.error("[Google OAuth] Failed to create Simvoly user:", createErr);
        return NextResponse.redirect(`${baseUrl}/login?error=user_creation_failed`);
      }
    }

    // 4. Find their project (if any) to go straight to builder
    let projectId: number | undefined;
    try {
      const projects = await listProjects({ userId: simvolyUserId });
      if (Array.isArray(projects) && projects.length > 0) {
        projectId = projects[0].id;
      }
    } catch {
      // No projects yet — that's fine
    }

    // 5. Create SSO session to Simvoly builder
    const session = await createSSOSession({
      userId: simvolyUserId,
      projectId,
      path: projectId ? "/me/website" : "/me/dashboard",
    });

    // 6. Redirect user to Simvoly builder
    return NextResponse.redirect(session.accessUrl);
  } catch (err) {
    console.error("[Google OAuth] Unexpected error:", err);
    return NextResponse.redirect(`${baseUrl}/login?error=unexpected`);
  }
}
