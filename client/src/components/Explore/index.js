import React from "react";
import "./Explore.scss";
import React, { useState } from "react";

const topics = [
  "Feed",
  "Pickles",
  "Apps",
  "Sports",
  "Tech",
  "Music",
  "Borgor Maker",
  "Kanye West",
  "Cult",
];
const topicsDiv = topics.map((topic) => {
  return (
    <button className="topic" key={topic} type="button">
      {topic}
    </button>
  );
});

function Explore() {
  const [active, setActive] = useState("Feed");

  const activeClick = (topic) => {
    setActive(topic);
  };

  const topicsDiv = topics.map((topic) => {
    return (
      <button
        className={active === topic ? "active topic" : "topic"}
        onClick={() => {
          activeClick(topic);
        }}
      >
        {topic}
      </button>
    );
  });

  return (
    <div className="container">
      <div className="header">
        <h1 className="explore-h1">Explore</h1>
        <p>Find the perfect idea.</p>
      </div>
      <div className="topics-container">{topicsDiv}</div>
      <input type="text" className="search-bar" placeholder="Search" />
    </div>
  );
}

export default Explore;
