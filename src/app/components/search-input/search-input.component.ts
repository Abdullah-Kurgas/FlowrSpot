import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'fs-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  query: string = this.route.snapshot.queryParams['query'];


  constructor(private router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  searchFlowers(e: any) {
    let queryParams: Params = {
      query: this.query
    }

    if (this.query == '') queryParams = {};

    if (e.keyCode == 13) {
      this.router.navigate(['flowers'], {
        queryParams: queryParams
      })
    }
  }

}
