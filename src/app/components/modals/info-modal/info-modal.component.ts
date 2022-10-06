import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fs-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {

  @Input() type!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
