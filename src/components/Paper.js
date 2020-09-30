import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  darkMode: {
    backgroundColor: "#121212",
    color: "rgba(255,255,255,.75)",
  },
};

class Paper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isDarkMode, classes } = this.props;
    return (
      <div className={isDarkMode ? classes.darkMode : undefined}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(styles)(Paper);
