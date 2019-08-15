import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

export interface Post {
    id: string;
    title: string;
    content: string;
    author: {
        name: string;
    };
}
export interface Response {
    posts: { nodes: Post[] };
}


@Injectable({
    providedIn: 'root',
})
export class AllPostsGQL extends Query<Response> {
    document = gql`
    query allPosts {
        posts {
            nodes {
                title
                date
                content
                author {
                    name
                }
            }
        }
    }
  `;
}