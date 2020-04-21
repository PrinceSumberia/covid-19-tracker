import React, { Component } from "react";
import DisplayPanels from "./DisplayPanels";
import axios from "axios";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    // display: "flex",
  },
  panels: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
};

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: {},
      previousDay: {},
      dataChanges: {},
    };
    this.calculateChange = this.calculateChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const response = await axios.get(
      "https://api.rootnet.in/covid19-in/stats/history"
    );
    const data = response.data.data.slice(-2);
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
  }

  calculateChange() {
    const { previousDay, currentDay } = this.state;
    let newObj = Object.keys(currentDay).reduce((a, k) => {
      a[k] = currentDay[k] - previousDay[k];
      return a;
    }, {});
    this.setState({ dataChanges: newObj });
  }

  render() {
    const { confirmed, recovered, deaths, activeCases } = this.state.currentDay;
    const dataChange = this.state.dataChanges;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.panels}>
          <DisplayPanels
            title="Confirmed"
            number={confirmed}
            dataChange={dataChange.confirmed}
          />
          <DisplayPanels
            title="Active"
            number={activeCases}
            dataChange={dataChange.activeCases}
          />
          <DisplayPanels
            title="Recovered"
            number={recovered}
            dataChange={dataChange.recovered}
          />
          <DisplayPanels
            title="Deceased"
            number={deaths}
            dataChange={dataChange.deaths}
          />
        </div>

        <button onClick={this.fetchData}>Update Results</button>
      </div>
    );
  }
}

export default withStyles(styles)(Overview);
