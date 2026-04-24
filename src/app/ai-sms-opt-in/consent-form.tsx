"use client";

import { useState, type FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ConsentForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [consented, setConsented] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const firstName = String(fd.get("firstName") || "").trim();
    const lastName = String(fd.get("lastName") || "").trim();
    const email = String(fd.get("email") || "").trim().toLowerCase();
    const phone = String(fd.get("phone") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const consent = fd.get("consent") === "on";

    if (!firstName || !lastName) {
      setErrorMsg("Please enter your first and last name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 15) {
      setErrorMsg("Please enter a valid phone number (10-15 digits).");
      return;
    }
    if (!consent) {
      setErrorMsg(
        "You must check the consent box to opt in to SMS and AI calls."
      );
      return;
    }

    setState("submitting");
    try {
      const res = await fetch("/api/sms/consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          company,
          consent: true,
          consentText:
            "I agree to receive marketing text messages and/or AI-powered phone calls from OrenGen Worldwide at the phone number provided above. Message frequency varies. Msg & data rates may apply. Consent is not a condition of purchase. Reply STOP to opt out, HELP for help.",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Request failed (${res.status})`);
      }

      setState("success");
      form.reset();
      setConsented(false);
    } catch (err) {
      setState("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="sms-consent-success">
        <h3>✓ You&apos;re opted in.</h3>
        <p>
          Thank you. Your consent has been recorded. You&apos;ll receive a
          welcome text shortly. Reply STOP at any time to opt out, or HELP for
          assistance.
        </p>
      </div>
    );
  }

  return (
    <form className="sms-consent-form" onSubmit={handleSubmit} noValidate>
      {errorMsg && <div className="sms-consent-error">{errorMsg}</div>}

      <div
        className="field"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
      >
        <div>
          <label htmlFor="firstName">
            First Name <span className="req">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            disabled={state === "submitting"}
          />
        </div>
        <div>
          <label htmlFor="lastName">
            Last Name <span className="req">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            disabled={state === "submitting"}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">
          Email Address <span className="req">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={state === "submitting"}
        />
      </div>

      <div className="field">
        <label htmlFor="phone">
          Mobile Phone Number <span className="req">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+1 (555) 123-4567"
          disabled={state === "submitting"}
        />
      </div>

      <div className="field">
        <label htmlFor="company">Company (optional)</label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          disabled={state === "submitting"}
        />
      </div>

      <div className="sms-consent-consent-box">
        <div className="checkbox-row">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={consented}
            onChange={(e) => setConsented(e.target.checked)}
            disabled={state === "submitting"}
          />
          <label htmlFor="consent">
            I agree to receive marketing text messages and/or AI-powered phone
            calls from <strong>OrenGen Worldwide</strong> at the phone number
            provided above. Message frequency varies. Msg &amp; data rates may
            apply. Consent is not a condition of purchase. Reply{" "}
            <strong>STOP</strong> to opt out, <strong>HELP</strong> for help.
            See our{" "}
            <a href="/privacy-policy" target="_blank" rel="noopener">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" target="_blank" rel="noopener">
              Terms of Service
            </a>
            .
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="sms-consent-submit"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Submitting..." : "Opt In"}
      </button>
    </form>
  );
}
