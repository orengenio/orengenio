import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createLead } from "../actions";

type SearchParams = Promise<{ error?: string }>;

export default async function NewLeadPage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">New lead</h1>
        <p className="mt-1 text-sm text-[color:var(--color-fg-dim)]">
          Create a lead manually (intake API is preferred for automation).
        </p>
      </div>

      <Card>
        <h2 className="text-lg font-semibold">Contact</h2>
        <form action={createLead} className="mt-6 grid gap-4 md:grid-cols-2">
          <Input name="first_name" placeholder="First name" />
          <Input name="last_name" placeholder="Last name" />
          <Input name="email" type="email" placeholder="Email" />
          <Input name="phone" placeholder="Phone" />
          <Input name="title" placeholder="Title (optional)" />
          <Input name="source" defaultValue="manual" placeholder="Source" />

          <div className="md:col-span-2 mt-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Company
            </h3>
          </div>
          <Input name="company_name" placeholder="Company name" />
          <Input name="company_domain" placeholder="Domain (e.g. acme.com)" />

          {sp.error ? (
            <p className="md:col-span-2 text-sm text-red-300">{decodeURIComponent(sp.error)}</p>
          ) : null}

          <div className="md:col-span-2 flex items-center justify-end gap-3 pt-2">
            <Button type="submit">Create</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

