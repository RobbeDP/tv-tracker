"use client";

import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";

import { useAuth } from "@/components/auth/auth-provider";
import { CenteredLoader } from "@/components/ui/spinner";

/**
 * Guards routes that should only be reachable while signed out
 * (login, register). Authenticated users are redirected home.
 */
export function RequireAnonymous({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/");
    }
  }, [loading, user, router]);

  if (loading || user) {
    return <CenteredLoader />;
  }

  return <>{children}</>;
}
