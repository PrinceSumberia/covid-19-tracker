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
    animation: "$float 2s ease infinite",

    "&::before": {
      content: '""',
      position: "absolute",
      width: "165%",
      height: "110%",
      display: "block",
      backgroundColor: "rgb(245, 245, 245)",
      transform: "translateX(-1rem) skewX(10deg)",
      borderRadius: "25px",
      zIndex: 10,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: "145%",
      height: "110%",
      display: "block",
      top: 0,
      left: 0,
      backgroundColor: colors.lightPurple,
      transform: "translate(-.9rem, .4rem) skew(10deg, -5deg)",
      borderRadius: "25px",
    },
  },

  "@keyframes float": {
    "0%": {
      boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
      transform: "translateY(0px)",
    },
    "50%": {
      boxShadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
      transform: "translateY(-5px)",
    },
    "100%": {
      boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
      transform: "translateY(0px)",
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
