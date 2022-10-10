import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { mergeMap, Observable } from 'rxjs';
import { AppState } from 'src/app/appState';
import { SetFlowers } from 'src/app/shared/actions/flowerAction';
import { IFlower } from 'src/app/shared/models/Flower';
import { FlowerService } from 'src/app/shared/services/flower.service';

@Component({
  selector: 'fs-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.scss']
})
export class FlowersComponent implements OnInit {
  @Input() showSearch: boolean = true;
  flowers!: Observable<IFlower[]>;

  constructor(private flowerService: FlowerService, private store: Store<AppState>, public route: ActivatedRoute) {
    this.flowers = store.select(state => state.flowers);
   }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      mergeMap((queryParams)=>{
        return this.flowerService.getFlowerList(undefined, (queryParams['query'] ? 'search':undefined), queryParams);
      })
    ).subscribe({
      next: ({flowers}: any) => {
        this.store.dispatch(new SetFlowers(flowers));
      },
      error: err => console.error(err)
    })
  }

}
