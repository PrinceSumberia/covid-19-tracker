import React, { Component } from "react";
import DisplayPanels from "./DisplayPanels";
import axios from "axios";
import { withStyles } from "@material-ui/styles";
import colors from "../colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const styles = {
  root: {
    textAlign: "center",
  },
  panels: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnBox: {
    position: "absolute",
    top: "-.5%",
    left: "27%",
    marginLeft: "2rem",
    // transform: "translate(-50%, 0)",
  },
  button: {
    top: "0",
    left: "0",
    border: "none",
    backgroundColor: colors.purple,
    padding: "1.5rem 3rem",
    color: "#fff",
    borderRadius: "10rem",
    fontFamily: "inherit",
    fontSize: "1.6rem",
    marginTop: "6rem",
    transition: "all .4s",
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.2)",
    position: "relative",

    "&:hover": {
      backgroundColor: colors.darkPurple,
      boxShadow: "0 .25rem .5rem rgba(0,0,0,.2)",
      outline: "none",
      border: "none",
      // transform: "translateY(-.3rem)",

      "&::before": {
        transform: "scaleX(1.4) scaleY(1.6)",
        opacity: 0,
      },
    },

    "&:focus": {
      border: "none",
      outline: "none",
    },

    "&:hover svg": {
      animationName: "$rotation",
      animationDuration: "1s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      display: "inline-block",
      backgroundColor: colors.purple,
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      borderRadius: "10rem",
      transition: "all .4s",
      zIndex: -1,
    },
  },

  refreshIcon: {
    fontSize: "10rem",
    animationName: "$rotation",
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },

  loadingIcon: {
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  "@keyframes rotation": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(359deg)",
    },
  },
};

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
