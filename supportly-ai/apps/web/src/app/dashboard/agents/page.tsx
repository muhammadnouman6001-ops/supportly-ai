import { Bot, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/dashboard/empty-state";
import { PageHeader } from "@/components/dashboard/page-header";

export default function AgentsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="AI Agents"
        description="Create and manage AI support agents for your workspace."
        action={
          <Button className="rounded-xl">
            <Plus className="mr-2 size-4" />
            Create agent
          </Button>
        }
      />

      <EmptyState
        icon={Bot}
        title="No AI agents yet"
        description="Create your first support agent and configure its personality, knowledge sources and response behavior."
        actionLabel="Create your first agent"
      />
    </div>
  );
}