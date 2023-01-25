import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { catchError, Observable, tap, throwError } from 'rxjs';
@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/categories';
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'An error occurred!!' + err.error.message;
    } else {
      errorMessage = 'An error occurred on our side!';
    }
    return throwError(errorMessage);
  }
}
