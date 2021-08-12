import React, { useState } from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

import Search from "./components/Search";
import MainPage from "./MainPage";
import "./App.css";

export default function BooksApp() {
  const [showSearchPage, setShowSearchPage] = useState(false);
  return (
    <div className="app">
      <Route exact path="/" component={MainPage} />
      <Route path="/create" component={Search} />
    </div>
  );
}
