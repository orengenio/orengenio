import { NextResponse } from "next/server";

/**
 * POST /api/simvoly/session
 *
 * systeme.io does not support SSO sessions.
 * This endpoint now redirects to app.orengen.io.
 */
export async function POST() {
  const appUrl = process.env.SYSTEMEIO_APP_URL || "https://app.orengen.io";

  return NextResponse.json({
    accessUrl: appUrl,
    message: "SSO is not available with systeme.io. Redirect users to app.orengen.io to log in.",
  });
}
