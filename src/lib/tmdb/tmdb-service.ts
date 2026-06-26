import { tmdbFetch } from "./tmdb-client";
import type { TmdbTvResult, TmdbTvListResponse, TvShow } from "./types";

function toTvShow(result: TmdbTvResult): TvShow {
  return {
    id: result.id,
    name: result.name,
    overview: result.overview,
    posterPath: result.poster_path,
    backdropPath: result.backdrop_path,
    voteAverage: result.vote_average,
    firstAirYear: result.first_air_date
      ? result.first_air_date.slice(0, 4)
      : null,
  };
}

export async function searchTvShows(query: string): Promise<TvShow[]> {
  const data = await tmdbFetch<TmdbTvListResponse>("/search/tv", {
    query,
    include_adult: false,
    language: "en-US",
    page: 1,
  });

  return data.results.map(toTvShow);
}

export async function getTrendingTvShows(): Promise<TvShow[]> {
  const data = await tmdbFetch<TmdbTvListResponse>("/trending/tv/week", {
    language: "en-US",
  });

  return data.results.map(toTvShow);
}
