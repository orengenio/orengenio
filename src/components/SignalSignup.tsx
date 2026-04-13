"use client";

import { useState } from "react";

export function SignalSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("err");
      setError("Enter a valid email.");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const params = new URLSearchParams(window.location.search);
      const utm_source = params.get("utm_source") || "";
      const utm_medium = params.get("utm_medium") || "";
      const utm_campaign = params.get("utm_campaign") || "";
      const res = await fetch("/api/signal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: typeof window !== "undefined" ? window.location.pathname : "orengen.io",
          utm_source,
          utm_medium,
          utm_campaign,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("ok");
      setEmail("");
    } catch (e) {
      setStatus("err");
      setError(e instanceof Error ? e.message : "Something broke. Email signal@orengen.io.");
    }
  }

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "#CC5500", marginBottom: 8 }}>
        Tune In to <span style={{ color: "#fff" }}>OrenSignal</span>
      </div>
      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 14, lineHeight: 1.55 }}>
        AI-native field notes, launches, and intel for operators. No fluff. Unsubscribe anytime — reply STOP or click unsubscribe on any email.
      </div>

      {status === "ok" ? (
        <div style={{ padding: "14px 18px", background: "rgba(204,85,0,0.12)", border: "1px solid rgba(204,85,0,0.35)", borderRadius: 10, color: "#fff", fontSize: 13 }}>
          You&apos;re in. Check your inbox for confirmation.
        </div>
      ) : (
        <form onSubmit={onSubmit} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@domain.com"
            aria-label="Email address"
            style={{
              flex: "1 1 220px",
              minWidth: 0,
              padding: "12px 14px",
              borderRadius: 10,
              border: "1px solid rgba(204,85,0,0.35)",
              background: "rgba(255,255,255,0.05)",
              color: "#fff",
              fontSize: 14,
              outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              padding: "12px 22px",
              borderRadius: 10,
              border: "none",
              background: status === "loading" ? "rgba(204,85,0,0.5)" : "linear-gradient(135deg, #CC5500, #E8762B)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              cursor: status === "loading" ? "wait" : "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {status === "loading" ? "Subscribing…" : "Get the Signal →"}
          </button>
        </form>
      )}

      {status === "err" && (
        <div style={{ marginTop: 10, color: "#E8762B", fontSize: 12 }}>{error}</div>
      )}

      <p style={{ marginTop: 12, fontSize: 11, color: "rgba(255,255,255,0.4)", lineHeight: 1.55 }}>
        By submitting, you agree to our <a href="/privacy-policy" style={{ color: "#CC5500" }}>Privacy Policy</a> and <a href="/ai-communications-opt-in" style={{ color: "#CC5500" }}>AI Communications Opt-In</a>. We will never share your email or mobile info with third parties for marketing.
      </p>
    </div>
  );
}
