import { ApiService } from './../Api.service';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Position, positionDAO } from '../utils/interfaces/position.interface';

@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  constructor(private ApiService: ApiService) {}

  getAll() {
    const response = this.ApiService.get<Position[]>(
      'http://localhost:8080/api/v1/positions/all'
    );

    return response;
  }

  getById(id: number) {
    const response = this.ApiService.get<Position>(
      `http://localhost:8080/api/v1/positions/find/${id}`
    );

    return response;
  }
  create(position: positionDAO) {
    const response = this.ApiService.post<Position>(
      'http://localhost:8080/api/v1/positions/save',
      position
    );

    return response;
  }

  updateById(id: number, position: positionDAO) {
    const response = this.ApiService.put<Position>(
      `http://localhost:8080/api/v1/positions/update/${id}`,
      position
    );

    return response;
  }

  deleteById(id: number) {
    const response = this.ApiService.delete<Position>(
      `http://localhost:8080/api/v1/positions/delete/${id}`
    );

    return response;
  }
}
