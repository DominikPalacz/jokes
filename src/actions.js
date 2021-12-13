import {
  FETCH_JOKES_REQUEST,
  FETCH_JOKES_SUCCESS,
  FETCH_JOKES_FAIL,
} from "./constants";

export const COUNTER_DECREMENTED = "counter/decremented";
export const COUNTER_INCREMENTED = "counter/incremented";

export const counterDecrement = () => ({
  type: COUNTER_DECREMENTED,
});
export const counterIncrement = () => ({
  type: COUNTER_INCREMENTED,
});

export const fetchJoke = () => (dispatch) => {
  dispatch({ type: FETCH_JOKES_REQUEST });

  const jokeUrl = "https://api.jokes.one/jod";
  const options = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  fetch(jokeUrl, options)
    .then((res) => res.json())
    .then((data) => dispatch({ type: FETCH_JOKES_SUCCESS, payload: data }))
    .catch((err) => dispatch({ type: FETCH_JOKES_FAIL, payload: err }));
};
