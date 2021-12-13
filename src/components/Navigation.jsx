import React from "react";
import { Link } from "react-router-dom";

const Navigation = function Component() {
  return (
    <nav>
      <Link to="/">
        <span> Day jokes</span>
      </Link>
      <Link to="/add">
        <span> Add jokes</span>
      </Link>
      <Link to="/archives">
        <span> Archives jokes</span>
      </Link>
    </nav>
  );
};
export default Navigation;
