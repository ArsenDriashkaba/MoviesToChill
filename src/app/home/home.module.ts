import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from '../shared/services/movies.service';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { SearchBannerComponent } from './components/search-banner/search-banner.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomePageComponent, SearchBannerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
    RouterModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  providers: [MoviesService],
})
export class HomeModule {}
