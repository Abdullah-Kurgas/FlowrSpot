import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {

  constructor(private apiService: ApiService) { }

  getFlowerList() {
    return this.apiService.get('flowers', undefined, '');
  }

  getFlowerDetail(id: number) {
    return this.apiService.get('flowers', id);
  }

  getFlowerFavoriteList() {
    return this.apiService.get('flowers', undefined, 'favorites');
  }

  addToFavoriteList(id: number) {
    return this.apiService.post('flowers', 'favorites', null, id);
  }

  removeFromFavoriteList(parent_id: number, id: number) {
    return this.apiService.delete('flowers', 'favorites', { parent_id: parent_id, id: id});
  }

}
