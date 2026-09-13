import {
  Plus,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { EmptyState } from "@/components/dashboard/empty-state";
import { PageHeader } from "@/components/dashboard/page-header";

export default function AutomationsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Automations"
        description="Create rules that automatically route, prioritize and escalate support conversations."
        action={
          <Button className="rounded-xl">
            <Plus className="mr-2 size-4" />
            New automation
          </Button>
        }
      />

      <EmptyState
        icon={Workflow}
        title="No automation rules"
        description="Create trigger, condition and action rules to automate repetitive support workflows."
        actionLabel="Create automation"
      />
    </div>
  );
}