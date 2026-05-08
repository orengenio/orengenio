import "server-only";

import { getActiveTenant } from "@/lib/tenant";

function readString(obj: Record<string, unknown>, key: string): string | null {
  const value = obj[key];
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed ? trimmed : null;
}

function isHexColor(value: string | null): value is string {
  return value ? /^#[0-9a-f]{6}$/i.test(value) : false;
}

export async function TenantBranding() {
  const ctx = await getActiveTenant();
  if (!ctx) return null;

  const branding = (ctx.tenant.branding ?? {}) as Record<string, unknown>;
  const primary = readString(branding, "primary_color");
  const accent = readString(branding, "accent_color");

  const css: string[] = [];
  if (isHexColor(primary)) {
    css.push(`--color-navy: ${primary};`);
  }
  if (isHexColor(accent)) {
    css.push(`--color-accent: ${accent};`);
  }

  if (css.length === 0) return null;

  return <style>{`:root{${css.join("")}}`}</style>;
}

