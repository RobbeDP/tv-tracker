import Image from "next/image";
import Link from "next/link";

import { tmdbBackdropUrl } from "@/lib/tmdb/tmdb-client";
import type { TvShow } from "@/lib/tmdb/types";

export function TrendingPreview({ shows }: { shows: TvShow[] }) {
  const featured = shows.filter((show) => show.backdropPath).slice(0, 6);

  if (featured.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
          Trending this week
        </h2>
        <Link
          href="/search"
          className="shrink-0 text-sm font-medium text-zinc-700 hover:underline dark:text-zinc-300"
        >
          Search all shows →
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((show) => {
          const backdropUrl = tmdbBackdropUrl(show.backdropPath, "w780");

          if (!backdropUrl) {
            return null;
          }

          return (
            <article
              key={show.id}
              className="group relative aspect-video overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800"
            >
              <Image
                src={backdropUrl}
                alt={`${show.name} backdrop`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <h3 className="absolute inset-x-4 bottom-3 truncate text-sm font-semibold text-white">
                {show.name}
              </h3>
            </article>
          );
        })}
      </div>
    </div>
  );
}
