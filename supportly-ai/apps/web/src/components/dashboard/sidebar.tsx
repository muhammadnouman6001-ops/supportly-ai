"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, ChevronDown } from "lucide-react";

import { dashboardNavigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-64 shrink-0 border-r bg-card lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-[68px] items-center border-b px-5">
        <Link
          href="/dashboard"
          className="flex items-center gap-2.5 font-semibold"
        >
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Bot className="size-5" />
          </div>

          <span className="text-lg tracking-tight">
            Supportly
          </span>

          <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
            AI
          </span>
        </Link>
      </div>

      {/* Workspace */}
      <div className="p-3">
        <Button
          variant="outline"
          className="h-11 w-full justify-between rounded-xl px-3 font-medium"
        >
          <span className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-xs font-semibold text-primary">
              A
            </span>

            Acme Inc.
          </span>

          <ChevronDown className="size-4 text-muted-foreground" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
        {dashboardNavigation.map((item) => {
          const Icon = item.icon;

          const active =
            item.href === "/dashboard"
              ? pathname === item.href
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors",
                active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="size-[18px]" />

              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom area */}
      <div className="border-t p-4">
        <div className="rounded-xl bg-muted/60 p-3">
          <p className="text-xs font-medium">
            Supportly AI
          </p>

          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Development workspace
          </p>
        </div>
      </div>
    </aside>
  );
}