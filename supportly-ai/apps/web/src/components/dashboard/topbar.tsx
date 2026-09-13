import {
  Bell,
  HelpCircle,
  Search,
} from "lucide-react";

import { MobileSidebar } from "@/components/dashboard/mobile-sidebar";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-[68px] items-center gap-3 border-b bg-background/95 px-4 backdrop-blur md:px-6">
      {/* Mobile navigation */}
      <MobileSidebar />

      {/* Search */}
      <div className="flex flex-1 items-center">
        <div className="relative hidden w-full max-w-md md:block">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search Supportly..."
            className="h-10 rounded-xl bg-muted/40 pl-9"
          />
        </div>

        <div className="md:hidden">
          <p className="text-sm font-semibold">
            Supportly AI
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="hidden rounded-xl sm:inline-flex"
          aria-label="Help"
        >
          <HelpCircle className="size-[18px]" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-xl"
          aria-label="Notifications"
        >
          <Bell className="size-[18px]" />

          <span className="absolute right-2 top-2 size-2 rounded-full bg-primary" />
        </Button>

        <Button
          variant="ghost"
          className="ml-1 h-10 gap-2 rounded-xl px-2"
        >
          <Avatar className="size-8">
            <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
              UN
            </AvatarFallback>
          </Avatar>

          <div className="hidden text-left xl:block">
            <p className="text-xs font-medium">
              Usman
            </p>

            <p className="text-[11px] text-muted-foreground">
              Owner
            </p>
          </div>
        </Button>
      </div>
    </header>
  );
}