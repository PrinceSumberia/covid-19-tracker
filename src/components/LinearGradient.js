import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

import styles from "../styles/LinearGradientStyles";

const LinearGradient = (props) => {
  const { data, classes } = props;
  return (
    <div>
      <div className={classNames(classes.boxStyle, classes.displayFlex)}>
        <span>{data.min}</span>
        <span className={classes.fill}></span>
        <span>{data.max}</span>
      </div>
      <div
        className={classNames(
          classes.mt8,
          classes.boxStyle,
          classes.gradientStyle
        )}
      ></div>
    </div>
  );
};

LinearGradient.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearGradient);
