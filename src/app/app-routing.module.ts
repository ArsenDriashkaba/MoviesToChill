import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { MovieDetailsPageComponent } from './home/pages/movie-details-page/movie-details-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'detail/:id', component: MovieDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
