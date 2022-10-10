import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { mergeMap } from 'rxjs';
import { AppState } from 'src/app/appState';
import { Flower } from 'src/app/shared/models/Flower';
import { ISighting } from 'src/app/shared/models/Sighting';
import { FlowerService } from 'src/app/shared/services/flower.service';
import { Utils } from 'src/app/shared/Utils';

@Component({
  selector: 'fs-flower-detail',
  templateUrl: './flower-detail.component.html',
  styleUrls: ['./flower-detail.component.scss']
})
export class FlowerDetailComponent implements OnInit {
  flower: Flower = new Flower();
  flowerSightings?: ISighting[];

  utils = Utils;

  constructor(private flowerService: FlowerService, private store: Store<AppState>, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.flowerService.getFlowerDetail(this.route.snapshot.params['id'])
    .pipe(
      mergeMap(({flower}: any)=>{
        this.flower = flower;
        return this.flowerService.getFlowerList(flower.id, 'sightings')
      })
    )
    .subscribe({
      next: ({ sightings }: any) => {
        this.flowerSightings = sightings;
      },
      error: err => console.error(err)
    })
  }

}
