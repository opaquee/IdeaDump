import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <Link to="/explore">
        <li className="left">IdeaDump</li>
      </Link>
      <Link to="/new-idea">
        <li className="right">Add Idea</li>
      </Link>
      <Link to="/explore">
        <li className="right">Explore</li>
      </Link>
    </ul>
  );
}

export default Navbar;
