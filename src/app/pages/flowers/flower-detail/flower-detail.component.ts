import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState';
import { Flower, IFlower } from 'src/app/shared/models/Flower';
import { FlowerService } from 'src/app/shared/services/flower.service';

@Component({
  selector: 'fs-flower-detail',
  templateUrl: './flower-detail.component.html',
  styleUrls: ['./flower-detail.component.scss']
})
export class FlowerDetailComponent implements OnInit {
  flower: Flower = new Flower();

  constructor(private flowerService: FlowerService, private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.flowerService.getFlowerDetail(this.route.snapshot.params['id']).subscribe({
      next: ({ flower }: any) => {
        this.flower = flower;
      },
      error: err => console.error(err)

    })
  }

}
