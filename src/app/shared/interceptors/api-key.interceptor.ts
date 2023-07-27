import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment.development';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({
      params: request.params.append('api_key', env.moviesApiKey),
    });

    return next.handle(newRequest);
  }
}
