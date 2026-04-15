# Twilio setup

The site exposes three Twilio webhooks under `https://orengen.io`:

| Purpose                         | URL                                            | Method |
|---------------------------------|------------------------------------------------|--------|
| Inbound SMS                     | `https://orengen.io/api/sms/inbound`           | POST   |
| Inbound voice (routes to Vapi)  | `https://orengen.io/api/voice/inbound`         | POST   |
| Voice status callback           | `https://orengen.io/api/voice/status`          | POST   |

Outbound SMS is sent server-side via `POST /api/sms/send` (requires the
`X-OrenGen-Token` header equal to `INTERNAL_API_TOKEN`).

## 1. Configure the phone number in Twilio Console

1. Open <https://console.twilio.com/us1/develop/phone-numbers/manage/active>
2. Click your number.
3. **Voice & Fax → A CALL COMES IN**
   - Webhook: `https://orengen.io/api/voice/inbound` — `HTTP POST`
   - **CALL STATUS CHANGES**: `https://orengen.io/api/voice/status` — `HTTP POST`
4. **Messaging → A MESSAGE COMES IN**
   - Webhook: `https://orengen.io/api/sms/inbound` — `HTTP POST`
5. Save.

If you use a Messaging Service (recommended for A2P 10DLC):
- Messaging → Services → your service → **Integration**
- Set **SEND A WEBHOOK** for *Incoming Messages* to the same SMS inbound URL.

## 2. Required environment variables

See `.env.example`. The minimum is:

```
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=+1XXXXXXXXXX            # or TWILIO_MESSAGING_SERVICE_SID
INTERNAL_API_TOKEN=<openssl rand -hex 32>
NEXT_PUBLIC_VAPI_ASSISTANT_ID=...
NEXT_PUBLIC_OREN_PHONE=+1XXXXXXXXXX
```

All inbound routes verify `X-Twilio-Signature` in production. To bypass while
testing locally with ngrok, set `SKIP_TWILIO_VERIFY=1` (only honored when
`NODE_ENV !== 'production'`).

## 3. A2P 10DLC registration (US SMS deliverability)

You must register a Brand and Campaign before sending production SMS to US
numbers. The Twilio API lets you do this entirely from curl:

```bash
# 0. Auth shortcut for the snippets below
export TWILIO_AUTH="$TWILIO_ACCOUNT_SID:$TWILIO_AUTH_TOKEN"

# 1. Create a Customer Profile (Trust Hub) — only needed once per account
curl -X POST "https://trusthub.twilio.com/v1/CustomerProfiles" \
  -u "$TWILIO_AUTH" \
  --data-urlencode "FriendlyName=OrenGen Worldwide" \
  --data-urlencode "Email=ops@orengen.io" \
  --data-urlencode "PolicySid=RNdfbf3fae0e1107f8aded728e92e3b520"   # Secondary Customer Profile policy

# 2. Create the A2P Brand (uses the Customer Profile SID returned above)
curl -X POST "https://messaging.twilio.com/v1/a2p/BrandRegistrations" \
  -u "$TWILIO_AUTH" \
  --data-urlencode "CustomerProfileBundleSid=BU..." \
  --data-urlencode "A2PProfileBundleSid=BU..." \
  --data-urlencode "BrandType=STANDARD"

# 3. Create a Messaging Service (or reuse TWILIO_MESSAGING_SERVICE_SID)
curl -X POST "https://messaging.twilio.com/v1/Services" \
  -u "$TWILIO_AUTH" \
  --data-urlencode "FriendlyName=OrenGen A2P" \
  --data-urlencode "InboundRequestUrl=https://orengen.io/api/sms/inbound"

# 4. Create the Campaign (Use Case = MIXED for marketing + transactional)
curl -X POST "https://messaging.twilio.com/v1/Services/MGxxxx/Compliance/Usa2p" \
  -u "$TWILIO_AUTH" \
  --data-urlencode "BrandRegistrationSid=BN..." \
  --data-urlencode "Description=Lead follow-up + AI assistant SMS for OrenGen prospects." \
  --data-urlencode "MessageSamples=Hi {{name}}, this is OrenGen replying to your inquiry. Reply STOP to opt out." \
  --data-urlencode "MessageSamples=Your AI demo is ready: https://orengen.io/orenagents. Reply STOP to opt out." \
  --data-urlencode "UsAppToPersonUsecase=MIXED" \
  --data-urlencode "HasEmbeddedLinks=true" \
  --data-urlencode "HasEmbeddedPhone=true"
```

Approval typically takes 1–3 business days. Once approved, set
`TWILIO_MESSAGING_SERVICE_SID` (the `MG...` SID) in your env so `sendSMS()`
sends through the registered campaign.
