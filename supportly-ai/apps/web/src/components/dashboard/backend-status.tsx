"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Loader2,
  Server,
  XCircle,
} from "lucide-react";

import { getBackendHealth } from "@/lib/api";

type ConnectionState =
  | "checking"
  | "online"
  | "offline";

export function BackendStatus() {
  const [status, setStatus] =
    useState<ConnectionState>("checking");

  useEffect(() => {
    async function checkBackend() {
      try {
        const result = await getBackendHealth();

        if (result.status === "ok") {
          setStatus("online");
        } else {
          setStatus("offline");
        }
      } catch (error) {
        console.error(
          "Backend connection failed:",
          error
        );

        setStatus("offline");
      }
    }

    checkBackend();
  }, []);

  if (status === "checking") {
    return (
      <div className="flex items-center gap-2 rounded-xl border bg-card px-3 py-2 text-sm">
        <Loader2 className="size-4 animate-spin text-muted-foreground" />

        <span className="text-muted-foreground">
          Checking API...
        </span>
      </div>
    );
  }

  if (status === "offline") {
    return (
      <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-400">
        <XCircle className="size-4" />

        <span>
          API offline
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-400">
      <CheckCircle2 className="size-4" />

      <span>
        API connected
      </span>

      <Server className="ml-1 size-3.5 opacity-70" />
    </div>
  );
}