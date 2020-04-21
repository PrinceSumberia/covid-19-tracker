import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import colors from "../colors";

const styles = {
  panel: {
    width: "15%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    marginBottom: "3.5rem",
    marginTop: "3.5rem",
    padding: "1.5rem 3rem",
    boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.05)",
    borderRadius: "2.5rem",
  },
  heading: {
    fontSize: "2rem",
  },
  number: {
    color: (props) => {
      let color;
      let title = props.title.toLowerCase();
      if (title === "recovered") {
        color = colors.green;
      } else if (title === "deceased") {
        color = colors.purple;
      } else if (title === "active") {
        color = colors.orange;
      } else if (title === "confirmed") {
        color = colors.red;
      }
      return color;
    },
    fontSize: "3.5rem",
    paddingTop: ".5rem",
    paddingBottom: ".5rem",
  },
  dataChange: {
    color: (props) => {
      let color;
      let title = props.title.toLowerCase();
      if (title === "recovered") {
        color = colors.green;
      } else if (title === "deceased") {
        color = colors.purple;
      } else if (title === "active") {
        color = colors.orange;
      } else if (title === "confirmed") {
        color = colors.red;
      }
      return color;
    },
  },
};

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
