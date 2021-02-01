import React from "react";

const Topic = ({ topic, setShowRelated }) => {
  return (
    <div className="topic" onClick={() => setShowRelated(true)}>
      <div className="topic-name">{topic.name}</div>
      <div className="topic-star-count">{topic.stargazerCount}</div>
    </div>
  );
};

export default Topic;
