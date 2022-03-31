import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const ProfileDocument = gql`
    query Profile($repositoriesBefore: String, $repositoriesAfter: String) {
  user(login: "Yamasou") {
    avatarUrl(size: 100)
    name
    login
    gists(first: 10) {
      edges {
        cursor
        node {
          id
          isPublic
          name
          description
          url
        }
      }
    }
    repositories(first: 10, before: $repositoriesBefore, after: $repositoriesAfter) {
      edges {
        cursor
        node {
          id
          description
          isPrivate
          name
          primaryLanguage {
            id
            color
            name
          }
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    `;

export function useProfileQuery(options?: Omit<Urql.UseQueryArgs<ProfileQueryVariables>, 'query'>) {
  return Urql.useQuery<ProfileQuery>({ query: ProfileDocument, ...options });
};