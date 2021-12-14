/* eslint-disable react/prop-types */
import React from "react";
import "./Joke.css";

import { ReactComponent as DeleteIcon } from "./times.svg";

const Joke = function Component({ data, noDelate }) {
  return (
    <div className="joke-main">
      {data.text}
      {noDelate || <DeleteIcon onClick={() => console.log(data.id)} className="delete-icon" />}
    </div>
  );
};

export default Joke;
