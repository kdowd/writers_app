import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
import SingleBookAsCard from "./SingleBookAsCard";
import Comments from "./Comments";

export default class ViewAll extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    this.getData();
  }

  commentAdded = e => {
    this.getData();
  };

  getData = e => {
    console.log("reload data");
    Axios.get(UTILS.show_all_books + "/" + this.props.id).then(
      res => {
        this.setState({ books: res.data });
      },
      error => {
        console.log("error = ", error);
      }
    );
  };

  render() {
    console.log("RENDER");
    return (
      <div className="wrapper">
        {/* pass through the current id of book for the possible comment */}
        {this.state.books.map((item, i) => {
          return (
            <div
              key={Date.now()}
              style={{
                width: "60vw",
                minWidth: "320px",
                margin: "6px auto"
              }}
            >
              <SingleBookAsCard
                title={item.title}
                pages={item.pages}
                profile_image={item.profile_image}
                synopsis={item.synopsis}
                writer_obj={item.writers}
                commentAdded={this.commentAdded}
              />
              <hr />
              {/* comments in separate component */}
              <Comments comments={item.comments} />
            </div>
          );
        })}
      </div>
    );
  }
}
