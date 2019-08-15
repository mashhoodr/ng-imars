import { Component, OnInit } from '@angular/core';
import { WpheadlessService } from '../wpheadless.service';
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    data$ = null;

    constructor(private wp: WpheadlessService) {
        this.data$ = wp.getData();
    }

    ngOnInit() { }

}
