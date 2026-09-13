import { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

type KpiCardProps = {
  title: string;
  value: string;
  change?: string;
  icon: LucideIcon;
};

export function KpiCard({
  title,
  value,
  change,
  icon: Icon,
}: KpiCardProps) {
  return (
    <Card className="rounded-2xl shadow-none">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              {title}
            </p>

            <p className="mt-2 text-2xl font-semibold tracking-tight">
              {value}
            </p>

            {change && (
              <p className="mt-1.5 text-xs text-muted-foreground">
                {change}
              </p>
            )}
          </div>

          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="size-[18px]" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}