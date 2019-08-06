import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HomePage} from '../home/home.page';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './create.page.html',
    styleUrls: ['./create.page.scss'],
})
export class CreatePage {

    postForm: FormGroup;

    constructor(private router: Router, private navController: NavController, private fb: FormBuilder) {
        this.createForm();
    }

    goBack() {
        this.navController.back();
    }

    onFormSubmit() {
        if (this.postForm.valid) {
            const post = {
                id: HomePage.allPost.length + 1,
                title: this.postForm.get('title').value,
                body: this.postForm.get('body').value
            };
            HomePage.addNewPost(post);
            this.router.navigate(['/home']).then();
        }
    }

    ionViewDidEnter() {
        this.createForm();
    }

    createForm() {
        this.postForm = this.fb.group({
            title: ['', [Validators.maxLength(20), Validators.required]],
            body: ['', [Validators.maxLength(256), Validators.required]]
        });
    }
}

