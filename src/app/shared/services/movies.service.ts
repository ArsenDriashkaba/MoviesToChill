import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../../environments/environment.development';
import {
  AddFavouriteResponse,
  MovieStates,
  Movie,
  MoviesType,
  Movies,
} from '../models/movie';
import {
  generateAddFavoriteMovieUrl,
  generateGetFavoriteMoviesUrl,
  generateGetMovieDetailUrl,
  generateGetMoviesAccountStatesUrl,
  generateGetMoviesUrl,
} from './api';
import { mappedImagesUrl } from './utils';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private readonly http: HttpClient) {}

  getMovies(pageIndex?: number, type?: MoviesType): Observable<Movies> {
    const page: number = pageIndex || 1;
    const moviesType: MoviesType = type || 'popular';

    return this.http.get<Movies>(generateGetMoviesUrl(moviesType, page)).pipe(
      map((data) => {
        return {
          ...data,
          results: data?.results?.map((movie) => mappedImagesUrl(movie)),
        };
      }),
    );
  }

  getMovieDetail(id: number | null): Observable<Movie> {
    return this.http
      .get<Movie>(generateGetMovieDetailUrl(id))
      .pipe(map((movie) => mappedImagesUrl(movie)));
  }

  changeMovieFavoriteState(
    movieId: number,
    state: boolean,
  ): Observable<AddFavouriteResponse> {
    return this.http.post<AddFavouriteResponse>(generateAddFavoriteMovieUrl(), {
      media_type: 'movie',
      media_id: movieId,
      favorite: state,
    });
  }

  getMovieAccountStates(id: number): Observable<MovieStates> {
    return this.http.get<MovieStates>(generateGetMoviesAccountStatesUrl(id));
  }

  getFavouriteMovies(): Observable<any> {
    return this.http
      .get<Movies>(generateGetFavoriteMoviesUrl())
      .pipe(
        map((data) => data?.results?.map((movie) => mappedImagesUrl(movie))),
      );
  }
}
