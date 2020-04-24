import React, { Component } from "react";
import Overview from "./Overview";
import Navbar from "./Navbar";
import { withStyles } from "@material-ui/styles";
import colors from "../colors";
import "./CodeApp.css";
import Charts from "./Charts";
import Map from "./Map/Map";
import DisplayTable from "./Table/DisplayTable";

const styles = {
  root: {
    display: "flex",
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
    overflow: "hidden",
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
    padding: "4rem",
  },
  contentArea: {
    minWidth: "50%",
  },
  chartArea: {
    // flex: "1",
    minWidth: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
  },
};

const stateCodes = {
  "Andhra Pradesh": "AP",
  "Arunachal Pradesh": "AR",
  Assam: "AS",
  Bihar: "BR",
  Chhattisgarh: "CT",
  Goa: "GA",
  Gujarat: "GJ",
  Haryana: "HR",
  "Himachal Pradesh": "HP",
  Jharkhand: "JH",
  Karnataka: "KA",
  Kerala: "KL",
  "Madhya Pradesh": "MP",
  Maharashtra: "MH",
  Manipur: "MN",
  Meghalaya: "ML",
  Mizoram: "MZ",
  Nagaland: "NL",
  Odisha: "OR",
  Punjab: "PB",
  Rajasthan: "RJ",
  Sikkim: "SK",
  "Tamil Nadu": "TN",
  Telengana: "TG",
  Tripura: "TR",
  Uttarakhand: "UT",
  "Uttar Pradesh": "UP",
  "West Bengal": "WB",
  "Andaman and Nicobar Islands": "AN",
  Chandigarh: "CH",
  "Dadra and Nagar Haveli": "DN",
  "Daman and Diu": "DD",
  Delhi: "DL",
  "Jammu and Kashmir": "JK",
  Ladakh: "LA",
  Lakshadweep: "LD",
  Puducherry: "PY",
};

class CovidApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completeData: [],
      isLoading: false,
      mapData: [],
      tableData: [],
    };
    this.getData = this.getData.bind(this);
    this.loadingStatus = this.loadingStatus.bind(this);
    this.formatData = this.formatData.bind(this);
    this.findId = this.findId.bind(this);
    this.handleFormat = this.handleFormat.bind(this);
    this.tableData = this.tableData.bind(this);
  }

  formatData(completeData) {
    const newArr = completeData.slice(-1).map((data) => data.regional);
    const formatedData = newArr.flat().map((region, i) => {
      return {
        id: this.findId(region.loc),
        state: region.loc.replace(" and ", " & "),
        value: region.totalConfirmed,
      };
    });
    return formatedData;
  }

  tableData(completeData) {
    const newArr = completeData
      .slice(-1)
      .map((data) => data.regional)
      .flat();
    const data = newArr.map((region, i) => {
      return {
        id: region.loc,
        name: region.loc,
        deaths: region.deaths,
        discharged: region.discharged,
        confirmed: region.totalConfirmed,
        active: region.totalConfirmed - (region.discharged + region.deaths),
      };
    });
    return data;
  }

  findId(location) {
    for (let [key, value] of Object.entries(stateCodes)) {
      if (location === key) {
        return value;
      }
    }
  }

  getData(data, isLoading) {
    this.setState(
      {
        completeData: data,
        isLoading: isLoading,
      },
      this.handleFormat
    );
  }
  handleFormat() {
    const newdata = this.formatData(this.state.completeData);
    const tableData = this.tableData(this.state.completeData);
    // console.log(tableData);
    this.setState({ mapData: newdata, tableData: tableData });
  }

  loadingStatus(loadingStatus) {
    this.setState({ isLoading: loadingStatus });
  }

  render() {
    const { classes, setDarkMode, isDarkMode } = this.props;
    const { mapData, tableData } = this.state;

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
          {!this.state.isLoading && (
            <div className={classes.content}>
              <div className={classes.contentArea}></div>
              <div className={classes.chartArea}>
                <Map mapData={mapData} />
                <Charts
                  data={this.state.completeData}
                  isLoading={this.state.isLoading}
                />
              </div>
            </div>
          )}
          <DisplayTable tableData={tableData} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CovidApp);
