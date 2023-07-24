export interface Movie {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
  release_date: string;
  popularity: number;
  original_language: string;
  adult: boolean;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
}

export interface AddFavouriteResponse {
  success: boolean;
  status_code: number;
  status_message: string;
}

export interface MovieStates {
  id: number;
  favorite: boolean;
  rated: boolean;
  watchlist: boolean;
}

export enum MovieCategory {
  popular = 'popular',
  now_playing = 'now_playing',
  top_rated = 'top_rated',
  upcoming = 'upcoming',
}

export type MoviesType = keyof typeof MovieCategory;
