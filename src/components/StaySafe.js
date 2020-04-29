import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/StaySafeStyles";

class StaySafe extends Component {
  render() {
    return (
      <div>
        <h1>Stay Safe</h1>
      </div>
    );
  }
}

export default withStyles(styles)(StaySafe);
