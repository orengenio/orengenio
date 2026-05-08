/**
 * Canonical TypeScript types for the OrenGen CRM database.
 * Mirrors crm/supabase/migrations/0002_phase_2_entities.sql.
 *
 * Subagent lanes (contacts, leads, deals, activities, etc.) MUST import
 * from here so we don't drift across parallel work streams. If you need
 * a new column, add it to the migration AND this file in the same PR.
 */

export type UUID = string;
export type Timestamp = string;
export type ISODate = string;

export type TenantRole = "owner" | "admin" | "member";

export type Tenant = {
  id: UUID;
  slug: string;
  name: string;
  branding: Record<string, unknown>;
  created_at: Timestamp;
  created_by: UUID | null;
};

export type TenantMember = {
  tenant_id: UUID;
  user_id: UUID;
  role: TenantRole;
  created_at: Timestamp;
};

export type Invite = {
  id: UUID;
  tenant_id: UUID;
  email: string;
  role: Exclude<TenantRole, "owner">;
  token: UUID;
  expires_at: Timestamp;
  accepted_at: Timestamp | null;
  invited_by: UUID | null;
  created_at: Timestamp;
};

export type Company = {
  id: UUID;
  tenant_id: UUID;
  name: string;
  domain: string | null;
  industry: string | null;
  size: string | null;
  website: string | null;
  phone: string | null;
  address: string | null;
  notes: string | null;
  created_by: UUID | null;
  created_at: Timestamp;
  updated_at: Timestamp;
};

export type Contact = {
  id: UUID;
  tenant_id: UUID;
  company_id: UUID | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  phone: string | null;
  title: string | null;
  source: string | null;
  tags: string[];
  notes: string | null;
  created_by: UUID | null;
  created_at: Timestamp;
  updated_at: Timestamp;
};

export type Pipeline = {
  id: UUID;
  tenant_id: UUID;
  name: string;
  is_default: boolean;
  position: number;
  created_at: Timestamp;
};

export type Stage = {
  id: UUID;
  tenant_id: UUID;
  pipeline_id: UUID;
  name: string;
  position: number;
  win_probability: number;
  is_won: boolean;
  is_lost: boolean;
  created_at: Timestamp;
};

export type LeadStatus =
  | "new"
  | "qualifying"
  | "qualified"
  | "converted"
  | "lost"
  | "spam";

export type LeadTier = "hot" | "warm" | "cold" | "unqualified";

export type Lead = {
  id: UUID;
  tenant_id: UUID;
  contact_id: UUID | null;
  company_id: UUID | null;
  source: string | null;
  status: LeadStatus;
  qualifier_score: number | null;
  qualifier_tier: LeadTier | null;
  qualifier_action: string | null;
  qualifier_outreach_email: string | null;
  qualifier_sms: string | null;
  qualifier_research: string | null;
  qualifier_raw: Record<string, unknown> | null;
  raw_payload: Record<string, unknown> | null;
  converted_to_deal_id: UUID | null;
  assigned_to: UUID | null;
  created_by: UUID | null;
  created_at: Timestamp;
  updated_at: Timestamp;
};

export type Deal = {
  id: UUID;
  tenant_id: UUID;
  pipeline_id: UUID;
  stage_id: UUID;
  contact_id: UUID | null;
  company_id: UUID | null;
  lead_id: UUID | null;
  owner_id: UUID | null;
  title: string;
  value_cents: number;
  currency: string;
  expected_close: ISODate | null;
  closed_at: Timestamp | null;
  is_won: boolean | null;
  notes: string | null;
  created_by: UUID | null;
  created_at: Timestamp;
  updated_at: Timestamp;
};

export type ActivityType =
  | "call"
  | "email"
  | "sms"
  | "meeting"
  | "note"
  | "other";

export type ActivityDirection = "inbound" | "outbound";

export type Activity = {
  id: UUID;
  tenant_id: UUID;
  type: ActivityType;
  direction: ActivityDirection | null;
  contact_id: UUID | null;
  company_id: UUID | null;
  deal_id: UUID | null;
  lead_id: UUID | null;
  user_id: UUID | null;
  subject: string | null;
  body: string | null;
  metadata: Record<string, unknown>;
  occurred_at: Timestamp;
  created_at: Timestamp;
};

export type TaskPriority = "low" | "normal" | "high" | "urgent";

export type Task = {
  id: UUID;
  tenant_id: UUID;
  contact_id: UUID | null;
  company_id: UUID | null;
  deal_id: UUID | null;
  lead_id: UUID | null;
  assigned_to: UUID | null;
  title: string;
  description: string | null;
  due_at: Timestamp | null;
  completed_at: Timestamp | null;
  priority: TaskPriority;
  created_by: UUID | null;
  created_at: Timestamp;
  updated_at: Timestamp;
};

/** Convenience: join shapes returned by common Supabase select() calls. */
export type ContactWithCompany = Contact & { company: Company | null };
export type DealWithRelations = Deal & {
  contact: Contact | null;
  company: Company | null;
  stage: Stage | null;
  pipeline: Pipeline | null;
};
export type ActivityWithUser = Activity & {
  user: { id: UUID; email: string | null } | null;
};
