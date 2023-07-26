import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActionButtonComponent } from '../shared/action-button/action-button.component';
import { ChangeFavouriteButtonComponent } from './components/change-favourite-button/change-favourite-button.component';

@NgModule({
  declarations: [MovieDetailsPageComponent, MovieListComponent, ChangeFavouriteButtonComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
    RouterModule,
    MatPaginatorModule,
    MatProgressBarModule,
    ActionButtonComponent,
  ],
  providers: [MoviesService],
  exports: [MovieDetailsPageComponent],
})
export class HomeModule {}
