import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass rounded-[var(--radius-card)] p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]",
        className,
      )}
      {...props}
    />
  );
}
