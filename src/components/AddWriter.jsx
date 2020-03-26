import React, { Component } from "react";
import { Button } from "reactstrap";
import Axios from "axios";
import * as UTILS from "../utils";

export default class AddWriter extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }
  addWriter = e => {
    e.preventDefault();

    var formData = new FormData(this.formRef.current);

    Axios.post(UTILS.add_writer, formData).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.addWriter} ref={this.formRef}>
          <label>First Name</label>
          <input type="text" name="first_name" placeholder="first name" />

          <label>Last Name</label>
          <input type="text" name="last_name" placeholder="last name" />

          <label>D.O.B</label>
          <input type="date" name="DOB" placeholder="date of birth" />

          {/* <input type="hidden" name="id" value={Date.now()} /> */}

          {/* reactstrap button - UPPERCASE */}
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

//npm install --save moment react-moment
// $("input")
//   .on("change", function() {
//     this.setAttribute(
//       "data-date",
//       moment(this.value, "YYYY-MM-DD").format(
//         this.getAttribute("data-date-format")
//       )
//     );
//   })
//   .trigger("change");
