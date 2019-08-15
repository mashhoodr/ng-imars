import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

export interface Talk {
    id: string;
    title: string;
    content: string;
    tags: {
        name: string;
    };
    talkattributes: {
        conference: string,
        location: string,
        slidesUrl: string,
        youtubeLink: string
    }

}
export interface Response {
    talks: { nodes: Talk[] };
}


@Injectable({
    providedIn: 'root',
})
export class AllTalksGQL extends Query<Response> {
    document = gql`
    query allTalks {
        talks {
            nodes {
            talkattributes {
                conference
                location
                slidesUrl
                youtubeLink
            }
            title
            content
            tags {
                nodes {
                    name
                }
            }
            }
        }
    }
  `;
}