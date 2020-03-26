import React, { Component } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  CardImg
} from "reactstrap";
import "../css/buttons.css";
import Axios from "axios";
import * as UTILS from "../utils";

class SingleBookAsCard extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();

    console.table(this.props);
  }
  submitComment = e => {
    // grab the form data via the formRef element - see the constructor
    var formData = new FormData(this.formRef.current);

    Axios.post(UTILS.post_comment, formData).then(
      res => {
        console.log("force reload");
        this.props.commentAdded();
      },
      error => {
        console.log(error);
      }
    );
  };

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardHeader tag="h3"> {this.props.title}</CardHeader>
            <CardImg
              style={{
                maxHeight: "360px",
                objectFit: "contain",
                marginTop: "6px"
              }}
              top
              width="100%"
              src={UTILS.images_folder + this.props.profile_image}
              alt="book image"
            />
            <CardText>
              Author: {this.props.writer_obj.first_name}{" "}
              {this.props.writer_obj.last_name}
            </CardText>
            <CardText>Pages: {this.props.pages}</CardText>

            <CardHeader tag="h3">Synopsis</CardHeader>
            <CardText>{this.props.synopsis}</CardText>
          </CardBody>
          <CardFooter>
            <form action="" ref={this.formRef} style={{ marginBottom: "12px" }}>
              <textarea
                rows="2"
                cols="50"
                name="comment"
                placeholder="Leave comment here"
              ></textarea>
              <input type="hidden" name="book_title" value={this.props.title} />
            </form>

            <Button onClick={this.submitComment}>Submit Comment</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default SingleBookAsCard;
