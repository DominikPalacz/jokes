import React from "react";
import { useSelector } from "react-redux";
import Spiner from "../components/Spiner";
import Joke from "../components/Joke";

const Home = function Component() {
  const { isLoading } = useSelector((state) => state);

  const appState = useSelector((state) => state.dayJokeMock); // ! dayJoke/dayJokeMock - (real or mock data)
  const jokeText = isLoading || appState.dayJoke.contents.jokes[0].joke.text;

  return isLoading ? <Spiner /> : <Joke data={jokeText} />;
};

export default Home;
