import React, { Component } from "react";
import Overview from "./Overview";
import Navbar from "./Navbar";
import { withStyles } from "@material-ui/styles";
import colors from "../colors";
import "./CodeApp.css";
import Charts from "./Charts";
import Map from "./Map/Map";

const styles = {
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  navBar: {
    flex: "0 0 10%",
    backgroundColor: colors.darkPurple,
    color: (props) =>
      props.isDarkMode ? "rgba(255,255,255,.87)" : "rgba(255,255,255,.9)",
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "center",
  },
  mainContent: {
    flex: 1,
    padding: "4rem",
    position: "relative",
  },
  header: {
    display: "flex",
    alignItems: "center",
  },
  heading: {
    fontWeight: "500",
    color: (props) =>
      props.isDarkMode ? "rgb(245, 245, 245)" : colors.darkPurple,
    display: "inline-block",
    "& span": {
      fontWeight: "900",
      color: colors.purple,
      marginRight: "1rem",
    },
  },
  content: {
    backgroundColor: (props) => (props.isDarkMode ? colors.darkPurple : "#fff"),
    borderRadius: "2rem",
    marginTop: "3rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentArea: {},
  chartArea: {
    flex: "1",
  },
};

class CovidApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completeData: [],
      isLoading: false,
    };
    this.getData = this.getData.bind(this);
    this.loadingStatus = this.loadingStatus.bind(this);
  }

  getData(data, isLoading) {
    this.setState({ completeData: data, isLoading: isLoading });
  }

  loadingStatus(loadingStatus) {
    this.setState({ isLoading: loadingStatus });
  }

  render() {
    const { classes, setDarkMode, isDarkMode } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.navBar}>
          <Navbar isDarkMode={isDarkMode} />
        </div>
        <div className={classes.mainContent}>
          <div className={classes.header}>
            <h1 className={classes.heading}>
              <span>Covid-19</span> India Trend
            </h1>
            <div className="darkModeButton">
              <label className="switch">
                <input type="checkbox" onChange={setDarkMode} />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <Overview
            isDarkMode={isDarkMode}
            getData={this.getData}
            loadingStatus={this.loadingStatus}
          />

          <div className={classes.content}>
            <div className={classes.contentArea}>hello world</div>
            <div className={classes.chartArea}>
              <Map completeData={this.state.completeData} />
              <Charts
                data={this.state.completeData}
                isLoading={this.state.isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CovidApp);
