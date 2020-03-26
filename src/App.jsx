import * as React from "react";
import "./App.css";
import Home from "./components/Home";
import ViewAll from "./components/ViewAll";
import AddWriter from "./components/AddWriter";
import AddBook from "./components/AddBook";
import ViewBook from "./components/ViewBook";
import ViewBooks from "./components/ViewBooks";
import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalNav from "./components/GlobalNav";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalNav />
        <Router>
          <Home path="/" />
          <ViewAll path="/all-writers" />
          <AddWriter path="/add-writer" />
          <AddBook path="/add-book" />
          <ViewBook path="/view-book-details/:id" />
          <ViewBooks path="/view-all-books/" />
        </Router>
      </React.Fragment>
    );
  }
}
