import { Injectable } from '@angular/core';
import { ISighting } from '../models/Sighting';
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

  createSighting(sighting: ISighting) {
    return this.apiService.post('sightings', '', sighting);
  }

  deleteSighting(id: number) {
    return this.apiService.delete('sightings', undefined, { id: id, parent_id: undefined })
  }
}
