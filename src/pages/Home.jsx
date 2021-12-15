import React from "react";
import { useSelector } from "react-redux";

import Spiner from "../components/Spiner";
import Joke from "../components/Joke";

const Home = function Component() {
  const { isLoading, errorMessage } = useSelector((state) => state);

  const appState = useSelector((state) => state);
  const jokeText = isLoading || appState.dayJoke?.contents?.jokes[0]?.joke;
  const errMessage = errorMessage || appState.dayJoke?.error;

  return isLoading ? <Spiner /> : <Joke noDelate data={jokeText} errMessage={errMessage}/>;
};

export default Home;
