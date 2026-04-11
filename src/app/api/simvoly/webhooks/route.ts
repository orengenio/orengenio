import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/simvoly/webhooks
 *
 * Receives webhook events from Simvoly.
 * Configure this URL in your Simvoly admin panel:
 *   https://orengen.io/api/simvoly/webhooks
 *
 * Events: subscription_activated, subscription_renewed, subscription_expired,
 *         user_created, project_created, project_deleted, website_created,
 *         website_deleted, trial_expired, affiliate_joined, etc.
 */
export async function POST(req: NextRequest) {
  try {
    const topic = req.headers.get("X-Webhook-Topic") || "unknown";
    const webhookId = req.headers.get("X-Webhook-Id");
    const payload = await req.json();

    console.log(`[Simvoly Webhook] ${topic} (id: ${webhookId})`, JSON.stringify(payload));

    // Handle different webhook events
    switch (topic) {
      case "subscription_activated":
        // New subscription — could trigger welcome email, CRM update, etc.
        console.log(`[Simvoly] Subscription activated for project ${payload.project?.id}`);
        break;

      case "subscription_expired":
        console.log(`[Simvoly] Subscription expired for project ${payload.project?.id}`);
        break;

      case "user_created":
        console.log(`[Simvoly] New user: ${payload.user?.email}`);
        break;

      case "trial_expired":
        console.log(`[Simvoly] Trial expired for project ${payload.project?.id}`);
        break;

      default:
        console.log(`[Simvoly] Unhandled event: ${topic}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[Simvoly Webhook Error]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
