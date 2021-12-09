import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import store from "./store";
import "./App.css";

// eslint-disable-next-line react/prop-types
const App = function Component({ dispatch }) {
  // function dispatch() {
  //   store.dispatch({ type: "counter/incremented" });
  // }
  // dispatch();
  return (
    <div className="App">
      <nav>
        <Link to="/main">
          <span> Day jokes</span>
          <button
            type="button"
            onClick={() => dispatch({ type: "counter/incremented" })}
          >
            +
          </button>
        </Link>
        <Link to="/add">
          <span> Add jokes</span>
        </Link>
        <Link to="/archives">
          <span> Archives jokes</span>
        </Link>
      </nav>
    </div>
  );
};

// export default App;
// export default connect(null, mapDispatchToProps)(App);
export default connect()(App);
