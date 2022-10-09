import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/shared/models/Comment';

@Component({
  selector: 'fs-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comments?: IComment[];

  constructor() { }

  ngOnInit(): void {
  }

}
