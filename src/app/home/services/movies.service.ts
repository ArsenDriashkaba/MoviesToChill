import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Movie, MovieResponse } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private readonly http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    const { moviesApiBaseUrl, moviesApiKey } = environment;

    return this.http
      .get<MovieResponse>(
        `${moviesApiBaseUrl}/movie/popular?api_key=${moviesApiKey}`,
      )
      .pipe(map((data) => data?.results));
  }
}
