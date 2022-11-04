import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { AuthService } from '../authentication/service/auth.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private _AuthService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._AuthService.isLoading.next(true)
    return next.handle(request).pipe(
      finalize(
        ()=> {
          this._AuthService.isLoading.next(false)
        }
      )
    )
  }
}
