import React, { Component } from "react";
import "./IdeaDetails.scss";

class IdeaDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: {
        title: "",
        description: "",
        topic: "",
      },
    };
  }

  componentDidMount() {
    this.setState({
      idea: {
        title: "PickleHack 2",
        description:
          "If PickleHack is so great, then why isn't there a PickleHack 2?",
        topic: "Pickles",
      },
      activeStep: 0,
    });
  }

  render() {
    const { idea } = this.state;
    return (
      <div className="details-container">
        <h1 className="idea-title">{idea.title}</h1>
        <button type="button" className="topic-tag">
          {idea.topic}
        </button>
        <p>{idea.description}</p>
      </div>
    );
  }
}

export default IdeaDetails;
