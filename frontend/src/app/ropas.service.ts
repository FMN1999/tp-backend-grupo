import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReqResResponse } from './models/reqres-response';

@Injectable({
  providedIn: 'root'
})
export class RopasService {
  
  readonly baseUrl = "http://localhost:3000/api";
  constructor(private http: HttpClient) { }

  getRopas() {
    const url = this.baseUrl + "/ropas";
    return this.http.get<ReqResResponse>(url);
   }

  getDetalleRopas() {
    const url = this.baseUrl + "/ropasDetalles";
    return this.http.get<ReqResResponse>(url);
  }

  getCategoriaRopas() {
    const url = this.baseUrl + "/ropasCate";
    return this.http.get<ReqResResponse>(url);
  }

  cargarRopa(id:any){
    const url = this.baseUrl + "/ropas/"+ id; 
    return this.http.get<ReqResResponse>(url);
  }

  
}
