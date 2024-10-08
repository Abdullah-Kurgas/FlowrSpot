import { Component, Input, OnInit } from '@angular/core';
import { ISighting, Sighting } from 'src/app/shared/models/Sighting';

@Component({
  selector: 'fs-sighting-card',
  templateUrl: './sighting-card.component.html',
  styleUrls: ['./sighting-card.component.scss']
})
export class SightingCardComponent implements OnInit {
  @Input() sighting?: ISighting;
  @Input() cardType: string = 'vertical';

  constructor() { }

  ngOnInit(): void {
  }

}
