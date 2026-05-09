import type { Metadata } from "next";
import { ConsentForm } from "./consent-form";

export const metadata: Metadata = {
  title: "SMS & AI Call Opt-In — OrenGen Worldwide",
  description:
    "Sign up to receive marketing text messages and AI-powered phone calls from OrenGen Worldwide. Express written consent required. Reply STOP to opt out.",
  alternates: { canonical: "https://orengen.io/ai-sms-opt-in" },
  openGraph: {
    title: "SMS & AI Call Opt-In — OrenGen Worldwide",
    description:
      "Express written consent form to receive marketing SMS and AI-powered phone calls from OrenGen Worldwide.",
    url: "https://orengen.io/ai-sms-opt-in",
    siteName: "OrenGen Worldwide",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function AiSmsOptInPage() {
  return (
    <main className="sms-consent-page">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .sms-consent-page {
            min-height: 100vh;
            background: linear-gradient(165deg, #081628 0%, #0B1D3A 30%, #0F2847 60%, #0D2240 100%);
            padding: 100px 20px 60px;
            color: #F0F4FA;
            font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif;
          }
          .sms-consent-container {
            max-width: 720px;
            margin: 0 auto;
            background: #FFFFFF;
            color: #1a1a1a;
            border-radius: 16px;
            padding: 48px 40px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.4);
          }
          .sms-consent-header {
            text-align: center;
            margin-bottom: 32px;
            padding-bottom: 24px;
            border-bottom: 3px solid #CC5500;
          }
          .sms-consent-header h1 {
            font-family: var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif;
            font-size: clamp(28px, 4vw, 40px);
            font-weight: 900;
            color: #081628;
            margin: 0 0 12px 0;
            letter-spacing: -0.02em;
          }
          .sms-consent-header h1 .brand { color: #CC5500; }
          .sms-consent-header p {
            font-size: 16px;
            color: #555;
            margin: 0;
            line-height: 1.5;
          }
          .sms-consent-what {
            background: #FFF7F0;
            border: 1px solid #F4D9C0;
            border-radius: 10px;
            padding: 20px 24px;
            margin-bottom: 28px;
          }
          .sms-consent-what h3 {
            color: #CC5500;
            font-size: 15px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin: 0 0 10px 0;
          }
          .sms-consent-what ul {
            margin: 0;
            padding-left: 20px;
            color: #333;
            font-size: 15px;
            line-height: 1.7;
          }
          .sms-consent-form .field {
            margin-bottom: 18px;
          }
          .sms-consent-form label {
            display: block;
            font-weight: 600;
            font-size: 14px;
            color: #333;
            margin-bottom: 6px;
          }
          .sms-consent-form label .req { color: #CC5500; }
          .sms-consent-form input[type="text"],
          .sms-consent-form input[type="email"],
          .sms-consent-form input[type="tel"] {
            width: 100%;
            padding: 12px 14px;
            font-size: 16px;
            border: 1.5px solid #D0D5DD;
            border-radius: 8px;
            background: #FFFFFF;
            color: #1a1a1a;
            transition: border-color 0.15s;
            font-family: inherit;
          }
          .sms-consent-form input:focus {
            outline: none;
            border-color: #CC5500;
            box-shadow: 0 0 0 3px rgba(204,85,0,0.15);
          }
          .sms-consent-consent-box {
            background: #F9FAFB;
            border: 2px solid #D0D5DD;
            border-radius: 10px;
            padding: 20px;
            margin: 24px 0 20px;
          }
          .sms-consent-consent-box .checkbox-row {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }
          .sms-consent-consent-box input[type="checkbox"] {
            margin-top: 4px;
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            cursor: pointer;
            accent-color: #CC5500;
          }
          .sms-consent-consent-box label {
            font-size: 14px;
            line-height: 1.6;
            color: #1a1a1a;
            cursor: pointer;
            font-weight: 400;
          }
          .sms-consent-consent-box a {
            color: #CC5500;
            text-decoration: underline;
            font-weight: 600;
          }
          .sms-consent-submit {
            width: 100%;
            padding: 16px 24px;
            background: linear-gradient(135deg, #CC5500, #E8762B);
            color: #FFFFFF;
            border: none;
            border-radius: 10px;
            font-size: 17px;
            font-weight: 700;
            letter-spacing: 0.02em;
            cursor: pointer;
            transition: transform 0.1s, box-shadow 0.15s;
            box-shadow: 0 4px 14px rgba(204,85,0,0.3);
            font-family: inherit;
          }
          .sms-consent-submit:hover:not(:disabled) {
            transform: translateY(-1px);
            box-shadow: 0 6px 20px rgba(204,85,0,0.4);
          }
          .sms-consent-submit:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          .sms-consent-footer {
            margin-top: 28px;
            padding-top: 24px;
            border-top: 1px solid #E5E7EB;
            font-size: 13px;
            color: #666;
            line-height: 1.6;
          }
          .sms-consent-footer strong { color: #333; }
          .sms-consent-error {
            background: #FEF2F2;
            border: 1px solid #FCA5A5;
            color: #991B1B;
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 14px;
            margin-bottom: 16px;
          }
          .sms-consent-success {
            background: #F0FDF4;
            border: 2px solid #86EFAC;
            color: #14532D;
            padding: 24px;
            border-radius: 10px;
            text-align: center;
          }
          .sms-consent-success h3 {
            font-size: 20px;
            margin: 0 0 8px 0;
            color: #14532D;
          }
          .sms-consent-success p { margin: 0; font-size: 15px; line-height: 1.6; }
          @media (max-width: 640px) {
            .sms-consent-container { padding: 32px 24px; border-radius: 12px; }
          }
        `,
        }}
      />
      <div className="sms-consent-container">
        <div className="sms-consent-header">
          <h1>
            SMS & AI Call <span className="brand">Opt-In</span>
          </h1>
          <p>
            Express written consent to receive marketing text messages and
            AI-powered phone calls from OrenGen Worldwide.
          </p>
        </div>

        <div className="sms-consent-what">
          <h3>What You&apos;re Signing Up For</h3>
          <ul>
            <li>Marketing text messages about OrenGen products and services</li>
            <li>AI-powered phone calls from our autonomous agents</li>
            <li>Appointment confirmations, reminders, and follow-ups</li>
            <li>Occasional promotional offers and updates</li>
          </ul>
        </div>

        <ConsentForm />

        <div className="sms-consent-footer">
          <p>
            <strong>Your privacy matters.</strong> OrenGen Worldwide will not
            share, sell, or rent your phone number, email address, or opt-in
            information to any third party for marketing purposes. Phone
            numbers and SMS opt-in data are used solely by OrenGen Worldwide
            to communicate with you as described above.
          </p>
          <p style={{ marginTop: 12 }}>
            <strong>Questions?</strong> Contact{" "}
            <a
              href="mailto:support@orengen.io"
              style={{ color: "#CC5500", textDecoration: "underline" }}
            >
              support@orengen.io
            </a>{" "}
            or reply HELP to any message you receive.
          </p>
          <p style={{ marginTop: 12 }}>
            <strong>Opting out:</strong> You may opt out at any time by
            replying STOP to any text message. You may also email{" "}
            <a
              href="mailto:support@orengen.io"
              style={{ color: "#CC5500", textDecoration: "underline" }}
            >
              support@orengen.io
            </a>{" "}
            with the subject &quot;STOP&quot; and your phone number.
          </p>
        </div>
      </div>
    </main>
  );
}
