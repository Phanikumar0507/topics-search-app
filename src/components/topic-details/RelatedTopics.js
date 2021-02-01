import React from "react";
import Topic from "./Topic";

const RelatedTopics = ({ repoNode, setShowRelated }) => {
  return (
    <div className="modal-popup">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Related Topics</h3>
          <span className="close-btn" onClick={() => setShowRelated(false)}>
            &times;
          </span>
        </div>
        <div className="topics-list">
          {repoNode.topic.relatedTopics.map((relatedTopic, index) => (
            <Topic key={index} topic={relatedTopic} setShowRelated={() => {}} />
          ))}
          {repoNode.topic.relatedTopics.length === 0 && (
            <div className="no-data-text">No related topics found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RelatedTopics;
