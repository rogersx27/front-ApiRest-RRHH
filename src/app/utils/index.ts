import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';

export function verifyEmail(email: string): void {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValidEmail = emailRegex.test(email);

  if (!isValidEmail) {
    throw new Error('Invalid email');
  }
}

export function handleError(message: string): Observable<never> {
  const throwgingError = throwError(() => new Error(message));
  return throwgingError;
}

export function handleHttpError(error: HttpErrorResponse): Observable<never> {
  let errorMessage: string;

  if (error.error instanceof ErrorEvent) {
    errorMessage = `Client-side error: ${error.error.message}`;
  }

  errorMessage = `Server-side error: ${error.status} - HTTP failure response - ${error.url}`;

  return handleError(errorMessage);
}

export function handleResponse<T>(res: HttpResponse<T>): T {
  if (res.status === 404) {
    throw new Error(`Not found: ${res.statusText}`);
  }

  return res.body as T;
}

export function catchResponse<T>(
  request: Observable<HttpResponse<T>>
): Observable<any> {
  return request.pipe(
    map((res: HttpResponse<any>) => handleResponse(res)),
    catchError((error: HttpErrorResponse) => handleHttpError(error))
  );
}
