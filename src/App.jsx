import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./App.css";

// const App = function Component({ dispatch, state }) {
// eslint-disable-next-line react/prop-types
const App = function Component({ dispatch, counter }) {
  console.log("🚀 ~ file: App.jsx ~ line 39 ~ App ~ props", counter);

  return (
    <div className="App">
      <nav>
        <button type="button" onClick={(e) => console.log(e)}>
          get jokes
        </button>
        <Link to="/main">
          <span> Day jokes</span>
        </Link>
        <button
          type="button"
          onClick={() => dispatch({ type: "counter/decremented" })}
        >
          -
        </button>
        <Link to="/add">
          <span> Add jokes</span>
        </Link>
        <button
          type="button"
          onClick={() => dispatch({ type: "counter/incremented" })}
        >
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

const mapStateToProps = (state) => ({
  counter: state,
});

export default connect(mapStateToProps)(App);
