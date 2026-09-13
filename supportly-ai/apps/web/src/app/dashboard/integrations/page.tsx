import {
  Mail,
  MessageSquareText,
  Plug,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { PageHeader } from "@/components/dashboard/page-header";

const integrations = [
  {
    name: "Slack",
    description: "Send support alerts and escalation notifications.",
    icon: MessageSquareText,
  },
  {
    name: "Email",
    description: "Send email notifications for support events.",
    icon: Mail,
  },
  {
    name: "More integrations",
    description: "Additional business integrations will be available later.",
    icon: Plug,
  },
];

export default function IntegrationsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Integrations"
        description="Connect Supportly to the tools your team already uses."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {integrations.map((integration) => {
          const Icon = integration.icon;

          return (
            <Card
              key={integration.name}
              className="rounded-2xl shadow-none"
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl border bg-background">
                    <Icon className="size-5" />
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg"
                  >
                    Coming soon
                  </Button>
                </div>

                <h2 className="mt-5 font-semibold">
                  {integration.name}
                </h2>

                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  {integration.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </div>
  );
}