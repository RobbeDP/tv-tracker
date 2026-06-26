import { SiteHeader } from "@/components/layout/site-header";
import { ShowSearch } from "@/components/shows/show-search";

export default function SearchPage() {
  return (
    <div className="min-h-full bg-zinc-50 dark:bg-zinc-950">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-6 py-8">
        <ShowSearch />
      </main>
    </div>
  );
}
