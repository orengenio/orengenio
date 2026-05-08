import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { serverEnv } from "@/lib/env";
import { getTenantBySlug } from "@/lib/tenant";
import { runQualifierAndPersist } from "@/lib/integrations/crewai";
import type { SupabaseClient } from "@supabase/supabase-js";

type IntakePayload = {
  tenant_slug?: string;
  tenant_id?: string;
  source?: string;
  contact: {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    title?: string;
  };
  company?: {
    name?: string;
    domain?: string;
    industry?: string;
    website?: string;
    phone?: string;
  };
  raw_payload?: Record<string, unknown> | null;
};

function timingSafeEquals(a: string, b: string) {
  const ah = crypto.createHash("sha256").update(a).digest();
  const bh = crypto.createHash("sha256").update(b).digest();
  return crypto.timingSafeEqual(ah, bh);
}

export async function POST(req: Request) {
  const provided = req.headers.get("INTERNAL_API_TOKEN") ?? "";
  const expected = serverEnv.internalApiToken;
  if (!expected || !timingSafeEquals(provided, expected)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let payload: IntakePayload | null = null;
  try {
    payload = (await req.json()) as IntakePayload;
  } catch {
    return NextResponse.json({ error: "invalid-json" }, { status: 400 });
  }

  const tenantSlug = String(payload?.tenant_slug ?? "").trim();
  const tenantIdInput = String(payload?.tenant_id ?? "").trim();
  const source = String(payload?.source ?? "").trim() || "intake";

  const email = String(payload?.contact?.email ?? "")
    .trim()
    .toLowerCase();

  if (!email) {
    return NextResponse.json({ error: "missing-contact-email" }, { status: 400 });
  }

  const admin = createSupabaseAdminClient() as unknown as SupabaseClient;

  let tenantId = "";
  if (tenantIdInput) {
    const { data: t, error } = await admin
      .from("tenants")
      .select("id")
      .eq("id", tenantIdInput)
      .maybeSingle();
    if (error || !t) {
      return NextResponse.json({ error: "tenant-not-found" }, { status: 404 });
    }
    tenantId = String((t as unknown as { id: string }).id);
  } else if (tenantSlug) {
    const tenant = await getTenantBySlug(tenantSlug);
    if (!tenant) return NextResponse.json({ error: "tenant-not-found" }, { status: 404 });
    tenantId = tenant.id;
  } else {
    return NextResponse.json({ error: "missing-tenant" }, { status: 400 });
  }

  const contactFirst = String(payload?.contact?.first_name ?? "").trim() || null;
  const contactLast = String(payload?.contact?.last_name ?? "").trim() || null;
  const contactPhone = String(payload?.contact?.phone ?? "").trim() || null;
  const contactTitle = String(payload?.contact?.title ?? "").trim() || null;

  const { data: existingContact } = await admin
    .from("contacts")
    .select("id, company_id")
    .eq("tenant_id", tenantId)
    .ilike("email", email)
    .maybeSingle();

  let companyId: string | null =
    (existingContact as unknown as { company_id?: string | null } | null)?.company_id ?? null;

  const companyDomain = String(payload?.company?.domain ?? "").trim().toLowerCase() || null;
  const companyName = String(payload?.company?.name ?? "").trim() || null;

  if (!companyId && (companyDomain || companyName)) {
    if (companyDomain) {
      const { data: existingCompany } = await admin
        .from("companies")
        .select("id")
        .eq("tenant_id", tenantId)
        .ilike("domain", companyDomain)
        .maybeSingle();
      companyId = (existingCompany as unknown as { id?: string } | null)?.id ?? null;
    }

    if (!companyId) {
      const { data: createdCompany, error: companyErr } = await admin
        .from("companies")
        .insert({
          tenant_id: tenantId,
          name: companyName ?? companyDomain ?? "Unknown",
          domain: companyDomain,
          industry: payload?.company?.industry ?? null,
          website: payload?.company?.website ?? null,
          phone: payload?.company?.phone ?? null,
        })
        .select("id")
        .single();

      if (companyErr || !createdCompany) {
        return NextResponse.json(
          { error: "company-insert-failed", detail: companyErr?.message },
          { status: 500 },
        );
      }
      companyId = String((createdCompany as unknown as { id: string }).id);
    }
  }

  let contactId: string = String(
    (existingContact as unknown as { id?: string } | null)?.id ?? "",
  );
  if (contactId) {
    await admin
      .from("contacts")
      .update({
        first_name: contactFirst,
        last_name: contactLast,
        phone: contactPhone,
        title: contactTitle,
        source,
        company_id: companyId,
      })
        .eq("id", contactId);
  } else {
    const { data: createdContact, error: contactErr } = await admin
      .from("contacts")
      .insert({
        tenant_id: tenantId,
        first_name: contactFirst,
        last_name: contactLast,
        email,
        phone: contactPhone,
        title: contactTitle,
        source,
        company_id: companyId,
        tags: [],
      })
      .select("id")
      .single();
    if (contactErr || !createdContact) {
      return NextResponse.json(
        { error: "contact-insert-failed", detail: contactErr?.message },
        { status: 500 },
      );
    }
    contactId = String((createdContact as unknown as { id: string }).id);
  }

  const { data: createdLead, error: leadErr } = await admin
    .from("leads")
    .insert({
      tenant_id: tenantId,
      contact_id: contactId,
      company_id: companyId,
      source,
      status: "qualifying",
      raw_payload: payload?.raw_payload ?? payload ?? null,
    })
    .select("id")
    .single();

  if (leadErr || !createdLead) {
    return NextResponse.json(
      { error: "lead-insert-failed", detail: leadErr?.message },
      { status: 500 },
    );
  }

  void runQualifierAndPersist(String((createdLead as unknown as { id: string }).id)).catch((err) => {
    console.error("runQualifierAndPersist failed", err);
  });

  return NextResponse.json(
    { ok: true, lead_id: (createdLead as unknown as { id: string }).id },
    { status: 202 },
  );
}

