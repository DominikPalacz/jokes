import {
  FETCH_JOKE_REQUEST,
  FETCH_JOKE_SUCCESS,
  FETCH_JOKE_FAIL,
  REMOVE_JOKE,
  ADD_JOKE,
} from "./constants";

export const addJoke = (data) => ({
  type: ADD_JOKE,
  data, 
});

export const removeJoke = (data) => ({
  type: REMOVE_JOKE,
  data, 
});

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
