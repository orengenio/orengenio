"use client";

import { useEffect, useState, useCallback } from "react";
import { LeadForm } from "./LeadForm";

type LeadModalProps = {
  open: boolean;
  onClose: () => void;
  source: string;
  title?: string;
  subtitle?: string;
};

export function LeadModal({ open, onClose, source, title, subtitle }: LeadModalProps) {
  // Lock body scroll while modal is open and close on Escape.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="lead-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Get in touch with OrenGen"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="lead-modal-content">
        <button
          type="button"
          className="lead-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="lead-modal-header">
          <div className="lead-modal-eyebrow">Talk to a Strategist</div>
          <h2 className="lead-modal-title">{title ?? "Let's Build Your AI Workforce"}</h2>
          <p className="lead-modal-sub">
            {subtitle ?? "Drop your details and we'll be in touch within the hour."}
          </p>
        </div>
        <LeadForm source={source} />
      </div>
    </div>
  );
}

/**
 * Wrapper used by pages that render their UI through `dangerouslySetInnerHTML`.
 * Listens (via event delegation) for clicks on any element with
 * `data-lead-source="<value>"` and opens the modal. Falls back to noop if SSR.
 */
type LeadModalTriggerProps = {
  defaultSource: string;
  title?: string;
  subtitle?: string;
};

export function LeadModalTrigger({ defaultSource, title, subtitle }: LeadModalTriggerProps) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState(defaultSource);

  const handleClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const trigger = target.closest<HTMLElement>("[data-lead-source]");
      if (!trigger) return;
      e.preventDefault();
      const src = trigger.getAttribute("data-lead-source") || defaultSource;
      setSource(src);
      setOpen(true);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [defaultSource]);

  return (
    <LeadModal
      open={open}
      onClose={handleClose}
      source={source}
      title={title}
      subtitle={subtitle}
    />
  );
}

export default LeadModal;
