import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Benefit } from '../utils/interfaces/benefit';

@Injectable({
  providedIn: 'root',
})
export class BenfitService {
  private http = inject(HttpClient);

  getAll() {
    return this.http.get('http://localhost:8080/api/v1/benefits/all');
  }

  getById(id: number) {
    return this.http.get(`http://localhost:8080/api/v1/benefits/find/id/${id}`);
  }

  create(benefit: Benefit) {
    return this.http.post(
      'http://localhost:8080/api/v1/benefits/save',
      benefit
    );
  }

  updateById(id: number, benefit: Benefit) {
    return this.http.put(
      `http://localhost:8080/api/v1/benefits/update/${id}`,
      benefit
    );
  }

  deleteById(id: number) {
    return this.http.delete(
      `http://localhost:8080/api/v1/benefits/delete/${id}`
    );
  }
}
