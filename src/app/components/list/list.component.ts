import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/shared/Utils';

@Component({
  selector: 'fs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() dataList!: Observable<any[]>;
  @Input() dataType!: string;

  utils = Utils;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDetails(model: string, id: number) {
    this.router.navigate([model, id]);
  }

}
