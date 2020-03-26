import React, { Component } from "react";

import Axios from "axios";
import Single from "./Single";
import { Table } from "reactstrap";

import * as UTILS from "../utils";

export default class ViewAll extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], result: null };
  }

  componentDidMount() {
    Axios.get(UTILS.show_all_writers).then(
      res => {
        if (res.data.result === false) {
          this.setState({ result: false });
        } else {
          this.setState({ users: res.data, result: true });
        }
      },
      error => {
        console.log("error = ", error);
      }
    );
  }

  render() {
    return (
      <div className="wrapper">
        <h1>All Writers</h1>

        {this.state.result === false ? <p>no users returned</p> : null}
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Books</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((writer, i) => {
              return (
                <Single
                  key={i}
                  first_name={writer.first_name}
                  last_name={writer.last_name}
                  booksArray={writer.books}
                  uid={writer._id}
                  counter={i + 1}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
