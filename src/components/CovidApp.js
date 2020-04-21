import React, { Component } from "react";
import Overview from "./Overview";
import Navbar from "./Navbar";
import { withStyles } from "@material-ui/styles";
import colors from "../colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const styles = {
  root: {
    display: "flex",
    height: "100vh",
  },
  navBar: {
    flex: "0 0 10%",
    backgroundColor: colors.darkPurple,
    color: "#ffffff",
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "center",
  },
  mainContent: {
    flex: 1,
    padding: "4rem",
  },
  heading: {
    fontWeight: "500",
    color: colors.darkPurple,
    "& span": {
      color: colors.purple,
      fontWeight: "900",
      marginRight: "1rem",
    },
  },
};

class CovidApp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.navBar}>
          <Navbar />
        </div>
        <div className={classes.mainContent}>
          <h1 className={classes.heading}>
            <span>Covid-19</span> India Trend
          </h1>
          <Overview />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CovidApp);
