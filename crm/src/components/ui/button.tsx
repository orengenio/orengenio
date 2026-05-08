import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost" | "secondary";

const base =
  "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)]/60 disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-[color:var(--color-accent)] text-white hover:bg-[color:var(--color-accent-hi)] shadow-[0_10px_30px_-10px_rgba(204,85,0,0.55)]",
  secondary:
    "bg-[color:var(--color-bg-2)] text-[color:var(--color-fg)] border border-[color:var(--color-border-strong)] hover:border-[color:var(--color-accent)]",
  ghost:
    "text-[color:var(--color-fg-dim)] hover:text-[color:var(--color-fg)] hover:bg-[color:var(--color-bg-2)]",
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}
