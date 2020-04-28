import React, { Component } from "react";
import DisplayPanels from "./DisplayPanels";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/OverviewStyles";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: {},
      previousDay: {},
      dataChanges: {},
      isLoading: false,
    };
    // this.calculateChange = this.calculateChange.bind(this);
    // this.getData = this.getData.bind(this);
    // this.setData = this.setData.bind(this);
  }

  // componentDidMount() {
  //   this.getData(this.props.data);
  // }

  // setData() {
  //   this.getData();
  // }

  // getData(propsData) {
  //   const data = propsData.slice(-2);
  //   try {
  //     const previousDay = data[0].summary;
  //     const currentDay = data[1].summary;
  //     this.setState(
  //       {
  //         previousDay: {
  //           confirmed: previousDay.total,
  //           recovered: previousDay.discharged,
  //           deaths: previousDay.deaths,
  //           activeCases:
  //             previousDay.total - (previousDay.discharged + previousDay.deaths),
  //         },
  //         currentDay: {
  //           confirmed: currentDay.total,
  //           recovered: currentDay.discharged,
  //           deaths: currentDay.deaths,
  //           activeCases:
  //             currentDay.total - (currentDay.discharged + currentDay.deaths),
  //         },
  //       },
  //       this.calculateChange
  //     );
  //   } catch {}
  // }

  // calculateChange() {
  //   const { previousDay, currentDay } = this.state;
  //   let newObj = Object.keys(currentDay).reduce((a, k) => {
  //     a[k] = currentDay[k] - previousDay[k];
  //     return a;
  //   }, {});
  //   const newState = {
  //     ...this.state,
  //     dataChanges: newObj,
  //   };
  //   this.setState({
  //     ...newState,
  //   });
  // }

  // dailyconfirmed: "1902";
  // dailydeceased: "69";
  // dailyrecovered: "610";
  // date: "28 April ";
  // totalconfirmed: "31360";
  // totaldeceased: "1008";
  // totalrecovered: "7747";

  render() {
    const { confirmed, recovered, deaths, activeCases } = this.state.currentDay;
    const dataChange = this.state.dataChanges;
    const { classes, isDarkMode } = this.props;
    const { totalconfirmed, totaldeceased, totalrecovered } = this.props.data;

    const active =
      Number(totalconfirmed) - (Number(totaldeceased) + Number(totalrecovered));

    return (
      <div className={classes.root}>
        <div className={classes.panels}>
          <div className={classes.panelContainer}>
            <DisplayPanels
              title="Confirmed"
              number={totalconfirmed}
              isDarkMode={isDarkMode}
              dataChange={dataChange.confirmed}
            />
          </div>
          <div className={classes.panelContainer}>
            <DisplayPanels
              title="Active"
              number={active}
              isDarkMode={isDarkMode}
              dataChange={dataChange.activeCases}
            />
          </div>
          <div className={classes.panelContainer}>
            <DisplayPanels
              title="Recovered"
              number={totalrecovered}
              isDarkMode={isDarkMode}
              dataChange={dataChange.recovered}
            />
          </div>
          <div className={classes.panelContainer}>
            <DisplayPanels
              title="Deceased"
              number={totaldeceased}
              isDarkMode={isDarkMode}
              dataChange={dataChange.deaths}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Overview);
