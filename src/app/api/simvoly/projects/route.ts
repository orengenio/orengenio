import { NextRequest, NextResponse } from "next/server";
import { listProjects, createWebsite } from "@/lib/simvoly";

/**
 * GET /api/simvoly/projects?email=...
 * List all projects for a customer.
 */
export async function GET(req: NextRequest) {
  try {
    const email = req.nextUrl.searchParams.get("email");
    if (!email) {
      return NextResponse.json({ error: "email query parameter is required" }, { status: 400 });
    }

    const projects = await listProjects({ customerEmail: email });
    return NextResponse.json({ projects });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[Simvoly Projects]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

/**
 * POST /api/simvoly/projects
 * Create a new project with a website.
 *
 * Body (JSON): { firstName, lastName, email, subdomain?, websiteName?, templateId? }
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      firstName: string;
      lastName: string;
      email: string;
      subdomain?: string;
      websiteName?: string;
      templateId?: string;
    };

    if (!body.firstName || !body.lastName || !body.email) {
      return NextResponse.json(
        { error: "firstName, lastName, and email are required" },
        { status: 400 }
      );
    }

    const result = await createWebsite({
      customerFirstName: body.firstName,
      customerLastName: body.lastName,
      customerEmail: body.email,
      customerSubdomain: body.subdomain,
      websiteName: body.websiteName,
      templateId: body.templateId,
      brandColor: "#CC5500",
    });

    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[Simvoly Create Project]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
