import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/HelpStyles";
import Form from "./Form";

class Help extends Component {
  render() {
    return (
      <div>
        <h1>Help Page</h1>
        <p>For Help Please Contact</p>
        <Form />
      </div>
    );
  }
}

export default withStyles(styles)(Help);
