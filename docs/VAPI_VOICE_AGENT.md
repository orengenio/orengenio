# Vapi Voice Agent Setup

Wires Vapi's LLM-driven voice into the OrenGen stack so inbound calls to your
Twilio number are answered by an AI agent that can read CRM data, qualify
leads, and create deals/tasks via the OrenGen Backend.

> Vapi pricing: ~$0.05/min for the voice + LLM combo, plus your Twilio carrier
> fees. Setup time: 30–60 min once you have a Vapi account.

---

## 1. Prerequisites

- [ ] Vapi account at https://dashboard.vapi.ai
- [ ] At least one Twilio phone number provisioned for voice
- [ ] `INTERNAL_API_TOKEN` already wired into the master site (it is)
- [ ] CRM intake endpoint live at `https://app.orengen.io/api/intake/lead`

---

## 2. Create the Vapi assistant

Vapi Dashboard → **Assistants → New**

Use these values:

| Field                  | Value                                                                                  |
| ---------------------- | -------------------------------------------------------------------------------------- |
| Name                   | `OrenGen Inbound`                                                                      |
| Voice provider         | ElevenLabs (preferred for English) or PlayHT                                           |
| Voice                  | Pick a clear, conversational voice (e.g. ElevenLabs "Adam" or "Rachel")                |
| Model provider         | Anthropic                                                                              |
| Model                  | `claude-sonnet-4-5` (or the latest Sonnet you have access to)                          |
| Temperature            | 0.4                                                                                    |
| First message          | `Hi, you've reached OrenGen. How can I help you today?`                                |
| End call phrase        | `Goodbye!` (or leave blank to let the model decide)                                    |
| Max duration           | 600 seconds (10 min)                                                                   |
| Recording              | Off by default; turn on after consent flow is in place                                 |
| Server URL             | `https://orengen.io/api/voice/vapi-webhook` (you'll wire this route in master next)    |
| Server URL secret      | (paste a long random string; goes into Coolify env as `VAPI_WEBHOOK_SECRET`)           |

### System prompt

```
You are OrenGen's AI receptionist. You answer calls for OrenGen Worldwide,
which builds AI-powered backends, lead automation, and custom CRMs for
service businesses.

Your job:
1. Greet the caller and ask how you can help.
2. If they want to schedule a discovery call, collect their name, company,
   email, and phone, then create a lead in the CRM.
3. If they're an existing client, ask what tenant/workspace they're with,
   then take a message and create a task assigned to their account owner.
4. If they ask a generic question, answer it briefly using the OrenGen
   product knowledge below. Don't invent prices.
5. Always offer to email a follow-up summary at the end of the call.

Be concise, warm, and professional. Don't make up names of OrenGen staff —
say "I'll have someone from the team get back to you" instead.

OrenGen products (one-line each):
- OrenGen Backend: multi-tenant CRM + workspace at app.orengen.io.
- OrenSitebuild: site mockup tool that pitches potential customers.
- ERPNext Suite: full operations stack at admin.orengen.io.
- Voice + SMS agents (you).
- n8n automations connecting all of the above.

Tools available to you:
- create_lead({first_name, last_name, email, phone, company, source: "phone-vapi", notes})
- create_task({title, description, assigned_to_email, due_at})
- send_summary_email({to, subject, body})
- end_call()
```

### Tools

In the **Tools** tab of the assistant, add three tools — each one is a
function call that Vapi will translate into HTTP POSTs to your server:

#### Tool 1: `create_lead`

```yaml
name: create_lead
description: Create a new lead in the OrenGen Backend CRM
parameters:
  type: object
  properties:
    first_name: { type: string }
    last_name: { type: string }
    email: { type: string }
    phone: { type: string }
    company: { type: string }
    notes: { type: string }
  required: [first_name, phone]
server_url: https://app.orengen.io/api/intake/lead
server_url_secret: ${INTERNAL_API_TOKEN}     # sent as X-OrenGen-Token
```

The CRM intake endpoint already exists from Lane 3.

#### Tool 2: `create_task`

```yaml
name: create_task
description: Create a follow-up task for an OrenGen team member
parameters:
  type: object
  properties:
    title: { type: string }
    description: { type: string }
    assigned_to_email: { type: string }
    due_at: { type: string, format: date-time }
  required: [title]
server_url: https://app.orengen.io/api/intake/task
server_url_secret: ${INTERNAL_API_TOKEN}
```

> Note: `/api/intake/task` doesn't exist yet — add it as a follow-up in the
> CRM (mirrors `/api/intake/lead`).

#### Tool 3: `send_summary_email`

Optional — leave for later iterations. Easy to wire to MailWizz once SMTP is
proven.

---

## 3. Connect the Twilio number to the assistant

Vapi Dashboard → **Phone Numbers → Import from Twilio** → enter your Twilio
ACCOUNT_SID and AUTH_TOKEN.

Pick the number you want to use for inbound voice. Set its **Inbound
Assistant** to `OrenGen Inbound` from Step 2.

Behind the scenes, Vapi rewrites the Twilio number's voice URL to point at
their media server. They handle the SIP / WebRTC bridge.

---

## 4. Wire env vars

Coolify → `orengen-master-frontend` → Environment Variables:

```
NEXT_PUBLIC_VAPI_PUBLIC_KEY     = (from Vapi dashboard → Account → API keys; public)
VAPI_PRIVATE_KEY                = (from Vapi dashboard; server-side only)
NEXT_PUBLIC_VAPI_ASSISTANT_ID   = (from the assistant you created in Step 2)
VAPI_WEBHOOK_SECRET             = (the long random string from Step 2)
```

Redeploy `orengen-master-frontend`.

---

## 5. Implement the webhook handler

Add at `src/app/api/voice/vapi-webhook/route.ts`:

```ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

export async function POST(req: NextRequest) {
  const provided = req.headers.get("x-vapi-signature") || "";
  const expected = process.env.VAPI_WEBHOOK_SECRET || "";
  if (!provided || !expected ||
      !crypto.timingSafeEqual(Buffer.from(provided), Buffer.from(expected))) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const payload = await req.json();
  // payload.type is one of: "function-call", "status-update",
  //                          "end-of-call-report", "transcript", etc.

  // For now just log everything; future iterations will:
  // - persist transcripts to the CRM activities timeline
  // - forward "function-call" events to /api/intake/lead etc.
  console.log("[vapi-webhook]", payload.type, JSON.stringify(payload).slice(0, 500));

  return NextResponse.json({ ok: true });
}
```

For function calls, Vapi will already POST to the per-tool `server_url`
directly (Step 2), so this webhook is mostly for transcripts and call status.

---

## 6. Smoke test

1. Call your Twilio voice number from your cell
2. Vapi greeting plays within 2-3 seconds
3. Say: "Hi, I'd like to learn more about OrenGen. My name is Test, my email
   is test@example.com, and my phone is the one I'm calling from."
4. Vapi calls `create_lead` → CRM creates a lead with status `qualifying`
5. CrewAI (when deployed) qualifies the lead in the background
6. You receive the model's natural-language confirmation

If the lead doesn't appear in the CRM:
- Vapi dashboard → Calls → click the call → Inspect tool calls
- Check the response from `https://app.orengen.io/api/intake/lead`
- Most common: missing or wrong `INTERNAL_API_TOKEN` between Vapi and the CRM
