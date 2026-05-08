"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

type PostgrestError = { message: string; code?: string } | null;
type PostgrestSingle<T> = Promise<{ data: T | null; error: PostgrestError }>;

type InviteRow = {
  id: string;
  tenant_id: string;
  email: string | null;
  role: "admin" | "member";
  token: string;
  expires_at: string;
  accepted_at: string | null;
};

type TenantMemberInsert = {
  tenant_id: string;
  user_id: string;
  role: "admin" | "member";
};

export async function acceptInvite(token: string) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/login?next=${encodeURIComponent(`/invites/${token}`)}`);
  }

  const admin = createSupabaseAdminClient() as unknown as {
    from: (table: string) => unknown;
  };

  const invites = admin.from("invites") as unknown as {
    select: (cols: string) => {
      eq: (col: string, value: string) => { maybeSingle: () => PostgrestSingle<InviteRow> };
    };
    update: (values: { accepted_at: string }) => {
      eq: (col: string, value: string) => { is: (col: string, value: null) => PostgrestSingle<InviteRow> };
    };
  };

  const tenantMembers = admin.from("tenant_members") as unknown as {
    insert: (row: TenantMemberInsert) => Promise<{ error: PostgrestError }>;
  };

  const { data: invite, error } = await invites
    .select("id, tenant_id, email, role, token, expires_at, accepted_at")
    .eq("token", token)
    .maybeSingle();

  if (error || !invite) {
    redirect(`/invites/${encodeURIComponent(token)}?error=invalid-invite`);
  }

  const row = invite as InviteRow;
  if (row.accepted_at) {
    redirect(`/invites/${encodeURIComponent(token)}?error=already-accepted`);
  }

  if (new Date(row.expires_at).getTime() <= Date.now()) {
    redirect(`/invites/${encodeURIComponent(token)}?error=expired`);
  }

  const inviteEmail = (row.email ?? "").trim().toLowerCase();
  if (inviteEmail && (user.email ?? "").trim().toLowerCase() !== inviteEmail) {
    redirect(`/invites/${encodeURIComponent(token)}?error=email-mismatch`);
  }

  const { error: insertError } = await tenantMembers.insert({
    tenant_id: row.tenant_id,
    user_id: user.id,
    role: row.role,
  });

  if (insertError && insertError.code !== "23505") {
    redirect(`/invites/${encodeURIComponent(token)}?error=${encodeURIComponent(insertError.message)}`);
  }

  const { error: acceptError } = await invites
    .update({ accepted_at: new Date().toISOString() })
    .eq("id", row.id)
    .is("accepted_at", null);

  if (acceptError) {
    redirect(`/invites/${encodeURIComponent(token)}?error=${encodeURIComponent(acceptError.message)}`);
  }

  redirect("/dashboard?invite=accepted");
}

