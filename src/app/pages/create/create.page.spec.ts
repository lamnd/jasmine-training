import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreatePage} from './create.page';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterTestingModule} from '@angular/router/testing';
import {HomePage} from '../home/home.page';

describe('CreatePage', () => {
    let component: CreatePage;
    let fixture: ComponentFixture<CreatePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule, IonicModule, RouterTestingModule.withRoutes([{
                path: 'home', component: HomePage
            }])],
            declarations: [CreatePage, HomePage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents().then();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreatePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not add new post after invalid submit', () => {
        spyOn(HomePage, 'addNewPost');
        component.createForm();
        component.onFormSubmit();
        expect(HomePage.addNewPost).not.toHaveBeenCalled();
    });

    it('should add new post after valid submit', () => {
        component.postForm.setValue({
            title: 'test',
            body: 'test'
        });

        spyOn(HomePage, 'addNewPost');
        component.onFormSubmit();
        expect(HomePage.addNewPost).toHaveBeenCalledWith({
            id: 11,
            title: 'test',
            body: 'test'
        });
    });

    it('should reset form when enter page', () => {
        spyOn(component, 'createForm');
        component.ionViewDidEnter();
        expect(component.createForm).toHaveBeenCalled();
    });

    it('should call goBack when click back btn', () => {
        spyOn(component, 'goBack').and.callThrough();
        document.querySelector('ion-button').click();
        expect(component.goBack).toHaveBeenCalled();
    });

    it('should show 1 error msg when postForm title had more than 20 character', () => {
        component.postForm.setValue({
            title: 'testtesttesttesttesttesttesttest',
            body: 'test'
        });
        fixture.detectChanges();
        const homePageElement: HTMLElement = fixture.nativeElement;
        const labelError = homePageElement.querySelectorAll('.error');
        expect(labelError.length).toEqual(1);
    });

});
