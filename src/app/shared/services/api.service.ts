import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  authToken!: string;

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store.select(state => { state.authToken }).subscribe((token: any)=> this.authToken = token);
   }


  get(model: string, id: string, type?: string) {
    return this.http.get(`${environment.backUrl}/api/v1/${model}/${id}${type ? ('/' + type) : ''}`, {
      headers: {
        'Authorization': this.authToken || ''
      }
    });
  }

  post(model: string, type: string, data: any, id?: string) {
    return this.http.post(`${environment.backUrl}/api/v1/${model}/${id ? ('/' + id) : ''}${type}`, data, {
      headers: {
        'Authorization': this.authToken || ''
      }
    });
  }
}
