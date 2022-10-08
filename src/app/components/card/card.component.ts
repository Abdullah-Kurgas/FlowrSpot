import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState';
import { ToggleFlower } from 'src/app/shared/actions/flowerAction';
import { ToggleFavorite } from 'src/app/shared/actions/favoriteAction';
import { IFavorite, IFlower } from 'src/app/shared/models/Flower';
import { FlowerService } from 'src/app/shared/services/flower.service';
import { IUser } from 'src/app/shared/models/User';

@Component({
  selector: 'fs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() flower!: IFlower;
  user!: IUser;

  constructor(private store: Store<AppState>, private flowerService: FlowerService) {
    store.select(state => state.user).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
  }

  toggleFavorite(flower: any) {

    if (this.getDataFromInsideObj(flower.favorite, flower)?.favorite) {
      this.flowerService.removeFromFavoriteList(flower.id, this.getDataFromInsideObj(flower.favorite, flower).id).subscribe({
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

  getDataFromInsideObj(value: any, item: any): IFlower {
    return !value ? item?.flower : item;
  }

}
