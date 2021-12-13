import React from "react";
import { useSelector } from "react-redux";

const Home = function Component() {
  const { isLoading } = useSelector((state) => state);

  const appState = useSelector((state) => state.dayJokeMock); // !real or mock data
  console.log("🚀 ~ file: Home.jsx ~ line 8 ~ Home ~ appState", appState)
  const jokeText = isLoading || appState.dayJoke.contents.jokes[0].joke.text;

  return isLoading ? (
    "wait"
  ) : (
    <>
      <h2>Home</h2>

      <pre>{JSON.stringify(jokeText, null, 2)}</pre>
    </>
  );
};

export default Home;
