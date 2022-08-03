import { Injectable } from '@angular/core';
import { ReqResResponse } from './models/reqres-response';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RopasService {
  
  

  //El servicio que aca inyecto (HttpClient) me va a servir para poder realizar las peticiones(GET, PUT, POST).
  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000";

  getRopas() {
    const url = this.baseUrl + "/api/ropas";
    return this.http.get<ReqResResponse>(url);
  }

  getDetalleRopas() {
    const url = this.baseUrl + "/api/ropasDetalles";
    return this.http.get<ReqResResponse>(url);
  }

  getCategoriaRopas() {
    const url = this.baseUrl + "/api/ropasCate";
    return this.http.get<ReqResResponse>(url);
  }

  
}