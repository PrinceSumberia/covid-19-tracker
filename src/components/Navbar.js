import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { withStyles } from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBox,
  faFlask,
  faHeadSideCough,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/SVG/06.svg";

import styles from "../styles/NavbarStyles";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    this.setState(
      { isExpanded: !this.state.isExpanded },
      console.log(this.state.isExpanded)
    );
    // console.log("clicked");
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <nav className={classes.nav}>
          <FontAwesomeIcon
            icon={faBars}
            className={classes.hamburger}
            onClick={this.handleToggle}
          />
          <ul
            className={classNames([classes.navItems], {
              [classes.expand]: this.state.isExpanded,
            })}
          >
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
                to="/essentials"
                className={classes.navLinks}
                activeClassName={classes.active}
              >
                <div className={classes.iconBox}>
                  <FontAwesomeIcon icon={faBox} className={classes.icons} />
                  <p>Essentials</p>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
