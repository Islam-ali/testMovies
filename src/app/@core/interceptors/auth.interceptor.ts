import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../authentication/service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _AuthService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this._AuthService.getAuthToken();
    let authreq = request;
    authreq = this.AddTokenheader(request, token);
  //   if (token) {
  //     request = request.clone({
  //        setHeaders: {Authorization: `Bearer ${token}`}
  //     });
  //  }
   return next.handle(authreq).pipe(
    catchError(errordata => {
      console.log('errrrrr',errordata);
      if (errordata.status === 401 && errordata.error.message == "you are not authenticated") {
          this._AuthService.logout()
      }
      return throwError(() => errordata);
    })
  );
  }
  AddTokenheader(request: HttpRequest<any>, token: any) {
    return request.clone({ headers: request.headers.set('Authorization', 'bearer ' + token) });
  }
}
