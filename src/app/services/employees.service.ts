import { ApiService } from './../Api.service';
import { Employee } from '../utils/models/employee.model';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchResponse, handleError, verifyEmail } from '../utils';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private ApiService: ApiService) {}

  getAll() {
    const response = this.ApiService.get<Employee[]>(
      'http://localhost:8080/api/v1/employees/all'
    );

    return response;
  }

  getById(id: number) {
    const response = this.ApiService.get<Employee>(
      `http://localhost:8080/api/v1/employees/find/${id}`
    );

    return response;
  }

  getByEmail(email: string): Observable<Employee> {
    try {
      verifyEmail(email);
    } catch (error: any) {
      return handleError(error);
    }

    const response = this.ApiService.get<Employee>(
      `http://localhost:8080/api/v1/employees/find/email/${email}`
    );

    return response;
  }

  getByPhoneNumber(phoneNumber: number) {
    const response = this.ApiService.get<Employee>(
      `http://localhost:8080/api/v1/employees/find/phone/${phoneNumber}`
    );

    return response;
  }

  getByHireDate(hireDate: string) {
    const response = this.ApiService.get<Employee>(
      `http://localhost:8080/api/v1/employees/find/hiredate/${hireDate}`
    );

    return response;
  }

  getByPositionId(positionId: number) {
    const response = this.ApiService.get<Employee>(
      `http://localhost:8080/api/v1/employees/find/position/${positionId}`
    );

    return response;
  }

  create(employee: Employee) {
    return this.ApiService.post<Employee>(
      `http://localhost:8080/api/v1/employees/create`,
      employee
    );
  }

  updateById(id: number, employee: Employee) {
    return this.ApiService.put<Employee>(
      `http://localhost:8080/api/v1/employees/update/${id}`,
      employee
    );
  }

  deleteById(id: number) {
    return this.ApiService.delete<Employee>(
      `http://localhost:8080/api/v1/employees/delete/${id}`
    );
  }
}
