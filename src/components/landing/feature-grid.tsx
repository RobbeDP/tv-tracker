import { ListIcon, SearchIcon, TrendingUpIcon } from "@/components/ui/icons";

const features = [
  {
    icon: SearchIcon,
    title: "Search the catalog",
    description:
      "Find any series instantly with fast search across a huge catalog.",
  },
  {
    icon: ListIcon,
    title: "Build your watchlist",
    description:
      "Keep track of what you're watching and line up what to start next.",
  },
  {
    icon: TrendingUpIcon,
    title: "Discover what's trending",
    description:
      "See the shows everyone is talking about and never miss a hit.",
  },
];

export function FeatureGrid() {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
        Everything you need to keep watching
      </h2>
      <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
        A focused, no-nonsense way to organize your shows.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="inline-flex rounded-lg bg-zinc-100 p-3 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
