import React, { Component } from "react";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";
import "./styles/App.scss";

export const App = () => {
  return (
    <div className="content-wrapper">
      <Header />
      <Search />
      <Profile />
    </div>
  );
};
