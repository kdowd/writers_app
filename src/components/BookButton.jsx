import React, { Component } from "react";
import { Button } from "reactstrap";
import { navigate } from "@reach/router";

export default class BookButton extends Component {
  viewBookDetails = e => {
    navigate(`/view-book-details/${this.props.id}`);
  };

  render() {
    return (
      <Button onClick={this.viewBookDetails} color="info">
        {this.props.booktitle}
      </Button>
    );
  }
}
