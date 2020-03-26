import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

export default class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = { comments: this.props.comments };
  }

  render() {
    return (
      <div>
        <h6>
          Comments: <strong>{this.state.comments.length}</strong>
        </h6>
        <ListGroup>
          {this.state.comments.map((item, i) => {
            return (
              <ListGroupItem key={i}>
                <ListGroupItemText>{item.comment} </ListGroupItemText>{" "}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}
