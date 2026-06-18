"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/components/auth/auth-provider";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export function AuthStatus() {
  const router = useRouter();
  const { user, loading, signOut } = useAuth();

  async function handleSignOut() {
    await signOut();
    router.refresh();
  }

  if (loading) {
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center gap-3">
        <Link href="/login">
          <Button variant="secondary">Sign in</Button>
        </Link>
        <Link href="/register">
          <Button>Create account</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Signed in as{" "}
        <span className="font-medium text-zinc-900 dark:text-zinc-50">
          {user.email}
        </span>
      </p>
      <Button variant="secondary" onClick={handleSignOut}>
        Sign out
      </Button>
    </div>
  );
}
