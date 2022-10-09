import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs';
import { ISighting } from 'src/app/shared/models/Sighting';
import { User } from 'src/app/shared/models/User';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'fs-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userSightings?: ISighting[];
  user?: User;

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authService.getUserData(undefined, this.route.snapshot.params['id']).pipe(
      mergeMap(({ user }: any) => {
        this.user = user;
        return this.authService.getUserData('sightings', this.route.snapshot.params['id'])
      })
    ).subscribe({
      next: ({ sightings }: any) => {
        this.userSightings = sightings
      },
      error: err => console.error(err)
    })
  }

}
