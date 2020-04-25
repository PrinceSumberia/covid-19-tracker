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
import axios from "axios";
import stateCodes from "../constants/stateCodes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

class CovidApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      mapData: [],
      tableData: [],
    };

    this.fetchData = this.fetchData.bind(this);
    this.formatData = this.formatData.bind(this);
    this.findId = this.findId.bind(this);
    this.handleFormat = this.handleFormat.bind(this);
    this.tableData = this.tableData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({ isLoading: !this.state.isLoading });
    const response = await axios.get(
      "https://api.rootnet.in/covid19-in/stats/history"
    );
    this.setState(
      (st) => ({
        data: response.data.data,
        isLoading: !st.isLoading,
      }),
      this.handleFormat
    );
  }

  formatData(data) {
    const newArr = data.slice(-1).map((data) => data.regional);
    const formatedData = newArr.flat().map((region, i) => {
      return {
        id: this.findId(region.loc),
        state: region.loc.replace(" and ", " & "),
        value: region.totalConfirmed,
      };
    });
    return formatedData;
  }

  tableData(data) {
    const newArr = data
      .slice(-1)
      .map((data) => data.regional)
      .flat();
    const newData = newArr.map((region, i) => {
      return {
        id: region.loc,
        name: region.loc,
        deaths: region.deaths,
        discharged: region.discharged,
        confirmed: region.totalConfirmed,
        active: region.totalConfirmed - (region.discharged + region.deaths),
      };
    });
    return newData;
  }

  findId(location) {
    for (let [key, value] of Object.entries(stateCodes)) {
      if (location === key) {
        return value;
      }
    }
  }

  handleFormat() {
    const newdata = this.formatData(this.state.data);
    const tableData = this.tableData(this.state.data);
    this.setState({ mapData: newdata, tableData: tableData });
  }

  render() {
    const { classes, setDarkMode, isDarkMode } = this.props;
    const { mapData, tableData, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className={classes.loadingIcon}>
          <FontAwesomeIcon icon={faSyncAlt} className={classes.refreshIcon} />
        </div>
      );
    }
    return (
      <>
        <div className={classes.header}>
          <h1 className={classes.heading}>
            <span>Covid-19</span> India Trend
          </h1>
          <div className={classes.btnBox}>
            <FontAwesomeIcon
              icon={faSyncAlt}
              className={classes.button}
              onClick={this.fetchData}
            />
          </div>
          <div className="darkModeButton">
            <label className="switch">
              <input type="checkbox" onChange={setDarkMode} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <Overview
          isDarkMode={isDarkMode}
          data={this.state.data}
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
                      data={this.state.data}
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
                      data={this.state.data}
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
                      data={this.state.data}
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
                      data={this.state.data}
                      isLoading={this.state.isLoading}
                      dataKey="deaths"
                      stroke={colors.purple}
                    />
                  </div>
                  <h3 style={{ color: colors.purple }}>Deceased</h3>
                </div>
              </div>
              <Charts data={this.state.data} isLoading={this.state.isLoading} />
            </div>
            <div className={classes.tableContainer}>
              <h2 className={classes.tableHeading}>
                State/UT Wise Data (Sortable){" "}
              </h2>
              <DisplayTable tableData={tableData} />
            </div>
          </div>
        )}
      </>
    );
  }
}

export default withStyles(styles)(CovidApp);
