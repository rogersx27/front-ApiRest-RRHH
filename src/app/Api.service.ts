import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchResponse } from './utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * Sends a GET request to the specified URL and returns the response as an Observable.
   *
   * @param {string} url - The URL to send the GET request to.
   * @param {any} [options] - Additional options for the request.
   * @returns `observable` - An Observable that emits the response data.
   */
  public get<T>(url: string, options?: any): Observable<T> {
    const request = this.http.get<T>(url, {
      observe: 'response',
      ...options,
    }) as Observable<HttpResponse<T>>;

    const response = catchResponse(request);

    return response;
  }

  public post<T>(url: string, body: any, options?: any): Observable<T> {
    const request = this.http.post<T>(url, body, {
      observe: 'response',
      ...options,
    }) as Observable<HttpResponse<T>>;

    const response = catchResponse(request);
    return response;
  }

  public put<T>(url: string, body: any, options?: any): Observable<T> {
    const request = this.http.put<T>(url, body, {
      observe: 'response',
      ...options,
    }) as Observable<HttpResponse<T>>;

    const response = catchResponse(request);

    return response;
  }

  public delete<T>(url: string, options?: any) {
    const request = this.http.delete<T>(url, {
      observe: 'response',
      ...options,
    }) as Observable<HttpResponse<T>>;

    const response = catchResponse(request);

    return response;
  }
}
