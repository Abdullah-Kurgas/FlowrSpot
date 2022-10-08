import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/cards/flower-card/flower-card.component';
import { ModalComponent } from './components/modals/modal/modal.component';
import { InfoModalComponent } from './components/modals/info-modal/info-modal.component';

import { StoreModule } from '@ngrx/store';
import { authReducer, userReducer } from './shared/reducers/authReducer';
import { flowerReducer } from './shared/reducers/flowerReducer';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { FlowersComponent } from './pages/flowers/flowers.component';
import { ListComponent } from './components/list/list.component';
import { favoriteReducer } from './shared/reducers/favoriteReducer';
import { SightingsComponent } from './pages/sightings/sightings.component';
import { SightingCardComponent } from './components/cards/sighting-card/sighting-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    ModalComponent,
    InfoModalComponent,
    FavoriteComponent,
    FlowersComponent,
    ListComponent,
    SightingsComponent,
    SightingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      authToken: authReducer,
      user: userReducer,
      flowers: flowerReducer,
      favorites: favoriteReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
