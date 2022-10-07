import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFlower } from 'src/app/shared/models/Flower';
import { FlowerService } from 'src/app/shared/services/flower.service';

@Component({
  selector: 'fs-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favorites!: Observable<IFlower[]>;

  constructor(private flowerService: FlowerService) { }

  ngOnInit(): void {
    this.flowerService.getFlowerFavoriteList().subscribe({
      next: ({favorites}: any) => {
        this.favorites = favorites;
      },
      error: err => console.error(err)
    })
  }

}
