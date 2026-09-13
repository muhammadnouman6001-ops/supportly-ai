import {
  BookOpen,
  FileText,
  Globe,
  HelpCircle,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { EmptyState } from "@/components/dashboard/empty-state";
import { PageHeader } from "@/components/dashboard/page-header";

const sourceTypes = [
  {
    title: "Website",
    description: "Crawl and index pages from your website.",
    icon: Globe,
  },
  {
    title: "Documents",
    description: "Upload PDF, DOCX, TXT, CSV or Markdown files.",
    icon: FileText,
  },
  {
    title: "FAQs",
    description: "Create structured questions and answers manually.",
    icon: HelpCircle,
  },
];

export default function KnowledgePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Knowledge"
        description="Manage the information your AI agents use to answer customer questions."
        action={
          <Button className="rounded-xl">
            <Plus className="mr-2 size-4" />
            Add source
          </Button>
        }
      />

      <section className="grid gap-4 md:grid-cols-3">
        {sourceTypes.map((source) => {
          const Icon = source.icon;

          return (
            <Card
              key={source.title}
              className="rounded-2xl shadow-none"
            >
              <CardContent className="p-5">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>

                <h2 className="mt-4 font-semibold">
                  {source.title}
                </h2>

                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  {source.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <EmptyState
        icon={BookOpen}
        title="Your knowledge library is empty"
        description="Add a website, document or FAQ collection. Supportly will later process and index this content for your AI agents."
        actionLabel="Add knowledge source"
      />
    </div>
  );
}