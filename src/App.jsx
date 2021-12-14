/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { fetchJoke } from "./actions";

import Home from "./pages/Home";
import Add from "./pages/Add";
import Archives from "./pages/Archives";

import Layout from "./components/Layout";

import "./App.css";

const App = function Component() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJoke());
  }, []);

  return (
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
