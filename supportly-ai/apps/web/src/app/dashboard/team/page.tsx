import {
  Plus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { EmptyState } from "@/components/dashboard/empty-state";
import { PageHeader } from "@/components/dashboard/page-header";

export default function TeamPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Team"
        description="Invite teammates and manage workspace roles and permissions."
        action={
          <Button className="rounded-xl">
            <Plus className="mr-2 size-4" />
            Invite member
          </Button>
        }
      />

      <EmptyState
        icon={Users}
        title="No teammates yet"
        description="Invite your support team and later assign Owner, Admin, Manager, Agent or Viewer permissions."
        actionLabel="Invite teammate"
      />
    </div>
  );
}