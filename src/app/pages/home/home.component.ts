import { Component, OnInit } from '@angular/core';
import { IFlower } from 'src/app/shared/models/Flower';
import { ModalsService } from 'src/app/shared/services/modals.service';

@Component({
  selector: 'fs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  flowers!: IFlower[];

  constructor(public modalService: ModalsService) { }

  ngOnInit(): void { }

}
