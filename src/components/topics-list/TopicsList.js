import { useQuery } from "@apollo/client";
import TopicDetails from "../topic-details/TopicDetails";
import { GET_TOPICS_LIST } from "./Query";

const TopicsList = ({ topicName }) => {
  const topicNameFilter = `topic=${topicName}`;
  const { loading, error, data } = useQuery(GET_TOPICS_LIST, {
    variables: { topicNameFilter },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      {data &&
        data.search.nodes.map((node, index) => (
          <div key={index}>
            {node.repositoryTopics.nodes.map((repoNode, index1) => (
              <TopicDetails repoNode={repoNode} key={index1}></TopicDetails>
            ))}
          </div>
        ))}
      {data && data.search.nodes.length === 0 && (
        <div className="no-data-text">No topics found.</div>
      )}
    </div>
  );
};

export default TopicsList;
