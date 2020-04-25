import React, { Component } from "react";
import Overview from "./Overview";
import { withStyles } from "@material-ui/styles";
import colors from "../constants/colors";
import "../styles/DarkModeButton.css";
import Charts from "./Charts";
import Map from "./Map/Map";
import DisplayTable from "./DisplayTable";
import TinyCharts from "./TinyCharts";
import styles from "../styles/CovidAppStyles";

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
      <>
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
            <div className={classes.contentArea}>
              <div className={classes.mapArea}>
                <Map mapData={mapData} />
              </div>
              <div></div>
            </div>
            <div className={classes.chartArea}>
              <div className={classes.tinyChartArea}>
                <div className={classes.tinyChart}>
                  <div
                    className={classes.tinych}
                    style={{ background: "rgba(249, 52, 94,.1)" }}
                  >
                    <TinyCharts
                      data={this.state.completeData}
                      isLoading={this.state.isLoading}
                      dataKey="confirmed"
                      stroke={colors.red}
                    />
                  </div>
                  <h3 style={{ color: colors.red }}>confirmed</h3>
                </div>
                <div className={classes.tinyChart}>
                  <div
                    className={classes.tinych}
                    style={{ background: "rgba(250, 100, 0,.1)" }}
                  >
                    <TinyCharts
                      data={this.state.completeData}
                      isLoading={this.state.isLoading}
                      dataKey="active"
                      stroke={colors.orange}
                    />
                  </div>
                  <h3 style={{ color: colors.orange }}>active</h3>
                </div>
                <div className={classes.tinyChart}>
                  <div
                    className={classes.tinych}
                    style={{ background: "rgba(28, 177, 66,.1)" }}
                  >
                    <TinyCharts
                      data={this.state.completeData}
                      isLoading={this.state.isLoading}
                      dataKey="discharged"
                      stroke={colors.green}
                    />
                  </div>
                  <h3 style={{ color: colors.green }}>Recovered</h3>
                </div>
                <div className={classes.tinyChart}>
                  <div
                    className={classes.tinych}
                    style={{ background: "rgba(98, 54, 255,.1)" }}
                  >
                    <TinyCharts
                      data={this.state.completeData}
                      isLoading={this.state.isLoading}
                      dataKey="deaths"
                      stroke={colors.purple}
                    />
                  </div>
                  <h3 style={{ color: colors.purple }}>Deceased</h3>
                </div>
              </div>
              <Charts
                data={this.state.completeData}
                isLoading={this.state.isLoading}
              />
            </div>
            <div className={classes.tableContainer}>
              <h2 className={classes.tableHeading}>
                State/UT Wise Data (Sortable){" "}
              </h2>
              <DisplayTable tableData={tableData} />
            </div>
          </div>
        )}
        {/* {!this.state.isLoading && (
           
          )} */}
      </>
    );
  }
}

export default withStyles(styles)(CovidApp);
