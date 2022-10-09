import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightingCreateComponent } from './sighting-create.component';

describe('SightingCreateComponent', () => {
  let component: SightingCreateComponent;
  let fixture: ComponentFixture<SightingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightingCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SightingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
