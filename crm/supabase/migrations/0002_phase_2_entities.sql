-- OrenGen CRM Phase 2: core CRM entities.
-- Applied via Supabase MCP against https://supacrm.orengen.io.
-- Every table is tenant-scoped via tenant_id + RLS.
-- Idempotent against a fresh DB; not safe to re-run on a populated schema.

-- updated_at autobump trigger
create or replace function public._touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- companies
create table public.companies (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  name text not null,
  domain text,
  industry text,
  size text,
  website text,
  phone text,
  address text,
  notes text,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index companies_tenant_id_idx on public.companies(tenant_id);
create index companies_tenant_name_idx on public.companies(tenant_id, lower(name));
create trigger companies_touch before update on public.companies for each row execute function public._touch_updated_at();

-- contacts
create table public.contacts (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  company_id uuid references public.companies(id) on delete set null,
  first_name text,
  last_name text,
  email text,
  phone text,
  title text,
  source text,
  tags text[] default '{}',
  notes text,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint contacts_has_name_or_email check (coalesce(first_name,last_name,email) is not null)
);
create index contacts_tenant_id_idx on public.contacts(tenant_id);
create index contacts_company_id_idx on public.contacts(company_id);
create index contacts_tenant_email_idx on public.contacts(tenant_id, lower(email));
create index contacts_tenant_phone_idx on public.contacts(tenant_id, phone);
create trigger contacts_touch before update on public.contacts for each row execute function public._touch_updated_at();

-- pipelines (each tenant can have multiple sales pipelines)
create table public.pipelines (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  name text not null,
  is_default boolean not null default false,
  position int not null default 0,
  created_at timestamptz not null default now()
);
create index pipelines_tenant_id_idx on public.pipelines(tenant_id, position);
-- only one default pipeline per tenant
create unique index pipelines_one_default_per_tenant on public.pipelines(tenant_id) where is_default;

-- pipeline stages
create table public.stages (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  pipeline_id uuid not null references public.pipelines(id) on delete cascade,
  name text not null,
  position int not null default 0,
  win_probability int not null default 0 check (win_probability between 0 and 100),
  is_won boolean not null default false,
  is_lost boolean not null default false,
  created_at timestamptz not null default now(),
  constraint stages_won_xor_lost check (not (is_won and is_lost))
);
create index stages_tenant_id_idx on public.stages(tenant_id);
create index stages_pipeline_position_idx on public.stages(pipeline_id, position);

-- leads (inbound, pre-pipeline)
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  contact_id uuid references public.contacts(id) on delete set null,
  company_id uuid references public.companies(id) on delete set null,
  source text,
  status text not null default 'new' check (status in ('new','qualifying','qualified','converted','lost','spam')),
  qualifier_score int check (qualifier_score between 0 and 100),
  qualifier_tier text check (qualifier_tier in ('hot','warm','cold','unqualified')),
  qualifier_action text,
  qualifier_outreach_email text,
  qualifier_sms text,
  qualifier_research text,
  qualifier_raw jsonb,
  raw_payload jsonb,
  converted_to_deal_id uuid,
  assigned_to uuid references auth.users(id) on delete set null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index leads_tenant_id_idx on public.leads(tenant_id);
create index leads_tenant_status_idx on public.leads(tenant_id, status);
create index leads_assigned_to_idx on public.leads(assigned_to);
create trigger leads_touch before update on public.leads for each row execute function public._touch_updated_at();

-- deals (opportunities in pipeline)
create table public.deals (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  pipeline_id uuid not null references public.pipelines(id) on delete restrict,
  stage_id uuid not null references public.stages(id) on delete restrict,
  contact_id uuid references public.contacts(id) on delete set null,
  company_id uuid references public.companies(id) on delete set null,
  lead_id uuid references public.leads(id) on delete set null,
  owner_id uuid references auth.users(id) on delete set null,
  title text not null,
  value_cents bigint not null default 0,
  currency text not null default 'USD',
  expected_close date,
  closed_at timestamptz,
  is_won boolean,
  notes text,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index deals_tenant_id_idx on public.deals(tenant_id);
create index deals_tenant_stage_idx on public.deals(tenant_id, stage_id);
create index deals_owner_idx on public.deals(owner_id);
create index deals_contact_idx on public.deals(contact_id);
create index deals_company_idx on public.deals(company_id);
create trigger deals_touch before update on public.deals for each row execute function public._touch_updated_at();

-- back-reference for lead -> deal conversion (forward-declared above)
alter table public.leads
  add constraint leads_converted_deal_fk
  foreign key (converted_to_deal_id) references public.deals(id) on delete set null;

-- activities (timeline: calls, emails, sms, meetings, notes)
create table public.activities (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  type text not null check (type in ('call','email','sms','meeting','note','other')),
  direction text check (direction in ('inbound','outbound')),
  contact_id uuid references public.contacts(id) on delete set null,
  company_id uuid references public.companies(id) on delete set null,
  deal_id uuid references public.deals(id) on delete set null,
  lead_id uuid references public.leads(id) on delete set null,
  user_id uuid references auth.users(id) on delete set null,
  subject text,
  body text,
  metadata jsonb not null default '{}'::jsonb,
  occurred_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);
create index activities_tenant_id_idx on public.activities(tenant_id, occurred_at desc);
create index activities_contact_id_idx on public.activities(contact_id, occurred_at desc);
create index activities_deal_id_idx on public.activities(deal_id, occurred_at desc);
create index activities_lead_id_idx on public.activities(lead_id, occurred_at desc);

-- tasks (todos with optional links to entities)
create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  contact_id uuid references public.contacts(id) on delete set null,
  company_id uuid references public.companies(id) on delete set null,
  deal_id uuid references public.deals(id) on delete set null,
  lead_id uuid references public.leads(id) on delete set null,
  assigned_to uuid references auth.users(id) on delete set null,
  title text not null,
  description text,
  due_at timestamptz,
  completed_at timestamptz,
  priority text not null default 'normal' check (priority in ('low','normal','high','urgent')),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index tasks_tenant_id_idx on public.tasks(tenant_id);
create index tasks_assigned_open_idx on public.tasks(assigned_to) where completed_at is null;
create index tasks_due_open_idx on public.tasks(tenant_id, due_at) where completed_at is null;
create trigger tasks_touch before update on public.tasks for each row execute function public._touch_updated_at();

-- RLS.
alter table public.companies enable row level security;
alter table public.contacts enable row level security;
alter table public.pipelines enable row level security;
alter table public.stages enable row level security;
alter table public.leads enable row level security;
alter table public.deals enable row level security;
alter table public.activities enable row level security;
alter table public.tasks enable row level security;

-- Member CRUD on transactional entities.
do $$
declare t text;
begin
  foreach t in array array['companies','contacts','leads','deals','activities','tasks']
  loop
    execute format($f$
      create policy "%1$s_member_rw" on public.%1$s
        for all to authenticated
        using (public.is_tenant_member(tenant_id))
        with check (public.is_tenant_member(tenant_id));
    $f$, t);
  end loop;
end $$;

-- Pipelines + stages: members read, owner/admin write (configuration data).
create policy "pipelines_member_read" on public.pipelines for select to authenticated
  using (public.is_tenant_member(tenant_id));
create policy "pipelines_admin_write" on public.pipelines for all to authenticated
  using (public.tenant_role(tenant_id) in ('owner','admin'))
  with check (public.tenant_role(tenant_id) in ('owner','admin'));

create policy "stages_member_read" on public.stages for select to authenticated
  using (public.is_tenant_member(tenant_id));
create policy "stages_admin_write" on public.stages for all to authenticated
  using (public.tenant_role(tenant_id) in ('owner','admin'))
  with check (public.tenant_role(tenant_id) in ('owner','admin'));

-- Auto-seed: every new tenant gets a default 6-stage pipeline.
-- Replaces _tenants_after_insert with a superset (still adds creator as owner).
create or replace function public._tenants_after_insert()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  pid uuid;
begin
  insert into public.tenant_members (tenant_id, user_id, role)
  values (new.id, coalesce(new.created_by, auth.uid()), 'owner')
  on conflict do nothing;

  insert into public.pipelines (tenant_id, name, is_default, position)
  values (new.id, 'Sales Pipeline', true, 0)
  returning id into pid;

  insert into public.stages (tenant_id, pipeline_id, name, position, win_probability, is_won, is_lost) values
    (new.id, pid, 'New',         0,  10, false, false),
    (new.id, pid, 'Qualified',   1,  30, false, false),
    (new.id, pid, 'Proposal',    2,  60, false, false),
    (new.id, pid, 'Negotiation', 3,  80, false, false),
    (new.id, pid, 'Won',         4, 100, true,  false),
    (new.id, pid, 'Lost',        5,   0, false, true);

  return new;
end;
$$;

comment on table public.companies is 'OrenGen CRM Phase 2: company / account records.';
comment on table public.contacts is 'OrenGen CRM Phase 2: people. Optionally linked to a company.';
comment on table public.pipelines is 'OrenGen CRM Phase 2: sales pipelines. One default per tenant.';
comment on table public.stages is 'OrenGen CRM Phase 2: ordered stages within a pipeline.';
comment on table public.leads is 'OrenGen CRM Phase 2: inbound leads, optionally enriched by CrewAI qualifier.';
comment on table public.deals is 'OrenGen CRM Phase 2: opportunities. Live in exactly one stage of one pipeline.';
comment on table public.activities is 'OrenGen CRM Phase 2: timeline events (calls, emails, sms, meetings, notes).';
comment on table public.tasks is 'OrenGen CRM Phase 2: todo items, optionally linked to entities.';
