import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomePage} from './home.page';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {CreatePage} from '../create/create.page';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

describe('HomePage', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule, RouterModule.forRoot([]), RouterTestingModule.withRoutes([{
                path: 'create', component: CreatePage
            }]), IonicModule],
            declarations: [HomePage, CreatePage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents().then();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create all button', () => {
        const homePageElement: HTMLElement = fixture.nativeElement;
        const buttons = homePageElement.querySelectorAll('ion-button');
        expect(buttons.length).toEqual(2);
    });

    it('List post should show 10 init post', () => {
        const homePageElement: HTMLElement = fixture.nativeElement;
        const posts = homePageElement.querySelectorAll('.post');
        expect(posts.length).toEqual(10);
    });

    it('Search post: qui. should show 4 post', () => {
        const homePageElement: HTMLElement = fixture.nativeElement;
        component.searchText = 'qui';
        component.search();
        fixture.detectChanges();
        const post = homePageElement.querySelectorAll('.post');
        expect(post.length).toEqual(4);
    });

    it('Search post: "". should show 10 post', () => {
        const homePageElement: HTMLElement = fixture.nativeElement;
        component.searchText = '';
        component.search();
        fixture.detectChanges();
        const post = homePageElement.querySelectorAll('.post');
        expect(post.length).toEqual(10);
    });

    it('Should add new post after run addNewPost', () => {
        const post = {
            id: 11,
            title: 'test',
            body: 'testtest'
        };
        HomePage.addNewPost(post);
        component.ionViewDidEnter();
        fixture.detectChanges();
        const homePageElement: HTMLElement = fixture.nativeElement;
        const posts = homePageElement.querySelectorAll('.post');
        expect(posts.length).toEqual(11);
    });

    it('should navigate to create page when click create btn', () => {
        spyOn(component, 'navToCreate').and.callThrough();
        document.querySelectorAll('ion-button')[1].click();
        expect(component.navToCreate).toHaveBeenCalled();
    });
});
