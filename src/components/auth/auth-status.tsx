"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/components/auth/auth-provider";
import { Button, IconButton } from "@/components/ui/button";
import { LogInIcon, LogOutIcon } from "@/components/ui/icons";
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
      <Link href="/login">
        <Button><LogInIcon size={16} />Log in</Button>
      </Link>
    );
  }

  return (
    <IconButton onClick={handleSignOut} aria-label="Sign out" title="Sign out">
      <LogOutIcon />
    </IconButton>
  );
}
