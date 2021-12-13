import {
  FETCH_JOKE_REQUEST,
  FETCH_JOKE_SUCCESS,
  FETCH_JOKE_FAIL,
  REMOVE_JOKE,
} from "./constants";

export const removeJoke = () => ({
  type: REMOVE_JOKE,
});

// ! testJokes because "Too Many Requests: Rate limit of 10 requests per hour exceeded. Please wait for 57 minutes and 16 seconds."
export const testJoke = () => (dispatch) => {
  dispatch({ type: FETCH_JOKE_REQUEST });

  const jokeUrl = "https://catfact.ninja/fact";
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
    .then((data) => dispatch({ type: FETCH_JOKE_SUCCESS, payload: data }))
    .catch((err) => dispatch({ type: FETCH_JOKE_FAIL, payload: err }));
};

export const fetchJoke = () => (dispatch) => {
  dispatch({ type: FETCH_JOKE_REQUEST });

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
    .then((data) => dispatch({ type: FETCH_JOKE_SUCCESS, payload: data }))
    .catch((err) => dispatch({ type: FETCH_JOKE_FAIL, payload: err }));
};
