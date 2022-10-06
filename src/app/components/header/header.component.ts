import { Component, OnInit } from '@angular/core';
import { ModalsService } from 'src/app/shared/modals.service';

@Component({
  selector: 'fs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public modalService: ModalsService) { }

  ngOnInit(): void {
  }

}
