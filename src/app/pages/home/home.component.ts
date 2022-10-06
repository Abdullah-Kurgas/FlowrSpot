import { Component, OnInit } from '@angular/core';
import { ModalsService } from 'src/app/shared/modals.service';

@Component({
  selector: 'fs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public modalService: ModalsService) { }

  ngOnInit(): void {
  }

}
