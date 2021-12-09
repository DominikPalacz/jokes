import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const App = function Component() {
  return (
    <div className="App">
      <nav>
        <Link to="/main">
          <span> Day jokes</span>
        </Link>
        <Link to="/add">
          <span> Add jokes</span>
        </Link>{" "}
        <Link to="/archives">
          <span> Archives jokes</span>
        </Link>
      </nav>
    </div>
  );
};

export default App;
