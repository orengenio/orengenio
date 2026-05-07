-- OrenGen CRM — Phase 1 multi-tenant foundation.
-- Applied via Supabase MCP against https://supacrm.orengen.io on 2026-05-07.
-- Idempotent against a fresh DB; not safe to re-run on a populated schema
-- without first dropping the affected objects.

create extension if not exists "pgcrypto";

create table public.tenants (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null check (slug ~ '^[a-z0-9-]+$' and length(slug) between 2 and 40),
  name text not null,
  branding jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  created_by uuid references auth.users(id) on delete set null
);

create table public.tenant_members (
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('owner','admin','member')),
  created_at timestamptz not null default now(),
  primary key (tenant_id, user_id)
);

create index tenant_members_user_id_idx on public.tenant_members(user_id);

create table public.invites (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  email text not null,
  role text not null check (role in ('admin','member')),
  token uuid not null default gen_random_uuid() unique,
  expires_at timestamptz not null default (now() + interval '7 days'),
  accepted_at timestamptz,
  invited_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create index invites_tenant_id_idx on public.invites(tenant_id);
create index invites_email_idx on public.invites(email);

-- Helpers (security definer so RLS policies can call them without recursion).

create or replace function public.is_tenant_member(tid uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists(
    select 1 from public.tenant_members
    where tenant_id = tid and user_id = auth.uid()
  );
$$;

create or replace function public.tenant_role(tid uuid)
returns text
language sql
stable
security definer
set search_path = public
as $$
  select role from public.tenant_members
  where tenant_id = tid and user_id = auth.uid();
$$;

-- After-insert trigger: stamp the creating user as the owner of the tenant.

create or replace function public._tenants_after_insert()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.tenant_members (tenant_id, user_id, role)
  values (new.id, coalesce(new.created_by, auth.uid()), 'owner')
  on conflict do nothing;
  return new;
end;
$$;

create trigger tenants_after_insert
after insert on public.tenants
for each row execute function public._tenants_after_insert();

-- Row-level security.

alter table public.tenants enable row level security;
alter table public.tenant_members enable row level security;
alter table public.invites enable row level security;

create policy "tenants_read_member" on public.tenants for select to authenticated
  using (public.is_tenant_member(id));
create policy "tenants_insert_self" on public.tenants for insert to authenticated
  with check (created_by = auth.uid() or created_by is null);
create policy "tenants_update_owner" on public.tenants for update to authenticated
  using (public.tenant_role(id) = 'owner') with check (public.tenant_role(id) = 'owner');
create policy "tenants_delete_owner" on public.tenants for delete to authenticated
  using (public.tenant_role(id) = 'owner');

create policy "tenant_members_read_self_or_member" on public.tenant_members for select to authenticated
  using (user_id = auth.uid() or public.is_tenant_member(tenant_id));
create policy "tenant_members_manage_admin" on public.tenant_members for all to authenticated
  using (public.tenant_role(tenant_id) in ('owner','admin'))
  with check (public.tenant_role(tenant_id) in ('owner','admin'));

create policy "invites_manage_admin" on public.invites for all to authenticated
  using (public.tenant_role(tenant_id) in ('owner','admin'))
  with check (public.tenant_role(tenant_id) in ('owner','admin'));

comment on table public.tenants is 'OrenGen multi-tenant: top-level tenant (workspace) records.';
comment on table public.tenant_members is 'OrenGen multi-tenant: membership + role for each (tenant, user) pair.';
comment on table public.invites is 'OrenGen multi-tenant: outstanding invite tokens for tenant onboarding.';
