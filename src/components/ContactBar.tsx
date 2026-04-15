"use client";

import type { CSSProperties } from "react";

/**
 * ContactBar — small floating "Call us / Text us" pair.
 *
 * Reads NEXT_PUBLIC_OREN_PHONE (Next.js inlines NEXT_PUBLIC_* at build time,
 * so this works in a client component without a runtime fetch). Renders nothing
 * if the env var is missing. Mounted from the root layout so it appears on
 * every page; positioned so it doesn't overlap the existing Navbar CTAs.
 */
export function ContactBar() {
  const phone = process.env.NEXT_PUBLIC_OREN_PHONE;
  if (!phone || phone.trim() === "") return null;

  const tel = phone.replace(/[^\d+]/g, "");
  const smsBody = encodeURIComponent("Tell me more about OrenGen");

  const containerStyle: CSSProperties = {
    position: "fixed",
    top: 14,
    right: 14,
    zIndex: 60,
    display: "flex",
    gap: 8,
    pointerEvents: "auto",
  };

  const baseBtn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 12px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 0.2,
    lineHeight: 1,
    textDecoration: "none",
    border: "1px solid rgba(204,85,0,0.55)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    transition: "transform 120ms ease, background 120ms ease",
  };

  const callBtn: CSSProperties = {
    ...baseBtn,
    background: "#CC5500",
    color: "#fff",
    boxShadow: "0 4px 14px rgba(204,85,0,0.35)",
  };

  const smsBtn: CSSProperties = {
    ...baseBtn,
    background: "rgba(11,29,58,0.55)",
    color: "#fff",
  };

  return (
    <div
      aria-label="Contact OrenGen"
      style={containerStyle}
      className="oren-contact-bar"
    >
      <a href={`tel:${tel}`} style={callBtn} aria-label={`Call OrenGen at ${phone}`}>
        <span aria-hidden>📞</span>
        Call us
      </a>
      <a
        href={`sms:${tel}?body=${smsBody}`}
        style={smsBtn}
        aria-label={`Text OrenGen at ${phone}`}
      >
        <span aria-hidden>💬</span>
        Text us
      </a>
    </div>
  );
}

export default ContactBar;
