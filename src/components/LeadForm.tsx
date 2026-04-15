"use client";

import { useState, FormEvent } from "react";

type LeadFormProps = {
  source: string;
  onSuccess?: (leadId: string) => void;
};

type SubmitState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; leadId: string }
  | { kind: "error"; message: string };

export function LeadForm({ source, onSuccess }: LeadFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [useCase, setUseCase] = useState("");
  const [state, setState] = useState<SubmitState>({ kind: "idle" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.kind === "submitting") return;
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
        setState({
          kind: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
        return;
      }

      setState({ kind: "success", leadId: data.lead_id || "" });
      onSuccess?.(data.lead_id || "");
    } catch {
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
          disabled={submitting}
          placeholder="Your full name"
        />
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
          disabled={submitting}
          placeholder="you@company.com"
        />
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
          disabled={submitting}
          placeholder="+1 555 123 4567"
        />
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

export default LeadForm;
