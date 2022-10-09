import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState';
import { ToggleFavorite } from 'src/app/shared/actions/favoriteAction';
import { ToggleFlower } from 'src/app/shared/actions/flowerAction';
import { Flower } from 'src/app/shared/models/Flower';
import { FlowerService } from 'src/app/shared/services/flower.service';
import { Utils } from 'src/app/shared/Utils';

@Component({
  selector: 'fs-flower-detail',
  templateUrl: './flower-detail.component.html',
  styleUrls: ['./flower-detail.component.scss']
})
export class FlowerDetailComponent implements OnInit {
  flower: Flower = new Flower();

  utils = Utils;

  constructor(private flowerService: FlowerService, private store: Store<AppState>, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.flowerService.getFlowerDetail(this.route.snapshot.params['id']).subscribe({
      next: ({ flower }: any) => {
        this.flower = flower;
      },
      error: err => console.error(err)

    })
  }

  toggleFavorite(flower: any) {
    if (this.utils.getDataFromInsideObj(flower, 'favorite')) {
      this.flowerService.removeFromFavoriteList(flower.id, this.utils.getDataFromInsideObj(flower, 'id')).subscribe({
        next: res => {
          this.store.dispatch(new ToggleFavorite(flower));
        },
        error: err => console.error(err)
      })
      return;
    }

    if (!flower.favorite) {
      this.flowerService.addToFavoriteList(flower.id).subscribe({
        next: (res) => {
          this.store.dispatch(new ToggleFlower(flower));
        },
        error: err => console.error(err)
      })
    }
  }

}
