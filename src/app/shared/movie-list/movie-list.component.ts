import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Movie, MovieCategory, MoviesType } from '../../home/models/movie';
import { MoviesService } from '../../home/services/movies.service';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  standalone: true,
  imports: [
    MatPaginatorModule,
    CommonModule,
    RouterModule,
    MatProgressBarModule,
  ],
})
export class MovieListComponent implements OnInit, OnDestroy {
  private currentPath: MoviesType = MovieCategory.popular;
  private routeSubscription: Subscription = new Subscription();

  pageSize: number = 20;
  pageIndex: number = 1;
  length: number = 1000;
  movies$: Observable<Movie[]> = new Observable<Movie[]>();

  hidePageSize: boolean = false;
  showFirstLastButtons: boolean = true;
  disabled: boolean = false;

  pageEvent!: PageEvent;

  constructor(
    private readonly moviesService: MoviesService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.url.subscribe(
      (segments) => (this.currentPath = segments[0]?.path as MoviesType),
    );

    this.movies$ = this.moviesService.getMovies(
      this.pageIndex,
      this.currentPath,
    );
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.movies$ = this.moviesService.getMovies(
      this.pageIndex,
      this.currentPath,
    );
  }
}
