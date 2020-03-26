import React, { Component } from "react";
import { Button } from "reactstrap";
import Axios from "axios";
import * as UTILS from "../utils";
import WritersSelector from "./WritersSelector";

export default class AddBook extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = { author_id: 0 };
  }

  onWriterUpdated = e => {
    //update the hidden field in our form
    this.setState({ author_id: e.target.value });
  };

  addBook = e => {
    e.preventDefault();
    var formData = new FormData(this.formRef.current);

    if (formData.get("author_id") === "0") {
      alert("Please select an author for this book");
      return;
    }

    // FYI: form still works even if there is no image included
    // forms with images look a bit different - we need to add this line.
    var settings = {
      headers: { "Content-Type": "multipart/form-data" }
    };

    Axios.post(UTILS.add_book, formData, settings).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div style={{ width: "60vw", margin: "0 auto" }}>
        <WritersSelector onWriterUpdated={this.onWriterUpdated} />

        <form onSubmit={this.addBook} ref={this.formRef}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Book Title" />

          <label>Pages</label>
          <input type="number" name="pages" placeholder="pages" min="1" />

          <label>Synopsis</label>
          <textarea
            style={{ marginBottom: "12px" }}
            rows="2"
            cols="50"
            name="synopsis"
            placeholder="Write book synopsis here"
          ></textarea>

          <input type="file" name="file" />

          {/* important - the author id is stored here every time a user chooses a writer */}
          <input type="hidden" name="author_id" value={this.state.author_id} />

          {/* reactstrap button - UPPERCASE */}
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}
