import Link from "next/link";
import type { ReactNode } from "react";

type AuthCardFooter = {
  prompt: string;
  href: string;
  linkLabel: string;
};

type AuthCardProps = {
  title: string;
  description: string;
  children: ReactNode;
  footer: AuthCardFooter;
};

export function AuthCard({ title, description, children, footer }: AuthCardProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-16 dark:bg-zinc-950">
      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="text-sm font-medium uppercase tracking-widest text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
        >
          tv-tracker
        </Link>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <div className="mt-8">{children}</div>
        <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
          {footer.prompt}{" "}
          <Link
            href={footer.href}
            className="font-medium text-zinc-900 hover:underline dark:text-zinc-50"
          >
            {footer.linkLabel}
          </Link>
        </p>
      </div>
    </div>
  );
}
