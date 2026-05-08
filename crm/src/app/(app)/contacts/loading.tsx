import { Card } from "@/components/ui/card";

export default function ContactsLoading() {
  return (
    <div className="space-y-8">
      <div>
        <div className="h-8 w-40 rounded bg-[color:var(--color-bg-2)]" />
        <div className="mt-3 h-4 w-64 rounded bg-[color:var(--color-bg-2)]" />
      </div>
      <Card>
        <div className="space-y-3">
          <div className="h-10 w-full rounded bg-[color:var(--color-bg-2)]" />
          <div className="h-12 w-full rounded bg-[color:var(--color-bg-2)]" />
          <div className="h-12 w-full rounded bg-[color:var(--color-bg-2)]" />
          <div className="h-12 w-full rounded bg-[color:var(--color-bg-2)]" />
        </div>
      </Card>
    </div>
  );
}

