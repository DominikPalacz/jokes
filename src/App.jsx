import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { counterDecrement, counterIncrement, fetchJoke } from "./actions";

import "./App.css";

// eslint-disable-next-line react/prop-types
const App = function Component() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);
  console.log("🚀 ~ file: App.jsx ~ line 39 ~ App ~ props", counter);

  return (
    <div className="App">
      <nav>
        <button type="button" onClick={() => dispatch(fetchJoke())}>
          get jokes
        </button>
        <Link to="/main">
          <span> Day jokes</span>
        </Link>
        <button type="button" onClick={() => dispatch(counterDecrement())}>
          -
        </button>
        <Link to="/add">
          <span> Add jokes</span>
        </Link>
        <button type="button" onClick={() => dispatch(counterIncrement())}>
          +
        </button>
        <Link to="/archives">
          <span> Archives jokes</span>
        </Link>
      </nav>
      <pre>{JSON.stringify(counter, null, 2)}</pre>
    </div>
  );
};

export default App;
