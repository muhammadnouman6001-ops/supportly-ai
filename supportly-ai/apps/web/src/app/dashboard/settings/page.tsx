import {
  Bell,
  Bot,
  Building2,
  Database,
  Lock,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { PageHeader } from "@/components/dashboard/page-header";

const settingsSections = [
  {
    title: "Workspace",
    description: "Manage workspace identity and general settings.",
    icon: Building2,
  },
  {
    title: "AI settings",
    description: "Configure workspace-level AI behavior and defaults.",
    icon: Bot,
  },
  {
    title: "Notifications",
    description: "Choose which product events should notify your team.",
    icon: Bell,
  },
  {
    title: "Security",
    description: "Manage authentication, sessions and security controls.",
    icon: Lock,
  },
  {
    title: "Data controls",
    description: "Manage retention, exports and deletion settings.",
    icon: Database,
  },
];

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Settings"
        description="Configure your workspace, AI behavior, security and data preferences."
      />

      <div className="space-y-3">
        {settingsSections.map((section) => {
          const Icon = section.icon;

          return (
            <Card
              key={section.title}
              className="cursor-pointer rounded-2xl shadow-none transition-colors hover:bg-muted/30"
            >
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-[18px]" />
                </div>

                <div>
                  <h2 className="font-medium">
                    {section.title}
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {section.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}