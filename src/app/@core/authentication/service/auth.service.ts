import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AuthGuard } from '../../guards/auth.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  readonly domain = environment.domain;

  constructor(private _HttpClient: HttpClient,private _AuthGuard:AuthGuard , private router: Router) { }

  register(registerForm: FormData): Observable<any> {
    return this._HttpClient.post(`${this.domain}/api/register`, registerForm).pipe(
      catchError(this.handleError)
    );
  }


  login(loginForm: FormData): Observable<any> {
    return this._HttpClient.post(`${this.domain}/api/login`, loginForm).pipe(
      catchError(this.handleError)
    );
  }

  getAuthToken():string {
    return localStorage.getItem('token')!;
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login');
    this._AuthGuard.IsLogin.next(false);
  }
  //****************  HandleError ***************//
  //** We Can make another Solution in Error Interceptor */

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.message}`);
    }
    return throwError(() => error.error.message);
  };
}
