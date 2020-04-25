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
    this.calculateChange = this.calculateChange.bind(this);
    this.getData = this.getData.bind(this);
    this.setData = this.setData.bind(this);
  }

  componentDidMount() {
    this.getData(this.props.data);
  }

  setData() {
    this.getData();
  }

  getData(propsData) {
    const data = propsData.slice(-2);
    try {
      const previousDay = data[0].summary;
      const currentDay = data[1].summary;
      this.setState(
        {
          previousDay: {
            confirmed: previousDay.total,
            recovered: previousDay.discharged,
            deaths: previousDay.deaths,
            activeCases:
              previousDay.total - (previousDay.discharged + previousDay.deaths),
          },
          currentDay: {
            confirmed: currentDay.total,
            recovered: currentDay.discharged,
            deaths: currentDay.deaths,
            activeCases:
              currentDay.total - (currentDay.discharged + currentDay.deaths),
          },
        },
        this.calculateChange
      );
    } catch {}
  }

  calculateChange() {
    const { previousDay, currentDay } = this.state;
    let newObj = Object.keys(currentDay).reduce((a, k) => {
      a[k] = currentDay[k] - previousDay[k];
      return a;
    }, {});
    const newState = {
      ...this.state,
      dataChanges: newObj,
    };
    this.setState({
      ...newState,
    });
  }

  render() {
    const { confirmed, recovered, deaths, activeCases } = this.state.currentDay;
    const dataChange = this.state.dataChanges;
    const { classes, isDarkMode } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.panels}>
          <DisplayPanels
            title="Confirmed"
            number={confirmed}
            isDarkMode={isDarkMode}
            dataChange={dataChange.confirmed}
          />
          <DisplayPanels
            title="Active"
            number={activeCases}
            isDarkMode={isDarkMode}
            dataChange={dataChange.activeCases}
          />
          <DisplayPanels
            title="Recovered"
            number={recovered}
            isDarkMode={isDarkMode}
            dataChange={dataChange.recovered}
          />
          <DisplayPanels
            title="Deceased"
            number={deaths}
            isDarkMode={isDarkMode}
            dataChange={dataChange.deaths}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Overview);
