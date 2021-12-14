/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { removeJoke } from "../actions";
import "./Joke.css";

import { ReactComponent as DeleteIcon } from "../img/times.svg";

const Joke = function Component({ data, noDelate }) {
  const dispatch = useDispatch();
  return (
    <div className="joke-main">
      {data?.text}
      {noDelate || (
        <DeleteIcon
          onClick={() => {
            dispatch(removeJoke(data.id));
          }}
          className="delete-icon"
        />
      )}
    </div>
  );
};

export default Joke;
