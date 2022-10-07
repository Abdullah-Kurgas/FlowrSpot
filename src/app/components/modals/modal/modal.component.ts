import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState';
import { AuthToken, Login, Register } from 'src/app/shared/actions/authAction';
import { ModalsService } from 'src/app/shared/services/modals.service';
import { IUser, User } from 'src/app/shared/models/User';
import { AuthService } from 'src/app/shared/services/auth.service';
import { mergeMap, tap } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'fs-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  user: User = new User();

  @Input() type!: string;

  constructor(public modalService: ModalsService, private store: Store<AppState>, private authService: AuthService, private apiService: ApiService) { }

  ngOnInit(): void {
  }

  submit(type: string) {

    this.authService.getAuthToken(type, this.user)
    .pipe(
      mergeMap( (token: any) => {
        this.apiService.authToken = token['auth_token'];
        this.store.dispatch(new AuthToken(token['auth_token']));
        
        return this.authService.getUserData('me');
      })
    )
    .subscribe({
      next: ({ user }: any) => {
        if(type == 'register') {
          this.store.dispatch(new Register(user));
        } else {
          this.store.dispatch(new Login(user));
        }
        user = new User();
        this.modalService.close();
      },
      error: err => console.error(err)
    });
  }

}
