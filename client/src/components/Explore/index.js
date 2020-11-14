import "./Explore.scss";

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
  return <button className="topic">{topic}</button>;
});

function Explore() {
  return (
    <div className="container">
      <div className="topics-container">{topicsDiv}</div>
    </div>
  );
}

export default Explore;
