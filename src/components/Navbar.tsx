"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-foreground/5 bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-burnt-orange text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Oren<span className="text-burnt-orange">Gen</span>
          </span>
        </Link>

        {/* Links (Desktop) */}
        <div className="hidden items-center space-x-8 text-sm font-medium text-foreground/60 md:flex">
          <Link href="#products" className="transition-colors hover:text-burnt-orange">Products</Link>
          <Link href="#solutions" className="transition-colors hover:text-burnt-orange">Solutions</Link>
          <Link href="#docs" className="transition-colors hover:text-burnt-orange">Docs</Link>
          <Link href="#pricing" className="transition-colors hover:text-burnt-orange">Pricing</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5 transition-transform active:scale-95 hover:bg-foreground/10"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <Link 
            href="https://app.orengen.io"
            className="rounded-xl bg-foreground px-5 py-2 text-sm font-semibold text-background transition-transform active:scale-95 hover:opacity-90"
          >
            Console
          </Link>
        </div>
      </div>
    </nav>
  );
}
