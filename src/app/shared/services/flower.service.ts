import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {

  constructor(private apiService: ApiService) { }

  getFlowerList() {
    return this.apiService.get('flowers', '');
  }
}
