import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/FooterStyles.js";
import classNames from "classnames";

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
        <button className={classNames(classes.btn, classes.github)}>
          Contribute on Github
        </button>
        <button className={classNames(classes.btn, classes.twitter)}>
          Share on Twitter
        </button>
        <button className={classNames(classes.btn, classes.issue)}>
          Report an Issue
        </button>
      </footer>
    );
  }
}
export default withStyles(styles)(Footer);
