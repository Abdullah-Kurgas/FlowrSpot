import { Component } from '@angular/core';
import { ModalsService } from './shared/services/modals.service';

@Component({
  selector: 'fs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FlowrSpot';

  constructor(public modalService: ModalsService) {}
}
