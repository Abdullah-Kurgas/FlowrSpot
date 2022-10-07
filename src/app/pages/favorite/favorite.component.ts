import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/appState';
import { SetFavorites } from 'src/app/shared/actions/favoriteAction';
import { IFlower } from 'src/app/shared/models/Flower';
import { FlowerService } from 'src/app/shared/services/flower.service';

@Component({
  selector: 'fs-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favorites!: Observable<IFlower[]>;

  constructor(private flowerService: FlowerService, private store: Store<AppState>) {
    this.favorites = store.select(state => state.favorites);
   }

  ngOnInit(): void {
    this.flowerService.getFlowerFavoriteList().subscribe({
      next: ({fav_flowers}: any) => {
        this.store.dispatch(new SetFavorites(fav_flowers));
      },
      error: err => console.error(err)
    })
  }

}
