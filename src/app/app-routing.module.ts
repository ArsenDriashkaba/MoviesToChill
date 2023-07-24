import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsPageComponent } from './home/pages/movie-details-page/movie-details-page.component';
import { MovieListComponent } from './home/components/movie-list/movie-list.component';
import { MovieCategory } from './home/models/movie';

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
