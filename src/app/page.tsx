import { AuthStatus } from "@/components/auth/auth-status";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-24 dark:bg-zinc-950">
      <main className="w-full max-w-lg text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">tv-tracker</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          TV Tracker
        </h1>
        <div className="mt-8">
          <AuthStatus />
        </div>
      </main>
    </div>
  );
}
