import { FeatureGrid } from "@/components/landing/feature-grid";
import { LandingHero } from "@/components/landing/landing-hero";
import { TrendingPreview } from "@/components/landing/trending-preview";
import { SiteHeader } from "@/components/layout/site-header";
import { tmdbBackdropUrl } from "@/lib/tmdb/tmdb-client";
import { getTrendingTvShows } from "@/lib/tmdb/tmdb-service";
import type { TvShow } from "@/lib/tmdb/types";

export default async function Home() {
  let trending: TvShow[] = [];
  try {
    trending = await getTrendingTvShows();
  } catch {
    trending = [];
  }

  const featured = trending.find((show) => show.backdropPath) ?? null;
  const heroBackdropUrl = tmdbBackdropUrl(featured?.backdropPath ?? null);

  return (
    <div className="min-h-full bg-zinc-50 dark:bg-zinc-950">
      <SiteHeader />

      <main>
        <LandingHero
          backdropUrl={heroBackdropUrl}
          featuredName={featured?.name ?? null}
        />

        <section className="mx-auto max-w-6xl px-6 py-16">
          <FeatureGrid />
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <TrendingPreview shows={trending} />
        </section>
      </main>
    </div>
  );
}
