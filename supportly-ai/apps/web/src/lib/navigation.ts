import {
  LayoutDashboard,
  Bot,
  BookOpen,
  Inbox,
  BarChart3,
  Workflow,
  Plug,
  Users,
  Settings,
} from "lucide-react";

export const dashboardNavigation = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Agents",
    href: "/dashboard/agents",
    icon: Bot,
  },
  {
    name: "Knowledge",
    href: "/dashboard/knowledge",
    icon: BookOpen,
  },
  {
    name: "Inbox",
    href: "/dashboard/inbox",
    icon: Inbox,
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    name: "Automations",
    href: "/dashboard/automations",
    icon: Workflow,
  },
  {
    name: "Integrations",
    href: "/dashboard/integrations",
    icon: Plug,
  },
  {
    name: "Team",
    href: "/dashboard/team",
    icon: Users,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];