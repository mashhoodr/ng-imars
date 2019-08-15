import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post, AllPostsGQL } from '../posts.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

    posts$: Observable<Post[]>;

    constructor(private allPostsGQL: AllPostsGQL) {
        this.posts$ = this.allPostsGQL.watch()
            .valueChanges
            .pipe(
                map(result => result.data.posts.nodes)
            );
    }

    ngOnInit() { }

}
