import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ModalsService } from './services/modals.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private modalService: ModalsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        next: res => {},
        error: err => {
          if (err.status == 401) this.modalService.open('modal', 'login');
        }
      })
    );
  }
}
