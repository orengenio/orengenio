"use client";

import { useState, FormEvent } from "react";

import { events } from "@/lib/analytics-events";

type LeadFormProps = {
  source: string;
  onSuccess?: (leadId: string) => void;
};

type SubmitState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; leadId: string }
  | { kind: "error"; message: string };

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s().-]{7,}$/;

function validate(values: { name: string; email: string; phone: string }): FieldErrors {
  const errs: FieldErrors = {};
  if (!values.name.trim()) errs.name = "Name is required.";
  if (!values.email.trim()) errs.email = "Email is required.";
  else if (!EMAIL_RE.test(values.email.trim()))
    errs.email = "Enter a valid email like you@company.com.";
  if (!values.phone.trim()) errs.phone = "Phone is required.";
  else if (!PHONE_RE.test(values.phone.trim()))
    errs.phone = "Enter a valid phone number.";
  return errs;
}

export function LeadForm({ source, onSuccess }: LeadFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [useCase, setUseCase] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [state, setState] = useState<SubmitState>({ kind: "idle" });

  const fieldErrors = validate({ name, email, phone });
  const showError = (field: keyof FieldErrors) =>
    Boolean(touched[field] && fieldErrors[field]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.kind === "submitting") return;

    setTouched({ name: true, email: true, phone: true });
    if (Object.keys(fieldErrors).length > 0) {
      setState({ kind: "error", message: "Please fix the highlighted fields." });
      return;
    }

    setState({ kind: "submitting" });

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          company: company.trim(),
          use_case: useCase.trim(),
          source,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        lead_id?: string;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        events.leadFail(source, data.error || `http_${res.status}`);
        setState({
          kind: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
        return;
      }

      events.leadSubmit(source);
      setState({ kind: "success", leadId: data.lead_id || "" });
      onSuccess?.(data.lead_id || "");
    } catch {
      events.leadFail(source, "network");
      setState({
        kind: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  }

  if (state.kind === "success") {
    return (
      <div className="lead-form-success" role="status">
        <div className="lead-form-success-icon" aria-hidden>✓</div>
        <h3 className="lead-form-success-title">You&apos;re in.</h3>
        <p className="lead-form-success-msg">
          We&apos;ll be in touch within 1 hour.
        </p>
        {state.leadId ? (
          <p className="lead-form-success-id">Reference: {state.leadId.slice(0, 8)}</p>
        ) : null}
      </div>
    );
  }

  const submitting = state.kind === "submitting";

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="source" value={source} />

      <label className="lead-form-label">
        <span className="lead-form-label-text">Name</span>
        <input
          className="lead-form-input"
          type="text"
          name="name"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, name: true }))}
          disabled={submitting}
          placeholder="Your full name"
          aria-invalid={showError("name") || undefined}
          aria-describedby={showError("name") ? "lead-name-err" : undefined}
        />
        {showError("name") ? (
          <span id="lead-name-err" className="lead-form-fielderr" role="alert">
            {fieldErrors.name}
          </span>
        ) : null}
      </label>

      <label className="lead-form-label">
        <span className="lead-form-label-text">Email</span>
        <input
          className="lead-form-input"
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
          disabled={submitting}
          placeholder="you@company.com"
          aria-invalid={showError("email") || undefined}
          aria-describedby={showError("email") ? "lead-email-err" : undefined}
        />
        {showError("email") ? (
          <span id="lead-email-err" className="lead-form-fielderr" role="alert">
            {fieldErrors.email}
          </span>
        ) : null}
      </label>

      <label className="lead-form-label">
        <span className="lead-form-label-text">Phone</span>
        <input
          className="lead-form-input"
          type="tel"
          name="phone"
          autoComplete="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
          disabled={submitting}
          placeholder="+1 555 123 4567"
          aria-invalid={showError("phone") || undefined}
          aria-describedby={showError("phone") ? "lead-phone-err" : undefined}
        />
        {showError("phone") ? (
          <span id="lead-phone-err" className="lead-form-fielderr" role="alert">
            {fieldErrors.phone}
          </span>
        ) : null}
      </label>

      <label className="lead-form-label">
        <span className="lead-form-label-text">Company</span>
        <input
          className="lead-form-input"
          type="text"
          name="company"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          disabled={submitting}
          placeholder="Your company"
        />
      </label>

      <label className="lead-form-label">
        <span className="lead-form-label-text">Use Case</span>
        <textarea
          className="lead-form-input lead-form-textarea"
          name="use_case"
          rows={4}
          value={useCase}
          onChange={(e) => setUseCase(e.target.value)}
          disabled={submitting}
          placeholder="Tell us what you're trying to accomplish..."
        />
      </label>

      {state.kind === "error" ? (
        <div className="lead-form-error" role="alert">
          {state.message}
        </div>
      ) : null}

      <button
        type="submit"
        className="lead-form-submit"
        disabled={submitting}
        aria-busy={submitting}
      >
        {submitting ? "Sending..." : "Get In Touch"}
      </button>

      <p className="lead-form-footnote">We&apos;ll respond within 1 hour during business hours.</p>
    </form>
  );
}
