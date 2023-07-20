import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  movies: Observable<Movie[]> = this.moviesService.getMovies();
  constructor(private readonly moviesService: MoviesService) {}
}
