import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Status =
  | "resolved"
  | "waiting"
  | "ai"
  | "human"
  | "error"
  | "syncing";

type StatusBadgeProps = {
  status: Status;
};

const styles: Record<Status, string> = {
  resolved:
    "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-400",

  waiting:
    "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-400",

  ai:
    "border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950 dark:text-indigo-400",

  human:
    "border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300",

  error:
    "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-400",

  syncing:
    "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-900 dark:bg-violet-950 dark:text-violet-400",
};

const labels: Record<Status, string> = {
  resolved: "Resolved",
  waiting: "Waiting",
  ai: "AI Handling",
  human: "Human",
  error: "Error",
  syncing: "Syncing",
};

export function StatusBadge({
  status,
}: StatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full px-2.5 py-1 font-medium",
        styles[status]
      )}
    >
      {labels[status]}
    </Badge>
  );
}