import Link from "next/link";

export function BrandMark({ tenantName }: { tenantName?: string }) {
  return (
    <Link
      href="/"
      className="inline-flex items-baseline gap-2 text-sm font-semibold tracking-[0.2em] uppercase"
    >
      <span className="text-[color:var(--color-fg)]">OrenGen</span>
      <span className="text-[color:var(--color-accent)]">CRM</span>
      {tenantName ? (
        <span className="ml-3 text-[color:var(--color-fg-muted)] tracking-normal normal-case">
          / {tenantName}
        </span>
      ) : null}
    </Link>
  );
}
