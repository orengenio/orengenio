const buckets = new Map<string, number[]>();

const CLEANUP_INTERVAL = 60_000;
let lastCleanup = Date.now();

function cleanup(windowMs: number) {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;
  const cutoff = now - windowMs;
  for (const [key, timestamps] of buckets) {
    const filtered = timestamps.filter((t) => t > cutoff);
    if (filtered.length === 0) buckets.delete(key);
    else buckets.set(key, filtered);
  }
}

export function rateLimit(
  ip: string,
  { maxRequests = 10, windowMs = 60_000 }: { maxRequests?: number; windowMs?: number } = {},
): boolean {
  cleanup(windowMs);
  const now = Date.now();
  const cutoff = now - windowMs;
  const timestamps = (buckets.get(ip) ?? []).filter((t) => t > cutoff);

  if (timestamps.length >= maxRequests) return false;

  timestamps.push(now);
  buckets.set(ip, timestamps);
  return true;
}
