import { Injectable } from '@angular/core';
import { IUser } from '../models/User';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  getAuthToken(type: string, user: IUser) {
    return this.apiService.post('users', type, user);
  }

  getUserData(type?: string, id?: number) {
    return this.apiService.get('users', id, type);
  }

}
