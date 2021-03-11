import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  private token = 'JWT01010101';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request);

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    });

    return next.handle(request);
  }
}
