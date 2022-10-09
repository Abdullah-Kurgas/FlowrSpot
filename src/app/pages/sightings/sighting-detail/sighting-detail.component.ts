import { Component, OnInit } from '@angular/core';
import { ISighting } from 'src/app/shared/models/Sighting';

@Component({
  selector: 'fs-sighting-detail',
  templateUrl: './sighting-detail.component.html',
  styleUrls: ['./sighting-detail.component.scss']
})
export class SightingDetailComponent implements OnInit {

  testItem: any = {
    comments_count: 0,
            created_at: '2022-10-01T10:15:49.528Z',
            description: 'asdf asdf asdf asdf ',
            flower: {
                id: 14,
                latin_name: 'Ophrys apifera',
                name: 'Bee orchid',
                profile_picture: '//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/014/medium/L_00010.jpg?1527514642',
            },
            id: 227,
            latitude: 12.5,
            likes_count: 0,
            longitude: 13.5,
            name: 'test vari',
            picture: '//flowrspot.s3.amazonaws.com/sightings/pictures/000/000/227/medium/index.jpg?1664619349',
            user: {
                full_name: 'tevenin norton',
                id: 7644,
            },
  }


  constructor() { }

  ngOnInit(): void {
  }

}
