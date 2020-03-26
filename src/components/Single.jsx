import React, { Component } from "react";
import { navigate } from "@reach/router";
import { Button } from "reactstrap";
import "../css/buttons.css";
import BookButton from "./BookButton";

export class Single extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  gotoEdit = e => {
    navigate(`/edit/${this.props.uid}`);
  };

  render() {
    return (
      <tr>
        <th scope="row">{this.props.counter}</th>
        <td>{this.props.first_name}</td>
        <td>{this.props.last_name}</td>
        <td>
          <ul>
            {this.props.booksArray.map(book => {
              return (
                <li key={book._id}>
                  <BookButton booktitle={book.title} id={book._id} />
                </li>
              );
            })}
          </ul>
        </td>

        <td>
          <Button color="primary">Edit</Button>
        </td>
        <td>
          <Button color="danger">Delete</Button>
        </td>
      </tr>
    );
  }
}

export default Single;
