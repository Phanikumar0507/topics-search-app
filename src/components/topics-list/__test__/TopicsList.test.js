import TopicsList from "../TopicsList";
import { GET_TOPICS_LIST } from "../Query";
import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";

const mocks = [
  {
    request: {
      query: GET_TOPICS_LIST,
      variables: { topicNameFilter: "topic=react" },
    },
    result: {
      data: {
        search: {
          nodes: [
            {
              repositoryTopics: {
                nodes: [
                  {
                    topic: {
                      name: "react",
                      stargazerCount: 44075,
                      relatedTopics: [
                        {
                          name: "angular",
                          stargazerCount: 27310,
                          __typename: "Topic",
                        },
                        {
                          name: "react-native",
                          stargazerCount: 15221,
                          __typename: "Topic",
                        },
                        {
                          name: "vue",
                          stargazerCount: 33970,
                          __typename: "Topic",
                        },
                        {
                          name: "minify",
                          stargazerCount: 5,
                          __typename: "Topic",
                        },
                        {
                          name: "css",
                          stargazerCount: 42734,
                          __typename: "Topic",
                        },
                        {
                          name: "react-components",
                          stargazerCount: 74,
                          __typename: "Topic",
                        },
                        {
                          name: "css-preprocessors",
                          stargazerCount: 7,
                          __typename: "Topic",
                        },
                        {
                          name: "redux",
                          stargazerCount: 7912,
                          __typename: "Topic",
                        },
                        {
                          name: "bootstrap",
                          stargazerCount: 32959,
                          __typename: "Topic",
                        },
                        {
                          name: "html",
                          stargazerCount: 49404,
                          __typename: "Topic",
                        },
                      ],
                      __typename: "Topic",
                    },
                    __typename: "RepositoryTopic",
                  },
                  {
                    topic: {
                      name: "react-talks",
                      stargazerCount: 0,
                      relatedTopics: [],
                      __typename: "Topic",
                    },
                    __typename: "RepositoryTopic",
                  },
                ],
                __typename: "RepositoryTopicConnection",
              },
              __typename: "Repository",
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: GET_TOPICS_LIST,
      variables: { first: 8 },
    },
    error: new Error("Something went wrong"),
  },
];

describe("TopicsList Component", () => {
  it("should render without crash", () => {
    render(
      <MockedProvider mocks={mocks}>
        <TopicsList />
      </MockedProvider>
    );
  });
});
