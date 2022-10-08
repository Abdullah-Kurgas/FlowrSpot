import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState';
import { ModalsService } from 'src/app/shared/services/modals.service';
import { IUser } from 'src/app/shared/models/User';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'fs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user!: IUser;

  constructor(public modalService: ModalsService, public store: Store<AppState>, public apiService: ApiService) { }

  ngOnInit(): void {
      this.store.select(state => state.user).subscribe({
      next: (user) => {
        this.user = user;
      },
      error: err => {
        console.error(err);
      }
    })
  }

}
