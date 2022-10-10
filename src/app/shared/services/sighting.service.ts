import { Injectable } from '@angular/core';
import { Comment } from '../models/Comment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SightingService {
  model: string = 'sightings'

  constructor(private apiService: ApiService) { }

  getSightingList() {
    return this.apiService.get(this.model);
  }

  getSightingInfo(id: number) {
    return this.apiService.get(this.model, id);
  }

  createSighting(sighting: FormData) {
    return this.apiService.post(this.model, '', sighting);
  }

  deleteSighting(id: number) {
    return this.apiService.delete(this.model, undefined, { id: id, parent_id: undefined })
  }

  /** Comments **/
  getCommentList(sighting_id: number) {
    return this.apiService.get(this.model, sighting_id, 'comments');
  }

  createComment(data: Comment, sighting_id: number) {
    return this.apiService.post(this.model, 'comments', data, sighting_id);
  }
}
