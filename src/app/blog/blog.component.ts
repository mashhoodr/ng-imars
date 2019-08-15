import { Component, OnInit } from '@angular/core';
import { WpheadlessService } from '../wpheadless.service';


@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

    posts$ = null;

    constructor(private wp: WpheadlessService) {
        this.posts$ = wp.getPosts();
    }

    ngOnInit() { }

}
