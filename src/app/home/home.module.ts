import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, NgOptimizedImage, RouterModule],
  providers: [MoviesService],
})
export class HomeModule {}
