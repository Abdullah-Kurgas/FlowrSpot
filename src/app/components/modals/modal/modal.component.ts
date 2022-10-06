import { Component, Input, OnInit } from '@angular/core';
import { ModalsService } from 'src/app/shared/modals.service';

@Component({
  selector: 'fs-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() type!: string;

  constructor(public modalService: ModalsService) { }

  ngOnInit(): void {
  }

}
