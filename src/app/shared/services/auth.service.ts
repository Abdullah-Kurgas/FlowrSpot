import { Injectable } from '@angular/core';
import { IUser } from '../models/User';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  model: string = 'users';

  constructor(private apiService: ApiService) { }

  getAuthToken(type: string, user: IUser) {
    return this.apiService.post(this.model, type, user);
  }

  getUserData(type?: string, id?: number) {
    return this.apiService.get(this.model, id, type);
  }

}
