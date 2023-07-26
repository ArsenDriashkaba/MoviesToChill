import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieCategory } from './home/models/movie';
import { MovieListComponent } from './shared/movie-list/movie-list.component';
import { MovieDetailsPageComponent } from './movie-detail/movie-details-page.component';

const routes: Routes = [
  { path: MovieCategory.popular, component: MovieListComponent },
  { path: MovieCategory.upcoming, component: MovieListComponent },
  { path: MovieCategory.top_rated, component: MovieListComponent },
  { path: MovieCategory.now_playing, component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailsPageComponent },
  { path: '**', redirectTo: MovieCategory.popular },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
