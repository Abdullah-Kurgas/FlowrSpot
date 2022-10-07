import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState';
import { ToggleFavorite } from 'src/app/shared/actions/flowerAction';
import { IFlower } from 'src/app/shared/models/Flower';
import { FlowerService } from 'src/app/shared/services/flower.service';

@Component({
  selector: 'fs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() flower!: IFlower;

  constructor(private store: Store<AppState>, private flowerService: FlowerService) { }

  ngOnInit(): void {
  }

  toggleFavorite(flower: IFlower) {
    
    if(!flower.favorite) {
      this.flowerService.addToFavoriteList(flower.id).subscribe({
        next: (res) => {
          console.log(res);
          
          this.store.dispatch(new ToggleFavorite(flower));
        },
        error: err => console.error(err)
      })
    }
  }

}
