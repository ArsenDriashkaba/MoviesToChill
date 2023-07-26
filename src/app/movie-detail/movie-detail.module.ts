import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MovieDetailsPageComponent } from './movie-details-page.component';
import { ChangeFavouriteButtonComponent } from './components/change-favourite-button/change-favourite-button.component';
import { ActionButtonComponent } from '../shared/action-button/action-button.component';
import { MoviesService } from '../home/services/movies.service';

@NgModule({
  declarations: [MovieDetailsPageComponent, ChangeFavouriteButtonComponent],
  imports: [CommonModule, MatProgressBarModule, ActionButtonComponent],
  providers: [MoviesService],
  exports: [MovieDetailsPageComponent],
})
export class MovieDetailModule {}
