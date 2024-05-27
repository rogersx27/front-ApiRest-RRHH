import { ApiService } from '../Api.service';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Department } from '../utils/interfaces/department.interface';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private ApiService: ApiService) {}

  getAll() {
    const response = this.ApiService.get<Department[]>(
      'http://localhost:8080/api/v1/departments/all'
    );

    return response;
  }

  getById(id: number) {
    const response = this.ApiService.get<Department>(
      `http://localhost:8080/api/v1/departments/find/${id}`
    );

    return response;
  }

  create(department: Department) {
    const response = this.ApiService.post<Department>(
      'http://localhost:8080/api/v1/departments/save',
      department
    );

    return response;
  }

  updateById(id: number, department: Department) {
    const response = this.ApiService.put<Department>(
      `http://localhost:8080/api/v1/departments/update/${id}`,
      department
    );

    return response;
  }

  deleteById(id: number) {
    const response = this.ApiService.delete<Department>(
      `http://localhost:8080/api/v1/departments/delete/${id}`
    );

    return response;
  }
}
