import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment.development';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  constructor() {}

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    authorization: `Bearer ${env.moviesApiAccessToken}`,
  });

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({ headers: this.headers });

    return next.handle(newRequest);
  }
}
