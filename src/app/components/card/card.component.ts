import { Component, Input, OnInit } from '@angular/core';
import { IFlower } from 'src/app/shared/models/Flower';

@Component({
  selector: 'fs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() flower!: IFlower;

  constructor() { }

  ngOnInit(): void {
  }

}
