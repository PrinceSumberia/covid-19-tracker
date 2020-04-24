import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeadSideCough,
  faFlask,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import styles from "../styles/NavbarStyles";

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
