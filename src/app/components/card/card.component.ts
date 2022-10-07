import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState';
import { ToggleFavorite } from 'src/app/shared/actions/flowerAction';
import { IFlower } from 'src/app/shared/models/Flower';

@Component({
  selector: 'fs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() flower!: IFlower;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleFavorite(flower: IFlower) {
    this.store.dispatch(new ToggleFavorite(flower));
  }

}
