import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private router: Router) {
        this.posts = [...HomePage.allPost];
        this.searchText = '';
    }

    static allPost = [
        {
            id: 1,
            title: 'sunt aut facere repellat ',
            body: 'quia et suscipit\nsuscipit tiae ut ut quas totam\n' +
                'nostrum rerum est autem sunt rem eveniet architecto'
        },
        {
            id: 2,
            title: 'qui est esse',
            body: 'est rerum tempore vitae\nsequi sint nihil reprehender neque\nfugiat blanditiis voluptate' +
                ' porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
        },
        {
            id: 3,
            title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
            body: 'et iusto sed quo iure\nvoluptateigendi aut ad\nvoluptatem doloribus vel accs pariatu' +
                'r\nmolestiae porro eius odio et labore et velit aut'
        },
        {
            id: 4,
            title: 'eum et est occaecati',
            body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesci' +
                'unt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
        },
        {
            id: 5,
            title: 'nesciunt quas odio',
            body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus ' +
                'quis\nest aut tenetur dolor neque'
        },
        {
            id: 6,
            title: 'dolorem eum magni eos aperiam quia',
            body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab' +
                ' reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'
        },
        {
            id: 7,
            title: 'magnam facilis autem',
            body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia' +
                '\nsunt ut sequi eos ea sed quas'
        },
        {
            id: 8,
            title: 'dolorem dolore est ipsam',
            body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiore' +
                's excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'
        },
        {
            id: 9,
            title: 'nesciunt iure omnis dolorem tempora et accusantium',
            body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provid' +
                'ent voluptas autem voluptas'
        },
        {
            id: 10,
            title: 'optio molestias id quia eum',
            body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamu' +
                's veritatis error'
        }
    ];
    searchText: string;
    posts: { id: number; title: string; body: string }[] = [];

    static addNewPost(post) {
        HomePage.allPost.push(post);
    }

    search() {
        if (this.searchText !== '') {
            this.posts = HomePage.allPost.filter(post => post.title.includes(this.searchText));
        } else {
            this.posts = [...HomePage.allPost];
        }
    }

    navToCreate() {
        this.router.navigate([`/create`]).then();
    }

    ionViewDidEnter() {
        this.posts = [...HomePage.allPost];
        this.searchText = '';
    }
}
