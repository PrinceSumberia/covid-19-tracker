import React, { Component } from "react";
import DisplayPanels from "./DisplayPanels";
import axios from "axios";
import { withStyles } from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/OverviewStyles";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: {},
      previousDay: {},
      dataChanges: {},
      completeData: {},
      isLoading: false,
    };
    this.calculateChange = this.calculateChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState(
      { isLoading: !this.state.isLoading },
      this.props.loadingStatus(!this.state.isLoading)
    );
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
        completeData: response.data.data,
      },
      this.calculateChange
    );
  }

  calculateChange() {
    const { previousDay, currentDay, isLoading } = this.state;
    let newObj = Object.keys(currentDay).reduce((a, k) => {
      a[k] = currentDay[k] - previousDay[k];
      return a;
    }, {});
    const newState = {
      ...this.state,
      dataChanges: newObj,
      isLoading: !isLoading,
    };
    this.setState(
      {
        ...newState,
      },
      this.props.getData(newState.completeData, newState.isLoading)
    );
  }

  render() {
    const { confirmed, recovered, deaths, activeCases } = this.state.currentDay;
    const dataChange = this.state.dataChanges;
    const { classes, isDarkMode } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <div className={classes.loadingIcon}>
          <FontAwesomeIcon icon={faSyncAlt} className={classes.refreshIcon} />
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <div className={classes.btnBox}>
          <FontAwesomeIcon
            icon={faSyncAlt}
            className={classes.button}
            onClick={this.fetchData}
          />
        </div>
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
