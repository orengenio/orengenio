import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const SYSTEM_PROMPT = `You are the OrenGen AI assistant — a knowledgeable, professional, and friendly representative of OrenGen Worldwide (orengen.io). You help prospects and clients understand OrenGen's AI-powered products and services.

COMPANY OVERVIEW:
OrenGen Worldwide builds and deploys autonomous AI workforces for businesses. The flagship technology is Buy-Lingual™ — multilingual AI agents that handle voice calls, chat, SMS, and email in any language, 24/7.

PRODUCTS & SERVICES:
- OrenAgents Voice: Buy-Lingual™ conversational AI for inbound and outbound phone calls. Handles lead qualification, appointment booking, follow-ups, and customer support in any language.
- OrenAgents Employees: Autonomous multi-agent AI departments — chat agents, SMS agents, email agents, schedulers, and more working together as a team.
- OrenNexus: Unified CRM and automation command center. Pipeline management, funnels, analytics, lead scoring, and workflow automation.
- OrenSocial: AI-powered social media management — content scheduling, engagement automation, and analytics.
- OrenWeb Design: High-performance bespoke web development and design.
- OrenCustoms: Custom AI engineering for enterprise-scale deployments.

PRICING TIERS:
- Starter ($197/mo, setup $597): 1 AI Chat Employee, website chat widget, lead qualification, OrenNexus CRM Standard, email support.
- Growth ($497/mo, setup $1,997): 1 AI Voice Agent + 1 AI Chat Employee, bilingual (English + Spanish), appointment scheduling, OrenNexus Professional, priority support. MOST POPULAR.
- Dominate ($997/mo, setup $3,997): 3 AI Voice Agents + 3 AI Chat Employees, call transfers, custom voice cloning, multilingual, advanced analytics.
- Enterprise (Custom pricing, starts $1,997/mo): Unlimited agents, 5+ languages, custom call flows, sentiment analysis, API access, dedicated success manager, white-glove onboarding.

USAGE-BASED RATES (on top of plan):
- Voice Inbound: $0.12/min
- Voice Outbound: $0.14/min
- SMS Outbound: $0.02/msg
- SMS Inbound: $0.015/msg

KEY DIFFERENTIATORS:
- All-inclusive pricing — no hidden API fees, no BYOK, no managing multiple vendors
- SAM.gov Registered, Minority-Owned Certified, Enterprise-Grade Security
- We build it, we manage it — clients don't need developers
- 391% more conversions, 21x better qualification, 78% first responder rate, 24/7 always on

BEHAVIOR RULES:
- Be helpful, concise, and professional
- For complex questions, let them know they can speak with the live AI voice agent by clicking the glowing orb, or book a strategy call at book.orengen.io
- If asked about competitors, be respectful but highlight OrenGen's advantages
- Do not make up features or pricing not listed above
- If you don't know something, say so and recommend they contact the team`;

const MAX_MESSAGES = 50;
const MAX_MESSAGE_CONTENT_LENGTH = 4000;
const ALLOWED_MESSAGE_ROLES = new Set(["user", "assistant"] as const);

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function validateMessages(body: unknown): ChatMessage[] {
  if (!body || typeof body !== "object" || !("messages" in body)) {
    throw new Error("Invalid request body: `messages` is required.");
  }

  const { messages } = body as { messages: unknown };

  if (!Array.isArray(messages)) {
    throw new Error("Invalid request body: `messages` must be an array.");
  }

  if (messages.length > MAX_MESSAGES) {
    throw new Error(`Invalid request body: too many messages (max ${MAX_MESSAGES}).`);
  }

  return messages.map((message, index) => {
    if (!message || typeof message !== "object" || Array.isArray(message)) {
      throw new Error(`Invalid message at index ${index}: must be an object.`);
    }

    const keys = Object.keys(message);
    if (keys.some((key) => key !== "role" && key !== "content")) {
      throw new Error(`Invalid message at index ${index}: only \`role\` and \`content\` are allowed.`);
    }

    const { role, content } = message as { role?: unknown; content?: unknown };

    if (typeof role !== "string" || !ALLOWED_MESSAGE_ROLES.has(role as "user" | "assistant")) {
      throw new Error(`Invalid message at index ${index}: role must be "user" or "assistant".`);
    }

    if (typeof content !== "string") {
      throw new Error(`Invalid message at index ${index}: content must be a string.`);
    }

    const trimmedContent = content.trim();
    if (!trimmedContent) {
      throw new Error(`Invalid message at index ${index}: content must not be empty.`);
    }

    if (trimmedContent.length > MAX_MESSAGE_CONTENT_LENGTH) {
      throw new Error(
        `Invalid message at index ${index}: content exceeds max length of ${MAX_MESSAGE_CONTENT_LENGTH}.`
      );
    }

    return {
      role: role as "user" | "assistant",
      content: trimmedContent,
    };
  });
}

export async function POST(req: NextRequest) {
  try {
    const body: unknown = await req.json();
    let messages: ChatMessage[];

    try {
      messages = validateMessages(body);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Invalid request body.";
      return new Response(
        JSON.stringify({ error: message }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Anthropic API key not configured. Add ANTHROPIC_API_KEY to your environment variables." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const client = new Anthropic({ apiKey });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          const anthropicStream = await client.messages.stream({
            model: "claude-haiku-4-5-20251001",
            max_tokens: 800,
            system: SYSTEM_PROMPT,
            messages,
          });

          for await (const event of anthropicStream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ content: event.delta.text })}\n\n`)
              );
            }
          }

          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        } catch (err) {
          const message = err instanceof Error ? err.message : "Stream error";
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ error: message })}\n\n`)
          );
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
