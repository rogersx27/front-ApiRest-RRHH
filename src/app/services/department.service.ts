import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Department } from '../utils/models/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private http = inject(HttpClient);

  getAll() {
    return this.http.get('http://localhost:8080/api/v1/departments/all');
  }

  getById(id: number) {
    return this.http.get(`http://localhost:8080/api/v1/departments/find/id/${id}`);
  }

  create(department: Department) {
    return this.http.post(
      'http://localhost:8080/api/v1/departments/save',
      department
    );
  }

  updateById(id: number, department: Department) {
    return this.http.put(
      `http://localhost:8080/api/v1/departments/update/${id}`,
      department
    );
  }

  deleteById(id: number) {
    return this.http.delete(
      `http://localhost:8080/api/v1/departments/delete/${id}`
    );
  }
}
