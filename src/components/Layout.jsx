/* eslint-disable react/prop-types */
import React from "react";
import Navigation from "./Navigation";
import "./Layout.css";

const Layout = function Component({ children }) {
  return (
    <>
      <main className="app">{children}</main>
      <Navigation />
    </>
  );
};

export default Layout;
