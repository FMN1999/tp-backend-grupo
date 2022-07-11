import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopasService {
  
  readonly baseUrl = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) { }

  getRopas() {
    const url = this.baseUrl + 'ropas';
    return this.http.get<any>(url);
   }
}
