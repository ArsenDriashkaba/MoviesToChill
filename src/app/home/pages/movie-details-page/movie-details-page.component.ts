import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from '../../services/movie-details.service';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
})
export class MovieDetailsPageComponent {
  id?: number = this.route.snapshot.params['id'];
  movieDetail$: Observable<Movie> = this.movieDetailService.getMovieDetail(
    Number(this.id),
  );

  constructor(
    private readonly movieDetailService: MovieDetailsService,
    private readonly route: ActivatedRoute,
  ) {}
}
