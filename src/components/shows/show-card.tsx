import Image from "next/image";

import { tmdbPosterUrl } from "@/lib/tmdb/tmdb-client";
import type { TvShow } from "@/lib/tmdb/types";

export function ShowCard({ show }: { show: TvShow }) {
  const posterUrl = tmdbPosterUrl(show.posterPath);

  return (
    <article className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative aspect-[2/3] bg-zinc-100 dark:bg-zinc-800">
        {posterUrl ? (
          <Image
            src={posterUrl}
            alt={`${show.name} poster`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-4 text-center text-sm text-zinc-400">
            {show.name}
          </div>
        )}
      </div>
      <div className="space-y-1 p-3">
        <h3 className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-50">
          {show.name}
        </h3>
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span>{show.firstAirYear ?? "—"}</span>
          {show.voteAverage > 0 ? (
            <span aria-label="Average rating">★ {show.voteAverage.toFixed(1)}</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
