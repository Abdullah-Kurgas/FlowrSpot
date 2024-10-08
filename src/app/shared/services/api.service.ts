import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  getToken() {
    let authToken;
    this.store.select(state => state.authToken).subscribe((token: any) => authToken = token);

    return authToken || '';
  }

  get(model: string, id?: number, type?: string, query?: Params) {
    return this.http.get(`${environment.backUrl}/api/v1/${model}${this.checkIfDataExists(id)}${this.checkIfDataExists(type)}${this.setQueryUrl(query)}`, {
      headers: {
        'Authorization': this.getToken()
      }
    });
  }

  post(model: string, type?: string, data?: any, id?: number) {
    return this.http.post(`${environment.backUrl}/api/v1/${model}${this.checkIfDataExists(id)}${this.checkIfDataExists(type)}`, data, {
      headers: {
        'Authorization': this.getToken()
      }
    });
  }

  delete(model: string, type?: string, options?: { id: number, parent_id: number | undefined }) {
    return this.http.delete(`${environment.backUrl}/api/v1/${model}${this.checkIfDataExists(options?.id)}${this.checkIfDataExists(type)}${this.checkIfDataExists(options?.parent_id)}`, {
      headers: {
        'Authorization': this.getToken()
      }
    });
  }

  checkIfDataExists(data: any) {
    return data ? ('/' + data) : '';
  }

  setQueryUrl(query: Params | undefined) {
    let url = '';

    if (!query) return url;

    for (const key in query) {
      url += `${url.includes('?') ? '&' : '?'}${key}=${query[key]}`;
    }
    return url;
  }

}
