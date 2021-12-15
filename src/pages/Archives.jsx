import React from "react";
import { useSelector } from "react-redux";

import Joke from "../components/Joke";
import Spiner from "../components/Spiner";

import "./Archives.css";

const Archives = function Component() {
  const { jokesDayArchive, jokesUserArchive, isLoading } = useSelector(
    (state) => state
  );

  const userList = jokesUserArchive.map((e) => <Joke key={e.id} data={e} />);

  const archiveList = jokesDayArchive.map((e) => (
    <Joke
      key={`${e.contents?.jokes[0]?.joke?.id} ${new Date().getMilliseconds()}`}
      data={e.contents?.jokes[0]?.joke}
    />
  ));

  return (
    <>
      <section className="wrapper-archives">
        <h2 className="title">Your&apos;s jokes</h2>
        {userList}
      </section>
      <section className="wrapper-archives">
        <h2 className="title">API&apos;s jokes</h2>
        {isLoading ? <Spiner /> : archiveList}
      </section>
    </>
  );
};

export default Archives;
