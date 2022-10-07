import { Component, OnInit } from '@angular/core';
import { IFlower } from 'src/app/shared/models/Flower';
import { FlowerService } from 'src/app/shared/services/flower.service';

@Component({
  selector: 'fs-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.scss']
})
export class FlowersComponent implements OnInit {
  flowers!: IFlower[];

  constructor(private flowerService: FlowerService) { }

  ngOnInit(): void {
    this.flowerService.getFlowerList().subscribe({
      next: ({ flowers }: any) => {
        this.flowers = flowers;
      },
      error: err => {
        console.error(err);
        
      }
    })
  }

}
