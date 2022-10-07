import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private http: HttpClient) { }


  get(model: string, id: string, type?: string, authToken?: string) {
    return this.http.get(`${environment.backUrl}/api/v1/${model}/${id}${type ? ('/' + type) : ''}`, {
      headers: {
        'Authorization': authToken || ''
      }
    });
  }

  post(model: string, type: string, data: any, id?: string) {
    return this.http.post(`${environment.backUrl}/api/v1/${model}/${id ? ('/' + id) : ''}${type}`, data);
  }
}
