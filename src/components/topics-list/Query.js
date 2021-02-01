import { gql } from "@apollo/client";

export const GET_TOPICS_LIST = gql`
  query getTopics($topicNameFilter: String!) {
    search(query: $topicNameFilter, type: REPOSITORY, first: 20) {
      nodes {
        ... on Repository {
          repositoryTopics(first: 10) {
            nodes {
              topic {
                name
                stargazerCount
                relatedTopics(first: 10) {
                  name
                  stargazerCount
                }
              }
            }
          }
        }
      }
    }
  }
`;
