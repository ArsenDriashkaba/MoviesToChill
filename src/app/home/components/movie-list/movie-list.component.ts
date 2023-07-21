import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  pageSize: number = 20;
  pageIndex: number = 1;
  length: number = 1000;
  movies$: Observable<Movie[]> = this.moviesService.getMovies();

  hidePageSize: boolean = false;
  showFirstLastButtons: boolean = true;
  disabled: boolean = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.movies$ = this.moviesService.getMovies(this.pageIndex);
  }

  constructor(private readonly moviesService: MoviesService) {}
}
