import Image from "next/image";
import Link from "next/link";

type LandingHeroProps = {
  backdropUrl: string | null;
  featuredName: string | null;
};

export function LandingHero({ backdropUrl, featuredName }: LandingHeroProps) {
  return (
    <section className="relative overflow-hidden bg-zinc-950">
      {backdropUrl ? (
        <Image
          src={backdropUrl}
          alt={featuredName ? `${featuredName} backdrop` : "Featured TV show"}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-zinc-950/50" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-300">
          Your personal TV companion
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Track every show you watch, all in one place.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-300">
          Keep up with every series you love. Search thousands of shows, build
          your watchlist, and always know what to watch next.
        </p>
        <div className="mt-8">
          <Link
            href="/search"
            className="group inline-flex items-center gap-2 text-base font-medium text-white transition-colors hover:text-zinc-300"
          >
            Browse shows
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
