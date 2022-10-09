import { Injectable } from '@angular/core';
import { Comment } from '../models/Comment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SightingService {

  constructor(private apiService: ApiService) { }

  getSightingList() {
    return this.apiService.get('sightings');
  }

  getSightingInfo(id: number) {
    return this.apiService.get('sightings', id);
  }

  createSighting(sighting: FormData) {
    return this.apiService.post('sightings', '', sighting);
  }

  deleteSighting(id: number) {
    return this.apiService.delete('sightings', undefined, { id: id, parent_id: undefined })
  }

  /** Comments **/
  getCommentList(sighting_id: number) {
    return this.apiService.get('sightings', sighting_id, 'comments');
  }

  createComment(data: Comment, sighting_id: number) {
    return this.apiService.post('sightings', 'comments', data, sighting_id);
  }
}
