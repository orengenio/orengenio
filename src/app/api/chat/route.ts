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
- Recommend booking a strategy call for complex questions: mention they can "Book a Free Demo" on the website
- If asked about competitors, be respectful but highlight OrenGen's advantages
- Do not make up features or pricing not listed above
- If you don't know something, say so and recommend they contact the team`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "OpenAI API key not configured. Add OPENAI_API_KEY to your environment variables." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        stream: true,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return new Response(
        JSON.stringify({ error: `OpenAI API error: ${response.status}`, details: errText }),
        { status: response.status, headers: { "Content-Type": "application/json" } }
      );
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || !trimmed.startsWith("data: ")) continue;
            const data = trimmed.slice(6);
            if (data === "[DONE]") {
              controller.enqueue(encoder.encode("data: [DONE]\n\n"));
              continue;
            }
            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
              }
            } catch {
              // skip malformed chunks
            }
          }
        }
        controller.close();
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
