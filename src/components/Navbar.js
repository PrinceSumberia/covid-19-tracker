import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeadSideCough,
  faFlask,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/NavbarStyles";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <nav className={classes.nav}>
        <ul className={classes.navItems}>
          <li className={classes.navItem}>
            <NavLink
              exact
              to="/"
              className={classes.navLinks}
              activeClassName={classes.active}
            >
              <div className={classes.iconBox}>
                <FontAwesomeIcon icon={faHome} className={classes.icons} />
                <p>Overview</p>
              </div>
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              exact
              to="/symptoms"
              className={classes.navLinks}
              activeClassName={classes.active}
            >
              <div className={classes.iconBox}>
                <FontAwesomeIcon
                  icon={faHeadSideCough}
                  className={classes.icons}
                />
                <p>Symptoms</p>
              </div>
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              exact
              to="/stay-safe"
              className={classes.navLinks}
              activeClassName={classes.active}
            >
              <div className={classes.iconBox}>
                <FontAwesomeIcon icon={faFlask} className={classes.icons} />
                <p>Prevention</p>
              </div>
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              exact
              to="/help"
              className={classes.navLinks}
              activeClassName={classes.active}
            >
              <div className={classes.iconBox}>
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className={classes.icons}
                />
                <p>Help</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
