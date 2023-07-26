import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';

import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { RouterModule } from '@angular/router';
import { ActionButtonComponent } from '../shared/action-button/action-button.component';
import { ChangeFavouriteButtonComponent } from './components/change-favourite-button/change-favourite-button.component';
import { MovieListComponent } from '../shared/movie-list/movie-list.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [MovieDetailsPageComponent, ChangeFavouriteButtonComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
    RouterModule,
    MovieListComponent,
    ActionButtonComponent,
    MatProgressBarModule,
  ],
  providers: [MoviesService],
  exports: [MovieDetailsPageComponent],
})
export class HomeModule {}
