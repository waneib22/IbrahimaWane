import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private as: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes("/api/v1/auth/login")) {
      console.log('Bearer ' + this.as.accessToken)
      let newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.as.accessToken)
      })
      return next.handle(newRequest);
    } else return next.handle(request);
  }
}
