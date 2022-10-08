import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/appState';
import { SetData } from 'src/app/shared/actions/sightingAction';
import { ISighting } from 'src/app/shared/models/Sighting';
import { SightingService } from 'src/app/shared/services/sighting.service';

@Component({
  selector: 'fs-sightings',
  templateUrl: './sightings.component.html',
  styleUrls: ['./sightings.component.scss']
})
export class SightingsComponent implements OnInit {
  sightings!: Observable<ISighting[]>;

  constructor(private sightingService: SightingService, private store: Store<AppState>) {
    this.sightings = store.select(state => state.sightings);
   }

  ngOnInit(): void {
    this.sightingService.getSightingList().subscribe({
      next: ({sightings}: any) => {
        this.store.dispatch(new SetData(sightings));
      },
      error: err => console.error(err)
    })
  }

}
