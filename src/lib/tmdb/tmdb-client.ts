const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
const REVALIDATE_SECONDS = 60 * 60;

type QueryValue = string | number | boolean;

export async function tmdbFetch<T>(
  path: string,
  searchParams: Record<string, QueryValue> = {},
): Promise<T> {
  const url = new URL(`${TMDB_BASE_URL}${path}`);

  for (const [key, value] of Object.entries(searchParams)) {
    url.searchParams.set(key, String(value));
  }

  const response = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS },
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`TMDB request failed (${response.status}) for ${path}`);
  }

  return response.json() as Promise<T>;
}

export function tmdbPosterUrl(
  posterPath: string | null,
  size: "w342" | "w500" = "w342",
): string | null {
  return posterPath ? `${TMDB_IMAGE_BASE_URL}/${size}${posterPath}` : null;
}

export function tmdbBackdropUrl(
  backdropPath: string | null,
  size: "w780" | "w1280" | "original" = "w1280",
): string | null {
  return backdropPath ? `${TMDB_IMAGE_BASE_URL}/${size}${backdropPath}` : null;
}
