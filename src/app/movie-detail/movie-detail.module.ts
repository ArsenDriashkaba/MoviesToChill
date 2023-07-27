import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MovieDetailsPageComponent } from './movie-details-page.component';
import { ChangeFavouriteButtonComponent } from './components/change-favourite-button/change-favourite-button.component';
import { ActionButtonComponent } from '../shared/components/action-button/action-button.component';
import { MoviesService } from '../shared/services/movies.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiKeyInterceptor } from '../shared/interceptors/api-key.interceptor';

@NgModule({
  declarations: [MovieDetailsPageComponent, ChangeFavouriteButtonComponent],
  imports: [CommonModule, MatProgressBarModule, ActionButtonComponent],
  providers: [
    MoviesService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true },
  ],
  exports: [MovieDetailsPageComponent],
})
export class MovieDetailModule {}
