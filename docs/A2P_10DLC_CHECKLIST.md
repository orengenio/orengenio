# A2P 10DLC Submission Checklist (Twilio)

Submitting your **brand** and **campaign** with Twilio so outbound SMS from
`/api/sms/send` actually delivers in the US. **No code can submit this for you —
it's a Twilio Console workflow.** This checklist is the values to enter, in
order, with copy/paste-ready text.

> Estimated cost: $4 one-time brand verification, $10/month per campaign,
> plus pass-through messaging fees. Approval: 1–7 business days for the brand,
> minutes-to-hours for the campaign once the brand is approved.

---

## Step 0. Prerequisites

- [ ] Twilio account with billing enabled
- [ ] EIN for `OrenGen Worldwide LLC` (US legal entity) — required, not DUNS
- [ ] One Twilio phone number purchased (will be added to the messaging service)
- [ ] Decide on at least one **brand-aligned URL** (we use `https://orengen.io`)
- [ ] Decide on **opt-in language** that appears wherever you collect numbers

---

## Step 1. Register the brand

Twilio Console → **Messaging → Compliance → Trust Hub → Customer Profile**
or directly: https://console.twilio.com/us1/account/trust-hub/customer-profile

Use these values verbatim:

| Field                          | Value                                                   |
| ------------------------------ | ------------------------------------------------------- |
| Business Name                  | `OrenGen Worldwide LLC`                                 |
| DBA / friendly name            | `OrenGen`                                               |
| Business type                  | LLC                                                     |
| Business industry              | Technology                                              |
| Business registration type     | EIN                                                     |
| Business registration number   | (your EIN — paste in the format `XX-XXXXXXX`)           |
| Business region                | USA                                                     |
| Website                        | `https://orengen.io`                                    |
| Address                        | (your registered LLC address)                           |

**Authorized representative** (you):
- First/last name, email (`sales@orengen.io` works), business title, phone
- Twilio may ask for a second representative for higher trust scores; provide
  if available

Save → submit. Wait for approval (status goes from `IN_REVIEW` → `TWILIO_APPROVED`).

---

## Step 2. Register a low-volume standard brand (or standard if you expect >2000 SMS/day)

If your traffic estimate is < 2000 messages/day, the **low-volume** tier is
fine and approves faster.

Twilio Console → **Messaging → Compliance → A2P 10DLC → Brands** → **Register a
brand** → choose your customer profile → submit.

Save the resulting **Brand SID**. You'll paste it as `TWILIO_A2P_BRAND_SID`
into Coolify env later.

---

## Step 3. Register a campaign

Twilio Console → **Messaging → Compliance → A2P 10DLC → Campaigns** → **Create
new campaign** → pick your brand from Step 2.

Use these values:

| Field                       | Value                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| Use case                    | **Mixed** (covers transactional alerts + customer follow-up)                                   |
| Description                 | `OrenGen sends transactional alerts (lead notifications, appointment reminders, deal status changes) and replies to inbound questions from customers who have opted in via our website forms or signed-in workspace.` |
| Sample message 1            | `OrenGen: New lead from <name> at <company>. View at app.orengen.io/leads. Reply STOP to opt out.` |
| Sample message 2            | `Hi <first name>, this is <agent> at OrenGen following up on your inquiry. Want to grab 15 min this week? Reply STOP to opt out, HELP for help.` |
| Sample message 3            | `Reminder: Your call with OrenGen is at <time>. Reply C to confirm, R to reschedule, STOP to opt out.` |
| Embedded link?              | Yes (`app.orengen.io/...`)                                                                     |
| Embedded phone number?      | Yes (`+1 ...` your support number)                                                             |
| Affiliate marketing?        | No                                                                                             |
| Age-gated?                  | No                                                                                             |
| Direct lending?             | No                                                                                             |
| Number pooling?             | No                                                                                             |
| Subscriber opt-in?          | Yes — "Customers opt in by submitting a contact form on `orengen.io` or by being explicitly invited by an OrenGen team member to a client workspace at `app.orengen.io`. The opt-in language reads: 'By submitting, you consent to receive transactional and follow-up SMS from OrenGen at the number provided. Reply STOP to opt out, HELP for help. Msg & data rates may apply.'" |
| Subscriber opt-out?         | Yes — "STOP" replies are processed by `/api/sms/inbound` on master, which acknowledges and adds the number to the suppression list. |
| Subscriber help?            | Yes — "HELP" replies trigger an automated response with our support email and phone. |

Save the resulting **Campaign SID**. You'll paste it as `TWILIO_A2P_CAMPAIGN_SID`
into Coolify env later.

---

## Step 4. Create a Messaging Service and link the campaign

Twilio Console → **Messaging → Services → Create Messaging Service**

| Field                       | Value                                                                          |
| --------------------------- | ------------------------------------------------------------------------------ |
| Friendly name               | `OrenGen Production`                                                           |
| Use case                    | Match what you submitted in Step 3                                             |
| Sender pool                 | Add the Twilio phone number you bought in Step 0                               |
| Inbound webhook             | `https://orengen.io/api/sms/inbound` (HTTP POST, x-www-form-urlencoded)        |
| Status callback             | `https://orengen.io/api/sms/status` (when implemented)                         |
| Sticky sender               | On                                                                             |
| Validity period             | 4 hours                                                                        |
| Smart encoding              | On                                                                             |
| MMS Converter               | Off                                                                            |
| Fallback to long code       | On                                                                             |

In the same Messaging Service, **A2P 10DLC** tab → link the campaign from Step 3.

Save the **Messaging Service SID** (starts with `MG…`).

---

## Step 5. Wire the SIDs into Coolify

In Coolify → `orengen-master-frontend` → **Environment Variables** → add:

```
TWILIO_MESSAGING_SERVICE_SID = MGxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_PHONE_NUMBER          = +1xxxxxxxxxx        # the number you bought
TWILIO_VOICE_NUMBER          = +1xxxxxxxxxx        # same number, or a separate voice-only one
TWILIO_A2P_BRAND_SID         = BNxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     # for monitoring only
TWILIO_A2P_CAMPAIGN_SID      = CMxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     # for monitoring only
NEXT_PUBLIC_OREN_PHONE       = +1xxxxxxxxxx        # publicly displayed on /
```

Redeploy `orengen-master-frontend`. The env-only redeploy takes ~30 seconds.

---

## Step 6. Smoke test

```bash
# from any server (or your laptop)
curl -X POST https://orengen.io/api/sms/send \
  -H "X-OrenGen-Token: $INTERNAL_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"to":"+1YOUR_PHONE","body":"OrenGen A2P test. Reply STOP to opt out."}'
# expected: {"ok":true,"sid":"SMxxxx..."}
```

If you receive the SMS, you're done. If you don't, check:

1. Twilio Console → **Monitor → Logs → Messaging** — find the SID, look at the
   error code
2. `Error 30034` = campaign not registered → recheck Step 3
3. `Error 21610` = recipient opted out → use a different test number
4. `Error 21408` = permission denied → number isn't in the messaging service's
   sender pool
