import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailPage} from './detail.page';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {HomePage} from '../home/home.page';
import {RouterTestingModule} from '@angular/router/testing';

describe('DetailPage', () => {
    let component: DetailPage;
    let fixture: ComponentFixture<DetailPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterModule.forRoot([]), RouterTestingModule.withRoutes([{
                path: 'home', component: HomePage
            }])],
            declarations: [DetailPage, HomePage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [{provide: ActivatedRoute, useValue: {snapshot: {params: {id: '1'}}}}]
        })
            .compileComponents().then();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show all 4 text fields', () => {
        const detailPageElement: HTMLElement = fixture.nativeElement;
        const postId = detailPageElement.querySelector('.post-id');
        const postUserId = detailPageElement.querySelector('.post-user-id');
        const postTitle = detailPageElement.querySelector('.post-title');
        const postBody = detailPageElement.querySelector('.post-body');
        expect(postId).toBeTruthy();
        expect(postUserId).toBeTruthy();
        expect(postTitle).toBeTruthy();
        expect(postBody).toBeTruthy();
    });

    it('should call goBack when click back btn', () => {
        spyOn(component, 'goBack').and.callThrough();
        document.querySelector('ion-button').click();
        expect(component.goBack).toHaveBeenCalled();
    });
});
