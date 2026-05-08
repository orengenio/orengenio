import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getActiveTenant } from "@/lib/tenant";
import { updateBranding } from "./actions";

type SearchParams = Promise<{ error?: string; saved?: string }>;

function readString(obj: Record<string, unknown>, key: string): string {
  const value = obj[key];
  return typeof value === "string" ? value : "";
}

function readBool(obj: Record<string, unknown>, key: string): boolean {
  return obj[key] === true;
}

export default async function BrandingSettingsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const ctx = await getActiveTenant();
  if (!ctx) redirect("/login");
  if (ctx.role !== "owner" && ctx.role !== "admin") {
    redirect("/settings?error=forbidden");
  }

  const branding = (ctx.tenant.branding ?? {}) as Record<string, unknown>;
  const { error, saved } = await searchParams;

  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Settings
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Branding</h1>
          <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
            Customize your workspace colors and logo.
          </p>
        </div>
        <Link
          href="/settings"
          className="text-sm text-[color:var(--color-fg-dim)] underline hover:text-[color:var(--color-fg)]"
        >
          Back to Settings
        </Link>
      </div>

      <Card>
        <h2 className="text-lg font-semibold">Workspace theme</h2>
        <p className="mt-2 text-sm text-[color:var(--color-fg-dim)]">
          Colors should be 6-digit hex (for example <code>#cc5500</code>). Logo URL must be{" "}
          <code>https</code>.
        </p>

        {saved ? (
          <div className="mt-6 rounded-lg border border-[color:var(--color-accent)]/40 bg-[color:var(--color-accent)]/10 px-4 py-3 text-sm">
            Branding updated.
          </div>
        ) : null}
        {error ? (
          <div className="mt-6 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        ) : null}

        <form
          action={async (formData: FormData) => {
            "use server";
            await updateBranding({
              logoUrl: String(formData.get("logoUrl") ?? ""),
              primaryColor: String(formData.get("primaryColor") ?? ""),
              accentColor: String(formData.get("accentColor") ?? ""),
              darkModeDefault: formData.get("darkModeDefault") === "on",
            });
          }}
          className="mt-8 space-y-6"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="logoUrl" className="text-sm font-medium">
                Logo URL
              </label>
              <Input
                id="logoUrl"
                name="logoUrl"
                type="url"
                inputMode="url"
                placeholder="https://cdn.example.com/logo.png"
                defaultValue={readString(branding, "logo_url")}
              />
              <p className="text-xs text-[color:var(--color-fg-muted)]">
                Optional. Used in the header and future emails.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="primaryColor" className="text-sm font-medium">
                Primary color
              </label>
              <Input
                id="primaryColor"
                name="primaryColor"
                type="text"
                placeholder="#003366"
                defaultValue={readString(branding, "primary_color")}
              />
              <p className="text-xs text-[color:var(--color-fg-muted)]">
                Optional. Used for secondary accents.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="accentColor" className="text-sm font-medium">
                Accent color
              </label>
              <Input
                id="accentColor"
                name="accentColor"
                type="text"
                placeholder="#cc5500"
                defaultValue={readString(branding, "accent_color")}
              />
              <p className="text-xs text-[color:var(--color-fg-muted)]">
                Applied to buttons, highlights, and links.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Default theme</label>
              <label className="flex items-center gap-3 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] px-4 py-3 text-sm">
                <input
                  type="checkbox"
                  name="darkModeDefault"
                  defaultChecked={readBool(branding, "dark_mode_default")}
                />
                Dark mode by default
              </label>
              <p className="text-xs text-[color:var(--color-fg-muted)]">
                Stored for future UI preferences (not yet used everywhere).
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3">
            <Button type="submit">Save branding</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

