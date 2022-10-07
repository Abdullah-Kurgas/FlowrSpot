import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() dataList!: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
