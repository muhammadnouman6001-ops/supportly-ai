import {
  Inbox,
  Search,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { EmptyState } from "@/components/dashboard/empty-state";
import { PageHeader } from "@/components/dashboard/page-header";

export default function InboxPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Inbox"
        description="Manage AI and human customer support conversations from one workspace."
      />

      <Card className="overflow-hidden rounded-2xl shadow-none">
        <CardContent className="p-0">
          <div className="grid min-h-[620px] md:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)_320px]">
            {/* Conversation list */}
            <aside className="border-b md:border-b-0 md:border-r">
              <div className="border-b p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    placeholder="Search conversations..."
                    className="rounded-xl pl-9"
                  />
                </div>
              </div>

              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  No conversations yet.
                </p>
              </div>
            </aside>

            {/* Conversation */}
            <section className="flex items-center justify-center border-r">
              <EmptyState
                icon={Inbox}
                title="Select a conversation"
                description="When customer conversations arrive, select one here to view messages and respond."
              />
            </section>

            {/* Customer context */}
            <aside className="hidden p-5 xl:block">
              <p className="text-sm font-medium">
                Customer
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Customer information and AI context will appear here.
              </p>
            </aside>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}