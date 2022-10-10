import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorInterceptor } from './shared/http-interceptor.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FlowerCardComponent } from './components/cards/flower-card/flower-card.component';
import { ModalComponent } from './components/modals/modal/modal.component';
import { InfoModalComponent } from './components/modals/info-modal/info-modal.component';

import { FavoriteComponent } from './pages/favorite/favorite.component';
import { FlowersComponent } from './pages/flowers/flowers.component';
import { ListComponent } from './components/list/list.component';
import { SightingsComponent } from './pages/sightings/sightings.component';
import { SightingCardComponent } from './components/cards/sighting-card/sighting-card.component';
import { FlowerDetailComponent } from './pages/flowers/flower-detail/flower-detail.component';
import { SightingDetailComponent } from './pages/sightings/sighting-detail/sighting-detail.component';
import { CommentComponent } from './components/comment/comment.component';
import { SightingCreateComponent } from './pages/sightings/sighting-create/sighting-create.component';
import { UserComponent } from './pages/user/user.component';

// NGRX
import { StoreModule } from '@ngrx/store';
import { authReducer, userReducer } from './shared/reducers/authReducer';
import { flowerReducer } from './shared/reducers/flowerReducer';
import { favoriteReducer } from './shared/reducers/favoriteReducer';
import { sightingReducer } from './shared/reducers/sightingReducer';
import { SearchInputComponent } from './components/search-input/search-input.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FlowerCardComponent,
    ModalComponent,
    InfoModalComponent,
    FavoriteComponent,
    FlowersComponent,
    ListComponent,
    SightingsComponent,
    SightingCardComponent,
    FlowerDetailComponent,
    SightingDetailComponent,
    CommentComponent,
    SightingCreateComponent,
    UserComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
      authToken: authReducer,
      user: userReducer,
      flowers: flowerReducer,
      favorites: favoriteReducer,
      sightings: sightingReducer
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
