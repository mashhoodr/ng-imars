import { Component, OnInit } from '@angular/core';
import { WpheadlessService } from '../wpheadless.service';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss']
})

export class TalkComponent implements OnInit {
  focus: any;
  focus1: any;
  talks$ = null;

  constructor(private wp: WpheadlessService) {
    this.talks$ = wp.getTalks();

  }

  ngOnInit() { }

}
