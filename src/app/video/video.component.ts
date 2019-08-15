import { Component, OnInit } from '@angular/core';
import { WpheadlessService } from '../wpheadless.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})

export class VideoComponent implements OnInit {
  focus: any;
  focus1: any;
  videos$ = null;

  constructor(private wp: WpheadlessService) {
    this.videos$ = wp.getVideos();

  }

  ngOnInit() { }

}
