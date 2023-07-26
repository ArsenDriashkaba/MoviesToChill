import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieCategory } from './shared/models/movie';
import { MovieListComponent } from './shared/components/movie-list/movie-list.component';
import { MovieDetailsPageComponent } from './movie-detail/movie-details-page.component';
import { HomePageComponent } from './home/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: MovieCategory.popular, component: MovieListComponent },
  { path: MovieCategory.upcoming, component: MovieListComponent },
  { path: MovieCategory.top_rated, component: MovieListComponent },
  { path: MovieCategory.now_playing, component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailsPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
