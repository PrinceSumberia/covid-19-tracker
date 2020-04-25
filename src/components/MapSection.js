import React, { Component } from "react";
import DisplayPanels from "./DisplayPanels";
import Map from "./Map/Map";
import { withStyles } from "@material-ui/styles";

const styles = {
  mainContainer: {
    backgroundColor: "rgba(129, 124, 155, 0.05)",
    padding: "7rem 3rem",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
  },
  para: {
    marginBottom: "3rem",
    color: "#bbb",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mapContainer: {
    flex: "1",
  },
  panelsContainer: {
    display: "flex",
    flex: "0 0 30%",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
  },
  singlePanel: {
    width: "50%",
  },
};

class MapSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      confirmed: "-",
      deaths: "-",
      recovered: "-",
      active: "-",
      changed: {
        title: "",
        confirmed: "-",
        deaths: "-",
        recovered: "-",
        active: "-",
      },
    };
    this.currentLocation = this.currentLocation.bind(this);
  }

  currentLocation(location) {
    const stateName = location.replace(" & ", " and ");
    const data = this.props.data.slice(-1)[0].regional;
    const previousData = this.props.data.slice(-2, -1)[0].regional;

    console.log(data);
    console.log(previousData);

    const updatedData = data.filter((el) => el.loc === stateName);
    const previousUpdatedData = previousData.filter(
      (el) => el.loc === stateName
    );

    if (updatedData[0]) {
      this.setState({
        title: stateName,
        confirmed: updatedData[0].totalConfirmed,
        deaths: updatedData[0].deaths,
        recovered: updatedData[0].discharged,
        active:
          updatedData[0].totalConfirmed -
          (updatedData[0].discharged + updatedData[0].deaths),
        changed: {
          confirmed:
            updatedData[0].totalConfirmed -
            previousUpdatedData[0].totalConfirmed,
          deaths: updatedData[0].deaths - previousUpdatedData[0].deaths,
          recovered:
            updatedData[0].discharged - previousUpdatedData[0].discharged,
          active:
            updatedData[0].totalConfirmed -
            (updatedData[0].discharged + updatedData[0].deaths) -
            (previousUpdatedData[0].totalConfirmed -
              (previousUpdatedData[0].discharged +
                previousUpdatedData[0].deaths)),
        },
      });
    } else {
      this.setState({
        title: stateName,
        confirmed: "NA",
        deaths: "NA",
        recovered: "NA",
        active: "NA",
      });
    }
  }

  render() {
    const { classes, mapData, isDarkMode } = this.props;
    const { confirmed, deaths, recovered, active, title, changed } = this.state;
    return (
      <div className={classes.mainContainer}>
        <h4 className={classes.heading}>State/UT: {title}</h4>
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
                dataChange={changed.confirmed}
                isMiniPanel={true}
              />
            </div>
            <div className={classes.singlePanel}>
              <DisplayPanels
                title="Active"
                number={active}
                isDarkMode={isDarkMode}
                dataChange={changed.active}
                isMiniPanel={true}
              />
            </div>
            <div className={classes.singlePanel}>
              <DisplayPanels
                title="Recovered"
                number={recovered}
                isDarkMode={isDarkMode}
                dataChange={changed.recovered}
                isMiniPanel={true}
              />
            </div>
            <div className={classes.singlePanel}>
              <DisplayPanels
                title="Deceased"
                number={deaths}
                isDarkMode={isDarkMode}
                dataChange={changed.deaths}
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
