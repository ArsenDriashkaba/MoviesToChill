import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MovieDetailModule } from './movie-detail/movie-detail.module';
import { MatMenuModule } from '@angular/material/menu';
import { HeadersInterceptor } from './shared/interceptors/headers.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    MovieDetailModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
  ],
})
export class AppModule {}
