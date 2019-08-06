import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HomePage} from '../home/home.page';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage {
    post: {
        id: number;
        title: string;
        body: string;
    };

    constructor(private router: Router, private route: ActivatedRoute, private navController: NavController) {

        this.post = HomePage.allPost.filter(post =>
            post.id.toString() === route.snapshot.params.id)[0];
    }

    goBack() {
        this.navController.back();
    }

}
