import React, { Component } from "react";
import "./TopicsContainer.scss";
import TopicsList from "../../components/topics-list/TopicsList";

class TopicsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicText: "react",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { topicText } = this.state;
    return (
      <div className="topics-container">
        <div className="topics-container__search-container">
          <input
            id="search_box"
            className="topics-container__search-container__search-box"
            type="text"
            name="topicText"
            value={this.state.topicText}
            onChange={this.handleChange}
          />
        </div>
        <TopicsList topicName={topicText} />
      </div>
    );
  }
}

export default TopicsContainer;
