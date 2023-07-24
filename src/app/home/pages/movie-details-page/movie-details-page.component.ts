import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AddFavouriteResponse, MovieStates, Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
})
export class MovieDetailsPageComponent implements OnInit, OnDestroy {
  id?: number = this.route.snapshot.params['id'];
  movieDetail!: Movie;
  movieStates!: MovieStates;
  pageEventResult$: Observable<AddFavouriteResponse> =
    new Observable<AddFavouriteResponse>();

  movieStatesSubscription$!: Subscription;
  movieDetailSubscription$!: Subscription;

  constructor(
    private readonly moviesService: MoviesService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.movieDetailSubscription$ = this.moviesService
      .getMovieDetail(Number(this.id))
      .subscribe((data) => {
        this.movieDetail = data;
        this.movieStatesSubscription$ = this.moviesService
          .getMovieAccountStates(this.movieDetail?.id)
          .subscribe((data) => (this.movieStates = data));
      });
  }
  ngOnDestroy() {
    this.movieDetailSubscription$.unsubscribe();
    this.movieStatesSubscription$.unsubscribe();
  }

  handleFavoriteState(state: boolean) {
    this.pageEventResult$ = this.moviesService.changeMovieFavoriteState(
      this.movieDetail.id,
      state,
    );
  }
}
