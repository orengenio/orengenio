/**
 * systeme.io Public API Client
 *
 * API base: https://api.systeme.io/api
 * Auth: X-API-Key header
 *
 * All server-side calls require the SYSTEMEIO_API_KEY env var.
 */

const API_BASE = "https://api.systeme.io/api";

function getApiKey(): string {
  const key = process.env.SYSTEMEIO_API_KEY;
  if (!key) throw new Error("SYSTEMEIO_API_KEY environment variable is not set");
  return key;
}

// ─── Generic helpers ─────────────────────────────────────────────────

async function apiRequest<T = unknown>(
  path: string,
  options: { method?: string; body?: Record<string, unknown> } = {}
): Promise<T> {
  const { method = "GET", body } = options;
  const url = `${API_BASE}${path}`;

  const fetchOptions: RequestInit = {
    method,
    headers: {
      "X-API-Key": getApiKey(),
      "Content-Type": "application/json",
    },
  };

  if (body) {
    fetchOptions.body = JSON.stringify(body);
  }

  const res = await fetch(url, fetchOptions);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`systeme.io API ${method} ${path} failed (${res.status}): ${text}`);
  }

  // DELETE returns 204 No Content
  if (res.status === 204) return undefined as T;

  return res.json() as Promise<T>;
}

// ─── Types ──────────────────────────────────────────────────────────

export interface SystemeContact {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  locale: string | null;
  tags: Array<{ id: number; name: string }>;
  fields: Array<{ slug: string; value: string }>;
  registeredAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface SystemeTag {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface SystemeSubscription {
  id: number;
  plan: { id: number; name: string };
  status: string;
  createdAt: string;
}

export interface SystemeWebhook {
  id: number;
  event: string;
  url: string;
  createdAt: string;
}

export interface SystemeCommunity {
  id: number;
  name: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  hasMore: boolean;
}

// ─── Contacts ───────────────────────────────────────────────────────

export async function listContacts(params?: {
  startingAfter?: number;
  limit?: number;
  email?: string;
}): Promise<PaginatedResponse<SystemeContact>> {
  const query = new URLSearchParams();
  if (params?.startingAfter) query.set("startingAfter", String(params.startingAfter));
  if (params?.limit) query.set("limit", String(params.limit));
  if (params?.email) query.set("email", params.email);

  const qs = query.toString();
  return apiRequest(`/contacts${qs ? `?${qs}` : ""}`);
}

export async function createContact(params: {
  email: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  locale?: string;
  tags?: Array<{ name: string }>;
  fields?: Array<{ slug: string; value: string }>;
}): Promise<SystemeContact> {
  return apiRequest("/contacts", { method: "POST", body: params as Record<string, unknown> });
}

export async function getContact(contactId: number): Promise<SystemeContact> {
  return apiRequest(`/contacts/${contactId}`);
}

export async function updateContact(
  contactId: number,
  params: {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    locale?: string;
    fields?: Array<{ slug: string; value: string }>;
  }
): Promise<SystemeContact> {
  return apiRequest(`/contacts/${contactId}`, {
    method: "PUT",
    body: params as Record<string, unknown>,
  });
}

export async function deleteContact(contactId: number): Promise<void> {
  return apiRequest(`/contacts/${contactId}`, { method: "DELETE" });
}

/**
 * Find a contact by email. Returns the contact or null if not found.
 */
export async function findContactByEmail(email: string): Promise<SystemeContact | null> {
  const result = await listContacts({ email });
  if (result.items.length > 0) {
    return result.items[0];
  }
  return null;
}

// ─── Tags ───────────────────────────────────────────────────────────

export async function addTagToContact(contactId: number, tagId: number): Promise<void> {
  await apiRequest(`/contacts/${contactId}/tags`, {
    method: "POST",
    body: { tagId },
  });
}

export async function removeTagFromContact(contactId: number, tagId: number): Promise<void> {
  await apiRequest(`/contacts/${contactId}/tags/${tagId}`, { method: "DELETE" });
}

export async function listTags(params?: {
  startingAfter?: number;
  limit?: number;
}): Promise<PaginatedResponse<SystemeTag>> {
  const query = new URLSearchParams();
  if (params?.startingAfter) query.set("startingAfter", String(params.startingAfter));
  if (params?.limit) query.set("limit", String(params.limit));

  const qs = query.toString();
  return apiRequest(`/tags${qs ? `?${qs}` : ""}`);
}

export async function createTag(name: string): Promise<SystemeTag> {
  return apiRequest("/tags", { method: "POST", body: { name } });
}

export async function updateTag(tagId: number, name: string): Promise<SystemeTag> {
  return apiRequest(`/tags/${tagId}`, { method: "PUT", body: { name } });
}

// ─── Subscriptions ──────────────────────────────────────────────────

export async function listSubscriptions(params?: {
  startingAfter?: number;
  limit?: number;
}): Promise<PaginatedResponse<SystemeSubscription>> {
  const query = new URLSearchParams();
  if (params?.startingAfter) query.set("startingAfter", String(params.startingAfter));
  if (params?.limit) query.set("limit", String(params.limit));

  const qs = query.toString();
  return apiRequest(`/payment/subscriptions${qs ? `?${qs}` : ""}`);
}

export async function cancelSubscription(subscriptionId: number): Promise<void> {
  return apiRequest(`/payment/subscriptions/${subscriptionId}`, { method: "DELETE" });
}

// ─── Webhooks ───────────────────────────────────────────────────────

export async function listWebhooks(params?: {
  startingAfter?: number;
  limit?: number;
}): Promise<PaginatedResponse<SystemeWebhook>> {
  const query = new URLSearchParams();
  if (params?.startingAfter) query.set("startingAfter", String(params.startingAfter));
  if (params?.limit) query.set("limit", String(params.limit));

  const qs = query.toString();
  return apiRequest(`/webhooks${qs ? `?${qs}` : ""}`);
}

export async function createWebhook(params: {
  event: string;
  url: string;
}): Promise<SystemeWebhook> {
  return apiRequest("/webhooks", { method: "POST", body: params });
}

export async function deleteWebhook(webhookId: number): Promise<void> {
  return apiRequest(`/webhooks/${webhookId}`, { method: "DELETE" });
}

// ─── Communities ────────────────────────────────────────────────────

export async function listCommunities(params?: {
  startingAfter?: number;
  limit?: number;
}): Promise<PaginatedResponse<SystemeCommunity>> {
  const query = new URLSearchParams();
  if (params?.startingAfter) query.set("startingAfter", String(params.startingAfter));
  if (params?.limit) query.set("limit", String(params.limit));

  const qs = query.toString();
  return apiRequest(`/community/communities${qs ? `?${qs}` : ""}`);
}

export async function createCommunityMembership(
  communityId: number,
  params: { email: string }
): Promise<void> {
  await apiRequest(`/community/communities/${communityId}/memberships`, {
    method: "POST",
    body: params,
  });
}

export { API_BASE };
