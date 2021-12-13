import React from "react";
import { useSelector } from "react-redux";

const Home = function Component() {
  const appState = useSelector((state) => state);
  return (
    <>
      <h2>Home</h2>
      <pre>{JSON.stringify(appState, null, 2)}</pre>
    </>
  );
};

export default Home;
