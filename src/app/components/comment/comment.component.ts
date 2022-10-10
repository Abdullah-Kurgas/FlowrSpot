import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment } from 'src/app/shared/models/Comment';
import { SightingService } from 'src/app/shared/services/sighting.service';

@Component({
  selector: 'fs-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comments?: IComment[];
  content: string = '';

  constructor(private sightingService: SightingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  createComment() {
    if(this.content.length == 0) return;

    this.sightingService.createComment({ content: this.content }, this.route.snapshot.params['id']).subscribe({
      next: ({comment}: any) => {
        this.comments?.push(comment);
        this.content = '';
      },
      error: err => console.error(err)
    });
  }

  scrollTo() {
    window.scrollBy(0, screen.height * 100);
  }

}
