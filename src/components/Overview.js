import React from "react";
import DisplayPanels from "./DisplayPanels";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/OverviewStyles";

function Overview(props) {
  const { classes, isDarkMode } = props;
  const {
    totalconfirmed,
    totaldeceased,
    totalrecovered,
    dailyrecovered,
    dailydeceased,
    dailyconfirmed,
  } = props.data;

  const active =
    Number(totalconfirmed) - (Number(totaldeceased) + Number(totalrecovered));

  const dailyactive =
    Number(dailyconfirmed) - (Number(dailydeceased) + Number(dailyrecovered));

  return (
    <div className={classes.root}>
      <div className={classes.panels}>
        <div className={classes.panelContainer}>
          <DisplayPanels
            title="Confirmed"
            number={totalconfirmed}
            isDarkMode={isDarkMode}
            dataChange={dailyconfirmed}
          />
        </div>
        <div className={classes.panelContainer}>
          <DisplayPanels
            title="Active"
            number={active}
            isDarkMode={isDarkMode}
            dataChange={dailyactive}
          />
        </div>
        <div className={classes.panelContainer}>
          <DisplayPanels
            title="Recovered"
            number={totalrecovered}
            isDarkMode={isDarkMode}
            dataChange={dailyrecovered}
          />
        </div>
        <div className={classes.panelContainer}>
          <DisplayPanels
            title="Deceased"
            number={totaldeceased}
            isDarkMode={isDarkMode}
            dataChange={dailydeceased}
          />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Overview);
