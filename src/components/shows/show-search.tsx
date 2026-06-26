"use client";

import { SearchBar } from "@/components/shows/search-bar";
import { ShowGrid } from "@/components/shows/show-grid";
import { CenteredLoader } from "@/components/ui/spinner";
import { useShowSearch } from "@/hooks/use-show-search";

export function ShowSearch() {
  const { input, setInput, query, shows, isLoading, isError } = useShowSearch();

  return (
    <div className="space-y-8">
      <SearchBar value={input} onChange={setInput} />

      {!query ? (
        <p className="py-12 text-center text-sm text-zinc-500">
          Search for a TV show to get started.
        </p>
      ) : isLoading ? (
        <div className="py-12">
          <CenteredLoader />
        </div>
      ) : isError ? (
        <p className="rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:bg-amber-950 dark:text-amber-200">
          Couldn&apos;t load shows. Please try again.
        </p>
      ) : (
        <ShowGrid shows={shows} />
      )}
    </div>
  );
}
