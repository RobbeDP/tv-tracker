import { ShowCard } from "@/components/shows/show-card";
import type { TvShow } from "@/lib/tmdb/types";

export function ShowGrid({ shows }: { shows: TvShow[] }) {
  if (shows.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-zinc-500">
        No shows match your search.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {shows.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
}
