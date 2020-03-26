import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";

export default class WritersSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { writers: [], selected_id: null };
    this.writer_id = null;
  }

  componentDidMount() {
    Axios.get(UTILS.show_all_writers).then(
      res => {
        this.setState({ writers: res.data });
        console.log(res.data);
      },
      error => {
        console.log("error = ", error);
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <h1>Select writer</h1>
        <div>
          <select name="writer_name" onChange={this.props.onWriterUpdated}>
            <option value="">Select writer</option>
            {this.state.writers.map((writer, i) => {
              let fullname = `${writer.first_name} ${writer.last_name}`;
              return (
                <option key={i} value={writer.id}>
                  {fullname}
                </option>
              );
            })}
          </select>
          <p></p>
          <p>{this.state.value}</p>
        </div>
      </React.Fragment>
    );
  }
}
