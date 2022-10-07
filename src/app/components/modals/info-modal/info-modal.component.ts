import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/appState';
import { Logout } from 'src/app/shared/actions/authAction';
import { User } from 'src/app/shared/models/User';
import { ModalsService } from 'src/app/shared/services/modals.service';

@Component({
  selector: 'fs-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {
  profiles: Observable<User[]>;

  @Input() type!: string;

  constructor(public modalService: ModalsService, public store: Store<AppState>) {
    this.profiles = this.store.select((state: any) => {
      console.log(state);
      
     return [state.user]
    });
   }

  ngOnInit(): void { }

  userLogout() {
    this.store.dispatch(new Logout());
    this.modalService.close();
  }

}
