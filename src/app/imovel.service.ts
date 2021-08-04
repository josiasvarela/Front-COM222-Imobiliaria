import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  getImoveis() {
    return this.http.get(`${this.uri}/imoveis`);
  }

  getImovel(codigo : any) {
    return this.http.get(`${this.uri}/imoveis/${codigo}`);
  }

  alteraImovel(codigo:any, data: any){
    return this.http.put(`${this.uri}/imoveis/${codigo}`, data);
  }

  deletarImovel(codigo: any) {
   return this.http.delete(`${this.uri}/imoveis/${codigo}`);
  }

  insereImovel(data: any) {
    return this.http.post(`${this.uri}/imoveis`, data);
  }
}
