import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "../styles/CardsStyles";

function Cards({ title, src, classes }) {
  return (
    <div className={classes.card}>
      <h3 className={classes.cardTitle}>{title}</h3>
      <img src={src} alt={title} className={classes.cardImage} />
    </div>
  );
}

export default withStyles(styles)(Cards);
