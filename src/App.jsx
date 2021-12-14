/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { testJoke } from "./actions";
// import { fetchJoke } from "./actions";

import Home from "./pages/Home";
import Add from "./pages/Add";
import Archives from "./pages/Archives";

import Layout from "./components/Layout";

import "./App.css";

const App = function Component() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchJoke());
    dispatch(testJoke());
  }, []);

  return (
    // could not find react-redux context value; please ensure the component is wrapped in a <Provider>
    // <div className="App">
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/archives" element={<Archives />} />
      </Routes>
    </Layout>
  );
};

export default App;
