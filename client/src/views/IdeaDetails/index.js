import React, { Component } from "react";
import { MobileStepper, Button } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./IdeaDetails.scss";
import ApiClient from "../../ApiClient";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

class IdeaDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Loading",
      description: "",
      topic: "Topic",
      author: "Author",
      activeStep: 0,
      maxSteps: 0,
    };
  }

  async componentDidMount() {
    const { ideaId } = this.props;
    await ApiClient.get(`/idea/${ideaId}`).then((idea) => {
      const { title, description, topic, author } = idea;
      this.setState({
        title,
        description,
        topic,
        author,
        maxSteps: tutorialSteps.length,
      });
    });
  }

  render() {
    const {
      title,
      description,
      topic,
      author,
      activeStep,
      maxSteps,
    } = this.state;
    return (
      <div>
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={(step) => {
            this.setState({
              activeStep: step,
            });
          }}
          interval={6000}
          enableMouseEvents
          slideClassName="carousel"
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className="idea-image"
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={() => {
                this.setState({
                  activeStep: activeStep + 1,
                });
              }}
              disabled={activeStep === maxSteps - 1}
            >
              Next
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={() => {
                this.setState({
                  activeStep: activeStep - 1,
                });
              }}
              disabled={activeStep === 0}
            >
              Back
            </Button>
          }
        />
        <div className="details-container">
          <h1 className="idea-details-title">{title}</h1>
          <h3>
            Created by <b>{author}</b>
          </h3>
          <button type="button" className="topic-tag">
            {topic}
          </button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default IdeaDetails;
