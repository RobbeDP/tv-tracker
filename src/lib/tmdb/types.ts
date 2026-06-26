export type TmdbTvResult = {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  first_air_date: string | null;
};

export type TmdbTvListResponse = {
  results: TmdbTvResult[];
};

export type TvShow = {
  id: number;
  name: string;
  overview: string;
  posterPath: string | null;
  backdropPath: string | null;
  voteAverage: number;
  firstAirYear: string | null;
};
