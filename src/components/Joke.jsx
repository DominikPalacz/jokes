/* eslint-disable react/prop-types */
import React from "react";
import "./Joke.css";

const Joke = function Component({ data }) {
  return <div className="joke-main">{data}</div>;
};

export default Joke;
