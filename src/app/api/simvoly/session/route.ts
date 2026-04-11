import { NextRequest, NextResponse } from "next/server";
import { createSSOSession } from "@/lib/simvoly";

/**
 * POST /api/simvoly/session
 *
 * Creates an SSO session and returns the Simvoly accessUrl.
 * The client should redirect the user to accessUrl.
 *
 * Body (JSON): { userEmail: string, projectId?: number, path?: string }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userEmail, userId, externalCustomerId, projectId, websiteId, path } = body as {
      userEmail?: string;
      userId?: number;
      externalCustomerId?: string;
      projectId?: number;
      websiteId?: number;
      path?: string;
    };

    if (!userEmail && !userId && !externalCustomerId) {
      return NextResponse.json(
        { error: "One of userEmail, userId, or externalCustomerId is required" },
        { status: 400 }
      );
    }

    const session = await createSSOSession({
      userEmail,
      userId,
      externalCustomerId,
      projectId,
      websiteId,
      path,
    });

    return NextResponse.json({
      accessUrl: session.accessUrl,
      expiresAt: session.expiresAt,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[Simvoly SSO]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
