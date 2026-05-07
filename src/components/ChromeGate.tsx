"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const HIDE_ON: ReadonlySet<string> = new Set(["/"]);

export function ChromeGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (HIDE_ON.has(pathname)) return null;
  return <>{children}</>;
}
