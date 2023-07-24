import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Movie, MoviesResponse, MoviesType } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private readonly http: HttpClient) {}

  getMovies(pageIndex?: number, type?: MoviesType): Observable<Movie[]> {
    const { moviesApiBaseUrl, moviesApiKey, moviesApiImagesBaseUrl } =
      environment;
    const page: number = pageIndex || 1;
    const moviesType: MoviesType = type || 'popular';

    return this.http
      .get<MoviesResponse>(
        `${moviesApiBaseUrl}/movie/${moviesType}?api_key=${moviesApiKey}&page=${page}`,
      )
      .pipe(
        map(
          (data) =>
            data?.results?.map((movie) => {
              return {
                ...movie,
                poster_path: `${moviesApiImagesBaseUrl}/${movie.poster_path}`,
              };
            }),
        ),
      );
  }
}
