import {
  Bot,
  Clock3,
  MessagesSquare,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { KpiCard } from "@/components/dashboard/kpi-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge } from "@/components/dashboard/status-badge";

const conversations = [
  {
    customer: "Alex Morgan",
    topic: "Refund policy",
    status: "ai" as const,
    confidence: "94%",
  },
  {
    customer: "Sarah Lee",
    topic: "Account access",
    status: "resolved" as const,
    confidence: "91%",
  },
  {
    customer: "James Carter",
    topic: "Pricing",
    status: "human" as const,
    confidence: "54%",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <PageHeader
        title="Overview"
        description="Monitor your AI support performance, conversations and knowledge health."
        action={
          <Button className="rounded-xl">
            <Bot className="mr-2 size-4" />
            Create agent
          </Button>
        }
      />

      {/* KPI cards */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          title="Conversations"
          value="1,284"
          change="+12.5% from last month"
          icon={MessagesSquare}
        />

        <KpiCard
          title="AI resolution"
          value="87.4%"
          change="+4.2% from last month"
          icon={Sparkles}
        />

        <KpiCard
          title="Avg. response time"
          value="1.2 sec"
          change="0.3 sec faster"
          icon={Clock3}
        />

        <KpiCard
          title="Active agents"
          value="4"
          change="All systems operational"
          icon={Bot}
        />
      </section>

      {/* Main analytics section */}
      <section className="grid gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
        {/* Conversation activity */}
        <Card className="min-h-[360px] rounded-2xl shadow-none">
          <CardHeader>
            <CardTitle className="text-base">
              Conversation activity
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex h-[260px] items-center justify-center rounded-xl border border-dashed bg-muted/20">
              <p className="text-sm text-muted-foreground">
                Conversation chart will appear here
              </p>
            </div>
          </CardContent>
        </Card>

        {/* AI performance */}
        <Card className="min-h-[360px] rounded-2xl shadow-none">
          <CardHeader>
            <CardTitle className="text-base">
              AI performance
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex h-[260px] items-center justify-center">
              <div className="text-center">
                <div className="mx-auto flex size-36 items-center justify-center rounded-full border-[12px] border-primary/15">
                  <div>
                    <p className="text-3xl font-semibold">
                      87%
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      resolved by AI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Recent conversations */}
      <Card className="rounded-2xl shadow-none">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base">
            Recent conversations
          </CardTitle>

          <Button
            variant="ghost"
            size="sm"
          >
            View all
          </Button>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto rounded-xl border">
          <div className="min-w-[720px]">
            {/* Table header */}
            <div className="grid grid-cols-[1.4fr_1fr_1fr_120px] border-b bg-muted/40 px-4 py-3 text-xs font-medium text-muted-foreground">
              <span>Customer</span>
              <span>Topic</span>
              <span>Status</span>
              <span>Confidence</span>
            </div>
            </div>

            {/* Table rows */}
            {conversations.map((conversation) => (
              <div
                key={conversation.customer}
                className="grid grid-cols-[1.4fr_1fr_1fr_120px] items-center border-b px-4 py-4 text-sm last:border-b-0"
              >
                <span className="font-medium">
                  {conversation.customer}
                </span>

                <span className="text-muted-foreground">
                  {conversation.topic}
                </span>

                <span>
                  <StatusBadge status={conversation.status} />
                </span>

                <span className="text-muted-foreground">
                  {conversation.confidence}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}