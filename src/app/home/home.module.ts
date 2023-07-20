import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [
    HomePageComponent,
    MovieDetailsPageComponent,
    MovieListComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  providers: [MoviesService],
  exports: [HomePageComponent, MovieDetailsPageComponent],
})
export class HomeModule {}
