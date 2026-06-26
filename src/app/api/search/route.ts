import type { NextRequest } from "next/server";

import { searchTvShows } from "@/lib/tmdb/tmdb-service";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim() ?? "";

  if (!query) {
    return Response.json([]);
  }

  try {
    const shows = await searchTvShows(query);
    return Response.json(shows);
  } catch {
    return Response.json(
      { error: "Failed to search TV shows." },
      { status: 502 },
    );
  }
}
