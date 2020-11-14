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

const ideas = [
  {
    title: "Mat Lam Tam",
    description: "⁦test⁧",
    visible: false,
    author: "Ulises",
    topic: "Feed",
  },
  {
    title: "Daltfresh",
    description: "Œ„´‰ˇÁ¨ˆØ∏”’",
    visible: true,
    author: "Ivor",
    topic: "Feed",
  },
  {
    title: "Pannier",
    description: "1",
    visible: false,
    author: "Gian",
    topic: "Feed",
  },
  {
    title: "Bitchip",
    description: "␡",
    visible: false,
    author: "Evan",
    topic: "Feed",
  },
  {
    title: "Quo Lux",
    description:
      "˙ɐnbᴉlɐ ɐuƃɐɯ ǝɹolop ʇǝ ǝɹoqɐl ʇn ʇunpᴉpᴉɔuᴉ ɹodɯǝʇ poɯsnᴉǝ op pǝs 'ʇᴉlǝ ƃuᴉɔsᴉdᴉpɐ ɹnʇǝʇɔǝsuoɔ 'ʇǝɯɐ ʇᴉs ɹolop ɯnsdᴉ ɯǝɹo˥",
    visible: false,
    author: "Lannie",
    topic: "Feed",
  },
  {
    title: "Stringtough",
    description: "｀ｨ(´∀｀∩",
    visible: true,
    author: "Bary",
    topic: "Pickles",
  },
  {
    title: "Stronghold",
    description: "ヽ༼ຈل͜ຈ༽ﾉ ヽ༼ຈل͜ຈ༽ﾉ ",
    visible: true,
    author: "Raymund",
    topic: "Pickles",
  },
  {
    title: "Sonsing",
    description: "⁰⁴⁵",
    visible: false,
    author: "Julian",
    topic: "Pickles",
  },
  {
    title: "Biodex",
    description: "œ∑´®†¥¨ˆøπ“‘",
    visible: false,
    author: "Benyamin",
    topic: "Pickles",
  },
  {
    title: "Tempsoft",
    description: "-1/2",
    visible: true,
    author: "Kareem",
    topic: "Pickles",
  },
  {
    title: "Mat Lam Tam",
    description: "-1.00",
    visible: true,
    author: "Darrick",
    topic: "Apps",
  },
  {
    title: "Cardify",
    description:
      "˙ɐnbᴉlɐ ɐuƃɐɯ ǝɹolop ʇǝ ǝɹoqɐl ʇn ʇunpᴉpᴉɔuᴉ ɹodɯǝʇ poɯsnᴉǝ op pǝs 'ʇᴉlǝ ƃuᴉɔsᴉdᴉpɐ ɹnʇǝʇɔǝsuoɔ 'ʇǝɯɐ ʇᴉs ɹolop ɯnsdᴉ ɯǝɹo˥",
    visible: true,
    author: "Moshe",
    topic: "Apps",
  },
  {
    title: "Home Ing",
    description: "(ﾉಥ益ಥ）ﾉ﻿ ┻━┻",
    visible: false,
    author: "Garrick",
    topic: "Apps",
  },
  {
    title: "Temp",
    description: "",
    visible: false,
    author: "Christoph",
    topic: "Sports",
  },
  {
    title: "Lotstring",
    description: "Description",
    visible: false,
    author: "Clark",
    topic: "Sports",
  },
];

function Explore() {
  const [active, setActive] = useState("Feed");

  const activeClick = (topic) => {
    setActive(topic);
  };

  const topicsDiv = topics.map((topic) => {
    return (
      <button
        type="button"
        key={topic}
        className={active === topic ? "active topic" : "topic"}
        onClick={() => {
          activeClick(topic);
        }}
      >
        {topic}
      </button>
    );
  });

  const ideasDiv = ideas.map((idea, id) => {
    return (
      <div
        key={id.toString}
        className="idea"
        style={{ display: active === idea.topic ? "block" : "none" }}
      >
        <div className="idea-title">{idea.title}</div>
        <footer className="explore-footer">{idea.author}</footer>
      </div>
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
      <div className="ideas-container">{ideasDiv}</div>
    </div>
  );
}

export default Explore;
