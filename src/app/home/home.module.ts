import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { RouterModule } from '@angular/router';
import { MovieDetailsService } from './services/movie-details.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    HomePageComponent,
    MovieDetailsPageComponent,
    MovieListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
    RouterModule,
    MatPaginatorModule,
  ],
  providers: [MoviesService, MovieDetailsService],
  exports: [HomePageComponent, MovieDetailsPageComponent],
})
export class HomeModule {}
