export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  status: string;
  genres: Genres[];
}

export interface MovieDto {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface Genres {
  id: number;
  name: string;
}

export interface MoviesVideos {
  key: string;
  site: string;
}

export interface MoviesVideosDto {
  id: number;
  results: MoviesVideos[];
}

export interface MoviesImages {
  backdrops: { file_path: string }[];
}

export interface MoviesCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}

export const mapTvShowsToItem = (movie: Movie) => {
  return {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    backdrop_path: movie.backdrop_path,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
    original_language: movie.original_language,
    original_title: movie.original_title,
    release_date: movie.release_date,
  };
};
