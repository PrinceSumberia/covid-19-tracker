import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

import Cards from "./Cards";

import First from "../assets/SVG/01.svg";
import Second from "../assets/SVG/02.svg";
import Third from "../assets/SVG/03.svg";
import Fourth from "../assets/SVG/04.svg";
import Fifth from "../assets/SVG/05.svg";
import Sixth from "../assets/SVG/06.svg";

import styles from "../styles/StaySafeStyles";

class StaySafe extends Component {
  render() {
    const svgIcons = [
      { src: First, title: "Wash Your Hands Often" },
      { src: Second, title: "Wear a Mask" },
      { src: Third, title: "Use Alcohol Based Sanitizer" },
      { src: Fourth, title: "Visit Doctor Incase of any Symptoms" },
      { src: Fifth, title: "Keep Distance" },
      { src: Sixth, title: "Stay Home Stay Safe" },
    ];
    const { classes, isDarkMode } = this.props;
    return (
      <div className={classes.staySafe}>
        <h1>Stay Safe</h1>
        <div className={classes.cardsBox}>
          {svgIcons.map((s, i) => (
            <Cards
              key={i}
              src={s.src}
              title={s.title}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(StaySafe);
