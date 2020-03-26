import React, { Component } from "react";

import Axios from "axios";
import Single from "./Single";
import { Table } from "reactstrap";

import * as UTILS from "../utils";
import SingleBook from "./SingleBook";

export default class ViewAll extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    Axios.get(UTILS.show_all_books).then(
      res => {
        this.setState({ books: res.data });
      },
      error => {
        console.log("error = ", error);
      }
    );
  }

  render() {
    return (
      <div className="wrapper">
        <h1>All Books</h1>

        {this.state.books.length === 0 ? <p>No books returned</p> : null}

        {this.state.books.map((item, i) => {
          return (
            <SingleBook
              key={item._id}
              title={item.title}
              pages={item.pages}
              writer_obj={item.writers}
            />
          );
        })}
      </div>
    );
  }
}
