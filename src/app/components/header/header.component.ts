import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState';
import { ModalsService } from 'src/app/shared/services/modals.service';
import { IUser } from 'src/app/shared/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'fs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user!: IUser;
  expanded: boolean = false;

  constructor(public modalService: ModalsService, public store: Store<AppState>, private router: Router) { }

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

  navigate(url: string) {
    this.router.navigateByUrl(url).then(value => {
      if(value) this.expanded = false;
    })
    this.modalService.close();
  }

}
