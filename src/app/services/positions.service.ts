import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Position } from '../utils/models/position.model';

@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  private http = inject(HttpClient);

  getAll() {
    return this.http.get('http://localhost:8080/api/v1/positions/all');
  }

  getById(id: number) {
    return this.http.get(`http://localhost:8080/api/v1/positions/find/id/${id}`);
  }

  create(position: Position) {
    return this.http.post(
      'http://localhost:8080/api/v1/positions/save',
      position
    );
  }

  updateById(id: number, position: Position) {
    return this.http.put(
      `http://localhost:8080/api/v1/positions/update/${id}`,
      position
    );
  }

  deleteById(id: number) {
    return this.http.delete(
      `http://localhost:8080/api/v1/positions/delete/${id}`
    );
  }
}
