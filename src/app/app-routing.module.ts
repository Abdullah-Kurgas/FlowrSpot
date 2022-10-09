import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { FlowerDetailComponent } from './pages/flowers/flower-detail/flower-detail.component';
import { FlowersComponent } from './pages/flowers/flowers.component';
import { HomeComponent } from './pages/home/home.component';
import { SightingCreateComponent } from './pages/sightings/sighting-create/sighting-create.component';
import { SightingDetailComponent } from './pages/sightings/sighting-detail/sighting-detail.component';
import { SightingsComponent } from './pages/sightings/sightings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flowers', component: FlowersComponent },
  { path: 'sightings', component: SightingsComponent },
  { path: 'favorites', component: FavoriteComponent },
  { path: 'flower/:id', component: FlowerDetailComponent },
  { path: 'sighting', children: [
    { path: 'create', component: SightingCreateComponent },
    { path: ':id', component: SightingDetailComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
