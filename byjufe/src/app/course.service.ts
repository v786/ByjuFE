import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private serviceUrl = 'https://api.myjson.com/bins/1fq8pm';  // URL to web api

  constructor(private _http: HttpClient) { }

  getCourseList(): Observable<any[]> {
    return this._http.get<any[]>(this.serviceUrl).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || 'Server Error');
  }

}
