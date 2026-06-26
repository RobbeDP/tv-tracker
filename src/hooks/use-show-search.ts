import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { useDebounce } from "@/hooks/use-debounce";
import type { TvShow } from "@/lib/tmdb/types";

const DEBOUNCE_MS = 350;

async function fetchShows(query: string): Promise<TvShow[]> {
  const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);

  if (!response.ok) {
    throw new Error("Search request failed");
  }

  return response.json() as Promise<TvShow[]>;
}

export function useShowSearch() {
  const [input, setInput] = useState("");
  const query = useDebounce(input.trim(), DEBOUNCE_MS);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["show-search", query],
    queryFn: () => fetchShows(query),
    enabled: query.length > 0,
  });

  return {
    input,
    setInput,
    query,
    shows: data ?? [],
    isLoading,
    isError,
  };
}
