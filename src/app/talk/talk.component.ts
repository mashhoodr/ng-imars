import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Talk, AllTalksGQL } from '../talks.service';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss']
})

export class TalkComponent implements OnInit {
  focus: any;
  focus1: any;
  talks$: Observable<Talk[]> = null;

  constructor(private allTalksGQL: AllTalksGQL) {
    this.talks$ = this.allTalksGQL.watch()
      .valueChanges
      .pipe(
        map(result => result.data.talks.nodes)
      );

  }

  ngOnInit() { }

}
