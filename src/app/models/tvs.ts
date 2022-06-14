import { Genres } from './genre';

export interface TvShows {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  number_of_seasons: number;
  episode_run_time: number;
  status: string;
  genres: Genres[];
}

export interface TvShowsDto {
  page: number;
  results: TvShows[];
  total_results: number;
  total_pages: number;
}

export interface TvShowsVideos {
  key: string;
  site: string;
}

export interface TvShowsVideosDto {
  id: number;
  results: TvShowsVideos[];
}

export interface TvShowsImages {
  backdrops: { file_path: string }[];
}

export interface TvShowsCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}

export const mapTvShowsToItem = (tvShows: TvShows) => {
  return {
    id: tvShows.id,
    title: tvShows.name,
    overview: tvShows.overview,
    backdrop_path: tvShows.backdrop_path,
    poster_path: tvShows.poster_path,
    vote_average: tvShows.vote_average,
    original_language: tvShows.original_language,
    original_title: tvShows.original_title,
    release_date: tvShows.release_date,
  };
};
