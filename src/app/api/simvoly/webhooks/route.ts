import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/simvoly/webhooks
 *
 * Receives webhook events from systeme.io.
 * Configure this URL in your systeme.io settings:
 *   https://orengen.io/api/simvoly/webhooks
 *
 * Events: new_sale, new_subscription, subscription_cancelled,
 *         new_contact, tag_added, tag_removed, etc.
 */
export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const event = payload.event || "unknown";

    console.log(`[systeme.io Webhook] ${event}`, JSON.stringify(payload));

    switch (event) {
      case "new_sale":
        console.log(`[systeme.io] New sale: ${payload.buyer_email}`);
        break;

      case "new_subscription":
        console.log(`[systeme.io] New subscription: ${payload.buyer_email}`);
        break;

      case "subscription_cancelled":
        console.log(`[systeme.io] Subscription cancelled: ${payload.buyer_email}`);
        break;

      case "new_contact":
        console.log(`[systeme.io] New contact: ${payload.email}`);
        break;

      case "tag_added":
        console.log(`[systeme.io] Tag added: ${payload.tag_name} to ${payload.email}`);
        break;

      case "tag_removed":
        console.log(`[systeme.io] Tag removed: ${payload.tag_name} from ${payload.email}`);
        break;

      default:
        console.log(`[systeme.io] Unhandled event: ${event}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[systeme.io Webhook Error]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
