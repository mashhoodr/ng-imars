import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

export interface Video {
    id: string;
    title: string;
    content: string;
    tags: {
        name: string;
    };
    talkattributes: {
        youtubeUrl: string
    }
    featuredImage: { link: string }

}
export interface Response {
    videos: { nodes: Video[] };
}


@Injectable({
    providedIn: 'root',
})
export class AllVideosGQL extends Query<Response> {
    document = gql`
    query allVideos {
          videos {
            nodes {
            videoattributes {
                youtubeUrl
            }
            content
            tags {
                nodes {
                name
                }
            }
            title
            featuredImage {
                link
            }
            }
        }
    }
  `;
}