/**
 * Simvoly Platform API Client
 *
 * White-label domain: 19981.wl.simvoly.com
 * API base: https://api.19981.wl.simvoly.com
 *
 * All server-side calls require the SIMVOLY_API_KEY env var (X-CLIENT-KEY).
 */

const WL_DOMAIN = "19981.wl.simvoly.com";
const API_BASE = `https://api.${WL_DOMAIN}`;

function getApiKey(): string {
  const key = process.env.SIMVOLY_API_KEY;
  if (!key) throw new Error("SIMVOLY_API_KEY environment variable is not set");
  return key;
}

// ─── Generic helpers ─────────────────────────────────────────────────

async function apiRequest<T = unknown>(
  path: string,
  options: { method?: string; body?: Record<string, string>; headers?: Record<string, string> } = {}
): Promise<T> {
  const { method = "GET", body, headers = {} } = options;
  const url = `${API_BASE}${path}`;

  const fetchOptions: RequestInit = {
    method,
    headers: {
      "X-CLIENT-KEY": getApiKey(),
      ...headers,
    },
  };

  if (body) {
    fetchOptions.headers = {
      ...fetchOptions.headers,
      "Content-Type": "application/x-www-form-urlencoded",
    } as Record<string, string>;
    fetchOptions.body = new URLSearchParams(body).toString();
  }

  const res = await fetch(url, fetchOptions);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Simvoly API ${method} ${path} failed (${res.status}): ${text}`);
  }

  return res.json() as Promise<T>;
}

async function sessionRequest<T = unknown>(
  path: string,
  body: Record<string, string>
): Promise<T> {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getApiKey()}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body).toString(),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Simvoly Session API ${path} failed (${res.status}): ${text}`);
  }

  return res.json() as Promise<T>;
}

// ─── User Management ─────────────────────────────────────────────────

export interface SimvolyUser {
  id: number;
  name: string;
  email: string;
  locale: string;
}

export async function createUser(params: {
  name: string;
  email: string;
  password?: string;
  locale?: string;
}): Promise<{ success: boolean; data: SimvolyUser }> {
  const body: Record<string, string> = {
    name: params.name,
    email: params.email,
  };
  if (params.password) body.password = params.password;
  if (params.locale) body.locale = params.locale;

  return apiRequest("/api/v1/users", { method: "POST", body });
}

export async function getUser(userId: number): Promise<SimvolyUser> {
  return apiRequest(`/api/v1/users/${userId}`);
}

export async function searchUser(email: string): Promise<SimvolyUser> {
  return apiRequest("/api/v1/users/search", {
    method: "POST",
    body: { email },
  });
}

export async function deleteUser(userId: number): Promise<{ success: boolean }> {
  return apiRequest(`/api/v1/users/${userId}`, { method: "DELETE" });
}

// ─── Project Management ──────────────────────────────────────────────

export interface SimvolyProject {
  id: number;
  name: string;
  status: "ACTIVE" | "TRIAL" | "EXPIRED";
  isOwner?: boolean;
}

export async function listProjects(params: {
  externalCustomerId?: string;
  userId?: number;
  customerEmail?: string;
}): Promise<SimvolyProject[]> {
  const query = new URLSearchParams();
  if (params.externalCustomerId) query.set("externalCustomerId", params.externalCustomerId);
  if (params.userId) query.set("userId", String(params.userId));
  if (params.customerEmail) query.set("customerEmail", params.customerEmail);

  return apiRequest(`/api/v1/projects?${query.toString()}`);
}

export async function getProject(projectId: number): Promise<{
  id: number;
  name: string;
  status: string;
  plan: { id: number; name: string };
  sites: Array<{
    id: number;
    domain: string | null;
    name: string;
    subdomain: string;
    hasTemplate: boolean;
    type: "WEBSITE" | "FUNNEL";
  }>;
}> {
  return apiRequest(`/api/v1/projects/${projectId}`);
}

// ─── Website / Funnel ────────────────────────────────────────────────

export interface CreateWebsiteResponse {
  success: boolean;
  data: {
    websiteId: number;
    projectId: number;
    subdomain: string;
  };
}

export async function createWebsite(params: {
  templateId?: string;
  funnelTemplateId?: string;
  externalCustomerId?: string;
  userId?: number;
  customerFirstName: string;
  customerLastName: string;
  customerEmail: string;
  customerSubdomain?: string;
  websiteName?: string;
  brandColor?: string;
}): Promise<CreateWebsiteResponse> {
  const body: Record<string, string> = {
    customerFirstName: params.customerFirstName,
    customerLastName: params.customerLastName,
    customerEmail: params.customerEmail,
  };
  if (params.templateId) body.templateId = params.templateId;
  if (params.funnelTemplateId) body.funnelTemplateId = params.funnelTemplateId;
  if (params.externalCustomerId) body.externalCustomerId = params.externalCustomerId;
  if (params.userId) body.userId = String(params.userId);
  if (params.customerSubdomain) body.customerSubdomain = params.customerSubdomain;
  if (params.websiteName) body.websiteName = params.websiteName;
  if (params.brandColor) body.brandColor = params.brandColor;

  return apiRequest("/api/v1/website", { method: "POST", body });
}

export async function listProjectWebsites(
  projectId: number
): Promise<
  Array<{
    id: number;
    domain: string | null;
    name: string;
    subdomain: string;
    hasTemplate: boolean;
    type: "WEBSITE" | "FUNNEL";
  }>
> {
  return apiRequest(`/api/v1/projects/${projectId}/websites`);
}

export async function connectDomain(
  websiteId: number,
  domain: string
): Promise<{ success: boolean; message?: string }> {
  return apiRequest(`/api/v1/website/${websiteId}/connect-domain`, {
    method: "POST",
    body: { domain },
  });
}

export async function setWebsiteStatus(
  websiteId: number,
  status: "ACTIVE" | "EXPIRED" | "DELETED",
  planId?: number,
  period?: "MONTHLY" | "YEARLY"
): Promise<{ success: boolean; message?: string }> {
  const body: Record<string, string> = { status };
  if (planId) body.planId = String(planId);
  if (period) body.period = period;

  return apiRequest(`/api/v1/website/${websiteId}/set-status`, {
    method: "POST",
    body,
  });
}

// ─── Templates ───────────────────────────────────────────────────────

export async function listTemplates(): Promise<
  Array<{
    id: number;
    name: string;
    primaryCategories: string;
    categories: string;
    visible: boolean;
    systemTemplate: boolean;
    previewUrl: string;
    thumb: string;
  }>
> {
  return apiRequest("/api/v1/templates");
}

export async function listPlans(): Promise<{
  data: Array<{
    id: number;
    name: string;
    pages: number;
    storage: number;
    bandwidth: number;
    websites: number;
    funnels: number;
    monthlyPrice: number;
    yearlyPrice: number;
    hidden: boolean;
    basePlan: string;
  }>;
  success: boolean;
}> {
  return apiRequest("/api/v1/plans");
}

// ─── Single Sign-On ──────────────────────────────────────────────────

export interface SSOSession {
  token: string;
  accessUrl: string;
  createdAt: number;
  expiresAt: number;
}

export async function createSSOSession(params: {
  externalCustomerId?: string;
  userId?: number;
  userEmail?: string;
  projectId?: number;
  websiteId?: number;
  path?: string;
}): Promise<SSOSession> {
  const body: Record<string, string> = {};
  if (params.externalCustomerId) body.externalCustomerId = params.externalCustomerId;
  if (params.userId) body.userId = String(params.userId);
  if (params.userEmail) body.userEmail = params.userEmail;
  if (params.projectId) body.projectId = String(params.projectId);
  if (params.websiteId) body.websiteId = String(params.websiteId);
  if (params.path) body.path = params.path;

  return sessionRequest("/api/platform/session", body);
}

// ─── Webhook Verification ────────────────────────────────────────────

export function getWebhookSecret(): string {
  const secret = process.env.SIMVOLY_WEBHOOK_SECRET;
  if (!secret) throw new Error("SIMVOLY_WEBHOOK_SECRET environment variable is not set");
  return secret;
}

export { WL_DOMAIN, API_BASE };
