import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/FooterStyles.js";
import classNames from "classnames";

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
        <a
          href="https://github.com/PrinceSumberia/covid-19-tracker"
          className={classNames(classes.btn, classes.github)}
        >
          Contribute on Github
        </a>
        <a
          href="https://twitter.com/intent/tweet?text=Get the latest Covid-19 updates with Covid-19 India Tracker!&url=https://covidindiatracker.netlify.app/"
          className={classNames(classes.btn, classes.twitter)}
        >
          Share on Twitter
        </a>
        <a
          href="https://github.com/PrinceSumberia/covid-19-tracker/issues/new"
          className={classNames(classes.btn, classes.issue)}
        >
          Report an Issue
        </a>
      </footer>
    );
  }
}
export default withStyles(styles)(Footer);
