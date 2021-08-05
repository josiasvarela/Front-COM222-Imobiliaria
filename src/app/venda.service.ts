import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getVendas(){
    return this.http.get(`${this.uri}/vendas`);
  }

  insereVenda(data: any){
    return this.http.post(`${this.uri}/vendas`, data);
  }

  getVendasporCorretor(mes: any, ano:any){
    return this.http.get("");
  }
  getVendasMes(mes: any, ano: any){
    return this.http.get(`${this.uri}/vendas/${mes}-${ano}`);
  }
}
