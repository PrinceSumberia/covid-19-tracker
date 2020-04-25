import colors from "../constants/colors";

export default {
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
    padding: "4rem",
    flexDirection: "column",
    justifyContent: "center",
  },
  contentArea: {
    display: "flex",
  },
  mapArea: {
    flex: "1",
  },
  chartArea: {
    minWidth: "50%",
    display: "flex",
    justifyContent: "center",
  },
  tableContainer: {
    padding: "2rem",
    margin: "5rem 0",
  },

  tableHeading: {
    textAlign: "center",
    margin: "4rem 0",
    fontSize: "3rem",
    // textTransform: "uppercase",
  },

  tinyChartArea: {
    display: "flex",
    flexWrap: "wrap",
    padding: "2rem",
    // flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "3rem",
  },
  tinyChart: {
    margin: "2rem",
    // padding: "2rem",
    "& h3": {
      textTransform: "capitalize",
      fontWeight: 500,

      textAlign: "center",
    },
  },
  tinych: {
    // backgroundColor: "rgba(129, 124, 155, 0.05)",
    borderRadius: "2rem",
    marginBottom: "2rem",
    padding: "2rem",
  },
};
