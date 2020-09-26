import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

import Map from "./Map";
import DisplayPanels from "./DisplayPanels";

import styles from "../styles/MapSection";

class MapSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      confirmed: "-",
      deaths: "-",
      recovered: "-",
      active: "-",
    };
    this.currentLocation = this.currentLocation.bind(this);
  }

  currentLocation(location) {
    const stateName = location.replace(" & ", " and ");

    const [updatedData] = this.props.data.filter(
      (el) => el.state === stateName
    );

    try {
      this.setState({
        ...updatedData,
        deltaactive:
          Number(updatedData.deltaconfirmed) -
          (Number(updatedData.deltarecovered) +
            Number(updatedData.deltadeaths)),
      });
    } catch (error) {}
  }

  render() {
    const { classes, mapData, isDarkMode } = this.props;
    const {
      confirmed,
      deaths,
      recovered,
      active,
      state,
      deltaconfirmed,
      deltadeaths,
      deltarecovered,
      deltaactive,
    } = this.state;

    return (
      <div className={classes.mainContainer}>
        <h4 className={classes.heading}>State/UT: {state}</h4>
        <p className={classes.para}>
          hover over the states in the map to view the stats
        </p>
        <div className={classes.container}>
          <div className={classes.panelsContainer}>
            <div className={classes.singlePanel}>
              <DisplayPanels
                title="Confirmed"
                number={confirmed}
                isDarkMode={isDarkMode}
                dataChange={deltaconfirmed}
                isMiniPanel={true}
              />
            </div>
            <div className={classes.singlePanel}>
              <DisplayPanels
                title="Active"
                number={active}
                isDarkMode={isDarkMode}
                dataChange={deltaactive}
                isMiniPanel={true}
              />
            </div>
            <div className={classes.singlePanel}>
              <DisplayPanels
                title="Recovered"
                number={recovered}
                isDarkMode={isDarkMode}
                dataChange={deltarecovered}
                isMiniPanel={true}
              />
            </div>
            <div className={classes.singlePanel}>
              <DisplayPanels
                title="Deceased"
                number={deaths}
                isDarkMode={isDarkMode}
                dataChange={deltadeaths}
                isMiniPanel={true}
              />
            </div>
          </div>
          <div className={classes.mapContainer}>
            <Map mapData={mapData} currentLocation={this.currentLocation} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MapSection);
