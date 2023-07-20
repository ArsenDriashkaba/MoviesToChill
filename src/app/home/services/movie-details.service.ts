import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  constructor(private readonly http: HttpClient) {}

  getMovieDetail(id: number | null): Observable<Movie> {
    const { moviesApiBaseUrl, moviesApiKey, moviesApiImagesBaseUrl } =
      environment;

    return this.http
      .get<Movie>(`${moviesApiBaseUrl}/movie/${id}?api_key=${moviesApiKey}`)
      .pipe(
        map((movie) => {
          return {
            ...movie,
            poster_path: `${moviesApiImagesBaseUrl}/${movie.poster_path}`,
            backdrop_path: `${moviesApiImagesBaseUrl}/${movie.backdrop_path}`,
          };
        }),
      );
  }
}
