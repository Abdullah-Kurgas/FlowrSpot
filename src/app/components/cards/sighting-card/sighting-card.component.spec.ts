import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightingCardComponent } from './sighting-card.component';

describe('SightingCardComponent', () => {
  let component: SightingCardComponent;
  let fixture: ComponentFixture<SightingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SightingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
