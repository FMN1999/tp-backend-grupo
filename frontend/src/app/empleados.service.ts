import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  readonly baseUrl = 'http://localhost:3000/api/';
  getEmpleados() {
    const url = this.baseUrl + 'empleados';
    return this.http.get<any>(url)
  }

  constructor(private http: HttpClient) { }
}
