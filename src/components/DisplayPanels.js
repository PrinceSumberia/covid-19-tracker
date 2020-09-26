import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

import styles from "../styles/DisplayPanelsStyles";

class DisplayPanels extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, number, dataChange, classes } = this.props;
    return (
      <div className={classes.panel}>
        <h3 className={classes.heading}>{title}</h3>
        <h3 className={classes.number}>{number}</h3>
        <p className={classes.dataChange}>
          {dataChange > 0 ? "+" : ""}
          {dataChange}
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(DisplayPanels);
