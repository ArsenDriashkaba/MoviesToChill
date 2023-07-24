import { MoviesType } from '../models/movie';
import { environment as env } from '../../../environments/environment.development';

export const generateGetMoviesUrl = (
  moviesType: MoviesType,
  page: number,
): string =>
  `${env.moviesApiBaseUrl}/movie/${moviesType}?api_key=${env.moviesApiKey}&page=${page}`;

export const generateGetMovieDetailUrl = (movieId: number | null): string =>
  `${env.moviesApiBaseUrl}/movie/${movieId}?api_key=${env.moviesApiKey}`;

export const generateAddFavoriteMovieUrl = (): string =>
  `${env.moviesApiBaseUrl}/account/${env.moviesApiAccountId}/favorite?api_key=${env.moviesApiKey}`;

export const generateGetFavoriteMoviesUrl = (): string =>
  `${env.moviesApiBaseUrl}/account/${env.moviesApiAccountId}/favorite/movies?api_key=${env.moviesApiKey}`;

export const generateGetMoviesAccountStatesUrl = (movieId: number): string =>
  `${env.moviesApiBaseUrl}/movie/${movieId}/account_states`;
