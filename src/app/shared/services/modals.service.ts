import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {
  opened: any = {};

  constructor() { }

  open(modal: string, type: string) {
    this.opened.modal = modal;
    this.opened.type = type;
  }

  close(reload: boolean = false) {
    this.opened = {};
    if(reload) location.reload();
  }
}
