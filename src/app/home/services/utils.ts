import { Movie } from '../models/movie';
import { environment as env } from '../../../environments/environment.development';

export const mappedImagesUrl = (movie: Movie) => {
  return {
    ...movie,
    poster_path: `${env.moviesApiImagesBaseUrl}/${movie.poster_path}`,
    backdrop_path: `${env.moviesApiImagesBaseUrl}/${movie.backdrop_path}`,
  };
};
