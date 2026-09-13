"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  ChevronDown,
  Menu,
} from "lucide-react";

import { dashboardNavigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileSidebar() {
  const pathname = usePathname();

  return (
    <Sheet>
      {/* Mobile menu trigger */}
      <SheetTrigger
        aria-label="Open navigation"
        className="
          inline-flex size-10 items-center justify-center
          rounded-xl
          text-foreground
          transition-colors
          hover:bg-muted
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-ring
          lg:hidden
        "
      >
        <Menu className="size-5" />
      </SheetTrigger>

      {/* Mobile sidebar */}
      <SheetContent
        side="left"
        className="w-[290px] p-0"
      >
        {/* Logo */}
        <SheetHeader className="border-b px-5 py-4">
          <SheetTitle className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Bot className="size-5" />
            </div>

            <span>Supportly</span>

            <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
              AI
            </span>
          </SheetTitle>
        </SheetHeader>

        {/* Workspace selector */}
        <div className="p-3">
          <Button
            variant="outline"
            className="h-11 w-full justify-between rounded-xl px-3"
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
        <nav className="space-y-1 px-3 py-2">
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

                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}