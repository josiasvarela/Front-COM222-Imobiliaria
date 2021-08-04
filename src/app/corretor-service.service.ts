import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorretorServiceService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCorretores() {
    return this.http.get(`${this.uri}/corretores`);
  }

  getCorretor(creci: any) {
    return this.http.get(`${this.uri}/corretores/${creci}`);
  }

  insereCorretor(data: any) {
    return this.http.post(`${this.uri}/corretores`, data);
  }

  alteraCorretor(creci: any, data: any) {
    return this.http.put(`${this.uri}/corretores/${creci}`, data);
  }

  deletaCorretor(creci: any) {
    return this.http.delete(`${this.uri}/corretores/${creci}`);
  }

}
