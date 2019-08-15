import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

const config = {
  apiUrl: 'http://wp.imars.info/wp-json/wp/v2'
}

// TODO improve the implementation by caching usign BehaviourSubject
@Injectable({
  providedIn: 'root'
})
export class WpheadlessService {

  posts = null;
  talks = null;
  videos = null;

  constructor(private http: HttpClient) { }

  getPosts() {
    // filter the published posts
    return this.http.get<any>(`${config.apiUrl}/posts`);
  }

  getTalks() {
    return this.http.get<any>(`${config.apiUrl}/talk`);
  }

  getVideos() {
    return this.http.get<any>(`${config.apiUrl}/video`);
  }

  getData() {
    return forkJoin([this.getPosts(), this.getTalks()]).pipe(
      map(res => {
        return {
          'posts': res[0],
          'talks': res[1]
        }
      })
    );
  }

}
