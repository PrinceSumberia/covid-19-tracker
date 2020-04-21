import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeadSideCough,
  faFlask,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import colors from "../colors";
import classNames from "classnames";

const styles = {
  nav: {
    marginTop: "12rem",
  },
  navItems: {
    listStyle: "none",
  },
  navLinks: {
    marginBottom: "5rem",
    fontWeight: "500",
  },
  iconBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: "50",
  },
  icons: {
    fontSize: "2.5rem",
    padding: "1rem 0",
  },
  active: {
    color: colors.purple,
    position: "relative",
    zIndex: "10",

    "&::before": {
      content: '""',
      position: "absolute",
      width: "165%",
      height: "110%",
      display: "block",
      backgroundColor: "rgb(245, 245, 245)",
      transform: "translateX(-1rem) skewX(10deg)",
      borderRadius: "25px",
    },
  },
};

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    const activeClasses = classNames(classes.navLinks, classes.active);
    return (
      <nav className={classes.nav}>
        <ul className={classes.navItems}>
          <li className={activeClasses}>
            <div className={classes.iconBox}>
              <FontAwesomeIcon icon={faHome} className={classes.icons} />
              Overview
            </div>
          </li>
          <li className={classes.navLinks}>
            <div className={classes.iconBox}>
              <FontAwesomeIcon
                icon={faHeadSideCough}
                className={classes.icons}
              />
              Symptoms
            </div>
          </li>
          <li className={classes.navLinks}>
            <div className={classes.iconBox}>
              <FontAwesomeIcon icon={faFlask} className={classes.icons} />
              Test Yourself
            </div>
          </li>
          <li className={classes.navLinks}>
            <div className={classes.iconBox}>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className={classes.icons}
              />
              Help
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
