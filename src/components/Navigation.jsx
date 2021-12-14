import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = function Component() {
  return (
    <nav className="navigation-main">
      <Link className="navigation-element" to="/">
        <span>Day jokes</span>
      </Link>
      <Link className="navigation-element" to="/add">
        <span>Add jokes</span>
      </Link>
      <Link className="navigation-element" to="/archives">
        <span>Archives jokes</span>
      </Link>
    </nav>
  );
};
export default Navigation;
