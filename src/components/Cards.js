import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/CardsStyles";

function Cards({ title, src, classes }) {
  return (
    <div className={classes.card}>
      <h1>{title}</h1>
      <img src={src} alt={title} />
    </div>
  );
}

export default withStyles(styles)(Cards);
