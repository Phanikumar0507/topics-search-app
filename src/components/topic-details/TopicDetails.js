import React, { useState } from "react";
import RelatedTopics from "./RelatedTopics";
import Topic from "./Topic";
import "./TopicDetails.scss";

const TopicDetails = ({ repoNode }) => {
  const [showRelated, setShowRelated] = useState(false);

  return (
    <>
      <Topic
        topic={repoNode.topic}
        setShowRelated={() => setShowRelated(true)}
      />
      {showRelated && (
        <RelatedTopics
          repoNode={repoNode}
          setShowRelated={() => setShowRelated(false)}
        />
      )}
    </>
  );
};

export default TopicDetails;
