import React, { Component } from "react";
import { Link } from "@reach/router";

const menuStyle = {
  display: "flex",
  width: "50vw",
  margin: "0 auto",
  justifyContent: "space-evenly",
  alignItems: "center",
  listStyleType: "none"
};

const spaceNavItems = { padding: "0 6px" };

const LinkStyle = { color: "#4caf50", margin: "2px", whiteSpace: "nowrap" };

export default class GlobalNav extends Component {
  componentDidMount() {}

  render() {
    return (
      <nav>
        <ul style={menuStyle}>
          <li>
            <Link style={LinkStyle} to="/">
              Home
            </Link>
          </li>
          <li>
            <span style={spaceNavItems}> / </span>
          </li>
          <li>
            <Link style={LinkStyle} to="/all-writers">
              View Writers
            </Link>
          </li>
          <li>
            <span style={spaceNavItems}> / </span>
          </li>
          <li>
            <Link style={LinkStyle} to="/add-writer">
              Add Writer
            </Link>
          </li>
          <li>
            <span style={spaceNavItems}> / </span>
          </li>
          <li>
            <Link style={LinkStyle} to="/view-all-books">
              View Books
            </Link>
          </li>
          <li>
            <span style={spaceNavItems}> / </span>
          </li>
          <li>
            <Link style={LinkStyle} to="/add-book">
              Add Book
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
