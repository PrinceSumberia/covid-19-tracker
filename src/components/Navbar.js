import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  nav: {
    marginTop: "12rem",
  },
  navItems: {
    listStyle: "none",
  },
  navLinks: {
    marginBottom: "7rem",
    fontWeight: "500",
  },
};

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <nav className={classes.nav}>
        <ul className={classes.navItems}>
          <li className={classes.navLinks}>Overview</li>
          <li className={classes.navLinks}>Symptoms</li>
          <li className={classes.navLinks}>Test Yourself</li>
          <li className={classes.navLinks}>Help</li>
        </ul>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
