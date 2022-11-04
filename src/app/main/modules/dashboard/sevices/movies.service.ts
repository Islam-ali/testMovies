import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  readonly domain = environment.domain;

  constructor(private _HttpClient: HttpClient) { }

  createMovie(data:FormData) :Observable<any> {
    return this._HttpClient.post<any>(`${this.domain}/api/movies`,data).pipe(
      catchError(this.handleError)
    );
  }
  updateMovie(data:FormData,id:number) :Observable<any> {
    return this._HttpClient.post<any>(`${this.domain}/api/movies/${id}`,data).pipe(
      catchError(this.handleError)
    );
  }
  deleteMovie(id:number) :Observable<any> {
    const data = {_method:'delete'}
    return this._HttpClient.post<any>(`${this.domain}/api/movies/${id}`,data).pipe(
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
