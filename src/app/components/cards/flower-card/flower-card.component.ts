import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState';
import { ToggleFlower } from 'src/app/shared/actions/flowerAction';
import { ToggleFavorite } from 'src/app/shared/actions/favoriteAction';
import { IFlower } from 'src/app/shared/models/Flower';
import { FlowerService } from 'src/app/shared/services/flower.service';
import { IUser } from 'src/app/shared/models/User';
import { Utils } from 'src/app/shared/Utils';

@Component({
  selector: 'fs-flower-card',
  templateUrl: './flower-card.component.html',
  styleUrls: ['./flower-card.component.scss']
})
export class FlowerCardComponent implements OnInit {
  @Input() flower!: IFlower;
  user!: IUser;

  utils = Utils;

  constructor(private store: Store<AppState>, private flowerService: FlowerService) {
    store.select(state => state.user).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
  }

  toggleFavorite(e: Event, flower: any) {
    e.stopPropagation();

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
