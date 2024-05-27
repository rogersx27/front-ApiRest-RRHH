import { ApiService } from '../Api.service';
import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Benefit } from '../utils/interfaces/benefit.interface';

@Injectable({
  providedIn: 'root',
})
export class BenfitService {
  constructor(private ApiService: ApiService) {}

  getAll() {
    const response = this.ApiService.get<Benefit[]>(
      'http://localhost:8080/api/v1/benefits/all'
    );

    return response;
  }

  getById(id: number) {
    const response = this.ApiService.get<Benefit>(
      `http://localhost:8080/api/v1/benefits/find/${id}`
    );

    response;
  }

  create(benefit: Benefit) {
    const response = this.ApiService.post<Benefit>(
      'http://localhost:8080/api/v1/benefits/save',
      benefit
    );
  }

  updateById(id: number, benefit: Benefit) {
    const response = this.ApiService.put<Benefit>(
      `http://localhost:8080/api/v1/benefits/update/${id}`,
      benefit
    );
  }

  deleteById(id: number) {
    const response = this.ApiService.delete<Benefit>(
      `http://localhost:8080/api/v1/benefits/delete/${id}`
    );
  }
}
