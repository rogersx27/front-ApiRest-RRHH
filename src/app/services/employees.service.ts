import { Employee } from './../utils/interfaces/employee';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { handleError, verifyEmail } from '../utils';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private http = inject(HttpClient);

  getAll() {
    return this.http.get('http://localhost:8080/api/v1/employees/all');
  }

  getById(id: number) {
    return this.http.get(`http://localhost:8080/api/v1/employees/find/id/{id}`);
  }

  getByEmail(email: string): Observable<any> {
    if (verifyEmail(email)) {
      return throwError(() => new Error('Invalid email'));
    }

    return this.http
      .get(`http://localhost:8080/api/v1/employees/find/email/{email}`, {
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          return {
            status: response.status,
            body: response.body,
          };
        }),
        catchError(handleError)
      );
  }

  getByPhoneNumber(phoneNumber: string) {
    return this.http.get(
      `http://localhost:8080/api/v1/employees/find/phone/{phoneNumber}`
    );
  }

  getByHireDate(hireDate: string) {
    return this.http.get(
      `http://localhost:8080/api/v1/employees/find/hiredate/{hireDate}`
    );
  }

  getByPositionId(positionId: number) {
    return this.http.get(
      `http://localhost:8080/api/v1/employees/find/position/{positionId}`
    );
  }

  create(employee: Employee) {
    return this.http.post(
      'http://localhost:8080/api/v1/employees/save',
      employee
    );
  }

  updateById(id: number, employee: Employee) {
    return this.http.put(
      `http://localhost:8080/api/v1/employees/update/${id}`,
      employee
    );
  }

  deleteById(id: number) {
    return this.http.delete(
      `http://localhost:8080/api/v1/employees/delete/${id}`
    );
  }
}
