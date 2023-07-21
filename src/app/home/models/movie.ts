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

export interface MovieResponse {
  page: number;
  results: Movie[];
}
