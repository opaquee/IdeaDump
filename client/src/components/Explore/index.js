/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import "./Explore.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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

function Explore() {
  const [active, setActive] = useState("Feed");
  const [ideas] = useState([
    {
      title: "Mat Lam Tam",
      description: "⁦test⁧",
      visible: false,
      author: "Ulises",
      topic: "Feed",
      id: 1,
    },
    {
      title: "Daltfresh",
      description: "Œ„´‰ˇÁ¨ˆØ∏”’",
      visible: true,
      author: "Ivor",
      topic: "Feed",
      id: 2,
    },
    {
      title: "Pannier",
      description: "1",
      visible: false,
      author: "Gian",
      topic: "Feed",
      id: 2,
    },
    {
      title: "Bitchip",
      description: "␡",
      visible: false,
      author: "Evan",
      topic: "Feed",
      id: 2,
    },
    {
      title: "Quo Lux",
      description:
        "˙ɐnbᴉlɐ ɐuƃɐɯ ǝɹolop ʇǝ ǝɹoqɐl ʇn ʇunpᴉpᴉɔuᴉ ɹodɯǝʇ poɯsnᴉǝ op pǝs 'ʇᴉlǝ ƃuᴉɔsᴉdᴉpɐ ɹnʇǝʇɔǝsuoɔ 'ʇǝɯɐ ʇᴉs ɹolop ɯnsdᴉ ɯǝɹo˥",
      visible: false,
      author: "Lannie",
      topic: "Feed",
      id: 2,
    },
    {
      title: "Stringtough",
      description: "｀ｨ(´∀｀∩",
      visible: true,
      author: "Bary",
      topic: "Pickles",
      id: 2,
    },
    {
      title: "Stronghold",
      description: "ヽ༼ຈل͜ຈ༽ﾉ ヽ༼ຈل͜ຈ༽ﾉ ",
      visible: true,
      author: "Raymund",
      topic: "Pickles",
      id: 2,
    },
    {
      title: "Sonsing",
      description: "⁰⁴⁵",
      visible: false,
      author: "Julian",
      topic: "Pickles",
      id: 2,
    },
    {
      title: "Biodex",
      description: "œ∑´®†¥¨ˆøπ“‘",
      visible: false,
      author: "Benyamin",
      topic: "Pickles",
      id: 2,
    },
    {
      title: "Tempsoft",
      description: "-1/2",
      visible: true,
      author: "Kareem",
      topic: "Pickles",
      id: 2,
    },
    {
      title: "Mat Lam Tam",
      description: "-1.00",
      visible: true,
      author: "Darrick",
      topic: "Apps",
      id: 2,
    },
    {
      title: "Cardify",
      description:
        "˙ɐnbᴉlɐ ɐuƃɐɯ ǝɹolop ʇǝ ǝɹoqɐl ʇn ʇunpᴉpᴉɔuᴉ ɹodɯǝʇ poɯsnᴉǝ op pǝs 'ʇᴉlǝ ƃuᴉɔsᴉdᴉpɐ ɹnʇǝʇɔǝsuoɔ 'ʇǝɯɐ ʇᴉs ɹolop ɯnsdᴉ ɯǝɹo˥",
      visible: true,
      author: "Moshe",
      topic: "Apps",
      id: 2,
    },
    {
      title: "Home Ing",
      description: "(ﾉಥ益ಥ）ﾉ﻿ ┻━┻",
      visible: false,
      author: "Garrick",
      topic: "Apps",
      id: 2,
    },
    {
      title: "Temp",
      description: "",
      visible: false,
      author: "Christoph",
      topic: "Sports",
      id: 2,
    },
    {
      title: "Lotstring",
      description: "Description",
      visible: false,
      author: "Clark",
      topic: "Sports",
      id: 2,
    },
  ]);
  const [search, setSearch] = useState("");

  const activeClick = (topic) => {
    setActive(topic);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // const ideaNavigate = (idea) => {
  //   console.log(idea.title);
  // };

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

  const ideasDiv = ideas
    .filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    })
    .map((idea, id) => {
      return (
        <div
          key={id.toString()}
          className="idea"
          style={{ display: active === idea.topic ? "block" : "none" }}
        >
          <Link
            key={id.toString()}
            to={`idea/${idea.id}`}
            style={{
              textDecoration: "none",
              color: "#494949",
            }}
          >
            <div className="idea-title">{idea.title}</div>
            <footer className="explore-footer">{idea.author}</footer>
          </Link>
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
      <input
        type="text"
        className="search-bar"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
      <div className="ideas-container">{ideasDiv}</div>
    </div>
  );
}

export default Explore;
