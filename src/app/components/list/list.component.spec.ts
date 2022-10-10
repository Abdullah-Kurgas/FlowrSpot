import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { FlowerDetailComponent } from 'src/app/pages/flowers/flower-detail/flower-detail.component';
import { SightingDetailComponent } from 'src/app/pages/sightings/sighting-detail/sighting-detail.component';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
    let component: ListComponent;
    let fixture: ComponentFixture<ListComponent>;
    let routes = [
        { path: 'flower/:id', component: FlowerDetailComponent },
        { path: 'sighting/:id', component: SightingDetailComponent },
    ]

    let location: Location;
    let router: Router

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                RouterTestingModule.withRoutes(routes)
            ],
            declarations: [ListComponent, FlowerDetailComponent, SightingDetailComponent]
        })
            .compileComponents();

        router = TestBed.inject(Router)
        location = TestBed.inject(Location)
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        router.initialNavigation();
    });

    it('navigating to flower detail', fakeAsync(() => {
        router.navigate(['flower', '1']);
        tick();
        expect(location.path()).toBe('/flower/1')
    }));

    it('navigating to sighting detail', fakeAsync(() => {
        router.navigate(['sighting', '1']);
        tick();
        expect(location.path()).toBe('/sighting/1')
    }))


});
