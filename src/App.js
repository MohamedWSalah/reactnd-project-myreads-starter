import React from "react";
import { Route, Switch } from "react-router-dom";
import { AppProvider } from "./Context.js";
import Search from "./components/Search";
import MainPage from "./MainPage";
import NotFound from "./components/NotFound";
import "./App.css";

export default function BooksApp() {
  return (
    <AppProvider>
      <div className="app">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/search" component={Search} />
          <Route render={NotFound} />
        </Switch>
      </div>
    </AppProvider>
  );
}
