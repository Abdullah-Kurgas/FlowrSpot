import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { authReducer, userReducer } from 'src/app/shared/reducers/authReducer';
import { favoriteReducer } from 'src/app/shared/reducers/favoriteReducer';
import { flowerReducer } from 'src/app/shared/reducers/flowerReducer';
import { sightingReducer } from 'src/app/shared/reducers/sightingReducer';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot({
          authToken: authReducer,
          user: userReducer,
          flowers: flowerReducer,
          favorites: favoriteReducer,
          sightings: sightingReducer
        })
      ],
      declarations: [ModalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('check are inputs empty for login when input are not empty', () => {
    component.type = 'login';
    component.user.email = 'test@gmail.com'
    component.user.password = '123456';

    let isValide = component.checkInputs();
    
    expect(isValide).toBe(true);
  });

  it('check are inputs empty for login when inputs are empty', () => {
    component.type = 'login';

    let isValide = component.checkInputs();
    
    expect(isValide).toBe(false);
  });

  it('check are inputs empty for register when inputs are not empty', () => {
    component.user.email = 'test@gmail.com'
    component.user.password = '123456';
    component.user.date_of_birth = 'Mon 13 Sep 2000'
    component.user.first_name = 'Test name'
    component.user.last_name = 'Test last name'

    let isValide = component.checkInputs();
    
    expect(isValide).toBe(true);
  });

  it('check are inputs empty for register when inputs are empty', () => {

    let isValide = component.checkInputs();
    
    expect(isValide).toBe(false);
  });
});
