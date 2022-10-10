import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs';
import { IComment } from 'src/app/shared/models/Comment';
import { ISighting } from 'src/app/shared/models/Sighting';
import { SightingService } from 'src/app/shared/services/sighting.service';

@Component({
  selector: 'fs-sighting-detail',
  templateUrl: './sighting-detail.component.html',
  styleUrls: ['./sighting-detail.component.scss']
})
export class SightingDetailComponent implements OnInit {
  sighting?: ISighting;
  comments!: IComment[];

  screenWidth: number = window.screen.width;

  constructor(private sightingService: SightingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sightingService.getSightingInfo(this.route.snapshot.params['id'])
      .pipe(
        mergeMap(({ sighting }: any) => {
          this.sighting = sighting;
          return this.sightingService.getCommentList(sighting.id);
        })
      ).subscribe({
        next: ({comments}: any) => {
          this.comments = comments;
        },
        error: err => console.error(err)
      })

  }

}
