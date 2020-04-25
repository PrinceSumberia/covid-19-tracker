import React, { Component } from "react";
import DisplayPanels from "./DisplayPanels";
import Map from "./Map/Map";
import { withStyles } from "@material-ui/styles";

const styles = {
  container: {
    backgroundColor: "rgba(129, 124, 155, 0.05)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 3rem",
  },
  mapContainer: {
    flex: "1",
  },
  panelsContainer: {
    display: "flex",
    flex: "0 0 25%",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
  },
};

class MapSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: null,
      deaths: null,
      recovered: null,
      active: null,
    };
    this.currentLocation = this.currentLocation.bind(this);
  }

  currentLocation(location) {
    const stateName = location.replace(" & ", " and ");
    const data = this.props.data.slice(-1)[0].regional;
    const updatedData = data.filter((el) => el.loc === stateName);
    if (updatedData[0]) {
      this.setState({
        confirmed: updatedData[0].totalConfirmed,
        deaths: updatedData[0].deaths,
        recovered: updatedData[0].discharged,
        active:
          updatedData[0].totalConfirmed -
          (updatedData[0].discharged + updatedData[0].deaths),
      });
    } else {
      this.setState({
        confirmed: "NA",
        deaths: "NA",
        recovered: "NA",
        active: "NA",
      });
    }
  }

  render() {
    const { classes, mapData, isDarkMode } = this.props;
    const { confirmed, deaths, recovered, active } = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.panelsContainer}>
          <DisplayPanels
            title="Confirmed"
            number={confirmed}
            isDarkMode={isDarkMode}
            dataChange={4}
          />
          <DisplayPanels
            title="Active"
            number={active}
            isDarkMode={isDarkMode}
            dataChange={4}
          />
          <DisplayPanels
            title="Recovered"
            number={recovered}
            isDarkMode={isDarkMode}
            dataChange={4}
          />
          <DisplayPanels
            title="Deceased"
            number={deaths}
            isDarkMode={isDarkMode}
            dataChange={4}
          />
        </div>
        <div className={classes.mapContainer}>
          <Map mapData={mapData} currentLocation={this.currentLocation} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MapSection);
