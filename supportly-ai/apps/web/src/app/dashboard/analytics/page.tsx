import {
  BarChart3,
  Bot,
  Clock3,
  MessageSquare,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { KpiCard } from "@/components/dashboard/kpi-card";
import { PageHeader } from "@/components/dashboard/page-header";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Analytics"
        description="Understand support demand, AI effectiveness and service quality."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          title="Conversations"
          value="1,284"
          change="+12.5%"
          icon={MessageSquare}
        />

        <KpiCard
          title="AI resolution"
          value="87.4%"
          change="+4.2%"
          icon={Bot}
        />

        <KpiCard
          title="Avg. response"
          value="1.2 sec"
          change="-0.3 sec"
          icon={Clock3}
        />

        <KpiCard
          title="Escalation rate"
          value="12.6%"
          change="-2.1%"
          icon={BarChart3}
        />
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <Card className="rounded-2xl shadow-none">
          <CardHeader>
            <CardTitle className="text-base">
              Conversations over time
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex h-[320px] items-center justify-center rounded-xl border border-dashed bg-muted/20 text-sm text-muted-foreground">
              Line chart will appear here
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-none">
          <CardHeader>
            <CardTitle className="text-base">
              AI vs human resolution
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex h-[320px] items-center justify-center rounded-xl border border-dashed bg-muted/20 text-sm text-muted-foreground">
              Resolution chart will appear here
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}