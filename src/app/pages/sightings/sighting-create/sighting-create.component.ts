import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState';
import { Create } from 'src/app/shared/actions/sightingAction';
import { SightingService } from 'src/app/shared/services/sighting.service';

@Component({
  selector: 'fs-sighting-create',
  templateUrl: './sighting-create.component.html',
  styleUrls: ['./sighting-create.component.scss']
})
export class SightingCreateComponent implements OnInit {
  form: FormGroup = new FormGroup(
    {
      name: new FormControl(""),
      flower_id: new FormControl(),
      description: new FormControl(""),
      latitude: new FormControl(),
      longitude: new FormControl(),
      picture: new FormControl(""),
    }
  );
  photoFile?: File;

  constructor(private route: ActivatedRoute, private sightingService: SightingService, private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.form.controls["flower_id"].setValue(this.route.snapshot.params['id']);
  }

  createSighting() {
    let form = this.form.value;
    const uploadData = new FormData();

    for (let input_name in form) {
      if (form[input_name] instanceof Blob) {
        uploadData.append(input_name, form[input_name], form[input_name].name ? form[input_name].name : "");
      }
      else
        uploadData.append(input_name, form[input_name]);
    }

    this.sightingService.createSighting(uploadData).subscribe({
      next: ({ sighting }: any) => {
        this.store.dispatch(new Create(sighting));
        this.router.navigate(['sighting', sighting.id]);
      },
      error: err => console.error(err)
    })

  }

  onPhotoChange(e: any) {
    this.photoFile = e.target.files[0];
    this.form.controls["picture"].setValue(this.photoFile);
  }

  manageCordinates(e: any) {
    let value = e.target.value;

    let seperated = value.split(',');

    this.form.controls["longitude"].setValue(+seperated[0]);
    this.form.controls["latitude"].setValue(+seperated[1]);
  }
}
