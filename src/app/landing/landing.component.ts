import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  talks = [1, 2, 3, 4, 5, 6, 3, 4]

  constructor() { }

  ngOnInit() { }

}
