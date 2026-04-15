/**
 * CrewAI lead-qualifier client helper.
 *
 * Wraps the call to the CrewAI FastAPI service that lives in
 * `platform/crewai/`. Safe to import from any server-side route handler —
 * all errors are swallowed (best-effort enrichment, never blocks the
 * lead-capture path).
 *
 * The service is gated on `CREWAI_URL` being set; if unset, this is a no-op.
 *
 * Example usage from `src/app/api/leads/route.ts`:
 *
 *   import { qualifyLead } from "@/lib/crewai";
 *   // ...after capturing the lead:
 *   void qualifyLead({ lead_id, name, email, phone, company, use_case, source });
 */

export interface QualifyLeadPayload {
  lead_id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  use_case: string;
  source: string;
}

export interface QualifyLeadResult {
  ok: boolean;
  status?: number;
  error?: string;
}

/**
 * Fire an async qualification job at the CrewAI service. Returns a promise
 * that resolves with `{ ok: false }` on any failure rather than throwing,
 * so callers can `void qualifyLead(...)` without a try/catch.
 */
export async function qualifyLead(payload: QualifyLeadPayload): Promise<QualifyLeadResult> {
  const baseUrl = process.env.CREWAI_URL;
  const token = process.env.INTERNAL_API_TOKEN;
  if (!baseUrl) {
    return { ok: false, error: "CREWAI_URL not configured" };
  }

  try {
    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/qualify-lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { "X-OrenGen-Token": token } : {}),
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return { ok: false, status: res.status, error: `crewai responded ${res.status}` };
    }
    return { ok: true, status: res.status };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "unknown error" };
  }
}
