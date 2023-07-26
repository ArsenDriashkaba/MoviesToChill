import { Component, OnInit } from '@angular/core';
import { filter, Observable, switchMap, tap } from 'rxjs';
import { AddFavouriteResponse, MovieStates, Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { data } from 'autoprefixer';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
})
export class MovieDetailsPageComponent implements OnInit {
  id: number = Number(this.route.snapshot.params['id']);
  movieDetail$: Observable<Movie> = new Observable<Movie>();
  movieStates$: Observable<MovieStates> = new Observable<MovieStates>();

  pageEventResult!: AddFavouriteResponse;
  changeBtnIsLoading: boolean = false;

  constructor(
    private readonly moviesService: MoviesService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.movieDetail$ = this.moviesService
      .getMovieDetail(this.id)
      .pipe(filter((data) => !!data));

    this.movieStates$ = this.getMovieAccountStates(this.id);
  }

  private getMovieAccountStates(id: number) {
    return this.moviesService.getMovieAccountStates(id);
  }

  handleFavoriteState(state: boolean) {
    this.changeBtnIsLoading = true;

    this.movieStates$ = this.moviesService
      .changeMovieFavoriteState(this.id, state)
      .pipe(
        tap((data) => (this.pageEventResult = data)),
        switchMap((_) => this.getMovieAccountStates(this.id)),
        tap((_) => (this.changeBtnIsLoading = false)),
      );
  }

  protected readonly data = data;
}
