import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  readonly domain = environment.domain;

  constructor(private _HttpClient: HttpClient) { }

  listMovies(): Observable<any> {
    return this._HttpClient.get<any>(`${this.domain}/api/movies`).pipe(
      catchError(this.handleError)
    );
  }
  listCategory(): Observable<any> {
    return this._HttpClient.get<any>(`${this.domain}/api/category`).pipe(
      catchError(this.handleError)
    );
  }
  listByCategory(id:number): Observable<any> {
    return this._HttpClient.get<any>(`${this.domain}/api/moviesByCategory/${id}`).pipe(
      catchError(this.handleError)
    );
  }
  detailsMovie(id:number): Observable<any> {
    return this._HttpClient.get<any>(`${this.domain}/api/movies/${id}`).pipe(
      catchError(this.handleError)
    );
  }
  //****************  HandleError ***************//
  //** We Can make another Solution in Error Interceptor */

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => error.error.message);
  };
}
