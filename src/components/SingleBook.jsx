import React, { Component } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import "../css/buttons.css";

class SingleBook extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, setIsOpen: false };
    console.table(this.props.writer_obj.first_name);
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div style={{ margin: "12px" }}>
        <Button
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}
        >
          {this.props.title}
        </Button>
        <Collapse isOpen={this.state.isOpen}>
          <Card>
            <CardBody>
              <p>
                Author: {this.props.writer_obj.first_name}{" "}
                {this.props.writer_obj.last_name}{" "}
              </p>
              <p>Pages: {this.props.pages}</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default SingleBook;
