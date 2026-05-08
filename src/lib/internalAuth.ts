// Server-only. Shared auth helper for cross-service endpoints (CRM at
// app.orengen.io, n8n flows, CrewAI agents, ...) calling the master site.
//
// Callers must present the shared INTERNAL_API_TOKEN in the X-OrenGen-Token
// header. The compare is constant-time via crypto.timingSafeEqual to avoid
// leaking the token length / prefix through timing side-channels.
import { timingSafeEqual } from "node:crypto";

export const INTERNAL_TOKEN_HEADER = "x-orengen-token";

function jsonResponse(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/**
 * Validates the X-OrenGen-Token header against process.env.INTERNAL_API_TOKEN.
 *
 * Returns:
 *   - `null` when the request is authorized — caller should proceed.
 *   - A 500 `Response` when the server is misconfigured (token unset). Hard-
 *     failing here is intentional: an unset token must NEVER be treated as
 *     "auth disabled", or a deploy that drops the env var would silently open
 *     the endpoint to the public internet.
 *   - A 401 `Response` when the header is missing or does not match.
 */
export function requireInternalToken(request: Request): Response | null {
  const expected = process.env.INTERNAL_API_TOKEN;
  if (!expected) {
    return jsonResponse(
      {
        ok: false,
        error: "INTERNAL_API_TOKEN is not configured on the server.",
      },
      500,
    );
  }

  const presented = request.headers.get(INTERNAL_TOKEN_HEADER);
  if (!presented) {
    return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
  }

  // timingSafeEqual requires equal-length buffers. Always produce two buffers
  // of identical length so the compare itself runs in constant time even when
  // the presented token has a different length than the expected one.
  const presentedBuf = Buffer.from(presented, "utf8");
  const expectedBuf = Buffer.from(expected, "utf8");

  if (presentedBuf.length !== expectedBuf.length) {
    // Still do a constant-time compare against expectedBuf (vs itself) to keep
    // the timing profile uniform, then fail closed.
    timingSafeEqual(expectedBuf, expectedBuf);
    return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
  }

  if (!timingSafeEqual(presentedBuf, expectedBuf)) {
    return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
  }

  return null;
}
