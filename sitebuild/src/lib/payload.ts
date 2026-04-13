const PAYLOAD_URL = (import.meta.env.PAYLOAD_URL || process.env.PAYLOAD_URL || "http://payload:3000").replace(/\/$/, "");

export interface Page {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "published";
  meta?: { title?: string; description?: string; ogImage?: { url?: string } };
  blocks?: Block[];
  publishedAt?: string;
  updatedAt?: string;
}

export type Block =
  | { blockType: "hero"; eyebrow?: string; headline: string; subhead?: string; ctaLabel?: string; ctaHref?: string }
  | { blockType: "richtext"; content: unknown }
  | { blockType: "features"; title?: string; items: { icon?: string; title: string; description?: string }[] }
  | { blockType: "cta"; headline: string; body?: string; primaryLabel?: string; primaryHref?: string; secondaryLabel?: string; secondaryHref?: string };

interface PayloadListResponse<T> {
  docs: T[];
  totalDocs: number;
  page: number;
  totalPages: number;
}

async function fetchPayload<T>(path: string): Promise<T> {
  const res = await fetch(`${PAYLOAD_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error(`Payload ${res.status}: ${path}`);
  return res.json() as Promise<T>;
}

export async function getPublishedPages(): Promise<Page[]> {
  const data = await fetchPayload<PayloadListResponse<Page>>(
    "/api/pages?where[status][equals]=published&limit=100&depth=1",
  );
  return data.docs;
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  const data = await fetchPayload<PayloadListResponse<Page>>(
    `/api/pages?where[slug][equals]=${encodeURIComponent(slug)}&where[status][equals]=published&limit=1&depth=2`,
  );
  return data.docs[0] ?? null;
}
