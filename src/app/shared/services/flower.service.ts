import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {
  model: string = 'flowers';

  constructor(private apiService: ApiService) { }

  getFlowerList(id?: number, type: string = '', options: Params | undefined = undefined) {
    return this.apiService.get(this.model, id, type, options);
  }

  getFlowerDetail(id: number) {
    return this.apiService.get(this.model, id);
  }

  getFlowerFavoriteList() {
    return this.apiService.get(this.model, undefined, 'favorites');
  }

  addToFavoriteList(id: number) {
    return this.apiService.post(this.model, 'favorites', null, id);
  }

  removeFromFavoriteList(parent_id: number, id: number) {
    return this.apiService.delete(this.model, 'favorites', { parent_id: parent_id, id: id});
  }

}
