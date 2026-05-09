"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { env } from "@/lib/env";

export async function signInWithMagicLink(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const requestedNext = String(formData.get("next") ?? "").trim();
  const next =
    requestedNext && requestedNext.startsWith("/") && !requestedNext.startsWith("//")
      ? requestedNext
      : "";
  if (!email) {
    redirect("/login?error=missing-email");
  }
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${env.appUrl}/auth/callback${next ? `?next=${encodeURIComponent(next)}` : ""}`,
    },
  });
  if (error) {
    // Log server-side; surface a generic code to the URL so we never echo
    // raw Supabase / GoTrue messages back to the visitor.
    console.warn("[crm/login] magic-link failed:", error.message);
    redirect("/login?error=magic-link-failed");
  }
  redirect(`/login?sent=${encodeURIComponent(email)}${next ? `&next=${encodeURIComponent(next)}` : ""}`);
}

export async function signInWithGoogle(formData: FormData) {
  const requestedNext = String(formData.get("next") ?? "").trim();
  const next =
    requestedNext && requestedNext.startsWith("/") && !requestedNext.startsWith("//")
      ? requestedNext
      : "";
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${env.appUrl}/auth/callback${next ? `?next=${encodeURIComponent(next)}` : ""}`,
    },
  });
  if (error || !data?.url) {
    console.warn("[crm/login] google oauth failed:", error?.message ?? "no-url");
    redirect("/login?error=oauth-failed");
  }
  redirect(data.url);
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/login");
}
