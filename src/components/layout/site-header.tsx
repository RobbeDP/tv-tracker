import Link from "next/link";

import { AuthStatus } from "@/components/auth/auth-status";
import { FilmIcon, SearchIcon } from "@/components/ui/icons";

function Brand() {
  return (
    <Link
      href="/"
      aria-label="TV Tracker home"
      className="flex items-center gap-2 text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
    >
      <FilmIcon size={28} />
      <span className="text-xl font-semibold tracking-tight">TV Tracker</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Brand />
        <div className="flex items-center gap-2">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
          >
            <SearchIcon size={16} />
            Search
          </Link>
          <AuthStatus />
        </div>
      </div>
    </header>
  );
}
